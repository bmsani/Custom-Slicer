"use strict";

import powerbi from "powerbi-visuals-api";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import ISelectionId = powerbi.visuals.ISelectionId;
import DataViewCategoryColumn = powerbi.DataViewCategoryColumn;
import ISandboxExtendedColorPalette = powerbi.extensibility.ISandboxExtendedColorPalette;
import Fill = powerbi.Fill;
import DataViewObject = powerbi.DataViewObject;

export interface IValue {
  valueName: string;
  color: string;
  selectionId: ISelectionId;
}
export interface VData {
  values: IValue[];
  table: string;
  column: string;
}

export function transformData(options: VisualUpdateOptions, host: IVisualHost): VData {
  let data: VData;
  try {
    const categories = options.dataViews[0].categorical.categories[0];
    const queryName = categories.source.queryName;
    const dotIx = queryName?.indexOf(".");
    const colorPalette: ISandboxExtendedColorPalette = host.colorPalette;
    let values: IValue[] = []; // Initialize values as an empty array

    categories.values.forEach((value, index) => {
      const color: string = getColumnColorByIndex(categories, index, colorPalette);
      const selectionId: ISelectionId = host.createSelectionIdBuilder().withCategory(categories, index).createSelectionId();
      const singleValue: IValue = {
        valueName: `${value}`,
        color: `${color}`,
        selectionId,
      };
      values.push(singleValue);
    });

    data = {
      values: values, // Assign the array of values to the 'values' property
      table: queryName?.substring(0, dotIx),
      column: queryName?.substring(dotIx + 1),
    };
  } catch (error) {
    data = {
      values: [
        {
          valueName: ``,
          color: ``,
          selectionId: null,
        },
      ],
      table: "",
      column: "",
    };
  }
  return data;
}

function getColumnColorByIndex(category: DataViewCategoryColumn, index: number, colorPalette: ISandboxExtendedColorPalette): string {
  if (colorPalette.isHighContrast) {
    return colorPalette.background.value;
  }

  const defaultColor = colorPalette.getColor(`${category.values[index]}`).value;
  const defaultColorFill = {
    solid: {
      color: defaultColor,
    },
  };

  return getCategoricalObjectValue<Fill>(category, index, "colorSelector", "lineColor", defaultColorFill).solid.color;
}

export function getCategoricalObjectValue<T>(
  category: DataViewCategoryColumn,
  index: number,
  objectName: string,
  propertyName: string,
  defaultValue: T
): T {
  let categoryObjects = category.objects;

  if (categoryObjects) {
    let categoryObject: DataViewObject = categoryObjects[index];
    if (categoryObject) {
      let object = categoryObject[objectName];
      if (object) {
        let property: T = <T>object[propertyName];
        if (property !== undefined) {
          return property;
        }
      }
    }
  }
  return defaultValue;
}

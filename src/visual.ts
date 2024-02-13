/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
"use strict";

import powerbi from "powerbi-visuals-api";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import "./../style/visual.less";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import VisualTooltipDataItem = powerbi.extensibility.VisualTooltipDataItem;

import { createTooltipServiceWrapper, ITooltipServiceWrapper } from "powerbi-visuals-utils-tooltiputils";
import { IBasicFilter, FilterType } from "powerbi-models";
import { setStyle } from "./setStyle";
import { VisualFormattingSettingsModel } from "./settings";
import { IValue, transformData, VData } from "./transformdata";
import * as d3 from "d3";

export class Visual implements IVisual {
  private target: HTMLElement;
  private formattingSettings: VisualFormattingSettingsModel;
  private formattingSettingsService: FormattingSettingsService;
  private data: VData;
  private container: HTMLElement;
  private slicerItems: HTMLElement;
  private host: IVisualHost;
  private basicFilter: IBasicFilter;
  private tooltipServiceWrapper: ITooltipServiceWrapper;

  constructor(options: VisualConstructorOptions) {
    console.log("Visual constructor", options);
    this.host = options.host;
    this.basicFilter = null;
    this.formattingSettingsService = new FormattingSettingsService();
    this.target = options.element;
    this.tooltipServiceWrapper = createTooltipServiceWrapper(this.host.tooltipService, options.element);
    this.data = null;
    if (document) {
      this.container = document.createElement("div");
      this.container.classList.add("slicer-container");
      this.slicerItems = document.createElement("ul");
      this.container.appendChild(this.slicerItems);
      this.target.appendChild(this.container);
    }
  }

  public update(options: VisualUpdateOptions) {
    this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettingsModel, options.dataViews);
    const formatSettings = this.formattingSettings.dataPointCard;
    setStyle(this.formattingSettings);
    this.data = transformData(options, this.host);
    this.formattingSettings.populateColorSelector(this.data.values);

    const values = this.data.values;
    while (this.slicerItems.firstChild) {
      this.slicerItems.firstChild.remove();
    }

    this.basicFilter = {
      $schema: "https://powerbi.com/product/schema#basic",
      target: {
        table: this.data.table,
        column: this.data.column,
      },
      operator: "In",
      values: null,
      filterType: FilterType.Basic,
    };

    this.addItem(formatSettings.allSelectedLabel.value, formatSettings.defaultColor.value.value);

    if (values) {
      values.forEach((value, index) => {
        this.addItem(value.valueName, value.color);
        this.tooltipServiceWrapper.addTooltip(
          d3.select((this.slicerItems.childNodes[index + 1] as Element).querySelector("span")), // Select the span inside the current slicer item
          () => this.getTooltipData(value),
          () => value.selectionId
        );
      });
    }
  }

  private addItem(txt: string, color: string): void {
    let slicerItem = document.createElement("li");
    let itemContainer = document.createElement("span");
    itemContainer.innerText = txt;
    if (txt != this.formattingSettings.dataPointCard.allSelectedLabel.value) {
      itemContainer.onclick = () => {
        this.basicFilter.values = [txt];
        this.host.applyJsonFilter(this.basicFilter, "general", "filter", powerbi.FilterAction.merge);
      };
    } else {
      itemContainer.onclick = () => {
        this.host.applyJsonFilter(this.basicFilter, "general", "filter", powerbi.FilterAction.remove);
      };
    }
    itemContainer.style.color = color;

    slicerItem.appendChild(itemContainer);
    this.slicerItems.appendChild(slicerItem);
  }

  private getTooltipData(value: IValue): VisualTooltipDataItem[] {
    console.log(value.valueName);
    return [
      {
        displayName: value.valueName,
        value: value.valueName,
        color: value.color,
      },
    ];
  }

  /**
   * Returns properties pane formatting model content hierarchies, properties and latest formatting values, Then populate properties pane.
   * This method is called once every time we open properties pane or when the user edit any format property.
   */
  public getFormattingModel(): powerbi.visuals.FormattingModel {
    return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
  }
}

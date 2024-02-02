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

import { setStyle } from "./setStyle";
import { VisualFormattingSettingsModel } from "./settings";
import { transformData, VData } from "./transformdata";

export class Visual implements IVisual {
  private target: HTMLElement;
  private formattingSettings: VisualFormattingSettingsModel;
  private formattingSettingsService: FormattingSettingsService;
  private data: VData;
  private container: HTMLElement;
  private slicerItems: HTMLElement;
  private host: IVisualHost;

  constructor(options: VisualConstructorOptions) {
    console.log("Visual constructor", options);
    this.host = options.host;
    this.formattingSettingsService = new FormattingSettingsService();
    this.target = options.element;
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

    this.addItem(formatSettings.allSelectedLabel.value, formatSettings.defaultColor.value.value);

    if (values) {
      values.forEach((value, index) => {
        this.addItem(value.valueName, value.color);
      });
    }
  }

  private addItem(txt: string, color: string): void {
    let slicerItem = document.createElement("li");
    let itemContainer = document.createElement("span");
    itemContainer.innerText = txt;
    itemContainer.style.color = color;
    slicerItem.appendChild(itemContainer);
    this.slicerItems.appendChild(slicerItem);
  }

  /**
   * Returns properties pane formatting model content hierarchies, properties and latest formatting values, Then populate properties pane.
   * This method is called once every time we open properties pane or when the user edit any format property.
   */
  public getFormattingModel(): powerbi.visuals.FormattingModel {
    return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
  }
}

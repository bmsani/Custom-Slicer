/*
 *  Power BI Visualizations
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

import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
import { NumUpDown } from "powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents";

/**
 * Data Point Formatting Card
 */

class DataPointCardSettings extends FormattingSettingsCard {
  allSelectedLabel = new formattingSettings.TextInput({
    name: "allSelectedLabel",
    displayName: "All Selected Label",
    placeholder: "Enter text",
    value: "All",
  });

  defaultColor = new formattingSettings.ColorPicker({
    name: "defaultColor",
    displayName: "Default color",
    value: { value: "#000000" },
  });

  fontFamily = new formattingSettings.FontPicker({
    name: "fontFamily",
    displayName: "Font Family",
    value: "Arial, sans-serif",
  });

  fontSize = new formattingSettings.NumUpDown({
    name: "fontSize",
    displayName: "Text Size",
    value: 16,
  });

  textAlign = new formattingSettings.AlignmentGroup({
    name: "textAlign",
    displayName: "Line Alignment",
    mode: powerbi.visuals.AlignmentGroupMode.Horizonal,
    value: "center",
  });

  paddingBottom = new formattingSettings.NumUpDown({
    name: "paddingBottom",
    displayName: "Padding Bottom",
    value: 2,
  });

  marginBottom = new formattingSettings.NumUpDown({
    name: "marginBottom",
    displayName: "Margin Bottom",
    value: 6,
  });

  underlineWidth = new formattingSettings.Slider({
    name: "underlineWidth",
    displayName: "Underline Width",
    value: 10,
  });

  name: string = "slicerSettings";
  displayName: string = "SlicerSettings";
  slices: Array<FormattingSettingsSlice> = [
    this.allSelectedLabel,
    this.defaultColor,
    this.fontFamily,
    this.fontSize,
    this.textAlign,
    this.paddingBottom,
    this.marginBottom,
    this.underlineWidth,
  ];
}

/**
 * visual settings model class
 *
 */
export class VisualFormattingSettingsModel extends FormattingSettingsModel {
  // Create formatting settings model formatting cards
  dataPointCard = new DataPointCardSettings();

  cards = [this.dataPointCard];
}

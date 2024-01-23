"use strict";

import { VisualFormattingSettingsModel } from "./settings";

export function setStyle(s: VisualFormattingSettingsModel): void {
  console.log(s.dataPointCard.defaultColor.value);
  const style = document.documentElement.style;
  style.setProperty("--default-color", s.dataPointCard.defaultColor.value.value);
  style.setProperty("--text-align", `${s.dataPointCard.textAlign.value}`);
  style.setProperty("--padding-bottom", `${s.dataPointCard.paddingBottom.value}px`);
  style.setProperty("--margin-bottom", `${s.dataPointCard.marginBottom.value}px`);
  style.setProperty("--font-family", `${s.dataPointCard.fontFamily.value}`);
  style.setProperty("--font-size", `${s.dataPointCard.fontSize.value}pt`);
  style.setProperty("--underline-width", `${s.dataPointCard.underlineWidth.value}px`);
}

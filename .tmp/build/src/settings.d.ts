import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import { IValue } from "./transformdata";
import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
/**
 * Data Point Formatting Card
 */
declare class DataPointCardSettings extends FormattingSettingsCard {
    allSelectedLabel: formattingSettings.TextInput;
    fontFamily: formattingSettings.FontPicker;
    fontSize: formattingSettings.NumUpDown;
    defaultColor: formattingSettings.ColorPicker;
    textAlign: formattingSettings.AlignmentGroup;
    paddingBottom: formattingSettings.NumUpDown;
    marginBottom: formattingSettings.NumUpDown;
    underlineWidth: formattingSettings.Slider;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
declare class ColorSelectorCardSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
 * visual settings model class
 *
 */
export declare class VisualFormattingSettingsModel extends FormattingSettingsModel {
    dataPointCard: DataPointCardSettings;
    colorSelector: ColorSelectorCardSettings;
    cards: (DataPointCardSettings | ColorSelectorCardSettings)[];
    populateColorSelector(dataPoints: IValue[]): void;
}
export {};

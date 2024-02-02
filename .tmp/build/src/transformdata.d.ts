import powerbi from "powerbi-visuals-api";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import ISelectionId = powerbi.visuals.ISelectionId;
import DataViewCategoryColumn = powerbi.DataViewCategoryColumn;
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
export declare function transformData(options: VisualUpdateOptions, host: IVisualHost): VData;
export declare function getCategoricalObjectValue<T>(category: DataViewCategoryColumn, index: number, objectName: string, propertyName: string, defaultValue: T): T;

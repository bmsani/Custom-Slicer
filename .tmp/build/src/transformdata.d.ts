import powerbi from "powerbi-visuals-api";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import PrimativeValue = powerbi.PrimitiveValue;
export interface VData {
    values: PrimativeValue[];
    table: string;
    column: string;
}
export declare function transformData(options: VisualUpdateOptions): VData;

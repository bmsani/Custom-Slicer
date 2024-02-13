var customSlicer8EF416FA305C44038B637FBD3BCB2A11_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7149:
/***/ (function(module) {

// powerbi-models v1.14.0
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_612__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextAlignment = exports.CommonErrorCodes = exports.BookmarksPlayMode = exports.ExportDataType = exports.QnaMode = exports.PageNavigationPosition = exports.BrowserPrintAdjustmentsMode = exports.AggregateFunction = exports.DataCacheMode = exports.CredentialType = exports.isPercentOfGrandTotal = exports.isColumnAggr = exports.isHierarchyLevelAggr = exports.isHierarchyLevel = exports.isColumn = exports.isMeasure = exports.getFilterType = exports.isBasicFilterWithKeys = exports.isFilterKeyColumnsTarget = exports.HierarchyFilter = exports.AdvancedFilter = exports.TupleFilter = exports.IdentityFilter = exports.BasicFilterWithKeys = exports.BasicFilter = exports.RelativeTimeFilter = exports.RelativeDateFilter = exports.TopNFilter = exports.IncludeExcludeFilter = exports.NotSupportedFilter = exports.Filter = exports.RelativeDateOperators = exports.RelativeDateFilterTimeUnit = exports.FilterType = exports.FiltersLevel = exports.FiltersOperations = exports.MenuLocation = exports.ContrastMode = exports.TokenType = exports.ViewMode = exports.Permissions = exports.SectionVisibility = exports.ReportAlignment = exports.HyperlinkClickBehavior = exports.LayoutType = exports.VisualContainerDisplayMode = exports.BackgroundType = exports.DisplayOption = exports.PageSizeType = exports.TraceType = void 0;
exports.validateVisualHeader = exports.validateExportDataRequest = exports.validateQnaInterpretInputData = exports.validateLoadQnaConfiguration = exports.validateSaveAsParameters = exports.validateUpdateFiltersRequest = exports.validateFilter = exports.validatePage = exports.validateTileLoad = exports.validateDashboardLoad = exports.validateQuickCreate = exports.validateCreateReport = exports.validatePaginatedReportLoad = exports.validateReportLoad = exports.validateMenuGroupExtension = exports.validateExtension = exports.validateCustomPageSize = exports.validateVisualizationsPane = exports.validateSyncSlicersPane = exports.validateSelectionPane = exports.validatePageNavigationPane = exports.validateFieldsPane = exports.validateFiltersPane = exports.validateBookmarksPane = exports.validatePanes = exports.validateSettings = exports.validateCaptureBookmarkRequest = exports.validateApplyBookmarkStateRequest = exports.validateApplyBookmarkByNameRequest = exports.validateAddBookmarkRequest = exports.validatePlayBookmarkRequest = exports.validateSlicerState = exports.validateSlicer = exports.validateVisualSelector = exports.isIExtensionArray = exports.isIExtensions = exports.isGroupedMenuExtension = exports.isFlatMenuExtension = exports.isReportFiltersArray = exports.isOnLoadFilters = exports.VisualDataRoleKindPreference = exports.VisualDataRoleKind = exports.CommandDisplayOption = exports.SlicerTargetSelector = exports.VisualTypeSelector = exports.VisualSelector = exports.PageSelector = exports.Selector = exports.SortDirection = exports.LegendPosition = void 0;
exports.validatePrintSettings = exports.validateZoomLevel = exports.validateCustomTheme = exports.validateCommandsSettings = exports.validateVisualSettings = void 0;
var validator_1 = __nested_webpack_require_612__(1);
var TraceType;
(function (TraceType) {
    TraceType[TraceType["Information"] = 0] = "Information";
    TraceType[TraceType["Verbose"] = 1] = "Verbose";
    TraceType[TraceType["Warning"] = 2] = "Warning";
    TraceType[TraceType["Error"] = 3] = "Error";
    TraceType[TraceType["ExpectedError"] = 4] = "ExpectedError";
    TraceType[TraceType["UnexpectedError"] = 5] = "UnexpectedError";
    TraceType[TraceType["Fatal"] = 6] = "Fatal";
})(TraceType = exports.TraceType || (exports.TraceType = {}));
var PageSizeType;
(function (PageSizeType) {
    PageSizeType[PageSizeType["Widescreen"] = 0] = "Widescreen";
    PageSizeType[PageSizeType["Standard"] = 1] = "Standard";
    PageSizeType[PageSizeType["Cortana"] = 2] = "Cortana";
    PageSizeType[PageSizeType["Letter"] = 3] = "Letter";
    PageSizeType[PageSizeType["Custom"] = 4] = "Custom";
    PageSizeType[PageSizeType["Mobile"] = 5] = "Mobile";
})(PageSizeType = exports.PageSizeType || (exports.PageSizeType = {}));
var DisplayOption;
(function (DisplayOption) {
    DisplayOption[DisplayOption["FitToPage"] = 0] = "FitToPage";
    DisplayOption[DisplayOption["FitToWidth"] = 1] = "FitToWidth";
    DisplayOption[DisplayOption["ActualSize"] = 2] = "ActualSize";
})(DisplayOption = exports.DisplayOption || (exports.DisplayOption = {}));
var BackgroundType;
(function (BackgroundType) {
    BackgroundType[BackgroundType["Default"] = 0] = "Default";
    BackgroundType[BackgroundType["Transparent"] = 1] = "Transparent";
})(BackgroundType = exports.BackgroundType || (exports.BackgroundType = {}));
var VisualContainerDisplayMode;
(function (VisualContainerDisplayMode) {
    VisualContainerDisplayMode[VisualContainerDisplayMode["Visible"] = 0] = "Visible";
    VisualContainerDisplayMode[VisualContainerDisplayMode["Hidden"] = 1] = "Hidden";
})(VisualContainerDisplayMode = exports.VisualContainerDisplayMode || (exports.VisualContainerDisplayMode = {}));
var LayoutType;
(function (LayoutType) {
    LayoutType[LayoutType["Master"] = 0] = "Master";
    LayoutType[LayoutType["Custom"] = 1] = "Custom";
    LayoutType[LayoutType["MobilePortrait"] = 2] = "MobilePortrait";
    LayoutType[LayoutType["MobileLandscape"] = 3] = "MobileLandscape";
})(LayoutType = exports.LayoutType || (exports.LayoutType = {}));
var HyperlinkClickBehavior;
(function (HyperlinkClickBehavior) {
    HyperlinkClickBehavior[HyperlinkClickBehavior["Navigate"] = 0] = "Navigate";
    HyperlinkClickBehavior[HyperlinkClickBehavior["NavigateAndRaiseEvent"] = 1] = "NavigateAndRaiseEvent";
    HyperlinkClickBehavior[HyperlinkClickBehavior["RaiseEvent"] = 2] = "RaiseEvent";
})(HyperlinkClickBehavior = exports.HyperlinkClickBehavior || (exports.HyperlinkClickBehavior = {}));
var ReportAlignment;
(function (ReportAlignment) {
    ReportAlignment[ReportAlignment["Left"] = 0] = "Left";
    ReportAlignment[ReportAlignment["Center"] = 1] = "Center";
    ReportAlignment[ReportAlignment["Right"] = 2] = "Right";
    ReportAlignment[ReportAlignment["None"] = 3] = "None";
})(ReportAlignment = exports.ReportAlignment || (exports.ReportAlignment = {}));
var SectionVisibility;
(function (SectionVisibility) {
    SectionVisibility[SectionVisibility["AlwaysVisible"] = 0] = "AlwaysVisible";
    SectionVisibility[SectionVisibility["HiddenInViewMode"] = 1] = "HiddenInViewMode";
})(SectionVisibility = exports.SectionVisibility || (exports.SectionVisibility = {}));
var Permissions;
(function (Permissions) {
    Permissions[Permissions["Read"] = 0] = "Read";
    Permissions[Permissions["ReadWrite"] = 1] = "ReadWrite";
    Permissions[Permissions["Copy"] = 2] = "Copy";
    Permissions[Permissions["Create"] = 4] = "Create";
    Permissions[Permissions["All"] = 7] = "All";
})(Permissions = exports.Permissions || (exports.Permissions = {}));
var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["View"] = 0] = "View";
    ViewMode[ViewMode["Edit"] = 1] = "Edit";
})(ViewMode = exports.ViewMode || (exports.ViewMode = {}));
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Aad"] = 0] = "Aad";
    TokenType[TokenType["Embed"] = 1] = "Embed";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
var ContrastMode;
(function (ContrastMode) {
    ContrastMode[ContrastMode["None"] = 0] = "None";
    ContrastMode[ContrastMode["HighContrast1"] = 1] = "HighContrast1";
    ContrastMode[ContrastMode["HighContrast2"] = 2] = "HighContrast2";
    ContrastMode[ContrastMode["HighContrastBlack"] = 3] = "HighContrastBlack";
    ContrastMode[ContrastMode["HighContrastWhite"] = 4] = "HighContrastWhite";
})(ContrastMode = exports.ContrastMode || (exports.ContrastMode = {}));
var MenuLocation;
(function (MenuLocation) {
    MenuLocation[MenuLocation["Bottom"] = 0] = "Bottom";
    MenuLocation[MenuLocation["Top"] = 1] = "Top";
})(MenuLocation = exports.MenuLocation || (exports.MenuLocation = {}));
var FiltersOperations;
(function (FiltersOperations) {
    FiltersOperations[FiltersOperations["RemoveAll"] = 0] = "RemoveAll";
    FiltersOperations[FiltersOperations["ReplaceAll"] = 1] = "ReplaceAll";
    FiltersOperations[FiltersOperations["Add"] = 2] = "Add";
    FiltersOperations[FiltersOperations["Replace"] = 3] = "Replace";
})(FiltersOperations = exports.FiltersOperations || (exports.FiltersOperations = {}));
var FiltersLevel;
(function (FiltersLevel) {
    FiltersLevel[FiltersLevel["Report"] = 0] = "Report";
    FiltersLevel[FiltersLevel["Page"] = 1] = "Page";
    FiltersLevel[FiltersLevel["Visual"] = 2] = "Visual";
})(FiltersLevel = exports.FiltersLevel || (exports.FiltersLevel = {}));
var FilterType;
(function (FilterType) {
    FilterType[FilterType["Advanced"] = 0] = "Advanced";
    FilterType[FilterType["Basic"] = 1] = "Basic";
    FilterType[FilterType["Unknown"] = 2] = "Unknown";
    FilterType[FilterType["IncludeExclude"] = 3] = "IncludeExclude";
    FilterType[FilterType["RelativeDate"] = 4] = "RelativeDate";
    FilterType[FilterType["TopN"] = 5] = "TopN";
    FilterType[FilterType["Tuple"] = 6] = "Tuple";
    FilterType[FilterType["RelativeTime"] = 7] = "RelativeTime";
    FilterType[FilterType["Identity"] = 8] = "Identity";
    FilterType[FilterType["Hierarchy"] = 9] = "Hierarchy";
})(FilterType = exports.FilterType || (exports.FilterType = {}));
var RelativeDateFilterTimeUnit;
(function (RelativeDateFilterTimeUnit) {
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Days"] = 0] = "Days";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Weeks"] = 1] = "Weeks";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["CalendarWeeks"] = 2] = "CalendarWeeks";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Months"] = 3] = "Months";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["CalendarMonths"] = 4] = "CalendarMonths";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Years"] = 5] = "Years";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["CalendarYears"] = 6] = "CalendarYears";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Minutes"] = 7] = "Minutes";
    RelativeDateFilterTimeUnit[RelativeDateFilterTimeUnit["Hours"] = 8] = "Hours";
})(RelativeDateFilterTimeUnit = exports.RelativeDateFilterTimeUnit || (exports.RelativeDateFilterTimeUnit = {}));
var RelativeDateOperators;
(function (RelativeDateOperators) {
    RelativeDateOperators[RelativeDateOperators["InLast"] = 0] = "InLast";
    RelativeDateOperators[RelativeDateOperators["InThis"] = 1] = "InThis";
    RelativeDateOperators[RelativeDateOperators["InNext"] = 2] = "InNext";
})(RelativeDateOperators = exports.RelativeDateOperators || (exports.RelativeDateOperators = {}));
var Filter = /** @class */ (function () {
    function Filter(target, filterType) {
        this.target = target;
        this.filterType = filterType;
    }
    Filter.prototype.toJSON = function () {
        var filter = {
            $schema: this.schemaUrl,
            target: this.target,
            filterType: this.filterType
        };
        // Add displaySettings only when defined
        if (this.displaySettings !== undefined) {
            filter.displaySettings = this.displaySettings;
        }
        return filter;
    };
    return Filter;
}());
exports.Filter = Filter;
var NotSupportedFilter = /** @class */ (function (_super) {
    __extends(NotSupportedFilter, _super);
    function NotSupportedFilter(target, message, notSupportedTypeName) {
        var _this = _super.call(this, target, FilterType.Unknown) || this;
        _this.message = message;
        _this.notSupportedTypeName = notSupportedTypeName;
        _this.schemaUrl = NotSupportedFilter.schemaUrl;
        return _this;
    }
    NotSupportedFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.message = this.message;
        filter.notSupportedTypeName = this.notSupportedTypeName;
        return filter;
    };
    NotSupportedFilter.schemaUrl = "http://powerbi.com/product/schema#notSupported";
    return NotSupportedFilter;
}(Filter));
exports.NotSupportedFilter = NotSupportedFilter;
var IncludeExcludeFilter = /** @class */ (function (_super) {
    __extends(IncludeExcludeFilter, _super);
    function IncludeExcludeFilter(target, isExclude, values) {
        var _this = _super.call(this, target, FilterType.IncludeExclude) || this;
        _this.values = values;
        _this.isExclude = isExclude;
        _this.schemaUrl = IncludeExcludeFilter.schemaUrl;
        return _this;
    }
    IncludeExcludeFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.isExclude = this.isExclude;
        filter.values = this.values;
        return filter;
    };
    IncludeExcludeFilter.schemaUrl = "http://powerbi.com/product/schema#includeExclude";
    return IncludeExcludeFilter;
}(Filter));
exports.IncludeExcludeFilter = IncludeExcludeFilter;
var TopNFilter = /** @class */ (function (_super) {
    __extends(TopNFilter, _super);
    function TopNFilter(target, operator, itemCount, orderBy) {
        var _this = _super.call(this, target, FilterType.TopN) || this;
        _this.operator = operator;
        _this.itemCount = itemCount;
        _this.schemaUrl = TopNFilter.schemaUrl;
        _this.orderBy = orderBy;
        return _this;
    }
    TopNFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.operator = this.operator;
        filter.itemCount = this.itemCount;
        filter.orderBy = this.orderBy;
        return filter;
    };
    TopNFilter.schemaUrl = "http://powerbi.com/product/schema#topN";
    return TopNFilter;
}(Filter));
exports.TopNFilter = TopNFilter;
var RelativeDateFilter = /** @class */ (function (_super) {
    __extends(RelativeDateFilter, _super);
    function RelativeDateFilter(target, operator, timeUnitsCount, timeUnitType, includeToday) {
        var _this = _super.call(this, target, FilterType.RelativeDate) || this;
        _this.operator = operator;
        _this.timeUnitsCount = timeUnitsCount;
        _this.timeUnitType = timeUnitType;
        _this.includeToday = includeToday;
        _this.schemaUrl = RelativeDateFilter.schemaUrl;
        return _this;
    }
    RelativeDateFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.operator = this.operator;
        filter.timeUnitsCount = this.timeUnitsCount;
        filter.timeUnitType = this.timeUnitType;
        filter.includeToday = this.includeToday;
        return filter;
    };
    RelativeDateFilter.schemaUrl = "http://powerbi.com/product/schema#relativeDate";
    return RelativeDateFilter;
}(Filter));
exports.RelativeDateFilter = RelativeDateFilter;
var RelativeTimeFilter = /** @class */ (function (_super) {
    __extends(RelativeTimeFilter, _super);
    function RelativeTimeFilter(target, operator, timeUnitsCount, timeUnitType) {
        var _this = _super.call(this, target, FilterType.RelativeTime) || this;
        _this.operator = operator;
        _this.timeUnitsCount = timeUnitsCount;
        _this.timeUnitType = timeUnitType;
        _this.schemaUrl = RelativeTimeFilter.schemaUrl;
        return _this;
    }
    RelativeTimeFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.operator = this.operator;
        filter.timeUnitsCount = this.timeUnitsCount;
        filter.timeUnitType = this.timeUnitType;
        return filter;
    };
    RelativeTimeFilter.schemaUrl = "http://powerbi.com/product/schema#relativeTime";
    return RelativeTimeFilter;
}(Filter));
exports.RelativeTimeFilter = RelativeTimeFilter;
var BasicFilter = /** @class */ (function (_super) {
    __extends(BasicFilter, _super);
    function BasicFilter(target, operator) {
        var values = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            values[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this, target, FilterType.Basic) || this;
        _this.operator = operator;
        _this.schemaUrl = BasicFilter.schemaUrl;
        if (values.length === 0 && operator !== "All") {
            throw new Error("values must be a non-empty array unless your operator is \"All\".");
        }
        /**
         * Accept values as array instead of as individual arguments
         * new BasicFilter('a', 'b', 1, 2);
         * new BasicFilter('a', 'b', [1,2]);
         */
        if (Array.isArray(values[0])) {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            _this.values = values[0];
        }
        else {
            _this.values = values;
        }
        return _this;
    }
    BasicFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.operator = this.operator;
        filter.values = this.values;
        filter.requireSingleSelection = !!this.requireSingleSelection;
        return filter;
    };
    BasicFilter.schemaUrl = "http://powerbi.com/product/schema#basic";
    return BasicFilter;
}(Filter));
exports.BasicFilter = BasicFilter;
var BasicFilterWithKeys = /** @class */ (function (_super) {
    __extends(BasicFilterWithKeys, _super);
    function BasicFilterWithKeys(target, operator, values, keyValues) {
        var _this = _super.call(this, target, operator, values) || this;
        _this.keyValues = keyValues;
        _this.target = target;
        var numberOfKeys = target.keys ? target.keys.length : 0;
        if (numberOfKeys > 0 && !keyValues) {
            throw new Error("You should pass the values to be filtered for each key. You passed: no values and ".concat(numberOfKeys, " keys"));
        }
        if (numberOfKeys === 0 && keyValues && keyValues.length > 0) {
            throw new Error("You passed key values but your target object doesn't contain the keys to be filtered");
        }
        for (var _i = 0, _a = _this.keyValues; _i < _a.length; _i++) {
            var keyValue = _a[_i];
            if (keyValue) {
                var lengthOfArray = keyValue.length;
                if (lengthOfArray !== numberOfKeys) {
                    throw new Error("Each tuple of key values should contain a value for each of the keys. You passed: ".concat(lengthOfArray, " values and ").concat(numberOfKeys, " keys"));
                }
            }
        }
        return _this;
    }
    BasicFilterWithKeys.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.keyValues = this.keyValues;
        return filter;
    };
    return BasicFilterWithKeys;
}(BasicFilter));
exports.BasicFilterWithKeys = BasicFilterWithKeys;
var IdentityFilter = /** @class */ (function (_super) {
    __extends(IdentityFilter, _super);
    function IdentityFilter(target, operator) {
        var _this = _super.call(this, target, FilterType.Identity) || this;
        _this.operator = operator;
        _this.schemaUrl = IdentityFilter.schemaUrl;
        return _this;
    }
    IdentityFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.operator = this.operator;
        filter.target = this.target;
        return filter;
    };
    IdentityFilter.schemaUrl = "http://powerbi.com/product/schema#identity";
    return IdentityFilter;
}(Filter));
exports.IdentityFilter = IdentityFilter;
var TupleFilter = /** @class */ (function (_super) {
    __extends(TupleFilter, _super);
    function TupleFilter(target, operator, values) {
        var _this = _super.call(this, target, FilterType.Tuple) || this;
        _this.operator = operator;
        _this.schemaUrl = TupleFilter.schemaUrl;
        _this.values = values;
        return _this;
    }
    TupleFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.operator = this.operator;
        filter.values = this.values;
        filter.target = this.target;
        return filter;
    };
    TupleFilter.schemaUrl = "http://powerbi.com/product/schema#tuple";
    return TupleFilter;
}(Filter));
exports.TupleFilter = TupleFilter;
var AdvancedFilter = /** @class */ (function (_super) {
    __extends(AdvancedFilter, _super);
    function AdvancedFilter(target, logicalOperator) {
        var conditions = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            conditions[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this, target, FilterType.Advanced) || this;
        _this.schemaUrl = AdvancedFilter.schemaUrl;
        // Guard statements
        if (typeof logicalOperator !== "string" || logicalOperator.length === 0) {
            // TODO: It would be nicer to list out the possible logical operators.
            throw new Error("logicalOperator must be a valid operator, You passed: ".concat(logicalOperator));
        }
        _this.logicalOperator = logicalOperator;
        var extractedConditions;
        /**
         * Accept conditions as array instead of as individual arguments
         * new AdvancedFilter('a', 'b', "And", { value: 1, operator: "Equals" }, { value: 2, operator: "IsGreaterThan" });
         * new AdvancedFilter('a', 'b', "And", [{ value: 1, operator: "Equals" }, { value: 2, operator: "IsGreaterThan" }]);
         */
        if (Array.isArray(conditions[0])) {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            extractedConditions = conditions[0];
        }
        else {
            extractedConditions = conditions;
        }
        if (extractedConditions.length > 2) {
            throw new Error("AdvancedFilters may not have more than two conditions. You passed: ".concat(conditions.length));
        }
        if (extractedConditions.length === 1 && logicalOperator !== "And") {
            throw new Error("Logical Operator must be \"And\" when there is only one condition provided");
        }
        _this.conditions = extractedConditions;
        return _this;
    }
    AdvancedFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.logicalOperator = this.logicalOperator;
        filter.conditions = this.conditions;
        return filter;
    };
    AdvancedFilter.schemaUrl = "http://powerbi.com/product/schema#advanced";
    return AdvancedFilter;
}(Filter));
exports.AdvancedFilter = AdvancedFilter;
var HierarchyFilter = /** @class */ (function (_super) {
    __extends(HierarchyFilter, _super);
    function HierarchyFilter(target, hierarchyData) {
        var _this = _super.call(this, target, FilterType.Hierarchy) || this;
        _this.schemaUrl = HierarchyFilter.schemaUrl;
        _this.hierarchyData = hierarchyData;
        return _this;
    }
    HierarchyFilter.prototype.toJSON = function () {
        var filter = _super.prototype.toJSON.call(this);
        filter.hierarchyData = this.hierarchyData;
        filter.target = this.target;
        return filter;
    };
    HierarchyFilter.schemaUrl = "http://powerbi.com/product/schema#hierarchy";
    return HierarchyFilter;
}(Filter));
exports.HierarchyFilter = HierarchyFilter;
function isFilterKeyColumnsTarget(target) {
    return isColumn(target) && !!target.keys;
}
exports.isFilterKeyColumnsTarget = isFilterKeyColumnsTarget;
function isBasicFilterWithKeys(filter) {
    return getFilterType(filter) === FilterType.Basic && !!filter.keyValues;
}
exports.isBasicFilterWithKeys = isBasicFilterWithKeys;
function getFilterType(filter) {
    if (filter.filterType) {
        return filter.filterType;
    }
    var basicFilter = filter;
    var advancedFilter = filter;
    if ((typeof basicFilter.operator === "string")
        && (Array.isArray(basicFilter.values))) {
        return FilterType.Basic;
    }
    else if ((typeof advancedFilter.logicalOperator === "string")
        && (Array.isArray(advancedFilter.conditions))) {
        return FilterType.Advanced;
    }
    else {
        return FilterType.Unknown;
    }
}
exports.getFilterType = getFilterType;
function isMeasure(arg) {
    return arg.table !== undefined && arg.measure !== undefined;
}
exports.isMeasure = isMeasure;
function isColumn(arg) {
    return !!(arg.table && arg.column && !arg.aggregationFunction);
}
exports.isColumn = isColumn;
function isHierarchyLevel(arg) {
    return !!(arg.table && arg.hierarchy && arg.hierarchyLevel && !arg.aggregationFunction);
}
exports.isHierarchyLevel = isHierarchyLevel;
function isHierarchyLevelAggr(arg) {
    return !!(arg.table && arg.hierarchy && arg.hierarchyLevel && arg.aggregationFunction);
}
exports.isHierarchyLevelAggr = isHierarchyLevelAggr;
function isColumnAggr(arg) {
    return !!(arg.table && arg.column && arg.aggregationFunction);
}
exports.isColumnAggr = isColumnAggr;
function isPercentOfGrandTotal(arg) {
    return !!arg.percentOfGrandTotal;
}
exports.isPercentOfGrandTotal = isPercentOfGrandTotal;
var CredentialType;
(function (CredentialType) {
    CredentialType[CredentialType["NoConnection"] = 0] = "NoConnection";
    CredentialType[CredentialType["OnBehalfOf"] = 1] = "OnBehalfOf";
    CredentialType[CredentialType["Anonymous"] = 2] = "Anonymous";
})(CredentialType = exports.CredentialType || (exports.CredentialType = {}));
var DataCacheMode;
(function (DataCacheMode) {
    DataCacheMode[DataCacheMode["Import"] = 0] = "Import";
    DataCacheMode[DataCacheMode["DirectQuery"] = 1] = "DirectQuery";
})(DataCacheMode = exports.DataCacheMode || (exports.DataCacheMode = {}));
var AggregateFunction;
(function (AggregateFunction) {
    AggregateFunction[AggregateFunction["Default"] = 1] = "Default";
    AggregateFunction[AggregateFunction["None"] = 2] = "None";
    AggregateFunction[AggregateFunction["Sum"] = 3] = "Sum";
    AggregateFunction[AggregateFunction["Min"] = 4] = "Min";
    AggregateFunction[AggregateFunction["Max"] = 5] = "Max";
    AggregateFunction[AggregateFunction["Count"] = 6] = "Count";
    AggregateFunction[AggregateFunction["Average"] = 7] = "Average";
    AggregateFunction[AggregateFunction["DistinctCount"] = 8] = "DistinctCount";
})(AggregateFunction = exports.AggregateFunction || (exports.AggregateFunction = {}));
var BrowserPrintAdjustmentsMode;
(function (BrowserPrintAdjustmentsMode) {
    BrowserPrintAdjustmentsMode[BrowserPrintAdjustmentsMode["Default"] = 0] = "Default";
    BrowserPrintAdjustmentsMode[BrowserPrintAdjustmentsMode["NoAdjustments"] = 1] = "NoAdjustments";
})(BrowserPrintAdjustmentsMode = exports.BrowserPrintAdjustmentsMode || (exports.BrowserPrintAdjustmentsMode = {}));
var PageNavigationPosition;
(function (PageNavigationPosition) {
    PageNavigationPosition[PageNavigationPosition["Bottom"] = 0] = "Bottom";
    PageNavigationPosition[PageNavigationPosition["Left"] = 1] = "Left";
})(PageNavigationPosition = exports.PageNavigationPosition || (exports.PageNavigationPosition = {}));
var QnaMode;
(function (QnaMode) {
    QnaMode[QnaMode["Interactive"] = 0] = "Interactive";
    QnaMode[QnaMode["ResultOnly"] = 1] = "ResultOnly";
})(QnaMode = exports.QnaMode || (exports.QnaMode = {}));
var ExportDataType;
(function (ExportDataType) {
    ExportDataType[ExportDataType["Summarized"] = 0] = "Summarized";
    ExportDataType[ExportDataType["Underlying"] = 1] = "Underlying";
})(ExportDataType = exports.ExportDataType || (exports.ExportDataType = {}));
var BookmarksPlayMode;
(function (BookmarksPlayMode) {
    BookmarksPlayMode[BookmarksPlayMode["Off"] = 0] = "Off";
    BookmarksPlayMode[BookmarksPlayMode["Presentation"] = 1] = "Presentation";
})(BookmarksPlayMode = exports.BookmarksPlayMode || (exports.BookmarksPlayMode = {}));
// This is not an enum because enum strings require
// us to upgrade typeScript version and change SDK build definition
exports.CommonErrorCodes = {
    TokenExpired: 'TokenExpired',
    NotFound: 'PowerBIEntityNotFound',
    InvalidParameters: 'Invalid parameters',
    LoadReportFailed: 'LoadReportFailed',
    NotAuthorized: 'PowerBINotAuthorizedException',
    FailedToLoadModel: 'ExplorationContainer_FailedToLoadModel_DefaultDetails',
};
exports.TextAlignment = {
    Left: 'left',
    Center: 'center',
    Right: 'right',
};
exports.LegendPosition = {
    Top: 'Top',
    Bottom: 'Bottom',
    Right: 'Right',
    Left: 'Left',
    TopCenter: 'TopCenter',
    BottomCenter: 'BottomCenter',
    RightCenter: 'RightCenter',
    LeftCenter: 'LeftCenter',
};
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["Ascending"] = 1] = "Ascending";
    SortDirection[SortDirection["Descending"] = 2] = "Descending";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
var Selector = /** @class */ (function () {
    function Selector(schema) {
        this.$schema = schema;
    }
    Selector.prototype.toJSON = function () {
        return {
            $schema: this.$schema
        };
    };
    return Selector;
}());
exports.Selector = Selector;
var PageSelector = /** @class */ (function (_super) {
    __extends(PageSelector, _super);
    function PageSelector(pageName) {
        var _this = _super.call(this, PageSelector.schemaUrl) || this;
        _this.pageName = pageName;
        return _this;
    }
    PageSelector.prototype.toJSON = function () {
        var selector = _super.prototype.toJSON.call(this);
        selector.pageName = this.pageName;
        return selector;
    };
    PageSelector.schemaUrl = "http://powerbi.com/product/schema#pageSelector";
    return PageSelector;
}(Selector));
exports.PageSelector = PageSelector;
var VisualSelector = /** @class */ (function (_super) {
    __extends(VisualSelector, _super);
    function VisualSelector(visualName) {
        var _this = _super.call(this, VisualSelector.schemaUrl) || this;
        _this.visualName = visualName;
        return _this;
    }
    VisualSelector.prototype.toJSON = function () {
        var selector = _super.prototype.toJSON.call(this);
        selector.visualName = this.visualName;
        return selector;
    };
    VisualSelector.schemaUrl = "http://powerbi.com/product/schema#visualSelector";
    return VisualSelector;
}(Selector));
exports.VisualSelector = VisualSelector;
var VisualTypeSelector = /** @class */ (function (_super) {
    __extends(VisualTypeSelector, _super);
    function VisualTypeSelector(visualType) {
        var _this = _super.call(this, VisualSelector.schemaUrl) || this;
        _this.visualType = visualType;
        return _this;
    }
    VisualTypeSelector.prototype.toJSON = function () {
        var selector = _super.prototype.toJSON.call(this);
        selector.visualType = this.visualType;
        return selector;
    };
    VisualTypeSelector.schemaUrl = "http://powerbi.com/product/schema#visualTypeSelector";
    return VisualTypeSelector;
}(Selector));
exports.VisualTypeSelector = VisualTypeSelector;
var SlicerTargetSelector = /** @class */ (function (_super) {
    __extends(SlicerTargetSelector, _super);
    function SlicerTargetSelector(target) {
        var _this = _super.call(this, VisualSelector.schemaUrl) || this;
        _this.target = target;
        return _this;
    }
    SlicerTargetSelector.prototype.toJSON = function () {
        var selector = _super.prototype.toJSON.call(this);
        selector.target = this.target;
        return selector;
    };
    SlicerTargetSelector.schemaUrl = "http://powerbi.com/product/schema#slicerTargetSelector";
    return SlicerTargetSelector;
}(Selector));
exports.SlicerTargetSelector = SlicerTargetSelector;
var CommandDisplayOption;
(function (CommandDisplayOption) {
    CommandDisplayOption[CommandDisplayOption["Enabled"] = 0] = "Enabled";
    CommandDisplayOption[CommandDisplayOption["Disabled"] = 1] = "Disabled";
    CommandDisplayOption[CommandDisplayOption["Hidden"] = 2] = "Hidden";
})(CommandDisplayOption = exports.CommandDisplayOption || (exports.CommandDisplayOption = {}));
/*
 * Visual CRUD
 */
var VisualDataRoleKind;
(function (VisualDataRoleKind) {
    // Indicates that the role should be bound to something that evaluates to a grouping of values.
    VisualDataRoleKind[VisualDataRoleKind["Grouping"] = 0] = "Grouping";
    // Indicates that the role should be bound to something that evaluates to a single value in a scope.
    VisualDataRoleKind[VisualDataRoleKind["Measure"] = 1] = "Measure";
    // Indicates that the role can be bound to either Grouping or Measure.
    VisualDataRoleKind[VisualDataRoleKind["GroupingOrMeasure"] = 2] = "GroupingOrMeasure";
})(VisualDataRoleKind = exports.VisualDataRoleKind || (exports.VisualDataRoleKind = {}));
// Indicates the visual preference on Grouping or Measure. Only applicable if kind is GroupingOrMeasure.
var VisualDataRoleKindPreference;
(function (VisualDataRoleKindPreference) {
    VisualDataRoleKindPreference[VisualDataRoleKindPreference["Measure"] = 0] = "Measure";
    VisualDataRoleKindPreference[VisualDataRoleKindPreference["Grouping"] = 1] = "Grouping";
})(VisualDataRoleKindPreference = exports.VisualDataRoleKindPreference || (exports.VisualDataRoleKindPreference = {}));
function isOnLoadFilters(filters) {
    return filters && !isReportFiltersArray(filters);
}
exports.isOnLoadFilters = isOnLoadFilters;
function isReportFiltersArray(filters) {
    return Array.isArray(filters);
}
exports.isReportFiltersArray = isReportFiltersArray;
function isFlatMenuExtension(menuExtension) {
    return menuExtension && !isGroupedMenuExtension(menuExtension);
}
exports.isFlatMenuExtension = isFlatMenuExtension;
function isGroupedMenuExtension(menuExtension) {
    return menuExtension && !!menuExtension.groupName;
}
exports.isGroupedMenuExtension = isGroupedMenuExtension;
function isIExtensions(extensions) {
    return extensions && !isIExtensionArray(extensions);
}
exports.isIExtensions = isIExtensions;
function isIExtensionArray(extensions) {
    return Array.isArray(extensions);
}
exports.isIExtensionArray = isIExtensionArray;
function normalizeError(error) {
    var message = error.message;
    if (!message) {
        message = "".concat(error.path, " is invalid. Not meeting ").concat(error.keyword, " constraint");
    }
    return {
        message: message
    };
}
function validateVisualSelector(input) {
    var errors = validator_1.Validators.visualSelectorValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateVisualSelector = validateVisualSelector;
function validateSlicer(input) {
    var errors = validator_1.Validators.slicerValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateSlicer = validateSlicer;
function validateSlicerState(input) {
    var errors = validator_1.Validators.slicerStateValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateSlicerState = validateSlicerState;
function validatePlayBookmarkRequest(input) {
    var errors = validator_1.Validators.playBookmarkRequestValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validatePlayBookmarkRequest = validatePlayBookmarkRequest;
function validateAddBookmarkRequest(input) {
    var errors = validator_1.Validators.addBookmarkRequestValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateAddBookmarkRequest = validateAddBookmarkRequest;
function validateApplyBookmarkByNameRequest(input) {
    var errors = validator_1.Validators.applyBookmarkByNameRequestValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateApplyBookmarkByNameRequest = validateApplyBookmarkByNameRequest;
function validateApplyBookmarkStateRequest(input) {
    var errors = validator_1.Validators.applyBookmarkStateRequestValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateApplyBookmarkStateRequest = validateApplyBookmarkStateRequest;
function validateCaptureBookmarkRequest(input) {
    var errors = validator_1.Validators.captureBookmarkRequestValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateCaptureBookmarkRequest = validateCaptureBookmarkRequest;
function validateSettings(input) {
    var errors = validator_1.Validators.settingsValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateSettings = validateSettings;
function validatePanes(input) {
    var errors = validator_1.Validators.reportPanesValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validatePanes = validatePanes;
function validateBookmarksPane(input) {
    var errors = validator_1.Validators.bookmarksPaneValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateBookmarksPane = validateBookmarksPane;
function validateFiltersPane(input) {
    var errors = validator_1.Validators.filtersPaneValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateFiltersPane = validateFiltersPane;
function validateFieldsPane(input) {
    var errors = validator_1.Validators.fieldsPaneValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateFieldsPane = validateFieldsPane;
function validatePageNavigationPane(input) {
    var errors = validator_1.Validators.pageNavigationPaneValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validatePageNavigationPane = validatePageNavigationPane;
function validateSelectionPane(input) {
    var errors = validator_1.Validators.selectionPaneValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateSelectionPane = validateSelectionPane;
function validateSyncSlicersPane(input) {
    var errors = validator_1.Validators.syncSlicersPaneValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateSyncSlicersPane = validateSyncSlicersPane;
function validateVisualizationsPane(input) {
    var errors = validator_1.Validators.visualizationsPaneValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateVisualizationsPane = validateVisualizationsPane;
function validateCustomPageSize(input) {
    var errors = validator_1.Validators.customPageSizeValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateCustomPageSize = validateCustomPageSize;
function validateExtension(input) {
    var errors = validator_1.Validators.extensionValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateExtension = validateExtension;
function validateMenuGroupExtension(input) {
    var errors = validator_1.Validators.menuGroupExtensionValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateMenuGroupExtension = validateMenuGroupExtension;
function validateReportLoad(input) {
    var errors = validator_1.Validators.reportLoadValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateReportLoad = validateReportLoad;
function validatePaginatedReportLoad(input) {
    var errors = validator_1.Validators.paginatedReportLoadValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validatePaginatedReportLoad = validatePaginatedReportLoad;
function validateCreateReport(input) {
    var errors = validator_1.Validators.reportCreateValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateCreateReport = validateCreateReport;
function validateQuickCreate(input) {
    var errors = validator_1.Validators.quickCreateValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateQuickCreate = validateQuickCreate;
function validateDashboardLoad(input) {
    var errors = validator_1.Validators.dashboardLoadValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateDashboardLoad = validateDashboardLoad;
function validateTileLoad(input) {
    var errors = validator_1.Validators.tileLoadValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateTileLoad = validateTileLoad;
function validatePage(input) {
    var errors = validator_1.Validators.pageValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validatePage = validatePage;
function validateFilter(input) {
    var errors = validator_1.Validators.filterValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateFilter = validateFilter;
function validateUpdateFiltersRequest(input) {
    var errors = validator_1.Validators.updateFiltersRequestValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateUpdateFiltersRequest = validateUpdateFiltersRequest;
function validateSaveAsParameters(input) {
    var errors = validator_1.Validators.saveAsParametersValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateSaveAsParameters = validateSaveAsParameters;
function validateLoadQnaConfiguration(input) {
    var errors = validator_1.Validators.loadQnaValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateLoadQnaConfiguration = validateLoadQnaConfiguration;
function validateQnaInterpretInputData(input) {
    var errors = validator_1.Validators.qnaInterpretInputDataValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateQnaInterpretInputData = validateQnaInterpretInputData;
function validateExportDataRequest(input) {
    var errors = validator_1.Validators.exportDataRequestValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateExportDataRequest = validateExportDataRequest;
function validateVisualHeader(input) {
    var errors = validator_1.Validators.visualHeaderValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateVisualHeader = validateVisualHeader;
function validateVisualSettings(input) {
    var errors = validator_1.Validators.visualSettingsValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateVisualSettings = validateVisualSettings;
function validateCommandsSettings(input) {
    var errors = validator_1.Validators.commandsSettingsValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateCommandsSettings = validateCommandsSettings;
function validateCustomTheme(input) {
    var errors = validator_1.Validators.customThemeValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateCustomTheme = validateCustomTheme;
function validateZoomLevel(input) {
    var errors = validator_1.Validators.zoomLevelValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validateZoomLevel = validateZoomLevel;
function validatePrintSettings(input) {
    var errors = validator_1.Validators.printSettingsValidator.validate(input);
    return errors ? errors.map(normalizeError) : undefined;
}
exports.validatePrintSettings = validatePrintSettings;


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_46167__) => {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Validators = void 0;
var barsValidator_1 = __nested_webpack_require_46167__(2);
var bookmarkValidator_1 = __nested_webpack_require_46167__(5);
var commandsSettingsValidator_1 = __nested_webpack_require_46167__(6);
var customThemeValidator_1 = __nested_webpack_require_46167__(7);
var dashboardLoadValidator_1 = __nested_webpack_require_46167__(8);
var datasetBindingValidator_1 = __nested_webpack_require_46167__(9);
var exportDataValidator_1 = __nested_webpack_require_46167__(10);
var extensionsValidator_1 = __nested_webpack_require_46167__(11);
var filtersValidator_1 = __nested_webpack_require_46167__(12);
var layoutValidator_1 = __nested_webpack_require_46167__(13);
var pageValidator_1 = __nested_webpack_require_46167__(14);
var panesValidator_1 = __nested_webpack_require_46167__(15);
var qnaValidator_1 = __nested_webpack_require_46167__(16);
var reportCreateValidator_1 = __nested_webpack_require_46167__(17);
var reportLoadValidator_1 = __nested_webpack_require_46167__(18);
var paginatedReportLoadValidator_1 = __nested_webpack_require_46167__(19);
var saveAsParametersValidator_1 = __nested_webpack_require_46167__(20);
var selectorsValidator_1 = __nested_webpack_require_46167__(21);
var settingsValidator_1 = __nested_webpack_require_46167__(22);
var slicersValidator_1 = __nested_webpack_require_46167__(23);
var tileLoadValidator_1 = __nested_webpack_require_46167__(24);
var visualSettingsValidator_1 = __nested_webpack_require_46167__(25);
var anyOfValidator_1 = __nested_webpack_require_46167__(26);
var fieldForbiddenValidator_1 = __nested_webpack_require_46167__(27);
var fieldRequiredValidator_1 = __nested_webpack_require_46167__(28);
var mapValidator_1 = __nested_webpack_require_46167__(29);
var typeValidator_1 = __nested_webpack_require_46167__(4);
var parameterPanelValidator_1 = __nested_webpack_require_46167__(30);
var datasetCreateConfigValidator_1 = __nested_webpack_require_46167__(31);
var quickCreateValidator_1 = __nested_webpack_require_46167__(32);
var printSettingsValidator_1 = __nested_webpack_require_46167__(33);
var paginatedReportDatasetBindingValidator_1 = __nested_webpack_require_46167__(34);
exports.Validators = {
    addBookmarkRequestValidator: new bookmarkValidator_1.AddBookmarkRequestValidator(),
    advancedFilterTypeValidator: new typeValidator_1.EnumValidator([0]),
    advancedFilterValidator: new filtersValidator_1.AdvancedFilterValidator(),
    anyArrayValidator: new typeValidator_1.ArrayValidator([new anyOfValidator_1.AnyOfValidator([new typeValidator_1.StringValidator(), new typeValidator_1.NumberValidator(), new typeValidator_1.BooleanValidator()])]),
    anyFilterValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.BasicFilterValidator(), new filtersValidator_1.AdvancedFilterValidator(), new filtersValidator_1.IncludeExcludeFilterValidator(), new filtersValidator_1.NotSupportedFilterValidator(), new filtersValidator_1.RelativeDateFilterValidator(), new filtersValidator_1.TopNFilterValidator(), new filtersValidator_1.RelativeTimeFilterValidator(), new filtersValidator_1.HierarchyFilterValidator()]),
    anyValueValidator: new anyOfValidator_1.AnyOfValidator([new typeValidator_1.StringValidator(), new typeValidator_1.NumberValidator(), new typeValidator_1.BooleanValidator()]),
    actionBarValidator: new barsValidator_1.ActionBarValidator(),
    statusBarValidator: new barsValidator_1.StatusBarValidator(),
    applyBookmarkByNameRequestValidator: new bookmarkValidator_1.ApplyBookmarkByNameRequestValidator(),
    applyBookmarkStateRequestValidator: new bookmarkValidator_1.ApplyBookmarkStateRequestValidator(),
    applyBookmarkValidator: new anyOfValidator_1.AnyOfValidator([new bookmarkValidator_1.ApplyBookmarkByNameRequestValidator(), new bookmarkValidator_1.ApplyBookmarkStateRequestValidator()]),
    backgroundValidator: new typeValidator_1.EnumValidator([0, 1]),
    basicFilterTypeValidator: new typeValidator_1.EnumValidator([1]),
    basicFilterValidator: new filtersValidator_1.BasicFilterValidator(),
    booleanArrayValidator: new typeValidator_1.BooleanArrayValidator(),
    booleanValidator: new typeValidator_1.BooleanValidator(),
    bookmarksPaneValidator: new panesValidator_1.BookmarksPaneValidator(),
    captureBookmarkOptionsValidator: new bookmarkValidator_1.CaptureBookmarkOptionsValidator(),
    captureBookmarkRequestValidator: new bookmarkValidator_1.CaptureBookmarkRequestValidator(),
    columnSchemaArrayValidator: new typeValidator_1.ArrayValidator([new datasetCreateConfigValidator_1.ColumnSchemaValidator()]),
    commandDisplayOptionValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
    commandExtensionSelectorValidator: new anyOfValidator_1.AnyOfValidator([new selectorsValidator_1.VisualSelectorValidator(), new selectorsValidator_1.VisualTypeSelectorValidator()]),
    commandExtensionArrayValidator: new typeValidator_1.ArrayValidator([new extensionsValidator_1.CommandExtensionValidator()]),
    commandExtensionValidator: new extensionsValidator_1.CommandExtensionValidator(),
    commandsSettingsArrayValidator: new typeValidator_1.ArrayValidator([new commandsSettingsValidator_1.CommandsSettingsValidator()]),
    commandsSettingsValidator: new commandsSettingsValidator_1.CommandsSettingsValidator(),
    conditionItemValidator: new filtersValidator_1.ConditionItemValidator(),
    contrastModeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4]),
    credentialDetailsValidator: new mapValidator_1.MapValidator([new typeValidator_1.StringValidator()], [new typeValidator_1.StringValidator()]),
    credentialsValidator: new datasetCreateConfigValidator_1.CredentialsValidator(),
    credentialTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
    customLayoutDisplayOptionValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
    customLayoutValidator: new layoutValidator_1.CustomLayoutValidator(),
    customPageSizeValidator: new pageValidator_1.CustomPageSizeValidator(),
    customThemeValidator: new customThemeValidator_1.CustomThemeValidator(),
    dashboardLoadValidator: new dashboardLoadValidator_1.DashboardLoadValidator(),
    dataCacheModeValidator: new typeValidator_1.EnumValidator([0, 1]),
    datasetBindingValidator: new datasetBindingValidator_1.DatasetBindingValidator(),
    datasetCreateConfigValidator: new datasetCreateConfigValidator_1.DatasetCreateConfigValidator(),
    datasourceConnectionConfigValidator: new datasetCreateConfigValidator_1.DatasourceConnectionConfigValidator(),
    displayStateModeValidator: new typeValidator_1.EnumValidator([0, 1]),
    displayStateValidator: new layoutValidator_1.DisplayStateValidator(),
    exportDataRequestValidator: new exportDataValidator_1.ExportDataRequestValidator(),
    extensionArrayValidator: new typeValidator_1.ArrayValidator([new extensionsValidator_1.ExtensionValidator()]),
    extensionsValidator: new anyOfValidator_1.AnyOfValidator([new typeValidator_1.ArrayValidator([new extensionsValidator_1.ExtensionValidator()]), new extensionsValidator_1.ExtensionsValidator()]),
    extensionPointsValidator: new extensionsValidator_1.ExtensionPointsValidator(),
    extensionValidator: new extensionsValidator_1.ExtensionValidator(),
    fieldForbiddenValidator: new fieldForbiddenValidator_1.FieldForbiddenValidator(),
    fieldRequiredValidator: new fieldRequiredValidator_1.FieldRequiredValidator(),
    fieldsPaneValidator: new panesValidator_1.FieldsPaneValidator(),
    filterColumnTargetValidator: new filtersValidator_1.FilterColumnTargetValidator(),
    filterDisplaySettingsValidator: new filtersValidator_1.FilterDisplaySettingsValidator(),
    filterConditionsValidator: new typeValidator_1.ArrayValidator([new filtersValidator_1.ConditionItemValidator()]),
    filterHierarchyTargetValidator: new filtersValidator_1.FilterHierarchyTargetValidator(),
    filterMeasureTargetValidator: new filtersValidator_1.FilterMeasureTargetValidator(),
    filterTargetValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.FilterColumnTargetValidator(), new filtersValidator_1.FilterHierarchyTargetValidator(), new filtersValidator_1.FilterMeasureTargetValidator(), new typeValidator_1.ArrayValidator([new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.FilterColumnTargetValidator(), new filtersValidator_1.FilterHierarchyTargetValidator(), new filtersValidator_1.FilterMeasureTargetValidator(), new filtersValidator_1.FilterKeyColumnsTargetValidator(), new filtersValidator_1.FilterKeyHierarchyTargetValidator()])])]),
    filterValidator: new filtersValidator_1.FilterValidator(),
    filterTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4, 5, 6, 7, 9]),
    filtersArrayValidator: new typeValidator_1.ArrayValidator([new filtersValidator_1.FilterValidator()]),
    filtersOperationsUpdateValidator: new typeValidator_1.EnumValidator([1, 2, 3]),
    filtersOperationsRemoveAllValidator: new typeValidator_1.EnumValidator([0]),
    filtersPaneValidator: new panesValidator_1.FiltersPaneValidator(),
    hyperlinkClickBehaviorValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
    includeExcludeFilterValidator: new filtersValidator_1.IncludeExcludeFilterValidator(),
    includeExludeFilterTypeValidator: new typeValidator_1.EnumValidator([3]),
    hierarchyFilterTypeValidator: new typeValidator_1.EnumValidator([9]),
    hierarchyFilterValuesValidator: new typeValidator_1.ArrayValidator([new filtersValidator_1.HierarchyFilterNodeValidator()]),
    layoutTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3]),
    loadQnaValidator: new qnaValidator_1.LoadQnaValidator(),
    menuExtensionValidator: new anyOfValidator_1.AnyOfValidator([new extensionsValidator_1.FlatMenuExtensionValidator(), new extensionsValidator_1.GroupedMenuExtensionValidator()]),
    menuGroupExtensionArrayValidator: new typeValidator_1.ArrayValidator([new extensionsValidator_1.MenuGroupExtensionValidator()]),
    menuGroupExtensionValidator: new extensionsValidator_1.MenuGroupExtensionValidator(),
    menuLocationValidator: new typeValidator_1.EnumValidator([0, 1]),
    notSupportedFilterTypeValidator: new typeValidator_1.EnumValidator([2]),
    notSupportedFilterValidator: new filtersValidator_1.NotSupportedFilterValidator(),
    numberArrayValidator: new typeValidator_1.NumberArrayValidator(),
    numberValidator: new typeValidator_1.NumberValidator(),
    onLoadFiltersBaseValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.OnLoadFiltersBaseValidator(), new filtersValidator_1.OnLoadFiltersBaseRemoveOperationValidator()]),
    pageLayoutValidator: new mapValidator_1.MapValidator([new typeValidator_1.StringValidator()], [new layoutValidator_1.VisualLayoutValidator()]),
    pageNavigationPaneValidator: new panesValidator_1.PageNavigationPaneValidator(),
    pageNavigationPositionValidator: new typeValidator_1.EnumValidator([0, 1]),
    pageSizeTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4, 5]),
    pageSizeValidator: new pageValidator_1.PageSizeValidator(),
    pageValidator: new pageValidator_1.PageValidator(),
    pageViewFieldValidator: new pageValidator_1.PageViewFieldValidator(),
    pagesLayoutValidator: new mapValidator_1.MapValidator([new typeValidator_1.StringValidator()], [new layoutValidator_1.PageLayoutValidator()]),
    paginatedReportCommandsValidator: new commandsSettingsValidator_1.PaginatedReportCommandsValidator(),
    paginatedReportDatasetBindingArrayValidator: new typeValidator_1.ArrayValidator([new paginatedReportDatasetBindingValidator_1.PaginatedReportDatasetBindingValidator()]),
    paginatedReportLoadValidator: new paginatedReportLoadValidator_1.PaginatedReportLoadValidator(),
    paginatedReportsettingsValidator: new settingsValidator_1.PaginatedReportSettingsValidator(),
    parameterValuesArrayValidator: new typeValidator_1.ArrayValidator([new paginatedReportLoadValidator_1.ReportParameterFieldsValidator()]),
    parametersPanelValidator: new parameterPanelValidator_1.ParametersPanelValidator(),
    permissionsValidator: new typeValidator_1.EnumValidator([0, 1, 2, 4, 7]),
    playBookmarkRequestValidator: new bookmarkValidator_1.PlayBookmarkRequestValidator(),
    printSettingsValidator: new printSettingsValidator_1.PrintSettingsValidator(),
    qnaInterpretInputDataValidator: new qnaValidator_1.QnaInterpretInputDataValidator(),
    qnaPanesValidator: new panesValidator_1.QnaPanesValidator(),
    qnaSettingValidator: new qnaValidator_1.QnaSettingsValidator(),
    quickCreateValidator: new quickCreateValidator_1.QuickCreateValidator(),
    rawDataValidator: new typeValidator_1.ArrayValidator([new typeValidator_1.ArrayValidator([new typeValidator_1.StringValidator()])]),
    relativeDateFilterOperatorValidator: new typeValidator_1.EnumValidator([0, 1, 2]),
    relativeDateFilterTimeUnitTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4, 5, 6]),
    relativeDateFilterTypeValidator: new typeValidator_1.EnumValidator([4]),
    relativeDateFilterValidator: new filtersValidator_1.RelativeDateFilterValidator(),
    relativeDateTimeFilterTypeValidator: new typeValidator_1.EnumValidator([4, 7]),
    relativeDateTimeFilterUnitTypeValidator: new typeValidator_1.EnumValidator([0, 1, 2, 3, 4, 5, 6, 7, 8]),
    relativeTimeFilterTimeUnitTypeValidator: new typeValidator_1.EnumValidator([7, 8]),
    relativeTimeFilterTypeValidator: new typeValidator_1.EnumValidator([7]),
    relativeTimeFilterValidator: new filtersValidator_1.RelativeTimeFilterValidator(),
    reportBarsValidator: new barsValidator_1.ReportBarsValidator(),
    reportCreateValidator: new reportCreateValidator_1.ReportCreateValidator(),
    reportLoadFiltersValidator: new anyOfValidator_1.AnyOfValidator([new typeValidator_1.ArrayValidator([new filtersValidator_1.FilterValidator()]), new filtersValidator_1.OnLoadFiltersValidator()]),
    reportLoadValidator: new reportLoadValidator_1.ReportLoadValidator(),
    reportPanesValidator: new panesValidator_1.ReportPanesValidator(),
    saveAsParametersValidator: new saveAsParametersValidator_1.SaveAsParametersValidator(),
    selectionPaneValidator: new panesValidator_1.SelectionPaneValidator(),
    settingsValidator: new settingsValidator_1.SettingsValidator(),
    singleCommandSettingsValidator: new commandsSettingsValidator_1.SingleCommandSettingsValidator(),
    slicerSelectorValidator: new anyOfValidator_1.AnyOfValidator([new selectorsValidator_1.VisualSelectorValidator(), new selectorsValidator_1.SlicerTargetSelectorValidator()]),
    slicerStateValidator: new slicersValidator_1.SlicerStateValidator(),
    slicerTargetValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.FilterColumnTargetValidator(), new filtersValidator_1.FilterHierarchyTargetValidator(), new filtersValidator_1.FilterMeasureTargetValidator(), new filtersValidator_1.FilterKeyColumnsTargetValidator(), new filtersValidator_1.FilterKeyHierarchyTargetValidator()]),
    slicerValidator: new slicersValidator_1.SlicerValidator(),
    stringArrayValidator: new typeValidator_1.StringArrayValidator(),
    stringValidator: new typeValidator_1.StringValidator(),
    syncSlicersPaneValidator: new panesValidator_1.SyncSlicersPaneValidator(),
    tableDataArrayValidator: new typeValidator_1.ArrayValidator([new datasetCreateConfigValidator_1.TableDataValidator()]),
    tableSchemaListValidator: new typeValidator_1.ArrayValidator([new datasetCreateConfigValidator_1.TableSchemaValidator()]),
    tileLoadValidator: new tileLoadValidator_1.TileLoadValidator(),
    tokenTypeValidator: new typeValidator_1.EnumValidator([0, 1]),
    topNFilterTypeValidator: new typeValidator_1.EnumValidator([5]),
    topNFilterValidator: new filtersValidator_1.TopNFilterValidator(),
    updateFiltersRequestValidator: new anyOfValidator_1.AnyOfValidator([new filtersValidator_1.UpdateFiltersRequestValidator(), new filtersValidator_1.RemoveFiltersRequestValidator()]),
    viewModeValidator: new typeValidator_1.EnumValidator([0, 1]),
    visualCommandSelectorValidator: new anyOfValidator_1.AnyOfValidator([new selectorsValidator_1.VisualSelectorValidator(), new selectorsValidator_1.VisualTypeSelectorValidator()]),
    visualHeaderSelectorValidator: new anyOfValidator_1.AnyOfValidator([new selectorsValidator_1.VisualSelectorValidator(), new selectorsValidator_1.VisualTypeSelectorValidator()]),
    visualHeaderSettingsValidator: new visualSettingsValidator_1.VisualHeaderSettingsValidator(),
    visualHeaderValidator: new visualSettingsValidator_1.VisualHeaderValidator(),
    visualHeadersValidator: new typeValidator_1.ArrayValidator([new visualSettingsValidator_1.VisualHeaderValidator()]),
    visualizationsPaneValidator: new panesValidator_1.VisualizationsPaneValidator(),
    visualLayoutValidator: new layoutValidator_1.VisualLayoutValidator(),
    visualSelectorValidator: new selectorsValidator_1.VisualSelectorValidator(),
    visualSettingsValidator: new visualSettingsValidator_1.VisualSettingsValidator(),
    visualTypeSelectorValidator: new selectorsValidator_1.VisualTypeSelectorValidator(),
    zoomLevelValidator: new typeValidator_1.RangeValidator(0.25, 4),
};


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_63300__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatusBarValidator = exports.ActionBarValidator = exports.ReportBarsValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_63300__(3);
var typeValidator_1 = __nested_webpack_require_63300__(4);
var validator_1 = __nested_webpack_require_63300__(1);
var ReportBarsValidator = /** @class */ (function (_super) {
    __extends(ReportBarsValidator, _super);
    function ReportBarsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReportBarsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "actionBar",
                validators: [validator_1.Validators.actionBarValidator]
            },
            {
                field: "statusBar",
                validators: [validator_1.Validators.statusBarValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ReportBarsValidator;
}(typeValidator_1.ObjectValidator));
exports.ReportBarsValidator = ReportBarsValidator;
var ActionBarValidator = /** @class */ (function (_super) {
    __extends(ActionBarValidator, _super);
    function ActionBarValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionBarValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ActionBarValidator;
}(typeValidator_1.ObjectValidator));
exports.ActionBarValidator = ActionBarValidator;
var StatusBarValidator = /** @class */ (function (_super) {
    __extends(StatusBarValidator, _super);
    function StatusBarValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusBarValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return StatusBarValidator;
}(typeValidator_1.ObjectValidator));
exports.StatusBarValidator = StatusBarValidator;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports) => {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MultipleFieldsValidator = void 0;
var MultipleFieldsValidator = /** @class */ (function () {
    function MultipleFieldsValidator(fieldValidatorsPairs) {
        this.fieldValidatorsPairs = fieldValidatorsPairs;
    }
    MultipleFieldsValidator.prototype.validate = function (input, path, field) {
        if (!this.fieldValidatorsPairs) {
            return null;
        }
        var fieldsPath = path ? path + "." + field : field;
        for (var _i = 0, _a = this.fieldValidatorsPairs; _i < _a.length; _i++) {
            var fieldValidators = _a[_i];
            for (var _b = 0, _c = fieldValidators.validators; _b < _c.length; _b++) {
                var validator = _c[_b];
                var errors = validator.validate(input[fieldValidators.field], fieldsPath, fieldValidators.field);
                if (errors) {
                    return errors;
                }
            }
        }
        return null;
    };
    return MultipleFieldsValidator;
}());
exports.MultipleFieldsValidator = MultipleFieldsValidator;


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RangeValidator = exports.NumberArrayValidator = exports.BooleanArrayValidator = exports.StringArrayValidator = exports.EnumValidator = exports.SchemaValidator = exports.ValueValidator = exports.NumberValidator = exports.BooleanValidator = exports.StringValidator = exports.TypeValidator = exports.ArrayValidator = exports.ObjectValidator = void 0;
var ObjectValidator = /** @class */ (function () {
    function ObjectValidator() {
    }
    ObjectValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        if (typeof input !== "object" || Array.isArray(input)) {
            return [{
                    message: field !== undefined ? field + " must be an object" : "input must be an object",
                    path: path,
                    keyword: "type"
                }];
        }
        return null;
    };
    return ObjectValidator;
}());
exports.ObjectValidator = ObjectValidator;
var ArrayValidator = /** @class */ (function () {
    function ArrayValidator(itemValidators) {
        this.itemValidators = itemValidators;
    }
    ArrayValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        if (!(Array.isArray(input))) {
            return [{
                    message: field + " property is invalid",
                    path: (path ? path + "." : "") + field,
                    keyword: "type"
                }];
        }
        for (var i = 0; i < input.length; i++) {
            var fieldsPath = (path ? path + "." : "") + field + "." + i.toString();
            for (var _i = 0, _a = this.itemValidators; _i < _a.length; _i++) {
                var validator = _a[_i];
                var errors = validator.validate(input[i], fieldsPath, field);
                if (errors) {
                    return [{
                            message: field + " property is invalid",
                            path: (path ? path + "." : "") + field,
                            keyword: "type"
                        }];
                }
            }
        }
        return null;
    };
    return ArrayValidator;
}());
exports.ArrayValidator = ArrayValidator;
var TypeValidator = /** @class */ (function () {
    function TypeValidator(expectedType) {
        this.expectedType = expectedType;
    }
    TypeValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        if (!(typeof input === this.expectedType)) {
            return [{
                    message: field + " must be a " + this.expectedType,
                    path: (path ? path + "." : "") + field,
                    keyword: "type"
                }];
        }
        return null;
    };
    return TypeValidator;
}());
exports.TypeValidator = TypeValidator;
var StringValidator = /** @class */ (function (_super) {
    __extends(StringValidator, _super);
    function StringValidator() {
        return _super.call(this, "string") || this;
    }
    return StringValidator;
}(TypeValidator));
exports.StringValidator = StringValidator;
var BooleanValidator = /** @class */ (function (_super) {
    __extends(BooleanValidator, _super);
    function BooleanValidator() {
        return _super.call(this, "boolean") || this;
    }
    return BooleanValidator;
}(TypeValidator));
exports.BooleanValidator = BooleanValidator;
var NumberValidator = /** @class */ (function (_super) {
    __extends(NumberValidator, _super);
    function NumberValidator() {
        return _super.call(this, "number") || this;
    }
    return NumberValidator;
}(TypeValidator));
exports.NumberValidator = NumberValidator;
var ValueValidator = /** @class */ (function () {
    function ValueValidator(possibleValues) {
        this.possibleValues = possibleValues;
    }
    ValueValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        if (this.possibleValues.indexOf(input) < 0) {
            return [{
                    message: field + " property is invalid",
                    path: (path ? path + "." : "") + field,
                    keyword: "invalid"
                }];
        }
        return null;
    };
    return ValueValidator;
}());
exports.ValueValidator = ValueValidator;
var SchemaValidator = /** @class */ (function (_super) {
    __extends(SchemaValidator, _super);
    function SchemaValidator(schemaValue) {
        var _this = _super.call(this, [schemaValue]) || this;
        _this.schemaValue = schemaValue;
        return _this;
    }
    SchemaValidator.prototype.validate = function (input, path, field) {
        return _super.prototype.validate.call(this, input, path, field);
    };
    return SchemaValidator;
}(ValueValidator));
exports.SchemaValidator = SchemaValidator;
var EnumValidator = /** @class */ (function (_super) {
    __extends(EnumValidator, _super);
    function EnumValidator(possibleValues) {
        var _this = _super.call(this) || this;
        _this.possibleValues = possibleValues;
        return _this;
    }
    EnumValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var valueValidator = new ValueValidator(this.possibleValues);
        return valueValidator.validate(input, path, field);
    };
    return EnumValidator;
}(NumberValidator));
exports.EnumValidator = EnumValidator;
var StringArrayValidator = /** @class */ (function (_super) {
    __extends(StringArrayValidator, _super);
    function StringArrayValidator() {
        return _super.call(this, [new StringValidator()]) || this;
    }
    StringArrayValidator.prototype.validate = function (input, path, field) {
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return [{
                    message: field + " must be an array of strings",
                    path: (path ? path + "." : "") + field,
                    keyword: "type"
                }];
        }
        return null;
    };
    return StringArrayValidator;
}(ArrayValidator));
exports.StringArrayValidator = StringArrayValidator;
var BooleanArrayValidator = /** @class */ (function (_super) {
    __extends(BooleanArrayValidator, _super);
    function BooleanArrayValidator() {
        return _super.call(this, [new BooleanValidator()]) || this;
    }
    BooleanArrayValidator.prototype.validate = function (input, path, field) {
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return [{
                    message: field + " must be an array of booleans",
                    path: (path ? path + "." : "") + field,
                    keyword: "type"
                }];
        }
        return null;
    };
    return BooleanArrayValidator;
}(ArrayValidator));
exports.BooleanArrayValidator = BooleanArrayValidator;
var NumberArrayValidator = /** @class */ (function (_super) {
    __extends(NumberArrayValidator, _super);
    function NumberArrayValidator() {
        return _super.call(this, [new NumberValidator()]) || this;
    }
    NumberArrayValidator.prototype.validate = function (input, path, field) {
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return [{
                    message: field + " must be an array of numbers",
                    path: (path ? path + "." : "") + field,
                    keyword: "type"
                }];
        }
        return null;
    };
    return NumberArrayValidator;
}(ArrayValidator));
exports.NumberArrayValidator = NumberArrayValidator;
var RangeValidator = /** @class */ (function (_super) {
    __extends(RangeValidator, _super);
    function RangeValidator(minValue, maxValue) {
        var _this = _super.call(this) || this;
        _this.minValue = minValue;
        _this.maxValue = maxValue;
        return _this;
    }
    RangeValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        // input is a number, now check if it's in the given range
        if (input > this.maxValue || input < this.minValue) {
            return [{
                    message: field + " must be a number between " + this.minValue.toString() + " and " + this.maxValue.toString(),
                    path: (path ? path + "." : "") + field,
                    keyword: "range"
                }];
        }
        return null;
    };
    return RangeValidator;
}(NumberValidator));
exports.RangeValidator = RangeValidator;


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_79179__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CaptureBookmarkRequestValidator = exports.CaptureBookmarkOptionsValidator = exports.ApplyBookmarkStateRequestValidator = exports.ApplyBookmarkByNameRequestValidator = exports.AddBookmarkRequestValidator = exports.PlayBookmarkRequestValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_79179__(3);
var typeValidator_1 = __nested_webpack_require_79179__(4);
var validator_1 = __nested_webpack_require_79179__(1);
var PlayBookmarkRequestValidator = /** @class */ (function (_super) {
    __extends(PlayBookmarkRequestValidator, _super);
    function PlayBookmarkRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayBookmarkRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "playMode",
                validators: [validator_1.Validators.fieldRequiredValidator, new typeValidator_1.EnumValidator([0, 1])]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PlayBookmarkRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.PlayBookmarkRequestValidator = PlayBookmarkRequestValidator;
var AddBookmarkRequestValidator = /** @class */ (function (_super) {
    __extends(AddBookmarkRequestValidator, _super);
    function AddBookmarkRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddBookmarkRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "state",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "displayName",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "apply",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return AddBookmarkRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.AddBookmarkRequestValidator = AddBookmarkRequestValidator;
var ApplyBookmarkByNameRequestValidator = /** @class */ (function (_super) {
    __extends(ApplyBookmarkByNameRequestValidator, _super);
    function ApplyBookmarkByNameRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplyBookmarkByNameRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ApplyBookmarkByNameRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.ApplyBookmarkByNameRequestValidator = ApplyBookmarkByNameRequestValidator;
var ApplyBookmarkStateRequestValidator = /** @class */ (function (_super) {
    __extends(ApplyBookmarkStateRequestValidator, _super);
    function ApplyBookmarkStateRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplyBookmarkStateRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "state",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ApplyBookmarkStateRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.ApplyBookmarkStateRequestValidator = ApplyBookmarkStateRequestValidator;
var CaptureBookmarkOptionsValidator = /** @class */ (function (_super) {
    __extends(CaptureBookmarkOptionsValidator, _super);
    function CaptureBookmarkOptionsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaptureBookmarkOptionsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "personalizeVisuals",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "allPages",
                validators: [validator_1.Validators.booleanValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CaptureBookmarkOptionsValidator;
}(typeValidator_1.ObjectValidator));
exports.CaptureBookmarkOptionsValidator = CaptureBookmarkOptionsValidator;
var CaptureBookmarkRequestValidator = /** @class */ (function (_super) {
    __extends(CaptureBookmarkRequestValidator, _super);
    function CaptureBookmarkRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaptureBookmarkRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "options",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.captureBookmarkOptionsValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CaptureBookmarkRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.CaptureBookmarkRequestValidator = CaptureBookmarkRequestValidator;


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_87655__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginatedReportCommandsValidator = exports.SingleCommandSettingsValidator = exports.CommandsSettingsValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_87655__(3);
var typeValidator_1 = __nested_webpack_require_87655__(4);
var validator_1 = __nested_webpack_require_87655__(1);
var CommandsSettingsValidator = /** @class */ (function (_super) {
    __extends(CommandsSettingsValidator, _super);
    function CommandsSettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandsSettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "copy",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "drill",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "drillthrough",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "expandCollapse",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "exportData",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "includeExclude",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "removeVisual",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "search",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "seeData",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "sort",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "spotlight",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "insightsAnalysis",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "addComment",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "groupVisualContainers",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "summarize",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            },
            {
                field: "clearSelection",
                validators: [validator_1.Validators.singleCommandSettingsValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CommandsSettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.CommandsSettingsValidator = CommandsSettingsValidator;
var SingleCommandSettingsValidator = /** @class */ (function (_super) {
    __extends(SingleCommandSettingsValidator, _super);
    function SingleCommandSettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SingleCommandSettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "displayOption",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.commandDisplayOptionValidator]
            },
            {
                field: "selector",
                validators: [validator_1.Validators.visualCommandSelectorValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SingleCommandSettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.SingleCommandSettingsValidator = SingleCommandSettingsValidator;
var PaginatedReportCommandsValidator = /** @class */ (function (_super) {
    __extends(PaginatedReportCommandsValidator, _super);
    function PaginatedReportCommandsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginatedReportCommandsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "parameterPanel",
                validators: [validator_1.Validators.parametersPanelValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PaginatedReportCommandsValidator;
}(typeValidator_1.ObjectValidator));
exports.PaginatedReportCommandsValidator = PaginatedReportCommandsValidator;


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_94688__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomThemeValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_94688__(3);
var typeValidator_1 = __nested_webpack_require_94688__(4);
var CustomThemeValidator = /** @class */ (function (_super) {
    __extends(CustomThemeValidator, _super);
    function CustomThemeValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomThemeValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "themeJson",
                validators: [new typeValidator_1.ObjectValidator()]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CustomThemeValidator;
}(typeValidator_1.ObjectValidator));
exports.CustomThemeValidator = CustomThemeValidator;


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_96842__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardLoadValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_96842__(3);
var typeValidator_1 = __nested_webpack_require_96842__(4);
var validator_1 = __nested_webpack_require_96842__(1);
var DashboardLoadValidator = /** @class */ (function (_super) {
    __extends(DashboardLoadValidator, _super);
    function DashboardLoadValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashboardLoadValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "accessToken",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "id",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "groupId",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "pageView",
                validators: [validator_1.Validators.pageViewFieldValidator]
            },
            {
                field: "tokenType",
                validators: [validator_1.Validators.tokenTypeValidator]
            },
            {
                field: "embedUrl",
                validators: [validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return DashboardLoadValidator;
}(typeValidator_1.ObjectValidator));
exports.DashboardLoadValidator = DashboardLoadValidator;


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_99841__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatasetBindingValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_99841__(3);
var typeValidator_1 = __nested_webpack_require_99841__(4);
var validator_1 = __nested_webpack_require_99841__(1);
var DatasetBindingValidator = /** @class */ (function (_super) {
    __extends(DatasetBindingValidator, _super);
    function DatasetBindingValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatasetBindingValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        if (!input["datasetId"] && !input["paginatedReportBindings"]) {
            return [{
                    message: "datasetBinding cannot be empty",
                    path: (path ? path + "." : "") + field,
                    keyword: "invalid"
                }];
        }
        var fields = [
            {
                field: "datasetId",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "paginatedReportBindings",
                validators: [validator_1.Validators.paginatedReportDatasetBindingArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return DatasetBindingValidator;
}(typeValidator_1.ObjectValidator));
exports.DatasetBindingValidator = DatasetBindingValidator;


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_102537__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExportDataRequestValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_102537__(3);
var typeValidator_1 = __nested_webpack_require_102537__(4);
var ExportDataRequestValidator = /** @class */ (function (_super) {
    __extends(ExportDataRequestValidator, _super);
    function ExportDataRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExportDataRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "rows",
                validators: [new typeValidator_1.NumberValidator()]
            },
            {
                field: "exportDataType",
                validators: [new typeValidator_1.EnumValidator([0, 1])]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ExportDataRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.ExportDataRequestValidator = ExportDataRequestValidator;


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_104881__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExtensionsValidator = exports.MenuGroupExtensionValidator = exports.ExtensionValidator = exports.CommandExtensionValidator = exports.ExtensionItemValidator = exports.ExtensionPointsValidator = exports.GroupedMenuExtensionValidator = exports.FlatMenuExtensionValidator = exports.MenuExtensionBaseValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_104881__(3);
var typeValidator_1 = __nested_webpack_require_104881__(4);
var validator_1 = __nested_webpack_require_104881__(1);
var MenuExtensionBaseValidator = /** @class */ (function (_super) {
    __extends(MenuExtensionBaseValidator, _super);
    function MenuExtensionBaseValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuExtensionBaseValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "title",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "icon",
                validators: [validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return MenuExtensionBaseValidator;
}(typeValidator_1.ObjectValidator));
exports.MenuExtensionBaseValidator = MenuExtensionBaseValidator;
var FlatMenuExtensionValidator = /** @class */ (function (_super) {
    __extends(FlatMenuExtensionValidator, _super);
    function FlatMenuExtensionValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlatMenuExtensionValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "menuLocation",
                validators: [validator_1.Validators.menuLocationValidator]
            },
            {
                field: "groupName",
                validators: [validator_1.Validators.fieldForbiddenValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FlatMenuExtensionValidator;
}(MenuExtensionBaseValidator));
exports.FlatMenuExtensionValidator = FlatMenuExtensionValidator;
var GroupedMenuExtensionValidator = /** @class */ (function (_super) {
    __extends(GroupedMenuExtensionValidator, _super);
    function GroupedMenuExtensionValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupedMenuExtensionValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "groupName",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "menuLocation",
                validators: [validator_1.Validators.fieldForbiddenValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return GroupedMenuExtensionValidator;
}(MenuExtensionBaseValidator));
exports.GroupedMenuExtensionValidator = GroupedMenuExtensionValidator;
var ExtensionPointsValidator = /** @class */ (function (_super) {
    __extends(ExtensionPointsValidator, _super);
    function ExtensionPointsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionPointsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visualContextMenu",
                validators: [validator_1.Validators.menuExtensionValidator]
            },
            {
                field: "visualOptionsMenu",
                validators: [validator_1.Validators.menuExtensionValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ExtensionPointsValidator;
}(typeValidator_1.ObjectValidator));
exports.ExtensionPointsValidator = ExtensionPointsValidator;
var ExtensionItemValidator = /** @class */ (function (_super) {
    __extends(ExtensionItemValidator, _super);
    function ExtensionItemValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionItemValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "extend",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.extensionPointsValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ExtensionItemValidator;
}(typeValidator_1.ObjectValidator));
exports.ExtensionItemValidator = ExtensionItemValidator;
var CommandExtensionValidator = /** @class */ (function (_super) {
    __extends(CommandExtensionValidator, _super);
    function CommandExtensionValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandExtensionValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "title",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "icon",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "selector",
                validators: [validator_1.Validators.commandExtensionSelectorValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CommandExtensionValidator;
}(ExtensionItemValidator));
exports.CommandExtensionValidator = CommandExtensionValidator;
var ExtensionValidator = /** @class */ (function (_super) {
    __extends(ExtensionValidator, _super);
    function ExtensionValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "command",
                validators: [validator_1.Validators.commandExtensionValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ExtensionValidator;
}(typeValidator_1.ObjectValidator));
exports.ExtensionValidator = ExtensionValidator;
var MenuGroupExtensionValidator = /** @class */ (function (_super) {
    __extends(MenuGroupExtensionValidator, _super);
    function MenuGroupExtensionValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuGroupExtensionValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "title",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "menuLocation",
                validators: [validator_1.Validators.menuLocationValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return MenuGroupExtensionValidator;
}(typeValidator_1.ObjectValidator));
exports.MenuGroupExtensionValidator = MenuGroupExtensionValidator;
var ExtensionsValidator = /** @class */ (function (_super) {
    __extends(ExtensionsValidator, _super);
    function ExtensionsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "commands",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.commandExtensionArrayValidator]
            },
            {
                field: "groups",
                validators: [validator_1.Validators.menuGroupExtensionArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ExtensionsValidator;
}(typeValidator_1.ObjectValidator));
exports.ExtensionsValidator = ExtensionsValidator;


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_117372__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnLoadFiltersValidator = exports.OnLoadFiltersBaseRemoveOperationValidator = exports.OnLoadFiltersBaseValidator = exports.ConditionItemValidator = exports.RemoveFiltersRequestValidator = exports.UpdateFiltersRequestValidator = exports.FilterValidator = exports.HierarchyFilterNodeValidator = exports.HierarchyFilterValidator = exports.IncludeExcludeFilterValidator = exports.NotSupportedFilterValidator = exports.TopNFilterValidator = exports.RelativeTimeFilterValidator = exports.RelativeDateFilterValidator = exports.RelativeDateTimeFilterValidator = exports.AdvancedFilterValidator = exports.BasicFilterValidator = exports.FilterValidatorBase = exports.FilterDisplaySettingsValidator = exports.FilterMeasureTargetValidator = exports.FilterKeyHierarchyTargetValidator = exports.FilterHierarchyTargetValidator = exports.FilterKeyColumnsTargetValidator = exports.FilterColumnTargetValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_117372__(3);
var typeValidator_1 = __nested_webpack_require_117372__(4);
var validator_1 = __nested_webpack_require_117372__(1);
var FilterColumnTargetValidator = /** @class */ (function (_super) {
    __extends(FilterColumnTargetValidator, _super);
    function FilterColumnTargetValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterColumnTargetValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "table",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "column",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FilterColumnTargetValidator;
}(typeValidator_1.ObjectValidator));
exports.FilterColumnTargetValidator = FilterColumnTargetValidator;
var FilterKeyColumnsTargetValidator = /** @class */ (function (_super) {
    __extends(FilterKeyColumnsTargetValidator, _super);
    function FilterKeyColumnsTargetValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterKeyColumnsTargetValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "keys",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringArrayValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FilterKeyColumnsTargetValidator;
}(FilterColumnTargetValidator));
exports.FilterKeyColumnsTargetValidator = FilterKeyColumnsTargetValidator;
var FilterHierarchyTargetValidator = /** @class */ (function (_super) {
    __extends(FilterHierarchyTargetValidator, _super);
    function FilterHierarchyTargetValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterHierarchyTargetValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "table",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "hierarchy",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "hierarchyLevel",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FilterHierarchyTargetValidator;
}(typeValidator_1.ObjectValidator));
exports.FilterHierarchyTargetValidator = FilterHierarchyTargetValidator;
var FilterKeyHierarchyTargetValidator = /** @class */ (function (_super) {
    __extends(FilterKeyHierarchyTargetValidator, _super);
    function FilterKeyHierarchyTargetValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterKeyHierarchyTargetValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "keys",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringArrayValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FilterKeyHierarchyTargetValidator;
}(FilterHierarchyTargetValidator));
exports.FilterKeyHierarchyTargetValidator = FilterKeyHierarchyTargetValidator;
var FilterMeasureTargetValidator = /** @class */ (function (_super) {
    __extends(FilterMeasureTargetValidator, _super);
    function FilterMeasureTargetValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterMeasureTargetValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "table",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "measure",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FilterMeasureTargetValidator;
}(typeValidator_1.ObjectValidator));
exports.FilterMeasureTargetValidator = FilterMeasureTargetValidator;
var FilterDisplaySettingsValidator = /** @class */ (function (_super) {
    __extends(FilterDisplaySettingsValidator, _super);
    function FilterDisplaySettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterDisplaySettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "isLockedInViewMode",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "isHiddenInViewMode",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "displayName",
                validators: [validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FilterDisplaySettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.FilterDisplaySettingsValidator = FilterDisplaySettingsValidator;
var FilterValidatorBase = /** @class */ (function (_super) {
    __extends(FilterValidatorBase, _super);
    function FilterValidatorBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterValidatorBase.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "target",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filterTargetValidator]
            },
            {
                field: "$schema",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.filterTypeValidator]
            },
            {
                field: "displaySettings",
                validators: [validator_1.Validators.filterDisplaySettingsValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FilterValidatorBase;
}(typeValidator_1.ObjectValidator));
exports.FilterValidatorBase = FilterValidatorBase;
var BasicFilterValidator = /** @class */ (function (_super) {
    __extends(BasicFilterValidator, _super);
    function BasicFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "operator",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "values",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.anyArrayValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.basicFilterTypeValidator]
            },
            {
                field: "requireSingleSelection",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return BasicFilterValidator;
}(FilterValidatorBase));
exports.BasicFilterValidator = BasicFilterValidator;
var AdvancedFilterValidator = /** @class */ (function (_super) {
    __extends(AdvancedFilterValidator, _super);
    function AdvancedFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "logicalOperator",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "conditions",
                validators: [validator_1.Validators.filterConditionsValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.advancedFilterTypeValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return AdvancedFilterValidator;
}(FilterValidatorBase));
exports.AdvancedFilterValidator = AdvancedFilterValidator;
var RelativeDateTimeFilterValidator = /** @class */ (function (_super) {
    __extends(RelativeDateTimeFilterValidator, _super);
    function RelativeDateTimeFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RelativeDateTimeFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "operator",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.relativeDateFilterOperatorValidator]
            },
            {
                field: "timeUnitsCount",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "timeUnitType",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.relativeDateTimeFilterUnitTypeValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.relativeDateTimeFilterTypeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return RelativeDateTimeFilterValidator;
}(FilterValidatorBase));
exports.RelativeDateTimeFilterValidator = RelativeDateTimeFilterValidator;
var RelativeDateFilterValidator = /** @class */ (function (_super) {
    __extends(RelativeDateFilterValidator, _super);
    function RelativeDateFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RelativeDateFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "includeToday",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.booleanValidator]
            },
            {
                field: "timeUnitType",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.relativeDateFilterTimeUnitTypeValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.relativeDateFilterTypeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return RelativeDateFilterValidator;
}(RelativeDateTimeFilterValidator));
exports.RelativeDateFilterValidator = RelativeDateFilterValidator;
var RelativeTimeFilterValidator = /** @class */ (function (_super) {
    __extends(RelativeTimeFilterValidator, _super);
    function RelativeTimeFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RelativeTimeFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "timeUnitType",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.relativeTimeFilterTimeUnitTypeValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.relativeTimeFilterTypeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return RelativeTimeFilterValidator;
}(RelativeDateTimeFilterValidator));
exports.RelativeTimeFilterValidator = RelativeTimeFilterValidator;
var TopNFilterValidator = /** @class */ (function (_super) {
    __extends(TopNFilterValidator, _super);
    function TopNFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopNFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "operator",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "itemCount",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.numberValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.topNFilterTypeValidator]
            },
            {
                field: "orderBy",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filterTargetValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return TopNFilterValidator;
}(FilterValidatorBase));
exports.TopNFilterValidator = TopNFilterValidator;
var NotSupportedFilterValidator = /** @class */ (function (_super) {
    __extends(NotSupportedFilterValidator, _super);
    function NotSupportedFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotSupportedFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "message",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "notSupportedTypeName",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.notSupportedFilterTypeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return NotSupportedFilterValidator;
}(FilterValidatorBase));
exports.NotSupportedFilterValidator = NotSupportedFilterValidator;
var IncludeExcludeFilterValidator = /** @class */ (function (_super) {
    __extends(IncludeExcludeFilterValidator, _super);
    function IncludeExcludeFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IncludeExcludeFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "isExclude",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.booleanValidator]
            },
            {
                field: "values",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.anyArrayValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.includeExludeFilterTypeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return IncludeExcludeFilterValidator;
}(FilterValidatorBase));
exports.IncludeExcludeFilterValidator = IncludeExcludeFilterValidator;
var HierarchyFilterValidator = /** @class */ (function (_super) {
    __extends(HierarchyFilterValidator, _super);
    function HierarchyFilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HierarchyFilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "hierarchyData",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.hierarchyFilterValuesValidator]
            },
            {
                field: "filterType",
                validators: [validator_1.Validators.hierarchyFilterTypeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return HierarchyFilterValidator;
}(FilterValidatorBase));
exports.HierarchyFilterValidator = HierarchyFilterValidator;
var HierarchyFilterNodeValidator = /** @class */ (function (_super) {
    __extends(HierarchyFilterNodeValidator, _super);
    function HierarchyFilterNodeValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HierarchyFilterNodeValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "value",
                validators: [validator_1.Validators.anyValueValidator]
            },
            {
                field: "keyValues",
                validators: [validator_1.Validators.anyArrayValidator]
            },
            {
                field: "children",
                validators: [validator_1.Validators.hierarchyFilterValuesValidator]
            },
            {
                field: "operator",
                validators: [validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return HierarchyFilterNodeValidator;
}(typeValidator_1.ObjectValidator));
exports.HierarchyFilterNodeValidator = HierarchyFilterNodeValidator;
var FilterValidator = /** @class */ (function (_super) {
    __extends(FilterValidator, _super);
    function FilterValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        return validator_1.Validators.anyFilterValidator.validate(input, path, field);
    };
    return FilterValidator;
}(typeValidator_1.ObjectValidator));
exports.FilterValidator = FilterValidator;
var UpdateFiltersRequestValidator = /** @class */ (function (_super) {
    __extends(UpdateFiltersRequestValidator, _super);
    function UpdateFiltersRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateFiltersRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "filtersOperation",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersOperationsUpdateValidator]
            },
            {
                field: "filters",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return UpdateFiltersRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.UpdateFiltersRequestValidator = UpdateFiltersRequestValidator;
var RemoveFiltersRequestValidator = /** @class */ (function (_super) {
    __extends(RemoveFiltersRequestValidator, _super);
    function RemoveFiltersRequestValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemoveFiltersRequestValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "filtersOperation",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersOperationsRemoveAllValidator]
            },
            {
                field: "filters",
                validators: [validator_1.Validators.fieldForbiddenValidator, validator_1.Validators.filtersArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return RemoveFiltersRequestValidator;
}(typeValidator_1.ObjectValidator));
exports.RemoveFiltersRequestValidator = RemoveFiltersRequestValidator;
var ConditionItemValidator = /** @class */ (function (_super) {
    __extends(ConditionItemValidator, _super);
    function ConditionItemValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConditionItemValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "value",
                validators: [validator_1.Validators.anyValueValidator]
            },
            {
                field: "operator",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ConditionItemValidator;
}(typeValidator_1.ObjectValidator));
exports.ConditionItemValidator = ConditionItemValidator;
var OnLoadFiltersBaseValidator = /** @class */ (function (_super) {
    __extends(OnLoadFiltersBaseValidator, _super);
    function OnLoadFiltersBaseValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnLoadFiltersBaseValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "operation",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersOperationsUpdateValidator]
            },
            {
                field: "filters",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return OnLoadFiltersBaseValidator;
}(typeValidator_1.ObjectValidator));
exports.OnLoadFiltersBaseValidator = OnLoadFiltersBaseValidator;
var OnLoadFiltersBaseRemoveOperationValidator = /** @class */ (function (_super) {
    __extends(OnLoadFiltersBaseRemoveOperationValidator, _super);
    function OnLoadFiltersBaseRemoveOperationValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnLoadFiltersBaseRemoveOperationValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "operation",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.filtersOperationsRemoveAllValidator]
            },
            {
                field: "filters",
                validators: [validator_1.Validators.fieldForbiddenValidator, validator_1.Validators.filtersArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return OnLoadFiltersBaseRemoveOperationValidator;
}(typeValidator_1.ObjectValidator));
exports.OnLoadFiltersBaseRemoveOperationValidator = OnLoadFiltersBaseRemoveOperationValidator;
var OnLoadFiltersValidator = /** @class */ (function (_super) {
    __extends(OnLoadFiltersValidator, _super);
    function OnLoadFiltersValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnLoadFiltersValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "allPages",
                validators: [validator_1.Validators.onLoadFiltersBaseValidator]
            },
            {
                field: "currentPage",
                validators: [validator_1.Validators.onLoadFiltersBaseValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return OnLoadFiltersValidator;
}(typeValidator_1.ObjectValidator));
exports.OnLoadFiltersValidator = OnLoadFiltersValidator;


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_151344__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PageLayoutValidator = exports.DisplayStateValidator = exports.VisualLayoutValidator = exports.CustomLayoutValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_151344__(3);
var typeValidator_1 = __nested_webpack_require_151344__(4);
var validator_1 = __nested_webpack_require_151344__(1);
var CustomLayoutValidator = /** @class */ (function (_super) {
    __extends(CustomLayoutValidator, _super);
    function CustomLayoutValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomLayoutValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "pageSize",
                validators: [validator_1.Validators.pageSizeValidator]
            },
            {
                field: "displayOption",
                validators: [validator_1.Validators.customLayoutDisplayOptionValidator]
            },
            {
                field: "pagesLayout",
                validators: [validator_1.Validators.pagesLayoutValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CustomLayoutValidator;
}(typeValidator_1.ObjectValidator));
exports.CustomLayoutValidator = CustomLayoutValidator;
var VisualLayoutValidator = /** @class */ (function (_super) {
    __extends(VisualLayoutValidator, _super);
    function VisualLayoutValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualLayoutValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "x",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "y",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "z",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "width",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "height",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "displayState",
                validators: [validator_1.Validators.displayStateValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return VisualLayoutValidator;
}(typeValidator_1.ObjectValidator));
exports.VisualLayoutValidator = VisualLayoutValidator;
var DisplayStateValidator = /** @class */ (function (_super) {
    __extends(DisplayStateValidator, _super);
    function DisplayStateValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisplayStateValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "mode",
                validators: [validator_1.Validators.displayStateModeValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return DisplayStateValidator;
}(typeValidator_1.ObjectValidator));
exports.DisplayStateValidator = DisplayStateValidator;
var PageLayoutValidator = /** @class */ (function (_super) {
    __extends(PageLayoutValidator, _super);
    function PageLayoutValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageLayoutValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visualsLayout",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.pageLayoutValidator]
            },
            {
                field: "defaultLayout",
                validators: [validator_1.Validators.visualLayoutValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PageLayoutValidator;
}(typeValidator_1.ObjectValidator));
exports.PageLayoutValidator = PageLayoutValidator;


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_157823__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PageViewFieldValidator = exports.PageValidator = exports.CustomPageSizeValidator = exports.PageSizeValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_157823__(3);
var typeValidator_1 = __nested_webpack_require_157823__(4);
var validator_1 = __nested_webpack_require_157823__(1);
var PageSizeValidator = /** @class */ (function (_super) {
    __extends(PageSizeValidator, _super);
    function PageSizeValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageSizeValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "type",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.pageSizeTypeValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PageSizeValidator;
}(typeValidator_1.ObjectValidator));
exports.PageSizeValidator = PageSizeValidator;
var CustomPageSizeValidator = /** @class */ (function (_super) {
    __extends(CustomPageSizeValidator, _super);
    function CustomPageSizeValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomPageSizeValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "width",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "height",
                validators: [validator_1.Validators.numberValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CustomPageSizeValidator;
}(PageSizeValidator));
exports.CustomPageSizeValidator = CustomPageSizeValidator;
var PageValidator = /** @class */ (function (_super) {
    __extends(PageValidator, _super);
    function PageValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PageValidator;
}(typeValidator_1.ObjectValidator));
exports.PageValidator = PageValidator;
var PageViewFieldValidator = /** @class */ (function (_super) {
    __extends(PageViewFieldValidator, _super);
    function PageViewFieldValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageViewFieldValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var possibleValues = ["actualSize", "fitToWidth", "oneColumn"];
        if (possibleValues.indexOf(input) < 0) {
            return [{
                    message: "pageView must be a string with one of the following values: \"actualSize\", \"fitToWidth\", \"oneColumn\""
                }];
        }
        return null;
    };
    return PageViewFieldValidator;
}(typeValidator_1.StringValidator));
exports.PageViewFieldValidator = PageViewFieldValidator;


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_163263__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VisualizationsPaneValidator = exports.SyncSlicersPaneValidator = exports.SelectionPaneValidator = exports.PageNavigationPaneValidator = exports.FiltersPaneValidator = exports.FieldsPaneValidator = exports.BookmarksPaneValidator = exports.QnaPanesValidator = exports.ReportPanesValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_163263__(3);
var typeValidator_1 = __nested_webpack_require_163263__(4);
var validator_1 = __nested_webpack_require_163263__(1);
var ReportPanesValidator = /** @class */ (function (_super) {
    __extends(ReportPanesValidator, _super);
    function ReportPanesValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReportPanesValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "bookmarks",
                validators: [validator_1.Validators.bookmarksPaneValidator]
            },
            {
                field: "fields",
                validators: [validator_1.Validators.fieldsPaneValidator]
            },
            {
                field: "filters",
                validators: [validator_1.Validators.filtersPaneValidator]
            },
            {
                field: "pageNavigation",
                validators: [validator_1.Validators.pageNavigationPaneValidator]
            },
            {
                field: "selection",
                validators: [validator_1.Validators.selectionPaneValidator]
            },
            {
                field: "syncSlicers",
                validators: [validator_1.Validators.syncSlicersPaneValidator]
            },
            {
                field: "visualizations",
                validators: [validator_1.Validators.visualizationsPaneValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ReportPanesValidator;
}(typeValidator_1.ObjectValidator));
exports.ReportPanesValidator = ReportPanesValidator;
var QnaPanesValidator = /** @class */ (function (_super) {
    __extends(QnaPanesValidator, _super);
    function QnaPanesValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QnaPanesValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "filters",
                validators: [validator_1.Validators.filtersPaneValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return QnaPanesValidator;
}(typeValidator_1.ObjectValidator));
exports.QnaPanesValidator = QnaPanesValidator;
var BookmarksPaneValidator = /** @class */ (function (_super) {
    __extends(BookmarksPaneValidator, _super);
    function BookmarksPaneValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BookmarksPaneValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return BookmarksPaneValidator;
}(typeValidator_1.ObjectValidator));
exports.BookmarksPaneValidator = BookmarksPaneValidator;
var FieldsPaneValidator = /** @class */ (function (_super) {
    __extends(FieldsPaneValidator, _super);
    function FieldsPaneValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldsPaneValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "expanded",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FieldsPaneValidator;
}(typeValidator_1.ObjectValidator));
exports.FieldsPaneValidator = FieldsPaneValidator;
var FiltersPaneValidator = /** @class */ (function (_super) {
    __extends(FiltersPaneValidator, _super);
    function FiltersPaneValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FiltersPaneValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "expanded",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return FiltersPaneValidator;
}(typeValidator_1.ObjectValidator));
exports.FiltersPaneValidator = FiltersPaneValidator;
var PageNavigationPaneValidator = /** @class */ (function (_super) {
    __extends(PageNavigationPaneValidator, _super);
    function PageNavigationPaneValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageNavigationPaneValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "position",
                validators: [validator_1.Validators.pageNavigationPositionValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PageNavigationPaneValidator;
}(typeValidator_1.ObjectValidator));
exports.PageNavigationPaneValidator = PageNavigationPaneValidator;
var SelectionPaneValidator = /** @class */ (function (_super) {
    __extends(SelectionPaneValidator, _super);
    function SelectionPaneValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionPaneValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SelectionPaneValidator;
}(typeValidator_1.ObjectValidator));
exports.SelectionPaneValidator = SelectionPaneValidator;
var SyncSlicersPaneValidator = /** @class */ (function (_super) {
    __extends(SyncSlicersPaneValidator, _super);
    function SyncSlicersPaneValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SyncSlicersPaneValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SyncSlicersPaneValidator;
}(typeValidator_1.ObjectValidator));
exports.SyncSlicersPaneValidator = SyncSlicersPaneValidator;
var VisualizationsPaneValidator = /** @class */ (function (_super) {
    __extends(VisualizationsPaneValidator, _super);
    function VisualizationsPaneValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualizationsPaneValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "expanded",
                validators: [validator_1.Validators.booleanValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return VisualizationsPaneValidator;
}(typeValidator_1.ObjectValidator));
exports.VisualizationsPaneValidator = VisualizationsPaneValidator;


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_175009__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QnaInterpretInputDataValidator = exports.QnaSettingsValidator = exports.LoadQnaValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_175009__(3);
var typeValidator_1 = __nested_webpack_require_175009__(4);
var validator_1 = __nested_webpack_require_175009__(1);
var LoadQnaValidator = /** @class */ (function (_super) {
    __extends(LoadQnaValidator, _super);
    function LoadQnaValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadQnaValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "accessToken",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "datasetIds",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringArrayValidator]
            },
            {
                field: "question",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "viewMode",
                validators: [validator_1.Validators.viewModeValidator]
            },
            {
                field: "settings",
                validators: [validator_1.Validators.qnaSettingValidator]
            },
            {
                field: "tokenType",
                validators: [validator_1.Validators.tokenTypeValidator]
            },
            {
                field: "groupId",
                validators: [validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return LoadQnaValidator;
}(typeValidator_1.ObjectValidator));
exports.LoadQnaValidator = LoadQnaValidator;
var QnaSettingsValidator = /** @class */ (function (_super) {
    __extends(QnaSettingsValidator, _super);
    function QnaSettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QnaSettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "filterPaneEnabled",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "hideErrors",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "panes",
                validators: [validator_1.Validators.qnaPanesValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return QnaSettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.QnaSettingsValidator = QnaSettingsValidator;
var QnaInterpretInputDataValidator = /** @class */ (function (_super) {
    __extends(QnaInterpretInputDataValidator, _super);
    function QnaInterpretInputDataValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QnaInterpretInputDataValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "datasetIds",
                validators: [validator_1.Validators.stringArrayValidator]
            },
            {
                field: "question",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return QnaInterpretInputDataValidator;
}(typeValidator_1.ObjectValidator));
exports.QnaInterpretInputDataValidator = QnaInterpretInputDataValidator;


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_180720__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportCreateValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_180720__(3);
var typeValidator_1 = __nested_webpack_require_180720__(4);
var validator_1 = __nested_webpack_require_180720__(1);
var ReportCreateValidator = /** @class */ (function (_super) {
    __extends(ReportCreateValidator, _super);
    function ReportCreateValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReportCreateValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "accessToken",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "datasetId",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "groupId",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "tokenType",
                validators: [validator_1.Validators.tokenTypeValidator]
            },
            {
                field: "theme",
                validators: [validator_1.Validators.customThemeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ReportCreateValidator;
}(typeValidator_1.ObjectValidator));
exports.ReportCreateValidator = ReportCreateValidator;


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_183578__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportLoadValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_183578__(3);
var typeValidator_1 = __nested_webpack_require_183578__(4);
var validator_1 = __nested_webpack_require_183578__(1);
var ReportLoadValidator = /** @class */ (function (_super) {
    __extends(ReportLoadValidator, _super);
    function ReportLoadValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReportLoadValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "accessToken",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "id",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "groupId",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "settings",
                validators: [validator_1.Validators.settingsValidator]
            },
            {
                field: "pageName",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "filters",
                validators: [validator_1.Validators.reportLoadFiltersValidator]
            },
            {
                field: "permissions",
                validators: [validator_1.Validators.permissionsValidator]
            },
            {
                field: "viewMode",
                validators: [validator_1.Validators.viewModeValidator]
            },
            {
                field: "tokenType",
                validators: [validator_1.Validators.tokenTypeValidator]
            },
            {
                field: "bookmark",
                validators: [validator_1.Validators.applyBookmarkValidator]
            },
            {
                field: "theme",
                validators: [validator_1.Validators.customThemeValidator]
            },
            {
                field: "embedUrl",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "datasetBinding",
                validators: [validator_1.Validators.datasetBindingValidator]
            },
            {
                field: "contrastMode",
                validators: [validator_1.Validators.contrastModeValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ReportLoadValidator;
}(typeValidator_1.ObjectValidator));
exports.ReportLoadValidator = ReportLoadValidator;


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_187699__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportParameterFieldsValidator = exports.PaginatedReportLoadValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_187699__(3);
var typeValidator_1 = __nested_webpack_require_187699__(4);
var validator_1 = __nested_webpack_require_187699__(1);
var PaginatedReportLoadValidator = /** @class */ (function (_super) {
    __extends(PaginatedReportLoadValidator, _super);
    function PaginatedReportLoadValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginatedReportLoadValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "accessToken",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "id",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "groupId",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "settings",
                validators: [validator_1.Validators.paginatedReportsettingsValidator]
            },
            {
                field: "tokenType",
                validators: [validator_1.Validators.tokenTypeValidator]
            },
            {
                field: "embedUrl",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "type",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "parameterValues",
                validators: [validator_1.Validators.parameterValuesArrayValidator]
            },
            {
                field: "datasetBindings",
                validators: [validator_1.Validators.paginatedReportDatasetBindingArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PaginatedReportLoadValidator;
}(typeValidator_1.ObjectValidator));
exports.PaginatedReportLoadValidator = PaginatedReportLoadValidator;
var ReportParameterFieldsValidator = /** @class */ (function () {
    function ReportParameterFieldsValidator() {
    }
    ReportParameterFieldsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "value",
                validators: [validator_1.Validators.stringValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ReportParameterFieldsValidator;
}());
exports.ReportParameterFieldsValidator = ReportParameterFieldsValidator;


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_192195__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SaveAsParametersValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_192195__(3);
var typeValidator_1 = __nested_webpack_require_192195__(4);
var validator_1 = __nested_webpack_require_192195__(1);
var SaveAsParametersValidator = /** @class */ (function (_super) {
    __extends(SaveAsParametersValidator, _super);
    function SaveAsParametersValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaveAsParametersValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SaveAsParametersValidator;
}(typeValidator_1.ObjectValidator));
exports.SaveAsParametersValidator = SaveAsParametersValidator;


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_194476__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SlicerTargetSelectorValidator = exports.VisualTypeSelectorValidator = exports.VisualSelectorValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_194476__(3);
var typeValidator_1 = __nested_webpack_require_194476__(4);
var typeValidator_2 = __nested_webpack_require_194476__(4);
var validator_1 = __nested_webpack_require_194476__(1);
var VisualSelectorValidator = /** @class */ (function (_super) {
    __extends(VisualSelectorValidator, _super);
    function VisualSelectorValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualSelectorValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                // Not required for this selector only - Backward compatibility
                field: "$schema",
                validators: [validator_1.Validators.stringValidator, new typeValidator_2.SchemaValidator("http://powerbi.com/product/schema#visualSelector")]
            },
            {
                field: "visualName",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return VisualSelectorValidator;
}(typeValidator_1.ObjectValidator));
exports.VisualSelectorValidator = VisualSelectorValidator;
var VisualTypeSelectorValidator = /** @class */ (function (_super) {
    __extends(VisualTypeSelectorValidator, _super);
    function VisualTypeSelectorValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualTypeSelectorValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "$schema",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator, new typeValidator_2.SchemaValidator("http://powerbi.com/product/schema#visualTypeSelector")]
            },
            {
                field: "visualType",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return VisualTypeSelectorValidator;
}(typeValidator_1.ObjectValidator));
exports.VisualTypeSelectorValidator = VisualTypeSelectorValidator;
var SlicerTargetSelectorValidator = /** @class */ (function (_super) {
    __extends(SlicerTargetSelectorValidator, _super);
    function SlicerTargetSelectorValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlicerTargetSelectorValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "$schema",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator, new typeValidator_2.SchemaValidator("http://powerbi.com/product/schema#slicerTargetSelector")]
            },
            {
                field: "target",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.slicerTargetValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SlicerTargetSelectorValidator;
}(typeValidator_1.ObjectValidator));
exports.SlicerTargetSelectorValidator = SlicerTargetSelectorValidator;


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_199934__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginatedReportSettingsValidator = exports.SettingsValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_199934__(3);
var typeValidator_1 = __nested_webpack_require_199934__(4);
var validator_1 = __nested_webpack_require_199934__(1);
var SettingsValidator = /** @class */ (function (_super) {
    __extends(SettingsValidator, _super);
    function SettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "filterPaneEnabled",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "navContentPaneEnabled",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "bookmarksPaneEnabled",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "useCustomSaveAsDialog",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "extensions",
                validators: [validator_1.Validators.extensionsValidator]
            },
            {
                field: "layoutType",
                validators: [validator_1.Validators.layoutTypeValidator]
            },
            {
                field: "customLayout",
                validators: [validator_1.Validators.customLayoutValidator]
            },
            {
                field: "background",
                validators: [validator_1.Validators.backgroundValidator]
            },
            {
                field: "visualSettings",
                validators: [validator_1.Validators.visualSettingsValidator]
            },
            {
                field: "hideErrors",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "commands",
                validators: [validator_1.Validators.commandsSettingsArrayValidator]
            },
            {
                field: "hyperlinkClickBehavior",
                validators: [validator_1.Validators.hyperlinkClickBehaviorValidator]
            },
            {
                field: "bars",
                validators: [validator_1.Validators.reportBarsValidator]
            },
            {
                field: "panes",
                validators: [validator_1.Validators.reportPanesValidator]
            },
            {
                field: "personalBookmarksEnabled",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "persistentFiltersEnabled",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "visualRenderedEvents",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "authoringHintsEnabled",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "printSettings",
                validators: [validator_1.Validators.printSettingsValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.SettingsValidator = SettingsValidator;
var PaginatedReportSettingsValidator = /** @class */ (function (_super) {
    __extends(PaginatedReportSettingsValidator, _super);
    function PaginatedReportSettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginatedReportSettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "commands",
                validators: [validator_1.Validators.paginatedReportCommandsValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PaginatedReportSettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.PaginatedReportSettingsValidator = PaginatedReportSettingsValidator;


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_205930__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SlicerStateValidator = exports.SlicerValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_205930__(3);
var typeValidator_1 = __nested_webpack_require_205930__(4);
var validator_1 = __nested_webpack_require_205930__(1);
var SlicerValidator = /** @class */ (function (_super) {
    __extends(SlicerValidator, _super);
    function SlicerValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlicerValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "selector",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.slicerSelectorValidator]
            },
            {
                field: "state",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.slicerStateValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SlicerValidator;
}(typeValidator_1.ObjectValidator));
exports.SlicerValidator = SlicerValidator;
var SlicerStateValidator = /** @class */ (function (_super) {
    __extends(SlicerStateValidator, _super);
    function SlicerStateValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlicerStateValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "filters",
                validators: [validator_1.Validators.filtersArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return SlicerStateValidator;
}(typeValidator_1.ObjectValidator));
exports.SlicerStateValidator = SlicerStateValidator;


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_209360__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TileLoadValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_209360__(3);
var typeValidator_1 = __nested_webpack_require_209360__(4);
var validator_1 = __nested_webpack_require_209360__(1);
var TileLoadValidator = /** @class */ (function (_super) {
    __extends(TileLoadValidator, _super);
    function TileLoadValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileLoadValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "accessToken",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "id",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "dashboardId",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "groupId",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "pageView",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "tokenType",
                validators: [validator_1.Validators.tokenTypeValidator]
            },
            {
                field: "width",
                validators: [validator_1.Validators.numberValidator]
            },
            {
                field: "height",
                validators: [validator_1.Validators.numberValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return TileLoadValidator;
}(typeValidator_1.ObjectValidator));
exports.TileLoadValidator = TileLoadValidator;


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_212632__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VisualHeaderValidator = exports.VisualHeaderSettingsValidator = exports.VisualSettingsValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_212632__(3);
var typeValidator_1 = __nested_webpack_require_212632__(4);
var validator_1 = __nested_webpack_require_212632__(1);
var VisualSettingsValidator = /** @class */ (function (_super) {
    __extends(VisualSettingsValidator, _super);
    function VisualSettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualSettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visualHeaders",
                validators: [validator_1.Validators.visualHeadersValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return VisualSettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.VisualSettingsValidator = VisualSettingsValidator;
var VisualHeaderSettingsValidator = /** @class */ (function (_super) {
    __extends(VisualHeaderSettingsValidator, _super);
    function VisualHeaderSettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualHeaderSettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "visible",
                validators: [validator_1.Validators.booleanValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return VisualHeaderSettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.VisualHeaderSettingsValidator = VisualHeaderSettingsValidator;
var VisualHeaderValidator = /** @class */ (function (_super) {
    __extends(VisualHeaderValidator, _super);
    function VisualHeaderValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualHeaderValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "settings",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.visualHeaderSettingsValidator]
            },
            {
                field: "selector",
                validators: [validator_1.Validators.visualHeaderSelectorValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return VisualHeaderValidator;
}(typeValidator_1.ObjectValidator));
exports.VisualHeaderValidator = VisualHeaderValidator;


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnyOfValidator = void 0;
var AnyOfValidator = /** @class */ (function () {
    function AnyOfValidator(validators) {
        this.validators = validators;
    }
    AnyOfValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var valid = false;
        for (var _i = 0, _a = this.validators; _i < _a.length; _i++) {
            var validator = _a[_i];
            var errors = validator.validate(input, path, field);
            if (!errors) {
                valid = true;
                break;
            }
        }
        if (!valid) {
            return [{
                    message: field + " property is invalid",
                    path: (path ? path + "." : "") + field,
                    keyword: "invalid"
                }];
        }
        return null;
    };
    return AnyOfValidator;
}());
exports.AnyOfValidator = AnyOfValidator;


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FieldForbiddenValidator = void 0;
var FieldForbiddenValidator = /** @class */ (function () {
    function FieldForbiddenValidator() {
    }
    FieldForbiddenValidator.prototype.validate = function (input, path, field) {
        if (input !== undefined) {
            return [{
                    message: field + " is forbidden",
                    path: (path ? path + "." : "") + field,
                    keyword: "forbidden"
                }];
        }
        return null;
    };
    return FieldForbiddenValidator;
}());
exports.FieldForbiddenValidator = FieldForbiddenValidator;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FieldRequiredValidator = void 0;
var FieldRequiredValidator = /** @class */ (function () {
    function FieldRequiredValidator() {
    }
    FieldRequiredValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return [{
                    message: field + " is required",
                    path: (path ? path + "." : "") + field,
                    keyword: "required"
                }];
        }
        return null;
    };
    return FieldRequiredValidator;
}());
exports.FieldRequiredValidator = FieldRequiredValidator;


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_220041__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapValidator = void 0;
var typeValidator_1 = __nested_webpack_require_220041__(4);
var MapValidator = /** @class */ (function (_super) {
    __extends(MapValidator, _super);
    function MapValidator(keyValidators, valueValidators) {
        var _this = _super.call(this) || this;
        _this.keyValidators = keyValidators;
        _this.valueValidators = valueValidators;
        return _this;
    }
    MapValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        for (var key in input) {
            if (input.hasOwnProperty(key)) {
                var fieldsPath = (path ? path + "." : "") + field + "." + key;
                for (var _i = 0, _a = this.keyValidators; _i < _a.length; _i++) {
                    var keyValidator = _a[_i];
                    errors = keyValidator.validate(key, fieldsPath, field);
                    if (errors) {
                        return errors;
                    }
                }
                for (var _b = 0, _c = this.valueValidators; _b < _c.length; _b++) {
                    var valueValidator = _c[_b];
                    errors = valueValidator.validate(input[key], fieldsPath, field);
                    if (errors) {
                        return errors;
                    }
                }
            }
        }
        return null;
    };
    return MapValidator;
}(typeValidator_1.ObjectValidator));
exports.MapValidator = MapValidator;


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_222725__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParametersPanelValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_222725__(3);
var typeValidator_1 = __nested_webpack_require_222725__(4);
var validator_1 = __nested_webpack_require_222725__(1);
var ParametersPanelValidator = /** @class */ (function (_super) {
    __extends(ParametersPanelValidator, _super);
    function ParametersPanelValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParametersPanelValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "expanded",
                validators: [validator_1.Validators.booleanValidator]
            },
            {
                field: "enabled",
                validators: [validator_1.Validators.booleanValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ParametersPanelValidator;
}(typeValidator_1.ObjectValidator));
exports.ParametersPanelValidator = ParametersPanelValidator;


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_225093__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableDataValidator = exports.TableSchemaValidator = exports.ColumnSchemaValidator = exports.CredentialsValidator = exports.DatasourceConnectionConfigValidator = exports.DatasetCreateConfigValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_225093__(3);
var typeValidator_1 = __nested_webpack_require_225093__(4);
var validator_1 = __nested_webpack_require_225093__(1);
var DatasetCreateConfigValidator = /** @class */ (function (_super) {
    __extends(DatasetCreateConfigValidator, _super);
    function DatasetCreateConfigValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatasetCreateConfigValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "locale",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "mashupDocument",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "datasourceConnectionConfig",
                validators: [validator_1.Validators.datasourceConnectionConfigValidator]
            },
            {
                field: "tableSchemaList",
                validators: [validator_1.Validators.tableSchemaListValidator]
            },
            {
                field: "data",
                validators: [validator_1.Validators.tableDataArrayValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        errors = multipleFieldsValidator.validate(input, path, field);
        if (errors) {
            return errors;
        }
        if (input["datasourceConnectionConfig"] && input["mashupDocument"] == null) {
            return [{
                    message: "mashupDocument cannot be empty when datasourceConnectionConfig is presented"
                }];
        }
        if (input["data"] && input["tableSchemaList"] == null) {
            return [{
                    message: "tableSchemaList cannot be empty when data is provided"
                }];
        }
        if (input["data"] == null && input["mashupDocument"] == null) {
            return [{
                    message: "At least one of data or mashupDocument must be provided"
                }];
        }
    };
    return DatasetCreateConfigValidator;
}(typeValidator_1.ObjectValidator));
exports.DatasetCreateConfigValidator = DatasetCreateConfigValidator;
var DatasourceConnectionConfigValidator = /** @class */ (function (_super) {
    __extends(DatasourceConnectionConfigValidator, _super);
    function DatasourceConnectionConfigValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatasourceConnectionConfigValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "dataCacheMode",
                validators: [validator_1.Validators.dataCacheModeValidator]
            },
            {
                field: "credentials",
                validators: [validator_1.Validators.credentialsValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return DatasourceConnectionConfigValidator;
}(typeValidator_1.ObjectValidator));
exports.DatasourceConnectionConfigValidator = DatasourceConnectionConfigValidator;
var CredentialsValidator = /** @class */ (function (_super) {
    __extends(CredentialsValidator, _super);
    function CredentialsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CredentialsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "credentialType",
                validators: [validator_1.Validators.credentialTypeValidator]
            },
            {
                field: "credentialDetails",
                validators: [validator_1.Validators.credentialDetailsValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return CredentialsValidator;
}(typeValidator_1.ObjectValidator));
exports.CredentialsValidator = CredentialsValidator;
var ColumnSchemaValidator = /** @class */ (function (_super) {
    __extends(ColumnSchemaValidator, _super);
    function ColumnSchemaValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnSchemaValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "displayName",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "dataType",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return ColumnSchemaValidator;
}(typeValidator_1.ObjectValidator));
exports.ColumnSchemaValidator = ColumnSchemaValidator;
var TableSchemaValidator = /** @class */ (function (_super) {
    __extends(TableSchemaValidator, _super);
    function TableSchemaValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableSchemaValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "columns",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.columnSchemaArrayValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return TableSchemaValidator;
}(typeValidator_1.ObjectValidator));
exports.TableSchemaValidator = TableSchemaValidator;
var TableDataValidator = /** @class */ (function (_super) {
    __extends(TableDataValidator, _super);
    function TableDataValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableDataValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "name",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "rows",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.rawDataValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return TableDataValidator;
}(typeValidator_1.ObjectValidator));
exports.TableDataValidator = TableDataValidator;


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_235148__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuickCreateValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_235148__(3);
var typeValidator_1 = __nested_webpack_require_235148__(4);
var validator_1 = __nested_webpack_require_235148__(1);
var QuickCreateValidator = /** @class */ (function (_super) {
    __extends(QuickCreateValidator, _super);
    function QuickCreateValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickCreateValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "accessToken",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "groupId",
                validators: [validator_1.Validators.stringValidator]
            },
            {
                field: "tokenType",
                validators: [validator_1.Validators.tokenTypeValidator]
            },
            {
                field: "theme",
                validators: [validator_1.Validators.customThemeValidator]
            },
            {
                field: "datasetCreateConfig",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.datasetCreateConfigValidator]
            },
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return QuickCreateValidator;
}(typeValidator_1.ObjectValidator));
exports.QuickCreateValidator = QuickCreateValidator;


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_238021__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrintSettingsValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_238021__(3);
var typeValidator_1 = __nested_webpack_require_238021__(4);
var PrintSettingsValidator = /** @class */ (function (_super) {
    __extends(PrintSettingsValidator, _super);
    function PrintSettingsValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrintSettingsValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "browserPrintAdjustmentsMode",
                validators: [new typeValidator_1.EnumValidator([0, 1])]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PrintSettingsValidator;
}(typeValidator_1.ObjectValidator));
exports.PrintSettingsValidator = PrintSettingsValidator;


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_240214__) {

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginatedReportDatasetBindingValidator = void 0;
var multipleFieldsValidator_1 = __nested_webpack_require_240214__(3);
var typeValidator_1 = __nested_webpack_require_240214__(4);
var validator_1 = __nested_webpack_require_240214__(1);
var PaginatedReportDatasetBindingValidator = /** @class */ (function (_super) {
    __extends(PaginatedReportDatasetBindingValidator, _super);
    function PaginatedReportDatasetBindingValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginatedReportDatasetBindingValidator.prototype.validate = function (input, path, field) {
        if (input == null) {
            return null;
        }
        var errors = _super.prototype.validate.call(this, input, path, field);
        if (errors) {
            return errors;
        }
        var fields = [
            {
                field: "sourceDatasetId",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            },
            {
                field: "targetDatasetId",
                validators: [validator_1.Validators.fieldRequiredValidator, validator_1.Validators.stringValidator]
            }
        ];
        var multipleFieldsValidator = new multipleFieldsValidator_1.MultipleFieldsValidator(fields);
        return multipleFieldsValidator.validate(input, path, field);
    };
    return PaginatedReportDatasetBindingValidator;
}(typeValidator_1.ObjectValidator));
exports.PaginatedReportDatasetBindingValidator = PaginatedReportDatasetBindingValidator;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_242960__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_242960__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_242960__(0);
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=models.js.map
// SIG // Begin signature block
// SIG // MIIr4gYJKoZIhvcNAQcCoIIr0zCCK88CAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // WNb2+8Nx7D6LpbfhohPb+cdkaBYb+kv1f6wvqYYucZ+g
// SIG // ghFuMIIIfjCCB2agAwIBAgITNgAAAchkggAwtCOCeAAC
// SIG // AAAByDANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjMwMzIwMjAw
// SIG // MDMxWhcNMjQwMzE5MjAwMDMxWjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArKhH7cINkFWa
// SIG // NPbW4CGpQwfhD2vWIwm5iDQIGjc5Siq9Ay9yIB0MPvck
// SIG // Xnp402u+fVvy8Zb+cPXCyiemnyFG7wYwKgPF4+x2awd4
// SIG // beHkFvcWtTV+Yz5oEKVVT0oWR5NfsUHuqEGDlIVFAYB/
// SIG // 7FIlZQWRiC4emeka+jYoFTl50U2mDQ/CvdCquvAd+dBc
// SIG // hoH0BLXWh00rK3NqRoqQj50vTHl+EB5HCer6+uP7iFKi
// SIG // a3vFw1uDonKVKmcz4x8GJo4y5p7plcr4VAB5FdwTpZrz
// SIG // hFObBzJxcxdIT3qMm07RYM6K1EbUn3AKKTEG2O9etQ06
// SIG // oIKCcGHltvj0NZp37NkEJwIDAQABo4IFijCCBYYwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEMMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUskGhjtP5WCMqHOBI
// SIG // YEqYPR0vFkMwDgYDVR0PAQH/BAQDAgeAMEUGA1UdEQQ+
// SIG // MDykOjA4MR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xFjAUBgNVBAUTDTIzNjE2Nys1MDAzNjAwggHm
// SIG // BgNVHR8EggHdMIIB2TCCAdWgggHRoIIBzYY/aHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraWluZnJhL0NSTC9B
// SIG // TUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRwOi8v
// SIG // Y3JsMS5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIw
// SIG // MDEoMikuY3JshjFodHRwOi8vY3JsMi5hbWUuZ2JsL2Ny
// SIG // bC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRw
// SIG // Oi8vY3JsMy5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENB
// SIG // JTIwMDEoMikuY3JshjFodHRwOi8vY3JsNC5hbWUuZ2Js
// SIG // L2NybC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshoG9
// SIG // bGRhcDovLy9DTj1BTUUlMjBDUyUyMENBJTIwMDEoMiks
// SIG // Q049QlkyUEtJQ1NDQTAxLENOPUNEUCxDTj1QdWJsaWMl
// SIG // MjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1D
// SIG // b25maWd1cmF0aW9uLERDPUFNRSxEQz1HQkw/Y2VydGlm
// SIG // aWNhdGVSZXZvY2F0aW9uTGlzdD9iYXNlP29iamVjdENs
// SIG // YXNzPWNSTERpc3RyaWJ1dGlvblBvaW50MB8GA1UdIwQY
// SIG // MBaAFJZRhOBrb3v+2Aarw/KF5imuavnUMB8GA1UdJQQY
// SIG // MBYGCisGAQQBgjdbAQEGCCsGAQUFBwMDMA0GCSqGSIb3
// SIG // DQEBCwUAA4IBAQDG1533NPfZ4bL0nuae9PWCGH0ZmNci
// SIG // CejMn71r/igTKxx635KmcI38lYY/vhbu++jhMlN3V3Ke
// SIG // AJEmuUdbTxtaXlhhJwWW/3i4GfQGjFIot6N3F9OuXURf
// SIG // 8jc4LypadrWJV1l1bmZ/G75FiqMoEDF7DYjyYJ9BNUU3
// SIG // alOgYyXygBJJjSfJR/8Vgd8hYCExm9DJgXDlSuKZ7ZeD
// SIG // ailP2EGIO5+m0QGI1tyMKdc/YgPrJUw7NI9wmx8ET/J5
// SIG // fxrrh21fdowYoGCYnphYtGhGBvnqDdaHXbVECC3gzbU+
// SIG // nLfeFF30rr/jHxoXWzKfFcYCj5Xnw52bu5mDZB8jF/dH
// SIG // vhlPMIII6DCCBtCgAwIBAgITHwAAAFHqj/accwyoOwAA
// SIG // AAAAUTANBgkqhkiG9w0BAQsFADA8MRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRAw
// SIG // DgYDVQQDEwdhbWVyb290MB4XDTIxMDUyMTE4NDQxNFoX
// SIG // DTI2MDUyMTE4NTQxNFowQTETMBEGCgmSJomT8ixkARkW
// SIG // A0dCTDETMBEGCgmSJomT8ixkARkWA0FNRTEVMBMGA1UE
// SIG // AxMMQU1FIENTIENBIDAxMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAyZpSCX0Bno1W1yqXMhT6BUlJ
// SIG // ZWpa4p3xFeiTHO4vm2Q6C/azR5xwxnyYHrkSGDtS2P9X
// SIG // +KDE64V20mmEQkubxnPNeOVnE2RvdPGxgwlq+BhS3ONd
// SIG // VsQPj79q7XgHM9HhzB9+qk0PC9KN1zm9p/seyiRS6JF1
// SIG // dbOqRf1pUl7FAVxmgiCFgV8hHIb/rDPXig7FDi3S0yEx
// SIG // 2CUDVpIq8jEhG8anUFE1WYxM+ni0S5KHwwKPKV4qyGDo
// SIG // DO+9AmDoma3Chyu5WDlW5cdtqXTWsGPE3umtnX6Amlld
// SIG // UFLms4OVR4guKf+n5LIBCC6bTiocfXPomqYjYTKx7AGM
// SIG // faVLaaXmhQIDAQABo4IE3DCCBNgwEgYJKwYBBAGCNxUB
// SIG // BAUCAwIAAjAjBgkrBgEEAYI3FQIEFgQUEmgkQiFHy9Rr
// SIG // vjHPIKTACyN/P0cwHQYDVR0OBBYEFJZRhOBrb3v+2Aar
// SIG // w/KF5imuavnUMIIBBAYDVR0lBIH8MIH5BgcrBgEFAgMF
// SIG // BggrBgEFBQcDAQYIKwYBBQUHAwIGCisGAQQBgjcUAgEG
// SIG // CSsGAQQBgjcVBgYKKwYBBAGCNwoDDAYJKwYBBAGCNxUG
// SIG // BggrBgEFBQcDCQYIKwYBBQUIAgIGCisGAQQBgjdAAQEG
// SIG // CysGAQQBgjcKAwQBBgorBgEEAYI3CgMEBgkrBgEEAYI3
// SIG // FQUGCisGAQQBgjcUAgIGCisGAQQBgjcUAgMGCCsGAQUF
// SIG // BwMDBgorBgEEAYI3WwEBBgorBgEEAYI3WwIBBgorBgEE
// SIG // AYI3WwMBBgorBgEEAYI3WwUBBgorBgEEAYI3WwQBBgor
// SIG // BgEEAYI3WwQCMBkGCSsGAQQBgjcUAgQMHgoAUwB1AGIA
// SIG // QwBBMAsGA1UdDwQEAwIBhjASBgNVHRMBAf8ECDAGAQH/
// SIG // AgEAMB8GA1UdIwQYMBaAFCleUV5krjS566ycDaeMdQHR
// SIG // CQsoMIIBaAYDVR0fBIIBXzCCAVswggFXoIIBU6CCAU+G
// SIG // MWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2lpbmZy
// SIG // YS9jcmwvYW1lcm9vdC5jcmyGI2h0dHA6Ly9jcmwyLmFt
// SIG // ZS5nYmwvY3JsL2FtZXJvb3QuY3JshiNodHRwOi8vY3Js
// SIG // My5hbWUuZ2JsL2NybC9hbWVyb290LmNybIYjaHR0cDov
// SIG // L2NybDEuYW1lLmdibC9jcmwvYW1lcm9vdC5jcmyGgaps
// SIG // ZGFwOi8vL0NOPWFtZXJvb3QsQ049QU1FUm9vdCxDTj1D
// SIG // RFAsQ049UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049
// SIG // U2VydmljZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUs
// SIG // REM9R0JMP2NlcnRpZmljYXRlUmV2b2NhdGlvbkxpc3Q/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jUkxEaXN0cmlidXRpb25Q
// SIG // b2ludDCCAasGCCsGAQUFBwEBBIIBnTCCAZkwRwYIKwYB
// SIG // BQUHMAKGO2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9w
// SIG // a2lpbmZyYS9jZXJ0cy9BTUVSb290X2FtZXJvb3QuY3J0
// SIG // MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMi5hbWUuZ2Js
// SIG // L2FpYS9BTUVSb290X2FtZXJvb3QuY3J0MDcGCCsGAQUF
// SIG // BzAChitodHRwOi8vY3JsMy5hbWUuZ2JsL2FpYS9BTUVS
// SIG // b290X2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMS5hbWUuZ2JsL2FpYS9BTUVSb290X2FtZXJv
// SIG // b3QuY3J0MIGiBggrBgEFBQcwAoaBlWxkYXA6Ly8vQ049
// SIG // YW1lcm9vdCxDTj1BSUEsQ049UHVibGljJTIwS2V5JTIw
// SIG // U2VydmljZXMsQ049U2VydmljZXMsQ049Q29uZmlndXJh
// SIG // dGlvbixEQz1BTUUsREM9R0JMP2NBQ2VydGlmaWNhdGU/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jZXJ0aWZpY2F0aW9uQXV0
// SIG // aG9yaXR5MA0GCSqGSIb3DQEBCwUAA4ICAQBQECO3Tw/o
// SIG // 317Rrd7yadqcswPx1LvIYymkaTN6KcmuRt6HKa0Xe73U
// SIG // x2/AQ30TfgA9GBJngweRykKBusRzyOU17iIubJvy3gA2
// SIG // 1dwtqtB0DsoEv1U/ptVu2v++doTCJ/i+GbssVXkgaX8H
// SIG // +6EOGEmT4evp4GbwR4HwWlc+Dvf8HH8PdUA2Z04CvcwI
// SIG // fckSipbNm84jxJ8XjmTFTWscldL9edj2NsY6iGnyJFIy
// SIG // ur2PS7VRYyV3p1VAJp91gj1jRQtWEyCB8P5g9nE3z8u0
// SIG // ANaU/hjwEQCrdGyravWgnf2JtG+bT26YAokbc8m+32zU
// SIG // tXRO+NK3tAjhOu2FdsG3qNrF4sc7y37R/C+7Pcb/cFfh
// SIG // ttqsirepZii4xStcjMODYuXzGm3IJs0b0owHG6oKd7ZO
// SIG // GvHpmmh9K8/DLriD/sq8bURD10qi/wuW8zM7IpLg1vcR
// SIG // 9dIK2mc0pj44pc6UX0XbttP/VEJgu3lT2eI9VjWtaKjx
// SIG // 38xE9woSMyekPRtzTwgfuysF9DkJisr+yA4po/FPxpbB
// SIG // w9c/hBf32DH/GFxteS2pmjgKIbMP8sDukmEq3lVvuWNJ
// SIG // sybrZwQvQpvaM49fv+JKpLK5YWYEfwksYRR9wU8Hh/ID
// SIG // 9hRCEkbUoQ2W7mMpsp2Nbp/kcn4ivfolUy3Q9Yf0scsQ
// SIG // 6WTLYpm+AoCUJTGCGcwwghnIAgEBMFgwQTETMBEGCgmS
// SIG // JomT8ixkARkWA0dCTDETMBEGCgmSJomT8ixkARkWA0FN
// SIG // RTEVMBMGA1UEAxMMQU1FIENTIENBIDAxAhM2AAAByGSC
// SIG // ADC0I4J4AAIAAAHIMA0GCWCGSAFlAwQCAQUAoIGuMBkG
// SIG // CSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisGAQQB
// SIG // gjcCAQsxDjAMBgorBgEEAYI3AgEVMC8GCSqGSIb3DQEJ
// SIG // BDEiBCDVsRlmuqGGWLZSefk2CBRUhBuBOD+bHy0Gwl8T
// SIG // 0JKkqjBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBpAGMA
// SIG // cgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBADFsQE1+4mJA
// SIG // S6P65AMT7BcL1WNe0RUuA0Bt+CuVtbwa1zq+ZGDtexdb
// SIG // CWxBr5U4oZF6mHY6AyKf+NTFgvZczY3QqYh19SMKGujp
// SIG // FgxBvG0aQ/dVQDtKC5Le2cce15l4X6SAsYk+8q0xMjti
// SIG // QgSfBIEkJZ8FtDwtFaHO5GN/OkEt8M7NEzQOZQcfvSgb
// SIG // lMV8hY3Lf0dAPg4jyay3bQcPjOLsPs5G4GmTDM4qdPYM
// SIG // w5+IzUudbU8mNTmPppT3u2A2xGoQ8Ky5/mava+b11bSM
// SIG // GaJ1QFVCATVph88Fw/958W9et3okjG8TffdVb9J/KW09
// SIG // +oUXuBUjmljUn2ExNxJUxGyhgheUMIIXkAYKKwYBBAGC
// SIG // NwMDATGCF4Awghd8BgkqhkiG9w0BBwKgghdtMIIXaQIB
// SIG // AzEPMA0GCWCGSAFlAwQCAQUAMIIBUgYLKoZIhvcNAQkQ
// SIG // AQSgggFBBIIBPTCCATkCAQEGCisGAQQBhFkKAwEwMTAN
// SIG // BglghkgBZQMEAgEFAAQgVH8KNp+SiwyXjVpLA60gPo3S
// SIG // 9GbqNxZ81BNBirXMZRMCBmVWyBjWNBgTMjAyMzExMjkx
// SIG // MDA3MTguNDMyWjAEgAIB9KCB0aSBzjCByzELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjElMCMGA1UECxMcTWljcm9zb2Z0IEFt
// SIG // ZXJpY2EgT3BlcmF0aW9uczEnMCUGA1UECxMeblNoaWVs
// SIG // ZCBUU1MgRVNOOkEwMDAtMDVFMC1EOTQ3MSUwIwYDVQQD
// SIG // ExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNloIIR
// SIG // 6jCCByAwggUIoAMCAQICEzMAAAHQdwiq76MXxt0AAQAA
// SIG // AdAwDQYJKoZIhvcNAQELBQAwfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTAwHhcNMjMwNTI1MTkxMjE0WhcNMjQw
// SIG // MjAxMTkxMjE0WjCByzELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEl
// SIG // MCMGA1UECxMcTWljcm9zb2Z0IEFtZXJpY2EgT3BlcmF0
// SIG // aW9uczEnMCUGA1UECxMeblNoaWVsZCBUU1MgRVNOOkEw
// SIG // MDAtMDVFMC1EOTQ3MSUwIwYDVQQDExxNaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBTZXJ2aWNlMIICIjANBgkqhkiG9w0B
// SIG // AQEFAAOCAg8AMIICCgKCAgEA3zJX59+X7zNFwFEpiOao
// SIG // htFMT4tuR5EsgYM5N86WDt9dXdThBBc9EKQCtt7NXSRa
// SIG // 4weYA/kjMOc+hMMQuAq11PSmkOFjR6h64Vn7aYKNzJCX
// SIG // sfX65jvTJXVH41BuerCFumFRemI1/va09SQ3Qgx26OZ2
// SIG // YmrDIoBimsBm9h6g+/5I0Ueu0b1Ye0OJ2rQFbuOmX+TC
// SIG // 74kdMTeXDRttMcAcILbWmBJOV5VC2gR+Tp189nlqCMfk
// SIG // owzuwbeQbgAVmPEr5kUHwck9nKaRM047f37NMaeAdXAB
// SIG // 1Q8JRsGbr/UX3N53XcYBaygPDFh2yRdPmllFGCAUfBct
// SIG // oLhVR6B3js3uyLG8r0a2sf//N4GKqPHOWf9f7u5Iy3E4
// SIG // IqYsmfFxEbCxBAieaMdQQS2OgI5m4AMw3TZdi3no/qiG
// SIG // 3Qa/0lLyhAvl8OMYxTDk1FVilnprdpIcJ3VHwTUezc7t
// SIG // c/S9Fr+0wGP7/r+qTYQHqITzAhSXPmpOrjA/Eyks1hY8
// SIG // OWgA5Jg/ZhrgvOsr0ipCCODGss6FHbHk9J35PGNHz47X
// SIG // cNlp3o5esyx7mF8HA2rtjtQzLqInnTVY0xd+1BJmE/qM
// SIG // QvzhV1BjwxELfbc4G0fYPBy7VHxHljrDhA+cYG+a8Mn7
// SIG // yLLOx/3HRxXCIiHM80IGJ7C8hBnqaGQ5CoUjEeXggein
// SIG // L/0CAwEAAaOCAUkwggFFMB0GA1UdDgQWBBQz4QGFktKA
// SIG // PpTrSE34ybcpdJJ0UTAfBgNVHSMEGDAWgBSfpxVdAF5i
// SIG // XYP05dJlpxtTNRnpcjBfBgNVHR8EWDBWMFSgUqBQhk5o
// SIG // dHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2Ny
// SIG // bC9NaWNyb3NvZnQlMjBUaW1lLVN0YW1wJTIwUENBJTIw
// SIG // MjAxMCgxKS5jcmwwbAYIKwYBBQUHAQEEYDBeMFwGCCsG
// SIG // AQUFBzAChlBodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // cGtpb3BzL2NlcnRzL01pY3Jvc29mdCUyMFRpbWUtU3Rh
// SIG // bXAlMjBQQ0ElMjAyMDEwKDEpLmNydDAMBgNVHRMBAf8E
// SIG // AjAAMBYGA1UdJQEB/wQMMAoGCCsGAQUFBwMIMA4GA1Ud
// SIG // DwEB/wQEAwIHgDANBgkqhkiG9w0BAQsFAAOCAgEAl4fn
// SIG // JApGWgNOkjVvqsbUvYB0KeMexvoHYpJ4CiLRK/KLZFyK
// SIG // 5lj2K2q0VgZWPdZahoopR8iJWd4jQVG2jRJmigBjGeWH
// SIG // EuyGVCj2qtY1NJrMpfvKINLfQv2duvmrcd77IR6xULko
// SIG // MEx2Vac7+5PAmJwWKMXYSNbhoah+feZqi77TLMRDf9bK
// SIG // O1Pm91Oiwq8ubsMHM+fo/Do9BlF92/omYPgLNMUzek9E
// SIG // GvATXnPy8HMqmDRGjJFtlQCq5ob1h/Dgg03F4DjZ5wAU
// SIG // BwX1yv3ywGxxRktVzTra+tv4mhwRgJKwhpegYvD38LOn
// SIG // 7PsPrBPa94V/VYNILETKB0bjGol7KxphrLmJy59wME4L
// SIG // jGrcPUfFObybVkpbtQhTuT9CxL0EIjGddrEErEAJDQ07
// SIG // Pa041TY4yFIKGelzzMZXDyA3I8cPG33m+MuMAMTNkUaF
// SIG // nMaZMfuiCH9i/m+4Cx7QcVwlieWzFu1sFAti5bW7q1MA
// SIG // b9EoI6Q7WxKsP7g4FgXqwk/mbctzXPeu4hmkI8mEB+h/
// SIG // 4fV3PLJptp+lY8kkcdrMJ1t4a+kMet1P8WPRy+hTYaxo
// SIG // hRA+2USq58L717zFUFCBJAexlBHjeoXmPIBy7dIy1d8s
// SIG // w4kAPEfKeWBoBgFbfTBMIACTWNYh7x//L84SUmRTZB/L
// SIG // L0c7Tv4t07yq42/GccIwggdxMIIFWaADAgECAhMzAAAA
// SIG // FcXna54Cm0mZAAAAAAAVMA0GCSqGSIb3DQEBCwUAMIGI
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMTIwMAYDVQQDEylNaWNy
// SIG // b3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkg
// SIG // MjAxMDAeFw0yMTA5MzAxODIyMjVaFw0zMDA5MzAxODMy
// SIG // MjVaMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNo
// SIG // aW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMT
// SIG // HU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwMIIC
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA5OGm
// SIG // TOe0ciELeaLL1yR5vQ7VgtP97pwHB9KpbE51yMo1V/YB
// SIG // f2xK4OK9uT4XYDP/XE/HZveVU3Fa4n5KWv64NmeFRiMM
// SIG // tY0Tz3cywBAY6GB9alKDRLemjkZrBxTzxXb1hlDcwUTI
// SIG // cVxRMTegCjhuje3XD9gmU3w5YQJ6xKr9cmmvHaus9ja+
// SIG // NSZk2pg7uhp7M62AW36MEBydUv626GIl3GoPz130/o5T
// SIG // z9bshVZN7928jaTjkY+yOSxRnOlwaQ3KNi1wjjHINSi9
// SIG // 47SHJMPgyY9+tVSP3PoFVZhtaDuaRr3tpK56KTesy+uD
// SIG // RedGbsoy1cCGMFxPLOJiss254o2I5JasAUq7vnGpF1tn
// SIG // YN74kpEeHT39IM9zfUGaRnXNxF803RKJ1v2lIH1+/Nme
// SIG // Rd+2ci/bfV+AutuqfjbsNkz2K26oElHovwUDo9Fzpk03
// SIG // dJQcNIIP8BDyt0cY7afomXw/TNuvXsLz1dhzPUNOwTM5
// SIG // TI4CvEJoLhDqhFFG4tG9ahhaYQFzymeiXtcodgLiMxhy
// SIG // 16cg8ML6EgrXY28MyTZki1ugpoMhXV8wdJGUlNi5UPkL
// SIG // iWHzNgY1GIRH29wb0f2y1BzFa/ZcUlFdEtsluq9QBXps
// SIG // xREdcu+N+VLEhReTwDwV2xo3xwgVGD94q0W29R6HXtqP
// SIG // nhZyacaue7e3PmriLq0CAwEAAaOCAd0wggHZMBIGCSsG
// SIG // AQQBgjcVAQQFAgMBAAEwIwYJKwYBBAGCNxUCBBYEFCqn
// SIG // Uv5kxJq+gpE8RjUpzxD/LwTuMB0GA1UdDgQWBBSfpxVd
// SIG // AF5iXYP05dJlpxtTNRnpcjBcBgNVHSAEVTBTMFEGDCsG
// SIG // AQQBgjdMg30BATBBMD8GCCsGAQUFBwIBFjNodHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL0RvY3MvUmVw
// SIG // b3NpdG9yeS5odG0wEwYDVR0lBAwwCgYIKwYBBQUHAwgw
// SIG // GQYJKwYBBAGCNxQCBAweCgBTAHUAYgBDAEEwCwYDVR0P
// SIG // BAQDAgGGMA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgw
// SIG // FoAU1fZWy4/oolxiaNE9lJBb186aGMQwVgYDVR0fBE8w
// SIG // TTBLoEmgR4ZFaHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraS9jcmwvcHJvZHVjdHMvTWljUm9vQ2VyQXV0XzIw
// SIG // MTAtMDYtMjMuY3JsMFoGCCsGAQUFBwEBBE4wTDBKBggr
// SIG // BgEFBQcwAoY+aHR0cDovL3d3dy5taWNyb3NvZnQuY29t
// SIG // L3BraS9jZXJ0cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0y
// SIG // My5jcnQwDQYJKoZIhvcNAQELBQADggIBAJ1VffwqreEs
// SIG // H2cBMSRb4Z5yS/ypb+pcFLY+TkdkeLEGk5c9MTO1OdfC
// SIG // cTY/2mRsfNB1OW27DzHkwo/7bNGhlBgi7ulmZzpTTd2Y
// SIG // urYeeNg2LpypglYAA7AFvonoaeC6Ce5732pvvinLbtg/
// SIG // SHUB2RjebYIM9W0jVOR4U3UkV7ndn/OOPcbzaN9l9qRW
// SIG // qveVtihVJ9AkvUCgvxm2EhIRXT0n4ECWOKz3+SmJw7wX
// SIG // sFSFQrP8DJ6LGYnn8AtqgcKBGUIZUnWKNsIdw2FzLixr
// SIG // e24/LAl4FOmRsqlb30mjdAy87JGA0j3mSj5mO0+7hvoy
// SIG // GtmW9I/2kQH2zsZ0/fZMcm8Qq3UwxTSwethQ/gpY3UA8
// SIG // x1RtnWN0SCyxTkctwRQEcb9k+SS+c23Kjgm9swFXSVRk
// SIG // 2XPXfx5bRAGOWhmRaw2fpCjcZxkoJLo4S5pu+yFUa2pF
// SIG // EUep8beuyOiJXk+d0tBMdrVXVAmxaQFEfnyhYWxz/gq7
// SIG // 7EFmPWn9y8FBSX5+k77L+DvktxW/tM4+pTFRhLy/AsGC
// SIG // onsXHRWJjXD+57XQKBqJC4822rpM+Zv/Cuk0+CQ1Zyvg
// SIG // DbjmjJnW4SLq8CdCPSWU5nR0W2rRnj7tfqAxM328y+l7
// SIG // vzhwRNGQ8cirOoo6CGJ/2XBjU02N7oJtpQUQwXEGahC0
// SIG // HVUzWLOhcGbyoYIDTTCCAjUCAQEwgfmhgdGkgc4wgcsx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xJTAjBgNVBAsTHE1pY3Jv
// SIG // c29mdCBBbWVyaWNhIE9wZXJhdGlvbnMxJzAlBgNVBAsT
// SIG // Hm5TaGllbGQgVFNTIEVTTjpBMDAwLTA1RTAtRDk0NzEl
// SIG // MCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vy
// SIG // dmljZaIjCgEBMAcGBSsOAwIaAxUAvLfIU/CilF/dZVOR
// SIG // akT/Qn7vTImggYMwgYCkfjB8MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBQQ0EgMjAxMDANBgkqhkiG9w0BAQsFAAIFAOkRFtcw
// SIG // IhgPMjAyMzExMjkwMTQ4MDdaGA8yMDIzMTEzMDAxNDgw
// SIG // N1owdDA6BgorBgEEAYRZCgQBMSwwKjAKAgUA6REW1wIB
// SIG // ADAHAgEAAgIVNTAHAgEAAgITvDAKAgUA6RJoVwIBADA2
// SIG // BgorBgEEAYRZCgQCMSgwJjAMBgorBgEEAYRZCgMCoAow
// SIG // CAIBAAIDB6EgoQowCAIBAAIDAYagMA0GCSqGSIb3DQEB
// SIG // CwUAA4IBAQBDRkay9YCY6kJnV49gl7qHdAW9dEHIdQJ7
// SIG // 8yScGB6ENXSC13GxUFyytoxGBQuLs+Do9DZQSOP/HfOq
// SIG // w2K4SIOd4ewrz11vl9nl2lgufCXAWW81VM4r0tFNbjA0
// SIG // yD7gRQRBuEGiAqS/Vfa7ECvQFT3fRsQzK5X4u755LI0e
// SIG // +XskhL+1sOYwu5DPyUzbMKWilqtTRJBmQr/o7Cy5WqQj
// SIG // kLyW2jR4B8HEoKwozp/j8/RViWSSjRpwa6JVyglX6eVR
// SIG // Qwd9K9+7ry7q6q+UEB89aV7eZw+BtGsnJXK8QMpXhOm9
// SIG // 2ksvWCSb6T56pCKmyOh5qljtvtwH0Vcl3zqxoGLk3YPG
// SIG // MYIEDTCCBAkCAQEwgZMwfDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAg
// SIG // UENBIDIwMTACEzMAAAHQdwiq76MXxt0AAQAAAdAwDQYJ
// SIG // YIZIAWUDBAIBBQCgggFKMBoGCSqGSIb3DQEJAzENBgsq
// SIG // hkiG9w0BCRABBDAvBgkqhkiG9w0BCQQxIgQgsygGDo1N
// SIG // QTgwixwnk3X7lr4fEQUSawZLdl+M2Eq4GN4wgfoGCyqG
// SIG // SIb3DQEJEAIvMYHqMIHnMIHkMIG9BCAIlUAGX7TT/zHd
// SIG // RNmMPnwV2vcOn45k2eVgHq600j8J1zCBmDCBgKR+MHwx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jv
// SIG // c29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwAhMzAAAB0HcI
// SIG // qu+jF8bdAAEAAAHQMCIEIJIeQdfA4XjI5/3kM0OGSarc
// SIG // drYw3rRohew8uLY7gBZSMA0GCSqGSIb3DQEBCwUABIIC
// SIG // AEB1eCPx7oSkWVD/gJDRN3f6QS/1B4Cg6YJ3wuB6H3si
// SIG // 0G6esnx2UWYfPxhqmvqnebeRPY9yHvAuMNhEqOa0z1xP
// SIG // /ezMKbdyZZ1KSnpf+G30pg7OvBkxoBT+y0w4TuXct76M
// SIG // R8AhK40oE6Lcom5sbvRvimzKlh3vgQkZWknZ5zqUsidp
// SIG // O8+TBvf9vQG1StTehatPSf2sH/bAwcw20gRij6ozBD2D
// SIG // l7oi0W5UhaO5GrsdLe14Y8POi2aqY+fPZlRtM5ocAJ2a
// SIG // nfyCChsYbzcM1+lgBEJMu2qSsERBeq9lbVFCJ7NMwH/N
// SIG // a/ztGKzpDIJz81dhqX/GgGmFzEGc1/1jMkLLbWYoKgaa
// SIG // e6ZIAbgkmW4ezZ6hU2GZhcetbId1rJMmtaZw/yos3goK
// SIG // Shrmfk/OBTUMs9wh2NqrSVDD8YHPPKO9Uh9igKw8TXXD
// SIG // Ld2LM20WU7t52keJNmptgb6//7mOc2f4jhX6gpQTYAmb
// SIG // iBco7ZsIPLnBEXeo3tqZY3x/9eJ3yWiXwOreceKo0xMN
// SIG // Om+ijo4ghC9Ud0aY8hTLm6NrmmbwR5KjtFBMRs0+jNIP
// SIG // Asg7HDJ2NpLpA08AG+1XOSKghGxm+UQMbuNFMeLlK+QX
// SIG // 55chb2/UprBeGk83G+GHOM7Hr4fuUN1JAUM3zwt3GpXo
// SIG // 0BNZKjbAXaYgx1eeh6dNirnW
// SIG // End signature block


/***/ }),

/***/ 2581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ createDataViewWildcardSelector)
/* harmony export */ });
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
function createDataViewWildcardSelector(dataViewWildcardMatchingOption) {
    if (dataViewWildcardMatchingOption == null) {
        dataViewWildcardMatchingOption = 0 /* DataViewWildcardMatchingOption.InstancesAndTotals */;
    }
    const selector = {
        data: [
            {
                dataViewWildcard: {
                    matchingOption: dataViewWildcardMatchingOption
                }
            }
        ]
    };
    return selector;
}
//# sourceMappingURL=dataViewWildcard.js.map

/***/ }),

/***/ 6084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hn: () => (/* binding */ Model),
/* harmony export */   L_: () => (/* binding */ NumUpDown),
/* harmony export */   Nt: () => (/* binding */ AlignmentGroup),
/* harmony export */   Zb: () => (/* binding */ Card),
/* harmony export */   iR: () => (/* binding */ Slider),
/* harmony export */   oi: () => (/* binding */ TextInput),
/* harmony export */   xp: () => (/* binding */ FontPicker),
/* harmony export */   zH: () => (/* binding */ ColorPicker)
/* harmony export */ });
/* unused harmony exports SimpleSlice, ToggleSwitch, DatePicker, ItemDropdown, AutoDropdown, DurationPicker, ErrorRangeControl, FieldPicker, ItemFlagsSelection, AutoFlagsSelection, TextArea, GradientBar, ImageUpload, ListEditor, ReadOnlyText, ShapeMapSelector, CompositeSlice, FontControl, MarginPadding, Container, ContainerItem */
/* harmony import */ var _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3827);
/**
 * Powerbi utils components classes for custom visual formatting pane objects
 *
 */

class NamedEntity {
}
class Model {
}
class Card extends NamedEntity {
    getFormattingCard(objectName, group, localizationManager) {
        return {
            displayName: (localizationManager && this.displayNameKey)
                ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName,
            description: (localizationManager && this.descriptionKey)
                ? localizationManager.getDisplayName(this.descriptionKey) : this.description,
            groups: [group],
            uid: objectName,
            analyticsPane: this.analyticsPane
        };
    }
}
class SimpleSlice extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName, localizationManager) {
        const controlType = this.type;
        const propertyName = this.name;
        const sliceDisplayName = (localizationManager && this.displayNameKey) ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName;
        const sliceDescription = (localizationManager && this.descriptionKey) ? localizationManager.getDisplayName(this.descriptionKey) : this.description;
        const componentDisplayName = {
            displayName: sliceDisplayName,
            description: sliceDescription,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName, localizationManager)
            } });
    }
    getFormattingComponent(objectName, localizationManager) {
        return {
            descriptor: _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getDescriptor */ .B(objectName, this),
            value: this.value,
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return [{
                objectName: objectName,
                propertyName: this.name
            }];
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a;
        let newValue = (_a = dataViewObjects === null || dataViewObjects === void 0 ? void 0 : dataViewObjects[objectName]) === null || _a === void 0 ? void 0 : _a[this.name];
        this.value = _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getPropertyValue */ .S(this, newValue, this.value);
    }
}
class AlignmentGroup extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "AlignmentGroup" /* visuals.FormattingComponent.AlignmentGroup */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mode: this.mode, supportsNoSelection: this.supportsNoSelection });
    }
}
class ToggleSwitch extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "ToggleSwitch" /* visuals.FormattingComponent.ToggleSwitch */;
    }
}
class ColorPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ColorPicker" /* visuals.FormattingComponent.ColorPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { defaultColor: this.defaultColor, isNoFillItemSupported: this.isNoFillItemSupported });
    }
}
class NumUpDown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "NumUpDown" /* visuals.FormattingComponent.NumUpDown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { options: this.options });
    }
}
class Slider extends NumUpDown {
    constructor() {
        super(...arguments);
        this.type = "Slider" /* visuals.FormattingComponent.Slider */;
    }
}
class DatePicker extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "DatePicker" /* visuals.FormattingComponent.DatePicker */;
    }
    getFormattingComponent(objectName, localizationManager) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: (localizationManager && this.placeholderKey) ? localizationManager.getDisplayName(this.placeholderKey) : this.placeholder, validators: this.validators });
    }
}
class ItemDropdown extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoDropdown extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mergeValues: this.mergeValues, filterValues: this.filterValues });
    }
}
class DurationPicker extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "DurationPicker" /* visuals.FormattingComponent.DurationPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class ErrorRangeControl extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "ErrorRangeControl" /* visuals.FormattingComponent.ErrorRangeControl */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class FieldPicker extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "FieldPicker" /* visuals.FormattingComponent.FieldPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators, allowMultipleValues: this.allowMultipleValues });
    }
}
class ItemFlagsSelection extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoFlagsSelection extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
}
class TextInput extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "TextInput" /* visuals.FormattingComponent.TextInput */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: this.placeholder });
    }
}
class TextArea extends (/* unused pure expression or super */ null && (TextInput)) {
    constructor() {
        super(...arguments);
        this.type = "TextArea" /* visuals.FormattingComponent.TextArea */;
    }
}
class FontPicker extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "FontPicker" /* visuals.FormattingComponent.FontPicker */;
    }
}
class GradientBar extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "GradientBar" /* visuals.FormattingComponent.GradientBar */;
    }
}
class ImageUpload extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "ImageUpload" /* visuals.FormattingComponent.ImageUpload */;
    }
}
class ListEditor extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "ListEditor" /* visuals.FormattingComponent.ListEditor */;
    }
}
class ReadOnlyText extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "ReadOnlyText" /* visuals.FormattingComponent.ReadOnlyText */;
    }
}
class ShapeMapSelector extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "ShapeMapSelector" /* visuals.FormattingComponent.ShapeMapSelector */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { isAzMapReferenceSelector: this.isAzMapReferenceSelector });
    }
}
class CompositeSlice extends (/* unused pure expression or super */ null && (NamedEntity)) {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName) {
        const controlType = this.type;
        const propertyName = this.name;
        const componentDisplayName = {
            displayName: this.displayName,
            description: this.description,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName)
            } });
    }
}
class FontControl extends (/* unused pure expression or super */ null && (CompositeSlice)) {
    constructor(object) {
        super(object);
        this.type = "FontControl" /* visuals.FormattingComponent.FontControl */;
    }
    getFormattingComponent(objectName) {
        var _a, _b, _c;
        return {
            fontFamily: this.fontFamily.getFormattingComponent(objectName),
            fontSize: this.fontSize.getFormattingComponent(objectName),
            bold: (_a = this.bold) === null || _a === void 0 ? void 0 : _a.getFormattingComponent(objectName),
            italic: (_b = this.italic) === null || _b === void 0 ? void 0 : _b.getFormattingComponent(objectName),
            underline: (_c = this.underline) === null || _c === void 0 ? void 0 : _c.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.fontFamily.getRevertToDefaultDescriptor(objectName)
            .concat(this.fontSize.getRevertToDefaultDescriptor(objectName))
            .concat(this.bold ? this.bold.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.italic ? this.italic.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.underline ? this.underline.getRevertToDefaultDescriptor(objectName) : []);
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a, _b, _c;
        this.fontFamily.setPropertiesValues(dataViewObjects, objectName);
        this.fontSize.setPropertiesValues(dataViewObjects, objectName);
        (_a = this.bold) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, objectName);
        (_b = this.italic) === null || _b === void 0 ? void 0 : _b.setPropertiesValues(dataViewObjects, objectName);
        (_c = this.underline) === null || _c === void 0 ? void 0 : _c.setPropertiesValues(dataViewObjects, objectName);
    }
}
class MarginPadding extends (/* unused pure expression or super */ null && (CompositeSlice)) {
    constructor(object) {
        super(object);
        this.type = "MarginPadding" /* visuals.FormattingComponent.MarginPadding */;
    }
    getFormattingComponent(objectName) {
        return {
            left: this.left.getFormattingComponent(objectName),
            right: this.right.getFormattingComponent(objectName),
            top: this.top.getFormattingComponent(objectName),
            bottom: this.bottom.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.left.getRevertToDefaultDescriptor(objectName)
            .concat(this.right.getRevertToDefaultDescriptor(objectName))
            .concat(this.top.getRevertToDefaultDescriptor(objectName))
            .concat(this.bottom.getRevertToDefaultDescriptor(objectName));
    }
    setPropertiesValues(dataViewObjects, objectName) {
        this.left.setPropertiesValues(dataViewObjects, objectName);
        this.right.setPropertiesValues(dataViewObjects, objectName);
        this.top.setPropertiesValues(dataViewObjects, objectName);
        this.bottom.setPropertiesValues(dataViewObjects, objectName);
    }
}
class Container extends (/* unused pure expression or super */ null && (NamedEntity)) {
}
class ContainerItem extends (/* unused pure expression or super */ null && (NamedEntity)) {
}
//# sourceMappingURL=FormattingSettingsComponents.js.map

/***/ }),

/***/ 4261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FormattingSettingsService */
class FormattingSettingsService {
    constructor(localizationManager) {
        this.localizationManager = localizationManager;
    }
    /**
     * Build visual formatting settings model from metadata dataView
     *
     * @param dataViews metadata dataView object
     * @returns visual formatting settings model
     */
    populateFormattingSettingsModel(typeClass, dataViews) {
        var _a, _b, _c;
        let defaultSettings = new typeClass();
        let dataViewObjects = (_b = (_a = dataViews === null || dataViews === void 0 ? void 0 : dataViews[0]) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.objects;
        if (dataViewObjects) {
            // loop over each formatting property and set its new value if exists
            (_c = defaultSettings.cards) === null || _c === void 0 ? void 0 : _c.forEach((card) => {
                var _a, _b, _c;
                (_a = card === null || card === void 0 ? void 0 : card.slices) === null || _a === void 0 ? void 0 : _a.forEach((slice) => {
                    slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                });
                (_c = (_b = card === null || card === void 0 ? void 0 : card.container) === null || _b === void 0 ? void 0 : _b.containerItems) === null || _c === void 0 ? void 0 : _c.forEach((containerItem) => {
                    var _a;
                    (_a = containerItem === null || containerItem === void 0 ? void 0 : containerItem.slices) === null || _a === void 0 ? void 0 : _a.forEach((slice) => {
                        slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                    });
                });
            });
        }
        return defaultSettings;
    }
    /**
     * Build formatting model by parsing formatting settings model object
     *
     * @returns powerbi visual formatting model
     */
    buildFormattingModel(formattingSettingsModel) {
        var _a;
        let formattingModel = {
            cards: []
        };
        (_a = formattingSettingsModel.cards) === null || _a === void 0 ? void 0 : _a.forEach((card) => {
            if (!card)
                return;
            const objectName = card.name;
            const groupUid = card.name + "-group";
            let formattingGroup = {
                displayName: undefined,
                slices: [],
                uid: groupUid
            };
            let formattingCard = card.getFormattingCard(objectName, formattingGroup, this.localizationManager);
            formattingModel.cards.push(formattingCard);
            // In case formatting model adds data points or top categories (Like when you modify specific visual category color).
            // these categories use same object name and property name from capabilities and the generated uid will be the same for these formatting categories properties
            // Solution => Save slice names to modify each slice uid to be unique by adding counter value to the new slice uid
            const sliceNames = {};
            // Build formatting container slice for each property
            if (card.container) {
                const container = card.container;
                const containerUid = groupUid + "-container";
                const formattingContainer = {
                    displayName: (this.localizationManager && container.displayNameKey)
                        ? this.localizationManager.getDisplayName(container.displayNameKey) : container.displayName,
                    description: (this.localizationManager && container.descriptionKey)
                        ? this.localizationManager.getDisplayName(container.descriptionKey) : container.description,
                    containerItems: [],
                    uid: containerUid
                };
                container.containerItems.forEach((containerItem) => {
                    // Build formatting container item object
                    const containerIemName = containerItem.displayNameKey ? containerItem.displayNameKey : containerItem.displayName;
                    const containerItemUid = containerUid + containerIemName;
                    let formattingContainerItem = {
                        displayName: (this.localizationManager && containerItem.displayNameKey)
                            ? this.localizationManager.getDisplayName(containerItem.displayNameKey) : containerItem.displayName,
                        slices: [],
                        uid: containerItemUid
                    };
                    // Build formatting slices and add them to current formatting container item
                    this.buildFormattingSlices(containerItem.slices, objectName, sliceNames, formattingCard, formattingContainerItem.slices);
                    formattingContainer.containerItems.push(formattingContainerItem);
                });
                formattingGroup.container = formattingContainer;
            }
            if (card.slices) {
                // Build formatting slice for each property
                this.buildFormattingSlices(card.slices, objectName, sliceNames, formattingCard, formattingGroup.slices);
            }
            formattingCard.revertToDefaultDescriptors = this.getRevertToDefaultDescriptor(card);
        });
        return formattingModel;
    }
    buildFormattingSlices(slices, objectName, sliceNames, formattingCard, formattingSlices) {
        slices === null || slices === void 0 ? void 0 : slices.forEach((slice) => {
            let formattingSlice = slice === null || slice === void 0 ? void 0 : slice.getFormattingSlice(objectName, this.localizationManager);
            if (formattingSlice) {
                // Modify formatting slice uid if needed
                if (sliceNames[slice.name] === undefined) {
                    sliceNames[slice.name] = 0;
                }
                else {
                    sliceNames[slice.name]++;
                    formattingSlice.uid = `${formattingSlice.uid}-${sliceNames[slice.name]}`;
                }
                // Set as topLevelToggle if topLevelToggle boolean was set to true
                if (slice.topLevelToggle) {
                    formattingSlice.suppressDisplayName = true;
                    formattingCard.topLevelToggle = formattingSlice;
                }
                else {
                    formattingSlices.push(formattingSlice);
                }
            }
        });
    }
    getRevertToDefaultDescriptor(card) {
        var _a, _b;
        // Proceeded slice names are saved to prevent duplicated default descriptors in case of using 
        // formatting categories & selectors, since they have the same descriptor objectName and propertyName
        const sliceNames = {};
        let revertToDefaultDescriptors = [];
        let cardSlicesDefaultDescriptors = this.getSlicesRevertToDefaultDescriptor(card.name, card.slices, sliceNames);
        let cardContainerSlicesDefaultDescriptors = [];
        (_b = (_a = card.container) === null || _a === void 0 ? void 0 : _a.containerItems) === null || _b === void 0 ? void 0 : _b.forEach((containerItem) => {
            cardContainerSlicesDefaultDescriptors = cardContainerSlicesDefaultDescriptors.concat(this.getSlicesRevertToDefaultDescriptor(card.name, containerItem.slices, sliceNames));
        });
        revertToDefaultDescriptors = cardSlicesDefaultDescriptors.concat(cardContainerSlicesDefaultDescriptors);
        return revertToDefaultDescriptors;
    }
    getSlicesRevertToDefaultDescriptor(cardName, slices, sliceNames) {
        let revertToDefaultDescriptors = [];
        slices === null || slices === void 0 ? void 0 : slices.forEach((slice) => {
            if (slice && !sliceNames[slice.name]) {
                sliceNames[slice.name] = true;
                revertToDefaultDescriptors = revertToDefaultDescriptors.concat(slice.getRevertToDefaultDescriptor(cardName));
            }
        });
        return revertToDefaultDescriptors;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattingSettingsService);
//# sourceMappingURL=FormattingSettingsService.js.map

/***/ }),

/***/ 3827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ getDescriptor),
/* harmony export */   S: () => (/* binding */ getPropertyValue)
/* harmony export */ });
/**
 * Build and return formatting descriptor for simple slice
 *
 * @param objectName Object name from capabilities
 * @param slice formatting simple slice
 * @returns simple slice formatting descriptor
 */
function getDescriptor(objectName, slice) {
    return {
        objectName: objectName,
        propertyName: slice.name,
        selector: slice.selector,
        altConstantValueSelector: slice.altConstantSelector,
        instanceKind: slice.instanceKind
    };
}
/**
 * Get property value from dataview objects if exists
 * Else return the default value from formatting settings object
 *
 * @param value dataview object value
 * @param defaultValue formatting settings default value
 * @returns formatting property value
 */
function getPropertyValue(slice, value, defaultValue) {
    if (value == null || (typeof value === "object" && !value.solid)) {
        return defaultValue;
    }
    if (value.solid) {
        return { value: value === null || value === void 0 ? void 0 : value.solid.color };
    }
    if (slice === null || slice === void 0 ? void 0 : slice.items) {
        let itemsArray = slice.items;
        return itemsArray.find(item => item.value == value);
    }
    return value;
}
//# sourceMappingURL=FormattingSettingsUtils.js.map

/***/ }),

/***/ 8297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ DefaultHandleTouchDelay)
/* harmony export */ });
const DefaultHandleTouchDelay = 500;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 8401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* reexport safe */ _tooltipService__WEBPACK_IMPORTED_MODULE_0__.p)
/* harmony export */ });
/* harmony import */ var _tooltipService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9472);


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ createTooltipServiceWrapper)
/* harmony export */ });
/* unused harmony export TooltipServiceWrapper */
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4264);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8297);
/* provided dependency */ var window = __webpack_require__(6738);


function createTooltipServiceWrapper(tooltipService, rootElement, // this argument is deprecated and is optional now, just to maintain visuals with tooltiputils logic written for versions bellow 3.0.0
handleTouchDelay = _constants__WEBPACK_IMPORTED_MODULE_0__/* .DefaultHandleTouchDelay */ .a) {
    return new TooltipServiceWrapper({
        tooltipService: tooltipService,
        handleTouchDelay: handleTouchDelay,
    });
}
class TooltipServiceWrapper {
    constructor(options) {
        this.visualHostTooltipService = options.tooltipService;
        this.handleTouchDelay = options.handleTouchDelay;
    }
    addTooltip(selection, getTooltipInfoDelegate, getDataPointIdentity, reloadTooltipDataOnMouseMove) {
        if (!selection || !this.visualHostTooltipService.enabled()) {
            return;
        }
        const internalSelection = (0,d3_selection__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(selection.nodes());
        const callTooltip = (func, event, tooltipInfo, selectionIds) => {
            const coordinates = [event.clientX, event.clientY];
            func.call(this.visualHostTooltipService, {
                coordinates: coordinates,
                isTouchEvent: event.pointerType === "touch",
                dataItems: tooltipInfo,
                identities: selectionIds
            });
        };
        internalSelection.on("pointerover", (event, data) => {
            const tooltipInfo = getTooltipInfoDelegate(data);
            if (tooltipInfo == null) {
                return;
            }
            const selectionIds = getDataPointIdentity ? [getDataPointIdentity(data)] : [];
            if (event.pointerType === "mouse") {
                callTooltip(this.visualHostTooltipService.show, event, tooltipInfo, selectionIds);
            }
            if (event.pointerType === "touch") {
                this.handleTouchTimeoutId = window.setTimeout(() => {
                    callTooltip(this.visualHostTooltipService.show, event, tooltipInfo, selectionIds);
                    this.handleTouchTimeoutId = undefined;
                }, this.handleTouchDelay);
            }
        });
        internalSelection.on("pointerout", (event) => {
            if (event.pointerType === "mouse") {
                this.visualHostTooltipService.hide({
                    isTouchEvent: false,
                    immediately: false,
                });
            }
            if (event.pointerType === "touch") {
                this.cancelTouchTimeoutEvents();
            }
        });
        internalSelection.on("pointermove", (event, data) => {
            if (event.pointerType === "mouse") {
                let tooltipInfo;
                if (reloadTooltipDataOnMouseMove) {
                    tooltipInfo = getTooltipInfoDelegate(data);
                    if (tooltipInfo == null) {
                        return;
                    }
                }
                const selectionIds = getDataPointIdentity ? [getDataPointIdentity(data)] : [];
                callTooltip(this.visualHostTooltipService.move, event, tooltipInfo, selectionIds);
            }
        });
    }
    cancelTouchTimeoutEvents() {
        if (this.handleTouchTimeoutId) {
            clearTimeout(this.handleTouchTimeoutId);
        }
    }
    hide() {
        this.visualHostTooltipService.hide({ immediately: true, isTouchEvent: false });
    }
}
//# sourceMappingURL=tooltipService.js.map

/***/ }),

/***/ 6911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ setStyle)
/* harmony export */ });

function setStyle(s) {
    const style = document.documentElement.style;
    style.setProperty("--text-align", `${s.dataPointCard.textAlign.value}`);
    style.setProperty("--padding-bottom", `${s.dataPointCard.paddingBottom.value}px`);
    style.setProperty("--margin-bottom", `${s.dataPointCard.marginBottom.value}px`);
    style.setProperty("--font-family", `${s.dataPointCard.fontFamily.value}`);
    style.setProperty("--font-size", `${s.dataPointCard.fontSize.value}pt`);
    style.setProperty("--underline-width", `${s.dataPointCard.underlineWidth.value}px`);
}


/***/ }),

/***/ 3538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ VisualFormattingSettingsModel)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3350);
/* harmony import */ var powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(powerbi_visuals_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6084);
/* harmony import */ var powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2581);
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




var FormattingSettingsCard = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Zb;
var FormattingSettingsModel = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__/* .Model */ .Hn;
/**
 * Data Point Formatting Card
 */
class DataPointCardSettings extends FormattingSettingsCard {
    constructor() {
        super(...arguments);
        this.allSelectedLabel = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__/* .TextInput */ .oi({
            name: "allSelectedLabel",
            displayName: "All Selected Label",
            placeholder: "Enter text",
            value: "All",
        });
        this.fontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__/* .FontPicker */ .xp({
            name: "fontFamily",
            displayName: "Font Family",
            value: "Arial, sans-serif",
        });
        this.fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__/* .NumUpDown */ .L_({
            name: "fontSize",
            displayName: "Text Size",
            value: 16,
        });
        this.defaultColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__/* .ColorPicker */ .zH({
            name: "defaultColor",
            displayName: "Default Color",
            value: { value: "#000000" },
        });
        this.textAlign = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__/* .AlignmentGroup */ .Nt({
            name: "textAlign",
            displayName: "Line Alignment",
            mode: "horizontalAlignment" /* powerbi.visuals.AlignmentGroupMode.Horizonal */,
            value: "center",
        });
        this.paddingBottom = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__/* .NumUpDown */ .L_({
            name: "paddingBottom",
            displayName: "Padding Bottom",
            value: 2,
        });
        this.marginBottom = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__/* .NumUpDown */ .L_({
            name: "marginBottom",
            displayName: "Margin Bottom",
            value: 6,
        });
        this.underlineWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__/* .Slider */ .iR({
            name: "underlineWidth",
            displayName: "Underline Width",
            value: 10,
        });
        this.name = "slicerSettings";
        this.displayName = "SlicerSettings";
        this.slices = [
            this.allSelectedLabel,
            this.fontFamily,
            this.fontSize,
            this.defaultColor,
            this.textAlign,
            this.paddingBottom,
            this.marginBottom,
            this.underlineWidth,
        ];
    }
}
class ColorSelectorCardSettings extends FormattingSettingsCard {
    constructor() {
        super(...arguments);
        this.name = "colorSelector";
        this.displayName = "Data Colors";
        // slices will be populated in barChart settings model `populateColorSelector` method
        this.slices = [];
    }
}
/**
 * visual settings model class
 *
 */
class VisualFormattingSettingsModel extends FormattingSettingsModel {
    constructor() {
        super(...arguments);
        // Create formatting settings model formatting cards
        this.dataPointCard = new DataPointCardSettings();
        this.colorSelector = new ColorSelectorCardSettings();
        this.cards = [this.dataPointCard, this.colorSelector];
    }
    populateColorSelector(dataPoints) {
        let slices = this.colorSelector.slices;
        if (dataPoints) {
            dataPoints.forEach((dataPoint) => {
                console.log(dataPoint);
                slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__/* .ColorPicker */ .zH({
                    name: "lineColor",
                    displayName: dataPoint.valueName,
                    value: { value: dataPoint.color },
                    selector: powerbi_visuals_utils_dataviewutils__WEBPACK_IMPORTED_MODULE_2__/* .createDataViewWildcardSelector */ .p(0 /* dataViewWildcard.DataViewWildcardMatchingOption.InstancesAndTotals */),
                    altConstantSelector: dataPoint.selectionId.getSelector(),
                    instanceKind: 3 /* powerbi.VisualEnumerationInstanceKinds.ConstantOrRule */,
                }));
            });
        }
    }
}


/***/ }),

/***/ 193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ transformData)
/* harmony export */ });
/* unused harmony export getCategoricalObjectValue */

function transformData(options, host) {
    let data;
    try {
        const categories = options.dataViews[0].categorical.categories[0];
        const queryName = categories.source.queryName;
        const dotIx = queryName === null || queryName === void 0 ? void 0 : queryName.indexOf(".");
        const colorPalette = host.colorPalette;
        let values = []; // Initialize values as an empty array
        categories.values.forEach((value, index) => {
            const color = getColumnColorByIndex(categories, index, colorPalette);
            const selectionId = host.createSelectionIdBuilder().withCategory(categories, index).createSelectionId();
            const singleValue = {
                valueName: `${value}`,
                color: `${color}`,
                selectionId,
            };
            values.push(singleValue);
        });
        data = {
            values: values,
            table: queryName === null || queryName === void 0 ? void 0 : queryName.substring(0, dotIx),
            column: queryName === null || queryName === void 0 ? void 0 : queryName.substring(dotIx + 1),
        };
    }
    catch (error) {
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
function getColumnColorByIndex(category, index, colorPalette) {
    if (colorPalette.isHighContrast) {
        return colorPalette.background.value;
    }
    const defaultColor = colorPalette.getColor(`${category.values[index]}`).value;
    const defaultColorFill = {
        solid: {
            color: defaultColor,
        },
    };
    return getCategoricalObjectValue(category, index, "colorSelector", "lineColor", defaultColorFill).solid.color;
}
function getCategoricalObjectValue(category, index, objectName, propertyName, defaultValue) {
    let categoryObjects = category.objects;
    if (categoryObjects) {
        let categoryObject = categoryObjects[index];
        if (categoryObject) {
            let object = categoryObject[objectName];
            if (object) {
                let property = object[propertyName];
                if (property !== undefined) {
                    return property;
                }
            }
        }
    }
    return defaultValue;
}


/***/ }),

/***/ 5130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ Visual)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4261);
/* harmony import */ var powerbi_visuals_utils_tooltiputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8401);
/* harmony import */ var powerbi_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7149);
/* harmony import */ var powerbi_models__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(powerbi_models__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6911);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3538);
/* harmony import */ var _transformdata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(193);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8976);
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









class Visual {
    constructor(options) {
        console.log("Visual constructor", options);
        this.host = options.host;
        this.basicFilter = null;
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z();
        this.target = options.element;
        this.tooltipServiceWrapper = (0,powerbi_visuals_utils_tooltiputils__WEBPACK_IMPORTED_MODULE_0__/* .createTooltipServiceWrapper */ .p)(this.host.tooltipService, options.element);
        this.data = null;
        if (document) {
            this.container = document.createElement("div");
            this.container.classList.add("slicer-container");
            this.slicerItems = document.createElement("ul");
            this.container.appendChild(this.slicerItems);
            this.target.appendChild(this.container);
        }
    }
    update(options) {
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(_settings__WEBPACK_IMPORTED_MODULE_2__/* .VisualFormattingSettingsModel */ .E, options.dataViews);
        const formatSettings = this.formattingSettings.dataPointCard;
        (0,_setStyle__WEBPACK_IMPORTED_MODULE_5__/* .setStyle */ .A)(this.formattingSettings);
        this.data = (0,_transformdata__WEBPACK_IMPORTED_MODULE_6__/* .transformData */ .J)(options, this.host);
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
            filterType: powerbi_models__WEBPACK_IMPORTED_MODULE_1__.FilterType.Basic,
        };
        this.addItem(formatSettings.allSelectedLabel.value, formatSettings.defaultColor.value.value);
        if (values) {
            values.forEach((value, index) => {
                this.addItem(value.valueName, value.color);
                this.tooltipServiceWrapper.addTooltip(d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ys(this.slicerItems.childNodes[index + 1].querySelector("span")), // Select the span inside the current slicer item
                () => this.getTooltipData(value), () => value.selectionId);
            });
        }
    }
    addItem(txt, color) {
        let slicerItem = document.createElement("li");
        let itemContainer = document.createElement("span");
        itemContainer.innerText = txt;
        if (txt != this.formattingSettings.dataPointCard.allSelectedLabel.value) {
            itemContainer.onclick = () => {
                this.basicFilter.values = [txt];
                this.host.applyJsonFilter(this.basicFilter, "general", "filter", 0 /* powerbi.FilterAction.merge */);
            };
        }
        else {
            itemContainer.onclick = () => {
                this.host.applyJsonFilter(this.basicFilter, "general", "filter", 1 /* powerbi.FilterAction.remove */);
            };
        }
        itemContainer.style.color = color;
        slicerItem.appendChild(itemContainer);
        this.slicerItems.appendChild(slicerItem);
    }
    getTooltipData(value) {
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
    getFormattingModel() {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }
}


/***/ }),

/***/ 6738:
/***/ ((module) => {

"use strict";
module.exports = Function('return this')();

/***/ }),

/***/ 3350:
/***/ ((module) => {

"use strict";
module.exports = null;

/***/ }),

/***/ 3137:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports brushSelection, brushX, brushY */
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3399);









var MODE_DRAG = {name: "drag"},
    MODE_SPACE = {name: "space"},
    MODE_HANDLE = {name: "handle"},
    MODE_CENTER = {name: "center"};

const {abs, max, min} = Math;

function number1(e) {
  return [+e[0], +e[1]];
}

function number2(e) {
  return [number1(e[0]), number1(e[1])];
}

var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x, e) { return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]]; },
  output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
};

var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y, e) { return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]]; },
  output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
};

var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) { return xy == null ? null : number2(xy); },
  output: function(xy) { return xy; }
};

var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};

var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};

var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};

var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};

var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function type(t) {
  return {type: t};
}

// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  if (svg.hasAttribute("viewBox")) {
    svg = svg.viewBox.baseVal;
    return [[svg.x, svg.y], [svg.x + svg.width, svg.y + svg.height]];
  }
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

// Like d3.local, but with the name “__brush” rather than auto-generated.
function local(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}

function empty(extent) {
  return extent[0][0] === extent[1][0]
      || extent[0][1] === extent[1][1];
}

function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}

function brushX() {
  return brush(X);
}

function brushY() {
  return brush(Y);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return brush(XY);
}

function brush(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      touchable = defaultTouchable,
      keys = true,
      listeners = dispatch("start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group
        .property("__brush", initialize)
      .selectAll(".overlay")
      .data([type("overlay")]);

    overlay.enter().append("rect")
        .attr("class", "overlay")
        .attr("pointer-events", "all")
        .attr("cursor", cursors.overlay)
      .merge(overlay)
        .each(function() {
          var extent = local(this).extent;
          select(this)
              .attr("x", extent[0][0])
              .attr("y", extent[0][1])
              .attr("width", extent[1][0] - extent[0][0])
              .attr("height", extent[1][1] - extent[0][1]);
        });

    group.selectAll(".selection")
      .data([type("selection")])
      .enter().append("rect")
        .attr("class", "selection")
        .attr("cursor", cursors.selection)
        .attr("fill", "#777")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#fff")
        .attr("shape-rendering", "crispEdges");

    var handle = group.selectAll(".handle")
      .data(dim.handles, function(d) { return d.type; });

    handle.exit().remove();

    handle.enter().append("rect")
        .attr("class", function(d) { return "handle handle--" + d.type; })
        .attr("cursor", function(d) { return cursors[d.type]; });

    group
        .each(redraw)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("mousedown.brush", started)
      .filter(touchable)
        .on("touchstart.brush", started)
        .on("touchmove.brush", touchmoved)
        .on("touchend.brush touchcancel.brush", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  brush.move = function(group, selection, event) {
    if (group.tween) {
      group
          .on("start.brush", function(event) { emitter(this, arguments).beforestart().start(event); })
          .on("interrupt.brush end.brush", function(event) { emitter(this, arguments).end(event); })
          .tween("brush", function() {
            var that = this,
                state = that.__brush,
                emit = emitter(that, arguments),
                selection0 = state.selection,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
                i = interpolate(selection0, selection1);

            function tween(t) {
              state.selection = t === 1 && selection1 === null ? null : i(t);
              redraw.call(that);
              emit.brush();
            }

            return selection0 !== null && selection1 !== null ? tween : tween(1);
          });
    } else {
      group
          .each(function() {
            var that = this,
                args = arguments,
                state = that.__brush,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
                emit = emitter(that, args).beforestart();

            interrupt(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start(event).brush(event).end(event);
          });
    }
  };

  brush.clear = function(group, event) {
    brush.move(group, null, event);
  };

  function redraw() {
    var group = select(this),
        selection = local(this).selection;

    if (selection) {
      group.selectAll(".selection")
          .style("display", null)
          .attr("x", selection[0][0])
          .attr("y", selection[0][1])
          .attr("width", selection[1][0] - selection[0][0])
          .attr("height", selection[1][1] - selection[0][1]);

      group.selectAll(".handle")
          .style("display", null)
          .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2; })
          .attr("y", function(d) { return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2; })
          .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize; })
          .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize; });
    }

    else {
      group.selectAll(".selection,.handle")
          .style("display", "none")
          .attr("x", null)
          .attr("y", null)
          .attr("width", null)
          .attr("height", null);
    }
  }

  function emitter(that, args, clean) {
    var emit = that.__brush.emitter;
    return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
  }

  function Emitter(that, args, clean) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
    this.clean = clean;
  }

  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function(event, mode) {
      if (this.starting) this.starting = false, this.emit("start", event, mode);
      else this.emit("brush", event);
      return this;
    },
    brush: function(event, mode) {
      this.emit("brush", event, mode);
      return this;
    },
    end: function(event, mode) {
      if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
      return this;
    },
    emit: function(type, event, mode) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new BrushEvent(type, {
          sourceEvent: event,
          target: brush,
          selection: dim.output(this.state.selection),
          mode,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function started(event) {
    if (touchending && !event.touches) return;
    if (!filter.apply(this, arguments)) return;

    var that = this,
        type = event.target.__data__.type,
        mode = (keys && event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (keys && event.altKey ? MODE_CENTER : MODE_HANDLE),
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local(that),
        extent = state.extent,
        selection = state.selection,
        W = extent[0][0], w0, w1,
        N = extent[0][1], n0, n1,
        E = extent[1][0], e0, e1,
        S = extent[1][1], s0, s1,
        dx = 0,
        dy = 0,
        moving,
        shifting = signX && signY && keys && event.shiftKey,
        lockX,
        lockY,
        points = Array.from(event.touches || [event], t => {
          const i = t.identifier;
          t = pointer(t, that);
          t.point0 = t.slice();
          t.identifier = i;
          return t;
        });

    interrupt(that);
    var emit = emitter(that, arguments, true).beforestart();

    if (type === "overlay") {
      if (selection) moving = true;
      const pts = [points[0], points[1] || points[0]];
      state.selection = selection = [[
          w0 = dim === Y ? W : min(pts[0][0], pts[1][0]),
          n0 = dim === X ? N : min(pts[0][1], pts[1][1])
        ], [
          e0 = dim === Y ? E : max(pts[0][0], pts[1][0]),
          s0 = dim === X ? S : max(pts[0][1], pts[1][1])
        ]];
      if (points.length > 1) move(event);
    } else {
      w0 = selection[0][0];
      n0 = selection[0][1];
      e0 = selection[1][0];
      s0 = selection[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;

    var group = select(that)
        .attr("pointer-events", "none");

    var overlay = group.selectAll(".overlay")
        .attr("cursor", cursors[type]);

    if (event.touches) {
      emit.moved = moved;
      emit.ended = ended;
    } else {
      var view = select(event.view)
          .on("mousemove.brush", moved, true)
          .on("mouseup.brush", ended, true);
      if (keys) view
          .on("keydown.brush", keydowned, true)
          .on("keyup.brush", keyupped, true)

      dragDisable(event.view);
    }

    redraw.call(that);
    emit.start(event, mode.name);

    function moved(event) {
      for (const p of event.changedTouches || [event]) {
        for (const d of points)
          if (d.identifier === p.identifier) d.cur = pointer(p, that);
      }
      if (shifting && !lockX && !lockY && points.length === 1) {
        const point = points[0];
        if (abs(point.cur[0] - point[0]) > abs(point.cur[1] - point[1]))
          lockY = true;
        else
          lockX = true;
      }
      for (const point of points)
        if (point.cur) point[0] = point.cur[0], point[1] = point.cur[1];
      moving = true;
      noevent(event);
      move(event);
    }

    function move(event) {
      const point = points[0], point0 = point.point0;
      var t;

      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX) dx = max(W - w0, min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY) dy = max(N - n0, min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (points[1]) {
            if (signX) w1 = max(W, min(E, points[0][0])), e1 = max(W, min(E, points[1][0])), signX = 1;
            if (signY) n1 = max(N, min(S, points[0][1])), s1 = max(N, min(S, points[1][1])), signY = 1;
          } else {
            if (signX < 0) dx = max(W - w0, min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
            else if (signX > 0) dx = max(W - e0, min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
            if (signY < 0) dy = max(N - n0, min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
            else if (signY > 0) dy = max(N - s0, min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          }
          break;
        }
        case MODE_CENTER: {
          if (signX) w1 = max(W, min(E, w0 - dx * signX)), e1 = max(W, min(E, e0 + dx * signX));
          if (signY) n1 = max(N, min(S, n0 - dy * signY)), s1 = max(N, min(S, s0 + dy * signY));
          break;
        }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection = state.selection; // May be set by brush.move!
      if (lockX) w1 = selection[0][0], e1 = selection[1][0];
      if (lockY) n1 = selection[0][1], s1 = selection[1][1];

      if (selection[0][0] !== w1
          || selection[0][1] !== n1
          || selection[1][0] !== e1
          || selection[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush(event, mode.name);
      }
    }

    function ended(event) {
      nopropagation(event);
      if (event.touches) {
        if (event.touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
      } else {
        dragEnable(event.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
      if (empty(selection)) state.selection = null, redraw.call(that);
      emit.end(event, mode.name);
    }

    function keydowned(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          shifting = signX && signY;
          break;
        }
        case 18: { // ALT
          if (mode === MODE_HANDLE) {
            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move(event);
          }
          break;
        }
        case 32: { // SPACE; takes priority over ALT
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
            if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move(event);
          }
          break;
        }
        default: return;
      }
      noevent(event);
    }

    function keyupped(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          if (shifting) {
            lockX = lockY = shifting = false;
            move(event);
          }
          break;
        }
        case 18: { // ALT
          if (mode === MODE_CENTER) {
            if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
            if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
            mode = MODE_HANDLE;
            move(event);
          }
          break;
        }
        case 32: { // SPACE
          if (mode === MODE_SPACE) {
            if (event.altKey) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type]);
            move(event);
          }
          break;
        }
        default: return;
      }
      noevent(event);
    }
  }

  function touchmoved(event) {
    emitter(this, arguments).moved(event);
  }

  function touchended(event) {
    emitter(this, arguments).ended(event);
  }

  function initialize() {
    var state = this.__brush || {selection: null};
    state.extent = number2(extent.apply(this, arguments));
    state.dim = dim;
    return state;
  }

  brush.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant(number2(_)), brush) : extent;
  };

  brush.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), brush) : filter;
  };

  brush.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), brush) : touchable;
  };

  brush.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.keyModifiers = function(_) {
    return arguments.length ? (keys = !!_, brush) : keys;
  };

  brush.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}


/***/ }),

/***/ 9961:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _brush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3137);



/***/ }),

/***/ 4447:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B8: () => (/* binding */ rgb),
/* harmony export */   ZP: () => (/* binding */ color)
/* harmony export */ });
/* unused harmony exports Color, darker, brighter, rgbConvert, Rgb, hslConvert, hsl */
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9531);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Rgb, rgb, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .l)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Hsl, hsl, (0,_define_js__WEBPACK_IMPORTED_MODULE_0__/* .extend */ .l)(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ 9531:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   l: () => (/* binding */ extend)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ 6057:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);


/***/ }),

/***/ 2067:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tw: () => (/* binding */ cubicInOut)
/* harmony export */ });
/* unused harmony exports cubicIn, cubicOut */
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ 7265:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t: () => (/* binding */ basis)
/* harmony export */ });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ 6068:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7265);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return (0,_basis_js__WEBPACK_IMPORTED_MODULE_0__/* .basis */ .t)((t - i / n) * n, v0, v1, v2, v3);
  };
}


/***/ }),

/***/ 8280:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ nogamma),
/* harmony export */   yi: () => (/* binding */ gamma)
/* harmony export */ });
/* unused harmony export hue */
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2954);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(isNaN(a) ? b : a);
}


/***/ }),

/***/ 2954:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (x => () => x);


/***/ }),

/***/ 8063:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}


/***/ }),

/***/ 6354:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports rgbBasis, rgbBasisClosed */
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4447);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7265);
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6068);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8280);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function rgbGamma(y) {
  var color = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__/* .gamma */ .yi)(y);

  function rgb(start, end) {
    var r = color((start = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* .rgb */ .B8)(start)).r, (end = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* .rgb */ .B8)(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = (0,_color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* .rgb */ .B8)(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);


/***/ }),

/***/ 6773:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8063);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}


/***/ }),

/***/ 8569:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   y: () => (/* binding */ identity)
/* harmony export */ });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}


/***/ }),

/***/ 3465:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ interpolateTransformCss),
/* harmony export */   w: () => (/* binding */ interpolateTransformSvg)
/* harmony export */ });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8063);
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5821);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(xa, xb)}, {i: i - 2, x: (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__/* .parseCss */ .z, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__/* .parseSvg */ .X, ", ", ")", ")");


/***/ }),

/***/ 5821:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ parseSvg),
/* harmony export */   z: () => (/* binding */ parseCss)
/* harmony export */ });
/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8569);


var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? _decompose_js__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .y : (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .y;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .y;
  value = value.matrix;
  return (0,_decompose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ 9898:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ array)
/* harmony export */ });
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}


/***/ }),

/***/ 364:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ 4708:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1663);
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1226);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* .xhtml */ .P && document.documentElement.namespaceURI === _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* .xhtml */ .P
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}


/***/ }),

/***/ 3950:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ys: () => (/* reexport safe */ _select_js__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3838);

















/***/ }),

/***/ 4421:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ childMatcher),
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}



/***/ }),

/***/ 1663:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1226);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.hasOwnProperty(prefix) ? {space: _namespaces_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}


/***/ }),

/***/ 1226:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ xhtml),
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ 3838:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return typeof selector === "string"
      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1([[selector]], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .root */ .Jz);
}


/***/ }),

/***/ 4264:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9898);
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return typeof selector === "string"
      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1([document.querySelectorAll(selector)], [document.documentElement])
      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1([(0,_array_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(selector)], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__/* .root */ .Jz);
}


/***/ }),

/***/ 7911:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4708);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}


/***/ }),

/***/ 7405:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1663);


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,_namespace_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}


/***/ }),

/***/ 5772:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}


/***/ }),

/***/ 5016:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}


/***/ }),

/***/ 5122:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}


/***/ }),

/***/ 4764:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8390);
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2270);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);




function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__/* .EnterNode */ .F(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_0__/* .EnterNode */ .F(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = (0,_constant_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Selection */ .Y1(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
  return typeof data === "object" && "length" in data
    ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
}


/***/ }),

/***/ 5667:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}


/***/ }),

/***/ 3790:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9920);


function dispatchEvent(node, type, params) {
  var window = (0,_window_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}


/***/ }),

/***/ 6347:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}


/***/ }),

/***/ 7844:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return !this.node();
}


/***/ }),

/***/ 2270:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ EnterNode),
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1586);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1(this._enter || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ 6790:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1586);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1(this._exit || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z), this._parents);
}


/***/ }),

/***/ 5777:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8390);
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4421);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .Y1(subgroups, this._parents);
}


/***/ }),

/***/ 655:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}


/***/ }),

/***/ 8390:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jz: () => (/* binding */ root),
/* harmony export */   Y1: () => (/* binding */ Selection),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(486);
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6932);
/* harmony import */ var _selectChild_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4735);
/* harmony import */ var _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5777);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4764);
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2270);
/* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6790);
/* harmony import */ var _join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1474);
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6359);
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4729);
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9548);
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5772);
/* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(426);
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(838);
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6909);
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7844);
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6347);
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7405);
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2627);
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9714);
/* harmony import */ var _classed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5016);
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8386);
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(655);
/* harmony import */ var _raise_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1903);
/* harmony import */ var _lower_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(6017);
/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(7911);
/* harmony import */ var _insert_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(2504);
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(8349);
/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(5122);
/* harmony import */ var _datum_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(5667);
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(2017);
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(3790);
/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(3536);



































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  selectChild: _selectChild_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  selectChildren: _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
  data: _data_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
  enter: _enter_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
  exit: _exit_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
  join: _join_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
  selection: selection_selection,
  order: _order_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
  sort: _sort_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
  call: _call_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
  nodes: _nodes_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
  node: _node_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
  size: _size_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
  empty: _empty_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
  each: _each_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
  style: _style_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
  property: _property_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
  classed: _classed_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,
  text: _text_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
  html: _html_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z,
  raise: _raise_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z,
  lower: _lower_js__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z,
  append: _append_js__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z,
  insert: _insert_js__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z,
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z,
  clone: _clone_js__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z,
  datum: _datum_js__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z,
  on: _on_js__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z,
  dispatch: _dispatch_js__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z,
  [Symbol.iterator]: _iterator_js__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selection);


/***/ }),

/***/ 2504:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4708);
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3010);



function constantNull() {
  return null;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, before) {
  var create = typeof name === "function" ? name : (0,_creator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(name),
      select = before == null ? constantNull : typeof before === "function" ? before : (0,_selector_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}


/***/ }),

/***/ 3536:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function* __WEBPACK_DEFAULT_EXPORT__() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}


/***/ }),

/***/ 1474:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}


/***/ }),

/***/ 6017:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(lower);
}


/***/ }),

/***/ 6359:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var selection = context.selection ? context.selection() : context;

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1(merges, this._parents);
}


/***/ }),

/***/ 838:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}


/***/ }),

/***/ 426:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return Array.from(this);
}


/***/ }),

/***/ 2017:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}


/***/ }),

/***/ 4729:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}


/***/ }),

/***/ 9714:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}


/***/ }),

/***/ 1903:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(raise);
}


/***/ }),

/***/ 8349:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.each(remove);
}


/***/ }),

/***/ 486:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8390);
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3010);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select !== "function") select = (0,_selector_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .Y1(subgroups, this._parents);
}


/***/ }),

/***/ 6932:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8390);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9898);
/* harmony import */ var _selectorAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9701);




function arrayAll(select) {
  return function() {
    return (0,_array_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(select.apply(this, arguments));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = (0,_selectorAll_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Selection */ .Y1(subgroups, parents);
}


/***/ }),

/***/ 4735:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4421);


var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__/* .childMatcher */ .P)(match)));
}


/***/ }),

/***/ 467:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4421);


var filter = Array.prototype.filter;

function children() {
  return Array.from(this.children);
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : (0,_matcher_js__WEBPACK_IMPORTED_MODULE_0__/* .childMatcher */ .P)(match)));
}


/***/ }),

/***/ 6909:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}


/***/ }),

/***/ 9548:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y1(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ 1586:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(update) {
  return new Array(update.length);
}


/***/ }),

/***/ 2627:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ styleValue),
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9920);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || (0,_window_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ 8386:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}


/***/ }),

/***/ 3010:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function none() {}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}


/***/ }),

/***/ 9701:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function empty() {
  return [];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}


/***/ }),

/***/ 9920:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}


/***/ }),

/***/ 9166:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1739);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__/* .Timer */ .B7;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}


/***/ }),

/***/ 1739:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B7: () => (/* binding */ Timer),
/* harmony export */   HT: () => (/* binding */ timer),
/* harmony export */   zO: () => (/* binding */ now)
/* harmony export */ });
/* unused harmony export timerFlush */
/* provided dependency */ var window = __webpack_require__(6738);
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ 3399:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5781);






/***/ }),

/***/ 8640:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .STARTING */ .KE && schedule.state < _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .ENDING */ .wS;
    schedule.state = _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .ENDED */ .Ku;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}


/***/ }),

/***/ 5781:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1689);
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7207);




d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.prototype.interrupt = _interrupt_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.prototype.transition = _transition_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;


/***/ }),

/***/ 1689:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8640);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  return this.each(function() {
    (0,_interrupt_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, name);
  });
}


/***/ }),

/***/ 7207:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6365);
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9882);
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2067);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1739);





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3_ease__WEBPACK_IMPORTED_MODULE_0__/* .cubicInOut */ .tw
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name) {
  var id,
      timing;

  if (name instanceof _transition_index_js__WEBPACK_IMPORTED_MODULE_1__/* .Transition */ .uT) {
    id = name._id, name = name._name;
  } else {
    id = (0,_transition_index_js__WEBPACK_IMPORTED_MODULE_1__/* .newId */ .pZ)(), (timing = defaultTiming).time = (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__/* .now */ .zO)(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        (0,_transition_schedule_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _transition_index_js__WEBPACK_IMPORTED_MODULE_1__/* .Transition */ .uT(groups, this._parents, name, id);
}


/***/ }),

/***/ 5114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3465);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1663);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9040);
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4548);





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(name), i = fullname === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__/* .interpolateTransformSvg */ .w : _interpolate_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_3__/* .tweenValue */ .x)(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}


/***/ }),

/***/ 8061:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1663);


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}


/***/ }),

/***/ 6882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function delayFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .S1)(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .S1)(this, id).delay = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(this.node(), id).delay;
}


/***/ }),

/***/ 4786:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function durationFunction(id, value) {
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id).duration = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(this.node(), id).duration;
}


/***/ }),

/***/ 3353:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id).ease = value;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(this.node(), id).ease;
}


/***/ }),

/***/ 5778:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id).ease = v;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}


/***/ }),

/***/ 5355:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}


/***/ }),

/***/ 9579:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4421);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6365);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(match) {
  if (typeof match !== "function") match = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__/* .Transition */ .uT(subgroups, this._parents, this._name, this._id);
}


/***/ }),

/***/ 6365:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pZ: () => (/* binding */ newId),
/* harmony export */   uT: () => (/* binding */ Transition)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5114);
/* harmony import */ var _attrTween_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8061);
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6882);
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4786);
/* harmony import */ var _ease_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3353);
/* harmony import */ var _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5778);
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9579);
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9858);
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7349);
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9935);
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4417);
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5174);
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3836);
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8508);
/* harmony import */ var _styleTween_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5109);
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5699);
/* harmony import */ var _textTween_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4987);
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4085);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9040);
/* harmony import */ var _end_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5355);






















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
  selection: _selection_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
  transition: _transition_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
  attrTween: _attrTween_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
  style: _style_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
  styleTween: _styleTween_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
  text: _text_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
  textTween: _textTween_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
  tween: _tween_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
  delay: _delay_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
  duration: _duration_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
  ease: _ease_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
  easeVarying: _easeVarying_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
  end: _end_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};


/***/ }),

/***/ 4548:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4447);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8063);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6354);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6773);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
  var c;
  return (typeof b === "number" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP
      : (c = (0,d3_color__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)
      : d3_interpolate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(a, b);
}


/***/ }),

/***/ 9858:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6365);


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Transition */ .uT(merges, this._parents, this._name, this._id);
}


/***/ }),

/***/ 7349:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? _schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .init */ .S1 : _schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}


/***/ }),

/***/ 9935:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this.on("end.remove", removeFunction(this._id));
}


/***/ }),

/***/ 9882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KE: () => (/* binding */ STARTING),
/* harmony export */   Ku: () => (/* binding */ ENDED),
/* harmony export */   S1: () => (/* binding */ init),
/* harmony export */   U2: () => (/* binding */ get),
/* harmony export */   ZP: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t8: () => (/* binding */ set),
/* harmony export */   wS: () => (/* binding */ ENDING)
/* harmony export */ });
/* unused harmony exports CREATED, SCHEDULED, STARTED, RUNNING */
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6057);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1739);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9166);



var emptyOn = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = (0,d3_timer__WEBPACK_IMPORTED_MODULE_1__/* .timer */ .HT)(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),

/***/ 4417:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3010);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6365);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9882);




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(subgroup[i], name, id, i, subgroup, (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(node, id));
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Transition */ .uT(subgroups, this._parents, name, id);
}


/***/ }),

/***/ 5174:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9701);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6365);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9882);




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_2__/* .Transition */ .uT(subgroups, parents, name, id);
}


/***/ }),

/***/ 3836:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8390);


var Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.prototype.constructor;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new Selection(this._groups, this._parents);
}


/***/ }),

/***/ 8508:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3465);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2627);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9882);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9040);
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4548);






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .S)(this, name),
        string1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .S)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .S)(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .S)(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0,d3_selection__WEBPACK_IMPORTED_MODULE_0__/* .styleValue */ .S)(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .set */ .t8)(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var i = (name += "") === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_2__/* .interpolateTransformCss */ .Y : _interpolate_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, (0,_tween_js__WEBPACK_IMPORTED_MODULE_4__/* .tweenValue */ .x)(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
}


/***/ }),

/***/ 5109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}


/***/ }),

/***/ 5699:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9040);


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction((0,_tween_js__WEBPACK_IMPORTED_MODULE_0__/* .tweenValue */ .x)(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
}


/***/ }),

/***/ 4987:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}


/***/ }),

/***/ 4085:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6365);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9882);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var name = this._name,
      id0 = this._id,
      id1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .newId */ .pZ)();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* .get */ .U2)(node, id0);
        (0,_schedule_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__/* .Transition */ .uT(groups, this._parents, name, id1);
}


/***/ }),

/***/ 9040:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   x: () => (/* binding */ tweenValue)
/* harmony export */ });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9882);


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .t8)(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return (0,_schedule_js__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U2)(node, id).value[name];
  };
}


/***/ }),

/***/ 5180:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1395);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2714);




/***/ }),

/***/ 2714:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports Transform, identity, default */
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity;
  return node.__zoom;
}


/***/ }),

/***/ 1395:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3399);
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2714);










// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || identity;
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = interpolateZoom,
      listeners = dispatch("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled, {passive: false})
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
          .event(event)
          .start()
          .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
          .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k, p, event) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function(selection, k, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function(selection, x, y, event) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function(selection, x, y, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args).event(event),
              e = extent.apply(that, args),
              p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function wheeled(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = pointer(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      interrupt(this);
      g.start();
    }

    noevent(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var currentTarget = event.currentTarget,
        g = gesture(this, args, true).event(event),
        v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = pointer(event, currentTarget),
        x0 = event.clientX,
        y0 = event.clientY;

    dragDisable(event.view);
    nopropagation(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g.start();

    function mousemoved(event) {
      noevent(event);
      if (!g.moved) {
        var dx = event.clientX - x0, dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event)
       .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      dragEnable(event.view, g.moved);
      noevent(event);
      g.event(event).end();
    }
  }

  function dblclicked(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

    noevent(event);
    if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0, event);
    else select(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started, i, t, p;

    nopropagation(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      interrupt(this);
      g.start();
    }
  }

  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t, p, l;

    noevent(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t;

    nopropagation(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = pointer(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
}


/***/ }),

/***/ 8976:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ys: () => (/* reexport safe */ d3_selection__WEBPACK_IMPORTED_MODULE_1__.Ys)
/* harmony export */ });
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9961);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3950);
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3399);
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5180);
































/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5130);
/* provided dependency */ var window = __webpack_require__(6738);

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var customSlicer8EF416FA305C44038B637FBD3BCB2A11_DEBUG = {
    name: 'customSlicer8EF416FA305C44038B637FBD3BCB2A11_DEBUG',
    displayName: 'customSlicer',
    class: 'Visual',
    apiVersion: '5.1.0',
    create: (options) => {
        if (_src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .u) {
            return new _src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .u(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId, options, initialState) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["customSlicer8EF416FA305C44038B637FBD3BCB2A11_DEBUG"] = customSlicer8EF416FA305C44038B637FBD3BCB2A11_DEBUG;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customSlicer8EF416FA305C44038B637FBD3BCB2A11_DEBUG);

})();

customSlicer8EF416FA305C44038B637FBD3BCB2A11_DEBUG = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=https://localhost:8080/assets/visual.js.map
/**********************************************************************
 * Extern for vl
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var vl = {
  "axis": {
    "AxisOrient": {
      "TOP": {},
      "top": {},
      "RIGHT": {},
      "right": {},
      "LEFT": {},
      "left": {},
      "BOTTOM": {},
      "bottom": {}
    },
    "defaultAxisConfig": {
      "offset": {},
      "grid": {},
      "labels": {},
      "labelMaxLength": {},
      "tickSize": {},
      "characterWidth": {}
    },
    "defaultFacetAxisConfig": {
      "axisWidth": {},
      "labels": {},
      "grid": {},
      "tickSize": {}
    }
  },
  "aggregate": {
    "AggregateOp": {
      "VALUES": {},
      "values": {},
      "COUNT": {},
      "count": {},
      "VALID": {},
      "valid": {},
      "MISSING": {},
      "missing": {},
      "DISTINCT": {},
      "distinct": {},
      "SUM": {},
      "sum": {},
      "MEAN": {},
      "mean": {},
      "AVERAGE": {},
      "average": {},
      "VARIANCE": {},
      "variance": {},
      "VARIANCEP": {},
      "variancep": {},
      "STDEV": {},
      "stdev": {},
      "STDEVP": {},
      "stdevp": {},
      "MEDIAN": {},
      "median": {},
      "Q1": {},
      "q1": {},
      "Q3": {},
      "q3": {},
      "MODESKEW": {},
      "modeskew": {},
      "MIN": {},
      "min": {},
      "MAX": {},
      "max": {},
      "ARGMIN": {},
      "argmin": {},
      "ARGMAX": {},
      "argmax": {}
    },
    "AGGREGATE_OPS": {},
    "SUM_OPS": {},
    "SHARED_DOMAIN_OPS": {}
  },
  "bin": {
    "autoMaxBins": function () {}
  },
  "channel": {
    "Channel": {
      "X": {},
      "x": {},
      "Y": {},
      "y": {},
      "X2": {},
      "x2": {},
      "Y2": {},
      "y2": {},
      "ROW": {},
      "row": {},
      "COLUMN": {},
      "column": {},
      "SHAPE": {},
      "shape": {},
      "SIZE": {},
      "size": {},
      "COLOR": {},
      "color": {},
      "TEXT": {},
      "text": {},
      "DETAIL": {},
      "detail": {},
      "LABEL": {},
      "label": {},
      "PATH": {},
      "path": {},
      "ORDER": {},
      "order": {},
      "OPACITY": {},
      "opacity": {}
    },
    "X": {},
    "Y": {},
    "X2": {},
    "Y2": {},
    "ROW": {},
    "COLUMN": {},
    "SHAPE": {},
    "SIZE": {},
    "COLOR": {},
    "TEXT": {},
    "DETAIL": {},
    "LABEL": {},
    "PATH": {},
    "ORDER": {},
    "OPACITY": {},
    "CHANNELS": {},
    "UNIT_CHANNELS": {},
    "UNIT_SCALE_CHANNELS": {},
    "NONSPATIAL_CHANNELS": {},
    "NONSPATIAL_SCALE_CHANNELS": {},
    "STACK_GROUP_CHANNELS": {},
    "supportMark": function () {},
    "getSupportedMark": function () {},
    "getSupportedRole": function () {},
    "hasScale": function () {}
  },
  "compile": function () {},
  "config": {
    "defaultCellConfig": {
      "width": {},
      "height": {}
    },
    "defaultFacetCellConfig": {
      "stroke": {},
      "strokeWidth": {}
    },
    "defaultFacetConfig": {
      "scale": {
        "round": {},
        "padding": {}
      },
      "axis": {
        "axisWidth": {},
        "labels": {},
        "grid": {},
        "tickSize": {}
      },
      "grid": {
        "color": {},
        "opacity": {},
        "offset": {}
      },
      "cell": {
        "stroke": {},
        "strokeWidth": {}
      }
    },
    "FontWeight": {
      "NORMAL": {},
      "normal": {},
      "BOLD": {},
      "bold": {}
    },
    "Shape": {
      "CIRCLE": {},
      "circle": {},
      "SQUARE": {},
      "square": {},
      "CROSS": {},
      "cross": {},
      "DIAMOND": {},
      "diamond": {},
      "TRIANGLEUP": {},
      "triangle-up": {},
      "TRIANGLEDOWN": {},
      "triangle-down": {}
    },
    "Orient": {
      "HORIZONTAL": {},
      "horizontal": {},
      "VERTICAL": {},
      "vertical": {}
    },
    "HorizontalAlign": {
      "LEFT": {},
      "left": {},
      "RIGHT": {},
      "right": {},
      "CENTER": {},
      "center": {}
    },
    "VerticalAlign": {
      "TOP": {},
      "top": {},
      "MIDDLE": {},
      "middle": {},
      "BOTTOM": {},
      "bottom": {}
    },
    "FontStyle": {
      "NORMAL": {},
      "normal": {},
      "ITALIC": {},
      "italic": {}
    },
    "Interpolate": {
      "LINEAR": {},
      "linear": {},
      "LINEAR_CLOSED": {},
      "linear-closed": {},
      "STEP": {},
      "step": {},
      "STEP_BEFORE": {},
      "step-before": {},
      "STEP_AFTER": {},
      "step-after": {},
      "BASIS": {},
      "basis": {},
      "BASIS_OPEN": {},
      "basis-open": {},
      "BASIS_CLOSED": {},
      "basis-closed": {},
      "CARDINAL": {},
      "cardinal": {},
      "CARDINAL_OPEN": {},
      "cardinal-open": {},
      "CARDINAL_CLOSED": {},
      "cardinal-closed": {},
      "BUNDLE": {},
      "bundle": {},
      "MONOTONE": {},
      "monotone": {}
    },
    "AreaOverlay": {
      "LINE": {},
      "line": {},
      "LINEPOINT": {},
      "linepoint": {},
      "NONE": {},
      "none": {}
    },
    "defaultOverlayConfig": {
      "line": {},
      "pointStyle": {
        "filled": {}
      },
      "lineStyle": {}
    },
    "defaultMarkConfig": {
      "color": {},
      "shape": {},
      "strokeWidth": {},
      "size": {},
      "barThinSize": {},
      "ruleSize": {},
      "tickThickness": {},
      "fontSize": {},
      "baseline": {},
      "text": {},
      "shortTimeLabels": {},
      "applyColorToBackground": {}
    },
    "defaultConfig": {
      "numberFormat": {},
      "timeFormat": {},
      "countTitle": {},
      "cell": {
        "width": {},
        "height": {}
      },
      "mark": {
        "color": {},
        "shape": {},
        "strokeWidth": {},
        "size": {},
        "barThinSize": {},
        "ruleSize": {},
        "tickThickness": {},
        "fontSize": {},
        "baseline": {},
        "text": {},
        "shortTimeLabels": {},
        "applyColorToBackground": {}
      },
      "overlay": {
        "line": {},
        "pointStyle": {
          "filled": {}
        },
        "lineStyle": {}
      },
      "scale": {
        "round": {},
        "textBandWidth": {},
        "bandSize": {},
        "padding": {},
        "useRawDomain": {},
        "opacity": {},
        "nominalColorRange": {},
        "sequentialColorRange": {},
        "shapeRange": {},
        "fontSizeRange": {},
        "ruleSizeRange": {},
        "tickSizeRange": {}
      },
      "axis": {
        "offset": {},
        "grid": {},
        "labels": {},
        "labelMaxLength": {},
        "tickSize": {},
        "characterWidth": {}
      },
      "legend": {
        "orient": {},
        "shortTimeLabels": {}
      },
      "facet": {
        "scale": {
          "round": {},
          "padding": {}
        },
        "axis": {
          "axisWidth": {},
          "labels": {},
          "grid": {},
          "tickSize": {}
        },
        "grid": {
          "color": {},
          "opacity": {},
          "offset": {}
        },
        "cell": {
          "stroke": {},
          "strokeWidth": {}
        }
      }
    }
  },
  "data": {
    "DataFormatType": {
      "JSON": {},
      "json": {},
      "CSV": {},
      "csv": {},
      "TSV": {},
      "tsv": {},
      "TOPOJSON": {},
      "topojson": {}
    },
    "DataTable": {
      "SOURCE": {},
      "source": {},
      "SUMMARY": {},
      "summary": {},
      "STACKED_SCALE": {},
      "stacked_scale": {},
      "LAYOUT": {},
      "layout": {}
    },
    "SUMMARY": {},
    "SOURCE": {},
    "STACKED_SCALE": {},
    "LAYOUT": {},
    "types": {
      "boolean": {},
      "number": {},
      "integer": {},
      "date": {},
      "string": {}
    }
  },
  "datetime": {
    "isDateTime": function () {},
    "MONTHS": {},
    "SHORT_MONTHS": {},
    "DAYS": {},
    "SHORT_DAYS": {},
    "dateTimeExpr": function () {}
  },
  "encoding": {
    "countRetinal": function () {},
    "channels": function () {},
    "has": function () {},
    "isAggregate": function () {},
    "isRanged": function () {},
    "fieldDefs": function () {},
    "forEach": function () {},
    "channelMappingForEach": function () {},
    "map": function () {},
    "channelMappingMap": function () {},
    "reduce": function () {},
    "channelMappingReduce": function () {}
  },
  "facet": {},
  "fieldDef": {
    "field": function () {},
    "isDimension": function () {},
    "isMeasure": function () {},
    "count": function () {},
    "isCount": function () {},
    "title": function () {}
  },
  "legend": {
    "defaultLegendConfig": {
      "orient": {},
      "shortTimeLabels": {}
    }
  },
  "mark": {
    "Mark": {
      "AREA": {},
      "area": {},
      "BAR": {},
      "bar": {},
      "LINE": {},
      "line": {},
      "POINT": {},
      "point": {},
      "TEXT": {},
      "text": {},
      "TICK": {},
      "tick": {},
      "RULE": {},
      "rule": {},
      "CIRCLE": {},
      "circle": {},
      "SQUARE": {},
      "square": {},
      "ERRORBAR": {},
      "errorBar": {}
    },
    "AREA": {},
    "BAR": {},
    "LINE": {},
    "POINT": {},
    "TEXT": {},
    "TICK": {},
    "RULE": {},
    "CIRCLE": {},
    "SQUARE": {},
    "ERRORBAR": {},
    "PRIMITIVE_MARKS": {}
  },
  "scale": {
    "ScaleType": {
      "LINEAR": {},
      "linear": {},
      "LOG": {},
      "log": {},
      "POW": {},
      "pow": {},
      "SQRT": {},
      "sqrt": {},
      "QUANTILE": {},
      "quantile": {},
      "QUANTIZE": {},
      "quantize": {},
      "ORDINAL": {},
      "ordinal": {},
      "TIME": {},
      "time": {},
      "UTC": {},
      "utc": {}
    },
    "NiceTime": {
      "SECOND": {},
      "second": {},
      "MINUTE": {},
      "minute": {},
      "HOUR": {},
      "hour": {},
      "DAY": {},
      "day": {},
      "WEEK": {},
      "week": {},
      "MONTH": {},
      "month": {},
      "YEAR": {},
      "year": {}
    },
    "BandSize": {
      "FIT": {},
      "fit": {}
    },
    "BANDSIZE_FIT": {},
    "defaultScaleConfig": {
      "round": {},
      "textBandWidth": {},
      "bandSize": {},
      "padding": {},
      "useRawDomain": {},
      "opacity": {},
      "nominalColorRange": {},
      "sequentialColorRange": {},
      "shapeRange": {},
      "fontSizeRange": {},
      "ruleSizeRange": {},
      "tickSizeRange": {}
    },
    "defaultFacetScaleConfig": {
      "round": {},
      "padding": {}
    }
  },
  "shorthand": {
    "DELIM": {},
    "ASSIGN": {},
    "TYPE": {},
    "FUNC": {},
    "shorten": function () {},
    "parse": function () {},
    "shortenEncoding": function () {},
    "parseEncoding": function () {},
    "shortenFieldDef": function () {},
    "shortenFieldDefs": function () {},
    "parseFieldDef": function () {}
  },
  "sort": {
    "SortOrder": {
      "ASCENDING": {},
      "ascending": {},
      "DESCENDING": {},
      "descending": {},
      "NONE": {},
      "none": {}
    },
    "isSortField": function () {}
  },
  "spec": {
    "isFacetSpec": function () {},
    "isExtendedUnitSpec": function () {},
    "isUnitSpec": function () {},
    "isSomeUnitSpec": function () {},
    "isLayerSpec": function () {},
    "normalize": function () {},
    "normalizeExtendedUnitSpec": function () {},
    "normalizeUnitSpec": function () {},
    "normalizeRangedUnitSpec": function () {},
    "normalizeErrorBarUnitSpec": function () {},
    "normalizeOverlay": function () {},
    "fieldDefs": function () {},
    "isStacked": function () {}
  },
  "stack": {
    "StackOffset": {
      "ZERO": {},
      "zero": {},
      "CENTER": {},
      "center": {},
      "NORMALIZE": {},
      "normalize": {},
      "NONE": {},
      "none": {}
    },
    "stack": function () {}
  },
  "timeUnit": {
    "TimeUnit": {
      "YEAR": {},
      "year": {},
      "MONTH": {},
      "month": {},
      "DAY": {},
      "day": {},
      "DATE": {},
      "date": {},
      "HOURS": {},
      "hours": {},
      "MINUTES": {},
      "minutes": {},
      "SECONDS": {},
      "seconds": {},
      "MILLISECONDS": {},
      "milliseconds": {},
      "YEARMONTH": {},
      "yearmonth": {},
      "YEARMONTHDATE": {},
      "yearmonthdate": {},
      "YEARMONTHDATEHOURS": {},
      "yearmonthdatehours": {},
      "YEARMONTHDATEHOURSMINUTES": {},
      "yearmonthdatehoursminutes": {},
      "YEARMONTHDATEHOURSMINUTESSECONDS": {},
      "yearmonthdatehoursminutesseconds": {},
      "HOURSMINUTES": {},
      "hoursminutes": {},
      "HOURSMINUTESSECONDS": {},
      "hoursminutesseconds": {},
      "MINUTESSECONDS": {},
      "minutesseconds": {},
      "SECONDSMILLISECONDS": {},
      "secondsmilliseconds": {},
      "QUARTER": {},
      "quarter": {},
      "YEARQUARTER": {},
      "yearquarter": {},
      "QUARTERMONTH": {},
      "quartermonth": {},
      "YEARQUARTERMONTH": {},
      "yearquartermonth": {}
    },
    "SINGLE_TIMEUNITS": {},
    "isSingleTimeUnit": function () {},
    "convert": function () {},
    "MULTI_TIMEUNITS": {},
    "isMultiTimeUnit": function () {},
    "TIMEUNITS": {},
    "containsTimeUnit": function () {},
    "defaultScaleType": function () {},
    "fieldExpr": function () {},
    "rawDomain": function () {},
    "smallestUnit": function () {},
    "template": function () {}
  },
  "transform": {},
  "type": {
    "Type": {
      "QUANTITATIVE": {},
      "quantitative": {},
      "ORDINAL": {},
      "ordinal": {},
      "TEMPORAL": {},
      "temporal": {},
      "NOMINAL": {},
      "nominal": {}
    },
    "QUANTITATIVE": {},
    "ORDINAL": {},
    "TEMPORAL": {},
    "NOMINAL": {},
    "SHORT_TYPE": {
      "quantitative": {},
      "temporal": {},
      "nominal": {},
      "ordinal": {}
    },
    "TYPE_FROM_SHORT_TYPE": {
      "Q": {},
      "T": {},
      "O": {},
      "N": {}
    },
    "getFullName": function () {}
  },
  "util": {
    "keys": function () {},
    "extend": function () {},
    "duplicate": function () {},
    "isArray": function () {},
    "vals": function () {},
    "truncate": function () {},
    "toMap": function () {},
    "isObject": function () {},
    "isString": function () {},
    "isNumber": function () {},
    "isBoolean": function () {},
    "pick": function () {},
    "range": function () {},
    "omit": function () {},
    "hash": function () {},
    "contains": function () {},
    "without": function () {},
    "union": function () {},
    "forEach": function () {},
    "reduce": function () {},
    "map": function () {},
    "some": function () {},
    "every": function () {},
    "flatten": function () {},
    "mergeDeep": function () {},
    "unique": function () {},
    "warning": function () {},
    "error": function () {},
    "differ": function () {}
  },
  "validate": {
    "DEFAULT_REQUIRED_CHANNEL_MAP": {
      "text": {},
      "line": {},
      "area": {}
    },
    "DEFAULT_SUPPORTED_CHANNEL_TYPE": {
      "bar": {
        "row": {},
        "column": {},
        "x": {},
        "y": {},
        "size": {},
        "color": {},
        "detail": {}
      },
      "line": {
        "row": {},
        "column": {},
        "x": {},
        "y": {},
        "color": {},
        "detail": {}
      },
      "area": {
        "row": {},
        "column": {},
        "x": {},
        "y": {},
        "color": {},
        "detail": {}
      },
      "tick": {
        "row": {},
        "column": {},
        "x": {},
        "y": {},
        "color": {},
        "detail": {}
      },
      "circle": {
        "row": {},
        "column": {},
        "x": {},
        "y": {},
        "color": {},
        "size": {},
        "detail": {}
      },
      "square": {
        "row": {},
        "column": {},
        "x": {},
        "y": {},
        "color": {},
        "size": {},
        "detail": {}
      },
      "point": {
        "row": {},
        "column": {},
        "x": {},
        "y": {},
        "color": {},
        "size": {},
        "detail": {},
        "shape": {}
      },
      "text": {
        "row": {},
        "column": {},
        "size": {},
        "color": {},
        "text": {}
      }
    },
    "getEncodingMappingError": function () {}
  },
  "version": {}
};
/**********************************************************************
 * End Generated Extern for vl
/**********************************************************************/
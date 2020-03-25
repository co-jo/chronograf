import { LogsTableColumn, TableData, ServerLogConfig, ServerColumn, SeverityLevelColor, ServerEncoding } from 'src/types/logs'
import { SeverityLevelOptions, SeverityColorOptions } from 'src/logs/constants'

import { Measurement } from 'src/types'
import { get } from 'lodash'

// Ordering of columns must be very consistent.
export const ColumnMap = {
    "pravega-controller": {
        columns: [
            "time",
            "severity",
            "appname",
            "class",
            "thread",
            "message",
        ],
        values: []
    },
    "pravega-segmentstore": {
        columns: [
            "time",
            "severity",
            "appname",
            "class",
            "thread",
            "message",
        ],
        values: []
    },
    "zookeeper": {
        columns: [
            "time",
            "severity",
            "appname",
            "class",
            "thread",
            "message",
        ],
        values: []
    },
    "pravega-operator": {
        columns: [
            "time",
            "severity",
            "appname",
            "message",
        ],
        values: []
    },
    "zookeeper-operator": {
        columns: [
            "time",
            "severity",
            "appname",
            "message",
        ],
        values: []
    },
    "default": {
        columns: [
            'time',
            'severity',
            'appname',
            'message',
        ],
        values: []
    }
}

// UI 
const PravegaControllerTableColumns : LogsTableColumn[] = [
        {
            internalName: "time",
            displayName: "Timestamp",
            visible: true,
        },
        {
            internalName: "severity",
            displayName: "Severity",
            visible: true,
        },
        {
            internalName: "appname",
            displayName: "Pod Name",
            visible: true,
        },
        {
            internalName: "class",
            displayName: "Class",
            visible: true,
        },
        {
            internalName: "thread",
            displayName: "Thread",
            visible: true,
        },
        {
            internalName: "message",
            displayName: "Message",
            visible: true,
        }
]
const PravegaSegmentStoreTableColumns : LogsTableColumn[] = [
        {
            internalName: "time",
            displayName: "Timestamp",
            visible: true,
        },
        {
            internalName: "severity",
            displayName: "Severity",
            visible: true,
        },
        {
            internalName: "appname",
            displayName: "Pod Name",
            visible: true,
        },
        {
            internalName: "class",
            displayName: "Class",
            visible: true,
        },
        {
            internalName: "thread",
            displayName: "Thread",
            visible: true,
        },
        {
            internalName: "message",
            displayName: "Message",
            visible: true,
        }
]

const PravegaOperatorTableColumns : LogsTableColumn[] = [
        {
            internalName: "time",
            displayName: "Timestamp",
            visible: true,
        },
        {
            internalName: "severity",
            displayName: "Severity",
            visible: true,
        },
        {
            internalName: "appname",
            displayName: "Pod Name",
            visible: true,
        },
        {
            internalName: "message",
            displayName: "Message",
            visible: true,
        },
]

const ZookeeperTableColumns : LogsTableColumn[] = [
        {
            internalName: "time",
            displayName: "Timestamp",
            visible: true,
        },
        {
            internalName: "severity",
            displayName: "Severity",
            visible: true,
        },
        {
            internalName: "appname",
            displayName: "Pod Name",
            visible: true,
        },
        {
            internalName: "class",
            displayName: "Class",
            visible: true,
        },
        {
            internalName: "thread",
            displayName: "Thread",
            visible: true,
        },
        {
            internalName: "message",
            displayName: "Message",
            visible: true,
        }
]

const ZookeeperOperatorTableColumns : LogsTableColumn[] = [
        {
            internalName: "time",
            displayName: "Timestamp",
            visible: true,
        },
        {
            internalName: "severity",
            displayName: "Severity",
            visible: true,
        },
        {
            internalName: "appname",
            displayName: "Pod Name",
            visible: true,
        },
        {
            internalName: "message",
            displayName: "Message",
            visible: true,
        },
]

const DefaultTableColumns : LogsTableColumn[] = [
        {
            internalName: "time",
            displayName: "Timestamp",
            visible: true,
        },
        {
            internalName: "severity",
            displayName: "Severity",
            visible: true,
        },
        {
            internalName: "appname",
            displayName: "Pod Name",
            visible: true,
        },
        {
            internalName: "message",
            displayName: "Message",
            visible: true,
        },

]

export const UITableColumns =  {
    "pravega-controller": PravegaControllerTableColumns,
    "pravega-segmentstore": PravegaSegmentStoreTableColumns,
    "pravega-operator": PravegaOperatorTableColumns,
    "zookeeper": ZookeeperTableColumns,
    "zookeeper-operator": ZookeeperOperatorTableColumns,
    "default": DefaultTableColumns,
} 

export const DefaultSeverityColors: SeverityLevelColor[] = [
    {
    	color: SeverityColorOptions.ruby,
    	level: SeverityLevelOptions.emerg,
    },
    {
    	color: SeverityColorOptions.fire,
        level: SeverityLevelOptions.alert,
    },
    {
    	color: SeverityColorOptions.curacao,
        level: SeverityLevelOptions.crit,
    },
    {
    	color: SeverityColorOptions.tiger,
        level: SeverityLevelOptions.err,
    },
    {
    	color: SeverityColorOptions.pineapple,
        level: SeverityLevelOptions.warning,
    },
    {
    	color: SeverityColorOptions.rainforest,
        level: SeverityLevelOptions.notice,
    },
    {
    	color: SeverityColorOptions.star,
        level: SeverityLevelOptions.info,
    },
    {
        color: SeverityColorOptions.ocean,
        level: SeverityLevelOptions.trace,
    },
    {
    	color: SeverityColorOptions.wolf,
        level: SeverityLevelOptions.debug,
    }
]

const DefaultServerLogConfig : ServerLogConfig = {
    columns: [
        {
            name: "time",
            position: 0,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                }
            ]
        },
        {
            name: "severity",
            position: 1,
            encodings: [
                {
                    type: "visibility",
                    value: "visible"
                },
                {
                    type: "label",
                    value: "icon"
                },
                {
                    type: "label",
                    value: "text"
                },
                {
                    type: "color",
                    value: "ruby",
                    name: "emerg"
                },
                {
                    type: "color",
                    value: "fire",
                    name: "alert"
                },
                {
                    type: "color",
                    value: "curacao",
                    name: "crit"
                },
                {
                    type: "color",
                    value: "tiger",
                    name: "err"
                },
                {
                    type: "color",
                    value: "pineapple",
                    name: "warning"
                },
                {
                    type: "color",
                    value: "rainforest",
                    name: "notice"
                },
                {
                    type: "color",
                    value: "star",
                    name: "info"
                },
                {
                    type: "color",
                    value: "ocean",
                    name: "trace"
                },
                {
                    type: "color",
                    value: "wolf",
                    name: "debug"
                }
            ]
        },
        {
            name: "appname",
            position: 2,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
                {
                    type: "displayName",
                    value: "Application",
                }
            ]
        },
        {
            name: "message",
            position: 3,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                }
            ]
        },
    ]
}

const PravegaControllerServerLogConfig : ServerLogConfig = {
    columns: [
        {
            name: "time",
            position: 0,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                }
            ]
        },
        {
            name: "severity",
            position: 1,
            encodings: [
                {
                    type: "visibility",
                    value: "visible"
                },
                {
                    type: "label",
                    value: "icon"
                },
                {
                    type: "label",
                    value: "text"
                },
                {
                    type: "color",
                    value: "ruby",
                    name: "emerg"
                },
                {
                    type: "color",
                    value: "fire",
                    name: "alert"
                },
                {
                    type: "color",
                    value: "curacao",
                    name: "crit"
                },
                {
                    type: "color",
                    value: "tiger",
                    name: "err"
                },
                {
                    type: "color",
                    value: "pineapple",
                    name: "warning"
                },
                {
                    type: "color",
                    value: "rainforest",
                    name: "notice"
                },
                {
                    type: "color",
                    value: "star",
                    name: "info"
                },
                {
                    type: "color",
                    value: "ocean",
                    name: "trace"
                },
                {
                    type: "color",
                    value: "wolf",
                    name: "debug"
                }
            ]
        },
        {
            name: "appname",
            position: 2,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
                {
                    type: "displayName",
                    value: "Application"
                },
            ]
        },
        {
            name: "class",
            position: 3,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
            ]
        },
        {
            name: "thread",
            position: 4,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
            ]
        },
        {
            name: "message",
            position: 5,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
            ]
        },
    ]
}

const PravegaSegmentStoreServerLogConfig : ServerLogConfig = {
    columns: [
        {
            name: "time",
            position: 0,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                }
            ]
        },
        {
            name: "severity",
            position: 1,
            encodings: [
                {
                    type: "visibility",
                    value: "visible"
                },
                {
                    type: "label",
                    value: "icon"
                },
                {
                    type: "label",
                    value: "text"
                },
                {
                    type: "color",
                    value: "ruby",
                    name: "emerg"
                },
                {
                    type: "color",
                    value: "fire",
                    name: "alert"
                },
                {
                    type: "color",
                    value: "curacao",
                    name: "crit"
                },
                {
                    type: "color",
                    value: "tiger",
                    name: "err"
                },
                {
                    type: "color",
                    value: "pineapple",
                    name: "warning"
                },
                {
                    type: "color",
                    value: "rainforest",
                    name: "notice"
                },
                {
                    type: "color",
                    value: "star",
                    name: "info"
                },
                {
                    type: "color",
                    value: "ocean",
                    name: "trace"
                },
                {
                    type: "color",
                    value: "wolf",
                    name: "debug"
                }
            ]
        },
        {
            name: "appname",
            position: 2,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
                {
                    type: "displayName",
                    value: "Application"
                },
            ]
        },
        {
            name: "class",
            position: 3,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
            ]
        },
        {
            name: "thread",
            position: 4,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
            ]
        },
        {
            name: "message",
            position: 5,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
            ]
        },
    ]
}

const ZookeeperServerLogConfig : ServerLogConfig = {
    columns: [
        {
            name: "time",
            position: 0,
            encodings: [
                {
                    type: "visibility",
                    value: "hidden",
                }
            ]
        },
        {
            name: "severity",
            position: 1,
            encodings: [
                {
                    type: "visibility",
                    value: "visible"
                },
                {
                    type: "label",
                    value: "icon"
                },
                {
                    type: "label",
                    value: "text"
                },
                {
                    type: "color",
                    value: "ruby",
                    name: "emerg"
                },
                {
                    type: "color",
                    value: "fire",
                    name: "alert"
                },
                {
                    type: "color",
                    value: "curacao",
                    name: "crit"
                },
                {
                    type: "color",
                    value: "tiger",
                    name: "err"
                },
                {
                    type: "color",
                    value: "pineapple",
                    name: "warning"
                },
                {
                    type: "color",
                    value: "rainforest",
                    name: "notice"
                },
                {
                    type: "color",
                    value: "star",
                    name: "info"
                },
                {
                    type: "color",
                    value: "ocean",
                    name: "trace"
                },
                {
                    type: "color",
                    value: "wolf",
                    name: "debug"
                }
            ]
        },
        {
            name: "appname",
            position: 2,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
                {
                    type: "displayName",
                    value: "Application"
                },
            ]
        },
        {
            name: "class",
            position: 3,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
            ]
        },
        {
            name: "thread",
            position: 4,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
            ]
        },
        {
            name: "message",
            position: 5,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
            ]
        },
    ]
}

const PravegaOperatorServerLogConfig : ServerLogConfig = {
    columns: [
        {
            name: "time",
            position: 0,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                }
            ]
        },
        {
            name: "severity",
            position: 1,
            encodings: [
                {
                    type: "visibility",
                    value: "visible"
                },
                {
                    type: "label",
                    value: "icon"
                },
                {
                    type: "label",
                    value: "text"
                },
                {
                    type: "color",
                    value: "ruby",
                    name: "emerg"
                },
                {
                    type: "color",
                    value: "fire",
                    name: "alert"
                },
                {
                    type: "color",
                    value: "curacao",
                    name: "crit"
                },
                {
                    type: "color",
                    value: "tiger",
                    name: "err"
                },
                {
                    type: "color",
                    value: "pineapple",
                    name: "warning"
                },
                {
                    type: "color",
                    value: "rainforest",
                    name: "notice"
                },
                {
                    type: "color",
                    value: "star",
                    name: "info"
                },
                {
                    type: "color",
                    value: "ocean",
                    name: "trace"
                },
                {
                    type: "color",
                    value: "wolf",
                    name: "debug"
                }
            ]
        },
        {
            name: "appname",
            position: 2,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
                {
                    type: "displayName",
                    value: "Application"
                },
            ]
        },
        {
            name: "message",
            position: 3,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
            ]
        },
    ]
}

const ZookeeperOperatorServerLogConfig : ServerLogConfig = {
    columns: [
        {
            name: "time",
            position: 0,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                }
            ]
        },
        {
            name: "severity",
            position: 1,
            encodings: [
                {
                    type: "visibility",
                    value: "visible"
                },
                {
                    type: "label",
                    value: "icon"
                },
                {
                    type: "label",
                    value: "text"
                },
                {
                    type: "color",
                    value: "ruby",
                    name: "emerg"
                },
                {
                    type: "color",
                    value: "fire",
                    name: "alert"
                },
                {
                    type: "color",
                    value: "curacao",
                    name: "crit"
                },
                {
                    type: "color",
                    value: "tiger",
                    name: "err"
                },
                {
                    type: "color",
                    value: "pineapple",
                    name: "warning"
                },
                {
                    type: "color",
                    value: "rainforest",
                    name: "notice"
                },
                {
                    type: "color",
                    value: "star",
                    name: "info"
                },
                {

                    type: "color",
                    value: "ocean",
                    name: "trace"
                },
                {
                    type: "color",
                    value: "wolf",
                    name: "debug"
                }
            ]
        },
        {
            name: "appname",
            position: 2,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
                {
                    type: "displayName",
                    value: "Application"
                },
            ]
        },
        {
            name: "message",
            position: 3,
            encodings: [
                {
                    type: "visibility",
                    value: "visible",
                },
            ]
        },
    ]
}

export const ServerLogConfigMap = {
    "pravega-controller": PravegaControllerServerLogConfig,
    "pravega-segmentstore": PravegaSegmentStoreServerLogConfig,
    "pravega-operator": PravegaOperatorServerLogConfig,
    "zookeeper": ZookeeperServerLogConfig,
    "zookeeper-operator": ZookeeperOperatorServerLogConfig,
    "default": DefaultServerLogConfig,
}

export const TableColumns = (measurement: Measurement): string[] => {
    if (measurement == null) {
        return ColumnMap["default"].columns
    }
    return get(ColumnMap, `${measurement.text}.columns`, ColumnMap["default"].columns)
}
export const TableValues = (measurement: Measurement): any[] => {
    if (measurement == null) {
        return ColumnMap["default"].values
    }
    return get(ColumnMap, `${measurement.text}.values`, ColumnMap["default"].values)
}
import {LogsTableColumn} from 'src/types/logs'
import {Measurement} from 'src/types'
import {get} from 'lodash'

const map = {
    "pravega-controller": [
        {
            internalName: "time",
            displayName: "Timestamp",
            visible: true
        },
        {
            internalName: "severity",
            displayName: "Severity",
            visible: true
        },
        {
            internalName: "appname",
            displayName: "Appname",
            visible: true
        },
        {
            internalName: "class",
            displayName: "Class",
            visible: true
        },
        {
            internalName: "thread",
            displayName: "Thread",
            visible: true
        },
        {
            internalName: "message",
            displayName: "Message",
            visible: true
        },
    ],
    "zookeeper": [
        {
            internalName: "severity",
            displayName: "Severity",
            visible: true
        },
        {
            internalName: "appname",
            displayName: "Appname",
            visible: true
        },
        {
            internalName: "class",
            displayName: "Class",
            visible: true
        },
        {
            internalName: "time",
            displayName: "Timestamp",
            visible: true
        },
        {
            internalName: "thread",
            displayName: "Thread",
            visible: true
        },
        {
            internalName: "message",
            displayName: "Message",
            visible: true
        }
    ],
    "pravega-operator": [
        {
            internalName: "severity",
            displayName: "Severity",
            visible: true
        },
        {
            internalName: "time",
            displayName: "Timestamp",
            visible: true
        },
        {
            internalName: "appname",
            displayName: "Appname",
            visible: true
        },
        {
            internalName: "message",
            displayName: "Message",
            visible: true
        }
    ],
    "zookeeper-operator": [
        {
            internalName: "severity",
            displayName: "Severtiy",
            visible: true
        },
        {
            internalName: "appname",
            displayName: "Appname",
            visible: true
        },
        {
            internalName: "time",
            displayName: "Timestamp",
            visible: true
        },
        {
            internalName: "message",
            displayName: "Message",
            visible: true
        }
    ]
}

const fallback = [
  {
      internalName: "severity",
      displayName: "Severity",
      visible: true
  },
  {
      internalName: "appname",
      displayName: "Appname",
      visible: true
  },
  {
      internalName: "facility",
      displayName: "Facility",
      visible: true
  },
  {
      internalName: "procid",
      displayName: "Procid",
      visible: true
  },
  {
      internalName: "time",
      displayName: "Timestamp",
      visible: true
  },
  {
      internalName: "hostname",
      displayName: "Hostname",
      visible: true
  },
  {
      internalName: "host",
      displayName: "Host",
      visible: true
  },
  {
      internalName: "message",
      displayName: "Message",
      visible: true
  }
]

export const TableColumnSwitch = (measurement: Measurement) => {
    return get(map, `${measurement.text}`, fallback)
}
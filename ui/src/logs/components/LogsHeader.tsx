import _ from 'lodash'
import React, {PureComponent} from 'react'
import {Source, Namespace, Measurement} from 'src/types'

import Dropdown from 'src/shared/components/Dropdown'
import {Page} from 'src/reusable_ui'
import Authorized, {EDITOR_ROLE} from 'src/auth/Authorized'
import LiveUpdatingStatus from 'src/logs/components/LiveUpdatingStatus'

interface SourceItem {
  id: string
  text: string
}

interface Props {
  currentNamespace: Namespace
  currentMeasurement: Measurement
  availableSources: Source[]
  currentSource: Source | null
  currentNamespaces: Namespace[]
  currentMeasurements: Measurement[]
  onChooseSource: (sourceID: string) => void
  onChooseNamespace: (namespace: Namespace) => void
  onChooseMeasurement: (measurement: Measurement) => void
  liveUpdating: boolean
  onChangeLiveUpdatingStatus: () => void
  onShowOptionsOverlay: () => void
}

class LogsHeader extends PureComponent<Props> {
  public render(): JSX.Element {
    const {
      liveUpdating,
      onChangeLiveUpdatingStatus,
      onShowOptionsOverlay,
    } = this.props

    return (
      <Page.Header fullWidth={true}>
        <Page.Header.Left>
          <LiveUpdatingStatus
            onChangeLiveUpdatingStatus={onChangeLiveUpdatingStatus}
            liveUpdating={liveUpdating}
          />
          <Page.Title title="Log Viewer" />
        </Page.Header.Left>
        <Page.Header.Right>
          <Dropdown
            className="dropdown-300"
            items={this.sourceDropDownItems}
            selected={this.selectedSource}
            onChoose={this.handleChooseSource}
          />
          <Dropdown
            className="dropdown-180"
            iconName="disks"
            items={this.namespaceDropDownItems}
            selected={this.selectedNamespace}
            onChoose={this.handleChooseNamespace}
          />
          <Dropdown
            className="dropdown-180"
            items={this.measurementDropDownItems}
            selected={this.selectedMeasurement}
            onChoose={this.handleChooseMeasurement}
          />
          <Authorized requiredRole={EDITOR_ROLE}>
            <button
              className="btn btn-sm btn-square btn-default"
              onClick={onShowOptionsOverlay}
            >
              <span className="icon cog-thick" />
            </button>
          </Authorized>
        </Page.Header.Right>
      </Page.Header>
    )
  }

  private handleChooseSource = (item: SourceItem) => {
    this.props.onChooseSource(item.id)
  }

  private handleChooseNamespace = (namespace: Namespace) => {
    this.props.onChooseNamespace(namespace)
  }

  private handleChooseMeasurement = (measurement: Measurement) => {
    this.props.onChooseMeasurement(measurement)
  }

  private get selectedSource(): string {
    if (_.isEmpty(this.sourceDropDownItems)) {
      return ''
    }

    const id = _.get(this.props, 'currentSource.id', '')
    const currentItem = _.find(this.sourceDropDownItems, item => {
      return item.id === id
    })

    if (currentItem) {
      return currentItem.text
    }

    return ''
  }

  private get selectedMeasurement(): string {
    const {currentMeasurement} = this.props
    
    if (!currentMeasurement) {
      return ''
    }

    return `${currentMeasurement.text}`
  }

  private get selectedNamespace(): string {
    const {currentNamespace} = this.props

    if (!currentNamespace) {
      return ''
    }

    return `${currentNamespace.database}.${currentNamespace.retentionPolicy}`
  }

  private get namespaceDropDownItems() {
    const {currentNamespaces} = this.props

    return currentNamespaces.map(namespace => {
      return {
        text: `${namespace.database}.${namespace.retentionPolicy}`,
        ...namespace,
      }
    })
  }

  private get measurementDropDownItems() {
    const {currentMeasurements} = this.props

    return currentMeasurements.map(measurement=> {
      return {
        text: measurement.text,
      }
    })
  }

  private get sourceDropDownItems(): SourceItem[] {
    const {availableSources} = this.props

    return availableSources.map(source => {
      return {
        text: `${source.name} @ ${source.url}`,
        id: source.id,
      }
    })
  }
}

export default LogsHeader

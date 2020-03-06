import {proxy} from 'src/utils/queryUrlGenerator'
import AJAX from 'src/utils/ajax'
import {Namespace} from 'src/types'
import {TimeSeriesResponse} from 'src/types/series'
import {ServerLogConfig} from 'src/types/logs'
import {buildFindMeasurementQuery, buildFindMeasurementsQuery} from 'src/logs/utils'
import { measurements } from 'src/shared/apis/flux/metaQueries'

export const executeQueryAsync = async (
  proxyLink: string,
  namespace: Namespace,
  query: string
): Promise<TimeSeriesResponse> => {
  try {
    const {data} = await proxy({
      source: proxyLink,
      db: namespace.database,
      rp: namespace.retentionPolicy,
      query,
    })

    return data
  } catch (error) {
    throw error
  }
}

export const getLogConfig = async (url: string) => {
  try {
    return await AJAX({
      method: 'GET',
      url,
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const updateLogConfig = async (
  url: string,
  logConfig: ServerLogConfig
) => {
  try {
    return await AJAX({
      method: 'PUT',
      url,
      data: logConfig,
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getMeasurements = async (
  proxyLink: string,
  namespace: Namespace
): Promise<TimeSeriesResponse> => {
  const query = buildFindMeasurementsQuery(namespace)
  return executeQueryAsync(proxyLink, namespace, query)
}

export const getSyslogMeasurement = async (
  proxyLink: string,
  namespace: Namespace
): Promise<TimeSeriesResponse> => {
  const query = buildFindMeasurementQuery(namespace, 'syslog')
  return executeQueryAsync(proxyLink, namespace, query)
}

export const getVariableMeasurement = async (
  proxyLink: string,
  namespace: Namespace,
  measurement: string
): Promise<TimeSeriesResponse> => {
  const query = buildFindMeasurementQuery(namespace, measurement)
  return executeQueryAsync(proxyLink, namespace, query)
}
// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/**  (Auth) GET /Api/VisitRecord */
export async function getVisitRecord(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getVisitRecordParams,
  options?: { [key: string]: any },
) {
  return request<API.VisitRecordApiResponsePaged>('/Api/VisitRecord', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**  (Auth) GET /Api/VisitRecord/${param0} */
export async function getVisitRecordId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getVisitRecordIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.VisitRecordApiResponse>(`/Api/VisitRecord/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取全部访问记录 GET /Api/VisitRecord/All */
export async function getVisitRecordAll(options?: { [key: string]: any }) {
  return request<API.VisitRecord[]>('/Api/VisitRecord/All', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 总览数据 GET /Api/VisitRecord/Overview */
export async function getVisitRecordOverview(options?: { [key: string]: any }) {
  return request<API.ApiResponse>('/Api/VisitRecord/Overview', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 统计接口 GET /Api/VisitRecord/Stats */
export async function getVisitRecordStats(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getVisitRecordStatsParams,
  options?: { [key: string]: any },
) {
  return request<API.ApiResponse>('/Api/VisitRecord/Stats', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 趋势数据 GET /Api/VisitRecord/Trend */
export async function getVisitRecordTrend(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getVisitRecordTrendParams,
  options?: { [key: string]: any },
) {
  return request<API.ApiResponse>('/Api/VisitRecord/Trend', {
    method: 'GET',
    params: {
      // days has a default value: 7
      days: '7',
      ...params,
    },
    ...(options || {}),
  });
}

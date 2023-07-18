// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/**  (Auth) GET /Api/Dashboard/ClrStats */
export async function getDashboardClrStats(options?: { [key: string]: any }) {
  return request<API.ApiResponse>('/Api/Dashboard/ClrStats', {
    method: 'GET',
    ...(options || {}),
  });
}

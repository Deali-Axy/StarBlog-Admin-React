// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/**  (Auth) GET /Api/Config */
export async function getConfig(options?: { [key: string]: any }) {
  return request<API.ConfigItem[]>('/Api/Config', {
    method: 'GET',
    ...(options || {}),
  });
}

/**  (Auth) POST /Api/Config */
export async function postConfig(
  body: API.ConfigItemCreationDto,
  options?: { [key: string]: any },
) {
  return request<API.ConfigItemApiResponse>('/Api/Config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  (Auth) GET /Api/Config/${param0} */
export async function getConfigKey(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getConfigKeyParams,
  options?: { [key: string]: any },
) {
  const { key: param0, ...queryParams } = params;
  return request<API.ConfigItemApiResponse>(`/Api/Config/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/**  (Auth) PUT /Api/Config/${param0} */
export async function putConfigKey(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putConfigKeyParams,
  body: API.ConfigItemUpdateDto,
  options?: { [key: string]: any },
) {
  const { key: param0, ...queryParams } = params;
  return request<API.ConfigItemApiResponse>(`/Api/Config/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/**  (Auth) DELETE /Api/Config/${param0} */
export async function deleteConfigKey(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteConfigKeyParams,
  options?: { [key: string]: any },
) {
  const { key: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/Config/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

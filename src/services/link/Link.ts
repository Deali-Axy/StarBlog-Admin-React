// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/**  (Auth) GET /Api/Link */
export async function getLink(options?: { [key: string]: any }) {
  return request<API.Link[]>('/Api/Link', {
    method: 'GET',
    ...(options || {}),
  });
}

/**  (Auth) POST /Api/Link */
export async function postLink(body: API.LinkCreationDto, options?: { [key: string]: any }) {
  return request<API.Link>('/Api/Link', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**  (Auth) GET /Api/Link/${param0} */
export async function getLinkId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLinkIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.LinkApiResponse>(`/Api/Link/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/**  (Auth) PUT /Api/Link/${param0} */
export async function putLinkId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putLinkIdParams,
  body: API.LinkCreationDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.LinkApiResponse>(`/Api/Link/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/**  (Auth) DELETE /Api/Link/${param0} */
export async function deleteLinkId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteLinkIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/Link/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

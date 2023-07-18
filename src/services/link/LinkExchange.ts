// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/**  (Auth) GET /Api/LinkExchange */
export async function getLinkExchange(options?: { [key: string]: any }) {
  return request<API.LinkExchange[]>('/Api/LinkExchange', {
    method: 'GET',
    ...(options || {}),
  });
}

/**  (Auth) GET /Api/LinkExchange/${param0} */
export async function getLinkExchangeId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLinkExchangeIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.LinkExchangeApiResponse>(`/Api/LinkExchange/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/**  (Auth) DELETE /Api/LinkExchange/${param0} */
export async function deleteLinkExchangeId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteLinkExchangeIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/LinkExchange/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/**  (Auth) POST /Api/LinkExchange/${param0}/Accept */
export async function postLinkExchangeIdAccept(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postLinkExchangeIdAcceptParams,
  body: API.LinkExchangeVerityDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/LinkExchange/${param0}/Accept`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/**  (Auth) POST /Api/LinkExchange/${param0}/Reject */
export async function postLinkExchangeIdReject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postLinkExchangeIdRejectParams,
  body: API.LinkExchangeVerityDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/LinkExchange/${param0}/Reject`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

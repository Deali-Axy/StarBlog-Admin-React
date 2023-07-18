// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /Api/FeaturedPost */
export async function getFeaturedPost(options?: { [key: string]: any }) {
  return request<API.FeaturedPostListApiResponse>('/Api/FeaturedPost', {
    method: 'GET',
    ...(options || {}),
  });
}

/**  (Auth) POST /Api/FeaturedPost */
export async function postFeaturedPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postFeaturedPostParams,
  options?: { [key: string]: any },
) {
  return request<API.FeaturedPostApiResponse>('/Api/FeaturedPost', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /Api/FeaturedPost/${param0} */
export async function getFeaturedPostId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFeaturedPostIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.FeaturedPostApiResponse>(`/Api/FeaturedPost/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/**  (Auth) DELETE /Api/FeaturedPost/${param0} */
export async function deleteFeaturedPostId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteFeaturedPostIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/FeaturedPost/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

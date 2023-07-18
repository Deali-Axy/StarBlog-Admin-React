// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /Api/FeaturedPhoto */
export async function getFeaturedPhoto(options?: { [key: string]: any }) {
  return request<API.FeaturedPhoto[]>('/Api/FeaturedPhoto', {
    method: 'GET',
    ...(options || {}),
  });
}

/**  (Auth) POST /Api/FeaturedPhoto */
export async function postFeaturedPhoto(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postFeaturedPhotoParams,
  options?: { [key: string]: any },
) {
  return request<API.FeaturedPhotoApiResponse>('/Api/FeaturedPhoto', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /Api/FeaturedPhoto/${param0} */
export async function getFeaturedPhotoId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFeaturedPhotoIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.FeaturedPhotoApiResponse>(`/Api/FeaturedPhoto/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/**  (Auth) DELETE /Api/FeaturedPhoto/${param0} */
export async function deleteFeaturedPhotoId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteFeaturedPhotoIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/FeaturedPhoto/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /Api/FeaturedCategory */
export async function getFeaturedCategory(options?: { [key: string]: any }) {
  return request<API.FeaturedCategory[]>('/Api/FeaturedCategory', {
    method: 'GET',
    ...(options || {}),
  });
}

/**  (Auth) POST /Api/FeaturedCategory */
export async function postFeaturedCategory(
  body: API.FeaturedCategoryCreationDto2,
  options?: { [key: string]: any },
) {
  return request<API.FeaturedCategoryApiResponse>('/Api/FeaturedCategory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /Api/FeaturedCategory/${param0} */
export async function getFeaturedCategoryId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFeaturedCategoryIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.FeaturedCategoryApiResponse>(`/Api/FeaturedCategory/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/**  (Auth) DELETE /Api/FeaturedCategory/${param0} */
export async function deleteFeaturedCategoryId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteFeaturedCategoryIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/FeaturedCategory/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

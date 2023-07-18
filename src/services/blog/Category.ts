// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /Api/Category */
export async function getCategory(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCategoryParams,
  options?: { [key: string]: any },
) {
  return request<API.CategoryApiResponsePaged>('/Api/Category', {
    method: 'GET',
    params: {
      // page has a default value: 1
      page: '1',
      // pageSize has a default value: 10
      pageSize: '10',
      ...params,
    },
    ...(options || {}),
  });
}

/**  (Auth) POST /Api/Category */
export async function postCategory(
  body: API.CategoryCreationDto,
  options?: { [key: string]: any },
) {
  return request<API.CategoryApiResponse>('/Api/Category', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /Api/Category/${param0} */
export async function getCategoryId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCategoryIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CategoryApiResponse>(`/Api/Category/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/**  (Auth) PUT /Api/Category/${param0} */
export async function putCategoryId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putCategoryIdParams,
  body: API.CategoryCreationDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CategoryApiResponse>(`/Api/Category/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/**  (Auth) DELETE /Api/Category/${param0} */
export async function deleteCategoryId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteCategoryIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/Category/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 取消推荐分类 POST /Api/Category/${param0}/CancelFeatured */
export async function postCategoryIdCancelFeatured(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postCategoryIdCancelFeaturedParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/Category/${param0}/CancelFeatured`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 设置为推荐分类 POST /Api/Category/${param0}/SetFeatured */
export async function postCategoryIdSetFeatured(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postCategoryIdSetFeaturedParams,
  body: API.FeaturedCategoryCreationDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.FeaturedCategoryApiResponse>(`/Api/Category/${param0}/SetFeatured`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 设置分类不可见 POST /Api/Category/${param0}/SetInvisible */
export async function postCategoryIdSetInvisible(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postCategoryIdSetInvisibleParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/Category/${param0}/SetInvisible`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 设置分类可见 POST /Api/Category/${param0}/SetVisible */
export async function postCategoryIdSetVisible(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postCategoryIdSetVisibleParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/Category/${param0}/SetVisible`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /Api/Category/All */
export async function getCategoryAll(options?: { [key: string]: any }) {
  return request<API.Category[]>('/Api/Category/All', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取分录目录树 GET /Api/Category/Nodes */
export async function getCategoryNodes(options?: { [key: string]: any }) {
  return request<API.CategoryNode[]>('/Api/Category/Nodes', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 分类词云 GET /Api/Category/WordCloud */
export async function getCategoryWordCloud(options?: { [key: string]: any }) {
  return request<any[]>('/Api/Category/WordCloud', {
    method: 'GET',
    ...(options || {}),
  });
}

// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /Api/BlogPost */
export async function getBlogPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBlogPostParams,
  options?: { [key: string]: any },
) {
  return request<API.PostApiResponsePaged>('/Api/BlogPost', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**  (Auth) POST /Api/BlogPost */
export async function postBlogPost(body: API.PostCreationDto, options?: { [key: string]: any }) {
  return request<API.PostApiResponse>('/Api/BlogPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /Api/BlogPost/${param0} */
export async function getBlogPostId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBlogPostIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PostApiResponse>(`/Api/BlogPost/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/**  (Auth) PUT /Api/BlogPost/${param0} */
export async function putBlogPostId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putBlogPostIdParams,
  body: API.PostUpdateDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PostApiResponse>(`/Api/BlogPost/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/**  (Auth) DELETE /Api/BlogPost/${param0} */
export async function deleteBlogPostId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteBlogPostIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/BlogPost/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 取消推荐博客 POST /Api/BlogPost/${param0}/CancelFeatured */
export async function postBlogPostIdCancelFeatured(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postBlogPostIdCancelFeaturedParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/BlogPost/${param0}/CancelFeatured`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取文章里的图片 GET /Api/BlogPost/${param0}/Images */
export async function getBlogPostIdImages(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBlogPostIdImagesParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.StringListApiResponse>(`/Api/BlogPost/${param0}/Images`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 设置为推荐博客 POST /Api/BlogPost/${param0}/SetFeatured */
export async function postBlogPostIdSetFeatured(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postBlogPostIdSetFeaturedParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.FeaturedPostApiResponse>(`/Api/BlogPost/${param0}/SetFeatured`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 设置置顶（只能有一篇置顶） POST /Api/BlogPost/${param0}/SetTop */
export async function postBlogPostIdSetTop(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postBlogPostIdSetTopParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TopPostApiResponse>(`/Api/BlogPost/${param0}/SetTop`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 上传图片 POST /Api/BlogPost/${param0}/UploadImage */
export async function postBlogPostIdUploadImage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postBlogPostIdUploadImageParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.ApiResponse>(`/Api/BlogPost/${param0}/UploadImage`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

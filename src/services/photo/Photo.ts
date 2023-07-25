// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /Api/Photo */
export async function getApiPhoto(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getApiPhotoParams,
  options?: { [key: string]: any },
) {
  return request<API.PhotoApiResponsePaged>('/Api/Photo', {
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

/**  (Auth) POST /Api/Photo */
export async function postApiPhoto(
  body: {
    /** 作品标题 */
    Title: string;
    /** 拍摄地点 */
    Location: string;
  },
  file?: File,
  options?: { [key: string]: any },
) {
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

  return request<API.PhotoApiResponse>('/Api/Photo', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /Api/Photo/${param0} */
export async function getId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PhotoApiResponse>(`/Api/Photo/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/**  (Auth) PUT /Api/Photo/${param0} */
export async function putId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putIdParams,
  body: API.PhotoUpdateDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PhotoApiResponse>(`/Api/Photo/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/**  (Auth) DELETE /Api/Photo/${param0} */
export async function deleteId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/Photo/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 取消推荐 POST /Api/Photo/${param0}/CancelFeatured */
export async function postIdCancelFeatured(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postIdCancelFeaturedParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ApiResponse>(`/Api/Photo/${param0}/CancelFeatured`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 设置为推荐图片 POST /Api/Photo/${param0}/SetFeatured */
export async function postIdSetFeatured(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postIdSetFeaturedParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.FeaturedPhotoApiResponse>(`/Api/Photo/${param0}/SetFeatured`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取指定宽度的缩略图 GET /Api/Photo/${param0}/Thumb */
export async function getIdThumb(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getIdThumbParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/Api/Photo/${param0}/Thumb`, {
    method: 'GET',
    params: {
      // width has a default value: 300
      width: '300',
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 批量导入图片 POST /Api/Photo/BatchImport */
export async function postBatchImport(options?: { [key: string]: any }) {
  return request<API.PhotoListApiResponse>('/Api/Photo/BatchImport', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 重建图片库数据（重新扫描每张图片的大小等数据） POST /Api/Photo/ReBuildData */
export async function postReBuildData(options?: { [key: string]: any }) {
  return request<API.ApiResponse>('/Api/Photo/ReBuildData', {
    method: 'POST',
    ...(options || {}),
  });
}

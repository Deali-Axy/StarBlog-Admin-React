// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /Api/Photo */
export async function getPhoto(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPhotoParams,
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
export async function postPhoto(
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
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
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
export async function getPhotoId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPhotoIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.PhotoApiResponse>(`/Api/Photo/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/**  (Auth) DELETE /Api/Photo/${param0} */
export async function deletePhotoId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePhotoIdParams,
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
export async function postPhotoIdCancelFeatured(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postPhotoIdCancelFeaturedParams,
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
export async function postPhotoIdSetFeatured(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postPhotoIdSetFeaturedParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.FeaturedPhotoApiResponse>(`/Api/Photo/${param0}/SetFeatured`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /Api/Photo/${param0}/Thumb */
export async function getPhotoIdThumb(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPhotoIdThumbParams,
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
export async function postPhotoBatchImport(options?: { [key: string]: any }) {
  return request<API.PhotoListApiResponse>('/Api/Photo/BatchImport', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 重建图片库数据（重新扫描每张图片的大小等数据） POST /Api/Photo/ReBuildData */
export async function postPhotoReBuildData(options?: { [key: string]: any }) {
  return request<API.ApiResponse>('/Api/Photo/ReBuildData', {
    method: 'POST',
    ...(options || {}),
  });
}

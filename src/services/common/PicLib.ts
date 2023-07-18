// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 随机图片 GET /Api/PicLib/Random */
export async function getPicLibRandom(options?: { [key: string]: any }) {
  return request<any>('/Api/PicLib/Random', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 指定边长的正方形随机图片 GET /Api/PicLib/Random/${param0} */
export async function getPicLibRandomSideLength(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPicLibRandomSideLengthParams,
  options?: { [key: string]: any },
) {
  const { sideLength: param0, ...queryParams } = params;
  return request<any>(`/Api/PicLib/Random/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 随机图片 (带初始种子) GET /Api/PicLib/Random/${param0} */
export async function getPicLibRandomSeed(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPicLibRandomSeedParams,
  options?: { [key: string]: any },
) {
  const { seed: param0, ...queryParams } = params;
  return request<any>(`/Api/PicLib/Random/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 指定尺寸随机图片 GET /Api/PicLib/Random/${param0}/${param1} */
export async function getPicLibRandomWidthHeight(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPicLibRandomWidthHeightParams,
  options?: { [key: string]: any },
) {
  const { width: param0, height: param1, ...queryParams } = params;
  return request<any>(`/Api/PicLib/Random/${param0}/${param1}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 指定边长的正方形随机图片 (带初始种子) GET /Api/PicLib/Random/${param0}/${param1} */
export async function getPicLibRandomSeedSideLength(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPicLibRandomSeedSideLengthParams,
  options?: { [key: string]: any },
) {
  const { seed: param0, sideLength: param1, ...queryParams } = params;
  return request<any>(`/Api/PicLib/Random/${param0}/${param1}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 指定尺寸随机图片 (带初始种子) GET /Api/PicLib/Random/${param0}/${param1}/${param2} */
export async function getPicLibRandomSeedWidthHeight(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPicLibRandomSeedWidthHeightParams,
  options?: { [key: string]: any },
) {
  const { seed: param0, width: param1, height: param2, ...queryParams } = params;
  return request<any>(`/Api/PicLib/Random/${param0}/${param1}/${param2}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取分页评论 GET /Api/Comment */
export async function getApiComment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getApiCommentParams,
  options?: { [key: string]: any },
) {
  return request<API.CommentApiResponsePaged>('/Api/Comment', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /Api/Comment */
export async function postApiComment(
  body: API.CommentCreationDto,
  options?: { [key: string]: any },
) {
  return request<API.CommentApiResponse>('/Api/Comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据邮箱和验证码，获取匿名用户信息 GET /Api/Comment/GetAnonymousUser */
export async function getGetAnonymousUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGetAnonymousUserParams,
  options?: { [key: string]: any },
) {
  return request<API.ApiResponse>('/Api/Comment/GetAnonymousUser', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取邮件验证码 GET /Api/Comment/GetEmailOtp */
export async function getGetEmailOtp(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGetEmailOtpParams,
  options?: { [key: string]: any },
) {
  return request<API.ApiResponse>('/Api/Comment/GetEmailOtp', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

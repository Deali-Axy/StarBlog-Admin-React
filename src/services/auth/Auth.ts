// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取当前用户信息 GET /Api/Auth */
export async function getApiAuth(options?: { [key: string]: any }) {
  return request<API.UserApiResponse>('/Api/Auth', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录 POST /Api/Auth */
export async function postApiAuth(body: API.LoginUser, options?: { [key: string]: any }) {
  return request<API.LoginTokenApiResponse>('/Api/Auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前用户信息 GET /Api/Auth/GetUser */
export async function getGetUser(options?: { [key: string]: any }) {
  return request<API.UserApiResponse>('/Api/Auth/GetUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录 POST /Api/Auth/Login */
export async function postLogin(body: API.LoginUser, options?: { [key: string]: any }) {
  return request<API.LoginTokenApiResponse>('/Api/Auth/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

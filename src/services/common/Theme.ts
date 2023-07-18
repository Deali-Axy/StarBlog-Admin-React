// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /Api/Theme */
export async function getTheme(options?: { [key: string]: any }) {
  return request<API.Theme[]>('/Api/Theme', {
    method: 'GET',
    ...(options || {}),
  });
}

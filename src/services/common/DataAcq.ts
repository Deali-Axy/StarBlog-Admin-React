// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /Api/DataAcq/Hitokoto */
export async function getDataAcqHitokoto(options?: { [key: string]: any }) {
  return request<string>('/Api/DataAcq/Hitokoto', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /Api/DataAcq/Poem */
export async function getDataAcqPoem(options?: { [key: string]: any }) {
  return request<string>('/Api/DataAcq/Poem', {
    method: 'GET',
    ...(options || {}),
  });
}

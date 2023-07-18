// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取推荐博客 GET /Api/Blog/Featured */
export async function getBlogFeatured(options?: { [key: string]: any }) {
  return request<API.PostListApiResponse>('/Api/Blog/Featured', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 博客文章状态列表 GET /Api/Blog/GetStatusList */
export async function getBlogGetStatusList(options?: { [key: string]: any }) {
  return request<string[]>('/Api/Blog/GetStatusList', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 博客信息概况 GET /Api/Blog/Overview */
export async function getBlogOverview(options?: { [key: string]: any }) {
  return request<API.BlogOverviewApiResponse>('/Api/Blog/Overview', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取置顶博客 GET /Api/Blog/Top */
export async function getBlogTop(options?: { [key: string]: any }) {
  return request<API.PostApiResponse>('/Api/Blog/Top', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 上传博客压缩包 + 导入 POST /Api/Blog/Upload */
export async function postBlogUpload(
  body: {
    /** 标题 */
    Title?: string;
    /** 文章链接，设置后可以通过以下形式访问文章
<br> http://starblog.com/p/post-slug1  */
    Slug?: string;
    /** 梗概 */
    Summary?: string;
    /** 内容（markdown格式） */
    Content?: string;
    /** 分类ID */
    CategoryId?: number;
    /** ZIP编码 */
    ZipEncoding?: string;
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

  return request<API.PostApiResponse>('/Api/Blog/Upload', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

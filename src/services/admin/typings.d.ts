declare namespace API {
  type ApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: any;
    errorData?: Record<string, any>;
  };

  type ConfigItem = {
    id?: number;
    key?: string;
    value?: string;
    description?: string;
  };

  type ConfigItemApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: ConfigItem;
  };

  type ConfigItemCreationDto = {
    key?: string;
    value?: string;
    description?: string;
  };

  type ConfigItemUpdateDto = {
    value?: string;
    description?: string;
  };

  type deleteConfigKeyParams = {
    key: string;
  };

  type getConfigKeyParams = {
    key: string;
  };

  type getVisitRecordIdParams = {
    id: number;
  };

  type getVisitRecordParams = {
    /** 排序字段 */
    SortBy?: string;
    /** 页面大小 */
    PageSize?: number;
    /** 当前页码 */
    Page?: number;
    /** 搜索关键词 */
    Search?: string;
  };

  type getVisitRecordStatsParams = {
    year?: number;
    month?: number;
    day?: number;
  };

  type getVisitRecordTrendParams = {
    /** 查看最近几天的数据，默认7天 */
    days?: number;
  };

  type PaginationMetadata = {
    pageCount?: number;
    totalItemCount?: number;
    pageNumber?: number;
    pageSize?: number;
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    firstItemOnPage?: number;
    lastItemOnPage?: number;
  };

  type putConfigKeyParams = {
    key: string;
  };

  type VisitRecord = {
    id?: number;
    ip?: string;
    requestPath?: string;
    requestQueryString?: string;
    requestMethod?: string;
    userAgent?: string;
    time?: string;
  };

  type VisitRecordApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: VisitRecord;
  };

  type VisitRecordApiResponsePaged = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: VisitRecord[];
    pagination?: PaginationMetadata;
  };
}

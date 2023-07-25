declare namespace API {
  type ApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: any;
    errorData?: Record<string, any>;
  };

  type deleteIdParams = {
    id: string;
  };

  type FeaturedPhoto = {
    id?: number;
    photoId?: string;
    photo?: Photo;
  };

  type FeaturedPhotoApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: FeaturedPhoto;
  };

  type getApiPhotoParams = {
    page?: number;
    pageSize?: number;
  };

  type getIdParams = {
    id: string;
  };

  type getIdThumbParams = {
    id: string;
    width?: number;
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

  type Photo = {
    id?: string;
    title?: string;
    location?: string;
    filePath?: string;
    height?: number;
    width?: number;
    createTime?: string;
  };

  type PhotoApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: Photo;
  };

  type PhotoApiResponsePaged = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: Photo[];
    pagination?: PaginationMetadata;
  };

  type PhotoListApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: Photo[];
  };

  type PhotoUpdateDto = {
    id?: string;
    /** 作品标题 */
    title: string;
    /** 拍摄地点 */
    location: string;
    createTime?: string;
  };

  type postIdCancelFeaturedParams = {
    id: string;
  };

  type postIdSetFeaturedParams = {
    id: string;
  };

  type putIdParams = {
    id: string;
  };
}

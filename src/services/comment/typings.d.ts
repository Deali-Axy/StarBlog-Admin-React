declare namespace API {
  type AnonymousUser = {
    createdTime?: string;
    updatedTime?: string;
    isDeleted?: boolean;
    id?: string;
    name?: string;
    email?: string;
    url?: string;
    ip?: string;
  };

  type ApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: any;
    errorData?: Record<string, any>;
  };

  type Category = {
    id?: number;
    name?: string;
    parentId?: number;
    parent?: Category;
    visible?: boolean;
    posts?: Post[];
  };

  type Comment = {
    createdTime?: string;
    updatedTime?: string;
    isDeleted?: boolean;
    id?: string;
    parentId?: string;
    parent?: Comment;
    comments?: Comment[];
    postId?: string;
    post?: Post;
    userId?: string;
    user?: User;
    anonymousUserId?: string;
    anonymousUser?: AnonymousUser;
    userAgent?: string;
    content?: string;
    visible?: boolean;
    reason?: string;
  };

  type CommentApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: Comment;
  };

  type CommentApiResponsePaged = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: Comment[];
    pagination?: PaginationMetadata;
  };

  type CommentCreationDto = {
    parentId?: string;
    postId: string;
    userName?: string;
    email: string;
    url?: string;
    emailOtp: string;
    content: string;
  };

  type getApiCommentParams = {
    PostId?: string;
    /** 页面大小 */
    PageSize?: number;
    /** 当前页码 */
    Page?: number;
    /** 搜索关键词 */
    Search?: string;
    /** 排序字段 */
    SortBy?: string;
  };

  type getGetAnonymousUserParams = {
    email?: string;
    otp?: string;
  };

  type getGetEmailOtpParams = {
    email?: string;
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

  type Post = {
    id?: string;
    title?: string;
    slug?: string;
    status?: string;
    isPublish?: boolean;
    summary?: string;
    content?: string;
    path?: string;
    creationTime?: string;
    lastUpdateTime?: string;
    categoryId?: number;
    category?: Category;
    categories?: string;
  };

  type User = {
    id?: string;
    name?: string;
    password?: string;
  };
}

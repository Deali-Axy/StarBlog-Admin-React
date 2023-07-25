declare namespace API {
  type ApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: any;
    errorData?: Record<string, any>;
  };

  type BlogOverview = {
    /** 文章数量 */
    postsCount?: number;
    /** 分类数量 */
    categoriesCount?: number;
    /** 照片数量 */
    photosCount?: number;
    /** 推荐文章数量 */
    featuredPostsCount?: number;
    /** 推荐分类数量 */
    featuredCategoriesCount?: number;
    /** 推荐照片数量 */
    featuredPhotosCount?: number;
  };

  type BlogOverviewApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: BlogOverview;
  };

  type Category = {
    id?: number;
    name?: string;
    parentId?: number;
    parent?: Category;
    visible?: boolean;
    posts?: Post[];
  };

  type CategoryApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: Category;
  };

  type CategoryApiResponsePaged = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: Category[];
    pagination?: PaginationMetadata;
  };

  type CategoryCreationDto = {
    name?: string;
    parentId?: number;
    visible?: boolean;
  };

  type CategoryNode = {
    id?: number;
    text?: string;
    href?: string;
    tags?: string[];
    nodes?: CategoryNode[];
  };

  type deleteBlogPostIdParams = {
    id: string;
  };

  type deleteCategoryIdParams = {
    id: number;
  };

  type deleteFeaturedCategoryIdParams = {
    id: number;
  };

  type deleteFeaturedPhotoIdParams = {
    id: number;
  };

  type deleteFeaturedPostIdParams = {
    id: number;
  };

  type FeaturedCategory = {
    id?: number;
    categoryId?: number;
    category?: Category;
    name?: string;
    description?: string;
    iconCssClass?: string;
  };

  type FeaturedCategoryApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: FeaturedCategory;
  };

  type FeaturedCategoryCreationDto = {
    /** 重新定义的推荐名称 */
    name?: string;
    /** 推荐分类解释 */
    description?: string;
    /** 图标
<list type="number"><listheader>例子</listheader><item>fa-solid fa-c</item><item>fa-brands fa-python</item><item>fa-brands fa-android</item></list> */
    iconCssClass?: string;
  };

  type FeaturedCategoryCreationDto2 = {
    /** 重新定义的推荐名称 */
    name?: string;
    /** 推荐分类解释 */
    description?: string;
    /** 图标
<list type="number"><listheader>例子</listheader><item>fa-solid fa-c</item><item>fa-brands fa-python</item><item>fa-brands fa-android</item></list> */
    iconCssClass?: string;
    /** 分类ID */
    categoryId?: number;
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

  type FeaturedPost = {
    id?: number;
    postId?: string;
    post?: Post;
  };

  type FeaturedPostApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: FeaturedPost;
  };

  type FeaturedPostListApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: FeaturedPost[];
  };

  type getBlogPostIdImagesParams = {
    id: string;
  };

  type getBlogPostIdParams = {
    id: string;
  };

  type getBlogPostParams = {
    /** 仅请求已发布文章 */
    OnlyPublished?: boolean;
    /** 文章状态 */
    Status?: string;
    /** 分类ID */
    CategoryId?: number;
    /** 排序字段 */
    SortBy?: string;
    /** 页面大小 */
    PageSize?: number;
    /** 当前页码 */
    Page?: number;
    /** 搜索关键词 */
    Search?: string;
  };

  type getCategoryIdParams = {
    id: number;
  };

  type getCategoryParams = {
    page?: number;
    pageSize?: number;
  };

  type getFeaturedCategoryIdParams = {
    id: number;
  };

  type getFeaturedPhotoIdParams = {
    id: number;
  };

  type getFeaturedPostIdParams = {
    id: number;
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

  type PostApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: Post;
  };

  type PostApiResponsePaged = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: Post[];
    pagination?: PaginationMetadata;
  };

  type postBlogPostIdCancelFeaturedParams = {
    id: string;
  };

  type postBlogPostIdSetFeaturedParams = {
    id: string;
  };

  type postBlogPostIdSetTopParams = {
    id: string;
  };

  type postBlogPostIdUploadImageParams = {
    id: string;
  };

  type postCategoryIdCancelFeaturedParams = {
    id: number;
  };

  type postCategoryIdSetFeaturedParams = {
    id: number;
  };

  type postCategoryIdSetInvisibleParams = {
    id: number;
  };

  type postCategoryIdSetVisibleParams = {
    id: number;
  };

  type PostCreationDto = {
    /** 标题 */
    title?: string;
    /** 文章链接，设置后可以通过以下形式访问文章
<br> http://starblog.com/p/post-slug1  */
    slug?: string;
    /** 梗概 */
    summary?: string;
    /** 内容（markdown格式） */
    content?: string;
    /** 分类ID */
    categoryId?: number;
    /** ZIP编码 */
    zipEncoding?: string;
  };

  type postFeaturedPhotoParams = {
    photoId?: string;
  };

  type postFeaturedPostParams = {
    postId?: string;
  };

  type PostListApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: Post[];
  };

  type PostUpdateDto = {
    id?: string;
    /** 标题 */
    title?: string;
    /** 文章链接，设置后可以通过以下形式访问文章
<br> http://starblog.com/p/post-slug1  */
    slug?: string;
    /** 梗概 */
    summary?: string;
    /** 内容（markdown格式） */
    content?: string;
    /** 分类ID */
    categoryId?: number;
  };

  type putBlogPostIdParams = {
    id: string;
  };

  type putCategoryIdParams = {
    id: number;
  };

  type StringListApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: string[];
  };

  type TopPost = {
    id?: number;
    postId?: string;
    post?: Post;
  };

  type TopPostApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: TopPost;
  };
}

declare namespace API {
  type ApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: any;
    errorData?: Record<string, any>;
  };

  type deleteLinkExchangeIdParams = {
    id: number;
  };

  type deleteLinkIdParams = {
    id: number;
  };

  type getLinkExchangeIdParams = {
    id: number;
  };

  type getLinkIdParams = {
    id: number;
  };

  type Link = {
    id?: number;
    name?: string;
    description?: string;
    url?: string;
    visible?: boolean;
  };

  type LinkApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: Link;
  };

  type LinkCreationDto = {
    /** 网站名称 */
    name?: string;
    /** 介绍 */
    description?: string;
    /** 网址 */
    url?: string;
    /** 是否显示 */
    visible?: boolean;
  };

  type LinkExchange = {
    id?: number;
    name?: string;
    description?: string;
    url?: string;
    webMaster?: string;
    email?: string;
    verified?: boolean;
    reason?: string;
    applyTime?: string;
  };

  type LinkExchangeApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: LinkExchange;
  };

  type LinkExchangeVerityDto = {
    /** 处理原因 */
    reason?: string;
  };

  type postLinkExchangeIdAcceptParams = {
    id: number;
  };

  type postLinkExchangeIdRejectParams = {
    id: number;
  };

  type putLinkIdParams = {
    id: number;
  };
}

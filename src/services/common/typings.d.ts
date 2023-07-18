declare namespace API {
  type ApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: any;
    errorData?: Record<string, any>;
  };

  type getPicLibRandomSeedParams = {
    seed: string;
  };

  type getPicLibRandomSeedSideLengthParams = {
    seed: string;
    /** 边长 */
    sideLength: number;
  };

  type getPicLibRandomSeedWidthHeightParams = {
    seed: string;
    width: number;
    height: number;
  };

  type getPicLibRandomSideLengthParams = {
    /** 边长 */
    sideLength: number;
  };

  type getPicLibRandomWidthHeightParams = {
    /** 宽度 */
    width: number;
    /** 高度 */
    height: number;
  };

  type Theme = {
    name?: string;
    path?: string;
    cssUrl?: string;
  };
}

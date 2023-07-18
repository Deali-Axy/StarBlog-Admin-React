declare namespace API {
  type LoginToken = {
    token?: string;
    expiration?: string;
  };

  type LoginTokenApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: LoginToken;
  };

  type LoginUser = {
    username?: string;
    password?: string;
  };

  type User = {
    id?: string;
    name?: string;
    password?: string;
  };

  type UserApiResponse = {
    statusCode?: number;
    successful?: boolean;
    message?: string;
    data?: User;
  };
}

const contains = function (list: string[], item: string): boolean {
  return list.indexOf(item) > -1;
};

const hasPermission = function (groups: string[], permissions: string[]): boolean {
  return groups.filter((e) => contains(permissions, e)).length > 0;
};

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.User } | undefined) {
  const {currentUser} = initialState ?? {};

  return {
    canAdmin: currentUser && currentUser.name === 'admin',
  };
}

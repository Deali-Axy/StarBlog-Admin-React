import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} DjangoStarter 管理系统`}
      links={[
        {
          key: 'Django Starter',
          title: 'DjangoStarter',
          href: 'https://github.com/Deali-Axy/DjangoStarter',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Deali-Axy/DjangoStarter',
          blankTarget: true,
        },
        {
          key: 'StarBlog',
          title: 'StarBlog',
          href: 'https://github.com/Deali-Axy/StarBlog',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;

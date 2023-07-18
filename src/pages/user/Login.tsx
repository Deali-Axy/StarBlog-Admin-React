import Footer from '@/components/Footer';
import {postLogin} from '@/services/auth/Auth'
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import {useEmotionCss} from '@ant-design/use-emotion-css';
import {FormattedMessage, history, useModel, Helmet} from '@umijs/max';
import {Alert, message} from 'antd';
import Settings from '../../../config/defaultSettings';
import React, {useState} from 'react';
import {flushSync} from 'react-dom';
import * as auth from '@/utils/auth';

const LoginMessage: React.FC<{
  content: string;
}> = ({content}) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const {initialState, setInitialState} = useModel('@@initialState');
  const [loginError, setLoginError] = useState<string | null>(null)

  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const handleSubmit = async (values: API.LoginUser) => {
    try {
      // 登录
      const data = await postLogin({...values});

      console.log(data)

      if (data) {
        console.log(data)
        message.success('登录成功！');
        auth.login(data.data!.token!, values.username!, data.data!.expiration!)
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      }
      console.log(data);
    } catch (error: any) {
      console.log(error);
      // message.error('登录失败，请重试！');
      // @ts-ignore
      setLoginError(error?.response?.data?.message)
    }
  };

  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          登录 - {Settings.title}
        </title>
      </Helmet>
      <div style={{flex: '1', padding: '32px 0'}}>
        <LoginForm
          contentStyle={{minWidth: 280, maxWidth: '75vw'}}
          logo={<img alt="logo" src="/logo.svg"/>}
          title='StarBlog'
          subTitle='输入用户名和密码登录系统'
          initialValues={{autoLogin: true,}}
          onFinish={async (values) => {
            await handleSubmit(values as API.User);
          }}
        >

          {loginError && (
            <LoginMessage content={loginError}/>
          )}

          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined/>,
            }}
            placeholder='用户名'
            rules={[
              {
                required: true,
                message: '请输入用户名'
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined/>,
            }}
            placeholder='密码'
            rules={[
              {
                required: true,
                message: '请输入密码！'
              },
            ]}
          />

          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录"/>
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              {/*<FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码" />*/}
            </a>
          </div>
        </LoginForm>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;

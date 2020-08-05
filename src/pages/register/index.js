import React, {PureComponent} from "react";
import {Form, Input, Button, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link, Redirect} from 'react-router-dom'

import {LoginWrapper, LoginBox,} from "./style";

export default class Register extends PureComponent {
  state = {
    isRegister: false
  };
  onFinish = values => {
    message.info('注册成功！');
    // console.log('Received values of form: ', values);
    this.setState({
      isRegister: true
    })
  };
  render() {
    if (!this.state.isRegister) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: false,
              }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入您的手机号',
                  },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="手机号"/>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入密码',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon"/>}
                  type="password"
                  placeholder="密码"
                />

              </Form.Item>
              <Form.Item
                name="surePassword"
                rules={[
                  {
                    required: true,
                    message: '请确认密码',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon"/>}
                  type="password"
                  placeholder="请确认你的密码"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  注册
                </Button>
                <Link to={'./login'}>现在去登录！</Link>
              </Form.Item>
            </Form>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to={'/'}/>
    }

  }

}






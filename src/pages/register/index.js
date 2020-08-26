import React, {PureComponent} from "react";
import {Form, Input, Button, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link, Redirect} from 'react-router-dom'

import {LoginWrapper, LoginBox,} from "./style";

export default class Register extends PureComponent {
  /*
  * 注册页面
  * */
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
                  {required: true, whitespace: true, message: '请输入用户名'},
                  {min: 4, message: '用户名至少要有4位'},
                  {max: 12, message: '用户名最多不超过12位'},
                  {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成'}
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="手机号"/>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {required: true, whitespace: true, message: '请输入密码'},
                  {min: 4, message: '密码至少要有4位'},
                  {max: 12, message: '密码最多不超过12位'},
                  {pattern: /^[a-zA-Z0-9_]+$/, message: '密码必须是英文、数字或下划线组成'}
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






import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Redirect, Link} from "react-router-dom";
import {Form, Input, Button, Checkbox, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

import {LoginWrapper, LoginBox,} from "./style";
import * as actionCreator from './store/actionCreator'

class Login extends PureComponent {
/*
* 登录路由
* */
  render() {
    const onFinish = values => {
      message.info('登录成功！');
      this.props.login(values.username, values.password)
    };
    const {loginState} = this.props;
    if (!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{remember: true}}
              onFinish={onFinish}
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
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="账号"/>
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
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>记住密码</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="">
                  忘记密码
                </a>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
                <Link to='/register'>现在注册</Link>
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

const mapState = (state) => ({
  loginState: state.getIn(['login', 'login'])
});
const mapDispatch = (dispatch) => ({
  login(accountElement, passwordElement) {
    dispatch(actionCreator.login(accountElement, passwordElement));

  }
});
export default connect(mapState, mapDispatch)(Login)
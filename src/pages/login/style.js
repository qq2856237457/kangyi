import styled from "styled-components";


export const LoginWrapper = styled.div`
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  top:56px;
  background:#eee;
`;
export const LoginBox = styled.div`
  width:400px;
  height:300x;
  margin:100px auto;
  padding-top:20px;
  background:#fff;
  box-shadow:0 0 8px rgba(0,0,0,.1);
  border:1px solid #dcdcdc;
  padding:50px;
  .login-form {
  max-width: 300px;
}
.login-form-forgot {
  float: right;
}
.ant-col-rtl .login-form-forgot {
  float: left;
}
.login-form-button {
  width: 100%;
}
`;

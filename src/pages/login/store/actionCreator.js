import axios from 'axios'

import * as constants from "./constants"

export const login = (account, password) => {
  /*
  * 从后台拿取用户登录的数据，派发action
  * */
  return (dispatch) => {
    axios.get('./api/login.json?account=' + account + '&password' + password).then((res) => {
      const result = res.data.data;
      if (result) {
          const action={
            type:constants.CHANG_LOGIN,
            value:result
          };
          dispatch(action);
      } else {
        alert('登录失败')
      }
    })
  }
};
export const logout=()=>{
  return(dispatch)=>{
    const action={
      type:constants.LOGOUT,
      value:false
    };
    dispatch(action)
  }
};
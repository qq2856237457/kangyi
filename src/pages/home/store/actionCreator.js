import * as constants from "./constants"
import axios from 'axios';
import {fromJS} from "immutable";

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('./api/home.json').then((res) => {
      const result = res.data.data;
      const action = {
        type: constants.GET_DATA,
        topList: result.topList,
        articleList: result.articleList,
        hero:result.hero
      };
      dispatch(action);
    })
  }
};
export const addMoreList = (page) => {
  return (dispatch) => {
    axios.get('./api/articleList.json').then((res) => {
      const result = res.data.articleList;
      const action = {
        type: constants.ADD_DATA,
        list: fromJS(result),
        page: page,
        getMore: true
      };
      dispatch(action);
    })
  }
};
export const changeGetMore = () => {
  return (dispatch)=>{
    const action={
      type:constants.CHANGE_PAGE,
      getMore:false
    };
    dispatch(action);
  }
};

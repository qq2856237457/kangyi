import * as constants from './constants'
import {fromJS} from "immutable";

const defaultState = fromJS({
  focus: false,
  list: [],
  mouseIn: false,
  page: 1,
  totalPage: 1
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focus', true);
    case constants.SEARCH_BLUR:
      return state.set('focus', false);
    case constants.CHANGE_LIST:
      return state.merge({
        //一次性改变多个属性
        list: action.data,
        totalPage: action.totalPage
      });
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}

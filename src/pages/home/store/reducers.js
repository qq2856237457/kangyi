import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
  topList: [],
  articleList: [],
  articlePage: 1,
  getMore: false

});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_DATA:
      return state.merge({
        'topList': fromJS(action.topList),
        'articleList': fromJS(action.articleList),
      });
    case constants.ADD_DATA:
      return state.merge({
        'articleList': state.get("articleList").concat(action.list),
        'articlePage': action.page + 1,
        'getMore': action.getMore
      });
    case constants.CHANGE_PAGE:
      return state.set('getMore', action.getMore);
    default:
      return state;
  }
}

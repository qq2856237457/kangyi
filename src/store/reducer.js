import {combineReducers} from "redux-immutable";
import {reducer as headReducer} from '../common/header/store/inidex'
import {reducer as homeReducer} from '../pages/home/store/index'
import {reducer as detailReducer} from '../pages/detail/store/index'
import {reducer as loginReducer} from '../pages/login/store/index'
import {reducer as storyReducer} from '../pages/story/store/index'

const reducer = combineReducers({
  header: headReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer,
  story: storyReducer
});

export default reducer
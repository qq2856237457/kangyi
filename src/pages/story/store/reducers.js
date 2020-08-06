import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
  story: []
});

export default (state = defaultState, action) => {
  if (action.type === constants.GET_HERO) {
    return state.set('story', action.story)
  }
  return state;
}
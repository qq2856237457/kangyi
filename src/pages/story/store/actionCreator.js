import axios from "axios"
import * as constants from "./constants"


export const getStory = (id) => {
/*
* axios
* 从后台拿取抗疫英雄故事的数据，并派发action
* */
  return (dispatch) => {
    axios.get("./api/hero.json").then((res)=>{
      const result=res.data.data[id-1];
      const action={
        type:constants.GET_HERO,
        story:result
      };
      dispatch(action)
    })

  }

};
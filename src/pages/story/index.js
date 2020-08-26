import React, {PureComponent} from "react";
import {connect} from "react-redux"

import * as actionCreator from './store/actionCreator'
import "./style.css"

class Story extends PureComponent {
  /*
  * 抗疫英雄故事组件
  *
  * */
  componentDidMount() {
    this.props.getStoryData(this.props.location.search.replace(/[^0-9]/ig, ""))
  }

  render() {
    const {list}=this.props;

    return (
      <div className='story-main'>
        {
              <div>
                <div className='title'>{list.title}</div>
                <div className={'connect'}>
                  <p>{list.story}</p>

                </div>
              </div>
        }


      </div>
    )
  }
}

const mapState = (state) => ({
  list:state.getIn(['story','story'])
});
const mapDispatch = (dispatch) => ({
  getStoryData(id) {
    dispatch(actionCreator.getStory(id))
  }
});
export default connect(mapState, mapDispatch)(Story);
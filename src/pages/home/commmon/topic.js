import React, {PureComponent} from "react";
import {connect} from 'react-redux';

import icon from '../../../static/icon/n11.png'

import {TopicItem, TopicWrapper} from "../style";


class Topic extends PureComponent {
  render() {
    const {list} = this.props;
    return (
        <TopicWrapper>
          {
            list.map((item) => {
              return (
                <TopicItem key={item.get('id')}>
                  <img className="topic-pic" src={icon} alt=""/>
                  <a href={item.get('url')} target='_blank'>{item.get('title')}</a>
                </TopicItem>)
            })
          }
        </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'topList'])
});
export default connect(mapState, null)(Topic)
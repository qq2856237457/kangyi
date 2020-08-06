import React, {PureComponent} from "react";
import {connect} from "react-redux"
import {BackTop, Tooltip} from 'antd';
import 'antd/dist/antd.css';


import List from "./commmon/list";
import Recommend from "./commmon/recommend";
import Writer from "./commmon/writer";
import Topic from "./commmon/topic";
import * as actionCreator from "./store/actionCreator"
import topBanner from '../../static/images/topbanner.jpg';


import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from "./style";


class Home extends PureComponent {
  componentDidMount() {
    this.props.changeHomeData();
  }

  handleScrollTop = () => {
    window.scroll(0, 0);
  };

  render() {
    const style = {
      border: '1px solid #dcdcdc',
      cursor: 'pointer',
      position: 'fixed',
      right: '100px',
      bottom: '100px',
      height: 40,
      width: 40,
      lineHeight: '40px',
      borderRadius: 4,
      backgroundColor: '#009eff',
      color: '#fff',
      textAlign: 'center',
      fontSize: 14,
    };
    return (
      <HomeWrapper className="clearfix">
        <HomeLeft>
          <img className='banner-img' src={topBanner} alt=''/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        <BackTop onClick={this.handleScrollTop} visibilityHeight={100}>
          <Tooltip placement="top" title={'返回顶部'}>
            <div style={style}>UP</div>
          </Tooltip>
        </BackTop>
      </HomeWrapper>
    )
  }
}


const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreator.getHomeData())
  }
});
export default connect(null, mapDispatch)(Home)
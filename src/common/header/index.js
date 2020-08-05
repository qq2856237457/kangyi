import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import CSSTransition from "react-transition-group/cjs/CSSTransition";

import {Modal, Button, Popover} from 'antd';
import {ExclamationCircleOutlined} from '@ant-design/icons';

import 'antd/dist/antd.css';
import * as actionCreator from './store/actionCreator';
import * as loginActionCreator from '../../pages/login/store/actionCreator';
import {changeGetMore} from '../../pages/home/store/actionCreator'
import icon from '../../static/icon/icon.png';
import erweima from '../../static/icon/二维码.jpg'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Search,
  SearchTitle,
  SearchSwitch,
  SearchWrapper,
  SearchInfo,
  SearchList,
  SearchItem,
  Addition,
  Button1,
} from './style';


class Header extends Component {

  getList = () => {
    const {focus, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, changePage} = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<SearchItem key={newList[i]}>{newList[i]}</SearchItem>)
      }
    }
    if (focus || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchTitle>
            疫情关键词
            <SearchSwitch onClick={() => changePage(page, totalPage, this.spinIcon)}>
              <span ref={(icon) => {
                this.spinIcon = icon
              }} className="iconfont spin">&#xe606;</span>
              换一批
            </SearchSwitch>
          </SearchTitle>
          <SearchList>
            {
              pageList
            }
          </SearchList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  };

  render() {
    const content = (
      <img src={erweima} style={{width: "120px", height: "120px", margin: "0 50px"}} alt=""/>
    );
    const {focus, handleInputFocus, handleInputBlur, list, login, logout, stopPage} = this.props;
    return (
      <HeaderWrapper>
        <Logo>
          <img src={icon} alt=""/>
          <h1>抗疫专题网站</h1>
        </Logo>
        <Nav>
          <Link to='/'>
            <NavItem className='left active'>首页</NavItem>
          </Link>
          <NavItem className='left'>
            <Popover placement="bottom" title={'微信'} content={content} trigger="hover">
              <Button>联系作者</Button>
            </Popover>
          </NavItem>
          <SearchWrapper className='search'>
            <CSSTransition
              in={focus}
              timeout={200}
              classNames='slide'
            >
              <Search className={focus ? 'focused' : ''}
                      onFocus={() => handleInputFocus(list)}
                      onBlur={handleInputBlur}/>
            </CSSTransition>
            <span className='iconfont zoom'>&#xe60c;</span>
            {this.getList()}
          </SearchWrapper>
          {
            login ? <NavItem className='right' onClick={logout}>退出</NavItem> :
              <Link to={'/login'} onClick={stopPage}><NavItem className='right'>登录</NavItem></Link>
          }

          <NavItem className='right'>
            <span className="iconfont">&#xe636;</span>
          </NavItem>

        </Nav>
        <Addition>
          <Button1 className='writing'><span className="iconfont">&#xe708;</span>中国加油</Button1>
          <Link to={'/register'} onClick={stopPage}><Button1 className='reg'>注册</Button1></Link>
        </Addition>
      </HeaderWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    focus: state.getIn(['header', 'focus']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }

};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreator.getList());
      }
      dispatch(actionCreator.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreator.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreator.mouseLeave())
    },
    changePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totalPage) {
        dispatch(actionCreator.changePage(page + 1));
      } else {
        dispatch(actionCreator.changePage(1));
      }
    },
    stopPage() {
      dispatch(changeGetMore());
    },
    logout() {
      const {confirm} = Modal;

      function showConfirm() {
        confirm({
          title: '你确定要退出吗?',
          icon: <ExclamationCircleOutlined/>,
          content: '',
          onOk() {
            dispatch(loginActionCreator.logout());

          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }

      showConfirm();

    },

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header)
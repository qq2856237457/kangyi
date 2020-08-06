import React, {PureComponent} from "react";
import {Card} from "antd";
import "antd/dist/antd.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux"

import {WriterWrapper} from "../style";

class Writer extends PureComponent {
  state = {
    needFixed: false
  };

  componentDidMount() {
    const fixedTop = document.getElementById('fixed-menu').offsetTop;
    window.onscroll = () => {
      let scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
      //控制元素块A随鼠标滚动固定在顶部
      if (scrollTop >= fixedTop) {
        this.setState({needFixed: true});
      } else if (scrollTop < fixedTop) {
        this.setState({needFixed: false})
      }
    }
  }

  render() {
    const {list} = this.props;

    return (
      <div id='fixed-menu'>
        <WriterWrapper className={this.state.needFixed ? 'fixed' : ''}>
          <Card size="small" title="抗疫英雄故事>>"
                bordered={true}
                extra={<a href="https://www.xuexila.com/yc/c343402.html" target='_blank'>更多</a>} style={{width: 276}}>
            <div>
              {
                list.map((item, index) => {
                  return <Link key={index} to={'/story?id=' + item.get("id")}
                               style={{color: "#555", display: "block"}}>{item.get("name")}</Link>
                })
              }
            </div>

          </Card>
        </WriterWrapper>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "hero"])
});
const mapDispatch = (dispatch) => {

};

export default connect(mapState, mapDispatch)(Writer)
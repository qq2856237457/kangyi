import React, {PureComponent} from "react";
import {WriterWrapper} from "../style";
import {Card} from "antd";
import "antd/dist/antd.css";

export default class Writer extends PureComponent {
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
    return (
      <div id='fixed-menu'>

        <WriterWrapper className={this.state.needFixed ? 'fixed' : ''}>
          <Card size="small" title="抗疫英雄故事>>"
                bordered={true}
                extra={<a href="https://www.xuexila.com/yc/c343402.html" target='_blank'>更多</a>} style={{ width: 276 }}>
            <p>疫情“吹哨人”--李文亮</p>
            <p>中国工程院院士--李兰娟</p>
            <p>金银潭医院渐冻症院长--张定宇</p>
            <p>上海医疗救治专家组组长--张文宏</p>
            <p>火神山医院挖机工人--王伟</p>
            <p>雷神山医院急诊科护士--王欢欢</p>
            <p>吉林省援鄂医疗队护士长--高岚</p>
            <p>宣武医院急诊科护士--邢正涛</p>
            <p>火神山医院ICU硬核护士长--陈静</p>
            <p>北京大学第三医院院长--乔杰</p>
          </Card>
        </WriterWrapper>
      </div>

    )
  }
}
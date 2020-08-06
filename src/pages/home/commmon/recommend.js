import React, {PureComponent} from "react";
import {Link} from "react-router-dom"


import {RecommendWrapper, RecommendItem} from "../style";

export default class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>

          <RecommendItem className='img1 '>
            <a href="http://gold.cnfol.com/caijingyaowen/20200801/28309052.shtml" target="_blank">抗疫头条 ></a>
          </RecommendItem>
          <RecommendItem className='img2 '>
            <a href="http://www.p5w.net/v/202002/t20200212_2377542.htm" target="_blank">抗疫课堂 ></a>
          </RecommendItem>
          <RecommendItem className='img3 '>
            <a href="https://www.sohu.com/a/371480039_120503217" target="_blank">防疫知识 ></a>
          </RecommendItem>
          <RecommendItem className='img4 '>
            <a href="https://www.sohu.com/a/369279370_120066715?_f=v2-index-feeds" target="_blank">抗疫指南 ></a>
            </RecommendItem>

      </RecommendWrapper>
    )
  }
}

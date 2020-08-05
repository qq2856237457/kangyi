import React, {PureComponent} from "react";
import {Link} from "react-router-dom"


import {RecommendWrapper, RecommendItem} from "../style";

export default class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        <Link to={"./recommend1"}>
          <RecommendItem className='img1 '>抗疫头条 ></RecommendItem>
        </Link>
        <Link to={"./recommend2"}>
          <RecommendItem className='img2 '>抗疫课堂 ></RecommendItem>
        </Link>
        <Link to={"./recommend3"}>
          <RecommendItem className='img3 '>图说抗疫 ></RecommendItem>
        </Link>
        <Link to={"./recommend4"}>
          <RecommendItem className='img4 '>抗议指南 ></RecommendItem>
        </Link>
      </RecommendWrapper>
    )
  }
}

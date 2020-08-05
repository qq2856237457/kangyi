import React ,{PureComponent} from "react";
import {FooterWrapper} from "./style";

export default class Footer extends PureComponent{
  render() {
   return (
     <div>
       <FooterWrapper>
         寒冬终将过去，春暖花会再开，向默默在抗疫一线的医护人员致敬！
       </FooterWrapper>
     </div>
   )
  }
}
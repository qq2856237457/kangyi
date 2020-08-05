import styled from "styled-components";

import img1 from '../../static/images/recommend1.png'
import img2 from '../../static/images/recommend2.png'
import img3 from '../../static/images/recommend3.png'
import img4 from '../../static/images/recommend4.png'

export const HomeWrapper = styled.div`
  overflow:hidden;
  width:960px;
  margin:0 auto;
`;
export const HomeLeft = styled.div`
  float:left;
  margin-left:15px;
  padding-top:30px;
  width:625px;
  .banner-img{
    width:625px;
    height:270px; 
  }
`;
export const HomeRight = styled.div`
  width:280px;
  float:right
`;
export const TopicWrapper = styled.div`
  overflow:hidden;
  padding:20px 0 10px 0;
  margin-left:-18px;
  border-bottom:1px  solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float:left;
  height:32px;
  line-height:32px;
  margin-left:18px;
  margin-bottom:18px;
  padding-right:10px;
  background:#f7f7f7;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  a{
     color:black;
  }
  .topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
  }
  
`;
export const ListItem = styled.div`
  overflow:hidden
  padding:20px 0;
  margin-top:20px;
  .pic{
    margin-top:10px;
    display:block;
    width:125px;
    height:100px;
    float:left;
    border-radius:10px;
  }
`;

export const ListInfo = styled.div`
  width:500px;
  float:left;
  padding:18px 0;
  border-bottom:1px  solid #dcdcdc;
  .title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  .desc{
    line-height:24px;
    font-size:13px;
    color:#999;
  }
`;

export const RecommendWrapper = styled.div`
  width:280px;
  margin:30px 0;
  padding:4px 0;
  border-bottom:1px solid #dcdcdc;
  
`;
export const RecommendItem = styled.div`
  margin-bottom:15px;
  display:block;
  background-size:280px 50px;
  line-height:50px;
  padding-left:35px;
  font-size:20px;
  cursor:pointer;
  &.img1{
    background-image:url(${img1});
    color:#fffefc;
  }
  &.img2{
    background-image:url(${img2});
    color:#bf903b;
  }
  &.img3{
    background-image:url(${img3});
    color:#569189;
  }
  &.img4{
    background-image:url(${img4});
    color:#4986a8;
  }
`;

export const WriterWrapper = styled.div`
  
  width:278px;
  
  border:1px solid #dcdcdc;
  border-radius:3px;
  
  text-align:center;
  
  &.fixed{
  position: fixed;
  top: 0;
  
}
`;
export const LoadMore = styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  margin:30px 0;
  background:#a5a5a5;
  text-align:center;
  border-radius:20px;
  color:#fff;
  cursor:pointer;
  float:left;
`;

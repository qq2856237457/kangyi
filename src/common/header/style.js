import styled from "styled-components";



export const HeaderWrapper = styled.div`
    height:56px;
    &.clearfix:after{
    content: ".";
    display: block;
    height: 0;
    line-height: 0;
    visibility: hidden;
    clear: both;
    }

    &.clearfix{
    zoom:1;
    }
    border-bottom:1px solid #f0f0f0;
`;
export const Logo = styled.div`
    position:absolute;
    top:0;
    left:50px; 
    h1{
      display:block;
      float:left;
      height:56px;
      font-size:20px;
      line-height:56px;
      font-weight:700;
    }
    img{
      margin-right:10px;
      float:left;
      display:block;
      width:56px;
      height:56px;
    }
`;
export const Nav = styled.div`
    width:820px;
    height:100%;
    padding-right:100px;
    padding-left:0px;
    border-sizing:border-box;
    margin:0 auto;
`;
export const NavItem = styled.div`
    line-height:56px;
    font-size:17px;
    color:#333;
    padding:0 15px;
    cursor:pointer;
    &.left{
      font-weight:700;
      float:left;
    }
    &.right{
      color:#969696;
      float:right;
    }
    &.active{
      margin-left:-70px;
      height:56px;
      font-weight:700;
      font-size:20px;
      line-height:56px;
    }
`;
export const SearchWrapper = styled.div`
  position:relative;
  margin-left:20px;
  float:left;
  .slide-enter{
  transition:all .2s ease-out;
  }
  .slide-enter-active{
  width:240px;
  }
  .slide-exit{
  transition:all .2s ease-out;
  }
  .slide-exit-active{
  width:160px;
  }
  .zoom {
    height: 30px;
    position: absolute;
    right: 3px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-aline: center;
}
`;
export const Search = styled.input.attrs({
  placeholder: '搜索'
})`
  width:160px;
  height:38px;
  font-size:14px;
  padding:0 35px 0 20px;
  margin-top:9px;
  box-sizing:border-box;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  color:#777;
  &::placeholder{
    color:#999;
  }
  &.focused{
  width:240px;
  }
`;
export const SearchInfo = styled.div`
  position:absolute;
  top:56px;
  left:0;
  width:240px;
  padding:0 20px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  background:#fff;
  `;
export const SearchTitle=styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696
`;
export const SearchSwitch=styled.div`
  float:right;
  font-size:13px;
  cursor:pointer;
  .spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:3px;
    margin-top:1px;
    transition:all .2s ease-in;
    transform-origin:center center;
  }
`;
export const SearchList=styled.div`
  overflow:hidden;
`;
export const SearchItem=styled.a`
  display:block;
  float:left;
  line-height:20px;
  padding:0 5px;
  margin-right:10px;
  margin-bottom:15px;
  font-size:12px;
  border:1px solid #ddd;
  color:#787878;
  border-radios:3px;
`;
export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`;

export const Button1 = styled.div`
  float:right;
  cursor:pointer;
  margin-top:9px;
  padding:0 20px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149; 
  font-size:14px;
  &.writing{
    background:#ec6149;
    color:#fff;
    margin-left:40px;
    margin-right:207px;
  }
  &.reg{
    color:#ec6149;
    
  }
`;
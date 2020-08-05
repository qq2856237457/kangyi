import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"

import * as actionCreator from './store/actionCreator';
import {DetailWrapper, Header, Content} from './style';


class Detail extends PureComponent {
  componentDidMount() {
    this.props.getDetailData(this.props.location.search.replace(/[^0-9]/ig, ""))
  }

  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
      </DetailWrapper>
    )
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});
const mapDispatch = (dispatch) => ({
  getDetailData(id) {
    dispatch(actionCreator.getDetail(id))
  }
});
export default connect(mapState, mapDispatch)(withRouter(Detail));
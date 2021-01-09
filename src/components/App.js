import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class App extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ value: state.count.value });
// こちらでも良い
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// });

// こちらでも良い
const mapDispatchToProps = { increment, decrement };

// stateとactionをコンポーネントに関連付ける
// 引数にコンポーネント（App）を渡す
export default connect(mapStateToProps, mapDispatchToProps)(App);

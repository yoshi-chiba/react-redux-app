import React, { Component } from "react";
import { connect } from "react-redux";
import { readEvents } from "../actions";
import _ from "lodash";

class EventsIndex extends Component {
  // コンポーネントがマウントされる際に実行されるコールバック関数
  // 初期マウント時には外部APIにイベントを取得する処理が必要
  // そういった処理はコンポーネントに書かず、Actionに書く→Reduxの流儀
  componentDidMount() {
    // readEventsという関数が外部APIに対して一覧を取得する機能を持っている
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>{this.renderEvents()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({ events: state.events });
// こちらでも良い
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// });

// こちらでも良い
const mapDispatchToProps = { readEvents };

// stateとactionをコンポーネントに関連付ける
// 引数にコンポーネント（App）を渡す
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);

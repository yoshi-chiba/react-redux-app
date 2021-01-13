import _ from "lodash";
import { READ_EVENTS } from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // 以下のようなデータ構造でレスポンスが返ってくる→扱いにくい！
      // [
      //   {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
      //   {"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."}
      // ]

      // そこで以下のような構造に編集する→パッケージlodashを使えばできる！
      // {
      //   1: {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
      //   2: {"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."}
      // }
      // 下記がその記述
      return _.mapKeys(action.response.data, "id");
    default:
      return events;
  }
};

// Lint対応
// const switchEvents = (state = {}, action) => {
//   switch (action.type) {
//     case READ_EVENTS:
//       return state;
//     default:
//       return state;
//   }
// };

// export default switchEvents;

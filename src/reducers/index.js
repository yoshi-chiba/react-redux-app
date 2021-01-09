import { combineReducers } from "redux";
import count from "./count";

// 通常複数のreducerを記述する
// その場合は「export default combineReducers({ count, foo, bar })」のようになる
export default combineReducers({ count });

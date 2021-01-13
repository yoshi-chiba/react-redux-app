import React from "react";
import ReactDOM from "react-dom";
// storeを作成するためのパッケージ
// thunkはMiddleWareに該当するので、そのMiddleWareを適用するための関数をreduxからimport
import { createStore, applyMiddleware } from "redux";
// 作成したstoreを全コンポーネントに渡す機能を持つパッケージ
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
// 作成したreducerをimport
import reducer from "./reducers";
import EventsIndex from "./components/events_index";
import reportWebVitals from "./reportWebVitals";

// storeを作成
// アプリケーション内部の全てのstateはここに集約される
// 第二引数にapplyMiddleware(thunk)を記述することで、storeの中に組み込むことができる
const store = createStore(reducer, applyMiddleware(thunk));

// providerでコンポーネントを囲み、storeを渡すことで全コンポーネントでstoreを使用することが可能
ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

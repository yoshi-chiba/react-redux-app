import React from "react";
import ReactDOM from "react-dom";
// storeを作成するためのパッケージ
import { createStore } from "redux";
// 作成したstoreを全コンポーネントに渡す機能を持つパッケージ
import { Provider } from "react-redux";
import "./index.css";
// 作成したreducerをimport
import reducer from "./reducers";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

// storeを作成
// アプリケーション内部の全てのstateはここに集約される
const store = createStore(reducer);

// providerでコンポーネントを囲み、storeを渡すことで全コンポーネントでstoreを使用することが可能
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

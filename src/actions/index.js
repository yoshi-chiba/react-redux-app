// リクエストを送信するHTTPクライアントがaxios
import axios from "axios";
export const READ_EVENTS = "READ_EVENTS";

// Chromeの検証ツールのNetworkで確認することができる
// 以下のURLはCRUDのいずれでも共通のURLになる
const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
// Chromeの検証ツールのNetworkで確認することができる
const QUERYSTRING = "?token=token123";

// 外部のサーバーに対してリクエストを投げる処理
// thunkを導入することで関数を返すことができる。そのため() => dispatch =>のように記述できる。
// thunkの内部の関数はdispatchというパラメーターを受け取ることが可能。
// axiosは戻り値がpromiseになる→async awaitで戻り値を扱う
export const readEvents = () => async dispatch => {
  // 非同期処理を実装したいが、pureなオブジェクトを返す必要がある→なので通常はできない
  // ただし、redux-thunkというパッケージを使用することで非同期処理が可能になる
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, response });
};

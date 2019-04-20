import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const initData = {
  data: [],
  message: 'メッセージの入力',
  mode: 'default',
  fdata: []
}

// Reducer
export function memoReducer(state = initData, action) {
  switch (action.type) {
    case 'ADD':
      return addReduce(state, action);

    case 'DELETE':
      return deleteReduce(state, action);

    case 'FIND':
      return findReduce(state, action);

    default:
      return state;
  }
}

// Reduce Action

// Memo追加のReduce処理
function addReduce(state, action) {
  let d = new Date();
  let f = ("0" + d.getHours()).slice(-2) + ':' + ("0" + d.getMinutes()).slice(-2) + ':' + ("0" + d.getSeconds()).slice(-2);
  let data = {
    message: action.message,
    created: f
  };
  // オブジェクトを配列に新規生成
  let newdata = state.data.slice();
  // 配列の先頭に追加
  newdata.unshift(data);
  return {
    data: newdata,
    message: '追加！',
    mode: 'default',
    fdata: []
  };
}

// Memo検索のReduce処理
function findReduce(state, action) {
  let f = action.find;
  let fdata = [];
  state.data.forEach((value) => {
    let res = value.message.indexOf(f);
    if (res >= 0) {
      // 配列の最後に追加
      fdata.push(value)
    }
    // console.warn(value.message, f, res,fdata);
  });
  return {
    data: state.data,
    message: '検索結果:「' + f + '」',
    mode: 'find',
    fdata: fdata
  };
}

// Memo削除のReduce処理
function deleteReduce(state, action) {
  let newdata = state.data.slice();
  newdata.splice(action.index, 1);
  return {
    data: newdata,
    message: '削除番号:「' + action.index + '」',
    meode: 'delete',
    fdata: []
  }
}

// ActionCreator

// Memo追加のAction
export function addMemo(text) {
  return {
    type: 'ADD',
    message: text
  }
}

// Memo削除のAction
export function deleteMemo(num) {
  return {
    type: 'DELETE',
    index: num
  }
}

// Memo検索のAction
export function findMemo(text) {
  return {
    type: 'FIND',
    find: text
  }
}

// Storeを作成
export default createStore(memoReducer,
  composeWithDevTools(applyMiddleware())
);
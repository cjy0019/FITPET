import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from './modules/reducer';
import rootSaga from './modules/saga';

const create = (history) => {
  const sagaMiddleWare = createSagaMiddleware();

  // 210903 by.jy
  // 기존 localStorage 적용했던 토큰을 sessionStorage로 교체했습니다.
  const store = createStore(
    reducer(history),
    {
      login: {
        isLoading: false,
        userName: sessionStorage.getItem('userName'),
        token: sessionStorage.getItem('token'),
        error: null,
      },
    },
    composeWithDevTools(
      applyMiddleware(
        thunk.withExtraArgument(history),
        routerMiddleware(history),
        sagaMiddleWare,
      ),
    ),
  );

  sagaMiddleWare.run(rootSaga);
  return store;
};

export default create;

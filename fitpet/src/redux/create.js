import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from './modules/reducer';
import rootSaga from './modules/saga';

const create = (history) => {
  const sagaMiddleWare = createSagaMiddleware();

  const store = createStore(
    reducer(history),
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

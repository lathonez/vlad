import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer as formReducer } from 'redux-form';
import quizReducer from './quiz/reducers';
import thunk from 'redux-thunk';

const appReducer = combineReducers({
  form: formReducer,
  quiz: quizReducer,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    process.env.NODE_ENV !== 'test' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) ||
  (a => a);

export default function configureStore() {
  const store = createStore(
    appReducer,
    {},
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        thunk
      ),
    ),
  );

  // sagaMiddleware.run(teamsSagas);

  return store;
}

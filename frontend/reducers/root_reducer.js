import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import ProjectReducer from './project_reducer';
import CategoryReducer from './category_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  projects: ProjectReducer,
  categories: CategoryReducer
});

export default RootReducer;
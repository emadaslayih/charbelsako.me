import { combineReducers } from 'redux';
import menu from './menuReducer';
import projects from './projectReducer';
import skills from './skillReducer';
import certifications from './certificationReducer';
import experience from './experienceReducer';

const rootReducer = combineReducers({
  menu,
  projects,
  skills,
  certifications,
  experience
});

export default rootReducer;

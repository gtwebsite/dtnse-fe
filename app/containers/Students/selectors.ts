import { createSelector } from 'reselect';
import type { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectStudents = (state: ApplicationRootState) =>
  state.student || initialState;

const makeSelectStudents = () =>
  createSelector(selectStudents, studentState => studentState);


export { selectStudents, makeSelectStudents };

import ActionTypes from './constants';
import { action } from 'typesafe-actions';
import { Student } from './types';

export const createStudent = (student: Partial<Student>) =>
  action(ActionTypes.CREATE, student);

export const updateStudent = (student: Partial<Student>) =>
  action(ActionTypes.UPDATE, student);

export const deleteStudent = (id: string) =>
  action(ActionTypes.DELETE, id);

export const selectStudent = (student: Partial<Student>) =>
  action(ActionTypes.SELECT, student);

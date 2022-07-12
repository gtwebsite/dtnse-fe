import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export enum Grade {
  FIRST = '1st',
  SECOND = '2nd',
  THIRD = '3rd',
  FOURTH = '4th',
  FIFTH = '5th',
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  grade: StudentGrade;
}

export type StudentAction = ActionType<typeof actions>;

export type StudentGrade = Grade;

export interface StudentState {
  list: Partial<Student>[];
  selected: Partial<Student>;
}
import { StudentState, StudentAction } from './types';
import ActionTypes from './constants';

export const initialState: StudentState = {
  list: [],
  selected: {},
};

function studentReducer(
  state: StudentState = initialState,
  action: StudentAction,
): StudentState {
  switch (action.type) {
    case ActionTypes.CREATE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case ActionTypes.UPDATE:
      // Update the selected student if the id matches
      const studentIndex = state.list.findIndex(({ id }) => id === action.payload.id);
      const newList = state.list;
      newList[studentIndex] = action.payload;
      return {
        ...state,
        selected: {},
        list: newList,
      };
    case ActionTypes.DELETE:
      return {
        ...state,
        list: state.list.filter((student) => student.id !== action.payload),
      };
    case ActionTypes.SELECT:
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
}
export default studentReducer;

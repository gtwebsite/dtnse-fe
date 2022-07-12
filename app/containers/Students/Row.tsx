import * as React from 'react';
import { useDispatch } from 'react-redux';
import type { Student } from './types';
import { deleteStudent, selectStudent } from './actions';
import Portal from './Portal';

export default function Row(props: Partial<Student>) {
  const [confirmDelete, setConfirmDelete] = React.useState(false);
  const dispatch = useDispatch();

  const { id, firstName, lastName, age, email, grade } = props;

  const handleOnEdit = () => {
    dispatch(selectStudent(props));
  }

  const handleOnTogglePortal = () => {
    setConfirmDelete((prevState) => !prevState);
  }

  const handleOnDeleteConfirm = () => {
    id && dispatch(deleteStudent(id))
  }

  return (
    <>
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{age}</td>
        <td>{grade}</td>
        <td align='center'>
          <button onClick={handleOnEdit}>Edit</button> <button onClick={handleOnTogglePortal}>Delete</button>
        </td>
      </tr>
      {confirmDelete && (
        <Portal>
          <div style={{ backgroundColor: '#fff', padding: 30, boxShadow: '0 0 20px rgba(0,0,0,0.2)' }}>
            <h2>Confirm deletion</h2>
            <p>You cannot undo this action. Confirm to proceed.</p>
            <button onClick={handleOnDeleteConfirm}>Confirm</button> <button onClick={handleOnTogglePortal}>Cancel</button>
          </div>
        </Portal>
      )}
    </>
  )
}
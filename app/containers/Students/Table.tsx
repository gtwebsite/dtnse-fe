import * as React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectStudents } from './selectors';
import Row from './Row';

const stateSelector = createSelector(makeSelectStudents(), ({ list }) => ({
  students: list,
}));

export default function Table() {
  const { students } = useSelector(stateSelector);

  if(students.length === 0) {
    return <p>No record found.</p>
  }

  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th align='left'>First Name</th>
          <th align='left'>Last Name</th>
          <th align='left'>Age</th>
          <th align='left'>Email</th>
          <th align='left'>Grade</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => <Row key={student.id} {...student} />)}
      </tbody>
    </table>
  )
}
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { makeSelectStudents } from './selectors';
import { Grade, Student } from '../Students/types';
import { createStudent, updateStudent, selectStudent } from './actions';
import { useDispatch } from 'react-redux';

const stateSelector = createSelector(makeSelectStudents(), ({ selected }) => ({
  selected,
}));

export default function Form() {
  const [student, setStudent] = React.useState<Partial<Student>>({});
  const dispatch = useDispatch();

  const { selected } = useSelector(stateSelector);

  const ref = React.useRef<string>();
  React.useEffect(() => {
    if (selected.id !== ref.current) {
      setStudent(selected);
    }
    ref.current = selected.id;
  }, [selected]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(student.id) {
      dispatch(updateStudent(student))
    } else {
      dispatch(createStudent({ ...student, id: uuidv4() }))
    }
    setStudent({})
  }

  const handleFormReset = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(selectStudent({}))
    setStudent({})
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const input = event.target
    setStudent((prevState) => {
      const value = input.type === 'number' ? parseInt(input.value) : input.value
      const newField = { [input.id]: value }
      return prevState ? {...prevState, ...newField} : newField
    })
  }

  return (
    <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
      <input type="hidden" id="id" value={student.id || ''} />
      <fieldset style={{ border: 0, padding: 0 }}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={student?.firstName || ''} onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={student?.lastName || ''} onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={student?.email || ''} onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" value={student?.age || 0} min='0' onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="grade">Grade</label>
          <select id="grade" value={student?.grade || ''} onChange={handleOnChange}>
            <option value="">- Please select -</option>
            {Object.values(Grade).map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
      </fieldset>
      <button type="submit">Submit</button> <button type="reset">Clear</button>
    </form>
  )
}
import * as React from 'react';
import Form from './Form';
import Table from './Table';

export default function Students() {
  return (
    <div style={{ padding: 30 }}>
      <h1>Students</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '0 0 400px', maxWidth: 400, order: 2 }}>
          <h2>Form</h2>
          <Form />
        </div>
        <div style={{ flex: '1 1 auto', paddingRight: 30, order: 1 }}>
          <h2>List</h2>
          <Table />
        </div>
      </div>
    </div>
  );
}

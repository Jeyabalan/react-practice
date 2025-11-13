import React from 'react';

export default function StudentForm() {
  const [studentList, setStudentList] = React.useState([]);
  const [isEdit, setIsEdit] = React.useState('');
  const [formValue, setFormValue] = React.useState({
    id: null,
    name: '',
    age: '',
  });

  const onChangeInput = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const age = form.get('age');
    if (isEdit) {
      const students = studentList.map((item) => {
        if (item.id === isEdit) {
          (item.name = name), (item.age = age);
        }
        return item;
      });
    } else
      setStudentList([
        ...studentList,
        { name, age, id: studentList.length + 1 },
      ]);
    // clear form value
    setFormValue({ id: null, name: '', age: '' });
    setIsEdit('');
  };

  const editStudent = (student) => {
    setIsEdit(student.id);
    const students = studentList.find((item) => item.id === student.id);
    setFormValue({ ...students });
  };

  const deleteStudent = (student) => {
    const students = studentList
      .filter((item) => item.id !== student.id)
      .map((item, index) => ({ ...item, id: ++index }));
    setStudentList([...students]);
  };

  return (
    <>
      Student Form
      <form onSubmit={formSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formValue.name}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={formValue.age}
            onChange={onChangeInput}
          />
        </div>
        <button type="submit">
          {isEdit ? 'Update Student' : `Add Student`}
        </button>
      </form>
      <table border={1}>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </thead>
        <tbody>
          {studentList.map((student, index) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <button onClick={() => editStudent(student)}>Edit</button>
                <button onClick={() => deleteStudent(student)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

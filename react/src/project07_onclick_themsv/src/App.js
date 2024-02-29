import logo from "./logo.svg";

import StudentTable from "./components/StudentTable";

import "./App.css";

function App() {
  const students = [
    { id: 1, firstName: "Phạm Đình", studentLastName: "Tuấn" },
    { id: 2, firstName: "Nguyễn Minh", studentLastName: "Huy" },
    { id: 3, firstName: "Nguyễn Minh", studentLastName: "Ánh" },
    { id: 4, firstName: "Nguyễn Duy", studentLastName: "Sơn" },
    { id: 5, firstName: "Nguyễn Hoàng", studentLastName: "Tiến" },
  ];
  const addStudent = function () {
    var newStudent = { id: 6, firstName: "Phạm Huyền", studentLastName: "Anh" };
    students.push(newStudent);
    console.log(students);
  };
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">Danh sách sinh viên</div>
        <div className="card-body">
          <StudentTable students={students} />
          <button className="btn btn-primary" onClick={addStudent}>
            Thêm sinh viên
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

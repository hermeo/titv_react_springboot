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
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">Danh sách sinh viên</div>
        <div className="card-body">
          <StudentTable students={students} />
        </div>
      </div>
    </div>
  );
}

export default App;

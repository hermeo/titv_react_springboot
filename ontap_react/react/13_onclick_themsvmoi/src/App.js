import logo from "./logo.svg";
import "./App.css";
import StudentTable from "./components/StudentTable";

function App() {
  const student = [
    { id: 1, firstName: "Phạm Đình", lastName: "Tuấn" },
    { id: 2, firstName: "Nguyễn Văn", lastName: "Huy" },
    { id: 3, firstName: "Nguyễn Khánh", lastName: "Toàn" },
    { id: 4, firstName: "Nguyễn Duy", lastName: "Khánh" },
    { id: 5, firstName: "Đặng Ngọc", lastName: "Sơn" },
  ];
  const addStudent = () => {
    var newStudent = {
      id: 6,
      firstName: "Nguyễn Khải",
      lastName: "Nam",
    };
    student.push(newStudent);
    console.log(student);
  };
  return (
    <div className="App">
      <StudentTable student={student} />
      <button onclick={addStudent}>Thêm sinh viên</button>
    </div>
  );
}

export default App;

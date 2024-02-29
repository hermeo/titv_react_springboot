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
  return (
    <div className="App">
      <StudentTable student={student} />
    </div>
  );
}

export default App;

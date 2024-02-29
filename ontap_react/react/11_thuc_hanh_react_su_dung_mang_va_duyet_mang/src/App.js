import logo from "./logo.svg";
import "./App.css";
import StudentItemI from "./components/StudentIem";

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
      <table>
        <thead>
          <tr>
            <th>Mã sinh viên</th>
            <th>Họ đệm</th>
            <th>Tên</th>
          </tr>
        </thead>
        <tbody>
          <StudentItemI
            studentId="1"
            studentFistName="Phạm Đình"
            studentLastName="Tuấn"
          />
          {student.map((student) => (
            <StudentItemI
              studentId={student.id}
              studentFistName={student.firstName}
              studentLastName={student.lastName}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

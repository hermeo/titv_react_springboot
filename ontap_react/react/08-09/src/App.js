import logo from "./logo.svg";
import "./App.css";
import StudentItemI from "./components/StudentIem";

function App() {
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
          <StudentItemI />
        </tbody>
      </table>
    </div>
  );
}

export default App;

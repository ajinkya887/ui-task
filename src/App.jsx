import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/Tasklist";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <TaskList />
    </>
  );
}

export default App;

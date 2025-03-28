import "./App.css";
import QuestionBank from "./Questionpapers";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import TeachersTable from "./components/TeachersTable";
import Teacherslist from "./components/Teaherlist";
import Papers from "./components/papers";

function App() {
  return (
    <>
    <Navbar/>
    <div className="flex max-w-full ">
      <Sidebar/>
      <TeachersTable/>
      
      
    </div>
    <Papers/>
    <QuestionBank/>
    <Teacherslist/>
      
    </>
  );
}

export default App;

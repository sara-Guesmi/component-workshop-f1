import "./App.css";
// IMPORT default export
import NavbarC from "./Components/Navbar/Navbar";
// import named export :{}
import UserList from "./Components/UserList/UserList";
// import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <NavbarC />
      <UserList />
    </div>
  );
}

export default App;

import "./App.css";
import AppBar from "./components/AppBar";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </>
  );
}

export default App;

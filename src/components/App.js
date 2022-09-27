import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
function App() {
  return (
    <Layout>
      <Home></Home>
      <Signup></Signup>
      {/* <Login></Login> */}
      <Quiz></Quiz>
      <Result></Result>
    </Layout>
  );
}

export default App;

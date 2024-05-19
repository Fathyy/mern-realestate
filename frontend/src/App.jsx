import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, Profile, Signin, Signup } from "./pages";
import PrivateRoute from "./Components/PrivateRoute";
const App = () => {
  return (
    <BrowserRouter>
      {/* header component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

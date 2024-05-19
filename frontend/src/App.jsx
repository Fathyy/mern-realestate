import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, Profile, Signin, Signup } from "./pages";
import PrivateRoute from "./Components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
const App = () => {
  return (
    <BrowserRouter>
      {/* header component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/update-listing/:listingId" element={<UpdateListing/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top100 from "./pages/Top100";
import Saved from "./pages/Saved";
import MainContainer from "./containers/MainContainer";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />}>
          <Route index element={<Home />} />
          <Route path="/top100" element={<Top100 />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

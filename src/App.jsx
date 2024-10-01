import Header from "./components/Header/Header";
import MainBody from "./components/MainBody/MainBody";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Page2 from "./components/Page2/MainBody/Page2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <MainBody />
              <Footer />
            </div>
          }
        />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

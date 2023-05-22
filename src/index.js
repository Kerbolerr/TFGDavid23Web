import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage.tsx";
import Predict from "./pages/Predict.tsx";
import Browse from "./pages/Browse.tsx";
import Upload from "./pages/Upload.tsx";
import 'bootstrap/dist/css/bootstrap.css'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Main />} />
          <Route path="predict" element={<Predict />} />
          <Route path="browse" element={<Browse />} />
          <Route path="upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

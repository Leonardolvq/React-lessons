import { BrowserRouter, Routes, Route } from "react-router-dom"
import Snippets from "./pages/SnippetsPage.js"
import Links from "./pages/LinksPage.js";
import Table from "./pages/TablePage.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Links/>}/>
        <Route path="snippets" element={<Snippets/>}/>
        <Route path="table" element={<Table/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

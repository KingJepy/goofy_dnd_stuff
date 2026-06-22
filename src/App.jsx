// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="container">
//       <h1>Click if you think Maizu Sucks</h1>

//       <button
//         className="hate-button"
//         onClick={() => setCount(count + 1)}
//       >
//         Click Here
//       </button>

//       <h2>{count} Mizu haters</h2>
//     </div>
//   );
// }

// export default App; 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DragImagePage from "./components/DragImagePage";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drag" element={<DragImagePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
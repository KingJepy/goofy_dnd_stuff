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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drag" element={<DragImagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
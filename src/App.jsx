import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Whychoose from "./pages/Whychoose";
import BandA from "./pages/BandA";
import Reviews from "./pages/Reviews";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Whychoose" element={<Whychoose />} />
          <Route path="/BandA" element={<BandA />} />
          <Route path="/reviews" element={<Reviews />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

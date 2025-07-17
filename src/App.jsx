import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Whychoose from "./pages/Whychoose.jsx";
import BandA from "./pages/BandA.jsx";
import Reviews from "./pages/Reviews.jsx";
import CustomForm from "./pages/CustomForm.jsx";

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
          <Route path="/customForm" element={<CustomForm />} />
          {/* <Route path="/reviews" element={<Reviews />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

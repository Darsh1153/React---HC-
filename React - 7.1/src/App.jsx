import { Suspense, useState } from 'react'
import './App.css'
import { lazy } from 'react'
const Dashboard = lazy(() => import("./pages/Dashboard"))
const Landing = lazy(() => import("./pages/Landing"))
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  // const navigate = useNavigate();

  return (
    <div>
      {/* <div>
        <button onClick={() => {
          window.location.href = "/";
        }}>
          Landing Page
        </button>

        <button onClick={() => {
          window.location.href = "/dashboard";
        }}>
          Dashboard Page
        </button>
      </div> */}


      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>}></Route>
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {
        navigate("/");
      }}>Landing Page</button>
      <button onClick={() => {
        navigate("/dashboard");
      }}>Dashboard Page</button>
    </div>
  )
}

export default App

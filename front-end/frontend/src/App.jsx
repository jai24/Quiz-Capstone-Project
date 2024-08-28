import React from 'react'
import { Routes, Route } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import Analytics from '../Pages/Analytics';

const App = () => {
  return (
    <>
       {/* using toaster to style the notification *
       <Toaster />*/}
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Analytics" element={<Analytics />} />
      </Routes>
     
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "./components/ui/button";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <div>
      <h1 className="justify-center flex">im alive</h1>
      <ListPage />
    </div>
  );
}

export default App

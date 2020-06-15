import React from 'react'
import './App.css'
import { Skeleton } from "./skeleton"

function App() {
  return (
    <div className="App">
      <Skeleton circle />
      <Skeleton />
      <Skeleton />
      <Skeleton circle />
      <Skeleton />
      <Skeleton />
      <Skeleton circle />
      <Skeleton />
      <Skeleton />
    </div>
  )
}

export default App

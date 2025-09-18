import { useState } from 'react'
import './App.css'
import BookList from './components/BookList'
import Navbar from './components/Navbar'

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Navbar query={query} setQuery={setQuery}/>
      <BookList query={query}/>
    </>
  )
}

export default App

import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Testimonial from './components/Testimonial'

function App() {
  return (
    <>
      <Testimonial />
      <Testimonial avatar='https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>Some text idk</Testimonial>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

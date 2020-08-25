import React from 'react';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import Footer from './components/FooterComponent';
import './App.css';

function App() {
  return (
    <div style={{backgroundColor: '#feffb5'}} className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
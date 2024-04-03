import React from 'react';
import Navbar from './components/navbar/Navbar';
import HeaderVideo from './components/HeaderVideo/HeaderVideo';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Blogs from './components/Blogs/Blogs';
import Stories from './components/Stories/Stories';
import Clints from './components/Clints/Clints';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeaderVideo />
      <Main />
      <Features />
      <Blogs />
      <Stories />
      <Clints />
      <Footer />
    </div>
    );
  }

export default App;
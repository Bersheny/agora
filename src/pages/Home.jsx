import React from 'react';
import Banner from '../components/banner/Banner.jsx';
import Navbar from '../components/navbar/Navbar.jsx';
import DualTimeline from '../components/timeline/DualTimeline.jsx';

function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <DualTimeline />
    </div>
  );
}

export default Home;
// src/components/DualTimeline.jsx
import React, { useState } from 'react';
import './DualProfile.css';

function DualProfile({ yourProfile, yourPosts, users }) {
  const [activeTab, setActiveTab] = useState('yourinfos'); // Default active tab is 'yourinfos'

  return (
    <div className="dual-profile">
      {/* Tab Buttons */}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'yourinfos' ? 'active' : ''}`} 
          onClick={() => setActiveTab('yourinfos')}
        >
          Vos Infos
        </button>
        <button
          className={`tab-button ${activeTab === 'yourposts' ? 'active' : ''}`} 
          onClick={() => setActiveTab('yourposts')}
        >
          Vos Posts
        </button>
      </div>

      {/* Conditionally Render the content
      {activeTab === 'yourinfos' && <Timeline posts={forYouPosts} users={users} />}
      {activeTab === 'yourposts' && <Timeline posts={followingPosts} users={users} />} */}
    </div>
  );
}

export default DualProfile;

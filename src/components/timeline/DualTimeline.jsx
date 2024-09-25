// src/components/DualTimeline.js
import React, { useState } from 'react';
import Timeline from './Timeline';
import './DualTimeline.css'; // For styling

function DualTimeline() {
  const [activeTab, setActiveTab] = useState('foryou'); // Default active tab is 'foryou'

  const forYouPosts = [
    { user: 'User1', content: 'This is a post from For You timeline.' },
    { user: 'User2', content: 'Another post from For You timeline.' }
  ];

  const followingPosts = [
    { user: 'User3', content: 'This is a post from Following timeline.' },
    { user: 'User4', content: 'Another post from Following timeline.' }
  ];

  return (
    <div className="dual-timeline">
      {/* Tab Buttons */}
      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'foryou' ? 'active' : ''}`} 
          onClick={() => setActiveTab('foryou')}
        >
          Votre feed
        </button>
        <button 
          className={`tab-button ${activeTab === 'following' ? 'active' : ''}`} 
          onClick={() => setActiveTab('following')}
        >
          Le campus
        </button>
      </div>

      {/* Conditionally Render the Timelines */}
      {activeTab === 'foryou' && <Timeline posts={forYouPosts} />}
      {activeTab === 'following' && <Timeline posts={followingPosts} />}
    </div>
  );
}

export default DualTimeline;
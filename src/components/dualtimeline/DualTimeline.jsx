// src/components/DualTimeline.jsx
import React, { useState } from 'react';
import Timeline from '../timeline/Timeline';
import './DualTimeline.css'; // For styling

function DualTimeline({ forYouPosts, followingPosts, users }) {
  const [activeTab, setActiveTab] = useState('foryou'); // Default active tab is 'foryou'

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
      {activeTab === 'foryou' && <Timeline posts={forYouPosts} users={users} />}
      {activeTab === 'following' && <Timeline posts={followingPosts} users={users} />}
    </div>
  );
}

export default DualTimeline;

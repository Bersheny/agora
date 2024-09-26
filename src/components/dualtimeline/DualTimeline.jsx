// src/components/DualTimeline.js
import React, { useState } from 'react';
import Timeline from '../timeline/Timeline';
import './DualTimeline.css'; // For styling

function DualTimeline() {
  const [activeTab, setActiveTab] = useState('foryou'); // Default active tab is 'foryou'

  const forYouPosts = [
    { user: 'Musique', content: 'Poste "Votre feed".' },
    { user: 'Bricolage', content: 'Poste "Votre feed".' }
  ];

  const followingPosts = [
    { user: 'Jardinage', content: 'Poste "Le campus".' },
    { user: 'Musique', content: 'Poste "Le campus".' }
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
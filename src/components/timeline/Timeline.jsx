import React from 'react';
import './Timeline.css';

function Timeline({ posts }) {
  return (
    <div className="timeline">
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h4>{post.user}</h4>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
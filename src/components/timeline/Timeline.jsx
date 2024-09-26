// src/components/timeline/Timeline.jsx
import React from 'react';
import './Timeline.css';

function Timeline({ posts, users }) {
  return (
    <div className="timeline">
      <div className="posts">
        {posts.map((post) => {
          const author = users[post.fields['user-id']]; // Fetching user info based on user-id
          return (
            <div key={post.id} className="post">
              <h4 className="post-chapo">{author ? author.name : 'Unknown Author'}</h4> {/* Display author's name */}
              <h4 className="post-chapo">{post.fields.title}</h4> {/* Display post title */}
              <p>{post.fields.text}</p> {/* Display post text */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;

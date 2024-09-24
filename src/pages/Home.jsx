// import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of the application. Feel free to explore!</p>
      
      <section>
        <h2>Featured Content</h2>
        <p>Here you can display important or featured content for your users.</p>
      </section>
      
      <section>
        <h2>Get Started</h2>
        <p>Provide some instructions or links to help users get started with your app.</p>
        <button onClick={() => alert('Welcome!')}>Click Me!</button>
      </section>
    </div>
  );
}

export default Home;
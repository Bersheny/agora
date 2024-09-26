import React, { useEffect, useState } from 'react';
import Banner from '../components/banner/Banner.jsx';
import Navbar from '../components/navbar/Navbar.jsx';
import DualTimeline from '../components/dualtimeline/DualTimeline.jsx';
import { fetchPosts, fetchUsers } from '../api/table-api.js';

function Home() {
  const [forYouPosts, setForYouPosts] = useState([]);
  const [followingPosts, setFollowingPosts] = useState([]);
  const [users, setUsers] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const postsData = await fetchPosts();
        const usersData = await fetchUsers();

        // Create a map of users by their ID for easy lookup
        const usersMap = usersData.reduce((acc, user) => {
          acc[user.fields['user-id']] = user.fields; // Assuming 'user-id' is the unique identifier
          return acc;
        }, {});

        // Separate posts into "For You" and "Following" based on tag_id
        const forYou = postsData.filter(post => post.fields.tag_id === 1 || post.fields.tag_id === 2);
        const following = postsData.filter(post => post.fields.tag_id !== 1 && post.fields.tag_id !== 2);

        setForYouPosts(forYou);
        setFollowingPosts(following);
        setUsers(usersMap);
      } catch (error) {
        console.error('Error fetching data:', error);
        setErrorMessage('An error occurred while fetching posts.');
      }
    };

    getData();
  }, []);

  return (
    <div>
      <Banner />
      <Navbar />
      <DualTimeline forYouPosts={forYouPosts} followingPosts={followingPosts} users={users} />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Home;

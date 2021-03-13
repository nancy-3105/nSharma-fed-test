import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  // limit is the no. of users/data needs to be fetched
  const LIMIT = 5;
  // users will keep a track of any change to the user data fetched
  const [users, setUsers] = useState([]);
  // page will keep a track of any change to the page
  const [page, setPage] = useState(1);

  const loadData = async (limit = LIMIT) => {
    const URL = "https://randomuser.me/api/";
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };

    // params are the URL parameters to be sent with the request
    // Must be a plain object or a URLSearchParams object
    const params = {
      results: limit
    };

    // .then makes a promise to get the data
    await axios.get(URL, { params, headers }).then((response) => {
      setUsers(response.data.results);
    });
  }; // fn loadData ends here

  // Similar to componentDidMount and componentDidUpdate
  // it will call the loadData fn on a very first render + when the state changes/updates
  useEffect(() => {
    loadData();
  }, [page]);

  const doLoadMore = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  return (
    <div>
      <div>Products</div>
      <button onClick={(e) => doLoadMore(e)}>Load More</button>
      {users.map((user, i) => (
        <div key={i}>{user.name.first} </div>
      ))}
    </div>
  );
};

export default App;

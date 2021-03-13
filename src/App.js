import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import * as theme from "./constants/theme";
import { UserCardsGrid } from "../src/components/UserCardsGrid";

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  overflow-x: hidden;
  min-height: 700px;
`;
const ControlLinks = styled.div`
  margin-bottom: ${theme.space.half};
  background-color: ${theme.color.grey};
  padding: 10px;
`;
const Header = styled.div`
  margin-bottom: ${theme.space.half};
  background-color: ${theme.color.grey};
  padding: ${theme.space.half};
`;
const Title = styled.h3`
  padding: ${theme.space.none};
  margin: ${theme.space.none} ${theme.space.none} ${theme.space.quarter}
    ${theme.space.none};
`;
const LoadMoreButton = styled.button`
  padding: ${theme.space.none};
  margin: ${theme.space.none} ${theme.space.none} ${theme.space.quarter}
    ${theme.space.none};
`;
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
    <AppContainer>
      <Header>
        <Title>Products</Title>
      </Header>
      <ControlLinks>
        <LoadMoreButton onClick={(e) => doLoadMore(e)}>
          Load More
        </LoadMoreButton>
      </ControlLinks>
      <UserCardsGrid data-ref="user-cards-grid" users={users} />
    </AppContainer>
  );
};
export default App;

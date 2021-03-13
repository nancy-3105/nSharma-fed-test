import React from "react";
import styled from "styled-components";
import * as theme from "../constants/theme";

const Container = styled.div`
  margin-bottom: 1rem;
  display: block;
  padding: ${theme.space.none} ${theme.space.double};
  @media ${theme.device.tablet} {
    margin: ${theme.space.none} ${theme.space.double};
  }
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  flex-direction: column;
  justify-content: space-evenly;

  @media ${theme.device.tablet} {
    flex-direction: row;
  }
`;
const Col = styled.div`
  background-color: #e5edf5;
  border: 1px solid #c9c1d5;
  color: #5f5f5f;
  height: auto;
  margin: ${theme.space.standard} ${theme.space.none};
  @media ${theme.device.tablet} {
    padding: ${theme.space.standard};
    width: 16.5%;
    margin: ${theme.space.standard} ${theme.space.standard};
  }
  @media ${theme.device.laptop} {
    width: 21.5%;
  }
`;
const UserDetails = styled.div``;

const UserImage = styled.img`
  border: 1px solid black;
  height: 150px;
  margin: ${theme.space.half} 30px;
  background-color: ${theme.color.white};

  @media ${theme.device.tablet} {
    height: 65px;
    margin: ${theme.space.half} ${theme.space.half};
  }
  @media ${theme.device.laptop} {
    height: 180px;
  }
`;
const UserName = styled.div``;
const UserEmail = styled.div`
  overflow-wrap: break-word;
`;
const UserPhone = styled.div``;

export const UserCardsGrid = ({ users }) => {
  return (
    <Container>
      <Row>
        {users.map((user, i) => (
          <Col key={i}>
            <UserImage data-ref={`user-image-${i}`} src={user.picture.large} />
            <UserDetails data-ref={`user-details-${i}`}>
              <UserName data-ref={`user-name-${i}`}>
                {user.name.first} {user.name.last}
              </UserName>
              <UserEmail data-ref={`user-email-${i}`}>{user.email}</UserEmail>
              <UserPhone data-ref={`user-phone-${i}`}>{user.phone}</UserPhone>
            </UserDetails>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./styles.css";
import NavBar from "../NavBar";
import Restaurant from "./Restaurant";
import sixRandomCategories from "./CategoriesList";

const RestaurantList = () => {
  const [categories, _] = useState(sixRandomCategories());
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = (category) => {
    fetch(`/restaurant/${category}`)
      .then((response) => response.json())
      .then(({ data }) => setRestaurants(data.businesses));
  };

  return (
    <Wrapper>
      <ButtonsWrapper>
        {categories.map((category) => (
          <Button key={category} onClick={() => fetchRestaurants(category)}>
            {category}
          </Button>
        ))}
      </ButtonsWrapper>
      <RestaurantGrid>
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </RestaurantGrid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: #ba55d3;
  height: 800px; */
`;

const ButtonsWrapper = styled.div`
  border: black;
  border-width: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  border-width: 2px;
  border-radius: 10px;
`;

const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

export default RestaurantList;

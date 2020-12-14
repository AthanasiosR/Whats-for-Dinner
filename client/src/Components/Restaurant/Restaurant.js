import React from "react";
import styled from "styled-components";

const Restaurant = ({ restaurant }) => {
  return (
    <Wrapper>
      <RestaurantInfo>
        <Image src={restaurant.image_url} alt="" />
        <Name>{restaurant.name}</Name>
        <Location>{restaurant.location.address1}</Location>
        <Phone>{restaurant.display_phone}</Phone>
        <Price>{restaurant.price}</Price>
        <Rating>{restaurant.rating}/5</Rating>
      </RestaurantInfo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  padding-top: 20px;
  padding-left: 30px;
  padding-bottom: 20px;
`;

const RestaurantInfo = styled.div`
  /* border: solid black; */
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.75);
  width: 300px;
  height: 320px;
  :hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;

const Image = styled.img`
  border-radius: 5px;
  height: 100px;
  max-width: 200px;
`;

const Name = styled.h3``;
const Phone = styled.h5`
  font-size: 15px;
`;
const Price = styled.div``;
const Location = styled.div``;
const Rating = styled.div``;

export default Restaurant;

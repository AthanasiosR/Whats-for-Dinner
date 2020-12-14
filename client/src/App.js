import React from "react";
import styled from "styled-components";
import Homepage from "./Components/Homepage.js";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Components/contexts/AuthContext";
import sixRandomCategories, {
  categories,
} from "./Components/Restaurant/CategoriesList";
import RestaurantList from "./Components/Restaurant/RestaurantList";
import NavBar from "./Components/NavBar";

function App() {
  console.log("hello");
  const randomCategories = sixRandomCategories(categories);
  console.log(randomCategories);
  return (
    <>
      <NavBar />
      <Router>
        <AuthProvider>
          <Wrapper>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/restaurantlist">
                <RestaurantList />
              </Route>
            </Switch>
          </Wrapper>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;

const Wrapper = styled.div``;

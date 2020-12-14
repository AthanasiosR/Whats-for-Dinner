import React, { useState } from "react";

// 26 categories
export const categories = [
  "austrian",
  "bangladeshi",
  "bistros",
  "brasseries",
  "brazilian",
  "burgers",
  "caribbean",
  "chinese",
  "cuban",
  "delis",
  "egyptian",
  "greek",
  "hawaiian",
  "italian",
  "japanese",
  "mexican",
  "korean",
  "kosher",
  "latin",
  "mediterranean",
  "mexican",
  "lebanese",
  "pakistani",
  "portuguese",
  "pizza",
  "seafood",
];

function sixRandomCategories() {
  let newArr = [];

  while (newArr.length < 6) {
    let item = categories[Math.floor(Math.random() * categories.length)];
    console.log(item);
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
}

export default sixRandomCategories;

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com"];

  for (let e = 0; e < domain.length; e++) {
    for (let n = 0; n < noun.length; n++) {
      for (let a = 0; a < adj.length; a++) {
        for (let p = 0; p < pronoun.length; p++) {
          console.log(pronoun[p] + adj[a] + noun[n] + domain[e]);
        }
      }
    }
  }
};

"use strict"

let film =  {
  name: "The Lord of the Rings",
  part1: "The Fellowship of the Ring",
  part2: "The Two Towers",
  part3: "The Return of the King",
  author: "Tolkien",
  year: 2001,
  oscar: true,
  rate: 9.9,
  rate_of_vlad : null,
  rate_of_user: null,
  director: "Peter Jackson",
  box_office: 2919000000,
  run_time_minutes: 558,
  "count of oscars": null,
}

film["count of oscars"] = 17;
alert(film.name + " has " + film["count of oscars"] + " oscars."  );

film.rate_of_vlad = 9.5;
film.rate_of_user = prompt("А как вы оцениваете фильм от 0 до 10?", "10");

alert("He had rate: " + film.rate + "/10 and rate of Vlad: " + film.rate_of_vlad + "/10 \nYour rate is: " + film.rate_of_user);


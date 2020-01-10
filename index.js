"use strict";

let FavoritFilm = {
  name: "The Lord of the Rings",
  part: [
    "The Fellowship of the Ring",
    "The Two Towers",
    "The Return of the King"
  ],
  author: "Tolkien",
  year: 2001,
  oscar: true,
  rateOfSite: 9.9,
  rateOfUser: null,
  director: "Peter Jackson",
  boxOffice: 2919000000,
  runTimeMinutes: 558,
  countOfOscar: 17,
  setRate: function() {
    do {
      this.rateOfUser = prompt("А как вы оцениваете фильм от 0 до 10?", "10");
      if (this.rateOfUser >= 0 && this.rateOfUser <= 10) {
        break;
      } else {
        alert("You enter wrong value");
      }
    } while (true);
  },
  getRate: function() {
    if (this.rateOfUser === null) {
      alert("Can not get rate of the film, start setRate() method");
    } else {
      return this.rateOfUser;
    }
  },
  getRecommendation: function() {
    let rate = Number(this.rateOfUser);
    switch (rate) {
      case 10:
        return `Rate is: ${rate}. It is SUPER FILM`;
      case 9:
        return `Rate is: ${rate}. It is VERY GOOD FILM`;
      case 8:
        return `Rate is: ${rate}. It is GOOD FILM`;
      case 7:
        return `Rate is: ${rate}. It is GOOD FILM`;
      case 6:
        return `Rate is: ${rate}. It is NORMAL FILM`;
      case 5:
        return `Rate is: ${rate}. It is NORMAL FILM`;
      case 4:
        return `Rate is: ${rate}. It is SIMPLE FILM`;
      case 3:
        return `Rate is: ${rate}. It is BAD FILM`;
      case 2:
        return `Rate is: ${rate}. It is BAD FILM`;
      case 1:
        return `Rate is: ${rate}. It is VERY BAD FILM`;
      case 0:
        return `Rate is: ${rate}. It is VERY BAD FILM`;
    }
  }
};

function getRecommendation(rate) {
  switch (rate) {
    case 10:
      return `Rate is: ${rate}. It is SUPER FILM`;
    case 9:
      return `Rate is: ${rate}. It is VERY GOOD FILM`;
    case 8:
      return `Rate is: ${rate}. It is GOOD FILM`;
    case 7:
      return `Rate is: ${rate}. It is GOOD FILM`;
    case 6:
      return `Rate is: ${rate}. It is NORMAL FILM`;
    case 5:
      return `Rate is: ${rate}. It is NORMAL FILM`;
    case 4:
      return `Rate is: ${rate}. It is SIMPLE FILM`;
    case 3:
      return `Rate is: ${rate}. It is BAD FILM`;
    case 2:
      return `Rate is: ${rate}. It is BAD FILM`;
    case 1:
      return `Rate is: ${rate}. It is VERY BAD FILM`;
    case 0:
      return `Rate is: ${rate}. It is VERY BAD FILM`;
  }
}

function startJS() {
  FavoritFilm.countOfOscar = 17;

  alert(`${FavoritFilm.name} has ${FavoritFilm.countOfOscar} oscars`);

  FavoritFilm.setRate();

  alert(FavoritFilm.getRecommendation());
  alert(getRecommendation(Number(FavoritFilm.getRate())));
  alert(getRecommendation(10));
}

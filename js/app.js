'use strict';

var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
];

var pikeUl = document.getElementById('pike');

var seatacUl = document.getElementById('seatac');

var centerUl = document.getElementById('center');

var hillUl = document.getElementById('hill');

var alkiUl = document.getElementById('alki');

var pike = {
  name: 'Pike Place',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  render: function () {
    for (var i = 0; i <hours.length; i++) {
      var answer = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust)) + this.minCust;
      var cookiePerHr = Math.floor(answer * this.avgSale);
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${cookiePerHr} cookies.`;
      pikeUl.appendChild(liEl);
    }
  }
};

pike.render();

var seatac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  render: function () {
    for (var i = 0; i <hours.length; i++) {
      var answer = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust)) + this.minCust;
      var cookiePerHr = Math.floor(answer * this.avgSale);
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${cookiePerHr} cookies.`;
      seatacUl.appendChild(liEl);
    }
  }
};

seatac.render();

var center = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  render: function () {
    for (var i = 0; i <hours.length; i++) {
      var answer = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust)) + this.minCust;
      var cookiePerHr = Math.floor(answer * this.avgSale);
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${cookiePerHr} cookies.`;
      centerUl.appendChild(liEl);
    }
  }
};

center.render();

var hill = {
  name: 'Capital Hill',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  render: function () {
    for (var i = 0; i <hours.length; i++) {
      var answer = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust)) + this.minCust;
      var cookiePerHr = Math.floor(answer * this.avgSale);
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${cookiePerHr} cookies.`;
      hillUl.appendChild(liEl);
    }
  }
};

hill.render();

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  render: function () {
    for (var i = 0; i <hours.length; i++) {
      var answer = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust)) + this.minCust;
      var cookiePerHr = Math.floor(answer * this.avgSale);
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${cookiePerHr} cookies.`;
      alkiUl.appendChild(liEl);
    }
  }
};

alki.render();

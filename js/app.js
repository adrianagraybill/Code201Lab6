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
console.log('doc, ', document);
console.log(pikeUl);
var seatacUl = document.getElementById('seatac');
var centerUl = document.getElementById('center');
var hillUl = document.getElementById('hill');
var alkiUl = document.getElementById('alki');

var pike = {
  name: 'Pike Place',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  render: function (){
    var answer = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust)) + this.minCust;
    console.log(answer);
    var cookiePerHr = (answer * this.avgSale);
    console.log(cookiePerHr);
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiePerHr} cookies.`;
      pikeUl.appendChild(liEl);
    }
  }
};
pike.render();


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
console.log(pikeUl);

// var seatacUl = document.getElementById('seatac');
// var centerUl = document.getElementById('center');
// var hillUl = document.getElementById('hill');
// var alkiUl = document.getElementById('alki');

var pike = {
  name: 'Pike Place',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  render: function (){
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


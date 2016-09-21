$(document).ready(function () {
  $('.search__button').on('click', search);
  $('#search__box').keypress(function (e) {
    if (e.which == 13) {
      search();
    }
  });
});

function search() {
  var searchText = $('#search__box').val();
  var googleAPI = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDpnOpN2cBWJLaz_m4hm70hgpD-q98T-JA&cx=003431745784728081635:aqqjvu6ruaq";
  $('#search-results').empty();
  var result;
  $.getJSON(googleAPI, {q: searchText})
    .done(function (data) {
      if (data.searchInformation.totalResults != 0) {
        for (var i = 0; i < 6; i++) {
          result = $('#search-results')
            .add('<div class="result"><div class="result-title">' + data.items[i].title + '</div><img class="result-image" src="' + data.items[i].pagemap.cse_image[0].src + '"></div></div>');
          result.appendTo('#search-results');
        }
      }
      else {
        result = $('#search-results')
          .add('<div class="result"><span>К сожалению по вашему вопросу ничего не найдено. Попробуйте использовать названия более распространенных продуктов питания (молоко, хлеб, мороженое, пиво, чипсы и т.п.</span></div>');
        result.appendTo('#search-results');
      }
    });
}

// PROTOTYPE -------------------------------------------------

function Human() {
  this.name = "Vasya";
  this.age = 25;
  this.male = true;
  this.height = 176;
  this.weight = 65;
}

function Worker() {
  this.company = "Google";
  this.salary = 2000;
  this.work = function () {
    alert(this.name + " works");
  }
}

function Student() {
  this.school = "Google";
  this.grants = 2000;
  this.watchMovie = function () {
    alert(this.name + " watch movie");
  }
}

Worker.prototype = new Human();
Student.prototype = new Human();


var manager = new Worker();
manager.age = 32;
manager.weight = 75;
manager.salary = 30000;

console.log("Manager's height ", manager.height);

var fedor = new Student();
fedor.grants = 100;
fedor.age = 20;
fedor.name = "Fedor";

console.log("Fedor's weight: ", fedor.weight);
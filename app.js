$(function() {
    app = new App();
    app.addEventListener();
 });

var App = function(){
  this.$button    = $('#button');
  this.$input     = $('#input');
  this.$posterDiv = $('#posterDiv');
  this.url        = "http://www.omdbapi.com/?t="
};

App.prototype.addEventListener = function(){
  var app = this;
  this.$button.on("click", function(event){
    event.preventDefault();
    app.searchImdb();
  });
};

App.prototype.searchImdb = function(){
  var app = this;
  $.ajax({
    url: app.url + "Big Lebowski"
  }).success(function(data){console.log(data)});
}

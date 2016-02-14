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
    app.getSearchInput();
    app.searchImdb();
  });
};

App.prototype.searchImdb = function(){
  var app = this;
  $.ajax({
    url: app.url + app.formInput
  }).success( function(data){
    app.checkResponse(data);
  });
};

App.prototype.displayPoster = function(posterUrl){
  var image = "<img src=" + posterUrl + ">"
  this.$posterDiv.html(image);
};

App.prototype.getSearchInput = function() {
  this.formInput = this.$input.val()
}

App.prototype.showError = function(){
  console.log("in showError")
  this.$posterDiv.html("No poster available");
}


App.prototype.checkResponse = function(data){
  if(data["Poster"]){
    app.displayPoster(data["Poster"]);
  } else { app.showError() };
}

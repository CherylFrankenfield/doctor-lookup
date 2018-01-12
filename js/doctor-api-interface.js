import { User } from "./../js/doctor-api-scripts.js";
const apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('form#find-help').submit(function(event){
    event.preventDefault();
    const ailment = $('#medical-search').val();
    const doctor = $('#doctor-search').val();




    // $('#results').append(`<li>${article.author}</li></br>`);
  });
});

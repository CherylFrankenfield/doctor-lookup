import { Doctor } from "./../js/doctor-api-scripts.js";
const apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('form#find-help').submit(function(event){
    event.preventDefault();
    const first = $('#first-name').val("John");
    const last = $('#last-name').val("Butler");
    const ailment = $('#medical-search').val("depression");

    let doctorSearch = new Doctor(first,last,ailment);

    doctorSearch.doctorApi(function(response){
      if (response) {
        $('#results').append(`<li>${response}</li></br>`);
        $('#attribution').append(`<p>Powered by <a href="https://betterdoctor.com">BetterDoctor.</a></p>`);
      }
    }, function(){
      alert("We apologize for the inconvenience. Our servers are overloaded, please try again momentarily.")
    });

  });
});

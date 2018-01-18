import { doctorApi, Practice } from "./../js/doctor-api-scripts.js";
const apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('form#find-help').submit(function(event){
    event.preventDefault();
    const first = $('#first-name').val();
    const last = $('#last-name').val();
    const ailment = $('#medical-search').val();
    const doctor = doctorApi(first,last,ailment);
    // const practice = new Practice(first,last,ailment)

    doctor.then(function(allResults){
      for (let i = 0; i < allResults.length; i++) {
        $('#results-first').append(`<li>First Name: ${allResults[i][0]}</li></br>`);
        $('#results').append(`<li>Last Name: ${allResults[i][1]}</li></br>`);
        $('#results').append(`<li> Street Address: ${address}</li></br>`);      $('#results').append(`<li>Portland,OR, ${zip}</li></br>`);
        $('#results').append(`<li>${phone}</li></br>`);
        $('#attribution').append(`<p>Powered by <a href="https://betterdoctor.com">BetterDoctor.</a></p>`);
      }

    }, function(error){
      alert("You have received the following error: " + error)
    });

  });
});

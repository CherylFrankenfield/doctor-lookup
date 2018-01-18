import { doctorApi, Practice } from "./../js/doctor-api-scripts.js";
const apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('form#find-help').submit(function(event){
    event.preventDefault();
    const first = $('#first-name').val();
    const last = $('#last-name').val();
    const ailment = $('#medical-search').val();

    const doctor = doctorApi(first,last,ailment);
    const practice = new Practice(first,last,ailment)

    doctor.then(function(response){
      // const search = JSON.parse(response);
      $('#results').append(`<li>${first}</li></br>`);          $('#results').append(`<li>${last}</li></br>`);
      $('#results').append(`<li>${practice.address}</li></br>`);      $('#results').append(`<li>${practice.zip}</li></br>`);
      $('#results').append(`<li>${practice.phone}</li></br>`);        $('#results').append(`<li>${ailment}</li></br>`);
      $('#attribution').append(`<p>Powered by <a href="https://betterdoctor.com">BetterDoctor.</a></p>`);

    }, function(error){
      alert("You have received the following error: " + error)
    });

  });
});

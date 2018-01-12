import { doctorApi } from "./../js/doctor-api-scripts.js";
const apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('form#find-help').submit(function(event){
    event.preventDefault();
    const first = $('#first-name').val();
    const last = $('#last-name').val();
    const ailment = $('#medical-search').val();
    const doctor = doctorApi(first,last,ailment);

    doctor.then(function(response){
      const search = JSON.parse(response);
      console.log(search.data[0].profile[0]);
      if (response) {
        $('#results').append(`<li>${search.data.profile.first_name}</li></br>`);
        $('#attribution').append(`<p>Powered by <a href="https://betterdoctor.com">BetterDoctor.</a></p>`);
      }
    }, function(){
      alert("We apologize for the inconvenience. Our servers are overloaded, please try again momentarily.")
    });
  });
});
// response.abilities[0].ability.name

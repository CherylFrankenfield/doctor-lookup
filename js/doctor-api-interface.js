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
      console.log(search);
      // console.log(search.meta.ignored_query_parameters);
      console.log(search.data[0].profile.first_name[0]);
      console.log(search.data.profile.last_name[0]);
      if (search.meta.ignored_query_parameters) {
        $('#results').append(`<li>${search.meta.ignored_query_parameters}</li></br>`);
        $('#attribution').append(`<p>Powered by <a href="https://betterdoctor.com">BetterDoctor.</a></p>`);
      }
    }, function(){
      alert("We apologize for the inconvenience. Our servers are overloaded, please try again momentarily.")
    });
  });
});

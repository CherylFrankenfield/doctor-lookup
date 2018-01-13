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
      for (var i=0; i > search.length, i++) {
        document.getElementById("results").innerHTML = search.data.profile.first_name + ", " + search.data.profile.last_name;
      }
      // console.log(search);
      // console.log(search.data.profile[0]);
      // if (search.data.profile[0]) {
      //   $('#results').append(`<li>${search.data.profile[0]}</li></br>`);
      //   $('#attribution').append(`<p>Powered by <a href="https://betterdoctor.com">BetterDoctor.</a></p>`);
      // }
    }, function(){
      alert("We apologize for the inconvenience. Our servers are overloaded, please try again momentarily.")
    });
  });
});

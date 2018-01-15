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
      console.log(search.data[1].profile.first_name);
      console.log(search.data[1].profile.last_name);
      console.log(search.data[4].specialties[0]);
      console.log(search.data[6].practices[0].accepts_new_patients);
      console.log(search.data[6].practices[0].visit_address.street);
      console.log(search.data[6].practices[0].visit_address.zip);
      console.log(search.data[6].practices[2].phones[0].number);
      for (let i = 0; i < search.data[i].profile.last_name.length; i++) {
          if (search.data[i].profile.first_name) {
            $('#results').append(`<li>${search.data[i].profile.first_name}</li></br>`);
          } 
      }
      // console.log(search.data.profile.last_name[0]);
      // if (search.meta.ignored_query_parameters) {
      //   $('#results').append(`<li>${search.meta.ignored_query_parameters}</li></br>`);
      //   $('#attribution').append(`<p>Powered by <a href="https://betterdoctor.com">BetterDoctor.</a></p>`);
      // }
    }, function(){
      alert("We apologize for the inconvenience. Our servers are overloaded, please try again momentarily.")
    });
  });
});

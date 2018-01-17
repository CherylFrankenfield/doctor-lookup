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
      $('#attribution').append(`<p>Powered by <a href="https://betterdoctor.com">BetterDoctor.</a></p>`);
      // console.log(search);
      // console.log(search.data[1].profile.first_name);
      // console.log(search.data[1].profile.last_name);
      // console.log(search.data[6].specialties[0].uid);
      // console.log(search.data[6].specialties[0].description);
      // console.log(search.data[6].practices[0].accepts_new_patients);
      // console.log(search.data[6].practices[0].visit_address.street);
      // console.log(search.data[6].practices[0].visit_address.zip);
      // console.log(search.data[6].practices[2].phones[0].number);
      $('#results').append(`<li>${first}</li></br>`);          $('#results').append(`<li>${last}</li></br>`);
      $('#results').append(`<li>${practice.address}</li></br>`);          $('#results').append(`<li>${practice.zip}</li></br>`);
      $('#results').append(`<li>${practice.phone}</li></br>`);          $('#results').append(`<li>${ailment}</li></br>`);
      $('#results').append(`<li>"Accepting New Patients"</li></br>`);

    }, function(error){
      alert("You have received the following error: " + error)
    });

  });
});

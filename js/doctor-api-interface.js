import { doctorApi } from "./../js/doctor-api-scripts.js";
const apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('form#find-help').submit(function(event){
    event.preventDefault();
    const first = $('#first-name').val();
    const last = $('#last-name').val();
    const ailment = $('#medical-search').val();
    const phone = "";
    const address = "";
    const zip = "";
    const doctor = doctorApi(first,last,phone,address,zip,ailment);

    doctor.then(function(response){
      const search = JSON.parse(response);
      $('#attribution').append(`<p>Powered by <a href="https://betterdoctor.com">BetterDoctor.</a></p>`);
      console.log(search);
      // console.log(search.data[1].profile.first_name);
      // console.log(search.data[1].profile.last_name);
      // console.log(search.data[6].specialties[0].uid);
      // console.log(search.data[6].specialties[0].description);
      // console.log(search.data[6].practices[0].accepts_new_patients);
      // console.log(search.data[6].practices[0].visit_address.street);
      // console.log(search.data[6].practices[0].visit_address.zip);
      // console.log(search.data[6].practices[2].phones[0].number);
      for (let i = 0; i < search.data[i].profile.first_name.length; i++) {
        if (search.data[i].profile.first_name === first) {
          $('#results').append(`<li>${first}</li></br>`);
          }
      }
      for (let j = 0; j < search.data[j].profile.last_name.length; j++) {
        if (search.data[j].profile.last_name === last) {
          $('#results').append(`<li>${last}</li></br>`);
          }
      }
      for (let k = 0; k < search.data[k].practices[0].accepts_new_patients; k++) {
        if (search.data[k].practices[0].accepts_new_patients === true) {
          $('#results').append(`<li>"Accepting New Patients"</li></br>`);
        } else {
          $('#results').append(`<li>"Not Accepting New Patients"</li></br>`);
        }
      }
      for (let m = 0; m < search.data[m].specialties[0].description.length; m++) {
        if (search.data[m].specialties[0].description.includes(ailment)) {
          $('#results').append(`<li>${search.data[m].specialties[0].description}</li></br>`);
          }
      }
      // for (let n = 0; n < search.data[n].practices[2].phones[0].number.length; n++) {
      //   if (search.data[n].practices[2].phones[0].number) {
      //     $('#results').append(`<li>${search.data[n].practices[2].phones[0].number}</li></br>`);
      //     }
      // }

    }, function(){
      alert("We apologize for the inconvenience. Our servers are overloaded, please try again momentarily.")
    });

  });
});

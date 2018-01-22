import { doctorApi, Practice } from "./../js/doctor-api-scripts.js";
const apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('form#find-help').submit(function(event){
    event.preventDefault();
    const first = $('#first-name').val();
    const last = $('#last-name').val();
    const ailment = $('#medical-search').val();
    const doctor = doctorApi(first,last,ailment);
    // const practice = new Practice(first,last,ailment);

    doctor.then(function(allResults){
      console.log(allResults);
      // console.log(typeof allResults);
      for (let i = 0; i < allResults.length; i++) {
        // if (allResults[i][0] === first) {
        // $('#results').append(`<li>First Name: ${first}</li>`);
        // } else if (allResults[i][1] === 'last') {
        //   $('#results').append(`<li>Last Name: ${last}</li>`);
        $('#results').append(`<ul><li>Doctor: ${allResults[i]}</li></ul></br>`);
        // }
        // `<li>Last Name: ${allResults[i]}</li></br>`
        // `<li> Street Address: ${allResults[i]}</li></br>`
        // `<li>Portland,OR, ${allResults[i]}</li></br>`
        // `<li>${allResults[i]}</li></br>`);
      }
      $('#attribution').append(`<p>Powered by <a href="https://betterdoctor.com">BetterDoctor.</a></p>`);

    }, function(error){
      alert("You have received the following error: " + error)
    });

  });
});

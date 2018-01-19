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

    doctor.then(function(success){
      console.log(success);
      // console.log(typeof allResults);
      let myDOMelement = $('#results');

      for (let i = 0; i < allResults.length; i++) {
        myDOMelement.append(`<li>First Name: ${allResults[i]}</li></br>`
        `<li>Last Name: ${allResults[i]}</li></br>`
        `<li> Street Address: ${allResults[i]}</li></br>`
        `<li>Portland,OR, ${allResults[i]}</li></br>`
        `<li>${allResults[i]}</li></br>`);
      }
      $('#attribution').append(`<p>Powered by <a href="https://betterdoctor.com">BetterDoctor.</a></p>`);

    }, function(error){
      alert("You have received the following error: " + error)
    });

  });
});

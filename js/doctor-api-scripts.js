

export class Doctor {
  constructor(first,last,ailment) {
    this.first = first;
    this.last = last;
    this.ailment = ailment;
    // this.address = address;
    // this.phone = phone;
    // this.website = website;
  }
  doctorApi(success, error) {
    const apiKey = 'e44a69d0bf47478c768f57e63e159366';
    const url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + apiKey;
  $.get(url).then(function(data) {
    var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
    document.getElementById('content-placeholder').innerHTML = template(data);
    });
    if (data) {
      success(data);
    } else {
      error("we're sorry");
    }
  }
}




// doctorApi(success,error) {
//   const doctorUrl = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?first_name=${this.first}&last_name=${this.last}&query=${this.ailment}&location=45.523%2C-122.676%2C100&skip=0&limit=10&user_key=${this.apiKey}`).then(function(res) {
//     if (res) {
//       success(res);
//     } else {
//       error("We apologize for the inconvenience. Our servers are overloaded, please try again momentarily.");
//     }
//   });
// }
//



//Hardcoded portland

// https://api.betterdoctor.com/2016-03-01/doctors?first_name=John&last_name=Butler&query=headache&location=45.523%2C-122.676%2C100&skip=0&limit=10&user_key=e44a69d0bf47478c768f57e63e159366

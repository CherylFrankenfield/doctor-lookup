

export function doctorApi(first,last,ailment) {
  return new Promise(function(success, error) {
    const request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.523,-122.676,100&skip=2&limit=10&user_key=e44a69d0bf47478c768f57e63e159366&data.profile.first_name=${this.first}&data.profile.last_name=${this.last}`;

    request.onload = function() {
      if (this.status === 200) {
        success(request.response);
      } else {
        error(Error(request.statusText));
      }
    }
    request.open('GET', url, true);
    request.send();
  });
}

// export class Doctor {
//   constructor(first,last,ailment) {
//     this.first = first;
//     this.last = last;
//     this.ailment = ailment;
//     this.address = address;
//     this.phone = phone;
//     this.website = website;
//   }
//   doctorApi(success, error) {
//     const doctorUrl = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=45.523,-122.676,100&skip=2&limit=10&user_key=e44a69d0bf47478c768f57e63e159366&data.profile.first_name=${this.first}&data.profile.last_name=${this.last}`).then(function(res) {
//       if (res) {
//         success(res);
//       } else {
//         error("We apologize for the inconvenience. Our servers are overloaded, please try again momentarily.");
//       }
//     });
//   }
// }





//Hardcoded portland

// https://api.betterdoctor.com/2016-03-01/doctors?first_name=John&last_name=Butler&query=headache&location=45.523%2C-122.676%2C100&skip=0&limit=10&user_key=e44a69d0bf47478c768f57e63e159366

export class Practice {
  constructor(first,last,phone,address,zip,ailment) {
    this.first = first;
    this.last = last;
    this.phone = "";
    this.address = "";
    this.zip = "";
    this.ailment = ailment;
  }
}

export function doctorApi(first,last,address,zip,phone,ailment) {
  return new Promise(function(success, error) {
    const request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors/?location=45.523,-122.676,100&skip=2&limit=100&user_key=e44a69d0bf47478c768f57e63e159366&data.profile.first_name=${first}&data.profile.last_name=${last}&data.practices.phones.number=${phone}&data.practices.visit_address.street=${address}&data.practices.visit_address.zip=${zip}`;

    request.onload = function() {
      if (this.status === 200) {
        success(request.response);
        const search = JSON.parse(request.response);
        // console.log(request.response);
        const results = [];
        for (let i = 0; i < search.length; i++) {
          if (search.data[i].profile.first_name === first) {
            results.push(this.first);
            console.log(this.first);
          } if (search.data[i].profile.last_name === last) {
            results.push(last);
            console.log(last);
          } if (search.data[i].specialties[0].description.includes(ailment)) {
            results.push(ailment);
          } if (search.data[i].practices[0].visit_address.street === address) {
            results.push(address);
          } if (search.data[i].practices[0].visit_address.zip === zip) {
            results.push(zip);
          } if (search.data[i].practices[2].phones[0].number === phone) {
            results.push(phone);
          } if (search.data[i].practices[0].accepts_new_patients === true) {
            results.push("Accepting new patients");
          }
          return results;
          console.log(results);
        }

      } else {
        error(Error(request.statusText));
      }
    }
    request.open('GET', url, true);
    request.send();
  });
}



//Hardcoded portland
// https://api.betterdoctor.com/2016-03-01/doctors?first_name=John&last_name=Butler&query=headache&location=45.523%2C-122.676%2C100&skip=0&limit=10&user_key=e44a69d0bf47478c768f57e63e159366

//works: https://api.betterdoctor.com/2016-03-01/doctors?location=45.523,-122.676,100&skip=2&limit=10&user_key=e44a69d0bf47478c768f57e63e159366&data.profile.first_name=${first}&data.profile.last_name=${last}

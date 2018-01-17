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
    const url = `https://api.betterdoctor.com/2016-03-01/doctors/?location=45.523,-122.676,100&skip=2&limit=2&user_key=e44a69d0bf47478c768f57e63e159366&data.profile.first_name=${first}&data.profile.last_name=${last}&data.practices.phones.number=${phone}&data.practices.visit_address.street=${address}&data.practices.visit_address.zip=${zip}`;

    request.onload = function() {
      if (this.status === 200) {
        success(request.response);
        const search = JSON.parse(request.response);
        // console.log(request.response);
        // console.log(search.data[0].profile.first_name);
        const results = [];
        for (let i = 0; i < search.length; i++) {
          if (search.data[i].profile.first_name) {
            let first = search.data[i].profile.first_name;
            // search.data[i].profile.first_name === first;
            // results.push(first);
            console.log(first);
          } if (search.data[i].profile.last_name) {
            let last = search.data[i].profile.last_name;
            console.log(last);
          } if (search.data[i].specialties[0].description.includes(ailment)) {
            let ailment = search.data[i].specialties[0].description.includes(ailment);
            console.log(ailment);
            results.push(ailment);
          } if (search.data[i].practices[0].visit_address.street === address) {
            results.push(address);
          } if (search.data[i].practices[0].visit_address.zip === zip) {
            results.push(zip);
          } if (search.data[i].practices[0].phones[0].number === phone) {
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
//works: https://api.betterdoctor.com/2016-03-01/doctors?location=45.523,-122.676,100&skip=2&limit=10&user_key=e44a69d0bf47478c768f57e63e159366&data.profile.first_name=${first}&data.profile.last_name=${last}

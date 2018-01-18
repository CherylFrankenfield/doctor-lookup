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
    const url = `https://api.betterdoctor.com/2016-03-01/doctors/?location=45.523,-122.676,100&skip=2&limit=10&user_key=e44a69d0bf47478c768f57e63e159366&data.profile.first_name=${first}&data.profile.last_name=${last}&data.practices.phones.number=${phone}&data.practices.visit_address.street=${address}&data.practices.visit_address.zip=${zip}`;

    request.onload = function() {
      if (this.status === 200) {
        success(request.response);
        const search = JSON.parse(request.response);
        // console.log(request.response);
        // console.log(search.data[0].profile.first_name);
        for (let i = 0; i < search.data.length; i++) {
          const first = search.data[i].profile.first_name;
          const last = search.data[i].profile.last_name;
          const ailment = search.data[i].specialties[2].description.includes(ailment);
          const address = search.data[i].practices[0].visit_address.street;
          const zip = search.data[i].practices[0].visit_address.zip;
          const phone = search.data[i].practices[0].phones[0].number;
          const results = [first, last, address, zip, phone, ailment];
          // console.log(results);
        }
        return results;
        console.log(results);

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

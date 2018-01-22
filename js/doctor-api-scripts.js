// export class Practice {
//   constructor(first,last,phone,address,zip,ailment) {
//     this.first = first;
//     this.last = last;
//     this.phone = phone;
//     this.address = address;
//     this.zip = zip;
//     this.ailment = ailment;
//   }
// }

export function doctorApi(first,last,address,zip,phone) {
  return new Promise(function(success, error) {
    const request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors/?location=45.523,-122.676,100&skip=2&limit=10&user_key=e44a69d0bf47478c768f57e63e159366&data.profile.first_name=${first}&data.profile.last_name=${last}&data.practices.phones.number=${phone}&data.practices.visit_address.street=${address}&data.practices.visit_address.zip=${zip}`;

    request.onload = function() {
      if (this.status === 200) {
        const search = JSON.parse(request.response);
        // console.log(typeof request.response);
        const allResults = [];
        for (let i = 0; i < search.data.length; i++) {
          const firstName = search.data[i].profile.first_name;
          const lastName = search.data[i].profile.last_name;
          // const ailment = search.data[i].specialties[0].description;
          const address = search.data[i].practices[0].visit_address.street;
          const zip = search.data[i].practices[0].visit_address.zip;
          const phone = search.data[i].practices[0].phones[0].number;
          const results = [firstName, lastName, address, zip, phone];
          allResults.push(results);

          success(allResults);
          // console.log(allResults);
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

export class User {
  constructor(first,last,ailment,address,phone,website) {
    this.first = first;
    this.last = last;
    this.ailment = ailment;
    this.address = address;
    this.phone = phone;
    this.website = website;
  }

  doctorApi(success,error) {
    const doctorUrl = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?first_name=${this.first}&last_name=${this.last}&query=${this.ailment}&location=45.523%2C-122.676%2C100&skip=0&limit=10&user_key=${apiKey}`)

  }
}


//Hardcoded portland

// https://api.betterdoctor.com/2016-03-01/doctors?first_name=John&last_name=Butler&query=headache&location=45.523%2C-122.676%2C100&skip=0&limit=10&user_key=e44a69d0bf47478c768f57e63e159366

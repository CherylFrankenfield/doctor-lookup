import { doctorApi } from "./../js/doctor-api-scripts.js";

describe('doctorApi', function() {
  it('should display new instance of patient object and contain array of user inputted doctor first/last/ailment search', function() {
    const doctor = doctorApi(Henry,Smith,depression);
    expect(doctor).toEqual(Henry,Smith,depression);
  });

});

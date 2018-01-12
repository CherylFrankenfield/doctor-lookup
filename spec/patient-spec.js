import { Doctor } from "./../js/doctor-api-scripts.js";

describe('Doctor', function() {
  it('should display new instance of patient object and contain array of user inputted doctor first/last/ailment search', function() {
    let doctor = new Doctor(Henry,Smith,depression);
    expect(doctor.first).toEqual(Henry);
  });
  
});

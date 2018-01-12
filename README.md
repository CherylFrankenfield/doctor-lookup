# Doctor Lookup using BetterDoctor API

##### Using an open API to serve up targeted results for users  

#### By Cheryl Frankenfield, 1/12/18

## Description

_Create an app for patients to input ailment and search for a doctor in Portland, OR, who specializes in that condition. Search will return API call of results based on BetterDoctor's API including whether there are doctors available, name, address, phone number, website and whether the doctor is accepting new patients._

## Setup/Installation Requirements

* In terminal:
-------
* Git clone ________.
*
* Visit BetterDoctor.com to get free, unique API key. Creat

## Planning

1. Configuration/dependencies
  * This app uses Bootstrap and jQuery.
  * This app will use BetterDoctor's API and an APIkey is needed.

2. Specs
_The app will take a user's keyword for a medical issue and return the first name of doctor in Portland._
* _Input: Text input of ailment: "sore throat"._
* _Output: Returns a doctor's first name: "Jennifer"._

_The app will take a user's keyword for a medical issue and return the first name of multiple doctors in Portland._
* _Input: Text input of ailment: "sore throat"._
* _Output: Returns multiple doctors' first names: A list of doctors named Jennifer._

_The app will take a user's keyword for a medical issue and return the first and last name of doctor in Portland._
* _Input: Text input of ailment: "sore throat"._
* _Output: Returns a doctor's first and last name: "Jennifer Smith"._

_The app will take a user's keyword for a medical issue and return the first and last name of multiple doctors in Portland._
* _Input: Text input of ailment: "sore throat"._
* _Output: Returns mutliple doctors' first and last names: "Jennifer Smith, John Montgomery, Dr. Who"._

_The app will take a user's keyword for a medical issue and return the first and last name of doctor and office address in Portland._
* _Input: Text input of ailment: "sore throat"._
* _Output: Returns "Jennifer Smith, 1232 SW Washington St., Portland, OR, 21705"._

_The app will take a user's keyword for a medical issue and return the first and last name of doctors and office addresses in Portland._
* _Input: Text input of ailment: "sore throat"._
* _Output: Returns "Jennifer Smith, 1232 SW Washington St., Portland, OR, 21705, John Montgomery, 1232 SW Washington St., Portland, OR, 21705, Dr. Who, 1232 SW Washington St., Portland, OR, 21705"._

_The app will take a user's keyword for a medical issue and return the first and last name of doctor, office address in Portland, and phone number._
* _Input: Text input of ailment: "sore throat"._
* _Output: Returns "Jennifer Smith, 1232 SW Washington St., Portland, OR, 21705, 203-987-5555._

_The app will take a user's keyword for a medical issue and return the first and last name of doctors, office addresses in Portland, and phone numbers._
* _Input: Text input of ailment: "sore throat"._
* _Output: Returns "Jennifer Smith, 1232 SW Washington St., Portland, OR, 21705, 203-987-5555, John Montgomery, 1232 SW Washington St., Portland, OR, 21705, 203-987-5555, Dr. Who, 1232 SW Washington St., Portland, OR, 21705, 203-987-5555._

_In the case that there are no doctors who specialize in that condition, the app will return an unique message. If future app includes wider geolocation search, message can be changed to include more chances of national results._
* _Input: Text input of ailment: "sore throat"._
* _Output: Returns: "Sorry, at this time there are no doctors who specialize in this condition. Please check back at a later date or visit these resources here."_

_The app will allow a user to enter a name to receive a list of doctors in the Portland area that fit the search query._
* _Input: Text input of doctor name: "Jennifer"._
* _Output: Text output of all doctors named Jennifer: Jennifer Smith, Jennifer Carter, Jennifer Donaldson_

_The app will return an error if connection to API is interrupted for user, the application should return a notification that states what the error is_.
* _Input: User enters keywords in form fields: Jennifer Smith, sore throat._
* _Output: Connection is interrupted and app returns: "We apologize for the inconvenience. Our servers are overloaded, please try again momentarily."_

3. Integration
  * Display user input fields (for ailment search) a submit button, and section on the page to display search results.
  * Integrate feature that will allow user to search for doctors in additional locations other than Portland.
  * Future user stories may include first calling an API to display list of conditions in a dropdown field for user to select from. Then a call to pull the doctors who match.
  * Future user story may allow user to review any ratings information on doctor.

4. UX/UI
    * Include and modify Bootstrap/Sass etc.
    * Develop custom style, doctor info display in a easy-to-read format and/or print button / create PDF for user to easily print hard copy if needed.

## Known Bugs

_text._

## Support and contact details

_If you have any issues, questions, ideas or concerns, please contact us._

## Technologies Used

* HTML
* CSS
* SASS
* Javascript
* jQuery
* Gulp
* Node.js
* Jasmine
* Karma
* BetterDoctor API

### License

*This is open source so feel free to grab and use.*

Copyright (c) 2018 **_Cheryl Frankenfield_**

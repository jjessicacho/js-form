/*
grab some HTML elements
*/ 
const errorMessages       = document.getElementById("error-messages");
const form                = document.querySelector("form")

errorMessages.style.display = "none";
/*
add submit event listener to the form,
including the function for handling the validation

for an example of the basic form processing logic, see
    session06/code/scripts/form-validation-after.js

for an example of how to use a regular expression on the student number, see
    session06/code/scripts/regular-expressions.js
*/

// add a submit event to the form
// run the validationForm function when submit occurs
form.addEventListener("submit", validateForm);

// decide if we should permit the form data to be sent to the server or not
function validateForm( event ){

    // 1. use a boolean flag to track if we encounter any errors
    let formDataErrorsDetected = false;

    // get the form fields
    const firstName     = document.getElementById("firstname");
    const lastName      = document.getElementById("lastname");
    const studentNumber = document.getElementById("studentnumber");
    const courses       = document.getElementById("courses");

    // start with an empty display
    errorMessages.innerText = "";

    // 2. perform data validation
    // if errors are found, change the flag 
    // FIRST NAME
    if(firstName.value.trim().length === 0){
        // if firstname was left empty
        errorMessages.style.display = "block";
        errorMessages.innerHTML += `<p>Please provide a first name</p>`;

        // highlight the area that needs user attention
        firstName.style.border = "solid 2px red";

        // a validation error has occur by changing the 'flag' value
        formDataErrorsDetected = true;
    }else{
        // border style is back to normal 
        firstName.style.border = "solid 1px black";
    }

    // LAST NAME
    if(lastName.value.trim().length === 0){
        // if lastname was left empty
        errorMessages.display = "block";
        errorMessages.innerHTML += `<p>Please provide a last name</p>`;

        // highlight the area that needs user attention
        lastName.style.border = "solid 2px red";

        // a validation error has occur by changing the 'flag' value
        formDataErrorsDetected = true;
    }else{
        // border style is back to normal 
        lastName.style.border = "solid 1px black";
    }

    // STUDENT NUMBER
    if(studentNumber.value.trim().length === 0){
        // if student number was left empty
        errorMessages.display = "block";
        errorMessages.innerHTML += `<p>Please provide a student number</p>`;

        // highlight the area that needs user attention
        studentNumber.style.border = "solid 2px red";

        // a validation error has occur by changing the 'flag' value
        formDataErrorsDetected = true;
    }else{
        // border style is back to normal 
        studentNumber.style.border = "solid 1px black";
    }

    // REGULAR EXPRESSION
    function testStudentNumber( regex, stringToTest ){
        let regexObject = RegExp( regex );

        if ( !regexObject.test( stringToTest )){
            errorMessages.display = "block";
        
            // if student number is not correct
            errorMessages.innerHTML += `<p>Please provide a valid student number (A00nnnnnn)</p>`;
        
            // highlight the area that needs user attention
            studentNumber.style.border = "solid 2px red";
        
            // a validation error has occur by changing the 'flag' value
            formDataErrorsDetected = true;
    
        }else{
            // border style is back to normal 
            studentNumber.style.border = "solid 1px black";
        }    

    }

    const studentNumberRegEx = /^a00[0-9]{6}$/i;
    testStudentNumber(studentNumberRegEx, studentNumber.value);

   
    // COURSES
    if(courses.value === "Choose your course:"){
        // if course was left empty
        errorMessages.display = "block";
        errorMessages.innerHTML += `<p>Please choose a course</p>`;
        // highlight the area that needs user attention
        courses.style.border = "solid 2px red";
        // a validation error has occur by changing the 'flag' value
        formDataErrorsDetected = true;
    }else{
        // border style is back to normal 
        courses.style.border = "solid 1px black";
    }
    
    // 3. after validation procedures are complete,
    // decide if data can be sent to the server.
    // if we have discovered any errors,
    // then prevent this for data from being sent to server..
    if( formDataErrorsDetected === true){
        event.preventDefault();
    }
}




//Global variables 
var selectedSmokeOption = "Yes";
var selectedAgeOption = 40; //default age
var selectedGenderOption = "Male"; //Default gender 
var selectedBloodPressureOption = "";
var selectedCholesterolOption = "";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This block of code is for the welcome page and the start button and age, gender
function startQuestionnaire() {
  //alert('this was called');
  //gets the id and hides the content in that div
  var welcomePage = document.getElementById('welcomePage');
  welcomePage.classList.add('hidden');
  welcomePage.classList.remove('visible');
  var ageGenderSection = document.getElementById('ageGenderSection');
  ageGenderSection.classList.remove('hidden');
  ageGenderSection.classList.add('visible');   
}

 //This block get the age value from the slider bar and saves it displaying it in an alert for testing 
  document.getElementById('age').addEventListener('input', function() {
  selectedAgeOption = document.getElementById('age').value;
  document.getElementById('ageValue').textContent = selectedAgeOption;
  console.log(selectedAgeOption);

  });

 //This block get the gender value and saves it displaying it in an alert for testing 
  document.getElementById('gender').addEventListener('input', function() {
   selectedGenderOption = document.getElementById('gender').value;
   console.log(selectedGenderOption);
    // Display a pop-up notification
    //alert(`You have chosen ${selectedGenderOption} gender.`);
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function SmokeQusestion(){
    var ageGenderSection = document.getElementById('ageGenderSection');
    ageGenderSection.classList.add('hidden');
    ageGenderSection.classList.remove('visible');
    var smokeSection = document.getElementById('smokeSection');
    smokeSection.classList.remove('hidden');
    smokeSection.classList.add('visible');
  }
  //This block get the smoke value from the drop down and saves it displaying it in an alert for testing 
  document.getElementById('smoke').addEventListener('input', function() {
     selectedSmokeOption = document.getElementById('smoke').value;
     console.log(selectedSmokeOption);
  });
  
 
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function bloodPressureQuestion(){
    //This makes the smoke section hidden to the users
    var smokeSection = document.getElementById('smokeSection');
    smokeSection.classList.add('hidden');
    smokeSection.classList.remove('visible');
    var bloodPressureSection = document.getElementById('bloodPressureSection');
    bloodPressureSection.classList.remove('hidden');
    bloodPressureSection.classList.add('visible');
  }
  
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function cholesterolQuestion(){
    //This makes the bloodPressure section hidden to the users
    var bloodPressureSection = document.getElementById('bloodPressureSection');
    bloodPressureSection.classList.add('hidden');
    bloodPressureSection.classList.remove('visible');
    var cholesterolSection = document.getElementById('cholesterolSection');
    cholesterolSection.classList.remove('hidden');
    cholesterolSection.classList.add('visible');
    
  }
  function reset() {
    selectedSmokeOption = "Yes";
    selectedAgeOption = 40;
    selectedGenderOption = "Male";
    selectedBloodPressureOption = "";
    selectedCholesterolOption = "";

    startQuestionnaire();
    console.log("called the reset");

  }
    function submitForm() {
    //selectedAgeOption = document.getElementById('ageSlider').value;
    selectedBloodPressureOption = document.getElementById('bloodPressureInput').value;
    selectedCholesterolOption = document.getElementById('cholesterolInput').value;
    console.log(selectedAgeOption);
    console.log(selectedGenderOption);
    console.log(selectedSmokeOption);
    console.log(selectedBloodPressureOption);
    console.log(selectedCholesterolOption);
    // alert(`You have chosen:\nAge: ${selectedAgeOption}`);
    // alert(`You have chosen:\nGender: ${selectedGenderOption}`);
    // alert(`You have chosen:\smoke: ${selectedSmokeOption}`);
    // alert(`You have chosen:\Bp:${selectedBloodPressureOption} `);
    // alert(`You have chosen:\selectedcholesterol: ${selectedCholesterolOption}`);
  }

  
// function startQuestionnaire() {
//   //gets the id and hides the content in that div
//     var welcomePage = document.getElementById('welcomePage');
//      welcomePage.classList.add('hidden');
//      var tool = document.getElementById('ageGenderSection');
//       tool.classList.add('visible');
//   }

//   //to get the amount from the slider bar and display it to the users HDLValue
//   function SmokeQusestion() {
//     const welcomePage = document.getElementById('smokeSection');
//     const HDLQ = document.getElementById('smokeSection');
    
//     welcomePage.classList.add('hidden');
//     HDLQ.classList.remove('hidden');
//   }

//   //to get the amount from the slider bar and display it to the users HDLValue
//   function HDLQusestion() {
//     const welcomePage = document.getElementById('HDLSection');
//     const HDLQ = document.getElementById('HDLSection');
    
//     welcomePage.classList.add('hidden');
//     HDLQ.classList.remove('hidden');
//   }
  
//   function cholesterolQuestion() {
//     const HDLSection = document.getElementById('HDLSection');
//     const cholesterolSection = document.getElementById('cholesterolSection');
    
//     HDLSection.classList.add('hidden');
//     cholesterolSection.classList.remove('hidden');
//   }
//   function goBack(sectionId) {
//     const currentSection = document.getElementById(sectionId);
//     currentSection.classList.add('hidden');
//     ageGenderSection.classList.remove('hidden');
//   }
//   document.getElementById('HDL').addEventListener('input', function () {
//     const selectedHDL = document.getElementById('HDL').value;
//     document.getElementById('HDLValue').textContent = selectedHDL;
//   });

//   //to get the amount from the slider bar and display it to the users age
//   document.getElementById('age').addEventListener('input', function () {
//     const selectedAge = document.getElementById('age').value;
//     document.getElementById('ageValue').textContent = selectedAge;
//     // Display a pop-up notification
//     alert(`You have chosen ${selectedGender} gender.`);
//   });

//   //to get the amount from the slider bar and display it to the users age
//   document.getElementById('gender').addEventListener('input', function () {
//     const selectedAge = document.getElementById('gender').value;
//     document.getElementById('ageValue').textContent = selectedGender;
//     // Display a pop-up notification
//     alert(`You have chosen ${selectedGender} gender.`);
//   });

// //   //to get the amount from the and display it to the users age
// //   document.getElementById('HDL').addEventListener('input', function () {
// //     const selectedHDL = document.getElementById('HDL').value;
// //     document.getElementById('HDLValue').textContent = selectedHDL;
// //   });
  
//   document.getElementById('cholesterol').addEventListener('input', function () {
//     const selectedCholesterol = document.getElementById('cholesterol').value;
//     document.getElementById('cholesterolValue').textContent = selectedCholesterol;
//   });

//   function nextPage() {
//     // Get the selected gender value
//     const selectedGender = document.getElementById('gender').value;
  
    
//   }
//   function submitForm() {
//     const selectedGender = document.getElementById('gender').value;
//     const selectedAge = document.getElementById('age').value;
//     const selectedHDL = document.getElementById('HDL').value;
//     const selectedCholesterol = document.getElementById('cholesterol').value;
//     const selectedSmoke = document.getElementById('smoke').value;
  
//     alert(`You have chosen:\nGender: ${selectedSmoke}\nSmoke:${selectedAge}\nAge: ${selectedGender}\nHDL: ${selectedHDL}\nCholesterol: ${selectedCholesterol}`);
// }
// // the page is a mess need to clean up need to look at lecture slides and see how thay want it this is from GPT 
  
  
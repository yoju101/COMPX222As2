////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This block of code is for the welcome page and the start button and age, gender
function startQuestionnaire() {
  alert('this was called');
  //gets the id and hides the content in that div
    var welcomePage = document.getElementById('welcomePage');
     welcomePage.classList.add('hidden');

     var ageGenderSection = document.getElementById('ageGenderSection');
      ageGenderSection.classList.add('visible');

      
}
 //This block get the age value from the slider bar and saves it displaying it in an alert for testing 
  document.getElementById('age').addEventListener('input', function() {
    var selectedAgeOption = document.getElementById('age').value;
    document.getElementById('ageValue').textContent = selectedAgeOption;
    //Display a pop-up notification
    alert(`You have chosen ${selectedAgeOption} age.`);
  });

 //This block get the gender value and saves it displaying it in an alert for testing 
  document.getElementById('gender').addEventListener('input', function() {
    var selectedGender = document.getElementById('gender').value;
    var selectedGenderOption = selectedGender;
    // Display a pop-up notification
    alert(`You have chosen ${selectedGenderOption} gender.`);
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function SmokeQusestion(){
    var ageGenderSection = document.getElementById('ageGenderSection');
    ageGenderSection.classList.add('hidden');

    var smokeSection = document.getElementById('smokeSection');
    smokeSection.classList.add('visible');

  //This block get the smoke value from the drop down and saves it displaying it in an alert for testing 
  document.getElementById('smoke').addEventListener('input', function() {
    var selectedSmoke = document.getElementById('smoke').value;
    var selectedSmokeOption = selectedSmoke;
    //alert(`You have chosen: ${selectedSmokeOption} for smoking.`);
  });
  }
 
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function bloodPressureQuestion(){
    //This makes the smoke section hidden to the users
    var smokeSection = document.getElementById('smokeSection');
    smokeSection.classList.add('hidden');

    var bloodPressureSection = document.getElementById('bloodPressureSection');
    bloodPressureSection.classList.add('visible');
  }
   //This block get the bloodPressure value and saves it displaying it in an alert for testing 
   document.getElementById('BloodPressure').addEventListener('input', function() {
    var selectedBloodPressureOption = document.getElementById('BloodPressure').value;
    document.getElementById('BloodPressureValue').textContent = selectedBloodPressureOption;
    //Display a pop-up notification
    alert(`You have chosen ${selectedBloodPressureOption} BloodPressure.`);

    // alert(`You have chosen  ${selectedSmokeOption} for smoking.`);
    // alert(`You have chosen ${selectedAge} age.`);

  });
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function cholesterolQuestion(){
    //This makes the bloodPressure section hidden to the users
    var bloodPressureSection = document.getElementById('bloodPressureSection');
    bloodPressureSection.classList.add('hidden');

    var cholesterolSection = document.getElementById('cholesterolSection');
    cholesterolSection.classList.add('visible');

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
  
  
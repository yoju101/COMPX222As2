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
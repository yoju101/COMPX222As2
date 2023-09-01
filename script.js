//Global variables 
var selectedSmokeOption = "Yes";
var selectedAgeOption = 40; //default age
var selectedGenderOption = "Male"; //Default gender 
var selectedBloodPressureOption = "";
var selectedCholesterolOption = "";
var selectedHDL = "";
var genderPicked = "";
var points = 0;
var treatedStatus = "Yes";
var result = "";

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
  console.log(selectedAgeOption , 'age');

  });

 //This block get the gender value and saves it displaying it in an alert for testing 
  document.getElementById('gender').addEventListener('input', function() {
   selectedGenderOption = document.getElementById('gender').value;
   console.log(selectedGenderOption , 'gender');
    // Display a pop-up notification
    //alert(`You have chosen ${selectedGenderOption} gender.`);
  });
  
  function SmokeQusestion(){
    var ageGenderSection = document.getElementById('ageGenderSection');
    ageGenderSection.classList.add('hidden');
    ageGenderSection.classList.remove('visible');
    var smokeSection = document.getElementById('smokeSection');
    smokeSection.classList.remove('hidden');
    smokeSection.classList.add('visible');
  }
  //This function hides the smoke section and shows the age and gender
  function backS(){
    var smokeSection = document.getElementById('smokeSection');
    smokeSection.classList.add('hidden');
    smokeSection.classList.remove('visible');
    var ageGenderSection = document.getElementById('ageGenderSection');
    ageGenderSection.classList.remove('hidden');
    ageGenderSection.classList.add('visible');
  }
  //This block get the smoke value from the drop down and saves it displaying it in an alert for testing 
  document.getElementById('smoke').addEventListener('input', function() {
     selectedSmokeOption = document.getElementById('smoke').value;
     console.log(selectedSmokeOption , 'somke ');
  });
  
  function bloodPressureQuestion(){
    //This makes the smoke section hidden to the users
    var smokeSection = document.getElementById('smokeSection');
    smokeSection.classList.add('hidden');
    smokeSection.classList.remove('visible');
    var bloodPressureSection = document.getElementById('bloodPressureSection');
    bloodPressureSection.classList.remove('hidden');
    bloodPressureSection.classList.add('visible');
  }
  //Gets the value and saves it in the variable 
  document.getElementById('Treated').addEventListener('input', function() {
    treatedStatus = document.getElementById('Treated').value;
    //selectedBloodPressureOption = document.getElementById('bloodPressureInput').value;
    console.log(selectedBloodPressureOption , 'bp');
    console.log(treatedStatus , 'bp treated or not');
 });
 //This function hides the blood pressure and shows the smoke section
  function backbp(){
    //bp goes to smaoke
    var bloodPressureSection = document.getElementById('bloodPressureSection');
    bloodPressureSection.classList.add('hidden');
    bloodPressureSection.classList.remove('visible');
    var smokeSection = document.getElementById('smokeSection');
    smokeSection.classList.remove('hidden');
    smokeSection.classList.add('visible');
  }

 function HDLQuestion(){
  //This makes the cholesterol section hidden to the users
  var bloodPressureSection = document.getElementById('bloodPressureSection');
  bloodPressureSection.classList.add('hidden');
  bloodPressureSection.classList.remove('visible');
  var HDLSection = document.getElementById('HDLSection');
  HDLSection.classList.remove('hidden');
  HDLSection.classList.add('visible');
}
//Gets the value and saves it in the variable HDL
// document.getElementById('cholesterolSection').addEventListener('input', function() {
//   selectedHDL = document.getElementById('HDLInput').value;
//   console.log(selectedHDL , 'Hdl');
// });
//CHOLESTEROL
// document.getElementById('cholesterolSection').addEventListener('input', function() {
//   selectedCholesterolOption = document.getElementById('cholesterolInput').value;
//   console.log(selectedCholesterolOption , 'chol');
// });
function backhdl(){
  var HDLSection = document.getElementById('HDLSection');
  HDLSection.classList.add('hidden');
  HDLSection.classList.remove('visible');
  var bloodPressureSection = document.getElementById('bloodPressureSection');
  bloodPressureSection.classList.remove('hidden');
  bloodPressureSection.classList.add('visible');

}
  function cholesterolQuestion(){
    var bloodPressureSection = document.getElementById('bloodPressureSection');
    bloodPressureSection.classList.add('hidden');
    bloodPressureSection.classList.remove('visible');
    var cholesterolSection = document.getElementById('cholesterolSection');
    cholesterolSection.classList.remove('hidden');
    cholesterolSection.classList.add('visible');    
  }
  function backC(){
    //chlo goes to hdl
    var cholesterolSection = document.getElementById('cholesterolSection');
    cholesterolSection.classList.add('hidden');
    cholesterolSection.classList.remove('visible');
    var bloodPressureSection = document.getElementById('bloodPressureSection');
    bloodPressureSection.classList.remove('hidden');
    bloodPressureSection.classList.add('visible');

  }
  function resetPage(){
  // Hide all the sections
  var smokeSection = document.getElementById('smokeSection');
  smokeSection.classList.add('hidden');
  smokeSection.classList.remove('visible');
  var bloodPressureSection = document.getElementById('bloodPressureSection');
  bloodPressureSection.classList.add('hidden');
  bloodPressureSection.classList.remove('visible');
  var cholesterolSection = document.getElementById('cholesterolSection');
  cholesterolSection.classList.add('hidden');
  cholesterolSection.classList.remove('visible');
  var results = document.getElementById('resultsSection');
  results.classList.add('hidden');
  results.classList.remove('visible');

  // Show the age and gender section
  var ageGenderSection = document.getElementById('ageGenderSection');
  ageGenderSection.classList.remove('hidden');
  ageGenderSection.classList.add('visible');
  console.log("called the reset");
  points = 0;
  }
  function submitForm() {
    //selectedAgeOption = document.getElementById('ageSlider').value;
    selectedBloodPressureOption = document.getElementById('bloodPressureInput').value;
    selectedCholesterolOption = document.getElementById('cholesterolInput').value;
    selectedHDL = document.getElementById('HDLInput').value;
    
    // Check the validity of the input values
    //while(true){
      var valid = true;
      if (bloodPressureInput.checkValidity() && cholesterolInput.checkValidity()) {
        // Values are valid, proceed with calculations
        selectedBloodPressureOption = parseInt(bloodPressureInput.value);
        selectedCholesterolOption = parseInt(cholesterolInput.value);
        valid = false;
        //break;
      }
        else {
          alert('Please enter a value that is in the range.');
          }
      //}
      //a 76 - 16
      //g f 
      //s y - 1
      //bp 120 yes - 3
      //hdl 30 - 2
      //c 280 - 2
      //24 27%

    calculations();
    console.log(selectedAgeOption , 'age');
    console.log(selectedGenderOption , 'gender');
    console.log(selectedSmokeOption , 'smoke');
    console.log(selectedBloodPressureOption , 'bp');
    console.log(treatedStatus , 'treated or not');
    console.log(selectedHDL , 'hdl');
    console.log(selectedCholesterolOption , 'chol');
    displayResults();
    console.log(points , 'total points');
  }
  function checkGender(){
    if(selectedGenderOption == "Male"){
      genderPicked = "Male"
    }
    else{genderPicked = "Female";}
    alert(genderPicked);
  }
  function checkAgeF() {
    if (selectedAgeOption >= 20 && selectedAgeOption <= 34) {
      points -= 7;
    } else if (selectedAgeOption >= 35 && selectedAgeOption <= 39) {
      points -= 3;
    } else if (selectedAgeOption >= 40 && selectedAgeOption <= 44) {
      points += 0;
    } else if (selectedAgeOption >= 45 && selectedAgeOption <= 49) {
      points += 3;
    } else if (selectedAgeOption >= 50 && selectedAgeOption <= 54) {
      points += 6;
    } else if (selectedAgeOption >= 55 && selectedAgeOption <= 59) {
      points += 8;
    } else if (selectedAgeOption >= 60 && selectedAgeOption <= 64) {
      points += 10;
    } else if (selectedAgeOption >= 65 && selectedAgeOption <= 69) {
      points += 12;
    } else if (selectedAgeOption >= 70 && selectedAgeOption <= 74) {
      points += 14;
    } else if (selectedAgeOption >= 75) {
      points += 16;
    }
  }
  function checkAgeM() {
    if (selectedAgeOption >= 20 && selectedAgeOption <= 34) {
      points -= 9;
    } else if (selectedAgeOption >= 35 && selectedAgeOption <= 39) {
      points -= 4;
    } else if (selectedAgeOption >= 40 && selectedAgeOption <= 44) {
      points += 0;
    } else if (selectedAgeOption >= 45 && selectedAgeOption <= 49) {
      points += 3;
    } else if (selectedAgeOption >= 50 && selectedAgeOption <= 54) {
      points += 6;
    } else if (selectedAgeOption >= 55 && selectedAgeOption <= 59) {
      points += 8;
    } else if (selectedAgeOption >= 60 && selectedAgeOption <= 64) {
      points += 10;
    } else if (selectedAgeOption >= 65 && selectedAgeOption <= 69) {
      points += 11;
    } else if (selectedAgeOption >= 70 && selectedAgeOption <= 74) {
      points += 12;
    } else if (selectedAgeOption >= 75 && selectedAgeOption <= 79) {
      points += 13;
    }
  }
  function checkCholesterolF() {
    if (selectedAgeOption >= 20 && selectedAgeOption <= 39) {
      if (selectedCholesterolOption < 160) {
        points += 0;
      } else if (selectedCholesterolOption >= 160 && selectedCholesterolOption <= 199) {
        points += 4;
      } else if (selectedCholesterolOption >= 200 && selectedCholesterolOption <= 239) {
        points += 8;
      } else if(selectedCholesterolOption >= 240 && selectedCholesterolOption <= 279) {
        points += 11;
      } else if(selectedCholesterolOption >= 280) {
        points += 13;
      }
    } else if (selectedAgeOption >= 40 && selectedAgeOption <= 49) {
      if (selectedCholesterolOption < 160) {
        points += 0;
      } else if (selectedCholesterolOption >= 160 && selectedCholesterolOption <= 199) {
        points += 3;
      } else if (selectedCholesterolOption >= 200 && selectedCholesterolOption <= 239) {
        points += 6;
      } else if (selectedCholesterolOption >= 240 && selectedCholesterolOption <= 279) {
        points += 8;
      } else if (selectedCholesterolOption >= 280) {
        points += 10;
      }
    } else if (selectedAgeOption >= 50 && selectedAgeOption <= 59) {
      if (selectedCholesterolOption < 160) {
        points += 0;
      } else if (selectedCholesterolOption >= 160 && selectedCholesterolOption <= 199) {
        points += 2;
      } else if (selectedCholesterolOption >= 200 && selectedCholesterolOption <= 239) {
        points += 4;
      } else if (selectedCholesterolOption >= 240 && selectedCholesterolOption <= 279) {
        points += 5;
      } else if (selectedCholesterolOption >= 280) {
        points += 7;
      }
    } else if (selectedAgeOption >= 60 && selectedAgeOption <= 69) {
      if (selectedCholesterolOption < 160) {
        points += 0;
      } else if (selectedCholesterolOption >= 160 && selectedCholesterolOption <= 199) {
        points += 1;
      } else if (selectedCholesterolOption >= 200 && selectedCholesterolOption <= 239) {
        points += 2;
      } else if (selectedCholesterolOption >= 240 && selectedCholesterolOption <= 279) {
        points += 3;
      } else if (selectedCholesterolOption >= 280) {
        points += 4;
      }
    } else if (selectedAgeOption >= 70 && selectedAgeOption <= 79) {
      if (selectedCholesterolOption < 160) {
        points += 0;
      } else if (selectedCholesterolOption >= 160 && selectedCholesterolOption <= 199) {
        points += 1;
      } else if (selectedCholesterolOption >= 200 && selectedCholesterolOption <= 239) {
        points += 1;
      } else if (selectedCholesterolOption >= 240 && selectedCholesterolOption <= 279) {
        points += 2;
      } else if (selectedCholesterolOption >= 280) {
        points += 2;
      }
    }
  }
  function checkCholesterolM() {
    if (selectedAgeOption >= 20 && selectedAgeOption <= 39) {
      if (selectedCholesterolOption < 160) {
        points += 0;
      } else if (selectedCholesterolOption >= 160 && selectedCholesterolOption <= 199) {
        points += 4;
      } else if (selectedCholesterolOption >= 200 && selectedCholesterolOption <= 239) {
        points += 7;
      } else if (selectedCholesterolOption >= 240 && selectedCholesterolOption <= 279) {
        points += 9;
      } else if (selectedCholesterolOption >= 280) {
        points += 11;
      }
    } else if (selectedAgeOption >= 40 && selectedAgeOption <= 49) {
      if (selectedCholesterolOption < 160) {
        points += 0;
      } else if (selectedCholesterolOption >= 160 && selectedCholesterolOption <= 199) {
        points += 3;
      } else if (selectedCholesterolOption >= 200 && selectedCholesterolOption <= 239) {
        points += 5;
      } else if (selectedCholesterolOption >= 240 && selectedCholesterolOption <= 279) {
        points += 6;
      } else if (selectedCholesterolOption >= 280) {
        points += 8;
      }
    } else if (selectedAgeOption >= 50 && selectedAgeOption <= 59) {
      if (selectedCholesterolOption < 160) {
        points += 0;
      } else if (selectedCholesterolOption >= 160 && selectedCholesterolOption <= 199) {
        points += 2;
      } else if (selectedCholesterolOption >= 200 && selectedCholesterolOption <= 239) {
        points += 3;
      } else if (selectedCholesterolOption >= 240 && selectedCholesterolOption <= 279) {
        points += 4;
      } else if (selectedCholesterolOption >= 280) {
        points += 5;
      }
    } else if (selectedAgeOption >= 60 && selectedAgeOption <= 69) {
      if (selectedCholesterolOption < 160) {
        points += 0;
      } else if (selectedCholesterolOption >= 160 && selectedCholesterolOption <= 199) {
        points += 1;
      } else if (selectedCholesterolOption >= 200 && selectedCholesterolOption <= 239) {
        points += 1;
      } else if (selectedCholesterolOption >= 240 && selectedCholesterolOption <= 279) {
        points += 2;
      } else if (selectedCholesterolOption >= 280) {
        points += 3;
      }
    } else if (selectedAgeOption >= 70 && selectedAgeOption <= 79) {
      if (selectedCholesterolOption < 160) {
        points += 0;
      } else if (selectedCholesterolOption >= 160 && selectedCholesterolOption <= 199) {
        points += 0;
      } else if (selectedCholesterolOption >= 200 && selectedCholesterolOption <= 239) {
        points += 0;
      } else if (selectedCholesterolOption >= 240 && selectedCholesterolOption <= 279) {
        points += 1;
      } else if (selectedCholesterolOption >= 280) {
        points += 1;
      }
    }
  }
  function checkSmokingF() {
    if (selectedSmokeOption == "Yes") {
      if (selectedAgeOption >= 20 && selectedAgeOption <= 39) {
        points += 9;
      } else if (selectedAgeOption >= 40 && selectedAgeOption <= 49) {
        points += 7;
      } else if (selectedAgeOption >= 50 && selectedAgeOption <= 59) {
        points += 4;
      } else if (selectedAgeOption >= 60 && selectedAgeOption <= 69) {
        points += 2;
      } else if (selectedAgeOption >= 70 && selectedAgeOption <= 79) {
        points += 1;
      }
    } else {
      points += 0;
    }
  }
  function checkSmokingM() {
    if (selectedSmokeOption == "Yes") {
      if (selectedAgeOption >= 20 && selectedAgeOption <= 39) {
        points += 8;
      } else if (selectedAgeOption >= 40 && selectedAgeOption <= 49) {
        points += 5;
      } else if (selectedAgeOption >= 50 && selectedAgeOption <= 59) {
        points += 3;
      } else if (selectedAgeOption >= 60 && selectedAgeOption <= 69) {
        points += 1;
      } else if (selectedAgeOption >= 70 && selectedAgeOption <= 79) {
        points += 1;
      }
    } else {
      points += 0;
    }
  }
  function checkBloodPressureF(){
    if(treatedStatus == "Yes"){
      if(selectedBloodPressureOption < 120){
        points += 0;
      }
      else if(selectedBloodPressureOption >= 120 && selectedBloodPressureOption <= 129){
        points += 3;
      }
      else if(selectedBloodPressureOption >= 130 && selectedBloodPressureOption <= 139){
        points += 4;
      }
      else if(selectedBloodPressureOption >= 140 && selectedBloodPressureOption <= 159){
        points += 5;
      }
      else if(selectedBloodPressureOption >= 160){
        points += 6;
      }
    }
    else{
      if(selectedBloodPressureOption < 120){
        points += 0;
      }
      else if(selectedBloodPressureOption >= 120 && selectedBloodPressureOption <= 129){
        points += 1;
      }
      else if(selectedBloodPressureOption >= 130 && selectedBloodPressureOption <= 139){
        points += 2;
      }
      else if(selectedBloodPressureOption >= 140 && selectedBloodPressureOption <= 159){
        points += 3;
      }
      else if(selectedBloodPressureOption >= 160){
        points += 4;
      }
    }
  }
  function checkBloodPressureM() {
    if (treatedStatus == "Yes") {
      if (selectedBloodPressureOption < 120) {
        points += 0;
      } else if (selectedBloodPressureOption >= 120 && selectedBloodPressureOption <= 129) {
        points += 1;
      } else if (selectedBloodPressureOption >= 130 && selectedBloodPressureOption <= 139) {
        points += 2;
      } else if (selectedBloodPressureOption >= 140 && selectedBloodPressureOption <= 159) {
        points += 2;
      } else if (selectedBloodPressureOption >= 160) {
        points += 3;
      }
    } else {
      if (selectedBloodPressureOption < 120) {
        points += 0;
      } else if (selectedBloodPressureOption >= 120 && selectedBloodPressureOption <= 129) {
        points += 0;
      } else if (selectedBloodPressureOption >= 130 && selectedBloodPressureOption <= 139) {
        points += 1;
      } else if (selectedBloodPressureOption >= 140 && selectedBloodPressureOption <= 159) {
        points += 1;
      } else if (selectedBloodPressureOption >= 160) {
        points += 2;
      }
    }
  }
  function displayResults(){
    var cholesterolSection = document.getElementById('cholesterolSection');
    cholesterolSection.classList.add('hidden');
    cholesterolSection.classList.remove('visible');
    var results = document.getElementById('resultsSection');
    results.classList.remove('hidden');
    results.classList.add('visible');

    // Display the calculated points in the label
    var pointsLabel = document.getElementById("pointsL");
    pointsLabel.textContent = " " + result; 
  }
  function resultM() {
    if (points == 0) {
      result = "<1%";
    } else if (points >= 1 && points <= 4) {
      result = "1%";
    } else if (points >= 5 && points <= 6) {
      result = "2%";
    } else if (points == 7) {
      result = "3%";
    } else if (points == 8) {
      result =  "4%";
    } else if (points == 9) {
      result =  "5%";
    } else if (points == 10) {
      result =  "6%";
    } else if (points == 11) {
      result =  "8%";
    } else if (points == 12) {
      result =  "10%";
    } else if (points == 13) {
      result =  "12%";
    } else if (points == 14) {
      result =  "16%";
    } else if (points == 15) {
      result =  "20%";
    } else if (points == 16) {
      result =  "25%";
    } else if (points >= 17) {
      result =  "30%";
    }
  }
  function resultF() {
    if (points < 9) {
      result =  "<1%";
    } else if (points >= 9 && points <= 12) {
      result =  "1%";
    } else if (points >= 13 && points <= 14) {
      result =  "2%";
    } else if (points == 15) {
      result =  "3%";
    } else if (points == 16) {
      result =  "4%";
    } else if (points == 17) {
      result =  "5%";
    } else if (points == 18) {
      result =  "6%";
    } else if (points == 19) {
      result =  "8%";
    } else if (points == 20) {
      result =  "11%";
    }
    else if (points == 21) {
      result =  "14%";
    }
    else if (points == 22) {
      result =  "17%";
    }
    else if (points == 23) {
      result =  "22%";
    }
    else if (points == 24) {
      result =  "27%";
    }else if (points >= 25){
      result =  "30%";
    }
  }
  function checkHDL(){
    if(selectedHDL >= 60){
      points -= 1;
    }else if(selectedHDL >=50 && selectedHDL <= 59){
      points +=0;
    }else if(selectedHDL >= 40 && selectedHDL <= 49){
      points += 1;
    }else if (selectedHDL < 40){
      points += 2;
    }
   // console.log(points , 'check hdl');
  }
  function calculations(){
    checkGender();
    if(genderPicked == "Female"){
      console.log(genderPicked , 'was picked');
      checkAgeF();
      alert(points ,'age');
      checkCholesterolF();
      checkHDL();
      checkSmokingF();
      checkBloodPressureF();
      resultF();
      alert(points);  
    }
    else{
      console.log('male was picked')
      checkAgeM();
      checkCholesterolM();
      checkSmokingM();
      checkBloodPressureM();
      checkHDL();
      resultM();
      alert(points);
      } 
  }

  
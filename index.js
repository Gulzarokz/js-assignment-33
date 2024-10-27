// LastNameCheck

// function checkForLastName(){
//     if(document.getElementById('lastNameField').value.length === 0) {
//         alert("Please Enter a value first");
//         return false;
//     }
// }

// Improving function with functin
//  function checkForLastName() {
//     var targetField = document.getElementById('lastNameField');
//     if(targetField.value.length === 0){
//         alert("Please Enter your last Name please");
//         targetField.focus();
//         return false;
//     }
//  }

// function checkForLastName() {
//     var targetField = document.getElementById('lastNameField');
//     if(targetField.value.length === 0){
//         alert("Please Enter your last name ");
//         targetField.focus();
//         targetField.style.background = "blue";
//         return false;
//     }
// }

//83 Form validation: drop-downs

// function checkForSelection(){
//     var target = document.getElementById('states');
   
//     if(target.selectedIndex === 0) {
//         alert("Please Enter state name");
//         return false;
//     }
// }

// function checkForSelection() {
//         var target = document.getElementById('states');
//         if (target.selectedIndex === 0) {
//             alert("Please select a state.");

//             target.focus();
//             return false; // Prevents form submission
//         }
    // }
    

    // Radiobutton validates




    // // function  validateRadios(groupName){
    // //     var radio = document.getElementById('groupName');
    // //     for(var i = 0;  i < radio.length; i++){
    // //         if(radio[i].checked){
    // //             return true;
    // //         }
    // //     }
    // // }
    // // alert("please select one of them");
    // // return false;

    // function validateRadios(groupName) {
    //  var radios = document.getElementsByName(groupName);
    //  for (var i = 0; i < radios.length; i++) {
    //      if (radios[i].checked) {
    //          return true; // At least one option is selected
    //      }
    //  }
   
    //  alert("Please check one.");
    //  return false; // Prevents form submission

    // }

function SubForm(){

  var name = document.getElementById('floatingName').value;
  var email = document.getElementById('floatingEmail').value;
  var comments = document.getElementById('floatingTextarea').value;
  var city = document.getElementById('floatingCity').value;
  var state = document.getElementById('floatingState').value;
  
  var Ttime = new Date().toLocaleTimeString(); // 11:18:48 AM
  //---
  var Tdate = new Date().toLocaleDateString(); // 11/16/2015

  if(name && email && comments && city && state){
    fetch("https://api.apispreadsheets.com/data/12218/", {
      method: "POST",
      body: JSON.stringify({"data": [{"date":Tdate, "time":Ttime, "name":name, "city":city ,"state":state, "email":email, "comments":comments}]}),
    }).then(res =>{
      if (res.status === 201){
        // SUCCESS
        alert("Thanks for visiting IBS! :)")
      }
      else{
        // ERROR
        alert("Please try aftersome time:(")
      }
    })
  }
  else{
    alert("Please fill all details");
  }

  document.getElementById('floatingName').value="";
  document.getElementById('floatingEmail').value="";
  document.getElementById('floatingTextarea').value="";
  document.getElementById('floatingCity').value="";
  document.getElementById('floatingState').value="";
}
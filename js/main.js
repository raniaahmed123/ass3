var siteNameInput = document.getElementById("siteName")
var siteUrlInput = document.getElementById("siteUrl")


var sitesContainer = [];
if(localStorage.getItem("allSites") != null)  
{

    sitesContainer = JSON.parse(localStorage.getItem("allSites"))
     displaySites()
}

function addSite(){
 
  if(isSiteNameValid() && isSiteUrlValid() == true)
  {
    var site = {
        name : siteNameInput.value ,
        url : siteUrlInput.value,
        }
        sitesContainer.push(site)
localStorage.setItem("allSites", JSON.stringify(sitesContainer) )

displaySites();
clearForm();
  }

else{
    alert(` Site Name or Url is not valid, Please follow the rules below :

    Site name must contain at least 3 characters
    Site URL must be a valid one`)
}

}

function displaySites(){
    var siteBox = ""
for(var i=0 ;i< sitesContainer.length ; i++)
{
    siteBox+=`  
    <tr>
    <td>${i+1}</td>
    <td>${sitesContainer[i].name}</td>
    <td>${sitesContainer[i].url}</td>
    <td>  <a href=" ${sitesContainer[i].url}" target="_blank" rel="noopener noreferrer"><button class="btn btn-visit" ><i class="fa-solid fa-eye me-2"></i>Visit</button></a></td>
    <td><button class="btn btn-danger" onclick = "deleteSite(${i})"><i class="fa-solid fa-trash-can me-2" ></i>Delete</button></td>

</tr>`;
// console.log(sitesContainer[i].name)

}
document.getElementById("tableData").innerHTML=siteBox

}
var siteNameRegex = /[A-za-z0-9_\.]{3,}$/i
function isSiteNameValid(){
    return siteNameRegex.test(siteNameInput.value)
   
}

var siteUrlRegex = /^(https:\/\/)?(www\.)?[A-za-z0-9_\.]{3,}\.[a-z]{3}$/i

function isSiteUrlValid(){
     return siteUrlRegex.test(siteUrlInput.value)
    
}

// siteUrlInput.onkeyup = function(){
//     if(isSiteUrlValid() && isSiteNameValid() == true)
//     {
//         document.getElementById("submitbtn").removeAttribute('disabled')
     
//         }

//         else{
//             document.getElementById("submitbtn").disabled = "true"
//             // window.alert(`Site Name or Url is not valid, Please follow the rules below :

//             // Site name must contain at least 3 characters
//             // Site URL must be a valid one` )

//         }
// }


function deleteSite(siteNumber){
    sitesContainer.splice(siteNumber , 1);
    localStorage.setItem("allSites", JSON.stringify(sitesContainer) )
    displaySites();

}

function clearForm(){
    siteNameInput.value="";
    siteUrlInput.value="";
}



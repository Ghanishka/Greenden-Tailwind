// Selecting side Navbar, menu icon
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

// product search functionality
var productcontainer = document.getElementById("product-container");
var search=document.getElementById("search");


var productlist=productcontainer.querySelectorAll("div");


search.addEventListener("keyup", function (event) {
   
    var enteredValue = event.target.value.toUpperCase();
    
   
    for (var count=0;count<productlist.length;count++) 
        {
        var productname = productlist[count].querySelector("h1").textContent;
        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
           
            productlist[count].style.display = "none";
        } else {
         
            productlist[count].style.display = "block";
        }
    }
});



// var productcontainer = document.getElementById("product-container")
// var search = document.getElementById("search")
// var productlist = productcontainer.querySelectorAll("div")

// search.addEventListener("keyup", function (event) {
//     var enteredValue = event.target.value.toUpperCase()

//     for (count = 0; count < productlist.length; count = count++) {
//         var productname = productlist[count].querySelector("h1").textcontent
//         if (productname.toUpperCase().indexOf(enteredValue)<0)
//              {
//             productlist[count].style.display = "none"
//         }
//         else {
//             productlist[count].style.display = "block"
//         }
//     }
// })
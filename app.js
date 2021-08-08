// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener("click", ()=>{
console.log(links.classList.contains("show-links"))

// this was used to confirm is our button was working and also if when click on the navToggle it gives false or true
  //  if(links.classList.contains("show-links")){
  //      links.classList.remove("show-links");
  //  } else{
  //      links.classList.add("show-links");
  //  }

// The toggle method takes care of the if statement above.

 links.classList.toggle("show-links")
});
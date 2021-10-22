var AllSections = Array.from(document.querySelectorAll('section')); // put all section in array to count them
var ListItem = document.getElementById("navbar__list"); // take the (ul) element to control it
const toTop = document.querySelector(".to-top");

// this function is used to create a list that is going to appear in the main page
function ListCreator() {
    for (section of AllSections){
        Name = section.getAttribute("data-nav"); // take the name of the section
        Link = section.getAttribute("id"); //  the the id of the section
        Item = document.createElement("li"); // create a new list in the (ul)
        Item.setAttribute("data-nav", `${Link}`); // adding (data-nav) attribute to (li)
        Item.setAttribute("class", "nav-item active") // adding bootsrap class to (li)
        Item.innerHTML = `<a class='menu__link nav-link' href='#${Link}'>${Name}</a>` // create the link of the section
        ListItem.appendChild(Item); // add the child (li) to (ul)
    }
}

// this function is adding a style states to the navbar items
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(hover) {
    var activeLink = ListItem.querySelector(`[data-nav=${hover.id}]`);
  // geting and check the area of the section
	if(hover.getBoundingClientRect().top >= -400 && hover.getBoundingClientRect().top <= 150){

    hover.classList.add("bg-dark"); // adding a color on hover
    activeLink.classList.add("bg-info"); // adding a color on click and scrolling

    }
    else{
         hover.classList.remove("bg-dark"); // remove the color after hover
         activeLink.classList.remove("bg-info"); // remove a color on click and scrolling
    }
	});
}


// this function is used in scroll to top button
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
})


// adding smooth scroll
ListItem.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 200);
  }
});

ListCreator();
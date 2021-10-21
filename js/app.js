var AllSections = Array.from(document.querySelectorAll('section')); // put all section in array to count them
var ListItem = document.getElementById("navbar__list"); // take the (ul) element to control it
const toTop = document.querySelector(".to-top"); //

// this function is used to create a list that is going to appear in the main page
function ListCreator() {
    for (section of AllSections){
        Name = section.getAttribute("data-nav"); // take the name of the section
        Link = section.getAttribute("id"); //  the the id of the section
        Item = document.createElement("li"); // create a new list in the (ul)
        Item.innerHTML = `<a class='menu__link' href='#${Link}'>${Name}</a>` // create the link of the section
        ListItem.appendChild(Item); // add the child (li) to (ul)
    }
}

// this function is used in scroll to top button
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
})

ListCreator();
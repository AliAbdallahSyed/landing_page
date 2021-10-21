var AllSections = Array.from(document.querySelectorAll('section'));
var NumberOfSection = AllSections.length;
var ListItem = document.getElementById("navbar__list");
const toTop = document.querySelector(".to-top");


function ListCreator() {
    for (section of AllSections){
        SectionName = section.getAttribute("data-nav");
        sectionLink = section.getAttribute("id");
        listItem = document.createElement("li");
        listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${SectionName}</a>`
        ListItem.appendChild(listItem);
    }
}

function sectionView(element){
    let sectionPos = element.getBoundingclientRect();
    return (sectionPos.top >=0 );
}

function toggleActiveClass(){
    for (section of sections) {
        if (sectionView(section)) {
            if (!section.classlist.contains("your-active-class")){
                section.classlist.add("your-active-class")
            }
        } else {
            section.classlist.remove("you-active-class")
        }
    }   
}


window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })
  
ListCreator();
document.addEventListener('scroll', toggleActiveClass)
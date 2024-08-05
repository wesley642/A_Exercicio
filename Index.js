
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});


document.addEventListener("click", (e) =>{
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");

    if(!nav.contains(e.target) && !hamburger.contains(e.target))
    {
        nav.classList.remove("active")
        hamburger.classList.remove("active")
    }

    
})

const navLinks = document.querySelectorAll(".navItem a");

function setActiveLink(link){
    navLinks.forEach(link => link.classList.remove('active'))
    link.classList.add('active')
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        setActiveLink(e.target)
    })
})

const activeLinkText = localStorage.getItem('activeLinkText')

if(activeLinkText){
    const activeLink = Array.from(navLinks).find(link => link.textContent.trim() === activeLinkText)
    if(activeLink){
        setActiveLink(activeLink)
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        localStorage.setItem('activeLinkText', link.textContent.trim())
    })
})

function dropbotao(){
    document.getElementById("dropdownbotao").classList.toggle("show");
}

window.onclick = function (event) {
    if(!event.target.matches(".dropbtn")){
        let dropdowns = document.getElementsByClassName("dropdown-content")
        let i
        for(i = 0; i < dropdowns.length; i++){
            let openDropDown = dropdowns[i];
            if(openDropDown.classList.contains("show")){
                openDropDown.classList.remove("show");
            }
        }
    }
}







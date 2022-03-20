//--------------------------------------------------------------------------------------------------DECLARATIONS
const Allimg = document.querySelectorAll("img")
const header = document.querySelector(".header")
const sidebar = document.querySelector(".sidebar")
const wrapper = document.querySelector(".wrapper")
const sidebarBtn = document.querySelector(".sidebar-btn")
const sidebarMenu = document.querySelector(".sidebar-menu")
const AllMenuBtn = document.querySelectorAll(".menu-btn")
const AllSubMenu = document.querySelectorAll(".sub-menu")
const mainContainer = document.querySelector(".main-container")

const tabObjets = [
    {
        id: "",
        class: "item",
        a: {
            "href": "#",
            "class": "menu-btn",
        },
        firstIcon : "fas fa-tachometer-alt",
        span: "Dashboard",
        small:{
            "text": "New",
            "class": "red"
        },
        secondIcon: "fas fa-chevron-down drop-down",
        div:{
            "class": "sub-menu",
            "a": "#",
            "i": "far fa-circle",
            "span": "text"
        }
    }
]
{/* <li class="item" id="layout">
    <a href="#layout" class="menu-btn">
        <i class="far fa-copy"></i><span>Layout Options <small class="blue">6</small><i class="fas fa-chevron-down drop-down"></i></span>
    </a>
    <div class="sub-menu">
        <a href="#"><i class="far fa-circle"></i><span>text</span></a>
        <a href="#"><i class="far fa-circle"></i><span>text</span></a>
        <a href="#"><i class="far fa-circle"></i><span>text</span></a>
    </div>
</li> */}

tabObjets.forEach(element => {
    li = document.createElement("li")
    li.setAttribute("id", element.id)
    li.setAttribute("class", element.class)

    a = document.createElement("a")
    a.setAttribute("href", element.a.href)
    a.setAttribute("class", element.a.class)

    i1 = document.createElement("i")
    i1.setAttribute("class", element.firstIcon)

    span = document.createElement("span")
    span.innerHTML =  element.span

    small = document.createElement("small")
    small.innerHTML = element.small.text
    small.setAttribute("class", element.small.class)

    i2 = document.createElement("i")
    i2.setAttribute("class", element.secondIcon)

    a.appendChild(i1)
    span.appendChild(small)
    span.appendChild(i2)
    a.appendChild(span)



    var div = document.createElement("div")
    div.setAttribute("class", element.div.class)

    for (let i = 0; i < 3; i++) {

        a3 = document.createElement("a")
        a3.setAttribute("href", element.div.a)

        i3 = document.createElement("i")
        i3.setAttribute("class", element.div.i)

        span3 = document.createElement("span")
        span3.innerHTML =  element.div.span  

        a3.appendChild(i3)
        a3.appendChild(span3)
        div.appendChild(a3)
    } 

    li.appendChild(a)
    li.appendChild(div)

    sidebarMenu.appendChild(li)
});


//--------------------------------------------------------------------------------------------------HTML STRUCTURATION



//--------------------------------------------------------------------------------------------------FUNCTIONS




//--------------------------------------------------------------------------------------------------EVENTS
// LE BOUTON BURGER
sidebarBtn.addEventListener("click", ()=>{
    wrapper.classList.toggle("collapse")
})

// HOVER SUR LES ICONES DU SIDEBAR
AllMenuBtn.forEach((element) => element.addEventListener("mouseover", ()=>{
        wrapper.classList.remove("collapse")
    })
)

// HOVER SUR LES ICONES DU SUB MENU
AllSubMenu.forEach((element) => element.addEventListener("mouseover", ()=>{
    wrapper.classList.remove("collapse")
})
)

// HOVER SUR LES IMG DU SIDEBAR
Allimg.forEach((element) => element.addEventListener("mouseover", ()=>{
    wrapper.classList.remove("collapse")
})
)

// COLLAPSE WHEN NOT HOVERING THE MENU
window.addEventListener('mouseover', function(e)
{ 
    if(e.target == mainContainer)
        wrapper.classList.add("collapse")
    else
        return false;
});

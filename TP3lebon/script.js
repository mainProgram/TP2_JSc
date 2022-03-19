const zoom_result = document.querySelector(".img-zoom-result")
const slides = document.querySelector(".slides")
const slider = document.querySelector(".slider")
const length = 11

for (let i = 1; i <= length; i++) {
    //INPUTS RADIO
    input = document.createElement("input")
    input.setAttribute("type", "radio")
    input.setAttribute("name", "radio")
    input.setAttribute("id", "radio"+i)
    slides.appendChild(input)
}

for (let i = 1; i <= length; i++) {
    //IMAGES
    div = document.createElement("div")
    div.classList.add("slide")
    if(i==1)
        div.classList.add("first")

    img= document.createElement("img")
    img.setAttribute("src", "img/img"+i+".jpg")
    img.setAttribute("alt", "flowers")
    img.setAttribute("id", "img"+i)

    div.appendChild(img)
    slides.appendChild(div)
}

const navigationAuto = document.createElement("div")
navigationAuto.setAttribute("class", "navigation-auto")
for (let i = 1; i <= length; i++) {
    //DIV AUTO
    div = document.createElement("div")
    div.classList.add("auto"+i)

    navigationAuto.appendChild(div)
    slides.appendChild(navigationAuto)
}  


const navigationManual = document.createElement("div")
navigationManual.setAttribute("class", "navigation-manual")
for (let i = 1; i <= length; i++) {
    //DIV MANUAL
    label = document.createElement("label")
    label.classList.add("manual")
    label.setAttribute("for", "radio"+i)

    navigationManual.appendChild(label)
    slides.appendChild(navigationManual)
}  

var compteur = 1;
setInterval( function(){
    document.getElementById("radio" + compteur).checked = true;
    
    compteur++;

    if(compteur > length)
        compteur = 1
    
}, 5000);

function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /* Create lens: */
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /* Insert lens: */
    img.parentElement.insertBefore(lens, img);
    /* Calculate the ratio between result DIV and lens: */
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /* Set background properties for the result DIV */
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /* Execute a function when someone moves the cursor over the image, or the lens: */
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /* And also for touch screens: */
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      /* Calculate the position of the lens: */
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /* Prevent the lens from being positioned outside the image: */
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}/*98+63

      if (y < 0) {y = 0;}
      /* Set the position of the lens: */
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /* Display what the lens "sees": */
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
}

const allImages = slides.querySelectorAll("img");
allImages.forEach((image, i) => image.addEventListener("mousemove", () => {
        zoom_result.style.display = "block";
        imageZoom("img"+(i+1), "myresult");
    })
)


window.addEventListener("mouseover", (e)=>{
    if(e.target == document.body)
        zoom_result.style.display = "none"
    else
        return false;
    console.log(e.target)
})
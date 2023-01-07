function parallax(e){
    document.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-depth')

        const x = (window.innerWidth - e.pageX*speed)/97
        const y = (window.innerHeight - e.pageY*speed)/97

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

function showSlides() {
    let slides = document.getElementsByClassName("fade");   
              
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.right = "0px";  
        slides[i].style.opacity = 1;
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}   
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); 
}

function suggest_hero(){
    
    let role, easy_hero, name;
    
    while (name === undefined || name === "")
    {
        name = prompt("What is your name?");
        if (name === null)
          return;
        if (name === "")
            alert ("Please input any name. :)")
    }            
    
    while (role != "support" && role != "tank" && role != "damage" )
    {
        role = prompt(name + ", pick a role: support, tank or damage.");
        role = role.toLowerCase().trim();
        if (role != "support" && role != "tank" && role != "damage" )
           alert("Invalid input. Please enter one of three options: support, tank, damage.");
    }
     
    while (easy_hero != "yes" && easy_hero != "no")
    {
        easy_hero = prompt("Do you want an easy to play hero?");
        easy_hero = easy_hero.toLowerCase().trim();
        if (easy_hero != "yes" && easy_hero != "no")
           alert("Invalid input. Please enter yes or no.");
    }
   
    if (role === "support" && easy_hero ==="yes")
        alert (`${name}, try Mercy or Zenyatta. ❤️‍🩹 `);
    else if (role === "support" && easy_hero ==="no")
        alert (`${name}, try Ana or Lucio. ❤️‍🩹 `);
    else if (role === "tank" && easy_hero ==="yes")
        alert (`${name}, try Reinhardt, Winston or Zarya. 😤`);
    else if (role === "tank" && easy_hero ==="no")
        alert (`${name}, try D.va or Roadhog. 😤`);    
    else if (role === "damage" && easy_hero ==="yes")
        alert (`${name}, try Bation, Reaper, Soldier: 76, Pharah, Tobjörn, Junkrat or Mei. 👹`);
    else 
        alert (`${name}, try Genji, Widowmaker, Hanzo, Tracer, Symmetra or Mccree. 👹`);   
    
};


let slideIndex = 0;


showSlides();

 
document.querySelector(' .parallax  ').addEventListener("mousemove", parallax);    

let btns = document.querySelectorAll(".hero-portrait");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("mouseover", function() {
        
        let current = document.getElementsByClassName("active");                
       
        current[0].className = current[0].className.replace(" active", "");
        
        this.className += " active";
        
        document.querySelector(".spotlight>.header").innerHTML=this.getAttribute("data-hero-name");
        document.querySelector(".spotlight>.holder").setAttribute('style', "  margin-top: -10%;  margin-bottom: auto; padding-top: 101.7%;   background-size:contain;  background-image: url(" + this.getAttribute("data-hero-image"));
        document.querySelector(".spotlight>.caption").innerHTML="<br><br>"+this.getAttribute("data-hero-description");
    });  
}

let matchHeroBtn = document.querySelector("#find-hero");
matchHeroBtn.addEventListener("click", suggest_hero);
let matchHeroBtn2 = document.querySelector("#find-hero2");
matchHeroBtn2.addEventListener("click", suggest_hero);
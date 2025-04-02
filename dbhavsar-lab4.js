// Dev Bhavsar
// ITMD 541-01 Graduate Student

// 1. Updated the main headline in the hero
(function() {

    const header = document.querySelector("h1.text-4xl.font-bold");
    if(header) header.textContent = "Uplift Your Brand with Stellar Marketing";
})();

//2. Changing the subtext to the given text.
(function(){
    const belowHeader = document.querySelector("p.text-xl.mb-6.text-white.relative.z-20");
    if(belowHeader){
        belowHeader.innerHTML = "Utilize cutting-edge strategies from Stellar Marketing to help your business <strong><em>thrive</em></strong> and <strong><em>excel</em></strong>.";
    }

})();

//3. Changing the image and background of the hero.
(function(){

    const background = document.querySelector("#hero");
    if(background){
        background.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
        background.style.backgroundSize = "cover";
        background.style.backgroundPosition = "center";
        background.style.backgroundRepeat = "no-repeat";
        background.style.minHeight = "100vh";
    }

})();
  
// 4. Updated the backgrond color of nav bar to same as that of the footer.
(function(){
    const navBar = document.querySelector("header.bg-blue-600");
    const footer = document.querySelector("footer");
    if (navBar && footer){
        navBar.style.backgroundColor = getComputedStyle(footer).backgroundColor;
    }

})();
   
//5. Removed the Get Started button from the hero.
(function(){
    const btn = document.querySelector("a.relative.bg-blue-600.text-white.px-6.py-2.rounded");
    if(btn){
        btn.remove();
    }

})();

//6. Alligned all 3 headings to the center.
(function (){
    const headings = document.querySelectorAll("h2.text-3xl.font-bold.mb-6");
    headings.forEach(h2 => {
        const text = h2.textContent.trim();
        if (["Our Services", "Solutions", "Contact"].includes(text)){
            h2.style.textAlign = "center";
        }
    })

})();

//7. Updated the color of icon in Services section to #47C714
(function(){
    const icon = document.querySelectorAll(".material-symbols-outlined");
    icon.forEach(icon => {
        icon.style.color = "#47C714"
    })
})();

//8. Updated the digital marketing icon.
(function(){
    const dmIcon = document.querySelector(".material-symbols-outlined");
    if(dmIcon){
        dmIcon.textContent = "ads_click";
    }
})();

//9. Updated the tiles layout to all 4 tiles being laid across to each other.
(function(){
    const sMarkSol = document.createElement("style");
    sMarkSol.textContent = `
    @media (min-width: 1024px){
    #solutions .grid{
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 1.5rem !important
    }}`;
    document.head.appendChild(sMarkSol);
})();


// 10. Changed the musicians image.
(function(){
    const music = document.querySelector('img[alt="Musicians');
    if(music){
            music.src="https://fastly.picsum.photos/id/453/400/300.jpg?hmac=19cErdap35ZD3TFJZzBb6kEwO8dGJC90VTCHvuabLf0";
        }
    
})();

//11. Graduate student task: Updated the Contact Us form section to provide required responses on suitable inputs.
(function(){
    const contact = document.querySelector("form");
    if(contact){
        const r=contact.cloneNode(true);
        contact.parentNode.replaceChild(r, contact);

        r.addEventListener("submit", function(e){
            e.preventDefault();

            const nameI = r.querySelector("input[name='name']");
            const emailI = r.querySelector("input[name='email']");
            const name = nameI ? nameI.value.trim():"";
            const email = emailI ? emailI.value.trim():"";
            if(!name && !email){
                alert("Please provide a name and email");
            } else if(!name){
                alert("Please provide a name");
            } else if (!email){
                alert("Please provide a email");
            } else{
                alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
            }
        });
    }
})();



/*controller le bouton burger */
let laCheckBox = document.querySelector("#cc-BB");
let leBody = document.querySelector("body");

laCheckBox.addEventListener("click", gererDefillement);

function gererDefillement(event){
    if(laCheckBox.checked == true){
        leBody.style.overflow = "hidden";
    }else{
        leBody.style.overflow = "scroll";
    }
}

let lesBoutons = document.querySelectorAll(".nav-principale a");

for(let unBouton of lesBoutons){
    unBouton.addEventListener("click", controlerBoutonBurger);
}

function controlerBoutonBurger(){
    laCheckBox.checked = false;
    leBody.style.overflow = "scroll";
}
// bouton pour arreter et partir les animations
let boutonPlay = document.querySelector("#play");
let boutonPause = document.querySelector("#pause");

let animationWeb = document.querySelector("#imageWeb");
let animationSouris = document.querySelector("#souris");
let animationCrayon = document.querySelector("#crayon");
let animationCrayonENcre = document.querySelector("#crayonAEncre");
let animationPinceau = document.querySelector("#pinceau");
let animationPeinture = document.querySelector("#tacheCouleur");

boutonPlay.addEventListener("click", jouerAnimations);
boutonPause.addEventListener("click", arreterAnimation);

function jouerAnimations(){
    animationWeb.classList.add("active");
    animationSouris.classList.add("active");
    animationCrayon.classList.add("active");
    animationCrayonENcre.classList.add("active");
    animationPinceau.classList.add("active");
    animationPeinture.classList.add("active");
}

function arreterAnimation(){
    animationWeb.classList.remove("active");
    animationSouris.classList.remove("active");
    animationCrayon.classList.remove("active");
    animationCrayonENcre.classList.remove("active");
    animationPinceau.classList.remove("active");
    animationPeinture.classList.remove("active");
}

/*bouton pour changer le theme de la page*/
let chagnerTheme = document.querySelector("#changerTheme");
let titre = document.querySelector("#titrePrincipaux");
let navPrincipale = document.querySelector(".nav-principale");
let boutonBurgerNav = document.querySelector(".BB-nav-principale");
let lienNav1 = document.querySelector(".nav-principale a");
let lienNav2 = document.querySelector(".nav-principale a:nth-of-type(2)");
let lienNav3 = document.querySelector(".nav-principale a:nth-of-type(3)");
let lienNav4 = document.querySelector(".nav-principale a:nth-of-type(4)");
let lienYoutube = document.querySelector("#liens p a");
let lienInstagram = document.querySelector("#liens p:nth-of-type(2) > a");
let titreAnimer = document.querySelector("#barreNoir");
let lienFooter = document.querySelector("h1>a");
let clignotant = document.querySelector("#clignotant");
let lienVideo =  document.querySelector(".description p a");

//scrollBar
let styleScrollBar = document.createElement("style");
let styleScrollBarHover = document.createElement("style");
document.getElementsByTagName("head")[0].appendChild(styleScrollBar);
document.getElementsByTagName("head")[0].appendChild(styleScrollBarHover);
/*tirer de cette page la
https://stackoverflow.com/questions/33079509/how-to-write-css-for-webkit-scrollbar-using-javascript*/


let nombreDeFoisBoutonToucher = 0;
chagnerTheme.addEventListener("click",changerLaCouleur);

function changerLaCouleur(){
    nombreDeFoisBoutonToucher ++;
    if(nombreDeFoisBoutonToucher == 1 || nombreDeFoisBoutonToucher == 3 || nombreDeFoisBoutonToucher == 5 || nombreDeFoisBoutonToucher == 7 || nombreDeFoisBoutonToucher == 9 || nombreDeFoisBoutonToucher == 11 || nombreDeFoisBoutonToucher ==  13 || nombreDeFoisBoutonToucher == 15 || nombreDeFoisBoutonToucher == 17 || nombreDeFoisBoutonToucher == 19){
    /*couleur noir a blanc*/
    document.body.style.backgroundColor = "rgb(244, 244, 244)";
    titre.style.backgroundColor = "rgb(244, 244, 244)";
    navPrincipale.style.backgroundColor = "rgb(244, 244, 244)";
    boutonBurgerNav.style.backgroundColor = "rgb(244, 244, 244)";
    titreAnimer.style.backgroundColor = "rgb(244, 244, 244)";
    /*couleur blanc a noir*/
    document.body.style.color = "rgb(22, 21, 21)";
    lienNav1.style.color = "rgb(22, 21, 21)";
    lienNav2.style.color = "rgb(22, 21, 21)";
    lienNav3.style.color = "rgb(22, 21, 21)";
    lienNav4.style.color = "rgb(22, 21, 21)";
    lienYoutube.style.color = "rgb(22, 21, 21)";
    lienInstagram.style.color = "rgb(22, 21, 21)";
    lienFooter.style.color = "rgb(22, 21, 21)";
    clignotant.style.backgroundColor = "rgb(22, 21, 21)";
    lienVideo.style.color = "rgb(22, 21, 21)";

    //couleur scrollBar
    styleScrollBar.appendChild(document.createTextNode("::-webkit-scrollbar-thumb{ background-color: rgba(22, 21, 21, 0.455);}"));
    styleScrollBarHover.appendChild(document.createTextNode("::-webkit-scrollbar-thumb:hover{ background-color: rgb(22, 21, 21);}"));

   }else if(nombreDeFoisBoutonToucher == 2 || nombreDeFoisBoutonToucher == 4 || nombreDeFoisBoutonToucher == 6 | nombreDeFoisBoutonToucher == 8 || nombreDeFoisBoutonToucher == 10 || nombreDeFoisBoutonToucher == 12 || nombreDeFoisBoutonToucher == 14 || nombreDeFoisBoutonToucher == 16 || nombreDeFoisBoutonToucher == 18 || nombreDeFoisBoutonToucher == 20){
    /*couleur blanc a noir*/
    document.body.style.backgroundColor = "rgb(22, 21, 21)";
    titre.style.backgroundColor = "rgb(22, 21, 21)";
    navPrincipale.style.backgroundColor = "rgb(22, 21, 21)";
    boutonBurgerNav.style.backgroundColor = "rgb(22, 21, 21)";
    titreAnimer.style.backgroundColor = "rgb(22, 21, 21)";
    /*couleur noir a blanc*/
    document.body.style.color = "rgb(244, 244, 244)";
    lienNav1.style.color = "rgb(244, 244, 244)";
    lienNav2.style.color = "rgb(244, 244, 244)";
    lienNav3.style.color = "rgb(244, 244, 244)";
    lienNav4.style.color = "rgb(244, 244, 244)";
    lienYoutube.style.color = "rgb(244, 244, 244)";
    lienInstagram.style.color = "rgb(244, 244, 244)";
    lienFooter.style.color = "rgb(244, 244, 244)";
    clignotant.style.backgroundColor = "rgb(244, 244, 244)";
    lienVideo.style.color = "rgb(244, 244, 244)";

    styleScrollBar.appendChild(document.createTextNode("::-webkit-scrollbar-thumb{ background-color: rgba(244, 244, 244, 0.455);}"));
    styleScrollBarHover.appendChild(document.createTextNode("::-webkit-scrollbar-thumb:hover{ background-color: rgb(244, 244, 244);}"));

   }
}
/*faire apparaitre les section selon le scroll*/
window.addEventListener("scroll", faireApparaitreDiv);

function faireApparaitreDiv(){
 let hauteurVisible = window.innerHeight * 0.75;
 lesSections = document.querySelectorAll(".lesSections");

 for(let uneSection of lesSections){
    let hautSection = uneSection.getBoundingClientRect().top;

    if(hautSection < hauteurVisible ){
        uneSection.classList.add("deplacer");
    }else{
        uneSection.classList.remove("deplacer");
    }
 }
}
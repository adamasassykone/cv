//var window.scrollY=20px;
//var window.innerHeight;
//var document.body.offsetHeight;

window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page

// Calculez le déplacement ici ...
deplacement=(window.scrollY + window.innerHeight)/document.body.offsetHeight;

document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
console.log(deplacement);

});

function getScrollPercent(){
	 var scrollTop=document.body.scrollTop.
		windowHeight=window.innerHeight.
		scrollHeight = document.body.scrollHeight;
        
   var scrollPercent =(scrollTop/(scrollHeight - windowHeight))*100;
           return scrollPercent;
	}

function myScroll() { // Définition de la fonction de scroll
    var progress = document.getElementById('progress_bar').value; // Valeur de la barre de progression
      var scrollPercent =(scrollTop/(scrollHeight - windowHeight))*100;

    window.scroll(0, value); // Déplacement de la page de 0 px latéralement et 'value' px horizontalement
    console.log(0,value);
 }

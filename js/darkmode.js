
//Changement de la couleur du div, qui contient tout le contenue.
var div = document.getElementsByTagName("div");
div[2].style.background = "#171717"

//Changement de la couleur du texte avec pour TagName i.
var i = document.getElementsByTagName("i");

for(var y = 0; y < 4; y++){
  i[y].style.color = "#171717";
}

//Changement de la couleur du premier texte avec pour TagName h1.
var h1 = document.getElementsByTagName("h1");

h1[0].style.color = "#C0C0C0";

//Changement de la couleur du texte avec pour TagName h2.
var h2 = document.getElementsByTagName("h2");

for(var y = 0; y < h2.length; y++){
  h2[y].style.color = "#C0C0C0";
}

//Changement de la couleur du texte avec pour TagName h3.
var h3 = document.getElementsByTagName("h3");

for(var y = 0; y < h3.length; y++){
  h3[y].style.color = "#C0C0C0";
}
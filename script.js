/*global $ */

$(document).ready(function() {
    
    $('#droplink').click(function() {
        $('.dropdown-content').toggleClass('show');
    });
    
//    $(document).click(function (e) {
//    if (!$(e.target).hasClass("na v-item") 
//        && $(e.target).parents(".dropdown-content").length === 0) 
//    {
//        $(".dropdown-content").removeClass('show');
//    }
//});
    
    window.onclick = function(event) {
  if (!event.target.matches('#droplink')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var modal = document.getElementById('myModal');
    
var img = document.getElementById('myImg');

var captionText = document.getElementById("caption");
img.onclick = function(){
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}


})
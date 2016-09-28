/*global $ */

$(document).ready(function() {
    
//    $('#droplink').click(function() {
//        $('.dropdown-content').toggleClass('show');
//    });
//    
////    $(document).click(function (e) {
////    if (!$(e.target).hasClass("nav-item") 
////        && $(e.target).parents(".dropdown-content").length === 0) 
////    {
////        $(".dropdown-content").removeClass('show');
////    }
////});
//    
//    window.onclick = function(event) {
//  if (!event.target.matches('#droplink')) {
//
//    var dropdowns = document.getElementsByClassName("dropdown-content");
//    var i;
//    for (i = 0; i < dropdowns.length; i++) {
//      var openDropdown = dropdowns[i];
//      if (openDropdown.classList.contains('show')) {
//        openDropdown.classList.remove('show');
//      }
//    }
//  }
//}

    
    $(".writing-link").addClass('hover');
     $('#writing').show();
    
	$(".writing-link").click(function() {
        $(".work-link").removeClass('hover');
        $(".writing-link").addClass('hover');
        $(".work-section").hide();
		$("#writing").show();
        
	});
	
    $(".design-link").click(function() {
        $(".work-link").removeClass('hover');
        $(".design-link").addClass('hover');
        $(".work-section").hide();
		$("#design").show();
        
	});
    
    $(".code-link").click(function() {
        $(".work-link").removeClass('hover');
        $(".code-link").addClass('hover');
        $(".work-section").hide();
		$("#code").show();
        
	});
    
    $(".video-link").click(function() {
        $(".work-link").removeClass('hover');
        $(".video-link").addClass('hover');
        $(".work-section").hide();
		$("#video").show();
        
	});
    
    $(".music-link").click(function() {
        $(".work-link").removeClass('hover');
        $(".music-link").addClass('hover');
        $(".work-section").hide();
		$("#music").show();
        
	});

})
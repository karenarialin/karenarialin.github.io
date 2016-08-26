/*global $ */

$(document).ready(function() {
    
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
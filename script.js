$(document).ready(function() {
    
    $('#work').show();
	
    $(".intro-link").click(function() {
        $(".work-section").hide();
		$("#work").show();
	})
    
	$(".writing-link").click(function() {
        $(".work-section").hide();
		$("#writing").show();
	})
	
    $(".design-link").click(function() {
        $(".work-section").hide();
		$("#design").show();
	})
    
    $(".code-link").click(function() {
        $(".work-section").hide();
		$("#code").show();
	})
    
    $(".video-link").click(function() {
        $(".work-section").hide();
		$("#video").show();
	})
    
    $(".music-link").click(function() {
        $(".work-section").hide();
		$("#music").show();
	})

})
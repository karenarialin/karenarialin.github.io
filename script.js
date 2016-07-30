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
    
    $(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
    
})
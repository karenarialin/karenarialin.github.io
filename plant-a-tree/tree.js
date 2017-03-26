function main() {
    
var $landingGrass = $('.landing-grass');
    
//$landingGrass.waypoint(function(direction) {
//   if (direction == 'down') {
//      $landingGrass.addClass('fixed'); 
//   } else {
//      $landingGrass.removeClass('fixed'); 
//   }
//}, { offset: 'bottom-in-view' });
//    
//$('.earth').waypoint(function(direction) {
//   if (direction == 'down') {
//      $landingGrass.removeClass('fixed'); 
//      console.log('Earth');
//   } else {
//      $landingGrass.addClass('fixed'); 
//   }
//});
    
    

$('.place-section').waypoint(function(direction) {
        $('.place-section').addClass('place-animate'); 
}, { offset: '50%'});
    

$('.fill').waypoint(function(direction) {
        $('.fill').addClass('animate-fill'); 
}, { offset: '90%'});
    
$('.water').waypoint(function(direction) {
        $('.water').addClass('animate-fill'); 
}, { offset: '90%'});
    
$('.stake').waypoint(function(direction) {
        $('.stake').addClass('animate-stake');   
}, { offset: '50%'});
    
$('.fill-page').waypoint(function(direction) {
    $('.double-shovel-dig').addClass('dig-animation');   
}, { offset: '50%'});
    
    //main closing bracket
}






$(document).ready(main);
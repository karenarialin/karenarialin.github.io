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
    
$('.water').waypoint(function(direction) {
        $('.water').addClass('animate-fill'); 
}, { offset: '90%'});
    
$('.what').waypoint(function(direction) {
        $('.what').addClass('animate-fill'); 
}, { offset: '80%'});
    
$('.where').waypoint(function(direction) {
        $('.where').addClass('animate-fill'); 
}, { offset: '80%'});
    
$('.when').waypoint(function(direction) {
        $('.when').addClass('animate-fill'); 
}, { offset: '80%'});
    
$('.why').waypoint(function(direction) {
        $('.why').addClass('animate-fill'); 
}, { offset: '80%'});
    
$('.stake').waypoint(function(direction) {
        $('.stake').addClass('animate-stake');   
}, { offset: '50%'});
    
$('.fill-shovel').waypoint(function(direction) {
    $('.double-shovel-dig').addClass('dig-animation');   
}, { offset: '90%'});
    
$('.fill').waypoint(function(direction) {
        $('.fill').addClass('animate-fill'); 
}, { offset: '90%'});
    
$('.measure-page').waypoint(function(direction) {
        $('.measure-page').addClass('animate-fill'); 
}, { offset: '90%'});
    
$('.dig-page').waypoint(function(direction) {
        $('.dig-page').addClass('animate-fill'); 
}, { offset: '90%'});
    
$('.place-page').waypoint(function(direction) {
        $('.place-page').addClass('animate-fill'); 
}, { offset: '90%'});
    
$('.fill-page').waypoint(function(direction) {
        $('.fill-page').addClass('animate-fill'); 
}, { offset: '90%'});
    
    
$('.stake-page').waypoint(function(direction) {
        $('.stake-page').addClass('animate-fill'); 
}, { offset: '90%'});
    
$('.water-page').waypoint(function(direction) {
        $('.water-page').addClass('animate-fill'); 
}, { offset: '90%'});    
    
    //main closing bracket
}






$(document).ready(main);
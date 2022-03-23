// $(document).ready(function(){
//     $(window).scroll(function(){
//         if (window.screenY > 10){
//             $('.navbar').addClass("sticky");

//         }else{
//             $('.navbar').removeClass("sticky");
//         }
//     });
//     //toggle menu/navbar script
//     $('.menu-btn').click(function(){
//         $('.navbar .menu').toggleClass("active")
//         $('.menu-btn').toggleClass("active")
//     });
// });


// $(function(){
//     $(document).scroll(function(){
//         var $nav = (".navbar");
//         $nav.toggleClass('scrolled',$this().scrollTop()>$nav.height());
//     });
// });

var navbar = document.querySelector('navbar')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (this.pageYOffset > 20) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}




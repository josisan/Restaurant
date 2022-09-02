$(document).ready(function(){
     
  $('.ir-arriba').click(function(){
      $('body, html').animate({
          scrollTop: '0px'
      }, 300);
  });
 
  $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
          $('.ir-arriba').slideDown(300);
      } else {
          $('.ir-arriba').slideUp(300);
      }
  });
  });
// function tamVentana() {
//     var tam = [0, 0];
//     if (typeof window.innerWidth != 'undefined')
//     {
//       tam = [window.innerWidth,window.innerHeight];
//     }
//     else if (typeof document.documentElement != 'undefined'
//         && typeof document.documentElement.clientWidth !=
//         'undefined' && document.documentElement.clientWidth != 0)
//     {
//       tam = [
//           document.documentElement.clientWidth,
//           document.documentElement.clientHeight
//       ];
//     }
//     else   {
//       tam = [
//           document.getElementsByTagName('body')[0].clientWidth,
//           document.getElementsByTagName('body')[0].clientHeight
//       ];
//     }
//     return tam;
//   }


    function rotate(){
        var lastChild = $('.slider div:last-child').clone();
        // $('#test').html(lastChild)
        $('.slider div').removeClass('firsSlide');
        $('.slider div:last-child').remove();
        $('.slider').prepend(lastChild);
        $(lastChild).addClass('firstSlide');

      }
      
      window.setInterval(function(){
        rotate()
      }, 3000);
//prueba


// esta funcion atrapa los datos y los envia al correo
function Comprobar(obj)
{
    if ( !obj.Opciones[0].checked && !obj.Opciones[1].checked && !obj.Opciones[2].checked) {
            alert("Debe elegir una opción")
    
            return false;
    }
    return true 
}
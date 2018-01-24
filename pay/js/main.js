$(function () {

	// Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      };
})



  $('.dogovor-oferty').on('click', function (e) {
      e.preventDefault();
      $('#oferta-modal').slideToggle();

  });


   $('.close').on('click', function (  ) {
     $('#oferta-modal').slideUp();
  });


// validation for form
let form = document.querySelector('#form');
  var valid = true;
function validation (form) {

  function input (e) {
    if(e.target.getAttribute('name') === 'name') {
      if (e.target.value.length < 3) {
        e.target.classList.add('error');
        e.target.classList.remove('right');
      } else {
        e.target.classList.add('right');
        e.target.classList.remove('error');
      }
    }
    if(e.target.getAttribute('name') === 'phone') {
      if (e.target.value.length < 9) {
        e.target.classList.add('error');
        e.target.classList.remove('right');
      } else {
        e.target.classList.add('right');
        e.target.classList.remove('error');
      }
    }
    if(e.target.getAttribute('name') === 'email') {
        if ( (e.target.value.indexOf('.') === -1)
            || (e.target.value.indexOf('@') === -1) ) {
          e.target.classList.add('error');
          e.target.classList.remove('right');
        } else {
          e.target.classList.add('right');
          e.target.classList.remove('error');
        }
    }
  }

  function submit (e) {
     let children =  e.target.children; 
    for (let i = 0; i< children.length; i++) {
        if(children[i].getAttribute('name') === 'name') {
          if (children[i].value.length < 3) {
            children[i].classList.add('error');
            children[i].classList.remove('right');
            valid = false;
              e.preventDefault();

          } else {
            children[i].classList.add('right');
            children[i].classList.remove('error');
            valid = true;
          }
        }
        if(children[i].getAttribute('name') === 'phone') {
          if (children[i].value.length < 9) {
            children[i].classList.add('error');
            children[i].classList.remove('right');
              valid = false;
              e.preventDefault();

          } else {
            children[i].classList.add('right');
            children[i].classList.remove('error');
            valid = true;
          }
        }
        if(children[i].getAttribute('name') === 'email') {
            if ( (children[i].value.indexOf('.') === -1)
                || (children[i].value.indexOf('@') === -1) ) {
              children[i].classList.add('error');
              children[i].classList.remove('right');
                valid = false;
                e.preventDefault();

            } else {
              children[i].classList.add('right');
              children[i].classList.remove('error');
              valid = true;
            }
        }
      }
  }

  form.addEventListener('input', input);
  form.addEventListener('submit', submit); 
  return valid
};

validation(form);

// var submit =  function  (e) {
//   e.preventDefault();
//      var name = $(this).find('#name').val();
//      var phone = $(this).find('#phone').val();
//      var email = $(this).find('#email').val();
     
//      if(validation(form)) {
//         console.log(1);
//       setTimeout(function () {
//           console.log(2);
//           var form = document.querySelector('#form');
//           var event = new Event("submit");
//           form.removeEventListener('submit', submit );
//           form.dispatchEvent(event);
//       },2000)
//         console.log(3);
//      }
// };

// document.querySelector("#form").addEventListener("submit",  submit);





});

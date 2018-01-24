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

$('.free').on('click',function(e) {
  e.preventDefault();
  $('.popup').slideDown(500);
  $('.shadow').fadeIn();
});

$('html').one('mouseleave',function() {
  $('.popup__format').slideDown(500);
  $('.shadow').fadeIn();
});

$('.close').on('click',function () {
  $('.popup').fadeOut(600);
  $('.shadow').fadeOut(600);
})

$('.close__format').on('click',function () {
  $('.popup__format').fadeOut(600);
})


  $(document).on('mouseup', function (e){
    var div = $(".popup"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0 ) { 
      div.slideUp();
      $('.shadow').fadeOut(600);
    }
  });


  $(document).on('mouseup', function (e){
    var div = $(".popup__format"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0 ) { 
      div.slideUp();
      $('.shadow').fadeOut(600);
    }
  });


let headerForm = document.querySelector('.header__form');
let popupForm = document.querySelector('.popup__form');

function validation (form) {
  function input (e) {
    if(e.target.getAttribute('name') === 'first_name') {
      if (e.target.value.length < 3) {
        e.target.classList.add('error');
        e.target.classList.remove('right');
      } else {
        e.target.classList.add('right');
        e.target.classList.remove('error');
      }
    }
    if(e.target.getAttribute('name') === 'custom_zungphone') {
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
      var valid = true;
     let children =  e.target.children; 
    for (let i = 0; i< children.length; i++) {
        if(children[i].getAttribute('name') === 'first_name') {
          if (children[i].value.length < 3) {
            children[i].classList.add('error');
            children[i].classList.remove('right');

              e.preventDefault();
              valid = false;

          } else {
            children[i].classList.add('right');
            children[i].classList.remove('error');
            var name = children[i].value;
          }
        }
        if(children[i].getAttribute('name') === 'custom_zungphone') {
          if (children[i].value.length < 9) {
            children[i].classList.add('error');
            children[i].classList.remove('right');

              e.preventDefault();
              valid = false;

          } else {
            children[i].classList.add('right');
            children[i].classList.remove('error');
            var phone = children[i].value;
          }
        }
        if(children[i].getAttribute('name') === 'email') {
            if ( (children[i].value.indexOf('.') === -1)
                || (children[i].value.indexOf('@') === -1) ) {
              children[i].classList.add('error');
              children[i].classList.remove('right');

                e.preventDefault();
                valid = false;

            } else {
              children[i].classList.add('right');
              children[i].classList.remove('error');
              var email = children[i].value;
            }
        }
      }

      if(valid) {

       // e.preventDefault();
          var str =  e.target.classList.value;
       // console.log(str.substring(0, str.indexOf('_') ) );

        roistatGoal.reach({name: name, phone: phone, email: email, text: "Форма заказа", fields: {
          manager_id: '1',
          source: str.substring(0, str.indexOf('_') )
        }
      });
      }
  }

form.addEventListener('input', input);
form.addEventListener('submit', submit);  
};

 validation(headerForm);
 validation(popupForm);

//ANIMATION

    $.fn.animated = function(inEffect, outEffect) {
        $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            } else {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            };
        }, {
            offset: "100%"
        }).waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            } else {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            };
        }, {
            offset: -$(window).height()
        });
    };



});

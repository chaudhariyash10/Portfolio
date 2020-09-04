$(document).ready(function () {
  let $btns = $(".project-area .button-group button");

  $btns.click(function (e) {
    $(".project-area .button-group button").removeClass("active");
    e.target.classList.add("active");
    //Isotope Filter Code=========================================================================
    let selector = $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
      filter: selector,
    });
      //===========================================================================================

    return false;
  });
    
    $(".project-area .button-group #btn1").trigger("click");

  //Magnific PopUp Code=============================================================================

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    })
    //===============================================================================================
  
  //OWL Carousel=====================================================================================
  $(".site-main .about-area .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      544: {
        items: 2
      }
    }
    })
  //=================================================================================================

});

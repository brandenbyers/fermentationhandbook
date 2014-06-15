// Carousel
$(document).ready(function () {
    $("#home-projects").owlCarousel({

        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
});

// Flexslider
$(window).load(function () {
    $('#home-quotes').flexslider({
        animation: "fade",
        manualControls: ".quote-paging li",
        controlNav: "true",
        start: function (slider) {
            $('body').removeClass('loading');
        }
    });
});
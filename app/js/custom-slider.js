// Slider
$(document).ready(function () {
    var carousel = $("#carousel").waterwheelCarousel({
        flankingItems: 2,
        movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
        },
        movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
        },
        movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
        },
        movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
        },
        clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
        }
    });

    $('#s-prev').bind('click', function () {
        carousel.prev();
        return false
    });

    $('#s-next').bind('click', function () {
        carousel.next();
        return false;
    });

});

// Slider
$(document).ready(function () {
    var carousel = $("#carousel1").waterwheelCarousel({
        flankingItems: 1,
        // number tweeks to change apperance
        startingItem: 1, // item to place in the center of the carousel. Set to 0 for auto
        separation: 380, // distance between items in carousel
        separationMultiplier: 0.82, // multipled by separation distance to increase/decrease distance for each additional item
        horizonOffset: 0, // offset each item from the "horizon" by this amount (causes arching)
        horizonOffsetMultiplier: 1, // multipled by horizon offset to increase/decrease offset for each additional item
        sizeMultiplier: 0.75, // determines how drastically the size of each item changes
        opacityMultiplier: 1, // determines how drastically the opacity of each item changes
        horizon: 0, // how "far in" the horizontal/vertical horizon should be set from the container wall. 0 for auto

        movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
        },
        movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
        },
        movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
        },
        movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
        },
        clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
        }
    });

    $('#s-prev1').bind('click', function () {
        carousel.prev();
        return false
    });

    $('#s-next1').bind('click', function () {
        carousel.next();
        return false;
    });
});

$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 100);
});
$('.slider-block').slick({

    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3

            }
        }

    ]
});
$(function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 100,
        values: [0, 85],
        slide: function(event, ui) {
            $("#amount").val(ui.values[0] + " - " + ui.values[1] + " \u20AC");
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0) +
        " - " + $("#slider-range").slider("values", 1) + " \u20AC");
});
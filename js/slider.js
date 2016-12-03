$("#slider").slider(
{
            value:70,
            min: 50,
            max: 92,
            step: 1,
            slide: function(event, ui) {
                $("#slider-value").html(ui.value);
            }
}
);

$("#slider-value").html($('#slider').slider('value'));
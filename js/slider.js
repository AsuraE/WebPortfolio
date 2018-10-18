$(document).ready(content_changer);


// Hide content divs offscreen
// On navigation selection, animate current div below screen
// and animate select div to centre screen
function content_changer() 
{
    $("button").click(function() {
        var selected = $(this).val();
        $('.content').each(function() {
            var position = $(this).offset().top;

            if (position > 0 && position < $('#container').height()) {
                $(this).animate({top: '150%',}, 500);
            }
        })

        console.log(selected);
        $(selected).animate({top: '50%',}, 500);
    })
}
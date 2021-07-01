$(document).ready(function () {

    $('#threeicons').hover(function () {
        $('#threeicons').hide(function () {
            $('#threeicons').fadeOut(function () {
                $('#threeicons').show(function () {
                    $('#threeicons').fadeIn(function () {
                    });
                });
            });
        });
    });

    $('#onep').hide(function () {
        $('a').hover(function () {
            $('#onep').show(function () {
            });
        });
    });
    var x = $('#push').html();
    $('#onep').after(x);
    $('article').hide(function () {
        $('#onep').click(function () {
            $('article').toggle(1050);
        });
    });
    $('.coupon').hover(function () {
        $('.coupon').removeClass('selected');
        $(this).addClass('selected');
    });
    $('coupon').click(function () {
        $("p").text(function () {
            return "Sale Sale Sale: ";
        });
    });
    $('#clickme').click(function () {
        $('nav').append('append');
    });
    $('#ohno').click(function () {
        $('nav').before('before');
    });

  
$("input").click(function () {
    $("input:text").val("jQuery");
});

// cannot get this .attr to work even with TA help
// $('.red').click(function(){
//     $(".red").attr("color", "blue")
// })

$('#last').click(function () {
    alert("Unhand me");
});
});






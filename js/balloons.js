$(function(){
    var rand = Math.floor(Math.random() * 10);
    var attentionSeekers = [
        "animate__bounce", 
        "animate__flash", 
        "animate__pulse", 
        "animate__rubberBand", 
        "animate__shake", 
        "animate__swing", 
        "animate__tada", 
        "animate__wobble", 
        "animate__jello", 
        "animate__heartBeat"
    ];

    //randomize the attention seeker
    $("h1.animate__animated").addClass(attentionSeekers[rand]);

    //$('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible');
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
        $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
        $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    }); 

    $(".form-check-label").hover(function() {
        //remove the color class, add color style
        $("h1.animate__animated").removeClass('h1-color').css('color', $(this).attr("for"));
    }, function() {
        //set the color style to empty, then add the color class   
        $("h1.animate__animated").css('color', '').addClass('h1-color');
    })

    //toggle all balloons clicked
    $("#all").click(function() {
        $(".form-check-input").each(function() {
            if ($("#all").prop("checked")) {
                $(this).prop("checked", true).trigger("change");
            } else {
                $(this).prop("checked", false).trigger("change");
            }
        });
    });

    //submit button toast
    $("#submit").click(function() {
        var checked = [];
        //loop through checkboxes and if they're checked, add themself to the array
        $(".form-check-input").each(function() {
            if($(this).prop("checked")) {
                checked.push($(this));
            }
        });

        //loop through checked array to determine if we should toast
        if(checked.length < 1) {
            $("#toast").toast({ autohide: false}).toast("show");
        }
    });
});

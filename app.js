// $(document).ready(function () {
    $("<div></div>").appendTo("body");

    $("#btnSubmit").on('click', function (e) {
        e.preventDefault();
        alert("js is working");
        let $text = $('input[type="text"]').val();
        $("<h2>" + $text + "</h2>").appendTo("div");
        alert($text);
    });

    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function () {
        if ($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
        }
    });

    
$('div').hover(function(){
    $('div').mouseover(function(){
        $('h2').css('color', 'green')
    });
    $('div').mouseleave(function(){
        $('h2').css('color', 'black')
    });
})






// });
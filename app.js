$(document).ready(function () {
    
    // $("<div></div>").appendTo("body");
    $('<ul></ul>').appendTo('body');

    $("#btnSubmit").on('click', function (e) {
        e.preventDefault();
        alert("js is working");
        let $text = $('input[type="text"]').val();
        // $("<h2>" + $text + "</h2>").appendTo("div");
        $('<li>' + $text + '</li>').appendTo('ul');
        onClick();
        alert($text);
        remove();
    });

    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function () {
        if ($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
        }
    });
    // $('div').hover(function(){
    //     $('div').mouseover(function(){
    //         $('h2').css('color', 'red')
    //     });
    //     $('div').mouseleave(function(){
    //         $('h2').css('color', 'black')
    //     });
    // });
    function onClick() {
        $('li').click(function () {
            let color = ['red', 'blue', 'green', 'purple', 'yellow'];
            let newColor = Math.floor(Math.random() * color.length);
            $(this).css('color', color[newColor]);
        })
    };

    function remove() {
        $('li').dblclick(function () {
            $(this).remove();
        });
    };

});





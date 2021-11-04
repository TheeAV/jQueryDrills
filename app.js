$(document).ready(function () {
 $("<div></div>").appendTo("body");
 
 $("#btnSubmit").click(function () {
        alert("js is working");
        let $text = $(".iText").val();
        $("<h2>" + "#input" + "</h2>").appendTo("div");
        alert($text);  
    });

    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function () {
        if ($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
        }
    });
    

   


    



});

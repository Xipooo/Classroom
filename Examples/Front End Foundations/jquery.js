// $(document).ready(function () {
//     $("p").click(
//         function() {
//             $(this).css("color", "orange");
//         }
//     );
// });

$(document).ready(
    function(){
        $(".p1").hover(
            function() {
                $(this).css("font-family", "Times New Roman");
            },
            function() {
                $(this).css("font-family", "Georgia");
            }
        )
    }
)
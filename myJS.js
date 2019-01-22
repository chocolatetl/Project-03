
//------------------------------------------------------

$(function(){
    $('ul').on('click','.item',function(){
        $(".item").removeClass("active");
        $(this).addClass("active");
    });

//----------------------Button Up------------------------

    $("#up").on({
        click: function(){
        var elm = $(".active");
        var term = elm.prev();
        elm.prev().remove();
        elm.after(term);
        }
    });

//-----------------------Button Down----------------------

    $("#down").on('click',function(){
        var elm = $(".active");
        var term = elm.next();
        elm.next().remove();
        elm.before(term);
        // if (term.length == 0){
        //     $('#down').attr("disabled","disabled");
        // }
    });
});




/*

//Button-up đổi màu

$(function(){
    $("#up").click(function(){
        var elm = $(".active");
        elm.prev().addClass("active");
        elm.removeClass("active");
    })
});


//Button-down đổi màu

$(function(){
    $("#down").click(function(){
        var elm = $(".active");
        elm.next().addClass("active");
        elm.removeClass("active");
    })
});

*/

//on(): Đính kèm một hàm xử lý sự kiện cho một hoặc nhiều sự kiện tới một thành phần được chọn.
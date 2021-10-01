$(".sk-noi-bo").click(function () {
    $(".sukien-nv").show();
    $(".sk22").show();
    $(".sk33").hide();
    $(".sukien-nv.sk11").hide();
    $(".caidat-doingoai").hide();
})

$(".sknb2").click(function () {
    $(".sk22").hide();
    $(".sukien-nv.sk11").show();
})


$(".sk-doi-ngoai").click(function () {
    $(".sk33").show();
    $(".sukien-nv.sk11").hide();
    $(".caidat-doingoai").show();
    $(".caidat-doinoi").hide();
})
$('.imgsk_tvtg').hover(function () {
    $(this).parents('.show-hide').find('.hvshow').toggle();
})

$('img.img_xoask').click(function () {
    $(".xoa-sk-nhan-vien").show();
})

$('.btn_huy').click(function () {
    $(".xoa-sk-nhan-vien").hide();
})

$('.btl-xoa-sk-nhan-vien').click(function () {
    $(".xoa-sk-nhan-vien").hide();
    $(".xoa-sknv").show();
})
$(".btn-da-xoa").click(function () {
    $(".xoa-sknv").hide();
})
$(".close_detl").click(function () {
    $(".xoa-sk-nhan-vien").hide();
})

$(".btn_huy").click(function () {
    $(".xoa-sknv").hide();
    $(".vd8_chinhsua_sk").hide();
})
$(".caidat-doinoi p.xem-chi-tiet").click(function () {
    $(".vd7_xemchitiet_sk").show();
})
$("img.close_detl").click(function () {
    $(".vd7_xemchitiet_sk").hide();
})
$(".btn_huy").click(function () {
    $(".vd7_xemchitiet_sk").hide();
})




$("img.imgskgiaoluu").click(function () {
    $(".vd8_chinhsua_sk").show();
})
$("img.close_detl").click(function () {
    $(".vd8_chinhsua_sk").hide();
})


$("#sk22 .text-gd").click(function () {
    $(".vd7_xemchitiet_sk").show()
})


$(".xem-chi-tiet .xem-doingoai").click(function () {
    $(".vd9_xemchitiet_dn").show();
})
/////////////////

$(".sk-noi-bo").click(function () {
    $(".sukien-nv").show();
    $(".sk22").show();
    $(".sk33").hide();
    $(".sukien-nv.sk11").hide();
    $(".caidat-doingoai").hide();
})

$(".sknb2").click(function () {
    $(".sk22").hide();
    $(".sukien-nv.sk11").show();
})


$(".sk-doi-ngoai").click(function () {
    $(".sk33").show();
    $(".sukien-nv.sk11").hide();
    $(".caidat-doingoai").show();
    $(".caidat-doinoi").hide();
})

$('.imgsk_tvtg').hover(function () {
    $(this).parents('.show-hide').find('.hvshow').toggle();
})


$('img.img_xoask').click(function () {
    $(".xoa-sk-nhan-vien").show();
})

$('.btn_huy').click(function () {
    $(".xoa-sk-nhan-vien").hide();
})


$('.btl-xoa-sk-nhan-vien').click(function () {
    $(".xoa-sk-nhan-vien").hide();
    $(".xoa-sknv").show();
})

$(".btn-da-xoa").click(function () {
    $(".xoa-sknv").hide();
})
$(".close_detl").click(function () {
    $(".xoa-sk-nhan-vien").hide();
})

$(".btn_huy").click(function () {
    $(".xoa-sknv").hide();
    $(".vd8_chinhsua_sk").hide();
})


$("p.tham-gia").click(function () {
    $(".thamgia-sknv").show();
})
$("img.close_detl").click(function () {
    $(".vd7_xemchitiet_sk").hide();
})
$(".btn_huy").click(function () {
    $(".vd7_xemchitiet_sk").hide();
})

$("button.btn_luu.luu-thong").click(function () {
    // $(".luu-sknv").show();
 
})


$("img.imgskgiaoluu").click(function () {
    $(".vd8_chinhsua_sk").show();
})
$("img.close_detl").click(function () {
    $(".vd8_chinhsua_sk").hide();
})
// doi ngoai
$(".xem-chi-tiet .xem-doingoai").click(function () {
    $(".vd9_xemchitiet_dn").show();
})

$('.imgsk_tvtg').hover(function () {
    $(this).parents('.show-hide').find('.hvshow').toggle();
})

$(".xem-doingoai").click(function () {
    $(".vd9_xemchitiet_dn").show();
})


$(".vd9_xemchitiet_dn img.close_detl").click(function () {
    $(".vd9_xemchitiet_dn").hide();
})

$(".vd9_xemchitiet_dn button.btn_huy").click(function () {
    $(".vd9_xemchitiet_dn").hide();
})

$(".vd9_xemchitiet_dn img.xemchitiet-dn").click(function () {
    $(".vd10_chinhsua_sk").show();
    
})
$(".vd10_chinhsua_sk img.close_detl").click(function () {
    $(".vd10_chinhsua_sk").hide();
})

$(".vd10_chinhsua_sk button.btn_huy").click(function () {
    $(".vd10_chinhsua_sk").hide();
})



$('.vd10_chinhsua_sk img.hienlethithu').hover(function () {
    $(this).parents('.hai-img').find('.xsukiendn').toggle();
})

$("img.xsukiendn").click(function () {
    $(this).parent().parent().hide();
})

$("img.xsukiendn").click(function () {
    $(this).parent().parent().hide();
})

$(".sknb2 .skdn3").click(function () {
    $(".caidat-doingoai").hide();
    $(".caidat-doinoi").show();
})

$(window).click(function (e) {
    if ($(e.target).is(".xoa-sknv")) {
        $(".xoa-sknv").hide();
    // }
    // if ($(e.target).is(".luu-sknv")) {
    //     $(".luu-sknv").hide();
    }
    if ($(e.target).is(".thamgia-sknv")) {
        $(".thamgia-sknv").hide();
    }
    if ($(e.target).is(".xoa-sknv")) {
        $(".xoa-sknv").hide();
    }
   
    
    if ($(e.target).is(".vd9_xemchitiet_dn")) {
        $(".vd9_xemchitiet_dn").hide();
    }
    if ($(e.target).is(".vd10_chinhsua_sk")) {
        $(".vd10_chinhsua_sk").hide();
    }
     if ($(e.target).is(".vd7_xemchitiet_sk")) {
        $(".vd7_xemchitiet_sk").hide();
    }
    if ($(e.target).is(".vd8_chinhsua_sk")) {
        $(".vd8_chinhsua_sk").hide();
    }
     if ($(e.target).is(".xoa-sk-nhan-vien")) {
        $(".xoa-sk-nhan-vien").hide();
    }

});

if ($(window).width() <= 480) {
    $("p.text-gd").click(function(){
        $(".vd7_xemchitiet_sk").show();
    })
};

 
$(document).ready(function(){
 $("a.athems").click(function(){
   $('#table-vd10dn').before('<tr><td></td><td><input class="tr_them_km" type="" name="" placeholder="Nhập họ tên/"></td><td><input class="tr_them_km" type="" name="" value="" placeholder="Nhập công ty/"></td><td><input class="tr_them_km" type="" name="" value="" placeholder="Nhập chức vụ/"></td><td></td></tr>');
});
});

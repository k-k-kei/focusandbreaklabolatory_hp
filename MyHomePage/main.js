$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var headerHeight = 150; //固定ヘッダーの高さ+70px(余白を多めに設けるために追加)
    var position = target.offset().top - headerHeight;//ターゲットの座標からヘッダの高さ分引く
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
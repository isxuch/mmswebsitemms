window.onload = function() {
  var typeName = getQueryString('type');
  var pathname = window.location.pathname;
  var path = '/website/page/index/index.html';
  if (pathname == path) {
    window.onscroll = function () {
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      if(t<770){
        $('#navigation ul li').eq(0).attr('class', 'navActive').siblings().removeAttr('class');
      }
      else if(t>770&&t<4903){
        $('#navigation ul li').eq(1).attr('class', 'navActive').siblings().removeAttr('class');
      }
      else if(t>=4903){
        $('#navigation ul li').eq(2).attr('class', 'navActive').siblings().removeAttr('class');
      }
    }
    if (typeName) {
      if(typeName=='home'){
        $('#navigation ul li').eq(0).attr('class', 'navActive');
      }
      else if(typeName=='resourceId'){
        $('#navigation ul li').eq(1).attr('class', 'navActive');
      }
      else{
        $('#navigation ul li').eq(2).attr('class', 'navActive');
      }
      $('html,body').animate({
        scrollTop: $('#' + typeName).offset().top - 100
      }, 800);
    } else {
      $('#navigation ul li').eq(0).attr('class', 'navActive');
    }
  }else{
    $('#navigation ul li:last').attr('class', 'navActive');
  }
  $('#navigation').on('click', 'li', function() {
    $(this).attr('class', 'navActive').siblings().removeAttr('class');
    var div = $(this).find('a').attr("data-to");
    console.log(div);
    if (div == 'aboutId') {
      window.location.href = '../about/about.html?type=' + div;
    } else {
      if (pathname != path) {
        window.location.href = '../index/index.html?type=' + div;
      } else {
        $('html,body').animate({
          scrollTop: $('#' + div).offset().top - 100
        }, 800);
      }
    }
  })
}
// 获取链接拼接的参数
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

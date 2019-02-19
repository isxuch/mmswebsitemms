(function(){
  var Website = {
    // 初始化轮播如图
    initSwiper: function(){
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        paginationClickable: true,
        // parallax: true,
        autoplayDisableOnInteraction: false,
        // grabCursor: true,
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
    initCooperationSwiper: function(){
      var mySwiper2 = new Swiper ('#coBranding', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.coBranding-slides-r',
          prevEl: '.coBranding-slides-l',
        },
      })
    },
    // 获取默认数据
    getDefaultData: function(){
      var _this = this;
      AjaxUtil.get('../../static/default.json', null, function(result) {
        // 渲染头部链接
        var html01 = template("test", result);
        document.getElementById("navigation").innerHTML = html01;
        // 渲染轮播图
        var html02 = template("SlideTemplate", result);
        document.getElementById("Slide").innerHTML = html02;
        _this.initSwiper();
        // 阅读资源
        var html03 = template("readContentSlideTemplate", result);
        var html03_02 = template("readContentSlideTemplate_02", result);
        document.getElementById("readContent").innerHTML = html03;
        document.getElementById("educationContent").innerHTML = html03_02;
        _this.amplification();
        // 案例
        var html04 = template("caseTemplate", result);
        var html04_02 = template("caseTemplate_02", result);
        document.getElementById("caseYc").innerHTML = html04;
        document.getElementById("casePp").innerHTML = html04_02;
        // 精品专栏
        var html05 = template("boutiqueTemplate", result);
        document.getElementById("boutiqueId").innerHTML = html05;
        // 精选文章一
        var html06 = template("choicenessArticleTemplate_01", result);
        document.getElementById("articleList_01").innerHTML = html06;
        // 精选文章二
        var html07 = template("choicenessArticleTemplate_02", result);
        document.getElementById("articleList_02").innerHTML = html07;
        // 教育重点栏目
        var html08 = template("emphasisTemplate", result);
        document.getElementById("emphasis").innerHTML = html08;
        // 品牌合作
        var html09 = template("wrapperListTemplate", result);
        document.getElementById("wrapperList").innerHTML = html09;
        _this.initCooperationSwiper();
      },function(err){
        console.log(err,'123')
      })
    },
    // 手风琴
    amplification: function(){
      var _this = this;
      var cardAreaList = $('#readContent .card-area li');
      var cardAreaList_02 = $('#educationContent .card-area li');
      var centerNum = cardAreaList.length;
      cardAreaList.each(function(index, el) {
        if(index==centerNum-3){
          $(el).attr('class', 'card-item active');
        }

        $(el).on("mouseenter", function() {
          $(this).addClass("active").siblings().removeClass("active");
        })
      });
      cardAreaList_02.each(function(index, el) {
        if(index==centerNum-3){
          $(el).attr('class', 'card-item active');
        }
        if($(el).hasClass("active")){
          $(el).siblings().find('.small-car').css('display','block');
          $(el).siblings().find('.big-car').css('display','none');
          $(el).find('.big-car').css('display','block');
          $(el).find('.small-car').css('display','none');
        }
        $(el).on("mouseenter", function() {
          $(this).addClass("active").siblings().removeClass("active");
          if($(el).hasClass("active")){
            $(el).siblings().find('.small-car').css('display','block');
            $(el).siblings().find('.big-car').css('display','none');
            $(el).find('.big-car').css('display','block');
            $(el).find('.small-car').css('display','none');
          }
        })
      });
    },
  }
  $(function(){
    Website.getDefaultData();
    // $('#navigation').on('click','li',function(){
    //     var div = $(this).find('a').attr("data-to");
    //     $('html,body').animate({scrollTop:$('#'+div).offset().top-100}, 800);
    // });
  });
  this.Website = Website;
}).call(this)

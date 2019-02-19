(function(){
  var AboutPage = {
    getAboutDefaultData: function(){
      var _this = this;
      AjaxUtil.get('../../static/default.json', null, function(result) {
        // 渲染头部链接
        var html01 = template("test", result);
        document.getElementById("navigation").innerHTML = html01;
      },function(err){})
    }
  }
  this.AboutPage = AboutPage;
  $(function(){
    AboutPage.getAboutDefaultData()
  })
}).call(this)

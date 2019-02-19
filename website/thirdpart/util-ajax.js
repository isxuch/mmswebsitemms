(function(){
    var AjaxUtil = this.AjaxUtil = {
        request: function(url, type, data, success, error, async){
            var _this = this;
            async = typeof(async) == 'undefined' || async;
            $.ajax({
                type : type,
                url : url,
                async: async,
                data : data,
                dataType : "json",
                success : function(data) {
                        success(data);
                },
                error : function(xhr, textstatus, msg) {
                    error && error(xhr, textstatus, msg);
                }
            });
        },
        get: function(url, data, success, error, async){
            this.request(url, "GET", data, success, error, async);
        },
        put: function(url, data, success, error, async){
            this.request(url, "PUT", data, success, error, async);
        },
        post: function(url, data, success, error, async){
            this.request(url, "POST", data, success, error, async);
        },
        delet: function(url, data, success, error, async){
            this.request(url, "DELETE", data, success, error, async);
        },
        xmlDomload:function (url,data,fn,type) {
            var xmlResquest = new XMLHttpRequest();
            xmlResquest.open(type || 'GET', url+'?'+data, true);
            xmlResquest.setRequestHeader("Content-type", "application/json");
            xmlResquest.setRequestHeader("file-type", "excel");
            xmlResquest.responseType = "blob";
            xmlResquest.onload = function () {
                var content = xmlResquest.response;
                var elink = document.createElement('a');
                var name = xmlResquest.getResponseHeader("Content-Disposition") || '未命名文件.xls',nameIndex=name.indexOf('=')+1;
                elink.download = decodeURI(name.substr(nameIndex));
                elink.style.display = 'none';
                var blob = new Blob([content]);
                elink.href = URL.createObjectURL(blob);
                document.body.appendChild(elink);
                elink.click();
                document.body.removeChild(elink);
                fn&&fn();
            };
            xmlResquest.send();
        }
    };
})(this);
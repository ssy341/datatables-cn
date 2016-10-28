$(document).ready(function(){
    //配置DataTables默认参数
    $.extend(true, $.fn.dataTable.defaults, {
        "language": {
            "url": "/assets/Chinese.txt"
        },
        "dom": "l<'#toolbar'>frtip"
    });

//DataTables初始化
    $("#issueTable").DataTable({
        ajax: {
            url: "https://api.github.com/repos/ssy341/datatables-cn/issues",
            dataSrc: ""
        },
        //默认最后一列（最后更新时间）降序排列
        order: [[ 2, "desc" ]],
        columnDefs: [
            {
                targets: 2,
                data: "updated_at",
                title: "最后更新时间",
                render: function (data, type, row, meta) {
                    return new Date(Date.parse(data)).Format("yyyy-MM-dd hh:mm:ss");
                }
            },
            {
                targets: 1,
                data: null,
                title: "发表人",
                render: function (data, type, row, meta) {
                    return "<a href='" + row.user.html_url + "' target='_blank'>" + row.user.login + "</a>"
                }
            },
            {
                targets: 0,
                data: "title",
                title: "问题",
                render: function (data, type, row, meta) {
                    var labels = "";
                    if (row.labels.length) {
                        labels += "【";
                        for (var j = 0, labelslen = row.labels.length; j < labelslen; j++) {
                            labels += "<span style='color:#" + row.labels[j].color + "' >" +
                                row.labels[j].name + "</span>";
                            if (j != labelslen - 1) {
                                labels += ",";
                            }
                        }
                        labels += "】";
                    }
                    var hot = "";
                    if(labels.indexOf("置顶")>0){
                        hot = "<span class='hot'></span>"
                    }
                    return "<a href='" + row.html_url + "' target='_blank'>" + row.title + "</a>" + labels +
                        "<i class='icon Hui-iconfont'>&#xe622;</i>"+row.comments +hot;
                }
            }
        ],
        initComplete:function(){
            $("#toolbar").css("width","100px").css("display","inline").css("margin-left","10px");
            $("#toolbar").append("<a href='https://github.com/ssy341/datatables-cn/issues/new' " +
                "class='btn btn-primary btn-sm'>我也要提问</a>");
            $("#toolbar").append("<a href='example/diy.html' " +
                "class='btn btn-default btn-sm'>DIY</a>");
        }
    });
});

Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1,
        //月份
        "d+": this.getDate(),
        //日
        "h+": this.getHours(),
        //小时
        "m+": this.getMinutes(),
        //分
        "s+": this.getSeconds(),
        //秒
        "q+": Math.floor((this.getMonth() + 3) / 3),
        //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};
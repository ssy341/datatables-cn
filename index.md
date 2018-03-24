---
title: "开始使用DataTables"
keywords: 快速入门 如何使用DataTable
sidebar: mydoc_sidebar
permalink: index.html
summary: 跟着下面的步骤可以快速把你的Table标签变成一个功能强大的表格.
csss: [
    assets/datatables/1.10.16/datatables.min.css,
    assets/datatables/dataTables.bootstrap.css,
    assets/datatables/responsive/2.2.1/css/responsive.dataTables.min.css
]
scripts: [
    assets/datatables/1.10.16/datatables.min.js,
    assets/datatables/responsive/2.2.1/js/dataTables.responsive.min.js,
]
---

<style>
    .unread {
        box-shadow: 2px 0 0 #4078c0 inset;
    }
    #issueTable tbody td{
        padding: 8px 30px;
        line-height: 1.42857143;
        vertical-align: top;
        border-top: 1px solid #ddd;
    }
    table.dataTable thead {
        background-color: #777;
    }
    table > thead > tr > th {
        vertical-align: bottom;
        border-bottom: 2px solid #ddd;
        text-transform: none;
        background-color: #777;
        color: white;
        text-align: left;
    }
</style>



## 第一步：引入下面两个文件

css:
```html
//cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css
```

js:
```html
//cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js
```

## 第二步：在页面上执行下面代码

```javascript
$(document).ready( function () {
    $('#myTable').DataTable();
} );
```

## 第三步：最终效果


<table class="display" id="issueTable" style="width:100%"></table>


开个玩笑，如果只是第二步的代码就能达到上面的效果，那简直是厉害了。
这里我是把Github的issue用DataTable显示出来，方便大家提问交流。代码详见最下面，允许我调皮一下:)。

下面才是DataTable渲染表格的实际效果

## 第四步：拨开云雾见青天

<table id="example" class="display" style="width:100%"><thead><tr><th>Name</th><th>Position</th><th>Office</th><th>Age</th><th>Start date</th><th>Salary</th></tr></thead><tbody><tr><td>Tiger Nixon</td><td>System Architect</td><td>Edinburgh</td><td>61</td><td>2011/04/25</td><td>$320,800</td></tr><tr><td>Garrett Winters</td><td>Accountant</td><td>Tokyo</td><td>63</td><td>2011/07/25</td><td>$170,750</td></tr><tr><td>Ashton Cox</td><td>Junior Technical Author</td><td>San Francisco</td><td>66</td><td>2009/01/12</td><td>$86,000</td></tr><tr><td>Cedric Kelly</td><td>Senior Javascript Developer</td><td>Edinburgh</td><td>22</td><td>2012/03/29</td><td>$433,060</td></tr><tr><td>Airi Satou</td><td>Accountant</td><td>Tokyo</td><td>33</td><td>2008/11/28</td><td>$162,700</td></tr><tr><td>Brielle Williamson</td><td>Integration Specialist</td><td>New York</td><td>61</td><td>2012/12/02</td><td>$372,000</td></tr><tr><td>Herrod Chandler</td><td>Sales Assistant</td><td>San Francisco</td><td>59</td><td>2012/08/06</td><td>$137,500</td></tr><tr><td>Rhona Davidson</td><td>Integration Specialist</td><td>Tokyo</td><td>55</td><td>2010/10/14</td><td>$327,900</td></tr><tr><td>Colleen Hurst</td><td>Javascript Developer</td><td>San Francisco</td><td>39</td><td>2009/09/15</td><td>$205,500</td></tr><tr><td>Sonya Frost</td><td>Software Engineer</td><td>Edinburgh</td><td>23</td><td>2008/12/13</td><td>$103,600</td></tr><tr><td>Jena Gaines</td><td>Office Manager</td><td>London</td><td>30</td><td>2008/12/19</td><td>$90,560</td></tr><tr><td>Quinn Flynn</td><td>Support Lead</td><td>Edinburgh</td><td>22</td><td>2013/03/03</td><td>$342,000</td></tr><tr><td>Charde Marshall</td><td>Regional Director</td><td>San Francisco</td><td>36</td><td>2008/10/16</td><td>$470,600</td></tr><tr><td>Haley Kennedy</td><td>Senior Marketing Designer</td><td>London</td><td>43</td><td>2012/12/18</td><td>$313,500</td></tr><tr><td>Tatyana Fitzpatrick</td><td>Regional Director</td><td>London</td><td>19</td><td>2010/03/17</td><td>$385,750</td></tr><tr><td>Michael Silva</td><td>Marketing Designer</td><td>London</td><td>66</td><td>2012/11/27</td><td>$198,500</td></tr><tr><td>Paul Byrd</td><td>Chief Financial Officer (CFO)</td><td>New York</td><td>64</td><td>2010/06/09</td><td>$725,000</td></tr><tr><td>Gloria Little</td><td>Systems Administrator</td><td>New York</td><td>59</td><td>2009/04/10</td><td>$237,500</td></tr><tr><td>Bradley Greer</td><td>Software Engineer</td><td>London</td><td>41</td><td>2012/10/13</td><td>$132,000</td></tr><tr><td>Dai Rios</td><td>Personnel Lead</td><td>Edinburgh</td><td>35</td><td>2012/09/26</td><td>$217,500</td></tr><tr><td>Jenette Caldwell</td><td>Development Lead</td><td>New York</td><td>30</td><td>2011/09/03</td><td>$345,000</td></tr><tr><td>Yuri Berry</td><td>Chief Marketing Officer (CMO)</td><td>New York</td><td>40</td><td>2009/06/25</td><td>$675,000</td></tr><tr><td>Caesar Vance</td><td>Pre-Sales Support</td><td>New York</td><td>21</td><td>2011/12/12</td><td>$106,450</td></tr><tr><td>Doris Wilder</td><td>Sales Assistant</td><td>Sidney</td><td>23</td><td>2010/09/20</td><td>$85,600</td></tr><tr><td>Angelica Ramos</td><td>Chief Executive Officer (CEO)</td><td>London</td><td>47</td><td>2009/10/09</td><td>$1,200,000</td></tr><tr><td>Gavin Joyce</td><td>Developer</td><td>Edinburgh</td><td>42</td><td>2010/12/22</td><td>$92,575</td></tr><tr><td>Jennifer Chang</td><td>Regional Director</td><td>Singapore</td><td>28</td><td>2010/11/14</td><td>$357,650</td></tr><tr><td>Brenden Wagner</td><td>Software Engineer</td><td>San Francisco</td><td>28</td><td>2011/06/07</td><td>$206,850</td></tr><tr><td>Fiona Green</td><td>Chief Operating Officer (COO)</td><td>San Francisco</td><td>48</td><td>2010/03/11</td><td>$850,000</td></tr><tr><td>Shou Itou</td><td>Regional Marketing</td><td>Tokyo</td><td>20</td><td>2011/08/14</td><td>$163,000</td></tr><tr><td>Michelle House</td><td>Integration Specialist</td><td>Sidney</td><td>37</td><td>2011/06/02</td><td>$95,400</td></tr><tr><td>Suki Burks</td><td>Developer</td><td>London</td><td>53</td><td>2009/10/22</td><td>$114,500</td></tr><tr><td>Prescott Bartlett</td><td>Technical Author</td><td>London</td><td>27</td><td>2011/05/07</td><td>$145,000</td></tr><tr><td>Gavin Cortez</td><td>Team Leader</td><td>San Francisco</td><td>22</td><td>2008/10/26</td><td>$235,500</td></tr><tr><td>Martena Mccray</td><td>Post-Sales support</td><td>Edinburgh</td><td>46</td><td>2011/03/09</td><td>$324,050</td></tr><tr><td>Unity Butler</td><td>Marketing Designer</td><td>San Francisco</td><td>47</td><td>2009/12/09</td><td>$85,675</td></tr><tr><td>Howard Hatfield</td><td>Office Manager</td><td>San Francisco</td><td>51</td><td>2008/12/16</td><td>$164,500</td></tr><tr><td>Hope Fuentes</td><td>Secretary</td><td>San Francisco</td><td>41</td><td>2010/02/12</td><td>$109,850</td></tr><tr><td>Vivian Harrell</td><td>Financial Controller</td><td>San Francisco</td><td>62</td><td>2009/02/14</td><td>$452,500</td></tr><tr><td>Timothy Mooney</td><td>Office Manager</td><td>London</td><td>37</td><td>2008/12/11</td><td>$136,200</td></tr><tr><td>Jackson Bradshaw</td><td>Director</td><td>New York</td><td>65</td><td>2008/09/26</td><td>$645,750</td></tr><tr><td>Olivia Liang</td><td>Support Engineer</td><td>Singapore</td><td>64</td><td>2011/02/03</td><td>$234,500</td></tr><tr><td>Bruno Nash</td><td>Software Engineer</td><td>London</td><td>38</td><td>2011/05/03</td><td>$163,500</td></tr><tr><td>Sakura Yamamoto</td><td>Support Engineer</td><td>Tokyo</td><td>37</td><td>2009/08/19</td><td>$139,575</td></tr><tr><td>Thor Walton</td><td>Developer</td><td>New York</td><td>61</td><td>2013/08/11</td><td>$98,540</td></tr><tr><td>Finn Camacho</td><td>Support Engineer</td><td>San Francisco</td><td>47</td><td>2009/07/07</td><td>$87,500</td></tr><tr><td>Serge Baldwin</td><td>Data Coordinator</td><td>Singapore</td><td>64</td><td>2012/04/09</td><td>$138,575</td></tr><tr><td>Zenaida Frank</td><td>Software Engineer</td><td>New York</td><td>63</td><td>2010/01/04</td><td>$125,250</td></tr><tr><td>Zorita Serrano</td><td>Software Engineer</td><td>San Francisco</td><td>56</td><td>2012/06/01</td><td>$115,000</td></tr><tr><td>Jennifer Acosta</td><td>Junior Javascript Developer</td><td>Edinburgh</td><td>43</td><td>2013/02/01</td><td>$75,650</td></tr><tr><td>Cara Stevens</td><td>Sales Assistant</td><td>New York</td><td>46</td><td>2011/12/06</td><td>$145,600</td></tr><tr><td>Hermione Butler</td><td>Regional Director</td><td>London</td><td>47</td><td>2011/03/21</td><td>$356,250</td></tr><tr><td>Lael Greer</td><td>Systems Administrator</td><td>London</td><td>21</td><td>2009/02/27</td><td>$103,500</td></tr><tr><td>Jonas Alexander</td><td>Developer</td><td>San Francisco</td><td>30</td><td>2010/07/14</td><td>$86,500</td></tr><tr><td>Shad Decker</td><td>Regional Director</td><td>Edinburgh</td><td>51</td><td>2008/11/13</td><td>$183,000</td></tr><tr><td>Michael Bruce</td><td>Javascript Developer</td><td>Singapore</td><td>29</td><td>2011/06/27</td><td>$183,000</td></tr><tr><td>Donna Snider</td><td>Customer Support</td><td>New York</td><td>27</td><td>2011/01/25</td><td>$112,000</td></tr></tbody><tfoot><tr><th>Name</th><th>Position</th><th>Office</th><th>Age</th><th>Start date</th><th>Salary</th></tr></tfoot></table>


是不是比我弄的要漂亮很多？我甘拜下风，确实比我弄的好看，但是这里作者也调皮了，官网首页给的效果（也就是上面你看到的效果），实际上
不是一行代码完成的，因为它还有一个隐藏的功能，当你浏览器缩小的时候，你再看看效果？是不是很酷炫？作者在这里还使用了插件responsive，
能根据浏览器显示区域的大小，动态调整表格的显示方式，如果只是第二步的代码，是不能达到动态改变的。
下面是本实例的最终代码：

增加responsive所需要的js和css：

css:
```html
//cdn.datatables.net/responsive/2.2.1/css/responsive.dataTables.min.css
```

js:

```html
//cdn.datatables.net/responsive/2.2.1/js/dataTables.responsive.min.js
```

初始化代码：
```javascript
$('#example')
    .addClass( 'nowrap' )
    .DataTable( {
        responsive: true,
        columnDefs: [
            { targets: [-1, -3], className: 'dt-body-right' }
        ]
    });
```

以上就是一个入门的例子的三部曲，是不是觉得很强大呢？赶紧试试吧！

对了还有我说的Github issue的例子的代码，不用担心，我没有忘记，先看一则广告:)


```javascript
var githubTable;
$(document).ready(function () {

    //配置DataTables默认参数
    $.extend(true, $.fn.dataTable.defaults, {
        //国际化
        "language": {
            "url": "{{site.baseurl}}assets/datatables/Chinese.txt"
        }
    });

    //issue表格初始化
    githubTable = $("#issueTable").addClass( 'nowrap' ).DataTable({
        dom: "l<'#toolbar'>frtip",
        responsive: true,
        //调用github api 获取issues 数据
        ajax: {
            url: "https://api.github.com/repos/ssy341/datatables-cn/issues",
            dataSrc: ""
        },
        //默认最后一列（最后更新时间）降序排列
        order: [[4, "desc"]],
        //行被创建回调
        createdRow: function (row, data, dataIndex) {
            var updated_at = new Date(Date.parse(data.updated_at)).Format("yyyy-MM-dd hh:mm:ss");
            updated_at = new Date(updated_at).getTime();
            var current = new Date().getTime();
            var bl = current - updated_at;
            var s = 5 * 24 * 60 * 60 * 1000;
            //最后更新日期在最近5天则突出显示
            if (bl < s) {
                $(row).addClass('unread');
            }
        },
        //行创建完成后回调
        rowCallback: function (row, data, index) {
            var tags = $(row).find("td:eq(1)");
            if (tags.text().indexOf("置顶") > 0) {
                var title = $(row).find("td:eq(0)");
                var hot = "<span class='hot'></span>";
                title.html(title.html() + hot);
            }
        },
        columnDefs: [
            { targets: [-1, -3], className: 'dt-body-right' },
            {
                targets: 4,
                data: "updated_at",
                title: "更新时间",
                render: function (data, type, row, meta) {
                    return new Date(Date.parse(data)).Format("yyyy-MM-dd hh:mm:ss");
                }
            },
            {
                targets: 3,
                data: null,
                title: "发表人",
                render: function (data, type, row, meta) {
                    return "<a href='" + row.user.html_url +
                            "' target='_blank'>" + row.user.login + "</a>";
                }
            },
            {
                targets: 2,
                data: "comments",
                title: "评论数",
                render: function (data, type, row, meta) {
                    var comments = data + "<i class='icon-comment'></i>";
                    return comments;
                }
            },
            {
                targets: 1,
                data: null,
                title: "标签",
                render: function (data, type, row, meta) {
                    var labels = "";
                    if (row.labels.length) {
                        for (var j = 0, labelslen = row.labels.length; j < labelslen; j++) {
                            labels += "<span style='color:#" + row.labels[j].color + "' >" +
                                    row.labels[j].name + "</span>";
                            if (j != labelslen - 1) {
                                labels += ",";
                            }
                        }
                    }
                    return labels;
                }
            },
            {
                targets: 0,
                data: "title",
                title: "issue",
                render: function (data, type, row, meta) {
                    var title = "<a href='" + row.html_url +
                            "' target='_blank'>" + row.title + "</a>";
                    return title;
                }
            }
        ],
        initComplete: function () {
            //表格加载完毕，手动添加按钮到表格上
            $("#toolbar").css("width", "100px").css("display", "inline").css("margin-left", "10px");
            $("#toolbar").append("<a href='https://github.com/ssy341/datatables-cn/issues/new' " +
                    "class='btn btn-primary btn-sm' target='_blank'>我有问题</a>");
            $("#toolbar").append("<a href='/example/diy.html' " +
                    "class='btn btn-default btn-sm' style='margin-left: 5px' target='_blank'>DIY</a>");
            $("#toolbar").append("<a href='javascript:void(0);' " +
                    "class='btn btn-default btn-sm closedIssue' " +
                    "style='margin-left: 5px;color:#009900'>查看已解决问题</a>");
           

            //加载已经关闭的问题
            $(".closedIssue").clickToggle(function () {
                //调用url方法切换dt的数据源
                githubTable.ajax.url("https://api.github.com/repos/ssy341/datatables-cn/issues?state=closed").load();
                $(this).text("查看未解决问题").css("color", "#FF0000");
            }, function () {
                githubTable.ajax.url("https://api.github.com/repos/ssy341/datatables-cn/issues").load();
                $(this).text("查看已解决问题").css("color", "#009900");
            });
        }
    });
});

//时间格式化
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

//事件来回切换方法
//solve this
//reference http://stackoverflow.com/questions/4911577/jquery-click-toggle-between-two-functions
(function ($) {
    $.fn.clickToggle = function (func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function () {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));
```

跟作者的代码没法比较，人家一行解决，我要170行才能解决。之所以在首页弄这个例子，也希望小伙伴能够了解到DataTable的灵活性，代码是变多了，但更能满足
我们的需要，如果什么都集成好了，去改动就很麻烦了。


<script>
    var githubTable;
    $(document).ready(function () {
    
        $('#example')
                .addClass( 'nowrap' )
                .dataTable( {
                    responsive: true,
                    columnDefs: [
                        { targets: [-1, -3], className: 'dt-body-right' }
                    ]
                } );

        //配置DataTables默认参数
        $.extend(true, $.fn.dataTable.defaults, {
            //国际化
            "language": {
                "url": "{{site.baseurl}}assets/datatables/Chinese.txt"
            }
        });

        //issue表格初始化
        githubTable = $("#issueTable").addClass( 'nowrap' ).DataTable({
            dom: "l<'#toolbar'>frtip",
            responsive: true,
            //调用github api 获取issues 数据
            ajax: {
                url: "https://api.github.com/repos/ssy341/datatables-cn/issues",
                dataSrc: ""
            },
            //默认最后一列（最后更新时间）降序排列
            order: [[4, "desc"]],
            //行被创建回调
            createdRow: function (row, data, dataIndex) {
                var updated_at = new Date(Date.parse(data.updated_at)).Format("yyyy-MM-dd hh:mm:ss");
                updated_at = new Date(updated_at).getTime();
                var current = new Date().getTime();
                var bl = current - updated_at;
                var s = 5 * 24 * 60 * 60 * 1000;
                //最后更新日期在最近5天则突出显示
                if (bl < s) {
                    $(row).addClass('unread');
                }
            },
            //行创建完成后回调
            rowCallback: function (row, data, index) {
                var tags = $(row).find("td:eq(1)");
                if (tags.text().indexOf("置顶") > 0) {
                    var title = $(row).find("td:eq(0)");
                    var hot = "<span class='hot'></span>";
                    title.html(title.html() + hot);
                }
            },
            columnDefs: [
                { targets: [-1, -3], className: 'dt-body-right' },
                {
                    targets: 4,
                    data: "updated_at",
                    title: "更新时间",
                    render: function (data, type, row, meta) {
                        return new Date(Date.parse(data)).Format("yyyy-MM-dd hh:mm:ss");
                    }
                },
                {
                    targets: 3,
                    data: null,
                    title: "发表人",
                    render: function (data, type, row, meta) {
                        return "<a href='" + row.user.html_url +
                                "' target='_blank'>" + row.user.login + "</a>";
                    }
                },
                {
                    targets: 2,
                    data: "comments",
                    title: "评论数",
                    render: function (data, type, row, meta) {
                        var comments = data + "<i class='icon-comment'></i>";
                        return comments;
                    }
                },
                {
                    targets: 1,
                    data: null,
                    title: "标签",
                    render: function (data, type, row, meta) {
                        var labels = "";
                        if (row.labels.length) {
                            for (var j = 0, labelslen = row.labels.length; j < labelslen; j++) {
                                labels += "<span style='color:#" + row.labels[j].color + "' >" +
                                        row.labels[j].name + "</span>";
                                if (j != labelslen - 1) {
                                    labels += ",";
                                }
                            }
                        }
                        return labels;
                    }
                },
                {
                    targets: 0,
                    data: "title",
                    title: "issue",
                    render: function (data, type, row, meta) {
                        var title = "<a href='" + row.html_url +
                                "' target='_blank'>" + row.title + "</a>";
                        return title;
                    }
                }
            ],
            initComplete: function () {
                //表格加载完毕，手动添加按钮到表格上
                $("#toolbar").css("width", "100px").css("display", "inline").css("margin-left", "10px");
                $("#toolbar").append("<a href='https://github.com/ssy341/datatables-cn/issues/new' " +
                        "class='btn btn-primary btn-sm' target='_blank'>我有问题</a>");
                $("#toolbar").append("<a href='/example/diy.html' " +
                        "class='btn btn-default btn-sm' style='margin-left: 5px' target='_blank'>DIY</a>");
                $("#toolbar").append("<a href='javascript:void(0);' " +
                        "class='btn btn-default btn-sm closedIssue' " +
                        "style='margin-left: 5px;color:#009900'>查看已解决问题</a>");
               

                //加载已经关闭的问题
                $(".closedIssue").clickToggle(function () {
                    //调用url方法切换dt的数据源
                    githubTable.ajax.url("https://api.github.com/repos/ssy341/datatables-cn/issues?state=closed").load();
                    $(this).text("查看未解决问题").css("color", "#FF0000");
                }, function () {
                    githubTable.ajax.url("https://api.github.com/repos/ssy341/datatables-cn/issues").load();
                    $(this).text("查看已解决问题").css("color", "#009900");
                });
            }
        });
    });

    //时间格式化
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

    //事件来回切换方法
    //solve this
    //reference http://stackoverflow.com/questions/4911577/jquery-click-toggle-between-two-functions
    (function ($) {
        $.fn.clickToggle = function (func1, func2) {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function () {
                var data = $(this).data();
                var tc = data.toggleclicked;
                $.proxy(funcs[tc], this)();
                data.toggleclicked = (tc + 1) % 2;
            });
            return this;
        };
    }(jQuery));

</script>

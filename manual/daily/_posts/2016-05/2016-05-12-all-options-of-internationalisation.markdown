---
layout: daily
title: DataTables初始化对照模板6（全部option - Internationalisation 国际化） 《不定时一讲》 DataTable中文网
short: DataTables初始化对照模板6（全部option - Internationalisation 国际化）
date: 2016-5-12
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
author: DataTable中文网
---
[所有option连接]({{site.url}}/reference/option/)

相关连接

[Features]({{site.url}}{% post_url 2016-05-12-all-options-of-features %})
[Data]({{site.url}}{% post_url 2016-05-12-all-options-of-data %})
[Callbacks]({{site.url}}{% post_url 2016-05-12-all-options-of-callbacks %})
[Options]({{site.url}}{% post_url 2016-05-12-all-options-of-options %})
[Columns]({{site.url}}{% post_url 2016-05-12-all-options-of-columns %})

Internationalisation - 国际化部分
<!--more-->

{% highlight javascript linenos %}
var table = $('#example').DataTable({
    "language": {
        "processing": "处理中...",
        "lengthMenu": "显示 _MENU_ 项结果",
        "zeroRecords": "没有匹配结果",
        "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
        "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
        "infoFiltered": "(由 _MAX_ 项结果过滤)",
        "infoPostFix": "",
        "search": "搜索:",
        "searchPlaceholder": "搜索...",
        "url": "",
        "emptyTable": "表中数据为空",
        "loadingRecords": "载入中...",
        "infoThousands": ",",
        "paginate": {
            "first": "首页",
            "previous": "上页",
            "next": "下页",
            "last": "末页"
        },
        "aria": {
            paginate: {
                first: '首页',
                previous: '上页',
                next: '下页',
                last: '末页'
            },
            "sortAscending": ": 以升序排列此列",
            "sortDescending": ": 以降序排列此列"
        },
        "decimal": "-",
        "thousands": "."
    }
});
{% endhighlight %}

[Chinese.txt]({{site.url}}/assets/Chinese.txt)

PS:以上代码无任何实际使用价值，纯粹演示对象结构，和新版参数的写法
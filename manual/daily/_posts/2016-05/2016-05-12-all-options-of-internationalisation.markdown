---
layout: daily
title: DataTables初始化对照模板6（全部option - Internationalisation 国际化） 《不定时一讲》 DataTables中文网
short: DataTables初始化对照模板6（全部option - Internationalisation 国际化）
date: 2016-5-12
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTables中文网
banner: http://tse1.mm.bing.net/th?&id=OIP.M1cd4d25b89cc1f30ad25a1e1c196fa48o0&w=289&h=213&c=0&pid=1.9&rs=0&p=0
---
[所有option连接]({{site.wlan_url}}/reference/option/)

相关连接

[Features]({{site.wlan_url}}/manual/daily/2016/05/12/all-options-of-features.html)
[Data]({{site.wlan_url}}/manual/daily/2016/05/12/all-options-of-data.html)
[Callbacks]({{site.wlan_url}}/manual/daily/2016/05/12/all-options-of-callbacks.html)
[Options]({{site.wlan_url}}/manual/daily/2016/05/12/all-options-of-options.html)
[Columns]({{site.wlan_url}}/manual/daily/2016/05/12/all-options-of-columns.html)

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

[Chinese.txt]({{site.wlan_url}}/assets/Chinese.txt)

PS:以上代码无任何实际使用价值，纯粹演示对象结构，和新版参数的写法
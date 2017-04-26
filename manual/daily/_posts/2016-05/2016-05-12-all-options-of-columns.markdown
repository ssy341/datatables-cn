---
layout: daily
title: DataTables初始化对照模板5（全部option - Columns 列配置） 《不定时一讲》 DataTables中文网
short: DataTables初始化对照模板5（全部option - Columns 列配置）
date: 2016-5-12
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTables中文网
banner: http://tse1.mm.bing.net/th?&id=OIP.Mb8cb79bda0141f372b6b59c0ea9c8cf9o0&w=264&h=159&c=0&pid=1.9&rs=0&p=0
---
[所有option连接]({{site.wlan_url}}/reference/option/)

相关连接

[Features]({{site.wlan_url}}/manual/daily/2016/05/12/all-options-of-features.html)
[Data]({{site.wlan_url}}/manual/daily/2016/05/12/all-options-of-data.html)
[Callbacks]({{site.wlan_url}}/manual/daily/2016/05/12/all-options-of-callbacks.html)
[Options]({{site.wlan_url}}/manual/daily/2016/05/12/all-options-of-options.html)
[Internationalisation]({{site.wlan_url}}/manual/daily/2016/05/12/all-options-of-internationalisation.html)

Columns - 列配置部分
<!--more-->

{% highlight javascript linenos %}
var table = $('#example').DataTable({
    "columns": [{
        "cellType": "td",
        "className": "my_class",
        "contentPadding": "mmm",
        "createdCell": function(td, cellData, rowData, row, col) {
            if (cellData < 1) {
                $(td).css('color', 'red')
            }
        },
        "data": "engine",
        "defaultContent": "<i>Not set</i>",
        "name": "engine",
        "orderable": true,
        "orderData": [0, 1],
        "orderDataType": "dom-text",
        "orderSequence": ["asc"],
        "render": function(data, type, full, meta) {
            return '<a href="' + data + '">Download</a>';
        },
        "searchable": true,
        "title": "My column title",
        "type": "html",
        "visible": true,
        "width": "20%",
    }]
});

var table = $('#example').DataTable({
    "columnDefs": [{
        "targets": 0,
        "cellType": "td",
        "className": "my_class",
        "contentPadding": "mmm",
        "createdCell": function(td, cellData, rowData, row, col) {
            if (cellData < 1) {
                $(td).css('color', 'red')
            }
        },
        "data": "engine",
        "defaultContent": "<i>Not set</i>",
        "name": "engine",
        "orderable": true,
        "orderData": [0, 1],
        "orderDataType": "dom-text",
        "orderSequence": ["asc"],
        "render": function(data, type, full, meta) {
            return '<a href="' + data + '">Download</a>';
        },
        "searchable": true,
        "title": "My column title",
        "type": "html",
        "visible": true,
        "width": "20%",
    }]
});
{% endhighlight %}

PS:以上代码无任何实际使用价值，纯粹演示对象结构，和新版参数的写法
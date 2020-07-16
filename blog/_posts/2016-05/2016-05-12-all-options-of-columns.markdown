---
layout: daily
title: DataTables初始化对照模板5（全部option - Columns 列配置） 《不定时一讲》 DataTables中文网
short: DataTables初始化对照模板5（全部option - Columns 列配置）
date: 2016-5-12
group: 2016-5
caption: 《不定时一讲》
categories: blog
tags: [不定时一讲]
author: DataTables中文网
redirect_from: /manual/daily/2016/05/12/all-options-of-columns.html
---
[所有option连接]({{ site.baseurl }}/reference/option/)

相关连接

[Features]({{ site.baseurl }}/manual/daily/2016/05/12/all-options-of-features.html)
[Data]({{ site.baseurl }}/manual/daily/2016/05/12/all-options-of-data.html)
[Callbacks]({{ site.baseurl }}/manual/daily/2016/05/12/all-options-of-callbacks.html)
[Options]({{ site.baseurl }}/manual/daily/2016/05/12/all-options-of-options.html)
[Internationalisation]({{ site.baseurl }}/manual/daily/2016/05/12/all-options-of-internationalisation.html)

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
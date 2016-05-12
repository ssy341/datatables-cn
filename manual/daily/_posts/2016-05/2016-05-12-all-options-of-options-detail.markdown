---
layout: daily_detail
title: DataTables初始化对照模板4（全部option - Options 配置选项） 《不定时一讲》 DataTable中文网
short: DataTables初始化对照模板4（全部option - Options 配置选项）
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
[Columns]({{site.url}}{% post_url 2016-05-12-all-options-of-columns %})
[Internationalisation]({{site.url}}{% post_url 2016-05-12-all-options-of-internationalisation %})

Options - 配置选项部分

{% highlight javascript linenos %}
var table = $('#example').DataTable({
    "deferLoading": null,
    "destroy": false,
    "displayStart": 0,
    "dom": "lfrtip",
    "lengthMenu": [10, 25, 50, 100],
    "order": [[0, 'asc']],
    "orderCellsTop": false,
    "orderClasses": true,
    "orderFixed": [0, 'asc'],
    "orderMulti": true,
    "pageLength": 10,
    "pagingType": "simple_numbers",
    "renderer": "bootstrap",
    "retrieve": false,
    "rowId": "DT_RowId",
    "scrollCollapse": false,
    "search": {
        "caseInsensitive": true,
        "regex": false,
        "search": "Fred",
        "smart": true
    },
    "searchCols": [
        null, {
        "search": "My filter"
        },
        null,
        {
            "search": "^[0-9]",
            "escapeRegex": false
        }
    ],
    "searchDelay": null,
    "stateDuration": 7200,
    "stripeClasses": ['odd', 'even'],
    "tabIndex": 0
});
{% endhighlight %}

PS:以上代码无任何实际使用价值，纯粹演示对象结构，和新版参数的写法
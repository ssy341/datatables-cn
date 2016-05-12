---
layout: daily_detail
title: DataTables初始化对照模板3（全部option - Callbacks 回调函数） 《不定时一讲》 DataTable中文网
short: DataTables初始化对照模板3（全部option - Callbacks 回调函数）
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

Callbacks - 回调函数部分

{% highlight javascript linenos %}
var table = $('#example').DataTable({
    "createdRow": function(row, data, dataIndex) {
        if (data[4] == "A") {
            $(row).addClass('important');
        }
    },
    "drawCallback": function(settings) {
        alert('DataTables has redrawn the table');
    },
    "footerCallback": function(tfoot, data, start, end, display) {
        $(tfoot).find('th').eq(0).html("Starting index is " + start);
    },
    "formatNumber": function(toFormat) {
        return toFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    },
    "headerCallback": function(thead, data, start, end, display) {
        $(thead).find('th').eq(0).html('Displaying ' + (end - start) + ' records');
    },
    "infoCallback": function(settings, start, end, max, total, pre) {
        return start + " to " + end;
    },
    "initComplete": function(settings, json) {
        alert('DataTables has finished its initialisation.');
    },
    "preDrawCallback": function(settings) {
        $('#example tbody').off('click', 'td');
    },
    "rowCallback": function(row, data, index) {
        if (data.grade == "A") {
            $('td:eq(4)', row).html('<b>A</b>');
        }
    },
    "stateLoadCallback": function(settings) {
        var o;
        // Send an Ajax request to the server to get the data. Note that
        // this is a synchronous request since the data is expected back from the
        // function
        $.ajax({
            "url": "/state_load",
            "async": false,
            "dataType": "json",
            "success": function(json) {
                o = json;
            }
        });
        return o;
    },
    "stateLoaded": function(settings, data) {
        alert('Saved filter was: ' + data.search.search);
    },
    "stateLoadParams": function(settings, data) {
        data.search.search = "";
    },
    "stateSaveCallback": function(settings, data) {
        // Send an Ajax request to the server with the state object
        $.ajax({
            "url": "/state_save",
            "data": data,
            "dataType": "json",
            "type": "POST",
            "success": function() {}
        });
    },
    "stateSaveParams": function(settings, data) {
        data.search.search = "";
    }
});
{% endhighlight %}

PS:以上代码无任何实际使用价值，纯粹演示对象结构，和新版参数的写法
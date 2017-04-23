---
layout: daily
title: DataTables初始化对照模板2（全部option - Data 数据） 《不定时一讲》 DataTables中文网
short: DataTables初始化对照模板2（全部option - Data 数据）
date: 2016-5-12
group: 2016-5
caption: 《不定时一讲》
categories: manual daily
tags: [不定时一讲]
author: DataTables中文网
banner: http://tse1.mm.bing.net/th?&id=OIP.Mf736cc42fa754d772168effa055bbef9o0&w=300&h=272&c=0&pid=1.9&rs=0&p=0
---
[所有option连接]({{site.url}}/reference/option/)

相关连接

[Features]({{site.url}}/manual/daily/2016/05/12/all-options-of-features.html)
[Callbacks]({{site.url}}/manual/daily/2016/05/12/all-options-of-callbacks.html)
[Columns]({{site.url}}/manual/daily/2016/05/12/all-options-of-columns.html)
[Options]({{site.url}}/manual/daily/2016/05/12/all-options-of-options.html)
[Internationalisation]({{site.url}}/manual/daily/2016/05/12/all-options-of-internationalisation.html)

Data - 数据部分
<!--more-->

{% highlight javascript linenos %}
var table = $('#example').DataTable( {
  "ajax": {
    "url": "data.json",
    "type": "POST",
    "dataSrc": "data",
    "data": {
        "user_id": 451
    }
  },
  "data": [
      {
          "name":       "Tiger Nixon",
          "position":   "System Architect",
          "salary":     "$3,120",
          "start_date": "2011/04/25",
          "office":     "Edinburgh",
          "extn":       5421
      },
      {
          "name": "Garrett Winters",
          "position": "Director",
          "salary": "5300",
          "start_date": "2011/07/25",
          "office": "Edinburgh",
          "extn": "8422"
      },
      // ...
  ],
  //这里是为了配合上面的data，所以要写出了，之后会有对 columns 更详细的结构
  "columns": [
      { "data": "name" },
      { "data": "position" },
      { "data": "office" },
      { "data": "extn" },
      { "data": "start_date" },
      { "data": "salary" }
  ]
} );
{% endhighlight %}

PS:以上代码无任何实际使用价值，纯粹演示对象结构，和新版参数的写法
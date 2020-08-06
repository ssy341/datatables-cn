---
layout: daily
title: option stateSaveParams 状态数据保存操作回调函数 《不定时一讲》 DataTables中文网
short: option stateSaveParams 状态数据保存操作回调函数
date: 2016-9-25
group: 2016-9
caption: 《不定时一讲》
categories: blog
tags: [不定时一讲]
author: DataTables中文网
redirect_from: /manual/daily/2016/09/25/option-stateSaveParams.html
---

## 描述
参数详解连接{% include href/option/Callbacks.html param="stateSaveParams" %}

当{% include href/option/Callbacks.html param="stateSaveCallback" %}执行完毕后或者保存的数据被操作即触发这个回调函数。
<!--more-->

## 类型

### function stateSaveParams( settings, data )

- 参数名
    - 类型
    - 可选的
    - 说明
- `settings`
    - {% include href/Types.html param="DataTables.Settings" %}
    - No
    - DataTables settings 对象
- `data`
    - {% include href/Types.html param="object"%}
    - No
    - 用来储存的数据。数据来自{% include href/option/Callbacks.html param="stateSaveParams" %}


## 例子
基本语法：

移除过滤条件，即搜索条件不会被保存在状态里
{% highlight javascript linenos %}
$('#example').DataTable( {
  "stateSave": true,
  "stateSaveParams": function (settings, data) {
    data.search.search = "";
  }
} );
{% endhighlight %}

---
layout: reference_md
title: language.loadingRecords
summary: 用来描述数据在加载中等待的提示字符串 - 当异步读取数据的时候显示
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.loadingRecords
author: /reference/option/language.loadingRecords
---

## 描述(Description)

当DataTalbes使用ajax异步获取数据和第一次渲染时，该消息显示在表格的空行中，以向最终用户表示数据正在加载中。

需要注意，此参数只在客户端处理模式下有效，在服务器模式下不使用此参数。

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="string" %}

## 默认值(Default)
- Value ：`Loading...`

 
## 例子(Example)

设置加载数据的提示字符串
{% highlight javascript linenos %}
$('#example').DataTable( {
 "ajax": "json.txt",
  "language": {
       "loadingRecords": "请等待，数据正在加载中......"
    }
} );
{% endhighlight %}


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/data.html param="ajax" %}
- {% include href/option/Internationalisation.html param="language" %}
- {% include href/option/Internationalisation.html param="language.zeroRecords" %}
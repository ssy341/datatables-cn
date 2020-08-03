---
layout: reference_md
title: ajax
summary: ajax方法的命名空间
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: ajax,api
author: /reference/api/ajax
---

## 描述(Description)
在 DataTables 中，使用Ajax获取大量数据集操作是一个非常方便的操作，
在初始化的时候，使用 {% include href/Options.html param="ajax" %} 选项控制Ajax，
在初始化之后，DataTables API 提供了许多获取加载数据的方法，更改设置和加载新的数据。

此属性是 DataTables API 的静态对象，它仅用于为其子方法提供命名空间，用于控制 DataTables 可提供的Ajax操作，并检索Ajax请求检索的数据

有关这些方法的详细信息，请参阅这些方法的文档。


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="object" %}


## 例子(Example)

显示多少条数据被加载
{% highlight javascript linenos %}
var table = $('#example').DataTable( {
    ajax: "data.json"
} );
 
table.on( 'xhr', function () {
    var json = table.ajax.json();
    alert( json.data.length +' row(s) were loaded' );
} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。


API

- {% include href/api/Core.html param="ajax.json()" %}
- {% include href/api/Core.html param="ajax.params()" %}
- {% include href/api/Core.html param="ajax.url()" %}
- {% include href/api/Core.html param="ajax.url().load()" %}
- {% include href/api/Core.html param="ajax.reload()" %}

Events

- {% include href/event.html param="xhr" %}


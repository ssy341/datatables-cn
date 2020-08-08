---
layout: reference_md
title: ajax.params()
summary: 获取最后一次Ajax请求提交的参数
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: ajax.params,api
author: /reference/api/ajax.params()
---



## 描述(Description)

在某些时候可以知道什么数据提交到服务器了。该方法提供获取DataTables的Ajax请求的数据对象。

The data object stored is the resulting object once the {% include href/Options.html param="ajax.data" %} 
option has been fully evaluated, so any custom parameters are also stored.

这个对象是只读的，你对它进行任何更改，不会影响DataTables的操作，它提供仅是为了使用API。



## 类型(Type)
这个选项能够接受以下类型的参数：

---

### _function_ **ajax.params()**

#### 返回(Returns):

{% include href/Types.html param="object" %},{% include href/Types.html param="undefined" %}

在最后一个Ajax请求中提交的数据，如果没有发生请求则返回{% include href/Types.html param="undefined" %}。

---
    
    
## 例子(Example)
在每一次Ajax请求显示搜索词

{% highlight javascript linenos %}
var table = $('#example').DataTable( {
    ajax: "data.json",
    serverSide: true
} );
 
table.on( 'xhr', function () {
    var data = table.ajax.params();
    alert( '搜索词是: '+data.search.value );
} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="ajax.json()" %}
- {% include href/APIs.html param="ajax.url()" %}
- {% include href/APIs.html param="ajax.url().load()" %}
- {% include href/APIs.html param="ajax.reload()" %}


Events

- {% include href/event.html param="xhr" %}


Options

- {% include href/Options.html param="ajax" %}


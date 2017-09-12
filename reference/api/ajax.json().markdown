---
layout: reference_md
title: ajax.json()
summary: 获取最新的JSON数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: ajax.json,DataTables
author: /reference/api/ajax.json()
---

## 描述(Description)
能够从DataTables请求中获取JSON数据做汇总往往是非常有用的，或者获取在响应中的数据但是DataTables不直接使用的数据（这个在开发中
可以减少AJAX请求，把想要的数据一次性返回，以帮助提高性能）。该方法提供访问该数据。

请注意，如果API实例引用了多个DataTables实例，则只会返回第一个表中的JSON数据。如果你使用了多个表，通过{% include href/api/api.Tables.html param="table()" %}获取指定的DataTables实例。

此外，如果{% include href/option/option.data param="ajax" %}是作为一个function使用，该方法返回的是`undefined`而不是JSON字符串，
因为给定的function已经覆盖了DataTables原有的Ajax处理程序。

## 类型(Type)

---

### _function_ **ajax.json()**

#### 返回(Returns):
{% include href/type.html param="object" %}

从服务器获取最新的Ajax数据

---

## 例子(Example)
alert弹出显示加载了多少行
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

- {% include href/api/api.Core param="ajax.params()" %}
- {% include href/api/api.Core param="ajax.url()" %}
- {% include href/api/api.Core param="ajax.url().load()" %}
- {% include href/api/api.Core param="ajax.reload()" %}

Events

- {% include href/event.html param="xhr" %}

Options

- {% include href/option/option.data param="ajax" %}
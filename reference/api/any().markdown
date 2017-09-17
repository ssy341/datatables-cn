---
layout: reference_md
title: any()
summary: 确定结果集里是否有符合条件的记录(判断表格里有没有数据)
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10.7
navcategory: api
keywords: jQuery,DataTables,Utility,any
author: /reference/api/any()
---

## 描述(Description)
这个方法非常有用，它用来判断一个 API 实例是否包含符合条件的数据以便决定可以采取什么行动。
比如，你可以你可以知道是否有行被选中，或者是特定的数据在表格中。

作为多个DataTables API实例，当使用标准的Javascript{% include href/type.html param="array" %}去使用，仅仅去判断`length`属性为0，
不总是对的。也就是说，DataTables API实例可能包含多个表格信息，而他们也许是空的。

这个方法提供了可以在API 实例中检索是否有可用的数据。返回的结果也可以用 {% include href/api/Utility.html param="flatten()" %}方法检查长度来判断。
比如`api.flatten().length !== 0`



## 类型(Type)

---

### _function_ any()

#### 描述(Description):
获得一个布尔值来告诉你DataTables API实例是否包含符合条件的记录

#### 返回(Returns):
{% include href/type.html param="boolean" %}
`true` 表示在结果集中包含一条或者多条符合条件的记录，`false`表示不包含

---

## 例子(Example)
检查结果集中是否有包含`selected`class的行
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
if ( table.rows( '.selected' ).any() ) {
    alert( 'Rows are selected' );
}
{% endhighlight %}


检查表格的数据是否为空
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
if ( ! table.data().any() ) {
    alert( 'Empty table' );
}
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Utility.html param="count()" %}


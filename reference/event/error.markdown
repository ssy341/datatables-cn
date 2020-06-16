---
layout: reference_md
title: error
summary: 错误事件 - 当DataTables处理数据时发生的错误
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10.5
navcategory: event
keywords: error,event,DataTables
author: /reference/event/error
---

## 描述(Description)

在任何复杂的应用程序中，错误控制是一个很重要的考虑。DataTables提供这个事件允许将应用程序自身的错误在DataTables中捕获。比如，你可以触发一个ajax，来记录错误信息，或者把错误信息显示给最终用户。

该事件与{% include href/option/Static.html param="$.fn.dataTable.ext.errMode" %}选项密切相关，它可以控制DataTables如何处理错误。它可以接受以下四个值：

- {% include href/string.html param="alert" %} （默认）弹框显示错误
- {% include href/string.html param="throw" %} 抛出一个Javascript错误
- {% include href/string.html param="none" %} 什么都不做（你可能想使用 {% include href/event.html param="error" %} 在这个情况下）
- `function` 当页面上所有DataTables发生一个错误会执行这个方法

需要注意的是，与所有DataTables发出的事件一样，这个事件由`dt`命名空间触发。因此，你要监听此事件，还必须将`.dt`附加到事件名称中来使用`dt`命名空间，如下面的示例所示。

## 类型(Type)

---

### _function_ function( e, settings, techNote, message )


#### 参数(Parameters):
{% include_relative error-parameters-code.html %}

---

## 例子(Example)

自定义错误处理

{% highlight javascript linenos %}

$.fn.dataTable.ext.errMode = 'none';
 
$('#example')
    .on( 'error.dt', function ( e, settings, techNote, message ) {
        console.log( 'An error has been reported by DataTables: ', message );
    } )
    .DataTable();


{% endhighlight %}


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/Static.html param="$.fn.dataTable.ext.errMode" %}
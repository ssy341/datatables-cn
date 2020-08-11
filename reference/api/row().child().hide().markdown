---
layout: reference_md
title: row().child().hide()
summary: 创建子行并隐藏子行
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: row,child,hide,创建子行并隐藏子行
author: /reference/api/row().child().hide()
---

## 描述(Description)

此方方法可以随时隐藏父行的子行。将子行设置为隐藏时，它们不会与父行分离，而是简单的不绘制在页面上。

请注意，该方法只有在{% include href/APIs.html param="row().child()" %}方法带参数时才有用。这是因为{% include href/APIs.html param="row().child()" %}不带参数，他只会返回子行节点（{% include href/Types.html param="jQuery" %}对象或者{% include href/Types.html param="undefined" %}），如果你使用带参数的{% include href/APIs.html param="row().child()" %}方法，它会返回{% include href/Types.html param="DataTables.Api" %}实例。如果你仅仅只需要隐藏子行，不需要对子行操作，使用{% include href/APIs.html param="row().child.hide()" %}方法即可。

值得一提的是，此方法可能使用有限，但是为了完整起见，API中还是给出了此方法。

与操作Datatables许多其他方法不同，此方法不需要调用{% include href/APIs.html param="draw()" %}即可显示结果更改。子行插入到表中，不需要重新绘制Datatables。



## 类型(Type)
---
### _function_ **row().child().hide()**   
---
#### 描述(Description):
创建子行并隐藏子行

#### 返回(Returns):

{% include href/Types.html param="DataTables.Api" %}

Datatables API实例


--- 
    
## 例子(Example)

设置其值后，立即隐藏子行：

{% include runcode.html param="row-child-hide-example" %}
{: #row-child-hide-example-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
// Show an initial child row
table
    .row( ':eq(0)' )
    .child( 'Extra information...' )
    .show();
 
// Change the information and hide - without the hide() call the changed
// information would be visible due to the show() above.
table
    .row( ':eq(0)' )
    .child( 'Different information' )
    .hide()
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="row().child()" %}


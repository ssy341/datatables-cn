---
layout: reference_md
title: row().child.hide()
summary: 隐藏父行的子行
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: row,child,hide,隐藏父行的子行
author: /reference/api/row().child.hide()
---

## 描述(Description)
此方方法可以随时隐藏父行的子行。将子行设置为隐藏时，它们不会与父行分离，而是简单的不绘制在页面上。

与操作Datatables许多其他方法不同，此方法不需要调用{% include href/APIs.html param="draw()" %}即可显示结果更改。子行插入到表中，不需要重新绘制Datatables。



## 类型(Type)
---
### _function_ **row().child.hide()**   
---
#### 描述(Description):
隐藏父行的子行

#### 返回(Returns):

{% include href/Types.html param="DataTables.Api" %}

Datatables API实例

--- 
    
## 例子(Example)

给每一行创建一个详情，点击可展开详情

{% include runcode.html param="row-child-hide-example" %}
{: #row-child-hide-example-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
table.rows().every( function () {
    this.child( 'Row details for row: '+this.index() );
} );
 
$('#example tbody').on( 'click', 'tr', function () {
    var child = table.row( this ).child;
 
    if ( child.isShown() ) {
        child.hide();
    }
    else {
        child.show();
    }
} );
{% endhighlight %}


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="row().child" %}


---
layout: reference_md
title: row().child.show()
summary: 使父行的子行可见
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: row,child,show,使父行的子行可见
author: /reference/api/row().child.show()
---

## 描述(Description)
此方法可以用于随时使父行的子行可见。可以使用{% include href/APIs.html param="row().child()" %}附加子行，但不必立即使其可见。这个方法提供了可以让已经在父行附加了子行的内容显示出来的选项。

与操作Datatables许多其他方法不同，此方法不需要调用{% include href/APIs.html param="draw()" %}即可显示结果更改。子行插入到表中，不需要重新绘制Datatables。


## 类型(Type)
--- 
### _function_ **row().child.show()**   
---
#### 描述(Description):
显示父行的子行

#### 返回(Returns):

{% include href/Types.html param="DataTables.Api" %}

Datatables API实例

--- 
    
## 例子(Example)

给每一行创建明细行，当点击的时候显示出来


{% include runcode.html param="row-child-show-example" %}
{: #row-child-show-example-js }
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


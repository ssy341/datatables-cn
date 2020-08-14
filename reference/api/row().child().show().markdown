---
layout: reference_md
title: row().child().show()
summary: 给父行附加子行并显示
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: row,child,show,给父行附加子行并显示
author: /reference/api/row().child().show()
---

## 描述(Description)
此方法可用于随时使父行的子行可见。可以使用{% include href/APIs.html param="row().child()" %}附加子行，但不必立即使其可见。这个方法提供了可以让已经在父行附加了子行的内容显示出来的选项。

请注意，该方法只有在{% include href/APIs.html param="row().child()" %}方法带参数时才有用。这是因为{% include href/APIs.html param="row().child()" %}不带参数，他只会返回子行节点（{% include href/Types.html param="jQuery" %}对象或者{% include href/Types.html param="undefined" %}），如果你使用带参数的{% include href/APIs.html param="row().child()" %}方法，它会返回{% include href/Types.html param="DataTables.Api" %}实例。如果你仅仅只需要显示子行，不需要对子行操作，使用{% include href/APIs.html param="row().child.show()" %}方法即可。

与操作Datatables许多其他方法不同，此方法不需要调用{% include href/APIs.html param="draw()" %}即可显示结果更改。子行插入到表格中，不需要重新绘制Datatables。


## 类型(Type)
---
### _function_ **row().child().show()**   
---
#### 描述(Description):
显示父行的子行

#### 返回(Returns):

{% include href/Types.html param="DataTables.Api" %}

Datatables API实例

--- 
    
## 例子(Example)

根据行的当前状态显示/隐藏行，并根据需要添加行内容：
{% highlight javascript %}
var table = $('#example').DataTable();
 
$('#example tbody').on('click', 'td.details-control', function () {
    var tr = $(this).parents('tr');
    var row = table.row( tr );
 
    if ( row.child.isShown() ) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
    }
    else {
        // Open this row (the format() function would return the data to be shown)
        row.child( format(row.data()) ).show();
        tr.addClass('shown');
    }
} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="row().child()" %}


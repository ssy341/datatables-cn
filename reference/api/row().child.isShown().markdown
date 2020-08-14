---
layout: reference_md
title: row().child.isShown()
summary: 检查父行的子行是否可见
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: row,child,isShown,检查父行的子行是否可见
author: /reference/api/row().child.isShown()
---

## 描述(Description)
在处理Datatables表格中的子行时，你可能希望知道父行的子行是否可见。该方法提供该功能，它返回一个布尔值，表示子行当前是否可见。


## 类型(Type)
---
### _function_ **row().child.isShown()**   
---
#### 描述(Description):
检查父行的子行是否可见

#### 返回(Returns):
{% include href/Types.html param="boolean" %}

`true`子行当前可见，`false`子行当前不可见

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

Events

- {% include href/event.html param="error" %}


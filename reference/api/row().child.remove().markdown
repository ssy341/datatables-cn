---
layout: reference_md
title: row().child.remove()
summary: 销毁所选父行的子行
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10.1
navcategory: api
keywords: row,child,remove,销毁所选父行的子行
author: /reference/api/row().child.remove()
---

## 描述(Description)
此方法用于从父行中删除子行，从显示的表中删除它们（如果当前是可见的），并释放jQuery为其绑定的数据和事件，调用的是jQuery的remove方法。

与操作Datatables许多其他方法不同，此方法不需要调用{% include href/APIs.html param="draw()" %}即可显示结果更改。从表中移除子行，不需要重新绘制Datatables。


## 类型(Type)
---
### _function_ **row().child.remove()**   
---
#### 描述(Description):
从显示中删除子行并释放jQuery相关数据和事件，调用的是jQuery的remove方法

#### 返回(Returns):

{% include href/Types.html param="DataTables.Api" %}

Datatables API实例

--- 
    
## 例子(Example)

根据当前状态显示/隐藏行，并根据需要添加行内容：
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
$('#example tbody').on('click', 'td.details-control', function () {
    var tr = $(this).parents('tr');
    var row = table.row( tr );
 
    if ( row.child.isShown() ) {
        // This row is already open - remove it
        row.child.remove();
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

- {% include href/APIs.html param="row().child" %}


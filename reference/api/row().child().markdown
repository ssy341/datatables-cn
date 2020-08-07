---
layout: reference_md
title: row().child()
summary: 从表中选中行设置/获取子行
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: row,child,api,从表中选中行设置/获取子行
author: /reference/api/row().child()
---

## 描述(Description)
Datatables可以显示每一行（在本文档中称为“父行”以区别与子行）的子行。该子行附加到每个父行，例如，可用于提供有关父行的额外信息或编辑表单。子行始终放在父行的后面（如果子行被指定可见，可以使用{% include href/APIs.html param="row.child.show()" %}方法操作），无论其表格排序还是应用于表格的搜索词如何。如果父行在数据表的当前视图中不可见，则子行也将不可见。

子行的内容完全独立（而不是它们在document中的位置）。应用于表的排序，搜索等对子行的顺序没有影响。每个子行通常包含一个单元格，该单元格的`colspan`属性设置为覆盖整个表格宽度，因此该单元格的内容覆盖整个表格宽度。但是，也可以传入一个具有多个单元格的{% include href/HtmlTags.html param="tr" %}元素（表中的每一列一个），以与主表相同的列结构显示子行数据。

父行可以一次附加一个或多个子行。但是，API将子行视为一体，也就是说，它们既可以全部显示，也可以全部隐藏。

此外，子行可以在隐藏后保留下来，以便将来在需要时可以快速轻松地再次显示。使用{% include href/APIs.html param="row().child.hide()" %}执行隐藏行操作。如果不再需要子行，也可以使用{% include href/APIs.html param="row().child.remove()" %}或使用{% include href/APIs.html param="row().child()" %}传入`false`作为唯一参数，比如`row().child(false)`来销毁（隐藏或释放其他已分配的内存）子行。

请注意，此方法在创建子行时不会自动使添加的子行可见。使用{% include href/APIs.html param="row().child().show()" %}方法使子行可见(或者根据需要使用{% include href/APIs.html param="row().child.show()" %})


## 类型(Types)
---
### _function_ **row().child()**
---
#### 描述(Description):
获取已为父行设置的子行

#### 返回(Returns):

{% include href/Types.html param="jQuery" %}，{% include href/Types.html param="undefined" %}

jQuery对象，其结果集中有父行的子行，如果尚未为父行设置子行，则为`undefined`。

---   
### _function_ **row().child( showRemove )**   <sub style="float:right"><font color=orange>从1.10.1版本支持</font></sub>
---
#### 描述(Description):
显示或删除并销毁所选行的子行。
     
#### 参数(Parameters):

{% include_relative parameters/row.child-fun1.html %}

#### 返回(Returns):

{% include href/Types.html param="DataTables.Api" %}

Datatables API实例


---   
### _function_ **row().child( data [, className ] )**
---
#### 描述(Description):
设置数据以显示到子行中。请注意，调用此方法将替换所有已经附加到父行的子行。

#### 参数(Parameters):

{% include_relative parameters/row.child-fun2.html %}

#### 返回(Returns):

{% include href/Types.html param="DateTables.Api" %}

Datatables API实例


---  
## 例子(Example)

根据当前状态显示/隐藏行，并根据需要添加行内容：

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

function format(data){
    return "<span style='color:red'>"+data+"</span>"
}
{% endhighlight %}

---

给一个可见父行创建多个子行：
{% highlight javascript %}
var table = $('#example').DataTable();
 
table.row( ':eq(0)' ).child( [
        'First child row',
        'Second child row',
        'Third child row'
    ] )
    .show();
{% endhighlight %}

---

向所有行添加一个子行，并传入jQuery创建的{% include href/HtmlTags.html param="tr" %}元素并显示所有子行：

{% highlight javascript %}
var table = $('#example').DataTable();
 
table.rows().every( function () {
    this
        .child(
            $(
                '<tr>'+
                    '<td>'+rowIdx+'.1</td>'+
                    '<td>'+rowIdx+'.2</td>'+
                    '<td>'+rowIdx+'.3</td>'+
                    '<td>'+rowIdx+'.4</td>'+
                '</tr>'
            )
        )
        .show();
} );
{% endhighlight %}


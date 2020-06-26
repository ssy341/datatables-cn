---
layout: reference_md
title: draw()
summary: 重绘表格
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: draw,api
author: /reference/api/draw()
---


## 描述(Description)
当您执行添加或删除行，更改表的排序，过滤或分页这些操作时，你将希望DataTables更新显示以反映这些更改，这个方法提供此功能。

大多数的API操作都不会自动执行重绘方法，目的是为了对操作进行分组（例如，当添加多行数据的时候，把数据都添加到表格中后再执行重绘操作）。
由于DataTables API可以链式调用，调用`draw()`方法只用加入到其他API方法之后调用（如下面示例所示）。

请注意，调用`draw()`方法，使用除第一个参数为{% include href/string.html param="page" %}的其他任何参数，都会导致表格重新排序和重新搜索。
{% include href/string.html param="page" %}提供当你希望更新表格时，但不希望发生这些操作的选项（例如表格更改不需要完全重新排序或者重新搜索）


## 类型(Type)
这个选项能够接受以下类型的参数：

---
    
### _function_ **draw( [paging] )**   

---

#### 描述(Description):
在当前上下文重绘表格，可选择是否需要更新排序，搜索或者是分页
     
#### 参数(Parameters):
{% include_relative draw-parameters-code.html %}

#### 返回(Returns):
{% include href/type/DataTables.html param="DataTables.Api"%}

DataTables API 实例

--- 
    
## 例子(Example)

根据自定义过滤框过滤并重绘表格
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
$('#myFilter').on( 'keyup', function () {
    table
        .search( this.value )
        .draw();
} );
{% endhighlight %}

---

排序（第一列升序），然后重绘表格并且保持当前分页位置
{% highlight javascript linenos %}
var table = $('#example').DataTable();

table
    .order( [[ 1, 'asc' ]] )
    .draw( false );
{% endhighlight %}

---

改变表格分页并且重绘（使用{% include href/string.html param="page" %}选项）
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
table.page( 'next' ).draw( 'page' );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/Callbacks.html param="drawCallback" %}


---
layout: reference_md
title: columns.createdCell
summary: 单元格创建回调以允许操作DOM
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: DataTables,option,columns.createdCell
author: /reference/option/columns.createdCell
---

## 描述(Description)
从ajax数据源或dom数据源读取数据创建单元格执行的回调函数。当单元格被创建的同时允许使用 
{% include href/option/Columns.html param="columns.render" %}选项补充操作单元格的dom元素，比如添加背景色
（在表格初始化的时候，如果开启了{% include href/option/Features.html param="deferRender" %},单元格也许不会立马被创建
，或者你的行是使用API{% include href/APIs.html param="rows.add()" %}方法动态添加的）

这个是选项是和 {% include href/option/Callbacks.html param="createdRow" %} 回调方法相对应的

## 类型(Type)

---

### function createdCell( cell, cellData, rowData, rowIndex, colIndex )

#### 参数(Parameters):
{% include_relative parameters/columns.createdCell.html %}

---

## 例子(Example)
使用 {% include href/option/Columns.html param="columnDefs" %} 配置`createdCell` 操作dom元素
当单元格的值小于1的时候，加红
{% highlight javascript linenos %}
$('#example').DataTable( {
   "columnDefs": [ {
       "targets": 3,
       "createdCell": function (td, cellData, rowData, row, col) {
         if ( cellData < 1 ) {
           $(td).css('color', 'red')
         }
       }
     } ]
} );
{% endhighlight %}


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/Callbacks.html param="createdRow" %}
- {% include href/option/Features.html param="deferRender" %}

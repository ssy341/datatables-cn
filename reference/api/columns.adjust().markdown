---
layout: reference_md
title: columns.adjust()
summary: 重新计算列宽
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: columns,adjust,resize
author: /reference/api/columns.adjust()
toc: true
---

## 描述(Description)
像HTML表格，DataTables尝试布局表格，以保证数据在单元格里以最佳的方式展现。随着数据变化，重新计算此布局有时候是很重要的。另外，DataTables广泛使用了DOM元素的尺寸在表格中，并且开启了滚动条（为了对齐列），所以如果表格是隐藏的，初始化话的时候，表格的宽/高尺寸将不可用。

提供此方法是为了让DataTables根据表中数据和应用于列的大小重新计算列的大小（在DOM中，CSS或者通过{% include href/option/Columns.html param="columns.width" %}参数配置）。当表格从不可见变为可见，当表格在初始化时（例如在选项卡中）被隐藏时或在数据发生重大更改时，调用它。

DataTables将在窗口调整大小事件上自动调用此方法，以使列与重排的布局保持同步。

## 类型(Type)

---
### _function_ **columns.adjust()**   

#### 描述(Description):
重新计算布局的列宽
     
#### 返回(Returns):
{% include href/type/DataTables.html param="DateTables.Api" %}

DataTables API实例。


--- 
    
## 例子(Example)

调整新显示表格的列大小：

{% highlight javascript %}
var table = $('#example').DataTable();
 
$('#container').css( 'display', 'block' );
table.columns.adjust().draw();
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/Columns.html param="columns.width" %}
- {% include href/option/Features.html param="autoWidth" %}

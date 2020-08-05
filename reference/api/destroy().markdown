---
layout: reference_md
title: destroy()
summary: 从当前上下文中销毁DataTables实例
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: destroy,api
author: /reference/api/destroy()
---


## 描述(Description)
DataTables 添加了许多HTML元素，事件监听和其他修改，来增强原始HTMl表格。该方法可用来删除这些增强功能，并将表格恢复原始未增强状态。

因为这些增强不能通过API进行动态更改，如果你需要基于不同初始化设置或者不同列数来销毁和创建新表，该方法将非常有用。如果你不需要
更改表的功能，只需要改变表中的数据，那么请考虑使用{% include href/api/Core.html param="clear()" %},{% include href/api/Core.html param="ajax.url()" %}和{% include href/APIs.html param="rows.add()" %}这些方法。

注意如果你希望将一个表替换成另一个表，则一定要销毁这个实例，以防止内存泄露。

## 类型(Type)
这个选项能够接受以下类型的参数：

---
    
### _function_ **destroy( [ remove ] )**   

---

#### 描述(Description):
通过删除所有DataTables增强功能，改变表和事件监听的DOM结构，将当前上下文中的表恢复到DOM的原始状态。
     
#### 参数(Parameters):
{% include_relative parameters/destroy.html %}

#### 返回(Returns):
{% include href/Types.html param="DataTables.Api"%}

DataTables API 实例

--- 
    
## 例子(Example)

点击按钮销毁一个已经存在的实例
{% highlight javascript linenos %}
var table = $('#myTable').DataTable();
 
$('#tableDestroy').on( 'click', function () {
    table.destroy();
} );
{% endhighlight %}


从服务器重新读取一个表格结构（以防列发生变化，保险操作，把表格清空调用empty方法）
{% highlight javascript linenos %}
var table = $('#myTable').DataTable();
 
$('#submit').on( 'click', function () {
    $.getJSON( 'newTable', null, function ( json ) {
        table.destroy();
        $('#myTable').empty();
        table = $('#myTable').DataTable( {
            columns: json.columns,
            data:    json.rows
        } );
    } );
} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/Options.html param="destroy" %}


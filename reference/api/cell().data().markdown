---
layout: reference_md
title: cell().data()
summary: 获取/设置被选择的单元格的数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: jQuery,DataTables,api,cell,data
author: /reference/api/cell().data()
---

## 描述(Description)
通过使用{% include href/APIs.html param="cell()" %}对象调用，获取被选中单元格的数据，或者设置一个新新值给选择单元格。

注意这个方法设置的值会改变表格里的值，并更新数据源，但是他不会更新缓存里的数据（比如，搜索缓存和排序缓存），除非调用{% include href/APIs.html param="draw()" %}方法。
`draw`方法可以像`jQuery`的调用方式使用，比如`table.cell( 0, 0 ).data( 'Updated' ).draw();`

尽管这个方法设置之后，缓存数据在没有调用`draw`方法之前不会更新，但是单元格的内容会立马变化，因为它是用`innerHTML`方法实现数据插入的。

## 类型(Type)

---

### _function_ cell().data()

#### 描述(Description):
获得选中的单元格数据

#### 返回(Returns):
`Any`
单元格数据

---

### _function_ cell().data( set )

#### 描述(Description):
给选中的单元格设置数据

#### 参数(Parameters):
{% include_relative parameters/cell.data.html %}

#### 返回(Returns):

{% include href/Types.html param="DataTables.Api"%}
被选择单元格数据结果集的DataTables API 实例

---

## 例子(Example)
alert打印出点击单元格的值
{% highlight javascript %}
var table = $('#example').DataTable();
 
$('#example tbody').on( 'click', 'td', function () {
    alert( table.cell( this ).data() );
} );
{% endhighlight %}

每点击一次单元格，让单元格里的值加1
{% highlight javascript %}
var table = $('#example').DataTable();
 
$('#example tbody').on( 'click', 'td', function () {
    var cell = table.cell( this );
    cell.data( cell.data() + 1 ).draw();
    // note - call draw() to update the table's draw state with the new data
} );
{% endhighlight %}





## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="cells().cache()" %}
- {% include href/APIs.html param="cells().data()" %}
- {% include href/APIs.html param="cells().render()" %}
- {% include href/APIs.html param="cell().cache()" %}
- {% include href/APIs.html param="cell().render()" %}



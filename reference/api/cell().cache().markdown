---
layout: reference_md
title: cell().cache()
summary: 获取被选择的单元格的Datatables缓存的数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: jQuery,DataTables,api,cell,cache
author: /reference/api/cell().cache()
---

## 描述(Description)
DataTables缓存数据是用来做搜索和排序，是为了让搜索和排序更快的的反应。有时候用这个方法获取DataTables已经为这些操作缓存好的数据是非常有用的，该方法提供对这些缓存数据的访问。

缓存数据并不能保证在任何特定的时候都可用。如果DataTables没有请求数据，那么就不会被缓存。特别是当你使用{% include href/string.html param="order" %}选项，列的排序还没有执行，数据就不会被缓存。数据失效也会导致缓存被移移除。

应当注意的是，这个方法是必须的，因为Datatables针对不同操作（搜索、排序、显示等）使用不同的数据。具体参考{% include href/option/Columns.html param="columns.data" %}和{% include href/option/Columns.html param="columns.render" %}可以获取更多信息。{% include href/api/Cells.html param="cell().data()" %}方法可以获取单元格里的原始数据。如果你不为DataTables的不同操作使用数据和显示分离，这个方法则没什么意义。

注意，这个方法主要为开发DataTables插件的作者提供操作内部数据的能力。

## 类型(Type)

---

### _function_ **cell().cache( [type] )**

#### 描述(Description):
获得指定缓存类型的缓存数据 

#### 参数(Parameters):
{% include_relative parameters/cell.cache.html %}

#### 返回(Returns):

{% include href/type/DataTables.html param="DataTables.Api"%}
被选择单元格缓存数据结果集的DataTables API 实例

---

## 例子(Example)
打印被缓存的排序数据
{% highlight javascript %}
var table = $('#example').DataTable();
 
$('#example tbody').on( 'click', 'td', function () {
    alert( table.cell( this ).cache( 'order' ) );
} );
{% endhighlight %}




## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Cells.html param="cells().cache()" %}
- {% include href/api/Cells.html param="cells().data()" %}
- {% include href/api/Cells.html param="cells().render()" %}
- {% include href/api/Cells.html param="cell().data()" %}
- {% include href/api/Cells.html param="cell().render()" %}



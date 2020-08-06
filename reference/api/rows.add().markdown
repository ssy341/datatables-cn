---
layout: reference_md
title: rows.add()
summary: 给表格添加多条新的数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: rows,add,api,给表格添加多条新的数据
author: /reference/api/rows.add()
---

## 描述(Description)

向表中添加新数据是能够动态控制Datatables内容的核心概念，并且此方法提供了执行此操作的能力。它可以一次添加多条数据。如果你一次只想添加一条数据，则可以使用此方法的单数形式：{% include href/APIs.html param="row.add()" %}。

添加的行要遵循应用于表的排序和搜索条件，这将确定新行在表中的位置和可见性。

此方法将在内部将数据添加到表中，但不会立马更新到表中可见表示是新添加的数据。为了更新表格显示，请使用{% include href/APIs.html param="draw()" %}方法，通过{% include href/APIs.html param="rows.add()" %}方法返回的对象，链式操作即可，像这样`table.rows.add( [ 1, 2, 3, 4 ] ).draw();`。这样做是为了使操作表格易于优化，可以在重绘之前添加多行数据。


## 类型(Type)
---
### _function_ **rows.add( data )**   
---
#### 描述(Description):
向表中添加给定的数据
     
#### 参数(Parameters):
{% include_relative parameters/rows.add.html %}

#### 返回(Returns):

{% include href/Types.html param="DateTables.Api" %}

Datatables API 实例，结果集中包含新添加的行
--- 
    
## 例子(Example)


添加两行新数据，然后重绘表格
{% include runcode.html param="rows-add-example1" %}
{: #rows-add-example1-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
table.rows.add([ 
    ["AAA Datatables中文网","System Architect","Edinburgh", "21","2011/04/25","$3,120"]
    ,
    ["AA Datatables中文网","System Architect","Edinburgh", "21","2011/04/25","$3,120"] 
     ] ).draw();

table.search("Datatables中文网").draw();
{% endhighlight %}

---


添加两行新的数据，并获取新行数据的node节点，添加高亮样式
{% include runcode.html param="rows-add-example2" %}
{: #rows-add-example2-js }
{% highlight javascript %}

function Pupil ( name, position, salary, office, start_date, extn ) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this._office = office;
    this.extn = extn;
    this.start_date = start_date;

    this.office = function () {
        return this._office;
    }
}

var table = $('#example').DataTable();
 
table
    .rows.add([
        new  Pupil("AA Datatables中文网","System Architect","$3,120","2011/04/25","Edinburgh","5421"),
        new  Pupil("AA Datatables中文网","System Architect","$3,120","2011/04/25","Edinburgh","5421")
    ]) 
    .draw()
    .nodes()
    .to$()
    .addClass( 'new' );
{% endhighlight %}

{: #rows-add-example2-css }
{% highlight css %}
.new{
    color:green;
    font-weight:bolder;
}
{% endhighlight %}


{: #rows-add-example2-body }
{% highlight html %}
<table id="example" class="display" cellspacing="0" width="100%">
    <thead>
        <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
        </tr>
    </tfoot>
    <tbody>
    </tbody>
</table>
{% endhighlight %}

---

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="row.add()" %}


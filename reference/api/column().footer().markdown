---
layout: reference_md
title: column().footer()
summary: 获取被选择单个列的tfoot的单元格节点
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: column,footer
author: /reference/api/column().footer()
---

## 描述(Description)
本方法可以用来获取（并因此修改）选择单个列的footer单元格节点。这个可能是{% include href/tags.html param="td" %}或者是{% include href/tags.html param="th" %}元素，这个取决于表的HTML。

返回的单元格是被选择单个列的{% include href/tags.html param="tfoot" %}第一行的单元格。如果你{% include href/tags.html param="tfoot" %}有多个行要操作，则必须使用{% include href/api/Tables.html param="table().footer()" %}方法获取{% include href/tags.html param="tfoot" %}元素下的节点，然后再使用标准的DOM/jQuery方法来操作节点。

此外，在{% include href/tags.html param="tfoot" %}的单元格可以使用`colspan`跨多列（他们也可以使用`rowspan`，但是如果跨行，在此方法中只能获取第一行中的单元格）。这样，使用`colspan`的单元格可能属于多个列。

{% include href/tags.html param="tfoot" %}在DataTables中是可选的。如果结果集里没有{% include href/tags.html param="tfoot" %}标签，则将返回`null`。

另外，如果{% include href/APIs.html param="column()" %}中使用的选择器与多个列匹配，则结果集将被截断为单个列，默认返回匹配到的第一个列。


## 类型(Type)
---
    
### _function_ **column().footer()**   

#### 描述(Description):
获取被选择单个列{% include href/tags.html param="tfoot" %}元素下的{% include href/tags.html param="td" %}/{% include href/tags.html param="th" %}
     
#### 返回(Returns):
{% include href/type/Javascript.html param="node" %},{% include href/type/Javascript.html param="null" %}

所选元素的{% include href/tags.html param="tfoot" %}单元格节点，如果匹配的列没有{% include href/tags.html param="tfoot" %}元素，则为`null`。

--- 
    
## 例子(Example)

对第四列列值进行求和，并且将结果插入到{% include href/tags.html param="tfoot" %}元素上

{% include runcode.html param="column-footer-example" %}
{: #column-footer-example-js }
{% highlight javascript %}
var table = $('#example').DataTable();
var column = table.column( 3 );
 
$( column.footer() ).html(
    column.data().reduce( function (a,b) {
        return Number(a)+Number(b);
    } )
);
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="columns().footer()" %}


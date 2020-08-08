---
layout: reference_md
title: columns().footer()
summary: 获取被选择多个列的tfoot的单元格节点
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: columns,footer
author: /reference/api/columns().footer()
---

## 描述(Description)
本方法可以用来获取（并因此修改）选择多个列的footer单元格节点。这个可能是{% include href/HtmlTags.html param="td" %}或者是{% include href/HtmlTags.html param="th" %}元素，这个取决于表的HTML。

返回的单元格是被选择多个列的{% include href/HtmlTags.html param="tfoot" %}第一行的单元格。如果你{% include href/HtmlTags.html param="tfoot" %}有多个行要操作，则必须使用{% include href/APIs.html param="table().footer()" %}方法获取{% include href/HtmlTags.html param="tfoot" %}元素下的节点，然后再使用标准的DOM/jQuery方法来操作节点。

此外，在{% include href/HtmlTags.html param="tfoot" %}的单元格可以使用`colspan`跨多列（他们也可以使用`rowspan`，但是如果跨行，在此方法中只能获取第一行中的单元格）。这样，使用`colspan`的单元格可能属于多个列。

{% include href/HtmlTags.html param="tfoot" %}在DataTables中是可选的。如果结果集里没有{% include href/HtmlTags.html param="tfoot" %}标签，则将返回空的集合。

## 类型(Type)
这个选项能够接受以下类型的参数：

---
    
### _function_ **columns().footer()**   

#### 描述(Description):
获取被选择多个列{% include href/HtmlTags.html param="tfoot" %}元素下的{% include href/HtmlTags.html param="td" %}/{% include href/HtmlTags.html param="th" %}

#### 返回(Returns):
{% include href/Types.html param="DataTables.Api" %}

DataTables API实例，结果集包含被选择多个列{% include href/HtmlTags.html param="tfoot" %}下的单元格节点。

--- 
    
## 例子(Example)

总计所有列中包含类名为`.sum`的，并且把结果放到{% include href/HtmlTags.html param="tfoot" %}中：

{% include runcode.html param="columns-footer-example" %}
{: #columns-footer-example-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
table.columns( '.sum' ).every( function () {
    var sum = this
        .data()
        .reduce( function (a,b) {
            return Number(a) + Number(b);
        } );
 
    $( this.footer() ).html( 'Sum: '+sum );
} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="column().footer()" %}

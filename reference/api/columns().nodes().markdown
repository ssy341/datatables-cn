---
layout: reference_md
title: columns().nodes()
summary: 获取被选择的多列的单元格节点
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: columns,nodes
author: /reference/api/columns().nodes()
---

## 描述(Description)

此方法用于获取选择器匹配的多个列中单元格节点（{% include href/tags.html param="td" %}/{% include href/tags.html param="th" %}元素）。

请注意，返回数组中节点的顺序以及获得节点的行（搜索结果的行，可见的行等等）是由{% include href/api/Columns.html param="columns()" %}选择器的{% include href/type/DataTables.html param="selector-modifier" %}选项决定。

此外，请注意，使用{% include href/option/Features.html param="deferRender" %}选项会使某些节点在需要显示的时候才会创建，因此调用本方法时，它可能不会立即有结果。

## 类型(Type)
---
    
### _function_ **columns().nodes()**   

#### 描述(Description):
获取所选的多个列的{% include href/tags.html param="td" %}/{% include href/tags.html param="th" %}节点。

#### 返回(Returns):

{% include href/type/DataTables.html param="DataTables.Api" %}

DataTables API实例，结果集中包含被选择列的单元格节点。这是一个二维数组，其中每个顶级数组均由{% include href/api/Columns.html param="columns()" %}选择器匹配的列。

--- 
    
## 例子(Example)

给匹配到的所有列的单元格添加样式：


{% include runcode.html param="columns-nodes-example" %}
{: #columns-nodes-example-js }
{% highlight javascript %}
var table = $('#example').DataTable();
 
table
    .columns( '.ready' )
    .nodes()
    .flatten()  // Reduce to a 1D array
    .to$()      // Convert to a jQuery object
    .addClass( 'highlight' );

{% endhighlight %}


{: #columns-nodes-example-css }
{% highlight css %}
.highlight{
    color:red;
    font-weight:blod;
}
{% endhighlight %}

{: #columns-nodes-example-body }
{% highlight html %}
<table id="example" class="display">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th class='ready'>Salary</th>
            </tr>
        </thead>
        <tbody>
             <tr>
                <td>Zorita Serrano</td>
                <td>Software Engineer</td>
                <td>San Francisco</td>
                <td>56</td>
                <td>2012/06/01</td>
                <td>$115,000</td>
            </tr>
            <tr>
                <td>Jennifer Acosta</td>
                <td>Junior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>43</td>
                <td>2013/02/01</td>
                <td>$75,650</td>
            </tr>
            <tr>
                <td>Cara Stevens</td>
                <td>Sales Assistant</td>
                <td>New York</td>
                <td>46</td>
                <td>2011/12/06</td>
                <td>$145,600</td>
            </tr>
        </tbody>
    </table>
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Columns.html param="column().nodes()" %}



---
title: 默认样式选项 Default styling options
keywords: 手册 class styling
sidebar: mydoc_sidebar
permalink: manual/styling/classes.html
reference: https://datatables.net/manual/styling/classes
csss: [
    assets/datatables/1.10.16/datatables.min.css
]
scripts: [
    assets/datatables/1.10.16/datatables.min.js
]
---

对表格进行造型使得完全符合你网站的风格，对于最终用户来讲是很重要的。DataTables提供了一组基本样式来定位元素
，如搜索框，分页控件等，它也有许多功能可以通过将类名添加到你的表格中来启用。

除了通过类名控制表格的样式之外，还可以使用 [DataTables主题创建器](https://datatables.net/manual/styling/theme-creator) 来定制样式。


## 类选项 Class options

### 表格类 Table classes

默认的DataTables样式具有以下类名，可用于控制DataTables不同样式。这些类名作用在 {% include tag.html name="table" %} 元素下：

<table>
<thead>
<tr class="header">
<th>类名 Class name</th>
<th>描述 Description</th>
</tr>
</thead>
<tbody>
<tr>
<td markdown="span">display</td>
<td markdown="span">对间隔行（stripe）、鼠标移动（hover）、行边界（row-border）和排序列（order-column）起标记作用</td>
</tr>
<tr>
<td markdown="span">cell-border</td>
<td markdown="span">给每个单元格的四个边加边线</td>
</tr>
<tr>
<td markdown="span">compact</td>
<td markdown="span">减少DataTables使用默认样式的空白量，从而是表格看起来比较紧凑（从1.10.1版本开始支持）</td>
</tr>
<tr>
<td markdown="span">hover</td>
<td markdown="span">鼠标移过行的时候高亮</td>
</tr>
<tr>
<td markdown="span">nowrap</td>
<td markdown="span">禁用表格中的包装，使得单元格里的文本内容在一行显示</td>
</tr>
<tr>
<td markdown="span">order-column</td>
<td markdown="span">高亮显示当前排序的列</td>
</tr>
<tr>
<td markdown="span">row-border</td>
<td markdown="span">只在顶部和底部加边线（比如每一行）。cell-border和row-border是互斥的，不能一起使用</td>
</tr>
<tr>
<td markdown="span">stripe</td>
<td markdown="span">行条纹</td>
</tr>
</tbody>
</table>

你可以根据你的需要任意组合上面的样式来制定你的样式。它们会分别与其他选项一起生效（除了cell-border和row-border），
并根据需要遮蔽底色，达到区分的效果。

每个选项在下面的示例中单独演示，方便你了解每个样式的功能。记住你可以为表格同时添加多个样式，例如你可以
使用 `class="stripe hover"`，表格就会同时显示行条纹和鼠标悬停样式。


### 单元格类

除了上面说到的表格类之外，DataTables默认样式还提供了基于单元格的样式，你可以单独直接在HTML上定义，也可以使用
{% include option.html name="columns.className" %}选项应用列中所有的单元格。


<table>
<thead>
<tr class="header">
<th>类名 Class name</th>
<th>描述 Description</th>
</tr>
</thead>
<tbody>
<tr>
<td markdown="span">dt[-head|-body]-left</td>
<td markdown="span">文字左对齐</td>
</tr>
<tr>
<td markdown="span">dt[-head|-body]-center</td>
<td markdown="span">文字居中对齐</td>
</tr>
<tr>
<td markdown="span">dt[-head|-body]-right</td>
<td markdown="span">文字右边对齐</td>
</tr>
<tr>
<td markdown="span">dt[-head|-body]-justify</td>
<td markdown="span">文字两端对齐</td>
</tr>
<tr>
<td markdown="span">dt[-head|-body]-nowrap</td>
<td markdown="span">文字不换行</td>
</tr>
</tbody>
</table>


为了方便，当使用 {% include option.html name="columns.className" %}选项时，你可以选择使用`-head`或者`-body`来表示是作用到
表头 {% include tag.html name="thead" %}还是作用到表体 {% include tag.html name="tbody" %}的单元格中。如果不使用，则表示对表头或者表体同时适用。
比如：

- `dt-rigth` 在表头和表体中单元格文字靠右对齐
- `dt-head-right` 只有表头单元格文字靠右对齐 
- `dt-body-right` 只有表体单元格文字靠右对齐 


## 例子（Examples）

### display

下面的表格具有隔行效果（stripe），鼠标移动行效果（hover），行和行之间的边线（row-border）和排序列标记效果(order-column)

<table class="demo display" width="100%">
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
        <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$3,120</td>
        </tr>
        <tr>
            <td>Garrett Winters</td>
            <td>Director</td>
            <td>Edinburgh</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$5,300</td>
        </tr>
        <tr>
            <td>Ashton Cox</td>
            <td>Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$4,800</td>
        </tr>
        <tr>
            <td>Cedric Kelly</td>
            <td>Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$3,600</td>
        </tr>
    </tbody>
</table>


### cell-border

下面的表格每个单元格都有边线

<table class="demo cell-border" width="100%">
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
        <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$3,120</td>
        </tr>
        <tr>
            <td>Garrett Winters</td>
            <td>Director</td>
            <td>Edinburgh</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$5,300</td>
        </tr>
        <tr>
            <td>Ashton Cox</td>
            <td>Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$4,800</td>
        </tr>
        <tr>
            <td>Cedric Kelly</td>
            <td>Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$3,600</td>
        </tr>
    </tbody>
</table>

### compact

下面的表格内容紧凑，把多余的空白减少，增加整个页面的信息密度。

<table class="demo compact" width="100%">
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
        <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$3,120</td>
        </tr>
        <tr>
            <td>Garrett Winters</td>
            <td>Director</td>
            <td>Edinburgh</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$5,300</td>
        </tr>
        <tr>
            <td>Ashton Cox</td>
            <td>Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$4,800</td>
        </tr>
        <tr>
            <td>Cedric Kelly</td>
            <td>Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$3,600</td>
        </tr>
    </tbody>
</table>
{% include note.html content="此类需要使用DataTables 1.10.1+的版本" %}


### hover

高亮标记鼠标停留的行

<table class="demo hover" width="100%">
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
        <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$3,120</td>
        </tr>
        <tr>
            <td>Garrett Winters</td>
            <td>Director</td>
            <td>Edinburgh</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$5,300</td>
        </tr>
        <tr>
            <td>Ashton Cox</td>
            <td>Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$4,800</td>
        </tr>
        <tr>
            <td>Cedric Kelly</td>
            <td>Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$3,600</td>
        </tr>
    </tbody>
</table>

### nowrap

禁用表格单元格里的内容换行，文本始终在一行显示。注意标红的一行

<table class="demo nowrap" width="100%">
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
        <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$3,120</td>
        </tr>
        <tr>
            <td>Garrett Winters</td>
            <td>Director</td>
            <td>Edinburgh</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$5,300</td>
        </tr>
        <tr>
            <td>Ashton Cox</td>
            <td>Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$4,800</td>
        </tr>
        <tr>
            <td>Cedric Kelly</td>
            <td>Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$3,600</td>
        </tr>
        <tr style='color:red'>
            <td>Keith Shan</td>
            <td>Java, Javascript and Python Developer</td>
            <td>CD BIZ</td>
            <td>18</td>
            <td>2016/02/22</td>
            <td>￥3,410</td>
        </tr>
    </tbody>
</table>

{% include note.html content="此类需要使用DataTables 1.10.1+的版本" %}


### order-column

高亮显示排序的列

<table class="demo order-column" width="100%">
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
        <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$3,120</td>
        </tr>
        <tr>
            <td>Garrett Winters</td>
            <td>Director</td>
            <td>Edinburgh</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$5,300</td>
        </tr>
        <tr>
            <td>Ashton Cox</td>
            <td>Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$4,800</td>
        </tr>
        <tr>
            <td>Cedric Kelly</td>
            <td>Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$3,600</td>
        </tr>
    </tbody>
</table>

### row-border

仅在行上有边线

<table class="demo row-border" width="100%">
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
        <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$3,120</td>
        </tr>
        <tr>
            <td>Garrett Winters</td>
            <td>Director</td>
            <td>Edinburgh</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$5,300</td>
        </tr>
        <tr>
            <td>Ashton Cox</td>
            <td>Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$4,800</td>
        </tr>
        <tr>
            <td>Cedric Kelly</td>
            <td>Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$3,600</td>
        </tr>
    </tbody>
</table>

### stripe

行间隔效果

<table class="demo stripe" width="100%">
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
        <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$3,120</td>
        </tr>
        <tr>
            <td>Garrett Winters</td>
            <td>Director</td>
            <td>Edinburgh</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$5,300</td>
        </tr>
        <tr>
            <td>Ashton Cox</td>
            <td>Technical Author</td>
            <td>San Francisco</td>
            <td>66</td>
            <td>2009/01/12</td>
            <td>$4,800</td>
        </tr>
        <tr>
            <td>Cedric Kelly</td>
            <td>Javascript Developer</td>
            <td>Edinburgh</td>
            <td>22</td>
            <td>2012/03/29</td>
            <td>$3,600</td>
        </tr>
    </tbody>
</table>

<script>
$(document).ready( function () {
	$('table.demo').DataTable( {
		paging: false,
		searching: false,
		lengthChange: false,
		info: false,
		destroy: true
	} );
} );
</script>
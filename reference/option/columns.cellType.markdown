---
layout: reference_md
title: columns.ceellType
summary: 为创建列设置单元格类型
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,columns.ceellType
author: /reference/option/columns.ceellType
---

## 描述(Description)
创建列的时候改变单元格的类型，要么是`td`要么是`th`。

单元格类型为`th`时很有用，因为在表格的tbody里有特殊的意义，允许它作为行的标题
（你也许希望通过{% include href/option/option.columns param="columns.createdCell" %}选项添加`scope='row'` 属性到 `th` 上）

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/type.Javascript param="string" %}

## 默认值(Default)
- Value ：`td`
 
## 例子(Example)
第一列使用 `th` 单元格
{% highlight javascript linenos %}
$('#example').DataTable( {
    "ajax": "json.txt",
     "columnDefs": [ {
       "targets": 0,
       "cellType": "th"
     } ]
 } );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/option.data param="ajax" %}
- {% include href/option/option.columns param="columns.createdCell" %}

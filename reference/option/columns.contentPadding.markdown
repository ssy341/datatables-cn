---
layout: reference_md
title: columns.contentPadding
summary: 当表格计算最佳值为文本内容添加填充(padding)
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: DataTables,option,columns.contentPadding
author: /reference/option/columns.contentPadding
---

## 描述(Description)

关于这个属性首先要说的是，通常情况下你应该不会使用。

话虽如此，在罕见的情况下还是会用到这个属性。当DataTables计算要分配给每列的列宽时，它会在每列中找到最长的字符串，然后构造一个临时表，并从中读取宽度。
这样做的问题是“mmm”比“iiii”大得多，但后者是一个较长的字符串，因此计算可能出错（做好并且放到dom对象中测量是非常慢的），因此作为解决方案提供了这个属性。
它会将其值附加到发现为列的最长字符串的文本中，即填充


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/Types.html param="string" %}

## 例子(Example)
给表格中最后一列设置一个文本的填充
{% highlight javascript linenos %}
$('#example').DataTable( {
   "columns": [
      null,
      null,
      null,
      { "contentPadding": "mmm" }
    ]
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/Options.html param="autoWidth" %}
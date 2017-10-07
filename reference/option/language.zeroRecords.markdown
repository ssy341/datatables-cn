---
layout: reference_md
title: language.zeroRecords
summary: 用来描述当表格过滤记录为空时的字符串
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.zeroRecords
author: /reference/option/language.zeroRecords
---

## 描述(Description)

当过滤后无显示信息时表格中显示的文本记录。

注意，当表格完全没有任何数据时，显示{% include href/option/Internationalisation.html param="language.emptyTable" %}文本（不管过滤），
而此参数用于当表格过滤后为空的情况。

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="string" %}


## 默认值(Default)
- Value ：`No matching records found`

 
## 例子(Example)

设置没有匹配记录字符串Set zero records string:
{% highlight javascript linenos %}
$('#example').DataTable( {
 "language": {
     "zeroRecords": "没有找到相关记录"
   }
} );
{% endhighlight %}


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Core.html param="search()" %}


Options

- {% include href/option/Internationalisation.html param="language" %}
- {% include href/option/Internationalisation.html param="language.emptyTable" %}
- {% include href/option/Options.html param="search" %}
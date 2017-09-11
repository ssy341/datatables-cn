---
layout: reference_md
title: language.emptyTable
summary: 用来描述表格没有数据的字符串
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.emptyTable
author: /reference/option/language.emptyTable
---

## 描述(Description)
当表格为空时（不管过滤），此字符串首选项是 {% include href/option/option.language param="language.zeroRecords" %}

请注意，这是一个可选参数，如果不给予赋值，值会被{% include href/option/option.language param="language.zeroRecords" %}替换掉（默认值或者给定值）


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type.html param="string" %}

## 默认值(Default)
- Value ：`No data available in table`

 
## 例子(Example)

设置空表格显示的字符提示
{% highlight javascript linenos %}
$('#example').DataTable( {
   "language": {
       "emptyTable": "无可用数据"
     }
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/option.language param="language" %}
- {% include href/option/option.language param="language.infoEmpty" %}
- {% include href/option/option.language param="language.zeroRecords" %}
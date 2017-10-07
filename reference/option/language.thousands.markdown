---
layout: reference_md
title: language.thousands
summary: 千分位分隔符
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.thousands
author: /reference/option/language.thousands
---

## 描述(Description)

DataTables内置的数字格式化方法({% include href/option/Callbacks.html param="formatNumber" %})用于格式化表中使用的大数字。
默认情况下使用逗号分隔，这个参数可以改变成你想要的其他任何字符，适合任何地方，或者你不需要千分位分隔，设置为空即可。

请注意，不同于{% include href/option/Internationalisation.html param="language.decimal" %}，千分位分隔符仅用于输出信息
(特别是{% include href/option/Features.html param="info" %})，更改它不会影响DataTable如何读取原始数据。

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="string" %}


## 默认值(Default)
- Value ：`,`

 
## 例子(Example)

设置千分位分隔符为单引号
{% highlight javascript linenos %}
$('#example').DataTable( {
    "language": {
       "thousands": "'"
      }
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/Internationalisation.html param="language" %}
- {% include href/option/Internationalisation.html param="language.decimal" %}
- {% include href/option/Internationalisation.html param="language.info" %}
- {% include href/option/Internationalisation.html param="language.infoEmpty" %}
- {% include href/option/Internationalisation.html param="language.infoFiltered" %}
- {% include href/option/Internationalisation.html param="language.infoPostFix" %}
- {% include href/option/Callbacks.html param="formatNumber" %}
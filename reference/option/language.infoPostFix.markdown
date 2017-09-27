---
layout: reference_md
title: language.infoPostFix
summary: 在摘要信息后继续追加的字符串
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.infoPostFix
author: /reference/option/language.infoPostFix
---

## 描述(Description)

有时候你希望追加额外的字符串到主要摘要信息上，这个参数就是起这个作用的。

这个字符串在任何时间都会追加到{% include href/option/Internationalisation.html param="language.info" %}({% include href/option/Internationalisation.html param="language.infoEmpty" %}
和{% include href/option/Internationalisation.html param="language.infoFiltered" %} 不管两个怎么组合)。

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="string" %}

## 默认值(Default)
- Value ：`Empty string`

 
## 例子(Example)

在摘要信息添加后缀
{% highlight javascript linenos %}
$('#example').DataTable( {
   "language": {
       "infoPostFix": "所有显示的记录均来源于实际信息"
     }
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/Internationalisation.html param="language" %}
- {% include href/option/Internationalisation.html param="language.info" %}
- {% include href/option/Internationalisation.html param="language.infoEmpty" %}
- {% include href/option/Internationalisation.html param="language.infoFiltered" %}
- {% include href/option/Internationalisation.html param="language.thousands" %}
---
layout: reference_md
title: language.infoEmpty
summary: 用来描述当表格没有记录的时候显示的字符串
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.infoEmpty
author: /reference/option/language.infoEmpty
---

## 描述(Description)

此字符串告诉最终用户表格没有任何记录。通常此字符串的格式应该和`info` 匹配。


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type.html param="string" %}

## 默认值(Default)
- Value ：`Showing 0 to 0 of 0 entries`

 
## 例子(Example)

没有记录可以显示
{% highlight javascript linenos %}
$('#example').DataTable( {
   "language": {
       "infoEmpty": "没有记录可以显示"
     }
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/option.language param="language" %}
- {% include href/option/option.language param="language.info" %}
- {% include href/option/option.language param="language.infoFiltered" %}
- {% include href/option/option.language param="language.infoPostFix" %}
- {% include href/option/option.language param="language.thousands" %}
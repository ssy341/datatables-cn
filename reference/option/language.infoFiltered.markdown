---
layout: reference_md
title: language.infoFiltered
summary: 当表格过滤的时候，将此字符串附加到主要信息
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.infoFiltered
author: /reference/option/language.infoFiltered
---

## 描述(Description)

当用户执行过滤操作的时候，此字符串会被追加到主要信息（`info`）以了解是怎样过滤的。

`_MAX_` 标记会被动态更新 - 参考{% include href/option/Internationalisation.html param="language.info" %} 查看所有的标记

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/Types.html param="string" %}

## 默认值(Default)
- Value ：`(filtered from _MAX_ total entries)`

 
## 例子(Example)

改变过滤信息字符串
{% highlight javascript linenos %}
$('#example').DataTable( {
    "language": {
       "infoFiltered": " - 从 _MAX_ 记录中过滤"
     }
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/Internationalisation.html param="language" %}
- {% include href/option/Internationalisation.html param="language.info" %}
- {% include href/option/Internationalisation.html param="language.infoEmpty" %}
- {% include href/option/Internationalisation.html param="language.infoPostFix" %}
- {% include href/option/Internationalisation.html param="language.thousands" %}
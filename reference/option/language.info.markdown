---
layout: reference_md
title: language.info
summary: 用来描述表格主要信息的字符串
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.info
author: /reference/option/language.info
---

## 描述(Description)

此字符串向最终用户提供表格的当前信息。可以在字符串中插入下面的标记，当表格更新显示的时候会被动态替换掉。

这些标记可以放在字符串的任意一个地方，或者根据自己的需求删除一些标记：

- `\_START\_`   当前页第一条数据的索引
- `\_END\_`   当前页最后一条数据的索引
- `\_TOTAL\_`   过滤后表格中总记录数
- `\_MAX\_`   没有过滤的表格总记录数
- `\_PAGE\_`   当前页数
- `\_PAGES\_`   表格中总页数


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/Types.html param="string" %}

## 默认值(Default)
- Value ：`Showing _START_ to _END_ of _TOTAL_ entries`

 
## 例子(Example)

显示页面计数
{% highlight javascript linenos %}
$('#example').DataTable( {
   "language": {
       "info": "第_PAGE_页(共_PAGES_页）"
     }
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/Internationalisation.html param="language" %}
- {% include href/option/Internationalisation.html param="language.infoEmpty" %}
- {% include href/option/Internationalisation.html param="language.infoFiltered" %}
- {% include href/option/Internationalisation.html param="language.infoPostFix" %}
- {% include href/option/Internationalisation.html param="language.thousands" %}
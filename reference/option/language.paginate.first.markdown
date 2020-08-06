---
layout: reference_md
title: language.paginate.first
summary: 用来描述分页控件_首页_按钮的字符串
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.paginate.first
author: /reference/option/language.paginate.first
---

## 描述(Description)

分页控件显示将用户带到第一页的按钮使用的文字。

请注意，DataTables将此属性以HTML格式写入到document，因此你可以在字符串中使用HTML标签，但是 `<` 和 `>`这样的HTML标记应该要用转义字符 `&lt;` 和 `&gt;`分别来描述。


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/Types.html param="string" %}


## 默认值(Default)
- Value ：`First`

 
## 例子(Example)

给分页控件第一页按钮设置文字
{% highlight javascript linenos %}
$('#example').DataTable( {
    "language": {
        "paginate": {
          "last": "第一页"
        }
      }
} );
{% endhighlight %}

 
## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/Internationalisation.html param="language" %}
- {% include href/option/Internationalisation.html param="language.paginate" %}
- {% include href/option/Internationalisation.html param="language.paginate.last" %}
- {% include href/option/Internationalisation.html param="language.paginate.next" %}
- {% include href/option/Internationalisation.html param="language.paginate.previous" %}
- {% include href/option/Internationalisation.html param="language.aria.paginate" %}
- {% include href/option/Internationalisation.html param="language.aria.paginate.first" %}
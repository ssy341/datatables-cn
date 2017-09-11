---
layout: reference_md
title: language.search
summary: 用来描述搜索输入框的字符串
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.search
author: /reference/option/language.search
---

## 描述(Description)

设置用于DataTables过滤输入控件的字符串。

`_INPUT_` 标记代表input输入框本身，如果你在字符串中使用了这个标记，那么最终他会替换成用于过滤输入的input框，用来控制在
input输入框在字符串里的位置，如果没有使用，那么DataTables默认会在字符串后面追加input输入框

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type.html param="string" %}


## 默认值(Default)
- Value ：`Search:`

 
## 例子(Example)

过滤输入框自动追加到描述文字之后
{% highlight javascript linenos %}
$('#example').DataTable( {
    "language": {
        "paginate": {
          "search": "过滤记录:"
        }
      }
} );
{% endhighlight %}

指定过滤输入框在字符串中显示的位置
{% highlight javascript linenos %}
$('#example').DataTable( {
    "language": {
        "paginate": {
          "search": "应用过滤器 _INPUT_ 到表格"
        }
      }
} );
{% endhighlight %}

 
## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/api.Core param="search()" %}


Options

- {% include href/option/option.language param="language" %}
- {% include href/option/options/option.features param="searching" %}
- {% include href/option/option.language param="language.searchPlaceholder" %}
- {% include href/option/option.language param="language.paginate.next" %}
- {% include href/option/option.language param="language.paginate.previous" %}
- {% include href/option/option.language param="language.aria.paginate" %}
- {% include href/option/option.language param="language.aria.paginate.last" %}
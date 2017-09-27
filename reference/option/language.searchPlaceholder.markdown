---
layout: reference_md
title: language.searchPlaceholder
summary: 搜索输入框元素占位符属性
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10.1
navcategory: option
keywords: option,language.searchPlaceholder
author: /reference/option/language.searchPlaceholder
---

## 描述(Description)


HTML 5 引入了 `input type='text''`元素占位符属性，以便在没有值时为输入控件提供信息文本。

该参数可用于在DataTable的搜索输入中为占位符属性设置值。


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="string" %}


## 默认值(Default)
- Value ：``

此参数的默认值为空字符串，表示最终用户是看不见的

 
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

搜索框没有描述标签，只有占位符描述
{% highlight javascript linenos %}
$('#example').DataTable( {
    "language": {
        search: "_INPUT_",
        searchPlaceholder: "搜索..."
      }
} );
{% endhighlight %}

 
## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Core.html param="search()" %}


Options

- {% include href/option/Internationalisation.html param="language" %}
- {% include href/option/features.html param="searching" %}
- {% include href/option/Internationalisation.html param="language.search" %}
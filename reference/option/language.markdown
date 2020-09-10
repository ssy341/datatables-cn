---
layout: reference_md
title: language
summary: DataTables语言配置选项
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language
author: /reference/option/language
---

## 描述(Description)

DataTables在用户界面中使用的字符串都在此对象中定义，允许你单独修改或者完全重新定义替换他们。因为可以使用任何语言的字符串，确保数据表完全可以国际化

DataTables的默认语言选项如下所示。此外，这里还提供了更多翻译在[这里](https://datatables.net/plug-ins/i18n)

以下是DataTables为其默认使用的语言字符串(有关每个参数的的信息，请参阅其各自的文档)

{% highlight javascript linenos %}
{
    "decimal":        "",
    "emptyTable":     "No data available in table",
    "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
    "infoEmpty":      "Showing 0 to 0 of 0 entries",
    "infoFiltered":   "(filtered from _MAX_ total entries)",
    "infoPostFix":    "",
    "thousands":      ",",
    "lengthMenu":     "Show _MENU_ entries",
    "loadingRecords": "Loading...",
    "processing":     "Processing...",
    "search":         "Search:",
    "zeroRecords":    "No matching records found",
    "paginate": {
        "first":      "First",
        "last":       "Last",
        "next":       "Next",
        "previous":   "Previous"
    },
    "aria": {
        "sortAscending":  ": activate to sort column ascending",
        "sortDescending": ": activate to sort column descending"
    }
}
{% endhighlight %}

从 DataTables 1.10.7 开始，新的{% include href/APIs.html param="i18n()" %}方法可以由插件作者从{% include href/Options.html param="language" %}对象来访问语言信息。
因此这里提供的参数列表并不是最详细的。如果你想知道使用{% include href/APIs.html param=" i18n()" %}能获取到的完整信息，参考插件文档。

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/Types.html param="string" %}


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="i18n()" %}

Options

- {% include href/Options.html param="language.decimal" %}
- {% include href/Options.html param="language.emptyTable" %}
- {% include href/Options.html param="language.info" %}
- {% include href/Options.html param="language.infoEmpty" %}
- {% include href/Options.html param="language.infoFiltered" %}
- {% include href/Options.html param="language.infoPostFix" %}
- {% include href/Options.html param="language.thousands" %}
- {% include href/Options.html param="language.lengthMenu" %}
- {% include href/Options.html param="language.loadingRecords" %}
- {% include href/Options.html param="language.processing" %}
- {% include href/Options.html param="language.search" %}
- {% include href/Options.html param="language.zeroRecords" %}
- {% include href/Options.html param="language.paginate" %}
- {% include href/Options.html param="language.paginate.first" %}
- {% include href/Options.html param="language.paginate.last" %}
- {% include href/Options.html param="language.paginate.next" %}
- {% include href/Options.html param="language.paginate.previous" %}
- {% include href/Options.html param="language.aria" %}
- {% include href/Options.html param="language.aria.sortAscending" %}
- {% include href/Options.html param="language.aria.sortDescending" %}
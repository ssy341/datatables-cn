---
layout: reference_md
title: language.zeroRecords
summary: Table empty as a result of filtering string.
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.zeroRecords
author: /reference/option/language.zeroRecords
---

## 描述(Description)

Text shown inside the table records when the is no information to be displayed after filtering.

Note that language.emptyTable is shown when there is simply no information in the table at all (regardless of filtering), while this parameter is used for when the table is empty due to filtering.

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/type.Javascript param="string" %}


## 默认值(Default)
- Value ：`No matching records found`

 
## 例子(Example)

Set zero records string:
{% highlight javascript linenos %}
$('#example').DataTable( {
 "language": {
     "zeroRecords": "No records to display"
   }
} );
{% endhighlight %}


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/api.Core param="search()" %}


Options

- {% include href/option/option.language param="language" %}
- {% include href/option/option.language param="language.emptyTable" %}
- {% include href/option/option/option.options param="search" %}
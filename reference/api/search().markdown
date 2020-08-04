---
layout: reference_md
title: search()
summary: 在表格里搜索数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: search,api
author: /reference/api/search()
---

## 描述(Description)

检索数据是表概念的核心，该方法允许用户轻松访问数据。该方法提供通过API控制表的全局搜索的能力。全局搜索在所有可搜索的列中执行（参考{% include href/option/Columns.html param="columns.searchable" %}禁止搜索某些列）。
如果发现数据在任何列中匹配，则整行匹配并显示在结果集中。可以使用{% include href/APIs.html param="columns().search()" %}和{% include href/APIs.html param="column().search()" %}方法来执行各个列的搜索。

DataTables有一个内置的搜索算法，称为“smart”搜索，旨在搜索表格数据，方便最终用户使用。smart搜索提供以下功能：

- 匹配无序单词（Match words out of order）。例如你搜索 `Allan Fife`，它将匹配包含单词 `Allan` 和 `Fife` 的行，而不管他们在表格中的顺序或位置如何。
- 部分字符匹配（Partial word matching）。随着用户在输入框里输入字符，DataTables将给出及时过滤，单词的部分可以在结果集中匹配。比如，`All` 将会匹配 `Allan`。
- 保留文本（Preserved text）。1.10+版本提供了搜索文本可以包含双引号，来搜索确切短语的功能。比如 `Allan Fife` 将只会匹配包含`Allan Fife`的文本，`Allan is in Fife`将不会匹配。

smart搜索是用正则表达式实现，可以使用此方法的第三参数启用或者禁用。如果你希望使用自定义正则表达式，比如，要执行全字精确匹配，你需要启用正则表达式选项（第二个参数），并禁用smart搜索选项（第三个参数）,以确保两者不冲突。
DataTables提供了一个工具方法（{% include href/api/Static.html param="$.fn.dataTable.util.escapeRegex()" %}）来转义正则表达式特殊字符，如果用户输入和正则表达式混合，这个方法将非常有用。

请注意，smart搜索实际上是一个过滤器，因为它是减法操作。但是，我们在术语上命名为 search 是为了避免和{% include href/api/Utility.html param="filter()" %}辅助方法相冲突。

请注意，此方法并不执行搜索操作，为了执行搜索并显示结果，请使用{% include href/api/Core.html param="draw()" %}方法，例如：`table.search( 'Fred' ).draw();`.
这是为了在重绘前，还可以执行其他操作，然后一并显示结果。

## 类型(Type)
这个选项能够接受以下类型的参数：

---

### _function_ **search()**

---

#### 描述(Description):
获取当前全局搜索词。如果当前有多个DataTables实例对象，将返回找到的第一个实例对象的搜索词。使用{% include href/api/Tables.html param="table()" %}来获取不同表格实例。

#### 返回(Returns):
{% include href/type/Javascript.html param="string" %}

当前全局搜索的词语。如果没有，将返回空字符串。

---
    
### _function_ **search( input [, regex[ , smart[ , caseInsen ]]] )**   

---

#### 描述(Description):
设置全局搜索应用到表格中。注意，如果要把搜索结果显示在表格中，还需要执行{% include href/api/Core.html param="draw()" %}方法。

#### 参数(Parameters):
{% include_relative parameters/search.html %}

#### 返回(Returns):
{% include href/Types.html param="DataTables.Api" %}


DataTables API 实例对象


--- 
    
## 例子(Example)

使用自定义的输入框过滤表格数据，`#myInput` 是一个 `<input type="text">` 元素
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
$('#myInput').on( 'keyup', function () {
    table.search( this.value ).draw();
} );
{% endhighlight %}

使用自定义正则表达式完全匹配字符：
{% highlight javascript linenos %}
var table = $('#example').DataTable();
 
var columnNo = 1;
var myValue = $('#myInput').val();
var regExSearch = '^\\s' + myValue +'\\s*$';
table.column(columnNo).search(regExSearch, true, false).draw();
{% endhighlight %}




## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="column().search()" %}
- {% include href/APIs.html param="columns().search()" %}
- {% include href/api/Static.html param="$.fn.dataTable.util.escapeRegex()" %}


Options

- {% include href/option/Features.html param="searching" %}
- {% include href/option/Columns.html param="columns.searchable" %}
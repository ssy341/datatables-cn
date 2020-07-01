---
layout: reference_md
title: dom
summary: 定义表格控制元素以什么顺序在页面上显示
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,dom
author: /reference/option/dom
---

## 描述(Description)


DataTables将在表格的周围添加许多元素，来控制表格并显示有关表格的其他信息。这些元素的位置在屏幕上由document(DOM)的顺序和应用于这些元素的CSS共同来控制。这个参数被用来控制他们的显示顺序以及额外的标记在DOM中是如何包裹的。

每个表格控制元素在DataTables中有一个单独的字母和他们关联，并且在{% include href/option/Options.html param="dom" %}选项中使用的字母，来表示该元素在document中出现的位置。


- ### 选项（Options）

  DataTables中的内置的控制元素是如下这些：

  - `l` - `l`ength 长度改变输入控制
  - `f` - `f`iltering 过滤输入框
  - `t` - `t`able 表格本身
  - `i` - `i`nformation 信息概览
  - `p` - `p`agination 翻页控制
  - `r` - p`r`occessing 处理中显示元素

  以上每一个选项都可以指定多次（表格本身除外），这样可以在表格上下都有同样的控制元素。DataTables会自动保持多个控件的同步。

  除了上述这些选项以外，DataTables还能理解两个常量（请注意，这两个选项在1.10版本中已经弃用，在1.11版本中删除，并将在{% include href/option/Options.html param="jQueryUI" %}选项分离到其他自己的主题文件中 ）

  - `H` - jQueryUI 主题 "header" 样式 （{% include href/string.html param="header" %}）
  - `F` - jQueryUI 主题 "footer" 样式 （{% include href/string.html param="footer" %}）


- ### 标记语言（Markup）

  除了这些选项，你还可以指明额外的{% include href/tags.html param="div" %}元素插入到document中，这样可以控制元素的样式/嵌套。需要添加标签，需要使用如下的语法：

  - `<` 和 `>` - div 元素
  - `<"class"` 和 `>` - 指定一个样式的 div 元素
  - `<"#id"` 和 `>` - 指定一个ID的 div 元素
  - `<"#id.class"` 和 `>` - 既指定ID又指定样式的  div 元素

- ### 样式（Styling）

  DataTables支持的样式库将覆盖{% include href/option/Options.html param="dom" %}参数的默认值，并将其替换为合适他们布局系统的值。比如，Bootstrap就会利用他的网格布局。

  样式集成的默认值为：

  Bootstrap 3:
  {% highlight javascript %}
  "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
  "<'row'<'col-sm-12'tr>>" +
  "<'row'<'col-sm-5'i><'col-sm-7'p>>",
  {% endhighlight %}

  Bootstrap 4:
  {% highlight javascript %}
  "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
  "<'row'<'col-sm-12'tr>>" +
  "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
  {% endhighlight %}

  Foundation:
  {% highlight javascript %}
  "<'row'<'small-6 columns'l><'small-6 columns'f>r>"+
  "t"+
  "<'row'<'small-6 columns'i><'small-6 columns'p>>",
  {% endhighlight %}

  jQuery UI:
  {% highlight javascript %}
  '<"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix ui-corner-tl ui-corner-tr"lfr>'+
  't'+
  '<"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix ui-corner-bl ui-corner-br"ip>',
  {% endhighlight %}

  Semantic UI:
  {% highlight javascript %}
  "<'ui stackable grid'"+
      "<'row'"+
          "<'eight wide column'l>"+
          "<'right aligned eight wide column'f>"+
      ">"+
      "<'row dt-table'"+
          "<'sixteen wide column'tr>"+
      ">"+
      "<'row'"+
          "<'seven wide column'i>"+
          "<'right aligned nine wide column'p>"+
      ">"+
  ">"
  {% endhighlight %}


- ### 插件（Plug-ins）

  可以开发DataTables功能插件来向DataTables添加其他功能，并且通常会利用此选项向DataTables核心功能添加新字母。比如，[Buttons]({{site.baseurl}}/extensions/buttons)添加`B`到{% include href/option/Options.html param="dom" %}来指定应将表格控制按钮插入到表格的哪个位置。

  通过{% include href/option/Options.html param="dom" %}选项下面这些[扩展（extensions）]({{site.baseurl}}/extensions)能够被初始化：

  - `B` - [Buttons]({{site.baseurl}}/extensions/buttons)
  - `R` - [ColReorder](https://datatables.net/extensions/colreorder)
  - `S` - [Scroller](https://datatables.net/extensions/scroller)
  - `P` - [SearchPanes](https://datatables.net/extensions/searchpanes)


- ### 未来走向

  注意，我知道这是DataTables中最复杂的选项，需要学习很多，尤其是在使用集成样式选项时。我也计划在1.11版中改进此选项，以使其更易于使用。


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="string" %}

## 默认值(Default)

- Value ：`lfrtip`
 
请注意，如果使用集成样式选项之一，例如Bootstrap，Foundation或jQueryUI，他们将更改此参数的默认值，请参阅说明以了解他们设置的值。


## 例子(Example)

没有过滤输入框

{% include runcode.html param="dom-example1" %}
{: #dom-example1-js }
{% highlight javascript %}

/* Results in:
    <div>
      {length}
      {processing}
      {table}
      {information}
      {pagination}
    </div>
*/
$('#example').dataTable( {
  "dom": 'lrtip'
} );
{% endhighlight %}

把控制元素包裹起来


{% include runcode.html param="dom-example2" %}
{: #dom-example2-js }
{% highlight javascript %}
/* Results in:
    <div class="wrapper">
      {filter}
      {length}
      {information}
      {pagination}
      {table}
    </div>
*/
$('#example').dataTable( {
  "dom": '<"wrapper"flipt>'
} );
{% endhighlight %}

{: #dom-example2-css }
{% highlight css %}
.wrapper{
  background: red;
}
{% endhighlight %}

长度改变控件和过滤框在上面，信息展示和分页在表格下面


{% include runcode.html param="dom-example3" %}
{: #dom-example3-js }
{% highlight javascript %}
/* Results in:
    <div>
      {length}
      {filter}
      <div>
        {table}
      </div>
      {information}
      {pagination}
    </div>
*/
$('#example').dataTable( {
  "dom": '<lf<t>ip>'
} );
{% endhighlight %}


表格概览信息在头部，过滤框，长度改变和处理中在底部再加一个clear元素


{% include runcode.html param="dom-example4" %}
{: #dom-example4-js }
{% highlight javascript %}
/* Results in:
    <div class="top">
      {information}
    </div>
    {processing}
    {table}
    <div class="bottom">
      {filter}
      {length}
      {pagination}
    </div>
    <div class="clear"></div>
*/
$('#example').dataTable( {
  "dom": '<"top"i>rt<"bottom"flp><"clear">'
} );
{% endhighlight %}

{: #dom-example4-css }
{% highlight css %}
.top{
  background: red;
}
.bottom{
  background: blue;
}
.clear{
  background: green;
}
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/Features.html param="searching" %}
- {% include href/option/Features.html param="info" %}
- {% include href/option/Features.html param="ordering" %}
- {% include href/option/Features.html param="processing" %}
- {% include href/option/Features.html param="paging" %}
- {% include href/option/Features.html param="lengthChange" %}

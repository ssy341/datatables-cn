---
layout: reference_md
title: tabIndex
summary: Tab键控制键盘导航
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,tabIndex
author: /reference/option/tabIndex
---

## 描述(Description)
默认情况下DataTables允许通过添加`tabIndex` 属性在需要的元素上,实现键盘导航操作表格（比如每页条数，过滤，排序，和分页操作）。
这样用户就可以使用 `tab` 键切换到相应的控件，按下 `enter` 激活它们，而不需要使用鼠标操作。

默认下 tabIndex 为 `0`，意味着按照dom的顺序进行切换。`-1` 代表禁用tab切换焦点。

需要注意的是，默认情况下，tab切换的焦点是浏览器原生支持的元素，比如`form`表单里的所有元素(`input`,`radio`,`select`,`button`等等)，还有`a`标签之类的这种带操作性质的元素。
DataTables内部处理，当 `tabIndex` 的值大于0时，焦点切换的顺序是先在带有 `tabIndex` 的属性的元素按照数字大小依次切换，然后再是其他元素（select-每页显示多少条数据，input-过滤框），详细看下面例子的解释

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/Types.html param="integer" %}

## 默认值(Default)
- Value ：`0`
 
## 例子(Example)
以起始焦点在l(数据长度切换下拉框)上，tabIndex为1的时候，焦点切换顺序依次是：
- l(数据长度切换下拉框)
- f(过滤input)
- th(可以排序的表头)
- p(分页控件)
- th(可以排序的表头)
- p(分页控件)
- l(数据长度切换下拉框)
- f(过滤input)
{% highlight javascript linenos %}
$('#example').DataTable( {
   "tabIndex": 1
 } );
{% endhighlight %}

同样以起始焦点在l(数据长度切换下拉框)上，tabIndex为0的时候（默认为0），焦点切换顺序依次是：
- l(数据长度切换下拉框)
- f(过滤input)
- th(可以排序的表头)
- p(分页控件)

{% highlight javascript linenos %}
$('#example').DataTable( {
   "tabIndex": 0
 } );
{% endhighlight %}


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/Options.html param="ordering" %}
- {% include href/Options.html param="paging" %}
- {% include href/Options.html param="searching" %}

---
layout: reference_md
title: renderer
summary: 显示组件渲染器类型
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,renderer
author: /reference/option/renderer
---

## 描述(Description)
DataTables添加了一些复杂的控件，比如分页控件。用于计算表格中的数据应该显示多少页，是DataTables的核心，通常情况下
不会跟着页面的样式改变实际显示的方式，比如分页按钮可能是`ul`下的`li`,或者只是一组`a`标签。

DataTables提供了扩展的能力，DataTables提供集成选项来支持目前几种流行的CSS框架，比如 Bootstrap ，Foundation 和 jQuery UI。

此参数可以告诉 DataTables 使用那种渲染器，前提是指定的渲染器是已经存在的，否则使用默认的渲染器。可以通过插件添加其他渲染器。

DataTables当前支持两种不同渲染器类型：

- `header` 头单元格渲染器
- `pageButton` 分页按钮


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/Javascript.html param="string" %}
使用指定的渲染器，如果不存在将使用默认的渲染器

- {% include href/type/Javascript.html param="object" %}
为不同的渲染器类型指定特定的渲染器
 
## 例子(Example)
使用 Bootstrap 插件渲染器 
{% highlight javascript linenos %}
$('#example').DataTable( {
    renderer: "bootstrap"
} );
{% endhighlight %}

指定特定的渲染器
{% highlight javascript linenos %}
$('#example').DataTable( {
    renderer: {
        "header": "jqueryui",
        "pageButton": "bootstrap"
    }
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/Options.html param="pagingType" %}
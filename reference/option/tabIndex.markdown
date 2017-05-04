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
默认情况下DataTables允许通过添加`tabindex` 属性键盘导航操作表格（比如排序，分页和过滤操作）



## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/type.Javascript param="integer" %}

## 默认值(Default)
- Value ：`7200`
 
## 例子(Example)
设置有效期时间为1天
{% highlight javascript linenos %}
$('#example').DataTable( {
   "stateSave": true,
    "stateDuration": 60 * 60 * 24
 } );
{% endhighlight %}

使用`sessionStorage`
{% highlight javascript linenos %}
$('#example').DataTable( {
   "stateSave": true,
     "stateDuration": -1
 } );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/options/option.features param="stateSave" %}

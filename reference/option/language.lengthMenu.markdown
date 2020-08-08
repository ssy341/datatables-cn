---
layout: reference_md
title: language.lengthMenu
summary: 用来描述页面长度选项的字符串
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.lengthMenu
author: /reference/option/language.lengthMenu
---

## 描述(Description)

通过选择下拉菜单的值改变每页显示的记录数。 `_MENU_` 标记被默认替换成10,25,50,100（或者任何其他通过{% include href/Options.html param="lengthMenu" %}指定的值），如果需要，可以自己定义选择列表替换。

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/Types.html param="string" %}

## 默认值(Default)
- Value ：`Show _MENU_ entries`

 
## 例子(Example)

仅仅改变显示的文字
{% highlight javascript linenos %}
$('#example').DataTable( {
   "language": {
       "lengthMenu": "显示 _MENU_ 条记录"
     }
} );
{% endhighlight %}

改变显示的文字和选项（最好不要使用`lengthMenu`）
{% highlight javascript linenos %}
$('#example').DataTable( {
    "language": {
       "lengthMenu": '显示 <select>'+
         '<option value="10">10</option>'+
         '<option value="20">20</option>'+
         '<option value="30">30</option>'+
         '<option value="40">40</option>'+
         '<option value="50">50</option>'+
         '<option value="-1">所有</option>'+
         '</select> 记录'
     }
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="page.len()" %}

Options

- {% include href/option/Internationalisation.html param="language" %}
- {% include href/Options.html param="lengthChange" %}
- {% include href/Options.html param="lengthMenu" %}
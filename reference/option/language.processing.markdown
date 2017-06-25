---
layout: reference_md
title: language.processing
summary: 用来描述加载进度的字符串
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.processing
author: /reference/option/language.processing
---

## 描述(Description)

当表格正在执行用户操作的时候显示的字符串(通常是一个排序操作或者类似的)


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/type.Javascript param="string" %}


## 默认值(Default)
- Value ：`Processing...`

 
## 例子(Example)

设置处理过程中显示的文字
{% highlight javascript linenos %}
$('#example').DataTable( {
    "language": {
        "paginate": {
          "processing": "正在处理中。。。"
        }
      }
} );
{% endhighlight %}

 
## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/option.language param="language" %}
- {% include href/option/option.language param="language.loadingRecords" %}
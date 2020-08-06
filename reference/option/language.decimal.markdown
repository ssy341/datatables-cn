---
layout: reference_md
title: language.decimal
summary: 小数位符号
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.decimal
author: /reference/option/language.decimal
---

## 描述(Description)
`.`在JavaScript里用来描述小数，然后在[世界其他地方](http://en.wikipedia.org/wiki/Decimal_mark)里使用 `,` 或者其他符号来描述，
比如Unicode的小数分隔符 `⎖`  或者短横线 `-` 。

读取这些数字的时候，DataTables 不会自动识别为数字，然而 DataTables类型检测方法可以通过设置此参数来得知那些字符用来作为数字中的小数位。
这将用于正确调整DataTables类型检测和排序算法对表格中的数据进行排序。

这个选项有点不寻常，因为DataTablse永远不会显示一个格式化后的浮点数（它不需要）。所以这个选项他只会影响到如何解析或读取数据（没有其他语言选项有这个能力）。

任何字符都可以使用此选项设置为小数位，尽管单个表中使用的小数位必须一致（具有小数位和逗号小数位的数字不能同时出现在同一个表格中，因为两个类型是不明确的）。
如果需要，同一页面上的不同表格可以使用不同的小数位符号。

当以空字符串的形式给出时（默认情况下为此参数），`.`作为小数位符号。


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/Types.html param="string" %}

## 默认值(Default)
- Value ：``

 一个空字符串，在这里作为默认值使用，代表DataTables以`.`做为小数位符号
 
 
## 例子(Example)
使用逗号作为小数位符号
{% highlight javascript linenos %}
$('#example').DataTable( {
  "language": {
    "decimal": ","
  }
} );
{% endhighlight %}


使用短横杠作为小数位符号，使用点作为千分位分隔符号
{% highlight javascript linenos %}
$('#example').DataTable( {
 "language": {
    "decimal": "-",
    "thousands": "."
  }
} );
{% endhighlight %}

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/Internationalisation.html param="language" %}
- {% include href/option/Internationalisation.html param="language.thousands" %}
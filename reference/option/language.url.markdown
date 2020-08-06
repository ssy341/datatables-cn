---
layout: reference_md
title: language.url
summary: 从远程文件读取国际化信息
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.url
author: /reference/option/language.url
---

## 描述(Description)

DataTables提供的所有语言选项都可以储存在服务器上的文件中，如果你设置了此参数，DataTables将会从这个url中去获取语言。
该文件必须是有效的JSON文件，里面包含的属性参考{% include href/option/Internationalisation.html param="language" %}

在这个[网站](https://datatables.net/plug-ins/i18n)上，已经有其他语言的插件可以直接使用。

请注意当此参数设置时，由于Ajax数据加载，DataTables初始化将是异步的。也就是说，在完成Ajax请求之前，不会绘制表格。
因此，需要表完成其初始化的任何操作都应该放在 {% include href/option/Callbacks.html param="initComplete" %} 回调中处理。


## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/Types.html param="string" %}

 
## 例子(Example)

从远程文件中读取语言信息
{% highlight javascript linenos %}
$('#example').DataTable( {
  "language": {
      "url": "http://datatables.club/assets/Chinese.txt"
    }
} );
{% endhighlight %}


由于使用了url参数，异步加载，合计列操作需要放在initComplete回调中处理
{% highlight javascript linenos %}
$('#example').DataTable({
    "language": {
        "url": "http://datatables.club/assets/Chinese.txt"
    },
    "initComplete": function () {
        var api = this.api();
 
        // Put the sum of column 5 into the footer cell
        $(api.column(5).footer()).html(
            api.column(5).data().reduce(function (a, b) {
            return a + b;
        }));
    }
});
{% endhighlight %}


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/Internationalisation.html param="language" %}
- {% include href/option/Callbacks.html param="initComplete" %}
---
layout: reference_md
title: language.url
summary: Load language information from remote file.
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,language.url
author: /reference/option/language.url
---

## 描述(Description)

All of the language options DataTables provides can be stored in a file on the server, which DataTables will look up if this parameter is passed. The file must be a valid JSON file, and the object it contains has the same properties as the language object in the initialiser object.

There are a wide range of translations readily available on this site, in the internationalisation plug-ins.

Note that when this parameter is set, DataTables' initialisation will be asynchronous due to the Ajax data load. That is to say that the table will not be drawn until the Ajax request as completed. As such, any actions that require the table to have completed its initialisation should be placed into the initComplete callback.

## 类型(Type)
这个选项能够接受以下类型的参数：

- {% include href/type/type.Javascript param="string" %}


## 默认值(Default)
- Value ：`,`

 
## 例子(Example)

Load language information from a remote file:
{% highlight javascript linenos %}
$('#example').DataTable( {
  "language": {
      "url": "/dataTables/i18n/de_de.lang"
    }
} );
{% endhighlight %}


{% highlight javascript linenos %}
"language": {
    "url": "/dataTables/i18n/de_de.lang"
  },
  "initComplete": function () {
    var api = this.api();
 
    // Put the sum of column 5 into the footer cell
    $( api.column( 5 ).footer() ).html(
        api.column( 5 ).data().reduce( function (a, b) {
            return a + b;
        } )
    );
  }
{% endhighlight %}


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

Options

- {% include href/option/option.language param="language" %}
- {% include href/option/option.callbacks param="initComplete" %}
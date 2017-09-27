---
layout: reference_md
title: ajax
summary: 异步获取数据填充到表格显示(ajax)
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: option,ajax,jQuery
author: /reference/option/ajax
---

## 描述(Description)

使用这个参数可以让 DataTables 像使用jQuery ajax 一样从一个数据源获取数据，最终获取到返回的数据
来显示表格，DataTables 支持 JavaScript数组，JSON数据，可以参考
[JavaScript数据数据源](/example/data_sources/js_array.html)、
[Ajax数据源](/example/data_sources/ajax.html)
    
当你使用对象数组作为数据源时，你需要使用{% include href/option/Columns.html param="columns.data" %}来匹对对象的属性，
如果使用的是纯数组则不需要使用，DataTables 会默认按照数组的顺序显示每一个行数据
    
`ajax` 接收三种类型的参数：
- `string` - 设置获取数据的url
- `object` - 和 {% include href/jQuery/jQuery.ajax %} 定义类似
- `function`- 自定义获取数据的功能



## 类型(Type)
这个选项能够接受以下类型的参数：


### string

这个是最简单的应用，`ajax` 指定一个返回数据的url，这个是多个形式的比如
json.txt、json.txt、jsonlist.action、jsonlist.jsp、jsonlist.php……

Datatables默认接收的是一个属性为 `data`，如果你返回的数据不是这样，
你需要使用 {% include href/option/data.html param="ajax.dataSrc" %} 来处理

默认的数据（对象）格式如下：
{% highlight javascript linenos %}
//data.json返回数据格式如下
{
    "data": [
        { "name": "Tiger Nixon", "position": "System Architect", "salary": "$3,120", "start_date": "2011/04/25", "office": "Edinburgh", "extn": "5421" },
        // row 2 data source,
        // etc
    ]
}            

//如下代码初始化
$('#example').DataTable({
    "ajax": "data.json",
    "columns": [
        {"data": "name"},
        {"data": "position"},
        {"data": "salary"},
        {"data": "start_date"},
        {"data": "office"},
        {"data": "extn"}
    ]
});
{% endhighlight %}

默认的数据（数组）格式如下：
{% highlight javascript linenos %}
//data.json返回数据格式如下
{
    "data": [
        ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$3,120"],
        ......
    ]
}

//如下代码初始化
$('#example').DataTable( {
  "ajax": "data.json"
} );
{% endhighlight %}


### object

接收一个对象，其用法类同于 {% include href/jQuery/jQuery.ajax %}，
这里只介绍不相同的，没有列出的参考jQuery文档即可，可以同样适用

- `data` ({% include href/option/data.html param="ajax.data" %}) - 与jQuery一样，接收一个对象，这里Datatables对他做出扩展，还可以接收 `function`，作为 function 时可以操作请求参数，在实际应用中，可以在此函数里加入自定义的条件传到服务器。这个方法在1.9-版本中为 `fnServerParams`。
- `dataSrc`（{% include href/option/data.html param="ajax.dataSrc" %}） - 如果 DataTables 是通过 ajax 获取取数据，默认情况下，DataTables会去读取返回数据中的 `data`（在1.9-中是`aaData`）对象。这个方法已经取代了1.9-中的 `sAjaxDataProp`
- `success` 这个是在Datatables内部调用的，不能覆盖使用，如果你不满意Datatables的实现，你可以使用{% include href/option/data.html param="ajax.dataSrc" %}处理，或者是把 `ajax` 作为一个函数使用（见下面的说明）

一个简单的例子：

{% highlight javascript linenos %}
$('#example').dataTable( {
  "ajax": {
    "url": "data.json",
    "type": "POST"
  }
} );
{% endhighlight %}



### function ajax( data, callback, settings )

#### 描述(Description):

作为一个函数，这个可以完全自己控制Ajax请求，请求参数，返回的数据都可以不受 DataTables 的影响。事实上你可以使用非Ajax请求，而直接使用本地储存。你可以直接从本地数据库获取数据交给 `callback` 去处理

例子如下：

{% highlight javascript linenos %}
$('#example').DataTable( {
  "ajax": function (data, callback, settings) {
    callback(
      JSON.parse( localStorage.getItem('dataTablesData') )
    );
  }
} );
{% endhighlight %}

注意：在1.10.6+， 当使用了 `ajax` 属性后，{% include href/event.html param="xhr" %}事件会被触发（即使没有ajax请求）
            
#### 参数(Parameters):
{% include_relative ajax-parameters-code.html %}

## 例子(Example)



ajax访问json格式文件获取数据

{% highlight javascript linenos %}
$('#example').DataTable( {
  "ajax": "data.json"
} );
{% endhighlight %}


更改Ajax的请求方式

{% highlight javascript linenos %}
$('#example').DataTable( {
  "ajax": {
    "url": "data.json",
    "type": "POST"
  }
} );
{% endhighlight %}

添加额外的参数发送到服务器(注意：下列方式不适用于服务器模式)

{% highlight javascript linenos %}
$('#example').DataTable( {
  "ajax": {
    "url": "data.json",
    "data": function ( d ) {
        d.extra_search = $('#extra').val();
    }
  }
} );
{% endhighlight %}


添加额外的参数发送到服务器(适用服务器模式)

{% highlight javascript linenos %}
$('#example').DataTable( {
  "serverSide":true,
  "ajax": {
    "url": "data.json",
    "data": function ( d ) {
      return $.extend( {}, d, {
        "extra_search": $('#extra').val()
      } );
    }
  }
} );
{% endhighlight %}


操作服务器返回的数据添加链接，这个使用  {% include href/option/Columns.html param="columns.render" %}也可以达到效果，这里只是演示怎么操作返回的数据

{% highlight javascript linenos %}
$('#example').DataTable( {
  "ajax": {
    "url": "data.json",
    "dataSrc": function ( json ) {
      for ( var i=0, ien=json.length ; i<ien ; i++ ) {
        json[i][0] = '<a href="/message/'+json[i][0]+'">View message</a>';
      }
      return json;
    }
  }
} );
{% endhighlight %}

获取本地的数据

{% highlight javascript linenos %}
$('#example').dataTable( {
  "ajax": function (data, callback, settings) {
    callback(
      JSON.parse( localStorage.getItem('dataTablesData') )
    );
  }
} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Core.html param="ajax.json()" %}
- {% include href/api/Core.html param="ajax.reload()" %}
- {% include href/api/Core.html param="ajax.url()" %}

API

- {% include href/option/features.html param="serverSide" %}
- {% include href/option/data.html param="ajax.data" %}
- {% include href/option/data.html param="ajax.dataSrc" %}

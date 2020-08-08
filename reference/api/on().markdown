---
layout: reference_md
title: on()
summary: 监听表格事件
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: on,api
author: /reference/api/on()
---


## 描述(Description)


DataTables可以触发很多事件，这些事件在DataTables执行对应事件可以采取相应的行动。比如说，知道当Ajax事件（{% include href/event.html param="xhr" %}）
何时发生是非常有用的，所以你可以添加额外的数据到JSON有效载荷。

DataTables提供了使用DataTables事件的三种方法，与jQuery核心事件方法相匹配：

- {% include href/APIs.html param="on()" %} 监听事件
- {% include href/APIs.html param="off()" %} 移除监听事件
- {% include href/APIs.html param="one()" %} 监听一次然后移除事件



`on()`方法用于监听DataTables的事件。只要传递你想要监听的事件，和一个回调函数，当事件被DataTables触发时，它将被激活。



## 类型(Type)
这个选项能够接受以下类型的参数：

---
    
### _function_ **on( event, callback )**  
 
---

#### 描述(Description):

监听事件，并在发生这个事件的时候触发回调函数
     
#### 参数(Parameters):
{% include_relative parameters/on.html %}

#### 返回(Returns):

{% include href/Types.html param="DataTables.Api" %}

DataTables API 实例对象

--- 
    
## 例子(Example)

在控制台打印每一次 `xhr` 事件
{% highlight javascript linenos %}
var table = $('#example').DataTable( {
    ajax: "/data.json"
} );
 
table.on( 'xhr', function ( e, settings, json ) {
    console.log( 'Ajax发生了.返回的数据是: ', json );
} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="off()" %}
- {% include href/APIs.html param="one()" %}

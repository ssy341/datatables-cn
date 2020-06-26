---
layout: reference_md
title: off()
summary: 移除表格所有事件
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
categories: reference api
keywords: off,api
author: /reference/api/off()
---


## 描述(Description)

DataTables可以触发很多事件，这些事件在DataTables执行对应事件可以采取相应的行动。比如说，知道当Ajax事件（{% include href/event.html param="xhr" %}）
何时发生是非常有用的，所以你可以添加额外的数据到JSON有效载荷。

DataTables提供了使用DataTables事件的三种方法，与jQuery核心事件方法相匹配：

- {% include href/api/Core.html param="on()" %} 监听事件
- {% include href/api/Core.html param="off()" %} 移除监听事件
- {% include href/api/Core.html param="one()" %} 监听一次然后移除事件


`off()`方法用于删除已经附加到DataTables的事件。只需要传递你希望删除的事件即可移除事件监听，你还可以使用特定的方法来移除单个的事件监听。


## 类型(Type)
这个选项能够接受以下类型的参数：


---
    
### _function_ **off( event [, callback] )**   

---


#### 描述(Description):

删除使用 {% include href/api/Core.html param="on()" %} 绑定的监听器
     
#### 参数(Parameters):
{% include_relative off-parameters-code.html %}

#### 返回(Returns):

{% include href/type/DataTables.html param="DataTables.Api" %}

DataTables API 实例对象


--- 
    
## 例子(Example)

监听第一次 `xhr` 事件， 请注意，这个和使用 `table.one(...);` 是一样的效果
{% highlight javascript %}
var table = $('#example').DataTable( {
    ajax: "/data",
    serverSide: true
} );
 
table.on( 'xhr', function ( e, settings, json ) {
    table.off( 'xhr' );
    console.log( 'Ajax事件发生，返回的数据: ', json );
} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Core.html param="on()" %}
- {% include href/api/Core.html param="one()" %}


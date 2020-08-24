---
layout: manual
toc: true
title: 事件 Events
author: /manual/events
---

知道Datatables或者扩展功能何时执行了特定的操作（例如页面绘制）通常很有用，这样其他依赖的元素就可以做出相应的更新。为了提供此功能，Datatables将触发自定义DOM事件，可以使用{% include href/APIs.html param="on()" %}方法或[`$().on()`][on]方法侦听，然后采取行动。Datatables的自定义事件的工作方式与标准DOM事件完全相同，并且允许事件驱动的动作，这对于插件特别有用。

有关Datatables及其扩展功能将触发的事件的完整列表，请参阅[事件参考文档][events]。


## 监听事件（Listening for events）
---

就像上面提及到的，你可以使用{% include href/APIs.html param="on()" %}方法或[`$().on()`][on]方法来监听这些事件。{% include href/APIs.html param="on()" %}的工作方式与`$().on()`一样，并提供了命名空间和多个事件。

**请注意，所有的Datatables事件都是使用`dt`命名空间触发的**。事件的命名空间是为了防止与其他JavaScript库触发的自定义事件发生冲突。因此，你因该将`.dt`附加到要监听的事件名称上（当使用{% include href/APIs.html param="on()" %}方法时，如果需要，命名空间会自动附加）。由于命名空间在jQuery中的工作方式，如果希望使用命名空间，则可以使用`dt`命名空间和自己定义命名空间。

比如，在Datatables中监听重绘的事件：

```javascript
var table = $('#example').DataTable();
 
table.on( 'draw', function () {
    alert( 'Table redrawn' );
} );
```

上面的代码还可以使用如下的写法：

```javascript
$('#example').on( 'draw.dt', function () {
    alert( 'Table redraw' );
} );
```

请注意，在使用`$().on()`方法时使用`dt`命名空间，而使用{% include href/APIs.html param="on()" %}方法会自动给你附加命名空间。

## 移除事件（Removing events）
---

与`$().on()`一样，可以使用[`$().off()`][off]和{% include href/APIs.html param="off()" %}删除Datatables事件。这个是很重要的，从不再存在的对象移除事件（在摧毁之前），这样可以让JavaScript垃圾回收机制释放为事件及其附加的对象分配的内存。

除此之外，可以使用{% include href/APIs.html param="one()" %}和[`$().one()`][one]方法监听单次事件，其中事件处理程序将在首次触发事件后立即删除。

## 冒泡（Bubbling）
---

与典型的DOM事件一样，Datatables自定义事件在整个document中冒泡，因此你可以使用`$().on()`的委托形式或在DOM树上方的其他元素上监听事件。例如，这对于了解何时初始化Datatables是很有帮助的，可以使用{% include href/Events.html param="init" %}事件来监听它，因此：
```javascript
$(document).on( 'init.dt', function ( e, settings ) {
    var api = new $.fn.dataTable.Api( settings );
 
    console.log( 'New DataTable created:', api.table().node() );
} );
```
同样，此方法对于{% include href/Events.html param="xhr" %}事件也很有用，它可以让你知道从上一次Datatables发起AJAX请求从服务器返回的JSON数据。

有关Datatables及其扩展功能将触发的事件的完整列表，请参阅[事件参考文档][events]。



[on]: http://api.jquery.com/on/
[off]: http://api.jquery.com/off/
[one]: http://api.jquery.com/one/
[events]: {{ site.baseurl }}/reference/event/
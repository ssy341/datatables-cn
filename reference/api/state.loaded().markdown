---
layout: reference_md
title: state.loaded()
summary: 获取初始化期间加载的表状态
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10.1
navcategory: api
keywords: state.loader,api
author: /reference/api/state.loaded()
---


## 描述(Description)

该方法主要用于插件的开发，在初始化时获得DataTables的状态，以恢复其自身插件的保存功能。

该方法返回的对象结构和 {% include href/api/Core.html param="state()" %} 状态对象定义的相匹配。


## 类型(Type)
这个选项能够接受以下类型的参数：

---
    
### _function_ **state.loaded()**   

---

#### 描述(Description):
获取初始化期间加载的表状态

#### 返回(Returns):
{% include href/type/Javascript.html param="object" %}
被保存的状态对象，参考{% include href/api/Core.html param="state()" %} 对象格式

--- 
    
## 例子(Example)

监听DataTables初始化并得到其状态
{% highlight javascript linenos %}
$(document).on( 'init.dt', function ( e, settings ) {
    var api = new $.fn.dataTable.Api( settings );
    var state = api.state.loaded();
 
    //。。。使用state()来重新存储信息
} );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Core.html param="state()" %}
- {% include href/api/Core.html param="state.clear()" %}
- {% include href/api/Core.html param="state.save()" %}

Events

- {% include href/event.html param="stateLoaded" %}
- {% include href/event.html param="stateLoadParams" %}
- {% include href/event.html param="stateSaveParams" %}

Options

- {% include href/Options.html param="stateSave" %}
- {% include href/option/Callbacks.html param="stateSaveCallback" %}
- {% include href/option/Callbacks.html param="stateLoadCallback" %}
- {% include href/option/Callbacks.html param="stateLoadParams" %}
- {% include href/option/Callbacks.html param="stateSaveParams" %}
- {% include href/option/Callbacks.html param="stateLoaded" %}


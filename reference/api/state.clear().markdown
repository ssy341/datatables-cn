---
layout: reference_md
title: state.clear()
summary: 清除存储的表状态
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10.1
navcategory: api
keywords: state.clear,api
author: /reference/api/state.clear()
---



## 描述(Description)

该方法提供清除已经保存的表格状态。在开发中是很有用的，当用户退出系统，在有效期（{% include href/option/Options.html param="stateDuration" %}）到之前清除这些数据。

该方法会触发状态保存，只不过是保存的一个空对象（`{}`），有效的删除任何现有的状态数据。

请注意，如果状态保存方法在这个方法之后执行，状态将再次存储（{% include href/api/Core.html param="draw()" %}是最常用的触发状态保存的方法）。


## 类型(Type)
这个选项能够接受以下类型的参数：

---
    
### _function_ **state.clear()**   

---

#### 描述(Description):
清除存储的表状态

#### 返回(Returns):
{% include href/type/DataTables.html param="DataTables.Api" %}

API实例，可以用来链式继续调用其他方法

--- 
    
## 例子(Example)

清除存储的状态并且重新加载页面
{% highlight javascript linenos %}
table.state.clear();
window.location.reload();
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Core.html param="state()" %}
- {% include href/api/Core.html param="state.loaded()" %}
- {% include href/api/Core.html param="state.save()" %}

Events

- {% include href/event.html param="stateLoaded" %}
- {% include href/event.html param="stateLoadParams" %}
- {% include href/event.html param="stateSaveParams" %}

Options

- {% include href/option/Features.html param="stateSave" %}
- {% include href/option/Callbacks.html param="stateSaveCallback" %}
- {% include href/option/Callbacks.html param="stateLoadCallback" %}
- {% include href/option/Callbacks.html param="stateLoadParams" %}
- {% include href/option/Callbacks.html param="stateSaveParams" %}
- {% include href/option/Callbacks.html param="stateLoaded" %}


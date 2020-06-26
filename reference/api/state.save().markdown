---
layout: reference_md
title: state.save()
summary: 触发状态保存操作
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10.1
navcategory: api
keywords: state.save,api
author: /reference/api/state.save()
---


## 描述(Description)

该方法主要用于插件开发，希望将信息添加到DataTables状态保存对象（通过{% include href/event.html param="stateSaveParams" %}）,并希望能够触发状态保存操作，以保存插件特定的信息。


举个例子-列过滤插件，当输入框值被最终用户更改之后，可能要触发状态保存，这使插件在下一次初始化（ {% include href/api/Core.html param="state.loaded()" %}）表格时能够恢复表的状态。


## 类型(Type)
这个选项能够接受以下类型的参数：

---
    
### _function_ **state.save()**   

---

#### 描述(Description):
触发状态保存操作

#### 返回(Returns):
{% include href/type/DataTables.html param="DataTables.Api" %}

API实例，可以用来链式继续调用其他方法

--- 
    
## 例子(Example)

跳到下一页并且存储状态（ `page()` 方法不会触发状态保存操作 ）
{% highlight javascript linenos %}
table.page('next');
table.state.save();
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Core.html param="state()" %}
- {% include href/api/Core.html param="state.clear()" %}
- {% include href/api/Core.html param="state.loaded()" %}

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


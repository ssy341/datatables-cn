---
layout: reference_md
title: state()
summary: 获取最新保存的表的状态
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10.1
navcategory: api
categories: reference api
keywords: state,api
author: /reference/api/state()
---


## 描述(Description)

当{% include href/option/Features.html param="stateSave" %}开启时，知道某个特定时刻表保存的状态是很有用的。该方法提供了获取最新保存的状态。

该数据格式如下所示，但请注意，作为DataTables的插件和扩展可以通过添加所需要的状态信息来修改这个结构。

{% highlight javascript linenos %}
{
    "time":   {number}               // 该状态创建的时间戳（Time stamp of when the object was created）
    "start":  {number}               // 显示起始位置（Display start point）
    "length": {number}               // 分页长度（Page length）
    "order":  {array}                // 排序信息的二维数组（2D array of column ordering information (see `order` option)）
    "search": {
        "search":          {string}  // 搜索词（Search term）
        "regex":           {boolean} // 表明搜索词是否当做正则表达式处理（Indicate if the search term should be treated as regex or not）
        "smart":           {boolean} // 标记是否开启内置搜索（Flag to enable DataTables smart search）
        "caseInsensitive": {boolean} // 是否区分大小写（Case insensitive flag）
    },
    "columns" [
        {
            "visible": {boolean}     // 列隐藏信息（Column visibility）
            "search":  {}            // 列搜索的信息（Object containing column search information. Same structure as `search` above）
        }
    ]
}
{% endhighlight %}

请注意，这个方法提供获取最新的状态，但不一定是当前的状态。比如{% include href/api/Core.html param="page()" %}方法不会自动触发状态保存。调用{% include href/api/Core.html param="draw()" %}方法或者{% include href/api/Core.html param="state.save()" %}方法来保存状态。


## 类型(Type)
这个选项能够接受以下类型的参数：

---
    
### _function_ **state()**   

---

#### 描述(Description):
获取最新表的状态

#### 返回(Returns):
{% include href/type/Javascript.html param="object" %}
被保存的状态对象

--- 
    
## 例子(Example)

从状态对象获取分页长度
{% highlight javascript linenos %}
alert( '保存的分页长度是: '+ table.state().length );
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Core.html param="state.clear()" %}
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


---
layout: reference_md
title: settings()
summary: 获取表格的settings对象
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: settings,api
author: /reference/api/settings()
---



## 描述(Description)
DataTables会保存表格有关各个设置对象中的状态的信息。该对象对于每个表是唯一的，每个表只有一个设置对象，即使有多个表的引用（即多个API实例）。

此对象中的信息是私有的，不应该直接使用。除非你非常了解DataTables内部运作，不然你不要往这个对象里设置或者写入对象和值。

一般来说，在开发中应该使用公共的API方法，而不是直接去改变设置这个对象里的属性，因为其中的属性在版本与版本之间可能会更改名称。如果你必须使用settings对象，
请使用API插件来获取数据，因此，将来如果在新版本中修改参数，可以直接更新插件。

为了访问表的内部设置的插件，作者提供此方法。


## 类型(Type)
这个选项能够接受以下类型的参数：

---

### _function_ **settings()**   

---
    

#### 描述(Description):
在当前上下文获取settings对象

#### 返回(Returns):

{% include href/Types.html param="DataTables.Api" %}

包含当前上下文表格的settings对象的DataTables API实例
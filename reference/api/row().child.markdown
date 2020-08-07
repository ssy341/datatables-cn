---
layout: reference_md
title: row().child
summary: 行子节点方法命名空间
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: row,child,api,行子节点方法命名空间
author: /reference/api/row().child
---

## 描述(Description)
Datatables能够显示每一行（在本文档中称为“父行”，以区别与子行）的子行。该子行附加到每个父行，例如，可用于提供有关父行额外信息或编辑表单。子行始终放置在父行之后（如果子行被指定可见，可以使用{% include href/APIs.html param="row.child.show()" %}方法操作），无论其表格排序还是应用于表格的搜索词如何。如果父行在数据表的当前视图中不可见，则子行也将不可见。

此属性是Datatables API的静态对象，该对象仅用于为其子方法提供命名空间，这些子方法用于控制Datatables的子行操作。

请参阅每种方法的文档以获取有关其操作方式的详细信息。


## 类型(Type)
这个选项能够接受以下类型的参数：

---
- {% include href/Types.html param="object" %}
---


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="row().child()" %}
- {% include href/APIs.html param="row().child().hide()" %}
- {% include href/APIs.html param="row().child().show()" %}
- {% include href/APIs.html param="row().child.hide()" %}
- {% include href/APIs.html param="row().child.isShown()" %}
- {% include href/APIs.html param="row().child.show()" %}


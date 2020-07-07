---
layout: reference_md
title: column()
summary: 从表格中获取单个列
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: column,api
author: /reference/api/column()
---

## 描述(Description)

从表格中选择一列来操作，它链式操作可以提供操作列的能力，采取诸如切换可见性或者从列中获取数据之类的操作。

注意，这个操作获取的是选择单列，如果你提供的选择器匹配到多列，结果会被截断，返回第一个匹配的列。如果你需要操作多列，则可以使用具有相同选项的{% include href/api/Columns.html param="columns()" %}方法。


## 类型(Type)

---
    
### _function_ **column( [ columnSelector ] [, modifier ] )**   

#### 描述(Description):
通过列选择器获取的列
     
#### 参数(Parameters):
{% include_relative column-parameters-code.html %}

#### 返回(Returns):
{% include href/type/DataTables.html param="DateTables.Api" %}
Datatables API 实例，结果集中包含被选择的列
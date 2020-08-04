---
layout: reference_md
title: columns().indexes()
summary: 获取被选择多列的列索引
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: columns,indexes
author: /reference/api/columns().indexes()
---

## 描述(Description)
Datatables把行和列的数据存储在内部的索引中，为了快速排序，过滤等操作。有时候知道这些索引是有用的，因为他们可以用于{% include href/APIs.html param="row()" %},{% include href/APIs.html param="column()" %}和其他使用选择器的API方法中的有效选择器。

此方法用于检索所选列的索引。默认情况下，它将返回列数据索引（即不考虑列可见性），但如果将{% include href/string.html param="visible" %}作为第一个参数传入到方法，返回的索引将是可见列的索引（例如，如果隐藏了第一列，则随后的所有列的可见列索引都将移动1）


## 类型(Type)

---

### _function_ **columns().indexes( [type] )**   

#### 描述(Description):
获取被选择多列的列索引
     
#### 参数(Parameters):
{% include_relative parameters/column.index.html %}

#### 返回(Returns):

{% include href/Types.html param="DateTables.Api" %}
Datatables API 实例，结果集包含被选则的多列的列索引

--- 
    


## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="column().index()" %}

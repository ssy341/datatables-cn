---
layout: reference_md
title: cells()
summary: 从表格里选择多个单元格
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: DataTables,cells,api
author: /reference/api/cells()
---

## 描述(Description)
从DataTables中获取需要使用的多个单元格，其链式方法提供了设置/获取单元格中的数据，还可以直接操作节点或者执行其他操作。

{% include href/api/Cells.html param="cell" %}提供访问单个单元格，这个{% include href/api/Cells.html param="cells" %}方法用于同时操作或修改多个单元格。

该方法有三种形式：

- All cells - 所有单元格(没有参数或只有{% include href/type/DataTables.html param="selector-modifier" %}选项) 
- Cell selector - 单元格选择器
- Cross product between row and column selectors （行和列之间的叉集选择器）


## 类型(Types)

---

### _function_ **cells( [ modifier ] )**

#### 描述(Description):

选择所有的单元格

#### 参数(Parameters):
{% include_relative cell-fun1-parameters-code.html %}

#### 返回(Returns):
{% include href/type/DataTables.html param="DataTables.Api"%}
DataTables API 实例，包含被选择的单元格


---

### _function_ **cells( cellSelector [, modifier ] )**

#### 描述(Description):

选择由单元格选择器找到的多个单元格

#### 参数(Parameters):
{% include_relative cell-fun2-parameters-code.html %}

#### 返回(Returns):
{% include href/type/DataTables.html param="DataTables.Api"%}
DataTables API 实例，包含被选择的单元格


---

### _function_ **cells( rowSelector, columnSelector [, modifier ] )**

#### 描述(Description):

选择由行选择器和列选择器找到的多个单元格

#### 参数(Parameters):
{% include_relative cell-fun3-parameters-code.html %}

#### 返回(Returns):
{% include href/type/DataTables.html param="DataTables.Api"%}
DataTables API 实例，包含被选择的单元格

---



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Cells.html param="cell()" %}


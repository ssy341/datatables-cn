---
layout: reference_md
title: rows()
summary: 从表格中选择多行
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: rows,api,文档,方法,从表格中选择多行,Datatables
author: /reference/api/rows()
---

## 描述(Description)
处理行是DataTables的基本部分，你希望从表格中轻松选取到需要的行。该方法与操作表格列的{% include href/APIs.html param="columns()" %}和操作表格单元格的{% include href/APIs.html param="cells()" %}方法相对应。使用行选择器和{% include href/Types.html param="selector-modifier" %}选项，可以获取表格中的行，从而获取行中数据，行节点，使数据无效等等操作。

尽管{% include href/APIs.html param="rows()" %}方法可以一次性访问多个行，但其单数对应的{% include href/APIs.html param="row()" %}方法一次只能访问一行，从而实现更精准的控制，在复数方法中却不可用，比如更新数据，处理子行。

该方法具有两种形式：

- 所有行（没有参数，或者只是使用{% include href/Types.html param="selector-modifier" %}选项）
- 行选择器


## 类型(Types)
---
### _function_ **rows( [ modifier ] )**  
--- 

#### 描述(Description):

选择所有行

#### 参数(Parameters):

{% include_relative parameters/rows-fun1.html %}

#### 返回(Returns):

{% include href/Types.html param="DateTables.Api" %}

Datatables API 实例，结果集中包含被选择的行

---
### _function_ **rows( rowSelector [, modifier ] )** 
---
#### 描述(Description):

通过选择行选择器匹配行

#### 参数(Parameters):

{% include_relative parameters/rows-fun2.html %}

#### 返回(Returns):

{% include href/Types.html param="DateTables.Api" %}

Datatables API 实例，结果集中包含被选择的行


--- 

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="row()" %}


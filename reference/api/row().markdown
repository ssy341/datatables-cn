---
layout: reference_md
title: row()
summary: 从表格中选择单行
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: row,api,文档,方法,从表格中选择单行,Datatables
author: /reference/api/row()
---

## 描述(Description)
处理行是DataTables的基本部分，你希望从表格中轻松选取到需要的行。该方法与操作表格列的{% include href/APIs.html param="columns()" %}和操作表格单元格的{% include href/APIs.html param="cells()" %}方法相对应。使用行选择器和{% include href/Types.html param="selector-modifier" %}选项，可以获取表格中的行，从而获取行中数据，行节点，使数据无效等等操作。

请注意，如果使用的行选择器匹配到多行，则此方法将截断结果，默认返回第一个匹配到的行。如果你需要同时处理多行，请使用此方法{% include href/APIs.html param="rows()" %}，它可以操作同时操作多个行。


## 类型(Type)
---
    
### _function_ **row( rowSelector [, modifier ] )**   

#### 描述(Description):

通过行选择器选择一行

#### 参数(Parameters):

{% include_relative parameters/row.html %}

#### 返回(Returns):

{% include href/Types.html param="DateTables.Api" %}

Datatables API 实例，结果集中包含被选择的行

--- 

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/APIs.html param="rows()" %}


---
layout: reference_md
title: columns()
summary: 从表格选择多列
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: api
keywords: datatables,columns
author: /reference/api/columns()
toc: true
---

## 描述(Description)
使用Datatables时，你可能经常需要操作一个或者多个列，这个方法提供选择多个列的能力，通过链式操作可以操作列，比如获取数据或者切换列的可见性。

{% include href/api/Columns.html param="column()" %}方法提供访问单列，而{% include href/api/Columns.html param="columns()" %}这个方法允许你同时操作或者修改多个列。

这个方法有两种形式，可以根据现实要求以多种不同方式选择列：

- 所有列（不穿参数，或者仅仅一个 {% include href/type/DataTables.html param="selector-modifier" %}选项）
- 列选择器（可选项{% include href/type/DataTables.html param="selector-modifier" %}）


## 类型(Types)

---

### _function_ **columns( [ modifier ] )**

#### 描述(Description):

选择所有列

#### 参数(Parameters):

{% include_relative parameters/columns-fun1.html %}


#### 返回(Returns):
{% include href/type/DataTables.html param="DateTables.Api" %}

DataTables API 实例，结果集包含被选择的列

---
    
### _function_ **columns( columnSelector [, modifier ] )**   

#### 描述(Description):

通过列选择器找到的列
     
#### 参数(Parameters):

{% include_relative parameters/columns-fun2.html %}

#### 返回(Returns):

{% include href/type/DataTables.html param="DateTables.Api" %}

DataTables API 实例，结果集包含被选择的列

--- 
    

## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Columns.html param="column()" %}




---
layout: page
---

# 概览

> This is a [Jekyll theme](https://github.com/allejo/jekyll-docs-theme) based on [mistic100's modification](https://github.com/mistic100/jekyll-bootstrap-doc) of the official Bootstrap documentation from a few years back.

Jekyll Docs Theme is provided as a theme for writing documentation for your projects instead of having a single large README file or several markdown files stored in a not so user-friendly manner.

This theme is still in development but is kept fairly stable; just note, there are a lot things yet to come.

# Options

##  autoWidth 

[英文](https://datatables.net/reference/option/autoWidth "原链接")

version:1.10

特性功能，Datatables的智能列宽处理

Description：

开启或者关闭自动列宽计算。如果你使用  columns.width 指定列宽，可以禁止这个功能作为优化（计算列宽需要花费时间）。

Default：

`true`

Example:

禁止自动计算列宽

  ```javascript
  $('#example').dataTable( {
    "autoWidth": false
  } );
  ```
***

## deferRender

[英文](https://datatables.net/reference/option/deferRender "原链接")

version: 1.10

特性功能，延迟渲染以获得额外的初始化速度

Description:

默认情况下，当Datatables从Ajax或者Javascript数据源加载数据时，它将预先创建所需的所有HTML元素。
尤其是在IE6-8这样的旧版浏览器中，如果加载大量的数据，这会花费很多时间。
这个选项允许Datatables仅在绘制时才创建需要的节点（表中的行和单元格）。

举一个例子来说明这一点，如果加载10万条数据，每页显示10条记录，当开启延迟渲染时，Datatables将只创建10条而不是10万条。
当用户对数据进行排序，分页或者过滤时，它会自动创建下一个显示所需要的行。
有效地在整个表格生命周期中分散了在页面上创建行的负载。

请注意，如果你启用了这个特性，并不是所有的节点始终都可以使用，你在使用 columns().nodes() 
这样的API方法时，需要考虑到这点。下面给出了如何使用jQuery委托事件来处理这种情况的示例。

Default:

`false`

Examples:

打开延迟渲染：

  ```javascript
  $('#example').dataTable( {
    "ajax": "sources/arrays.txt",
    "deferRender": true
  } );
  ```
  
对于延迟渲染的事件绑定：

  ```javascript
 $('#example tbody').on( 'click', 'td', function () {
     alert( 'Clicked on: '+ this.innerHTML );
 } );
  
 $('#example').dataTable( {
   "ajax": "sources/arrays.txt",
   "deferRender": true
 } );
  ```
 
***
 
## info

[英文](https://datatables.net/reference/option/info "原链接")

version:1.10

特性功能，显示表格信息

Description:

当这个属性开启，Datatables会显示该表的有关信息，比如显示过滤后的总记录数。
此选项允许你开启或者关闭该功能。

请注意，默认情况下，表格信息显示位于表格的左下方，但你可以使用 dom 和 css控制他的位置。

Default:

`true`

Example:

关闭信息展示：

  ```javascript
 $('#example').dataTable( {
   "info": false
 } );
  ```
***
   
## lengthChange

[英文](https://datatables.net/reference/option/lengthChange "原链接")

version: 1.10

特性功能，允许用户改变表格每页显示数据的条数

Description:

当分页功能开启，这个选项会控制下拉列表的显示，可以更改每页显示的数据条数。
列表中的选项由 lengthMenu 配置选项控制。

请注意，默认情况下，该下拉列表会显示在表格的左上方，你可以使用 dom 和 css控制它的位置。

如果这个选项是`false`，下拉列表会被移出，但是 page.len() 方法任然可以在代码中使用，使用 pageLength 可以指定初始页面的长度。
分页功能本身不受影响。

此外，如果使用 paging 选项禁用了分页功能，这个选项会自动禁用。

Default:

`true`

Example:

禁止用户改变每页数据显示条数：

  ```javascript
 $('#example').dataTable( {
   "lengthChange": false
 } );
  ```
***
   
## ordering

[英文](https://datatables.net/reference/option/ordering "原链接")

version: 1.10

特性功能，Datatables的排序能力

Description:

开启或者关闭列的排序，非常简单方便！Datatables默认允许用户点击每个表头的单元格排序列。
使用该选项可以禁止用户排序数据。

请注意，你可以使用 columns.orderable 给每一列单独设置是否可以排序。该选项是全局选项，
当它被禁用，所有的列就不具备排序功能。

Default:

`true`

Example:

禁用排序：

  ```javascript
    $('#example').dataTable( {
      "ordering": false
    } );
  ```
***
 

## paging

[英文](https://datatables.net/reference/option/paging "原链接")

version: 1.10

特性功能，开启或者关闭表格分页

Description:

Datatables可以分割行到单独的页面，这是一个高效的方法，可以在一个小的空间里显示大量的数据。
给用户提供控制按钮，以在浏览数据的时候请求显示不同的数据。
这个功能默认开启，通过这个选项你可以禁用这个功能。

Default:

`true`

Example:

禁用分页功能：

  ```javascript
 $('#example').dataTable( {
   "paging": false
 } );
  ```
***
 

## processing

[英文](https://datatables.net/reference/option/processing "原链接")

version: 1.10

特性功能，加载动画

Description:

开启或者关闭当用户在执行操作（比如排序操作）时，‘处理中……’提示符的显示。
当你在处理很多很多数据的时候，执行排序操作可能会花费一些时候，给出相应的提示是非常有帮助的。

请注意，默认情况下会显示在表格的中间，你可以使用 dom 和 css 控制它出现的位置。

Default:

`false`

Example:

开启加载动画：

  ```javascript
 $('#example').dataTable( {
   "processing": true
 } );
  ```
***
 
## scrollX

[英文](https://datatables.net/reference/option/scrollX "原链接")

version: 1.10

特性功能，水平滚动条

Description:

开启水平滚动条。当表格太宽不能放入某个布局，或者表各种有大量列，则可以开启水平滚动条，
在可视范围中滚动表格。此属性可以为`true`，这将允许表格在需要的时候出现水平滚动条（推荐）；
或者任何css单位或数字（这种情况下被认为是像素）。

Type:

- `false` 没有水平滚动条
- `true` 在表格里开启水平滚动条

Default:

`false`

Examples:

开启水平滚动条

  ```javascript
 $('#example').dataTable( {
   "scrollX": true
 } );
  ```
  
当表格超过300px，开启水平滚动条

  ```javascript
 $('#example').dataTable( {
   "scrollX": 300
 } );
  ```
***
   

## scrollY

[英文](https://datatables.net/reference/option/scrollY "原链接")

version: 1.10

特性功能，垂直滚动条

Description:

开启垂直滚动条。垂直滚动条会约束表格到指定高度，当任何溢出当前可视范围的数据，开启滚动。
这个可以作为分页的替代方案，在小的区域中显示大量的数据（如果有需要，可以同时使用分页并开启滚动条）

该属性值接受任何css单位或者一个数字（这种情况下会被认为px单位），并应用到表格中（不考虑thead和tfoot的高度）

Type:

`string`

Default:

`''` 空字符串

Example:

禁用分页，开启垂直滚动条：

  ```javascript
    $('#example').dataTable( {
     "scrollY": "200px",
     "scrollCollapse": true,
     "paging": false
    } );
  ```
***
 
## searching

[英文](https://datatables.net/reference/option/searching "原链接")

version: 1.10

特性功能，Datatables搜索能力

Description:

该属性可以开启或者关闭Datatables的搜索能力。搜索在Datatables是智能的，允许用户
输入多个词（空格隔开），匹配包含这些词的行（允许跨多个列匹配）。

请注意，从技术上来讲，Datatables中的“Search”实际是一个过滤器，它做的是减法操作，把数据从数据集中删除。
这里被命名为“Search”，而在Datatables API中为了保持一致性并确保与此类似的名称没有冲突。（特别是 filter() API 方法）。

请注意，如果你希望使用Datatables的搜索功能，那你需要设置该属性为`true`，
如果你需要使用诸如 search() 这类方法，但同时不显示默认的搜索框，请使用 dom 选项配置。

Default:

`true`

Example:

禁止搜索功能：

  ```javascript
 $('#example').dataTable( {
    "searching": false
 } );
  ```
***
   
## serverSide

[英文](https://datatables.net/reference/option/serverSide "原链接")

version: 1.10

特性功能，Datatables服务器处理模式

Description:

Datatables有两种基本的操作模式：

- 客户端模式，过滤，翻页，排序这些操作由浏览器完成计算
- 服务器模式，过滤，翻页，排序这次操作由服务器完成计算

默认情况下，Datatables是客户端模式，你可以使用这个选项切换成服务器模式。
服务器模式在处理大量数据的时候很有用（一般来说大于5万条数据），这样就可以利用数据库引擎来执行排序等一些计算。
现代的数据库引擎都高度优化，允许Datatables操作大规模的数据

当你使用服务器模式，Datatables会发送参数到服务器指出它需要哪些数据（哪一页，什么过滤条件等等），
并且还要求返回某些参数，以便它具有显示表所需的所有信息。
关于服务器模式通信协议的详细介绍在[这里](https://datatables.net/manual/server-side)。

Default:

`false`

Example:

开启服务器模式：
  ```javascript
 $('#example').dataTable( {
   "serverSide": true,
    "ajax": "xhr.php"
 } );
  ```
***
   
## stateSave

[英文](https://datatables.net/reference/option/stateSave "原链接")

version: 1.10

特性功能，状态保存，页面重新加载时恢复到上次操作

Description:

开启或者关闭状态保存。当你开启状态保存，Datatables会存储状态信息，比如第几页，显示长度，过滤条件和排序。
当用户重新加载页面，表格的状态会被匹配到之前设置的状态。

浏览器中的状态信息的数据存储是使用 `localStorage` 或 `sessionStorage` HTML5 API执行的。
` stateDuratio` 选项指明Datatables使用那个API(`localStorage`:0或者更大的数，`sessionStorage`:-1)

为了独立唯一每个表格的状态数据，使用当前页面路径和表格的ID来储存信息。
如果表格的ID或者页面URL改变了，状态信息就会丢失。

请注意，因为使用了HTML5 API来储存数据，意味着这个功能在老版本浏览器（IE6/7）将不会起作用。
可以通过 `stateSaveCallback` 和 `stateLoadCallback` 选项使用Ajax或者Cookie在服务器上保存状态解决这个问题。


Default:

`false`

Examples:

开启状态保存：

  ```javascript
 $('#example').dataTable( {
    stateSave: true
 } );
  ```
  
开启状态保存，仅使用表格id保存/读取状态数据

  ```javascript
 $('#example').dataTable( {
   stateSave: true,
   stateSaveCallback: function(settings,data) {
       localStorage.setItem( 'DataTables_' + settings.sInstance, JSON.stringify(data) )
     },
   stateLoadCallback: function(settings) {
     return JSON.parse( localStorage.getItem( 'DataTables_' + settings.sInstance ) )
     }
 } );
  ```
  
*** 

## ajax

[英文](https://datatables.net/reference/option/ajax "原链接")

version: 1.10

从一个ajax数据源获取表格显示的数据

Description:

Datatables能够使用此初始化参数从一些源中获取数据显示在表格里，包括从一个ajax数据源。
数组或者对象可以作为每一行的数据源，使用 `columns.data` 指定从源中哪个对象属性获取。

`ajax` 属性有三种不同的操作模式：

- `string` 加载数据的url
- `object` 给 `jQuery.ajax` 定义属性的对象
- `function`  自定义数据获取的函数


Type:

- `string`
 
 Description:
 
 In its simplest form, ajax, when given as a string will simply load the data from the given remote file. Note that DataTables expects the table data to be an array of items in the data parameter of the object (use the ajax.dataSrc option of ajax as an object, if your data is formatted differently):
 
 ```json
  {
      "data": [
          // row 1 data source,
          // row 2 data source,
          // etc
      ]
  }
 ```
  DataTables can use objects or arrays in almost any format as the data source for each row through use of the columns.data option. The default is to use an array data source.
  
  Simple example:

  ```javascript
  $('#example').dataTable( {
    "ajax": "data.json"
  } );
  ```
  
- `object`
Description:

- `function`
Description:


Examples:

通过ajax从一个文件获取JSON数据

  ```javascript
 $('#example').dataTable( {
   "ajax": "data.json"
 } );
  ```
  
通过ajax从一个文件获取JSON数据，使用 `dataSrc` 选项，改变从`data` 为 `tableData` 获取数据

数据示例：
```json

{ 
   tableData: [ 
      {},{}
   ]
}

```

  ```javascript
 $('#example').dataTable( {
   "ajax": {
     "url": "data.json",
     "dataSrc": "tableData"
   }
 } );
  ```
  
  
  
  
***
## ordering

[英文](https://datatables.net/reference/option/lengthChange "原链接")

version: 1.10

Description:

Default:

Example:


  ```javascript
 $('#example').dataTable( {
   "paging": false
 } );
  ```
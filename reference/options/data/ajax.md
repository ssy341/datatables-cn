
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
  
  
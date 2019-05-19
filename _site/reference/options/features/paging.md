
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
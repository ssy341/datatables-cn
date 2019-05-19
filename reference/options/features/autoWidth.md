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
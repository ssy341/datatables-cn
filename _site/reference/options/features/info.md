
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

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
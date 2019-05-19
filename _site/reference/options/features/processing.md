

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
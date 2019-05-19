
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
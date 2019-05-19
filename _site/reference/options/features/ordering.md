
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
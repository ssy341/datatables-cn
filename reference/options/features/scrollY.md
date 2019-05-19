

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
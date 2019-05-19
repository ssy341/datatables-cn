
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
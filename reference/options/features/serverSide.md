 
## serverSide

[英文](https://datatables.net/reference/option/serverSide "原链接")

version: 1.10

特性功能，Datatables服务器处理模式

Description:

Datatables有两种基本的操作模式：

- 客户端模式，过滤，翻页，排序这些操作由浏览器完成计算
- 服务器模式，过滤，翻页，排序这次操作由服务器完成计算

默认情况下，Datatables是客户端模式，你可以使用这个选项切换成服务器模式。
服务器模式在处理大量数据的时候很有用（一般来说大于5万条数据），这样就可以利用数据库引擎来执行排序等一些计算。
现代的数据库引擎都高度优化，允许Datatables操作大规模的数据

当你使用服务器模式，Datatables会发送参数到服务器指出它需要哪些数据（哪一页，什么过滤条件等等），
并且还要求返回某些参数，以便它具有显示表所需的所有信息。
关于服务器模式通信协议的详细介绍在[这里](https://datatables.net/manual/server-side)。

Default:

`false`

Example:

开启服务器模式：
  ```javascript
 $('#example').dataTable( {
   "serverSide": true,
    "ajax": "xhr.php"
 } );
  ```
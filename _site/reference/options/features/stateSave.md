
## stateSave

[英文](https://datatables.net/reference/option/stateSave "原链接")

version: 1.10

特性功能，状态保存，页面重新加载时恢复到上次操作

Description:

开启或者关闭状态保存。当你开启状态保存，Datatables会存储状态信息，比如第几页，显示长度，过滤条件和排序。
当用户重新加载页面，表格的状态会被匹配到之前设置的状态。

浏览器中的状态信息的数据存储是使用 `localStorage` 或 `sessionStorage` HTML5 API执行的。
` stateDuratio` 选项指明Datatables使用那个API(`localStorage`:0或者更大的数，`sessionStorage`:-1)

为了独立唯一每个表格的状态数据，使用当前页面路径和表格的ID来储存信息。
如果表格的ID或者页面URL改变了，状态信息就会丢失。

请注意，因为使用了HTML5 API来储存数据，意味着这个功能在老版本浏览器（IE6/7）将不会起作用。
可以通过 `stateSaveCallback` 和 `stateLoadCallback` 选项使用Ajax或者Cookie在服务器上保存状态解决这个问题。


Default:

`false`

Examples:

开启状态保存：

  ```javascript
 $('#example').dataTable( {
    stateSave: true
 } );
  ```
  
开启状态保存，仅使用表格id保存/读取状态数据

  ```javascript
 $('#example').dataTable( {
   stateSave: true,
   stateSaveCallback: function(settings,data) {
       localStorage.setItem( 'DataTables_' + settings.sInstance, JSON.stringify(data) )
     },
   stateLoadCallback: function(settings) {
     return JSON.parse( localStorage.getItem( 'DataTables_' + settings.sInstance ) )
     }
 } );
  ```
  
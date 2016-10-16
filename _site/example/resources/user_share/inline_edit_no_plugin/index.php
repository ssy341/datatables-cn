<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>行内编辑,批量编辑</title>
      <link href="/assets/datatables/1.10.0/css/jquery.dataTables.css" rel="stylesheet">
      <script src="/assets/jquery/1.10.2/jquery.min.js"></script>
      <script  type="text/javascript" charset="utf8" src="http://cdn.gbtags.com/datatables/1.10.5/js/jquery.dataTables.min.js"></script>
  </head>
  <body>

    <button type="button" id="batch-edit-btn">批量编辑</button>
    <button type="button" id="batch-save-btn">批量保存</button>
    <div style="width: 80%;margin: 10px auto;border: 1px #ccc solid;text-align: center;">
      <table id="table" class="display" width="100%"></table>
    </div>
<script>
$(function(){
  var table = $('#table').DataTable({
    "ajax": {
      "url": "data.php",
      //"dataSrc": "data",//默认为data
      "type": "post",
      "error":function(){alert("服务器未正常响应，请重试");}
    },
    "columns": [
      { "data": "id", "title":"序号","defaultContent":""},
      { "data": "username", "title":"用户名","defaultContent":""},
      { "data": "name", "title":"姓名","defaultContent":""},
      { "data": "phone", "title":"电话","defaultContent":""},
      { "data": null, "title":"操作","defaultContent": "<button class='edit-btn' type='button'>编辑</button>"}
    ],
    "language": {
      "sProcessing": "处理中...",
      "sLengthMenu": "显示 _MENU_ 项结果",
      "sZeroRecords": "没有匹配结果",
      "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
      "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
      "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
      "sInfoPostFix": "",
      "sSearch": "搜索:",
      "sUrl": "",
      "sEmptyTable": "表中数据为空",
      "sLoadingRecords": "载入中...",
      "sInfoThousands": ",",
      "oPaginate": {
        "sFirst": "首页",
        "sPrevious": "上页",
        "sNext": "下页",
        "sLast": "末页"
      },
      "oAria": {
        "sSortAscending": ": 以升序排列此列",
        "sSortDescending": ": 以降序排列此列"
      }
    }
  });

  $("#table tbody").on("click",".edit-btn",function(){
    var tds=$(this).parents("tr").children();
      $.each(tds, function(i,val){
          var jqob=$(val);
          if(i < 1 || jqob.has('button').length ){return true;}//跳过第1项 序号,按钮
          var txt=jqob.text();
          var put=$("<input type='text'>");
          put.val(txt);
          jqob.html(put);
      });
    $(this).html("保存");
    $(this).toggleClass("edit-btn");
    $(this).toggleClass("save-btn");
  });

  $("#table tbody").on("click",".save-btn",function(){
    var row=table.row($(this).parents("tr"));
    var tds=$(this).parents("tr").children();
    $.each(tds, function(i,val){
      var jqob=$(val);
      //把input变为字符串
      if(!jqob.has('button').length){
        var txt=jqob.children("input").val();
        jqob.html(txt);
        table.cell(jqob).data(txt);//修改DataTables对象的数据
      }
    });
    var data=row.data();
    $.ajax({
      "url":"edit.php",
      "data":data,
      "type":"post",
      "error":function(){
        alert("服务器未正常响应，请重试");
      },
      "success":function(response){
        alert(response);
      },
    });
    $(this).html("编辑");
    $(this).toggleClass("edit-btn");
    $(this).toggleClass("save-btn");
  });

  //批量点击编辑按钮
  $("#batch-edit-btn").click(function(){
    $(".edit-btn").click();
  });
  $("#batch-save-btn").click(function(){
    $(".save-btn").click();
  });
});
</script>
	</body>
</html>
<script type="text/javascript">
//判断是否显示更新提示
$.get("/assets/updatelog.txt", function (data) {
    var json = JSON.parse(data);
    if (json.isNote) {
    var cache = localStorage['dt.thxopen.com.note'];
    if (typeof cache == 'undefined') {
    $("#updateFlag").addClass("hot");
    } else {
    var current = new Date().getTime();
    var bl = current - cache;
    var s = 24 * 60 * 60 * 1000;
    if (bl > s) {
    $("#updateFlag").addClass("hot");
    }
    }
    }
    });
</script>
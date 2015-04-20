<!--复制本页url到剪贴板-->
<script src="/js/ZeroClipboard.min.js"></script>
<script>
$('[data-toggle="tooltip"]').tooltip();
$('#copyurltoclip').on('show.bs.tooltip', function () {

    var url = window.location.href;
    var title = $("title").html();
    var text = title + ":"+url;
    $(this).attr("data-clipboard-text",text);

});

var client = new ZeroClipboard($('#copyurltoclip')); //  可以用jquery对象

client.on( "aftercopy", function( event ) {
    console.log("成功复制url：" + event.data["text/plain"]+"到剪贴板" );
} );

client.on( 'error', function() {
    ZeroClipboard.destroy();
} );
</script>
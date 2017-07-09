---
layout: extensions_example
title: 基本初始化 博客 DataTables中文网
short: 基本初始化
caption: DataTables 官方例子
categories: blog
tags: [例子,基本例子,Button扩展]
from: /extensions/buttons/examples/initialisation/simple.html
css: >

    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/1.3.1/css/buttons.dataTables.min.css">
    	
script: >

    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/buttons/1.3.1/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" language="javascript" src="//cdn.datatables.net/buttons/1.3.1/js/buttons.flash.min.js"></script>
    <script type="text/javascript" language="javascript" src="//cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script type="text/javascript" language="javascript" src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/pdfmake.min.js"></script>
    <script type="text/javascript" language="javascript" src="//cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/vfs_fonts.js"></script>
    <script type="text/javascript" language="javascript" src="//cdn.datatables.net/buttons/1.3.1/js/buttons.html5.min.js"></script>
    <script type="text/javascript" language="javascript" src="//cdn.datatables.net/buttons/1.3.1/js/buttons.print.min.js"></script>
    
    <script>
        $(document).ready(function() {
            $('#example').DataTable( {
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 'print'
                ]
            } );
        } );
    </script>
---


Buttons can be initialised very easily though the buttons object which can be given as an array of the buttons that you wish to display. The B option in the dom parameter will instruct DataTables where the buttons should be placed in the document - in this case, at the top left (CSS also plays a part).

The simplest method of using buttons is to use predefined button types which can be displayed simply by using their name in the buttons array. Each button can also be extended to provide customisation of that button.

This example shows the copy, csv, excel, pdf and print buttons being used to display data export options for the DataTable.



<div class="bs-docs-example">
    {% include example/table_eaxmple.html %}
</div>
<pre class="prettyprint linenums">
&lt;!--引入css--&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css&quot;&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://cdn.datatables.net/buttons/1.3.1/css/buttons.dataTables.min.css&quot;&gt;

&lt;!--引入JavaScript--&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;//code.jquery.com/jquery-1.12.4.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;https://cdn.datatables.net/buttons/1.3.1/js/dataTables.buttons.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;//cdn.datatables.net/buttons/1.3.1/js/buttons.flash.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;//cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;//cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/pdfmake.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;//cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/vfs_fonts.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;//cdn.datatables.net/buttons/1.3.1/js/buttons.html5.min.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;//cdn.datatables.net/buttons/1.3.1/js/buttons.print.min.js&quot;&gt;&lt;/script&gt;

&lt;!--初始化代码--&gt;
&lt;script&gt;
    $(document).ready(function() {
        $(&#39;#example&#39;).DataTable( {
            dom: &#39;Bfrtip&#39;,
            buttons: [
                &#39;copy&#39;, &#39;csv&#39;, &#39;excel&#39;, &#39;pdf&#39;, &#39;print&#39;
            ]
        } );
    } );
&lt;/script&gt;
</pre>
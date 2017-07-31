---
layout: plugins
title: 四个按钮分页插件（Plug-ins） Datatables中文网
from: /plug-ins/pagination/four_button
short: 四个按钮
tags: [四个按钮,插件,分页插件]
tour: ['<li><a href="/">首页</a></li>','<li><a href="/plug-ins">插件</a></li>','<li><a href="/plug-ins/pagination">分页插件</a></li>','<li class="active">四个按钮</li>']
---

该插件在1.10.+的版本已经内置，如果你要实现如下效果，不需要额外引入插件的js，只需要更新到最新的DT即可。使用1.9版本的用户任然可以继续使用此插件，
使用方法如下代码所示：


<div class="bs-docs-example">
    <iframe src="four_button_example.html" width="100%" height="600px" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
</div>
<pre class="prettyprint linenums">

&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;/assets/datatables/1.9.4/css/jquery.dataTables.css&quot;&gt;

&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;/assets/datatables/1.9.4/js/jquery.dataTables.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;/plug-ins/pagination/four_button/four_button.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    $(document).ready(function () {
       $(&#39;#example&#39;).dataTable({
            &#39;sPaginationType&#39;: &#39;four_button&#39;
       });
   });
&lt;/script&gt;

</pre>






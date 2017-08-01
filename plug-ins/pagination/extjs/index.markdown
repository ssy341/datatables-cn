---
layout: plugins
title: extjs样式 分页插件（Plug-ins） Datatables中文网
from: /plug-ins/pagination/extjs
short: extjs样式
tags: [extjs,插件,分页插件]
tour: ['<li><a href="/">首页</a></li>','<li><a href="/plug-ins">插件</a></li>','<li><a href="/plug-ins/pagination">分页插件</a></li>','<li class="active">extjs</li>']
---

该插件位ExtJs翻页风格，允许用户在输入框里直接输入页码或者点击按钮翻页。如果你要实现如下效果，按照下面的代码示例参考即可。

ps：该插件是基于1.9版本，1.10版的此风格翻页插件看[这里](/plug-ins/pagination/input/index.html)

使用方法如下代码所示：


<div class="bs-docs-example">
{% include iframe.html src="extjs_example.html" iframe_id="iframe1" %}
</div>
<pre class="prettyprint linenums">

&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;/assets/datatables/1.9.4/css/jquery.dataTables.css&quot;&gt;
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;/plug-ins/pagination/extjs/extjs.css&quot;&gt;

&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;/assets/datatables/1.9.4/js/jquery.dataTables.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; language=&quot;javascript&quot; src=&quot;/plug-ins/pagination/extjs/extjs.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    $(document).ready(function () {
       $(&#39;#example&#39;).dataTable({
            &#39;sPaginationType&#39;: &#39;extStyle&#39;
       });
   });
&lt;/script&gt;

</pre>






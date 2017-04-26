---
layout: daily
title: DataTables 多条件查询、多列搜索 博客 DataTable中文网
short: DataTables 多条件查询、多列搜索
date: 2016-6-10
group: 2016-6
caption: DataTables 中文网博客
categories: blog
tags: [博客,DataTables使用经验]
author: DataTable中文网
banner: http://www.kepu.net.cn/gb/special/201009_01_bjwy/bjbc/001.png
---

在使用DataTables展示数据，通常有两种

- 根据条件获取最终的数据显示
- 在已经显示的数据中过滤

第一种，可以参考[根据参数查询表格数据]({{ site.wlan_url }}/manual/daily/2016/04/21/option-ajax-data.html)

第二种，DataTables 本身提供了过滤插件，默认条件下，在表格的右上角会有一个搜索框，可以对表格中的数据进行过滤，这个是针对全局（所有列）的搜索
<!--more-->

如果你想排除某列不参与搜索只需要按下面的配置：
{% highlight javascript linenos %}
var table = $("#example").DataTable({
    "columnDefs":[
        {
            //设置第一列不参与搜索
            "targets":[0],
            "searchable":false
        }
    ]
});
{% endhighlight %}
ps：第一列是索引列，那我们是不希望他被搜索到，因为没有意义，所以我们设置第一列不参与搜索，注意**这里是不参与，只是说针对于全局搜索时，
会把这个值排除在外再搜索，并不是这一列禁用了搜索**，我们依然可以使用 {% include href/api/api.columns param="column().search()" %} 方法，具体往下看

当然如果你不想用这个全局搜索，你还可以关掉他，毕竟他是`keyup`事件，对于有些情况来说不是那么好用
{% highlight javascript linenos %}
var table = $("#example").DataTable({
    //关闭DT的本地搜索
    "searching": false
});
{% endhighlight %}
但是这样做会影响到 DT 提供的搜索API -{% include href/api/api.Core param="search()" %} 方法,实际上DT自带的搜索框也是调用了这个方法，
`"searching": false`相当于把搜索功能关闭了，{% include href/api/api.Core param="search()" %} 就不能用了，这样当然不行，
所以**如果你想用自己的搜索框，那么建议你设置 `dom` 来把默认的搜索框隐藏**（详见 [DataTables 之 DOM]({{ site.wlan_url }}/manual/daily/2016/05/11/option-dom.html)）

我们可以自己写一个或者多个`input`框，点击按钮触发这个方法，这个方法接收的值用空格隔开，就类似于多条件搜索

ps：你还可以传正则表达式 参考 [正则表达式搜索]({{ site.wlan_url }}/manual/daily/2016/05/11/option-search-regex.html)
{% highlight javascript linenos %}
//给搜索按钮绑定点击事件
$(document).on("click","#example button.search",function(){
    //自己定义的搜索框，可以是时间控件，或者checkbox 等等
    var args1 = $("#input1").val();
    var args2 = $("#input2").val();
    //用空格隔开，达到多条件搜索的效果，相当于两个关键字
    table.search(args1+" "+args2).draw();
    //table.search(args1+" "+args2).draw(false);//保留分页，排序状态
});
{% endhighlight %}
再回到 {% include href/api/api.columns param="column().search()" %} 这个，先看看下面两个例子:

- [给每一列添加搜索框]({{site.baseurl}}/example/api/multi_filter.html)
- [给每一列添加下拉框搜索]({{site.baseurl}}/example/api/multi_filter_select.html)

例子中代码看起来可能有点难理解，不要紧，我把关键代码拿出来，如下：
{% highlight javascript linenos %}
 table
    .column( colIdx )
    .search( this.value )
    .draw();
{% endhighlight %}

`colIdx` 表示第几列，这里可以接受单个的数字，`0`,`1`,`2`,`3` 或者是一个数组 `[0,1,2,3]`

`this.value` 表示搜索条件，可以支持正则，不过我实践后发现，使用了 `column` 后，就不能用空格隔开条件查询

如果要针对单个的或者多列去处理，比如第二列搜索条件为 `keith`，第三列搜索条件为 `男`：

{% highlight javascript linenos %}
 table
    .column(3)
    .search("keith")
    .column(4)
    .search("男")
    .draw();
{% endhighlight %}

当然大家还可以自己实践，对代码进行优化，DT 1.10版之后支持链式写法，可以一直点下去

{% include href/api/api.columns param="column().search()" %} 这个方法他不能得到按条件搜索过后的最终结果，
如果你想获取搜索后的数据集，需要使用{% include href/api/api.utility param="filter()" %}

{% highlight javascript linenos %}
 var table = $('#example').DataTable();

 var filteredData = table
     .column( 2 )
     .data()
     .filter( function ( value, index ) {
         return value == 'keith' ? true : false;
     } );
{% endhighlight %}

这里大家或许强迫症就犯了，TMD要弄两次才能获取到数据，第一次为了显示，第二次为了获取到数据，哈哈哈，我也是这么认为的，为什么呢？

我想作者应该是考虑了的，这样做肯定有他的道理，我们这么普通的人都想得到的，作者这么聪明的不会想不到呢？

总的来说{% include href/api/api.columns param="column().search()" %}配合全局的搜索，应该是能满足绝大部分的需求，好好发挥
自己的想象力吧

最后总结：

- `"searching": false` 这样配置了，DT的搜索功能关闭，相关的方法也失效（服务器模式下不影响）
- 搜索功能开启的前提下，全局搜索时可以配置某列不参与搜索
- 你还可以使用 {% include href/api/api.columns param="column().search()" %} 方法匹配的具体某列进行过滤搜索
- 如果你想获取搜索后的结果集，你得需要使用{% include href/api/api.utility param="filter()" %}方法

2016年7月2日补充：

---

小伙伴 **Smail** 提供如下代码：
{% highlight javascript linenos %}
//扩展DT的默认配置
$.extend($.fn.dataTable.defaults, {
    //在 dom 里面不配置 f ，可以隐藏掉默认的搜索框
    dom: 't<"dataTables_info"il>p',
    //DT初始化完毕回调函数
    initComplete: function(settings) {
        var _$this = this;
        var searchHTML = '<label><span>搜索:</span> <input type="search" placeholder="请输入搜索内容" aria-controls="datatable1"></label>';
        //快捷操作的HTML DOM
        $(_$this.selector + '_wrapper .dataTables_filter').append(searchHTML);

        //重写搜索事件
        $(_$this.selector + '_wrapper .dataTables_filter input').bind('keyup',
        function(e) {
            if (e.keyCode == 13 || (e.keyCode == 8 && (this.value.length == 0))) {
                _$this.api().search(this.value).draw();
            }
        });
    }
});

//初始化DT
var t = $('#example').DataTable({
    //......
    //自己需要的其他属性
});
{% endhighlight %}
重写datatables搜索事件，这样就能做到按下回车时搜索了，还不破坏 DataTables 原有的样式结构。

---


2016年10月31日补充：
Smail小伙伴提供如下代码：

{% highlight javascript linenos %}
$.extend($.fn.dataTable.defaults, {
	dom: 't<"dataTables_info"il>p',
	language: {
		"url": "../assets/lib/datatables/datatables_language.json"
	},
	processing: true, //当datatable获取数据时候是否显示正在处理提示信息。
	serverSide: true, //处理分页
	responsive: {
		details: false
	},
	initComplete: function(settings) {
		var _$this = this;

		/**
		 * 重写搜索事件
		 */
		$('#doSearch').bind('click', function(e) {
			_$this.api().ajax.reload();
		});
		$('#search').bind('keyup', function(e) {
			if(e.keyCode == 13 || (e.keyCode == 8 && (this.value.length == 0))) {
				_$this.api().ajax.reload();
			}
		});
	},
	drawCallback: drawCallbackDefault
});

/**
 * DT绘制完成回调
 * 单独写出来是方便二次定制
 * 
 * 默认回调函数功能：
 * 1.DT第一列checkbox初始化从icheck
 * 2.iCheck全选、取消多选、多选与单选双向关联
 * 3.选中的tr加上selected class
 * 
 * @param {Object} settings
 */
function drawCallbackDefault(settings, _$this) {
    console.log('drawCallbackDefault');
	_$this = (isExitsVariable('_$this') && _$this) ? _$this : this;
	selector = _$this.selector;
	$(selector + ' input').iCheck({
		checkboxClass: 'icheckbox_minimal',
		increaseArea: '20%'
	});

	/**
	 * DT thead iCheck 点击事件
	 */
	$(selector + ' input[name=all]').on('ifChecked ifUnchecked', function(e) {
		$(this).closest('table').find('input[name=single]').each(function() {
			if(e.type == 'ifChecked') {
				$(this).iCheck('check');
				$(this).closest('tr').addClass('selected');
			} else {
				$(this).iCheck('uncheck');
				$(this).closest('tr').removeClass('selected');
			}
		});
	});

	/**
	 * DT tbody iCheck点击事件
	 */
	$(selector + ' input[name=single]').on('ifChecked ifUnchecked', function(e) {
		if(e.type == 'ifChecked') {
			$(this).iCheck('check');
			$(this).closest('tr').addClass('selected');
			//全选单选框的状态处理
			var selected = _$this.api().rows('.selected').data().length; //被选中的行数
			var recordsDisplay = _$this.api().page.info().recordsDisplay; //搜索条件过滤后的总行数
			var iDisplayStart = _$this.api().page.info().start; // 起始行数
			if(selected === _$this.api().page.len() || selected === recordsDisplay || selected === (recordsDisplay - iDisplayStart)) {
				$(selector + ' input[name=all]').iCheck('check');
			}
		} else {
			$(this).iCheck('uncheck');
			$(this).closest('tr').removeClass('selected');
			$(selector + ' input[name=all]').attr('checked', false);
			$(selector + ' input[name=all]').iCheck('update');
		}
	});

	/**
	 * 检测参数是否定义
	 * @param {Object} variableName
	 */
	function isExitsVariable(variableName) {
		try {
			if(typeof(variableName) == "undefined") {
				return false;
			} else {
				return true;
			}
		} catch(e) {}
		return false;
	}
}
{% endhighlight %}
使用方式：
{% highlight html linenos %}
<table class="table table-border table-bordered table-bg table-hover table-sort" width="100%">
    <thead>
        <tr class="text-c">
            <th><input id="input-0" type="checkbox" name="all"><label for="input-0"></label></th>
            <th>标题</th>
            <th>栏目</th>
            <th>排序</th>
            <th>创建时间</th>
            <th>作者</th>
            <th>状态</th>
            <th>操作</th>
        </tr>
    </thead>
</table>
<script>
$(function($) {
	var datatable = $('.table-sort').DataTable({
        columns: [{
			data: "id",
            render: function(data, type, row, meta) {
				return '<input id="input-' + data + '" type="checkbox" name="single">'+
				'<label for="input-' + data + '"></label>';
			}
		}],
        drawCallback:function(settings){
            var _$this = this;
            drawCallbackDefault(settings,_$this);
            console.log('用户二次定义！');
        }
	});
});
</script>
{% endhighlight %}
如上代码：
若不声明drawCallback，DT会调用drawCallbackDefault，控制台会打印出drawCallbackDefault，
若声明drawCallback，并在drawCallback中调用默认回调，控制台会打印出drawCallbackDefault和用户二次定义 两句log，
也允许完全覆盖drawCallback重写。
注意，Smail提供的代码依赖JS iCheck组件，使用的小伙伴们记得自行引入icheck。


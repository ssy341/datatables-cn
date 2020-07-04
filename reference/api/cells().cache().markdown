---
layout: reference_md
title: cells().cache()
summary: 获取被选择的多个单元格的Datatables缓存的数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10
navcategory: option
keywords: 关键字
author: 原地址
---

## 描述(Description)

DataTables缓存数据是用来做搜索和排序，是为了让搜索和排序更快的的反应。有时候用这个方法获取DataTables已经为这些操作缓存好的数据是非常有用的，比如当创建一个`select`列表来提供基于列的过滤器。

缓存数据并不能保证在任何特定的时候都可用。如果DataTables没有请求数据，那么就不会被缓存。特别是当你使用{% include href/string.html param="order" %}选项，列的排序还没有执行，数据就不会被缓存。数据失效也会导致缓存被移移除。

应当注意的是，这个方法是必须的，因为Datatables针对不同操作（搜索、排序、显示等）使用不同的数据。具体参考{% include href/option/Columns.html param="columns.data" %}和{% include href/option/Columns.html param="columns.render" %}可以获取更多信息。{% include href/api/Cells.html param="cells().data()" %}方法可以获取单元格里的原始数据。如果你不为DataTables的不同操作使用数据和显示分离，这个方法则没什么意义。

注意，这个方法主要为开发DataTables插件的作者提供操作内部数据的能力。

## 类型(Type)
这个选项能够接受以下类型的参数：

---

### _function_ **cells().cache( [type] )**

#### 描述(Description):
获得指定缓存类型的缓存数据 

#### 参数(Parameters):
{% include_relative cell-cache-parameters-code.html %}

#### 返回(Returns):
{% include href/type/Javascript.html param="string" %}

所选单元格的缓存数据字符串

--- 
    
## 例子(Example)

给一列构建一个过滤列表

{% include runcode.html param="cells-cache-example" %}
{: #cells-cache-example-js }
{% highlight javascript %}
var table = $('#example').DataTable({
    columns:[
        {"data":"time",render:function(data,type,row,meta){
            if(type == "display"){
                return data;
            }
            if(type == "filter"){
                return timeFilterFormat(data);
            }
            if(type == "sort"){
                return timeOrderFormat(data);
            }
            return data;

        }},
        {"data":"date",render:function(data,type,row,meta){
            if(type == "display"){
                return data;
            }
            if(type == "filter"){
                return dateFilterFormat(data);
            }
            if(type == "sort"){
                return dateOrderFormat(data);
            }
            return data;

        }}
    ]
});

//模拟时间转换
function timeOrderFormat(time){
    return 1234567890;
}
function timeFilterFormat(time){
    return "2020年7月4日00:09:00"
}
function dateOrderFormat(date){
    return "12345670000";
}
function dateFilterFormat(date){
    return "2020年7月4日";
}
  
// Create the select list and search operation
var select = $('<select />')
    .appendTo( 'body' )
    .on( 'change', function () {
        table
            .column( 0 )
            .search( $(this).val() )
            .draw();
    } );
 
// Get the search data for the first column and add to the select list
var data = table
    .cells( '', 0 )
    .cache( 'search' )
    .sort()
    .unique()
    .each( function ( d ) {
        select.append( $('<option value="'+d+'">'+d+'</option>') );
    } );
{% endhighlight %}

{: #cells-cache-example-body }
{% highlight html %}
  <table id="example" class="display">
        <thead>
            <tr>
                <th>时间</th>
                <th>日期</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>00:04:06</td>
                <td>2020年7月4日</td>
            </tr>
            <tr>
                <td>00:04:34</td>
                <td>2020年7月6日</td>
            </tr>
        </tbody>
    </table>
{% endhighlight %}



## 相关属性(Related)
下面的选项是直接相关的，也可能是您的应用程序的开发非常有用。

API

- {% include href/api/Cells.html param="cells().render()" %}
- {% include href/api/Cells.html param="cells().invalidate()" %}
- {% include href/api/Cells.html param="cell().cache()" %}
- {% include href/api/Cells.html param="cell().render()" %}
- {% include href/api/Cells.html param="cell().invalidate()" %}


---
layout: reference_md
title: cell().render()
summary: 获取单个单元格的渲染数据
sub: 文档(Options & API) DataTables中文网
since: DataTables 1.10.3
navcategory: api
keywords: cell,api,render
author: /reference/api/cell().render()
---

## 描述(Description)

DataTables拥有使用 [正交数据](orthogonal-data) 的能力，比如对于一个单元格有不同的数据，取决于当前所做的操作。一个典型的例子就是时间、日期以数字格式（时间戳的方式）进行排序，以复杂的格式进行显示。

{% include href/api/Cells.html param="cell().data()" %}方法提供访问底层的原始数据，而这个方法提供访问在每个类型下的被渲染的数据。提供这个方法是为了允许插件作者可以访问表中可用的正交数据。

注意，调用这个方法会对单元格执行渲染器，而不是从缓存里获取信息（参考{% include href/api/Cells.html param="cell().cache()" %}从缓存里读取和{% include href/api/Cells.html param="cell().invalidate()" %}清除缓存）。



## 类型(Type)


---

### _function_ **cell().render( type )**

#### 描述(Description):

获取被选择单个单元格渲染后的数据
     
#### 参数(Parameters):
{% include_relative parameters/cell.render.html %}

#### 返回(Returns):

`Any`

所请求类型的渲染数据

--- 
    
## 例子(Example)

点击单元格，获取该单元格的显示信息

{% include runcode.html param="cell-render-example1" %}
{: #cell-render-example1-js }
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
 
$('#example').on( 'click', 'tbody td', function () {
    var data = table.cell( this ).render( 'display' );
 
    alert( data );
} );
{% endhighlight %}

{: #cell-render-example1-body }
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




点击单元格，获取该单元格的排序信息

{% include runcode.html param="cell-render-example2" %}
{: #cell-render-example2-js }
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
 
$('#example').on( 'click', 'tbody td', function () {
    var data = table.cell( this ).render( 'sort' );
 
    alert( data );
} );
{% endhighlight %}


{: #cell-render-example2-body }
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



点击单元格，获取该单元格自定义类型的信息


{% include runcode.html param="cell-render-example3" %}
{: #cell-render-example3-js }
{% highlight javascript %}
var table = $('#example').DataTable({
    columns:[
        {"data":"time",render:function(data,type,row,meta){
            if(type == "custom"){
                return customFormat(data);
            }
            return data;
        }},
        {"data":"date",render:function(data,type,row,meta){
            if(type == "custom"){
                return customFormat(data);
            }
            return data;
        }}
    ]
});

//模拟转换
function customFormat(args){
    return "DataTables中文网"+args;
}
 
$('#example').on( 'click', 'tbody td', function () {
    //这里的类型又render方法里if的判断决定
    var data = table.cell( this ).render( 'custom' );
 
    alert( data );
} );
{% endhighlight %}

{: #cell-render-example3-body }
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

- {% include href/api/Cells.html param="cells().data()" %}
- {% include href/api/Cells.html param="cell().data()" %}
- {% include href/api/Cells.html param="cell().invalidate()" %}

Options

- {% include href/option/Columns.html param="columns.data" %}
- {% include href/option/Columns.html param="columns.render" %}



[orthogonal-data]: https://datatables.net/manual/orthogonal-data
---
title: 数据 Data
keywords: 手册 安装 Data
sidebar: mydoc_sidebar
permalink: manual/data/index.html
reference: https://datatables.net/manual/data/
---

数据很复杂，所有的数据都不一样，因此DataTables提供了丰富的选项，可用于配置如何获取要在表格中显示的数据以及如何处理该数据。

DataTables处理数据的方式有三个核心概念，本页将对此进行详细的讨论：

- 处理模式(Processing modes)
- 数据类型(Data Types)
- 数据源(Data sources)


## 处理模式(Processing modes)

DataTables有两种不同处理数据（排序，过滤等）的模式：

- 客户端处理(Client-side processing) - 所有的数据预先加载在浏览器中完成数据处理
- 服务器处理(Server-side processing) - 表格每次重绘都产生一个Ajax请求，只返回每次需要显示的数据，数据处理在服务器上执行

两种方法各有优点和缺点，选择哪种模式的关键在于表格显示数据的多少。**根据经验来看，如果你的数据少于1万，则使用客户端处理，超过10万使用
服务器处理**。介于1万和10万之间是灰色区域，你需要根据应用程序的性质和要显示的数据来做出决定。


{% include note.html content="
两种模式是相互排斥的，不能同时使用，也不能从一种模式动态切换成另一种模式。
" %}


### 客户端处理

客户端处理是DataTables是默认的处理方式，因为他易于使用，不需要再额外编写代码。在客户端处理模式中，
DataTables本身在浏览器中完成表格的排序，搜索，分页以及DataTables执行的所有其他数据处理操作。

{% include note.html note="客户端处理" content="
<br>
- 所有数据预先加载
<br>
- 数据可以从DOM，JS数据源或者通过ajax获取
<br>
- 数据处理在浏览器中执行
<br>
- 用于中小型数据集
" %}

{% include note.html note="需要考虑的要点" content="
<br>
- 花时间下载所有数据集
<br>
- 大量数据操作会降低浏览器速度
" %}

### 服务器处理

当你想在表格中显示大量数据（比如数百万级的数据），那么服务器处理模式将发挥作用。如果是客户端模式，处理数百万级别的数据，
发送数据到客户端，然后使用Javascript处理这些数据可能会加大浏览器的开销，并可能导致应用程序最终性能不佳。
在服务器处理模式下，数据的排序，搜索等交给服务器，服务器可以利用数据库引擎提高对数据处理的速度。
每页数据（DataTables管这个操作叫作 draw）会向服务器发送ajax请求。虽然每个Ajax请求可能需要几分之一秒，但比起等待加载大量数据更可取。

服务器处理开启需要 {% include option.html name="serverSide" %} 选项启用，有关服务器处理模式更多的信息，
参考手册[服务器处理](https://datatables.net/manual/server-side)部分。



{% include note.html note="服务端处理" content="
<br>
- 每次draw会发送ajax请求
<br>
- 只加载需要的数据
<br>
- 服务器处理
<br>
- 大数据集理想的选择
" %}


{% include note.html note="需要考虑的要点" content="
<br>
- Ajax请求的延迟
<br>
- 服务器能否接受很多请求的负载？
" %}


## 数据类型(Data source types)

用于DataTables的主要数据源必须始终是一个数组（使用DOM的时候会自动创建）。
该数组的每一项都将定义一行来显示，DataTables可以使用三种基本类型的Javascript数据类型作为行的数据源：

- 数组 : []
- 对象 : {}
- 实例 : new Myclass()

DataTables可以使用{% include option.html name="columns.data" %}和{% include option.html name="columns.render" %}选项使用这些数据。
默认的操作模式是一个数组，对象和实例在有些情况下很有用，它们在处理复杂数据时显的更直观。

### 数组

在DataTables中，数组很容易处理，因为数组元素与数据出现在列中的映射只是通过读取该位置数组元素值的列索引来执行。

因此，当使用数组作为数据源时，每个数组中元素的数量必须等于表中的列数。例如：对于6列表，你可能会有：

```javascript
var data = [
    [
        "Tiger Nixon",
        "System Architect",
        "Edinburgh",
        "5421",
        "2011/04/25",
        "$3,120"
    ],
    [
        "Garrett Winters",
        "Director",
        "Edinburgh",
        "8422",
        "2011/07/25",
        "$5,300"
    ]
]
```

然后，用下面的方式初始化表格：

```javascript
$('#example').DataTable( {
    data: data
} );
```
然后你会看到如下效果：

<table class="basic markdown">
    <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Extn.</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>Edinburgh</td>
          <td>5421</td>
          <td>2011/04/25</td>
          <td>$3,120</td>
        </tr>
        <tr>
          <td>Garrett Winters</td>
          <td>Director</td>
          <td>Edinburgh</td>
          <td>8422</td>
          <td>2011/07/25</td>
          <td>$5,300</td>
        </tr>
    </tbody>
</table>


### 对象

对象和数组稍有不同，使用起来很直观。如果你在使用[API](https://datatables.net/manual/api)主动处理数据，
则可以非常容易获得特定的数据，因为你只需要使用属性名称，而不是使用数组的下标来获取（比如，`data.name` 而不是 `data[0]` ）

对象还可以包含比DataTables显示所需要的更多的信息，这对于操作数据来说非常重要。（例如包含数据库的主键，而不需要让最终用户看到这个数据）

使用对象的缺点是，你需要明确告诉DataTables它应该从每个列的对象中使用那个属性。
这个操作由 {% include option.html name="columns.data" %} 或者 {% include option.html name="columns.render" %} 选项来完成。

适用对象作为数据源，数据如下所示：

```javascript
var data = [
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Garrett Winters",
        "position":   "Director",
        "salary":     "$5,300",
        "start_date": "2011/07/25",
        "office":     "Edinburgh",
        "extn":       "8422"
    }
]
```

然后表格初始化代码：
```javascript
$('#example').DataTable( {
    data: data,
    columns: [
        { data: 'name' },
        { data: 'position' },
        { data: 'salary' },
        { data: 'office' }
    ]
} );
```
{% include note.html content="
虽然数据源里有六列数据，但是在表格中我只显示了4列，这4列的顺序取决你排列属性的位置，而不需要更改数据源。
" %}


然后你会看到如下效果:

<table class="basic markdown">
    <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Office</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>$3,120</td>
          <td>Edinburgh</td>
        </tr>
        <tr>
          <td>Garrett Winters</td>
          <td>Director</td>
          <td>$5,300</td>
          <td>Edinburgh</td>
        </tr>
    </tbody>
</table>


### 实例

使用Javascript对象实例作为数据源会非常有用，因为这些实例定义了可用于更新数据的抽象方法。
实例和对象可以几乎相同的方式在DataTables中使用，只需要传入对象并将方法或属性名称分配给 {% include option.html name="columns.data" %} 以获得每列的数据。

```javascript
function Employee ( name, position, salary, office ) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this._office = office;
 
    this.office = function () {
        return this._office;
    }
};
 
$('#example').DataTable( {
    data: [
        new Employee( "Tiger Nixon", "System Architect", "$3,120", "Edinburgh" ),
        new Employee( "Garrett Winters", "Director", "$5,300", "Edinburgh" )
    ],
    columns: [
        { data: 'name' },
        { data: 'salary' },
        { data: 'office' },
        { data: 'position' }
    ]
} );
```


{% capture desc1 %}
office 是一个方法，而 name,position和salary是属性。DataTables会自动实现一个函数，执行它并使用这个函数返回的值作为
单元格的值。你也可以使用语法 office() 来明确使用函数，查询 {% include option.html name='columns.data' %} 获得更详细的信息。
{% endcapture %}

{% include note.html content=desc1 %}


基于上面数据， `position` 列显示在最后一列，他是根据读取属性的顺序来决定的，然后你会看到如下效果：

<table class="basic markdown">
    <thead>
        <tr>
          <th>Name</th>
          <th>Salary</th>
          <th>Office</th>
          <th>Position</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>Tiger Nixon</td>
          <td>$3,120</td>
          <td>Edinburgh</td>
          <td>System Architect</td>
        </tr>
        <tr>
          <td>Garrett Winters</td>
          <td>$5,300</td>
          <td>Edinburgh</td>
          <td>Director</td>
        </tr>
    </tbody>
</table> 


## 数据源(Data sources)

利用现在定义的处理模式和数据类型的概念，我们可以研究DataTables是如何获取它要操作的数据。
DataTables有三种基本数据来源：

- DOM(纯HTML)
- Javascript
- Ajax来源的数据

### DOM 

当DataTables启动时，它会自动检查它正在操作的表是否已经存在数据，并且将数据用于表中。
（注意，如果你使用 {% include option.html name="data" %} 或者 {% include option.html name="ajax" %}属性获取新数据，它会丢弃这些数据）。这是使用DataTables最简单的办法-使用常规的HTMl表格。

注意，使用DOM做为数据源，默认情况下，DataTables将使用数组作为数据源（自动创建），不过你可以使用 {% include option.html name="columns.data" %} 选项让它为
行数据构造对象。

#### HTML5

DataTables可以使用HTML5 `data-*` ，这些数据可以为DataTables提供排序和搜索的附加信息。例如你可能会有一个格式为"28th March 2018"
浏览器很难对此进行排序，但是你可以提供一个 `data-order` 属性作为包含时间戳单元格的一部分，该时间戳可以轻松排序。以此类推，我们还可以
使用 `data-search` 提供搜索数据，比如：

```html
<td data-search="28th March 2018 28/03/2018" data-order="1522249843706">
    28th March 2018
</td>
```

DataTables会自动检测：

- 排序数据 ：`data-order` 和 `data-sort` 属性
- 搜索数据 ：`data-search` 和 `data-filter` 属性

参考手册[正交数据](https://datatables.net/manual/orthogonal-data#HTML-5)部分获取更多信息。  

### JavaScript

你可以指示DataTables使用 {% include option.html name="data" %}  选项初始化数据。这些数据可以是数组，对象，实例。只要Javascript可以访问的数据，就可以
将它发送到DataTables（无论是自定义的ajax调用，websocket或者只要是好的数组数据）

当你使用[DataTables API](https://datatables.net/manual/api)时，这种方法尤其有用，特别是 
{% include api.html name="row.add()" %}  和 {% include api.html name="row.remove()" %}
方法能够动态添加数据和删除数据。

### Ajax

Ajax数据源很像Javascript数据源，只是DataTables会发送ajax请求来得到数据。从特定的脚本获取表格数据通常会很有用，将显示
的数据和逻辑分开。DataTables中的ajax数据源由 {% include option.html name="ajax" %}  选项控制。它是可以访问到数据的url字符串。

跟Javascript数据源类似，ajax数据源可以是对象或者数组的形式，但是不能使用实例的方式（因为json里没有办法用实例表示）。

如上所示，[服务器处理](https://datatables.net/manual/server-side)是ajax数据源的特殊形式，其中，仅当需要向用户显示该页面时，才通过ajax请求来检索要在DataTables中每个页面显示的数据。
这使得服务器上的数据库引擎都能够处理大量的数据集。

Ajax获取数据将在[下一章节](https://datatables.net/manual/ajax)继续讨论。

## 下一步(Where to go next)

数据是DataTables的核心，在这里简单引出，在后面的主题继续探讨。本章节概述了DataTables如何处理数据，还有其他主题是：

- [正交数据（Orthogonal data）](https://datatables.net/manual/data/orthogonal-data)
- [渲染器（Renderers）](https://datatables.net/manual/data/renderers)
- [Ajax获得数据（Ajax sourced data）](https://datatables.net/manual/ajax)
- [API 访问数据（API access to the data）](https://datatables.net/manual/api)
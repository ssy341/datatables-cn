---
layout: daily
title: Datatables服务器模式（ServerSide）实现 博客 DataTables中文网
short: Datatables服务器模式（ServerSide）实现
date: 2020-09-13
group: 2020-9
caption: DataTables 中文网博客
categories: blog
tags: [博客,DataTables使用经验]
author: DataTables中文网
keywords: java,服务器模式,php,serverside,服务器翻页,物理分页
hot: 1
toc: true
---

## 概览
---

本教程为介绍[《使用Datatables"武装"你的html表格》第十章 - Datatables使用服务器模式处理海量数据][ten]。

在第十章里介绍了服务器模式的核心概念，以及和客户端的区别，关于服务器的更全面的介绍可以参考第十章内容。本篇主要介绍Datatables如何配合后端实现服务器模式。


## 目标
---

- 结合Datatables和Spring Boot完成数据库表的物理分页


## 准备
---

- 后端语言：Java
- 后端使用框架：Spring Boot + Thymeleaf + spring-data-jpa-datatables
- 工具：Maven
- 数据库：MySQL
- 前端插件：Datatables + jQuery + jquery.spring-friendly



## 服务器模式
---

简单来说，服务器模式就是把数据的处理交给服务端处理，包括数据的分页，排序，过滤。因为如果一张表的数据超过10万，一次性获取到前端，浏览器处理会不那么理想，而且会有各种原因会加长整个过程。比如，从数据库里获取这是一个过程，然后把数据封装给前端，网络加载也是需要考虑的，再就是数据到了页面后，浏览器进行渲染，也是需要消耗性能的。所以为了保证用户体验，对于超过10万的数据采取分次获取的方式来减少前面提到的各种问题。


### 前端请求参数
---



Datatables很强大，已经帮我们封装好参数，包括起始数，一页需要显示的数量，搜索条件等。我们来看看这些请求参数。

#### 开启服务器模式
---

首先，开启Datatables的服务器模式很简单，参考如下代码：

```javascript
    $('#serverside').DataTable({
        serverSide: true,
        ajax: {
            url: "/dtlist"
        },
        columns: [
            {data: "firstName"},
            {data: "position"},
            {data: "office"},
            {data: "age"},
            {data: "startDate"},
            {data: "salary"}
        ]
    });
```

只需要添加配置`serverSide:true`即可开启Datatables服务器支持。

#### 未处理前的请求参数
---

开启服务器模式后，Datatables的每次操作（翻页，排序，过滤）都会向后台发送一次请求，下面为截取的一次请求：

```javascript
http://localhost:8080/dtlist?draw=1&columns%5B0%5D%5Bdata%5D=firstName&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=position&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=office&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=age&columns%5B3%5D%5Bname%5D=&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=startDate&columns%5B4%5D%5Bname%5D=&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B5%5D%5Bdata%5D=salary&columns%5B5%5D%5Bname%5D=&columns%5B5%5D%5Bsearchable%5D=true&columns%5B5%5D%5Borderable%5D=true&columns%5B5%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B5%5D%5Bsearch%5D%5Bregex%5D=false&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=asc&start=0&length=10&search%5Bvalue%5D=&search%5Bregex%5D=false&_=1601969559863
```

因为默认是get请求，所以所有的参数都会带到url后面，我们把请求参数解码后如下：

```json
draw: 1
columns[0][data]: firstName
columns[0][name]: 
columns[0][searchable]: true
columns[0][orderable]: true
columns[0][search][value]: 
columns[0][search][regex]: false
columns[1][data]: position
columns[1][name]: 
columns[1][searchable]: true
columns[1][orderable]: true
columns[1][search][value]: 
columns[1][search][regex]: false
columns[2][data]: office
columns[2][name]: 
columns[2][searchable]: true
columns[2][orderable]: true
columns[2][search][value]: 
columns[2][search][regex]: false
columns[3][data]: age
columns[3][name]: 
columns[3][searchable]: true
columns[3][orderable]: true
columns[3][search][value]: 
columns[3][search][regex]: false
columns[4][data]: startDate
columns[4][name]: 
columns[4][searchable]: true
columns[4][orderable]: true
columns[4][search][value]: 
columns[4][search][regex]: false
columns[5][data]: salary
columns[5][name]: 
columns[5][searchable]: true
columns[5][orderable]: true
columns[5][search][value]: 
columns[5][search][regex]: false
order[0][column]: 0
order[0][dir]: asc
start: 0
length: 10
search[value]: 
search[regex]: false
```

结合第十章讲的内容，我们可以看到几个关键的请求参数：

- 1，draw 计数器，表示ajax请求的次数
- 2，start 数据起始位置
- 3，length 每页显示数据条数
- 4，search[value] 全局搜索条件
- 5，search[regex] 全局搜索条件是否支持正则表达式
- 6，order[i][column] 排序列
- 7，order[i][dir] 排序列按照什么方式排列
- 8，columns[i][data] 该列绑定的数据源的属性
- 9，columns[i][name] 该列的别名
- 10，columns[i][searchable] 该列是否允许搜索
- 11，columns[i][orderable] 该列是否允许排序
- 12，columns[i][search][value] 该列搜索的条件
- 13，columns[i][search][regex] 该列搜索的条件是否支持正则处理

2-3为数据翻页处理，4-5是全局搜索处理，6-7是全局排序处理，8-13针对单列处理

了解以上参数就可以告诉服务端前端需要做的事情，好让后端处理好后，封装好数据返回给前端。

#### 处理后的请求参数
---

如果你是php开发，你可以在服务端代码接受上面的请求参数，所以这里也不在赘述，关于php如果实现服务器模式可以参考Datatables的[github仓库][github]，所有的实现都是基于php的。

本节要讨论的是如何使用Java语言实现服务端处理。相信看到上面的参数形式，做为一名Java开发来说有点懵。没关系，这个是很正常的，写这篇文章就是来解决这个问题。

这里我们需要引入一个第三方的前端js库`jquery.spring-friendly.js`来解决这个问题。`jquery.spring-friendly.js`重写了jQuery数据序列化，允许Spring MVC接受Datatables发出的请求。把`order[i][column]`处理成`order[i].column`，这样处理之后，在Java后端就能友好的处理了。下面截取引用了`jquery.spring-friendly.js`处理后，ajax发送的请求：


```
draw: 1
columns[0].data: firstName
columns[0].name: 
columns[0].searchable: true
columns[0].orderable: true
columns[0].search.value: 
columns[0].search.regex: false
columns[1].data: position
columns[1].name: 
columns[1].searchable: true
columns[1].orderable: true
columns[1].search.value: 
columns[1].search.regex: false
columns[2].data: office
columns[2].name: 
columns[2].searchable: true
columns[2].orderable: true
columns[2].search.value: 
columns[2].search.regex: false
columns[3].data: age
columns[3].name: 
columns[3].searchable: true
columns[3].orderable: true
columns[3].search.value: 
columns[3].search.regex: false
columns[4].data: startDate
columns[4].name: 
columns[4].searchable: true
columns[4].orderable: true
columns[4].search.value: 
columns[4].search.regex: false
columns[5].data: salary
columns[5].name: 
columns[5].searchable: true
columns[5].orderable: true
columns[5].search.value: 
columns[5].search.regex: false
order[0].column: 0
order[0].dir: asc
start: 0
length: 10
search.value: 
search.regex: false
_: 1601966534646
```

相比没处理之前，通过`jquery.spring-friendly.js`处理之后，参数的形式就变得友好了。


### 后端返回数据处理
---

通过处理后的参数，只需要在后端定义一个Bean，写上相应的属性即可正常接受，这里，除了前端做了优化处理，后端我同样也推荐一个第三方的插件来帮助开发人员迅速上手。

这里我们用到的第三方插件是[`spring-data-jpa-datatables`][sdjd]，下面就简单介绍如何使用这个插件。

#### 快速实现功能
---

- 1，在pom文件里加入它的依赖

```
<dependency>
  <groupId>com.github.darrachequesne</groupId>
  <artifactId>spring-data-jpa-datatables</artifactId>
  <version>5.0.0</version>
</dependency>
```

- 2，在Application类中配置

```java
package club.datatables.serverside.javaversion;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.datatables.repository.DataTablesRepositoryFactoryBean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * @author Datatables中文网 http://datatables.club
 * @date 2020年09月08日14:37:27
 */
@SpringBootApplication
@EnableJpaRepositories(repositoryFactoryBeanClass = DataTablesRepositoryFactoryBean.class)
public class JavaversionApplication {

    public static void main(String[] args) {
        SpringApplication.run(JavaversionApplication.class, args);
    }

}

```

- 3，创建实体

```java
package club.datatables.serverside.javaversion.entity;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

/**
 * @author Datatables中文网 http://datatables.club
 * @date 2020年09月08日14:37:27
 *
 * 实体类
 */
@Entity
@Table(name = "tb_datatables_demo")
@Data
public class DatatablesDemo {
    @Id
    private Long id;
    private String firstName;
    private String lastName;
    private String position;
    private String email;
    private String office;
    private Timestamp startDate;
    private Integer age;
    private Integer salary;
    private Integer seq;
    private String extn;
}
```

- 4，创建Repository

```java
package club.datatables.serverside.javaversion.dao;

import club.datatables.serverside.javaversion.entity.DatatablesDemo;
import org.springframework.data.jpa.datatables.repository.DataTablesRepository;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * @author Datatables中文网 http://datatables.club
 * @date 2020年09月08日14:37:27
 *
 * 持久层
 */
public interface DatatablesDemoRepository
        extends DataTablesRepository<DatatablesDemo,Long>, JpaRepository<DatatablesDemo,Long> {

}
```

- 5，创建Controller

```java
package club.datatables.serverside.javaversion.controller;

import club.datatables.serverside.javaversion.dao.DatatablesDemoRepository;
import club.datatables.serverside.javaversion.entity.DatatablesDemo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.datatables.mapping.DataTablesInput;
import org.springframework.data.jpa.datatables.mapping.DataTablesOutput;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.Valid;
import java.util.*;


/**
 * @author Datatables中文网 http://datatables.club
 * @date 2020年09月08日14:37:27
 *
 * 控制器
 */
@Controller
public class DatatablesDemoController {

    @Autowired
    DatatablesDemoRepository empRepository;

    /**
     * 服务端模式
     * @param input
     * @return
     */
    @RequestMapping(value = "/dtlist", method = RequestMethod.GET)
    @ResponseBody
    public DataTablesOutput<DatatablesDemo> list(@Valid DataTablesInput input) {
        return empRepository.findAll(input);
    }

}

```

通过以上5步即可实现java端的服务器处理，是不是非常简单？但光实现了还没有解决问题，我们还得弄清楚是怎么实现的。

其实不难理解，只需要搞清楚`DataTablesInput`和`DataTablesOutput`这两个类，即可


#### 接受参数(DataTablesInput)
---

首先我们看一下关键类`DataTablesInput`。

```java
package org.springframework.data.jpa.datatables.mapping;

import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
public class DataTablesInput {

  /**
   * Draw counter. This is used by DataTables to ensure that the Ajax returns from server-side
   * processing requests are drawn in sequence by DataTables (Ajax requests are asynchronous and
   * thus can return out of sequence). This is used as part of the draw return parameter (see
   * below).
   */
  @NotNull
  @Min(0)
  private Integer draw = 1;

  /**
   * Paging first record indicator. This is the start point in the current data set (0 index based -
   * i.e. 0 is the first record).
   */
  @NotNull
  @Min(0)
  private Integer start = 0;

  /**
   * Number of records that the table can display in the current draw. It is expected that the
   * number of records returned will be equal to this number, unless the server has fewer records to
   * return. Note that this can be -1 to indicate that all records should be returned (although that
   * negates any benefits of server-side processing!)
   */
  @NotNull
  @Min(-1)
  private Integer length = 10;

  /**
   * Global search parameter.
   */
  @NotNull
  private Search search = new Search();

  /**
   * Order parameter
   */
  @NotEmpty
  private List<Order> order = new ArrayList<>();

  /**
   * Per-column search parameter
   */
  @NotEmpty
  private List<Column> columns = new ArrayList<>();

  /**
   * 
   * @return a {@link Map} of {@link Column} indexed by name
   */
  public Map<String, Column> getColumnsAsMap() {
    Map<String, Column> map = new HashMap<>();
    for (Column column : columns) {
      map.put(column.getData(), column);
    }
    return map;
  }

  /**
   * Find a column by its name
   *
   * @param columnName the name of the column
   * @return the given Column, or <code>null</code> if not found
   */
  public Column getColumn(String columnName) {
    if (columnName == null) {
      return null;
    }
    for (Column column : columns) {
      if (columnName.equals(column.getData())) {
        return column;
      }
    }
    return null;
  }

  /**
   * Add a new column
   *
   * @param columnName the name of the column
   * @param searchable whether the column is searchable or not
   * @param orderable whether the column is orderable or not
   * @param searchValue if any, the search value to apply
   */
  public void addColumn(String columnName, boolean searchable, boolean orderable,
      String searchValue) {
    this.columns.add(new Column(columnName, "", searchable, orderable,
        new Search(searchValue, false)));
  }

  /**
   * Add an order on the given column
   *
   * @param columnName the name of the column
   * @param ascending whether the sorting is ascending or descending
   */
  public void addOrder(String columnName, boolean ascending) {
    if (columnName == null) {
      return;
    }
    for (int i = 0; i < columns.size(); i++) {
      if (!columnName.equals(columns.get(i).getData())) {
        continue;
      }
      order.add(new Order(i, ascending ? "asc" : "desc"));
    }
  }

}

```

结合前面提到的请求参数，我们可以看到`DataTablesInput`类封装了Datatables请求的所有参数，通过这个类可以获取Datatables在前端所做的操作。


#### 返回数据(DataTablesOutput)
---

接受参数后，可以处理分页，排序，过滤，最后把数据包装到`DataTablesOutput`类中，返回给前端。再看`DataTablesOutput`的代码：

```java
package org.springframework.data.jpa.datatables.mapping;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.util.Collections;
import java.util.List;

@Data
public class DataTablesOutput<T> {

  /**
   * The draw counter that this object is a response to - from the draw parameter sent as part of
   * the data request. Note that it is strongly recommended for security reasons that you cast this
   * parameter to an integer, rather than simply echoing back to the client what it sent in the draw
   * parameter, in order to prevent Cross Site Scripting (XSS) attacks.
   */
  @JsonView(View.class)
  private int draw;

  /**
   * Total records, before filtering (i.e. the total number of records in the database)
   */
  @JsonView(View.class)
  private long recordsTotal = 0L;

  /**
   * Total records, after filtering (i.e. the total number of records after filtering has been
   * applied - not just the number of records being returned for this page of data).
   */
  @JsonView(View.class)
  private long recordsFiltered = 0L;

  /**
   * The data to be displayed in the table. This is an array of data source objects, one for each
   * row, which will be used by DataTables. Note that this parameter's name can be changed using the
   * ajaxDT option's dataSrc property.
   */
  @JsonView(View.class)
  private List<T> data = Collections.emptyList();

  /**
   * Optional: If an error occurs during the running of the server-side processing script, you can
   * inform the user of this error by passing back the error message to be displayed using this
   * parameter. Do not include if there is no error.
   */
  @JsonView(View.class)
  private String error;

  public interface View {
  }

}
```

从上面的代码可以看到，`DataTablesOutput`用来封装返回的数据，总共有五个参数，这个在第十章中也是有提到的，这里再简单解释一下：

- draw 绘制请求次数，前端传到后端无需做任何处理，直接返回
- recordsTotal 表中的总记录数
- recordsFiltered 过滤表格后的记录数
- data 表格每页显示的数据集合
- error 错误信息

最后封装好的数据如下：

```json
{
    "draw": 1,
    "recordsTotal": 57,
    "recordsFiltered": 57,
    "data": [
        {
            "id": 5,
            "firstName": "Airi",
            "lastName": "Satou",
            "position": "Accountant",
            "email": "a.satou@datatables.net",
            "office": "Tokyo",
            "startDate": "2008-11-28T06:00:00.000+00:00",
            "age": 33,
            "salary": 162700,
            "seq": 55,
            "extn": "5407"
        },
        {
            "id": 25,
            "firstName": "Angelica",
            "lastName": "Ramos",
            "position": "Chief Executive Officer (CEO)",
            "email": "a.ramos@datatables.net",
            "office": "London",
            "startDate": "2009-10-09T05:00:00.000+00:00",
            "age": 47,
            "salary": 1200000,
            "seq": 36,
            "extn": "5797"
        },
        {
            "id": 3,
            "firstName": "Ashton",
            "lastName": "Cox",
            "position": "Junior Technical Author",
            "email": "a.cox@datatables.net",
            "office": "San Francisco",
            "startDate": "2009-01-12T06:00:00.000+00:00",
            "age": 66,
            "salary": 86000,
            "seq": 6,
            "extn": "1562"
        },
        {
            "id": 19,
            "firstName": "Bradley",
            "lastName": "Greer",
            "position": "Software Engineer",
            "email": "b.greer@datatables.net",
            "office": "London",
            "startDate": "2012-10-13T05:00:00.000+00:00",
            "age": 41,
            "salary": 132000,
            "seq": 48,
            "extn": "2558"
        },
        {
            "id": 28,
            "firstName": "Brenden",
            "lastName": "Wagner",
            "position": "Software Engineer",
            "email": "b.wagner@datatables.net",
            "office": "San Francisco",
            "startDate": "2011-06-07T05:00:00.000+00:00",
            "age": 28,
            "salary": 206850,
            "seq": 20,
            "extn": "1314"
        },
        {
            "id": 6,
            "firstName": "Brielle",
            "lastName": "Williamson",
            "position": "Integration Specialist",
            "email": "b.williamson@datatables.net",
            "office": "New York",
            "startDate": "2012-12-02T06:00:00.000+00:00",
            "age": 61,
            "salary": 372000,
            "seq": 21,
            "extn": "4804"
        },
        {
            "id": 43,
            "firstName": "Bruno",
            "lastName": "Nash",
            "position": "Software Engineer",
            "email": "b.nash@datatables.net",
            "office": "London",
            "startDate": "2011-05-03T05:00:00.000+00:00",
            "age": 38,
            "salary": 163500,
            "seq": 3,
            "extn": "6222"
        },
        {
            "id": 23,
            "firstName": "Caesar",
            "lastName": "Vance",
            "position": "Pre-Sales Support",
            "email": "c.vance@datatables.net",
            "office": "New York",
            "startDate": "2011-12-12T06:00:00.000+00:00",
            "age": 21,
            "salary": 106450,
            "seq": 29,
            "extn": "8330"
        },
        {
            "id": 51,
            "firstName": "Cara",
            "lastName": "Stevens",
            "position": "Sales Assistant",
            "email": "c.stevens@datatables.net",
            "office": "New York",
            "startDate": "2011-12-06T06:00:00.000+00:00",
            "age": 46,
            "salary": 145600,
            "seq": 15,
            "extn": "3990"
        },
        {
            "id": 4,
            "firstName": "Cedric",
            "lastName": "Kelly",
            "position": "Senior Javascript Developer",
            "email": "c.kelly@datatables.net",
            "office": "Edinburgh",
            "startDate": "2012-03-29T05:00:00.000+00:00",
            "age": 22,
            "salary": 433060,
            "seq": 41,
            "extn": "6224"
        }
    ],
    "error": null
}
```

由于这里采用了第三方插件，所以这些数据都由插件自动封装，Datatables接收到返回，即可正常工作。

## 总结
---

到此，我们完成了Datatables结合Java的服务器分页功能，虽然使用了第三方插件，但是实现Datatables服务器处理基本思路分为三步：

- **接收**Datatables封装的请求参数
- **处理**参数，从数据库获取数据
- **返回**Datatables要求格式的数据

所以，根据上面总结，不管后端是什么语言，只要弄清楚了上面三个核心步骤，都能够轻松简单实现Datatables服务端处理。


以上提到的代码的完整版，我已经放到[github][ssy341]上，可以下载参考



[ten]: {{ site.baseurl }}/blog/2020/09/07/datatables-server-side.html
[github]: https://github.com/DataTables/DataTables/tree/master/examples/server_side/scripts
[sdjd]: https://github.com/darrachequesne/spring-data-jpa-datatables
[ssy341]: https://github.com/ssy341/datatables-serverside-java-spring-boot


/**
 * Created by datatables.club on 2016/5/26.
 */
var debug = false;

if (!window.localStorage) {
    alert('不支持 localStorage,会影响使用功能');
}

//因为功能还没有全部写完，避免弹出错误提示，每次数据都清空
var initFlag = localStorage.getItem("datatables-cn-data");
if (initFlag && debug) {
    localStorage.removeItem("datatables-cn-data");
}
//彩蛋
localStorage.setItem("datatables-cn-noteflag", 1);
var addCount = 0, editCount = 0, delCount = 0;
var NOTEFLAG = localStorage.getItem("datatables-cn-noteflag");
NOTEFLAG = parseInt(NOTEFLAG);


//重置正在编辑的行
function restoreRow(oTable02, nRow) {
    var aData = oTable02.row(nRow).data();
    var json = {
        id: aData.id,
        name: aData.name,
        type: aData.type,
        color: aData.color,
        priority: aData.priority,
        done: aData.done,
        first: aData.first,
        second: aData.second,
        third: aData.third,
        action: aData.action
    };
    var arr = creater.createRowObj(json);
    oTable02.row(nRow).data(arr).draw();
}

//把当前行变为可编辑状态
function editRow(oTable02, nRow) {
    var aData = oTable02.row(nRow).data();
    var jqTds = $('>td', nRow);
    $(jqTds[0]).html(creater.createPrioritySelect(aData.priority));
    $(jqTds[1]).html(creater.createInput(aData.name));
    $(jqTds[2]).html(creater.createInput(aData.first));
    $(jqTds[3]).html(creater.createTypeSelect(aData.type));
    $(jqTds[4]).html(creater.createColorSelect(aData.color));
    $(jqTds[5]).html(formatDate(aData.id));
    $(jqTds[6]).html(creater.createButton("save"));
    oTable02.draw();
    dataManager.updateData(oTable02.data());
    if (NOTEFLAG == 1) {
        editCount++;
        if (editCount % 3 == 0) {
            var f = confirm("觉得这个例子怎么样？加群给个建议呗？");
            if (!f) {
                localStorage.setItem("datatables-cn-noteflag", 0);
                NOTEFLAG = 0;
            }
        }
    }
}

//添加一行
function addRow() {
    // Only allow a new row when not currently editing
    if (nEditing !== null) {
        return;
    }

    var aiNew = oTable02.row.add(creater.createRowObj());
    var nRow = oTable02.row(aiNew[0]).node();
    editRow(oTable02, nRow);
    nEditing = nRow;

    $(aiNew).find('td:last-child').addClass('actions text-center');

    if (NOTEFLAG == 1) {
        addCount++;
        if (addCount % 3 == 0) {
            var f = confirm("觉得这个例子怎么样？加群给个建议呗？");
            if (!f) {
                localStorage.setItem("datatables-cn-noteflag", 0);
                NOTEFLAG = 0;
            }
        }
    }
}

//处理dt的内部数据，得到最简单的数据数组
function dealwithData(tmpData) {
    var arrTmp = [];
    for (var i = 0; i < tmpData.length; i++) {
        arrTmp.push(tmpData[i]);
    }
    return arrTmp;
}

//我是女娲后人
var creater = {
    //操作列的按钮创建
    "createButton": function (type) {
        if (type === 'save') {
            return '<a class="edit save" href="#">保存</a>|<a class="done" href="#">Done</a>|<a class="delete" href="#">删除</a>';
        } else {
            return '<a class="edit" href="#">编辑</a>|<a class="done" href="#">Done</a>|<a class="delete" href="#">删除</a>';
        }
    },
    //input生成
    "createInput": function (val) {
        return '<input type="text" value="' + val + '" class="form-control">';
    },
    /**
     * 创建类型 select
     */
    "createTypeSelect": function (val) {
        var typeArr = [0, 1, -1];
        return this.createSelect(typeArr, val, replaceValue);
    },
    /**
     * 创建select下拉框
     * @param arr 数组  [1,2,3,4]
     * @param val 默认选中的值
     * @param render 显示渲染
     * @returns {*|jQuery|HTMLElement}
     */
    "createSelect": function (arr, val, render) {
        var select = $("<select></select>");
        select.append("<option value=''>请选择</option>");
        for (var i = 0; i < arr.length; i++) {
            select.append("<option value='" + arr[i] + "'>" + render(arr[i]) + "</option>")
        }
        select.val(val);
        return select;
    },
    //创建背景颜色选择select
    "createColorSelect": function (val) {
        var select = $("<select></select>");
        select.append("<option value=''>" + replaceColor() + "</option>");
        select.append("<option value='0' style='background-color: " + replaceColor(0) + "'></option>");
        select.append("<option value='1' style='background-color: " + replaceColor(1) + "'></option>");
        select.append("<option value='-1' style='background-color: " + replaceColor(-1) + "'></option>");
        select.val(val).css("background-color", replaceColor(val));
        return select;
    },
    //创建优先级下拉框
    "createPrioritySelect": function (val) {
        var PriorityArr = ["", 1, 2, 3];
        return this.createSelect(PriorityArr, val, replacePriority);
    },
    //生成一个行对象
    "createRowObj": function (json) {
        var actionTem = creater.createButton();
        var id = json ? json.id || new Date().getTime() : new Date().getTime();
        var name = json ? json.name || "DataTable 中文网" : "DataTable 中文网";
        var type = json ? json.type || -1 : -1;
        var color = json ? json.color || replaceColor() : replaceColor();
        var priority = json ? json.priority || 0 : 0;
        var action = json ? json.action || actionTem : actionTem;
        var first = json ? json.first || "" : "";
        var second = json ? json.second || "" : "";
        var third = json ? json.third || "" : "";
        return {
            "id": id,
            "name": name,
            "type": type,
            "color": color,
            "priority": priority,
            "done": 0,
            "first": first,
            "second": second,
            "third": third,
            "action": action
        };
    }
};

function toTime(val) {
    val = parseInt(val);
    var str = '';
    for (var i = 0; i < val; i++) {
        str += '0';
    }
    return str;
}


//保存行，把数据写入dt的内部数据对象，并重绘表格
function saveRow(oTable02, nRow) {
    var jqInputs = $('input', nRow);
    var jqSelects = $('select', nRow);
    var rowObj = oTable02.row(nRow);
    var id = rowObj.data().id;
    var done = rowObj.data().done;
    var first = toTime($(jqInputs[1]).val());
    var json = {
        id: id,
        name: $(jqInputs[0]).val(),
        priority: $(jqSelects[0]).val(),
        type: $(jqSelects[1]).val(),
        color: $(jqSelects[2]).val(),
        first: first,
        done: done,
        action: creater.createButton()
    };
    var tmpobj = creater.createRowObj(json);
    rowObj.data(tmpobj).draw();
    dataManager.updateData(oTable02.data());
}

//初始化数据，展示例子
function getInfo() {
    /* 属性	描述	IE	F	O
     appCodeName	返回浏览器的代码名。	4	1	9
     appMinorVersion	返回浏览器的次级版本。	4	No	No
     appName	返回浏览器的名称。	4	1	9
     appVersion	返回浏览器的平台和版本信息。	4	1	9
     browserLanguage	返回当前浏览器的语言。	4	No	9
     cookieEnabled	返回指明浏览器中是否启用 cookie 的布尔值。	4	1	9
     cpuClass	返回浏览器系统的 CPU 等级。	4	No	No
     onLine	返回指明系统是否处于脱机模式的布尔值。	4	No	No
     platform	返回运行浏览器的操作系统平台。	4	1	9
     systemLanguage	返回 OS 使用的默认语言。	4	No	No
     userAgent	返回由客户机发送服务器的 user-agent 头部的值。	4	1	9
     userLanguage	返回 OS 的自然语言设置。*/
    var infos = [];
    createDemoData("appCodeName: " + navigator.appCodeName, infos);
    createDemoData("appName: " + navigator.appName, infos);
    createDemoData("appVersion: " + navigator.appVersion, infos);
    createDemoData("javaEnabled: " + navigator.javaEnabled(), infos);
    createDemoData("cookieEnabled: " + navigator.cookieEnabled, infos);
    createDemoData("onLine: " + navigator.onLine, infos);
    createDemoData("platform: " + navigator.platform, infos);
    createDemoData("systemLanguage: " + navigator.systemLanguage, infos);
    createDemoData("userAgent: " + navigator.userAgent, infos);
    createDemoData("userLanguage: " + navigator.userLanguage, infos);
    return infos;
}

function createDemoData(value, array) {
    var json = {};
    json.id = null;
    json.type = null;
    json.color = null;
    json.action = null;
    json.priority = null;
    json.done = null;
    json.first = null;
    json.second = null;
    json.third = null;
    json.name = value;
    array.push(creater.createRowObj(json));
}

//数据管理
var dataManager = {
    //把dt的相关数据设置到浏览器本地缓存
    "setData": function (data) {
        var parseData = JSON.stringify(data);
        localStorage.setItem("datatables-cn-data", parseData);
        return parseData;
    },
    //更新浏览器本地缓存里dt的相关数据
    "updateData": function (data) {
        var loaclData = this.getData();
        // loaclData = JSON.parse(loaclData);
        loaclData.data.data = dealwithData(data);
        this.setData(loaclData);
    },
    //从浏览器本地缓存获取dt的所有相关数据
    "getData": function () {
        var loaclData = localStorage.getItem("datatables-cn-data");
        if (!loaclData) {
            loaclData = {
                "data": {
                    "data": getInfo(),
                    "rowVisibleFlag": false
                }
            };
            loaclData = this.setData(loaclData);
        }
        // console.log(loaclData);
        return JSON.parse(loaclData);
        // return loaclData;
    },
    //重新初始化数据
    "reInitData": function () {
        localStorage.removeItem("datatables-cn-data");
        this.getData();
        alert("请按F5");
    },
    "setVisibleForRow": function (flag) {
        var data = this.getData();
        // data = JSON.parse(data);
        data.data.rowVisibleFlag = flag;
        this.setData(data);
    },
    "getVisibleForRow": function () {
        var data = this.getData();
        // data = JSON.parse(data);
        return data.data.rowVisibleFlag;
    }
};

//颜色替换
function replaceColor(i) {
    switch (parseInt(i)) {
        case 0:
            return "yellow";
        case 1:
            return "blue";
        case -1:
            return "green";
        default:
            return "white";
    }
}

//类型替换
function replaceValue(i) {
    switch (parseInt(i)) {
        case 0:
            return "List";
        case 1:
            return "None";
        case -1:
            return "Today";
        default:
            return "None";
    }
}

//重要程度
function replacePriority(i) {
    switch (parseInt(i)) {
        case 0:
            return "None";
        case 1:
            return "<span style='color:red'>!</span>";
        case 2:
            return "<span style='color:red'>!!</span>";
        case 3:
            return "<span style='color:red'>!!!</span>";
        default:
            return "None";
    }
}

//格式化时间显示
function formatDate(now) {
    now = new Date(now);
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    return year + "-" + month + "-" + date + "   " + hour + ":" + minute + ":" + second;
}

//设置DataTable全局默认值
$.extend(true, $.fn.dataTable.defaults, {
    "language": {
        "url": "../assets/Chinese.txt"
    },
    "dom": "BR<'row'<'col-md-6'l><'col-md-6'f>r>" +
    "t" +
    "<'row'<'col-md-4 sm-center'i><'col-md-4'><'col-md-4 text-right sm-center'p>>"
});

//是用bootstrap渲染dt
$.fn.dataTable.defaults.renderer = 'bootstrap';
$.fn.dataTable.ext.renderer.pageButton.bootstrap = function (settings, host, idx, buttons, page, pages) {
    var api = new $.fn.dataTable.Api(settings);
    var classes = settings.oClasses;
    var lang = settings.oLanguage.oPaginate;
    var btnDisplay, btnClass;

    var attach = function (container, buttons) {
        var i, ien, node, button;
        var clickHandler = function (e) {
            e.preventDefault();
            if (e.data.action !== 'ellipsis') {
                api.page(e.data.action).draw(false);
            }
        };

        for (i = 0, ien = buttons.length; i < ien; i++) {
            button = buttons[i];

            if ($.isArray(button)) {
                attach(container, button);
            }
            else {
                btnDisplay = '';
                btnClass = '';

                switch (button) {
                    case 'ellipsis':
                        btnDisplay = '&hellip;';
                        btnClass = 'disabled';
                        break;

                    case 'first':
                        btnDisplay = lang.sFirst;
                        btnClass = button + (page > 0 ?
                                '' : ' disabled');
                        break;

                    case 'previous':
                        btnDisplay = lang.sPrevious;
                        btnClass = button + (page > 0 ?
                                '' : ' disabled');
                        break;

                    case 'next':
                        btnDisplay = lang.sNext;
                        btnClass = button + (page < pages - 1 ?
                                '' : ' disabled');
                        break;

                    case 'last':
                        btnDisplay = lang.sLast;
                        btnClass = button + (page < pages - 1 ?
                                '' : ' disabled');
                        break;

                    default:
                        btnDisplay = button + 1;
                        btnClass = page === button ?
                            'active' : '';
                        break;
                }

                if (btnDisplay) {
                    node = $('<li>', {
                        'class': classes.sPageButton + ' ' + btnClass,
                        'aria-controls': settings.sTableId,
                        'tabindex': settings.iTabIndex,
                        'id': idx === 0 && typeof button === 'string' ?
                        settings.sTableId + '_' + button :
                            null
                    })
                        .append($('<a>', {
                                'href': '#'
                            })
                                .html(btnDisplay)
                        )
                        .appendTo(container);

                    settings.oApi._fnBindAction(
                        node, {action: button}, clickHandler
                    );
                }
            }
        }
    };
    attach(
        $(host).empty().html('<ul class="pagination"/>').children('ul'),
        buttons
    );
};

//表格初始化
//包含以下功能：
/**
 * dom的应用
 * render的应用
 * 是用本地静态数据，而非ajax取数
 * 国际化
 * buttons的应用
 * 行内编辑保存
 * 表格的增删改查
 *
 */
var oTable02Data = dataManager.getData();
// oTable02Data = JSON.parse(oTable02Data);
oTable02Data = oTable02Data.data.data;

var oTable02 = $('#inlineEditDataTable').DataTable({
    "columnDefs": [
        {'title': "Priority", 'targets': 0},
        {'title': "Item", 'targets': 1},
        {'title': "Time", 'targets': 2},
        {'title': "Type", 'targets': 3},
        {'title': "Background-color", 'targets': 4},
        {'title': "Create-Date", 'targets': 5},
        {'title': "Action", 'targets': 6}
    ],
    "order": [[3, "asc"], [0, "des"]],
    "columns": [
        {
            "data": "priority",
            "render": function (data, type, row, meta) {
                if (type == "display") {
                    return replacePriority(data);
                }
                if (type == "sort") {
                    return data;
                }
                return data;
            }
        },
        {"data": "name"},
        {
            "data": "first",
            "render":function(data, type, row, meta){
                console.log(row.first + row.second + row.third)
                return row.first + row.second + row.third;
            }
        },
        {
            "data": "type",
            "render": function (data, type, row, meta) {
                if (type == "display") {
                    return replaceValue(data);
                }
                if (type == "sort") {
                    return data;
                }
                return data;
            }
        },
        {
            "data": "color",
            "render": function (data, type, row, meta) {
                if (type == "display") {
                    return replaceColor(data);
                }
                if (type == "sort") {
                    return data;
                }
                return data;
            }
        },
        {
            "data": null,
            "render": function (data, type, row, meta) {
                return formatDate(row.id);
            }
        },
        {"data": "action"}
    ],
    "data": oTable02Data,
    "createdRow": rowCallback,
    "rowCallback": rowCallback,
    "infoCallback": infoCallback,
    "buttons": [
        {
            extend: 'copy',
            text: '复制到剪贴板'
        },
        {
            extend: 'csv',
            text: '导出csv'
        },
        {
            extend: 'excel',
            text: '导出excel'
        },
        {
            extend: 'pdf',
            text: '导出pdf'
        },
        {
            extend: 'print',
            text: '打印'
        },
        {
            text: "选择需要隐藏的列",
            extend: "colvis"
        },
        {
            text: '添加一行',
            action: function (e, dt, node, config) {
                e.preventDefault();
                addRow();
            }
        },
        {
            text: '从弹窗表单中添加一行',
            action: function (e, dt, node, config) {
                e.preventDefault();
                $('#oftenModal').modal("show");
            }
        },
        {
            text: '隐藏行',
            action: function (e, dt, node, config) {
                e.preventDefault();
                dataManager.setVisibleForRow(false);
                oTable02.draw();
            }
        },
        {
            text: '显示行',
            action: function (e, dt, node, config) {
                e.preventDefault();
                dataManager.setVisibleForRow(true);
                oTable02.draw();
            }
        },
        {
            text: "重新初始化数据",
            action: function (e, dt, node, config) {
                e.preventDefault();
                dataManager.reInitData();
            }
        },
        {
            text: "本例子说明",
            action: function (e, dt, node, config) {
                e.preventDefault();
                $('#myModal').modal("show");
            }
        }
    ]
});

function rowCallback(row, data, index) {
    $(row).css('background-color', replaceColor(data.color));
    var flag = dataManager.getVisibleForRow();
    if (data.done && !flag) {
        $(row).css("display", "none");
    } else {
        $(row).css("display", "");
    }
}

function infoCallback(settings, start, end, max, total, pre) {
    var api = this.api();
    var pageInfo = api.page.info();
    var data = api.data();
    var doneCount = 0;
    $(data).each(function (index, object) {
        if (object.done) {
            doneCount++;
        }
    });
    var info = '显示第 ' + (pageInfo.start + 1) + ' 至 ' + pageInfo.end +
        ' 项结果，共 ' + pageInfo.recordsTotal + ' 项';
    if (doneCount > 0) {
        info += '( ' + doneCount + ' 项已隐藏 )';
    }
    return info;
}

var oftenData = [
    {
        "name": "吃饭",
        "DT_RowAttr": {
            "id": new Date().getTime(),
            "name": "吃饭"
        }
    }, {
        "name": "睡觉",
        "DT_RowAttr": {
            "id": new Date().getTime(),
            "name": "睡觉"
        }
    }, {
        "name": "打豆豆",
        "DT_RowAttr": {
            "id": new Date().getTime(),
            "name": "打豆豆"
        }
    }
];

//表格二
var oftenTable = $("#oftenDataTable").DataTable({
    "dom": "r<'row'<'col-md-6'l><'col-md-6'f>r>" +
    "t" +
    "<'row'<'col-md-6 sm-center'i><'col-md-6 text-right sm-center'p>>",
    "data": oftenData,
    "columns": [
        {"data": "name", "title": "名称"},
        {
            "data": null, "title": "操作",
            "defaultContent": '<a href="javascript:void(0)" class="view-detail">添加到表格中</a>'
        }
    ]
});

$('#oftenDataTable').on('click', 'a', function () {
    //如果有多个按钮，根据class名称区分
    if ($(this).hasClass("view-detail")) {
        // a标签在td，td 在tr
        // 这里要获取tr的对象，所以是 a标签的父级的父级
        var trObjData = $(this).parent().parent();
        var name = trObjData.attr("name");
        // Only allow a new row when not currently editing
        if (nEditing !== null) {
            return;
        }
        var json = {
            "name": name,
            "type": -1
        };
        oTable02.row.add(creater.createRowObj(json)).draw();
        dataManager.updateData(oTable02.data());
        nEditing = null;
    }
});

var nEditing = null;

// 删除行初始化
$(document).on("click", "#inlineEditDataTable a.delete", function (e) {
    e.preventDefault();
    var nRow = $(this).parents('tr')[0];
    var rowData = oTable02.row(nRow).data();
    var id = rowData.id;
    var itemName = rowData.name;
    var dtData = dealwithData(oTable02.data());
    var delFlag = confirm("确定删除此项" + itemName);
    if (delFlag) {
        var finalData = $.grep(dtData, function (n, i) {
            return n.id != id;
        });
        oTable02.row(nRow).remove().draw(false);
        dataManager.updateData(finalData);
    }
    if (NOTEFLAG == 1) {
        delCount++;
        if (delCount % 3 == 0) {
            var f = confirm("觉得这个例子怎么样？加群给个建议呗？");
            if (!f) {
                localStorage.setItem("datatables-cn-noteflag", 0);
                NOTEFLAG = 0;
            }
        }
    }
});

// 编辑行初始化
$(document).on("click", "#inlineEditDataTable a.edit", function (e) {
    e.preventDefault();

    /* Get the row as a parent of the link that was clicked on */
    var nRow = $(this).parents('tr')[0];

    if (nEditing !== null && nEditing != nRow) {
        /* A different row is being edited - the edit should be cancelled and this row edited */
        restoreRow(oTable02, nEditing);
        editRow(oTable02, nRow);
        nEditing = nRow;
    }
    else if (nEditing == nRow && this.innerHTML == "保存") {
        /* This row is being edited and should be saved */
        saveRow(oTable02, nEditing);
        nEditing = null;
    }
    else {
        /* No row currently being edited */
        editRow(oTable02, nRow);
        nEditing = nRow;
    }
});


// 隐藏行初始化
$(document).on("click", "#inlineEditDataTable a.done", function (e) {
    e.preventDefault();

    /* Get the row as a parent of the link that was clicked on */
    var nRow = $(this).parents('tr')[0];
    var singleData = oTable02.row(nRow).data();
    singleData.done = 1;
    oTable02.row(nRow).data(singleData).draw();
    dataManager.updateData(oTable02.data());

});

//行多选
$(document).on('click', '#inlineEditDataTable tbody tr', function () {
    $(this).toggleClass("selected");
} );


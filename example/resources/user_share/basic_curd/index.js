var oTable;
$(document).ready(function () {
    initModal();
    oTable = initTable();
    $("#btnEdit").hide();
    $("#btnSave").click(_addFun);
    $("#btnEdit").click(_editFunAjax);
    $("#deleteFun").click(_deleteList);
    //checkbox全选
    $("#checkAll").live("click", function () {
        if ($(this).attr("checked") === "checked") {
            $("input[name='checkList']").attr("checked", $(this).attr("checked"));
        } else {
            $("input[name='checkList']").attr("checked", false);
        }
    });
});

/**
 * 表格初始化
 * @returns {*|jQuery}
 */
function initTable() {
    var table = $("#example").dataTable({
        //"iDisplayLength":10,
        "sAjaxSource": "http://dt.thxopen.com/example/resources/user_share/basic_curd/dataListCUrl.php",
        'bPaginate': true,
        "bDestory": true,
        "bRetrieve": true,
        "bFilter":false,
        "bSort": false,
        "bProcessing": true,
        "aoColumns": [
            {
                "mDataProp": "id",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).html("<input type='checkbox' name='checkList' value='" + sData + "'>");

                }
            },
            {"mDataProp": "name"},
            {"mDataProp": "job"},
            {"mDataProp": "date"},
            {"mDataProp": "note"},
            {
                "mDataProp": "id",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).html("<a href='javascript:void(0);' " +
                    "onclick='_editFun(\"" + oData.id + "\",\"" + oData.name + "\",\"" + oData.job + "\",\"" + oData.note + "\")'>编辑</a>&nbsp;&nbsp;")
                        .append("<a href='javascript:void(0);' onclick='_deleteFun(" + sData + ")'>删除</a>");
                }
            },
        ],
        "sDom": "<'row-fluid'<'span6 myBtnBox'><'span6'f>r>t<'row-fluid'<'span6'i><'span6 'p>>",
        "sPaginationType": "bootstrap",
        "oLanguage": {
            "sUrl": "http://dt.thxopen.com/example/resources/zh_CN.txt",
            "sSearch": "快速过滤："
        },
        "fnCreatedRow": function (nRow, aData, iDataIndex) {
            //add selected class
            $(nRow).click(function () {
                if ($(this).hasClass('row_selected')) {
                    $(this).removeClass('row_selected');
                } else {
                    oTable.$('tr.row_selected').removeClass('row_selected');
                    $(this).addClass('row_selected');
                }
            });
        },
        "fnInitComplete": function (oSettings, json) {
            $('<a href="#myModal" id="addFun" class="btn btn-primary" data-toggle="modal">新增</a>' + '&nbsp;' +
            '<a href="#" class="btn btn-primary" id="editFun">修改</a> ' + '&nbsp;' +
            '<a href="#" class="btn btn-danger" id="deleteFun">删除</a>' + '&nbsp;').appendTo($('.myBtnBox'));
            $("#deleteFun").click(_deleteList);
            $("#editFun").click(_value);
            $("#addFun").click(_init);
        }
    });
    return table;
}

/**
 * 删除
 * @param id
 * @private
 */
function _deleteFun(id) {
    $.ajax({
        url: "http://dt.thxopen.com/example/resources/user_share/basic_curd/deleteFunCUrl.php",
        data: {"id": id},
        type: "post",
        success: function (backdata) {
            if (backdata) {
                oTable.fnReloadAjax(oTable.fnSettings());
            } else {
                alert("删除失败");
            }
        }, error: function (error) {
            console.log(error);
        }
    });
}

/**
 * 赋值
 * @private
 */
function _value() {
    if (oTable.$('tr.row_selected').get(0)) {
        $("#btnEdit").show();
        var selected = oTable.fnGetData(oTable.$('tr.row_selected').get(0));
        $("#inputName").val(selected.name);
        $("#inputJob").val(selected.job);
        $("#inputDate").val(selected.date);
        $("#inputNote").val(selected.note);
        $("#objectId").val(selected.id);

        $("#myModal").modal("show");
        $("#btnSave").hide();
    } else {
        alert('请点击选择一条记录后操作。');
    }
}

/**
 * 编辑数据带出值
 * @param id
 * @param name
 * @param job
 * @param note
 * @private
 */
function _editFun(id, name, job, note) {
    $("#inputName").val(name);
    $("#inputJob").val(job);
    $("#inputNote").val(note);
    $("#objectId").val(id);
    $("#myModal").modal("show");
    $("#btnSave").hide();
    $("#btnEdit").show();
}

/**
 * 初始化
 * @private
 */
function _init() {
    resetFrom();
    $("#btnEdit").hide();
    $("#btnSave").show();
}

/**
 * 添加数据
 * @private
 */
function _addFun() {
    var jsonData = {
        'name': $("#inputName").val(),
        'job': $("#inputJob").val(),
        'note': $("#inputNote").val()
    };
    $.ajax({
        url: "http://dt.thxopen.com/example/resources/user_share/basic_curd/insertFunCUrl.php",
        data: jsonData,
        type: "post",
        success: function (backdata) {
            if (backdata == 1) {
                $("#myModal").modal("hide");
                resetFrom();
                oTable.fnReloadAjax(oTable.fnSettings());
            } else if (backdata == 0) {
                alert("插入失败");
            } else {
                alert("防止数据不断增长，会影响速度，请先删掉一些数据再做测试");
            }
        }, error: function (error) {
            console.log(error);
        }
    });
}


/*
 add this plug in
 // you can call the below function to reload the table with current state
 Datatables刷新方法
 oTable.fnReloadAjax(oTable.fnSettings());
 */
$.fn.dataTableExt.oApi.fnReloadAjax = function (oSettings) {
    //oSettings.sAjaxSource = sNewSource;
    this.fnClearTable(this);
    this.oApi._fnProcessingDisplay(oSettings, true);
    var that = this;

    $.getJSON(oSettings.sAjaxSource, null, function (json) {
        /* Got the data - add it to the table */
        for (var i = 0; i < json.aaData.length; i++) {
            that.oApi._fnAddData(oSettings, json.aaData[i]);
        }
        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        that.fnDraw(that);
        that.oApi._fnProcessingDisplay(oSettings, false);
    });
}


/**
 * 编辑数据
 * @private
 */
function _editFunAjax() {
    var id = $("#objectId").val();
    var name = $("#inputName").val();
    var job = $("#inputJob").val();
    var note = $("#inputNote").val();
    var jsonData = {
        "id": id,
        "name": name,
        "job": job,
        "note": note
    };
    $.ajax({
        type: 'POST',
        url: 'http://dt.thxopen.com/example/resources/user_share/basic_curd/editFunCUrl.php',
        data: jsonData,
        success: function (json) {
            if (json) {
                $("#myModal").modal("hide");
                resetFrom();
                oTable.fnReloadAjax(oTable.fnSettings());
            } else {
                alert("更新失败");
            }
        }
    });
}
/**
 * 初始化弹出层
 */
function initModal() {
    $('#myModal').on('show', function () {
        $('body', document).addClass('modal-open');
        $('<div class="modal-backdrop fade in"></div>').appendTo($('body', document));
    });
    $('#myModal').on('hide', function () {
        $('body', document).removeClass('modal-open');
        $('div.modal-backdrop').remove();
    });
}

/**
 * 重置表单
 */
function resetFrom() {
    $('form').each(function (index) {
        $('form')[index].reset();
    });
}


/**
 * 批量删除
 * 未做
 * @private
 */
function _deleteList() {
    var str = '';
    $("input[name='checkList']:checked").each(function (i, o) {
        str += $(this).val();
        str += ",";
    });
    if (str.length > 0) {
        var IDS = str.substr(0, str.length - 1);
        alert("你要删除的数据集id为" + IDS);
    } else {
        alert("至少选择一条记录操作");
    }
}
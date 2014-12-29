$(document).ready(function () {
    $("#example").dataTable({
        //"iDisplayLength":10,
        "sAjaxSource": "http://dt.thxopen.com/example/resources/user_share/basic_curd/dataListCUrl.php",
        //'bPaginate': true,
        "bDestory": true,
        "bRetrieve": true,
        //"bFilter":true,
        "bSort": false,
        //"bProcessing": true,
        "aoColumns": [
            {
                "mDataProp": "name",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).addClass('inputTd').attr('id', 'td_' + sData + '_' + oData.id);
                }
            },
            {
                "mDataProp": "job",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).addClass('selectTd').attr('id', 'td_' + sData + '_' + oData.id);
                    //$(nTd).html("<select class='selectTd' id=td_"+sData+"_"+oData.id+"><option value="+sData+" selected>"+sData+"</option></select>");
                }
            },
            {"mDataProp": "note"},
            {"mDataProp": "date"}
        ],
        "sDom": "<'row-fluid'<'span6 myBtnBox'><'span6'f>r>t<'row-fluid'<'span6'i><'span6 'p>>",
        "sPaginationType": "bootstrap",
        "language": {
            "url": "http://cdn.datatables.net/plug-ins/e9421181788/i18n/Chinese.json"
        },
        "fnDrawCallback": function (data, x) {
            $('#example tbody td.inputTd').editable('http://dt.thxopen.com/example/resources/user_share/inline_edit/editableCurl.php');
            $('#example tbody td.selectTd').editable('http://dt.thxopen.com/example/resources/user_share/inline_edit/editableSelectCurl.php',
                {
                    loadurl: 'http://dt.thxopen.com/example/resources/user_share/inline_edit/jsonCUrl.php',
                    //data:{"10":"10","20":"20","30":"30"},
                    type: 'select'
                    //submit : '确定',
                    //submitdata: { _method: "post"}
                });
        }
    });
});

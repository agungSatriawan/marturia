$(document).ready(function () {
    var numItems = $("li.fancyTab").length;

    if (numItems == 12) {
        $("li.fancyTab").width("8.3%");
    }
    if (numItems == 11) {
        $("li.fancyTab").width("9%");
    }
    if (numItems == 10) {
        $("li.fancyTab").width("10%");
    }
    if (numItems == 9) {
        $("li.fancyTab").width("11.1%");
    }
    if (numItems == 8) {
        $("li.fancyTab").width("12.5%");
    }
    if (numItems == 7) {
        $("li.fancyTab").width("14.2%");
    }
    if (numItems == 6) {
        $("li.fancyTab").width("16.666666666666667%");
    }
    if (numItems == 5) {
        $("li.fancyTab").width("20%");
    }
    if (numItems == 4) {
        $("li.fancyTab").width("25%");
    }
    if (numItems == 3) {
        $("li.fancyTab").width("33.3%");
    }
    if (numItems == 2) {
        $("li.fancyTab").width("50%");
    }
});

$(window).on("load", function () {
    $(".fancyTabs").each(function () {
        var highestBox = 0;
        $(".fancyTab a", this).each(function () {
            if ($(this).height() > highestBox) highestBox = $(this).height();
        });

        $(".fancyTab a", this).height(highestBox);
    });
});
$('.nama_user').html(sessionStorage.getItem("user"))
$('body').find('.tabledata').dataTable({
    sort: false,
    lengthMenu: [
        [10, 25, 50, 100, 999999],
        [10, 25, 50, 100, 'All']
    ],
    dom: 'lBfrtip',
    deferRender: true,
    buttons: [
        'copyHtml5',
        'excelHtml5',
        'csvHtml5',
        'pdfHtml5'
    ]
});

$(".logout").click(function (e) {
    e.preventDefault();
    sessionStorage.removeItem("uid");
    sessionStorage.removeItem("user");
    window.location.replace("login.html");
});
function getData(sheet) {
    return $.ajax({
        url: "https://script.google.com/macros/s/AKfycby9d3OxfGx9RbVxmF4a0E_NfXAmbjeeWvg2dtFjGA-CJzaGDJ4/exec?id=1U0QdO8JVFq_SVJIlWX-ospI34wxHBuK0bEdTNSvoD94&sheet=" + sheet + "",
        type: "get",
        dataType: "json",
        success: function (data) {
            return data;
        },
    });
}
// setInterval(() => {
//     loadStock()
// }, 10000);
loadStock()
function loadStock() {
    getData("obat_stock").done(function (res) {
        let data = '';
        let no = 1;
        $('#tb_stock_obat').dataTable().fnDestroy();
        $('.data_stock').html('')
        res.data.forEach((e) => {
            data += ` <tr class="table-` + e.color + `">
                        <td class="align-middle text-center">`+ no + `</td>
                        <td class="align-middle">`+ e.nama + `</td>
                        <td class="align-middle text-right">`+ e.stock + `</td>
                        <td class="align-middle text-center">`+ e.status + `</td>
                        </tr>`;
            no++;
        });

        $('.data_stock').html(data)
        $('#tb_stock_obat').dataTable()



    });
}
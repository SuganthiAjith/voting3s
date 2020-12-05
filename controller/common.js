
// for party=======================

$(() => {
    $.ajax({
        url: "http://localhost:8000/partylist/get",
        success: function (result) {
            var i = 1;
            $('#party').html('');
            result.forEach((el) => {

                let tr = `<tr class="row1">
                <td class="cell">`+ i++ + `</td>
                <td class="cell">`+ el.Party_Name + `</td>
                <td class="cell">`+ el.Party_Logo + `</td>
                <td class="cell">`+ el.Party_Head + `</td>
                <td class="cell">`+ el.MLA_Count + `</td>
         <td class="cell">`+ el.MP_Count + `</td>
                </tr>`
                $('#party').append(tr);
            });
        },
    });
});

// party post=============


$("#submit").click(function(el) {
    el.preventDefault();
    var data = {
        Party_Name: $("#partyname").val(),
        Party_Logo: "image/logo",
        Party_Head: $("#headname").val(),
        MLA_Count: $("#mla").val(),
        MP_Count: $("#mp").val(),
    };
    console.log(data);
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8000/partylist/add",
        data: JSON.stringify(data),
        dataType: "json",
        success: function(result) {
            console.log(result + "successfully");
        },
    });
    $("#pform")[0].reset();
});
// for votes=====================================


$(() => {
    $.ajax({
        url: "http://localhost:8000/votelist/get",
        success: function (result) {
            var i = 1;
            $('#vote').html('');
            result.forEach((el) => {

                let tr = `<tr class="row1">
                <td class="cell">`+ i++ + `</td>
                <td class="cell">`+ el.candidate_Name + `</td>
                <td class="cell">`+ el.zone_Name + `</td>
                <td class="cell">`+ el.vote + `</td>
                </tr>`
                $('#vote').append(tr);
            });
        },
    });
});



// for candidate================

$(() => {
    $.ajax({
        url: "http://localhost:8000/candlist/get",
        success: function (result) {
            var i = 1;
            $('#cand').html('');
            result.forEach((el) => {

                let tr = `<tr class="row1">
                <td class="cell">`+ i++ + `</td>
                <td class="cell">`+ el.Name + `</td>
                <td class="cell">`+ el.Party_Name + `</td>
                <td class="cell">`+ el.Posting + `</td>
                <td class="cell">`+ el.Age + `</td>
    
                <td class="cell">`+ el.Qualification + `</td>
               
                <td class="cell">`+ el.Nationality + `</td>
                </tr>`
                $('#cand').append(tr);
            });
        },
    });
});

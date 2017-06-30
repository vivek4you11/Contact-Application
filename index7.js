var contactData = [];

$(function() {
    var $lists = $('#lists');
    var $firstName = $('#firstName');
    var $lastName = $('#lastName');
    var $contactNumber = $('#contactNumber');
    var $contactEmail = $('#contactEmail');
    var i = 0;

    $.ajax({
        type: 'GET',
        url: 'http://localhost/Projects/CoffeeOrders/data.json',
        success: function(lists) {
            contactData = contactData.concat(lists);
            updateList(contactData);
        },
        error: function() {
            alert('error loading lists');
        }
    });

    function updateList(list) {
        $.each(list, function(i, data) {
            updateSingle(data, i);
        });
    }

    function updateSingle(data, i) {
        console.log(data, i);
        $lists.append('<tr><td>' + data.firstName + '</td><td>' + data.lastName + '</td><td>  ' + data.contactNumber + '</td><td>' + data.contactEmail + '</td><td><input data-test="data" type="button" value="Edit" class="btn btn-success" onclick="update(this)" id="'+ i +'">&nbsp;&nbsp;<input type="button" class="btn btn-danger" value="Delete" onclick="delFunction(this)" id="del1"></td></tr>');     
    }

    $('#add-list').on('click', function() {

        var list = {
            firstName: $firstName.val(),
            lastName: $lastName.val(),
            contactNumber: $contactNumber.val(),
            contactEmail: $contactEmail.val()
        };

        contactData.push(list);
        //console.log(contactData);
        //console.log(contactData.length);
        updateSingle(list, contactData.length-1);
        //console.log(contactData.length);
        
    });
    $('#cancel-list').on('click', function() {
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("contactNumber").value = "";
        document.getElementById("contactEmail").value = "";
        $("#add-list").show();
        $("#reset-list").show();
        $("#update-list").hide();
        $("#cancel-list").hide(); 
    });
    $('#reset-list').on('click', function() {
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("contactNumber").value = "";
        document.getElementById("contactEmail").value = "";
    });
});

function myFunction() {
    // Declare variables 
    var input, filter, tr, td, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    tr = $("#lists tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function delFunction(i) {
    var a = i.parentNode.parentNode.rowIndex;
    document.getElementById("lists").deleteRow(a);
}
 
function updateFunction(lists){
	firstName = lists.firstName;
	lastName = lists.lastName;
	contactNumber = lists.contactNumber;
	contactEmail = lists.contactEmail;
    firstName.value == "";
    lastName.value == "";
    contactNumber.value == "";
    contactEmail.value == "";
}

  function updateList(list) {
        $.each(list, function(i, data) {
            updateSingle(data, i);

        });
    
    }

    function updateSingle(data, i) {
        //console.log(data, i);
        $('#lists').append('<tr><td>' + data.firstName + '</td><td>' + data.lastName + '</td><td>  ' + data.contactNumber + '</td><td>' + data.contactEmail + '</td><td><input data-test="data" type="button" value="Edit" class="btn btn-success" onclick="update(this)" id="'+ i +'">&nbsp;&nbsp;<input type="button" class="btn btn-danger" value="Delete" onclick="delFunction(this)" id="del1"></td></tr>');     
        // $('#lists').val() = "";
    }

    /*function edit(data) {

    }*/

    function update(data) {
        $("#add-list").hide();
        $("#reset-list").hide();
        $("#update-list").show();
        $("#cancel-list").show();

        obj = contactData[$(data).attr('id')];

        $("#firstName").val(obj.firstName);
        $("#lastName").val(obj.lastName);
        $("#contactNumber").val(obj.contactNumber);
        $("#contactEmail").val(obj.contactEmail);

        //console.log($("#firstName").val());


        $("#update-list").on('click', function(){
           
            var list1 = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            contactNumber: $("#contactNumber").val(),
            contactEmail: $("#contactEmail").val()
        };
        contactData[$(data).attr('id')] = list1;
        clearTable();
        updateList(contactData);

        /*document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("contactNumber").value = "";
        document.getElementById("contactEmail").value = "";*/
        //console.log(list1);

            });

    };

    function clearTable() {
        $("#lists td").remove(); 
    }

function validations(){
    
}
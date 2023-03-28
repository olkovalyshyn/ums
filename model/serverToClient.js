function loadData() {
    $.ajax({
        url: "./model/serverToClientGet.php",
        type: "GET",
        dataType: "json",
        success: function(data) {
            $('#items-table').html(displayData(data));
        }
    });
}
// setInterval(function (){
//     loadData();
// },10000);
loadData();

function displayData(data) {
    let html = '';
    data.forEach((item, index) => {

        html += '<tr data-id="' + item.id + '" id="tblrow">' +
            '<td class="align-middle">' +
            '<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">' +
            '<input type="checkbox" name="selectionInCheckbox[' + item.id + ']" value="' + item.id + '" class="select-option custom-control-input" id="item-' + item.id + '">' +
            '<label class="custom-control-label" for="item-' + item.id + '"></label>' +
            '</div>' +
            '</td>' +
            '<td class="user-name text-nowrap align-middle ">' + item.first_name + ' ' + item.last_name + '</td>' +
            '<td class="user-role text-nowrap align-middle"><span>' + item.role + '</span></td>' +
            '<td class="text-center align-middle qwe">' +
            '<i id="statusMark" class="fa fa-circle status ' + (item.status === "on" ? "active-circle" : "not-active-circle") + '"></i>' +
            '</td>' +
            '<td class="text-center align-middle">' +
            '<div class="btn-group align-top">' +
            '<button name="btnEdit" class="btn btn-sm btn-outline-secondary badge btn-edit-user" type="button" data-toggle="modal" data-target="#user-form-modal" data-id="' + item.id + '">Edit</button>' +
            '<button class="btn btn-sm btn-outline-secondary badge btn-del-user" type="button"><i class="fa fa-trash"></i></button>' +
            '</div>' +
            '</td>' +
            '</tr>';
    });
    return html;
}

// function displayData(data) {
//     data.forEach((item, index) => {
//         const row = document.createElement("tr");
//         row.setAttribute("data-id", item.id);
//         row.setAttribute("id", "tblrow");
//
//         const cell1 = document.createElement("td");
//         cell1.setAttribute("class", "align-middle");
//         const checkboxDiv = document.createElement("div");
//         checkboxDiv.setAttribute("class", "custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top");
//         const checkbox = document.createElement("input");
//         checkbox.setAttribute("type", "checkbox");
//         checkbox.setAttribute("name", "selectionInCheckbox[" + item.id + "]");
//         checkbox.setAttribute("value", item.id);
//         checkbox.setAttribute("class", "select-option custom-control-input");
//         checkbox.setAttribute("id", "item-" + item.id);
//         const label = document.createElement("label");
//         label.setAttribute("class", "custom-control-label");
//         label.setAttribute("for", "item-" + item.id);
//         checkboxDiv.appendChild(checkbox);
//         checkboxDiv.appendChild(label);
//         cell1.appendChild(checkboxDiv);
//         row.appendChild(cell1);
//
//         const cell2 = document.createElement("td");
//         cell2.setAttribute("class", "user-name text-nowrap align-middle ");
//         cell2.textContent = item.first_name + " " + item.last_name;
//         row.appendChild(cell2);
//
//         const cell3 = document.createElement("td");
//         cell3.setAttribute("class", "user-role text-nowrap align-middle");
//         const span = document.createElement("span");
//         span.textContent = item.role;
//         cell3.appendChild(span);
//         row.appendChild(cell3);
//
//         const cell4 = document.createElement("td");
//         cell4.setAttribute("class", "text-center align-middle qwe");
//         const statusMark = document.createElement("i");
//         statusMark.setAttribute("id", "statusMark");
//         statusMark.setAttribute("class", "fa fa-circle status " + (item.status === "on" ? "active-circle" : "not-active-circle"));
//         cell4.appendChild(statusMark);
//         row.appendChild(cell4);
//
//         const cell5 = document.createElement("td");
//         cell5.setAttribute("class", "text-center align-middle");
//         const buttonGroup = document.createElement("div");
//         buttonGroup.setAttribute("class", "btn-group align-top");
//         const editButton = document.createElement("button");
//         editButton.setAttribute("name", "btnEdit");
//         editButton.setAttribute("class", "btn btn-sm btn-outline-secondary badge btn-edit-user");
//         editButton.setAttribute("type", "button");
//         editButton.setAttribute("data-toggle", "modal");
//         editButton.setAttribute("data-target", "#user-form-modal");
//         editButton.setAttribute("data-id", item.id);
//         editButton.textContent = "Edit";
//         const deleteButton = document.createElement("button");
//         deleteButton.setAttribute("class", "btn btn-sm btn-outline-secondary badge btn-del-user");
//         deleteButton.setAttribute("type", "button");
//         const deleteIcon = document.createElement("i");
//         deleteIcon.setAttribute("class", "fa fa-trash");
//         deleteButton.appendChild(deleteIcon);
//         buttonGroup.appendChild(editButton);
//
//     })}


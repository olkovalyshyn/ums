<!-- User Form Modal -->
<div class="modal fade" id="user-form-modal" tabindex="-1" aria-labelledby="user-form-modal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="UserModalLabel">Add user</h5>

                <button type="button" class="close"  data-dismiss="modal" aria-label="Close">
                    <span id="modal-x-close" aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div id="message-empty-fields"></div>
                <form id="modal-form">
                    <div class="form-group">
                        <label for="first-name" class="col-form-label">First Name:</label>
                        <input type="text" class="form-control" id="first-name">
                    </div>
                    <div class="form-group">
                        <label for="last-name" class="col-form-label">Last Name:</label>
                        <input type="text" class="form-control" id="last-name">
                    </div>
                    <div class="form-group">

                        <div class="col-form-label">Status:</div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="modal-status">
                            <span class="slider round"></span>
                        </label>

                    </div>
                    <div class="form-group">
                        <div class="col-form-label">Role:</div>
                        <select id="modal-role">Role:
                            <option selected disabled>-Please Select-</option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="modal-btn-close">Close</button>
                        <button type="button" class="btn btn-primary" id="modal-btn-save" >Save</button>
                    </div>


                </form>
            </div>
            <!--            <div class="modal-footer">-->
            <!--                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
            <!--                <button type="button" class="btn btn-primary" onclick="submitFormAddUser()">Save</button>-->
            <!--            </div>-->
        </div>
    </div>
</div>

<!--<script type="text/javascript">-->
<!--    function submitFormAddUser() {-->
<!--        let firstName = $('#first-name').val();-->
<!--        let lastName = $('#last-name').val();-->
<!--        let status = $('#modal-status').is(':checked') ? 'on' : 'off';-->
<!--        let role = $('#modal-role').val();-->
<!---->
<!--        if(firstName !== '' && lastName !== '' && status !== '' && role !== ''){-->
<!--            $('#message-empty-fields').html('<span style="color:green">Succesfull!!!</span>')-->
<!---->
<!--            $.ajax({-->
<!--                url: '../model/UserAdd.php',-->
<!--                method: 'POST',-->
<!--                data: {-->
<!--                    firstName: firstName,-->
<!--                    lastName: lastName,-->
<!--                    status: status,-->
<!--                    role: role,-->
<!--                },-->
<!--                success: function (response) {-->
<!--                    let res = JSON.parse((response))-->
<!--                    console.log(res);-->
<!--                }-->
<!--            })-->
<!--        } else {-->
<!--            $('#message-empty-fields').html('<span style="color:red">Please, fill all fields...</span>')-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<script type="text/javascript">-->
<!--    // $("#modal-btn-save").click(function () {-->
<!--    //     // e.preventDefault();-->
<!--    //     alert("Clicked on Save");-->
<!--    //     console.log("!Clicked!!!!!!!!!")-->
<!--    // })-->
<!--$('#modal-btn-close').click(function (){-->
<!--    $('#message-empty-fields').html('');-->
<!--});-->
<!--    // S(document).ready(function (){-->
<!--        $("#modal-btn-save").off().click(function (){-->
<!--            // event.preventDefault();-->
<!--            let firstName = $('#first-name').val();-->
<!--            let lastName = $('#last-name').val();-->
<!--            let status = $('#modal-status').is(':checked') ? 'on' : 'off';-->
<!--            let role = $('#modal-role').val();-->
<!--            if(firstName !== '' && lastName !== '' && status !== '' && role !== ''){-->
<!--                $('#message-empty-fields').html('<span style="color:green">Succesfull!!!</span>')-->
<!---->
<!--                $.ajax({-->
<!--                    url: '../model/UserAdd.php',-->
<!--                    method: 'POST',-->
<!--                    data: {-->
<!--                        firstName: firstName,-->
<!--                        lastName: lastName,-->
<!--                        status: status,-->
<!--                        role: role,-->
<!--                    },-->
<!--                    success: function (response) {-->
<!--                        let res = JSON.parse((response))-->
<!--                        console.log(res);-->
<!--                    }-->
<!--                })-->
<!--                $('#first-name').val('') ;-->
<!--                $('#last-name').val('');-->
<!--                $('#modal-status').prop('checked', false);-->
<!--                $('#modal-role').val('');-->
<!--            } else {-->
<!--                $('#message-empty-fields').html('<span style="color:red">Please, fill all fields...</span>')-->
<!--            }-->
<!--        })-->
<!--    // })-->
<!--</script>-->
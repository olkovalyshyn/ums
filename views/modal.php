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
        </div>
    </div>
</div>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Users table</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
  <link href="styles.css" rel="stylesheet">
  <div class="container">
    <div class="row flex-lg-nowrap">
      <div class="col">
        <div class="row flex-lg-nowrap">
          <div class="col mb-3">
            <div class="e-panel card">
              <div class="card-body">
                <div class="card-title">
                  <h6 class="mr-2"><span>Users</span></h6>
                </div>

                <?php include ("./views/btns_selects.php") ?>

<!--                  <div class="e-table">-->
<!--                      <div class="table-responsive table-lg mt-3">-->
<!--                          <table class="table table-bordered">-->
<!--                              <thead>-->
<!--                              <tr>-->
<!--                                  <th class="align-top">-->
<!--                                      <div-->
<!--                                              class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">-->
<!--                                          <input type="checkbox" class="custom-control-input" id="all-items" onchange="selectAllCheckboxes()">-->
<!--                                          <label class="custom-control-label" for="all-items"></label>-->
<!--                                      </div>-->
<!--                                  </th>-->
<!--                                  <th class="max-width">Name</th>-->
<!--                                  <th class="sortable">Role</th>-->
<!--                                  <th>Status</th>-->
<!--                                  <th>Actions</th>-->
<!--                              </tr>-->
<!--                              </thead>-->

<!--                              --><?php //include ("./views/item.php"); ?>

<!--                --><?php //include_once ("./model/userGet.php");
//                $user = new UserGet();
//                $listUsers = $user->get();
//
//                  foreach($listUsers as $item){ ?>
<!---->
<!--                      <tbody>-->
<!--                        <tr>-->
<!--                          <td class="align-middle">-->
<!--                            <div-->
<!--                              class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">-->
<!--                              <input type="checkbox" class="select-option custom-control-input" id="item---><?php //=$item["id"] ?><!--" onchange="changeSingleCheckbox()">-->
<!--                              <label class="custom-control-label" for="item---><?php //=$item["id"] ?><!--"></label>-->
<!--                            </div>-->
<!--                          </td>-->
<!--                          <td class="text-nowrap align-middle">--><?php //=$item["name"] ?><!--</td>-->
<!--                          <td class="text-nowrap align-middle"><span>--><?php //=$item["role"] ?><!--</span></td>-->
<!--                          <td class="text-center align-middle"><i class="fa fa-circle status active-circle ?>  "></i></td>-->
<!--                          <td class="text-center align-middle">-->
<!--                            <div class="btn-group align-top">-->
<!--                              <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal"-->
<!--                                data-target="#user-form-modal">Edit</button>-->
<!--                              <button class="btn btn-sm btn-outline-secondary badge" type="button"><i-->
<!--                                  class="fa fa-trash"></i></button>-->
<!--                            </div>-->
<!--                          </td>-->
<!--                        </tr>-->
<!---->
<!--                        --><?php //}
//                        ?>



<!--                        -->
<!--                        <tr>-->
<!--                          <td class="align-middle">-->
<!--                            <div-->
<!--                              class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">-->
<!--                              <input type="checkbox" class="custom-control-input" id="item-2">-->
<!--                              <label class="custom-control-label" for="item-2"></label>-->
<!--                            </div>-->
<!--                          </td>-->
<!--                          <td class="text-nowrap align-middle">Pauline Noble</td>-->
<!--                          <td class="text-nowrap align-middle"><span>User</span></td>-->
<!--                          <td class="text-center align-middle"><i class="fa fa-circle active-circle"></i></td>-->
<!--                          <td class="text-center align-middle">-->
<!--                            <div class="btn-group align-top">-->
<!--                              <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal"-->
<!--                                data-target="#user-form-modal">Edit</button>-->
<!--                              <button class="btn btn-sm btn-outline-secondary badge" type="button"><i-->
<!--                                  class="fa fa-trash"></i></button>-->
<!--                            </div>-->
<!--                          </td>-->
<!--                        </tr>-->
<!--                        <tr>-->
<!--                          <td class="align-middle">-->
<!--                            <div-->
<!--                              class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">-->
<!--                              <input type="checkbox" class="custom-control-input" id="item-3">-->
<!--                              <label class="custom-control-label" for="item-3"></label>-->
<!--                            </div>-->
<!--                          </td>-->
<!--                          <td class="text-nowrap align-middle">Sherilyn Metzel</td>-->
<!--                          <td class="text-nowrap align-middle"><span>Admin</span></td>-->
<!--                          <td class="text-center align-middle"><i class="fa fa-circle not-active-circle"></i></td>-->
<!--                          <td class="text-center align-middle">-->
<!--                            <div class="btn-group align-top">-->
<!--                              <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal"-->
<!--                                data-target="#user-form-modal">Edit</button>-->
<!--                              <button class="btn btn-sm btn-outline-secondary badge" type="button"><i-->
<!--                                  class="fa fa-trash"></i></button>-->
<!--                            </div>-->
<!--                          </td>-->
<!--                        </tr>-->
<!--                        <tr>-->
<!--                          <td class="align-middle">-->
<!--                            <div-->
<!--                              class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">-->
<!--                              <input type="checkbox" class="custom-control-input" id="item-4">-->
<!--                              <label class="custom-control-label" for="item-4"></label>-->
<!--                            </div>-->
<!--                          </td>-->
<!--                          <td class="text-nowrap align-middle">Terrie Boaler</td>-->
<!--                          <td class="text-nowrap align-middle"><span>Admin</span></td>-->
<!--                          <td class="text-center align-middle"><i class="fa fa-circle active-circle"></i></td>-->
<!--                          <td class="text-center align-middle">-->
<!--                            <div class="btn-group align-top">-->
<!--                              <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal"-->
<!--                                data-target="#user-form-modal">Edit</button>-->
<!--                              <button class="btn btn-sm btn-outline-secondary badge" type="button"><i-->
<!--                                  class="fa fa-trash"></i></button>-->
<!--                            </div>-->
<!--                          </td>-->
<!--                        </tr>-->
<!--                        <tr>-->
<!--                          <td class="align-middle">-->
<!--                            <div-->
<!--                              class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">-->
<!--                              <input type="checkbox" class="custom-control-input" id="item-5">-->
<!--                              <label class="custom-control-label" for="item-5"></label>-->
<!--                            </div>-->
<!--                          </td>-->
<!--                          <td class="text-nowrap align-middle">Rutter Pude</td>-->
<!--                          <td class="text-nowrap align-middle"><span>User</span></td>-->
<!--                          <td class="text-center align-middle"><i class="fa fa-circle active-circle"></i></td>-->
<!--                          <td class="text-center align-middle">-->
<!--                            <div class="btn-group align-top">-->
<!--                              <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal"-->
<!--                                data-target="#user-form-modal">Edit</button>-->
<!--                              <button class="btn btn-sm btn-outline-secondary badge" type="button"><i-->
<!--                                  class="fa fa-trash"></i></button>-->
<!--                            </div>-->
<!--                          </td>-->
<!--                        </tr>-->
<!--                     -->
<!--                      </tbody>-->
<!--                    </table>-->
<!--                  </div>-->
<!--                </div>-->

<!--                  --><?php //include ("./views/btns_selects.php") ?>


              </div>
            </div>
          </div>
        </div>
        <!-- User Form Modal -->
<!--        --><?php //include ("./views/modal.php")?>


<!--        <div class="modal fade" id="user-form-modal" tabindex="-1" aria-labelledby="user-form-modal" aria-hidden="true">-->
<!--        <div class="modal-dialog">-->
<!--          <div class="modal-content">-->
<!--            <div class="modal-header">-->
<!--              <h5 class="modal-title" id="UserModalLabel">Add user</h5>-->
<!--              <button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
<!--                <span aria-hidden="true">&times;</span>-->
<!--              </button>-->
<!--            </div>-->
<!--            <div class="modal-body">-->
<!--              <form>-->
<!--                <div class="form-group">-->
<!--                  <label for="first-name" class="col-form-label">First Name:</label>-->
<!--                  <input type="text" class="form-control" id="first-name">-->
<!--                </div>-->
<!--                <div class="form-group">-->
<!--                  <label for="last-name" class="col-form-label">Last Name:</label>-->
<!--                  <input type="text" class="form-control" id="last-name">-->
<!--                </div>-->
<!--                  <div class="form-group">-->
<!---->
<!--                      <div  class="col-form-label">Status:</div>-->
<!--                      <label class="toggle-switch">-->
<!--                          <input  type="checkbox" >-->
<!--                          <span class="slider round"></span>-->
<!--                      </label>-->
<!---->
<!--                  </div>-->
<!--                  <div class="form-group">-->
<!--                      <div  class="col-form-label">Role:</div>-->
<!--                      <select>Role:-->
<!--                          <option selected disabled>-Please Select-</option>-->
<!--                          <option>Admin</option>-->
<!--                          <option>User</option>-->
<!--                      </select>-->
<!--                  </div>-->
<!---->
<!---->
<!--              </form>-->
<!--            </div>-->
<!--            <div class="modal-footer">-->
<!--              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
<!--              <button type="button" class="btn btn-primary">Save</button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

    </div>
  </div>

      <script src="./model/checkBoxesChange.js"></script>
      <script src="./model/changeOnClient.js"></script>
      <script src="./model/UserAdd.js"></script>
      <script src="./model/userEdit.js"></script>
      <script src="./model/userDel.js"></script>

</body>
</html>
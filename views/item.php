<?php include_once("./model/userGet.php");
$user = new UserGet();
$listUsers = $user->get();

//echo "<pre>";
//print_r($listUsers);
//echo "</pre>";

?>
<div class="e-table">
    <div class="table-responsive table-lg mt-3">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th class="align-top">
                    <div
                            class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
                        <input type="checkbox" class="custom-control-input" id="all-items">
                        <label class="custom-control-label" for="all-items"></label>
                    </div>
                </th>
                <th class="max-width">Name</th>
                <th class="sortable">Role</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
            <?php

            foreach ($listUsers

            as $item){ ?>

<!--            <input type="hidden" name="listUsers[--><?php //= $item["id"] ?><!--]" value="--><?php //= $item["name"] ?><!--"/>-->
<!--            <input type="hidden" name="roleOfItem[--><?php //= $item["id"] ?><!--]" value="--><?php //= $item["role"] ?><!--"/>-->

            <tbody>
            <tr data-id="<?= $item["id"] ?>" id="tblrow" >
                <td class="align-middle">
                    <div
                            class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                       <input type="checkbox" name="selectionInCheckbox[<?= $item["id"] ?>]" value="<?= $item["id"] ?>"
                               class="select-option custom-control-input" id="item-<?= $item["id"] ?>">

                        <label class="custom-control-label" for="item-<?= $item["id"] ?>"></label>
                    </div>
                </td>
                <td class="user-name text-nowrap align-middle " ><?= $item["first_name"] . " " . $item["last_name"] ?></td>
                <td class="user-role text-nowrap align-middle"><span><?= $item["role"] ?></span></td>
                <td class="text-center align-middle"><i id="statusMark"
                                                        class="fa fa-circle status active-circle ?>  "></i></td>
                <td class="text-center align-middle">
                    <div class="btn-group align-top">
                        <button name="btnEdit" class="btn btn-sm btn-outline-secondary badge btn-edit-user" type="button"
                                data-toggle="modal"
                                data-target="#user-form-modal"
                                data-id="<?= $item["id"] ?>"
                                >Edit
                        </button>
                        <button class="btn btn-sm btn-outline-secondary badge btn-del-user" type="button"><i
                                    class="fa fa-trash"></i></button>
                    </div>
                </td>
            </tr>

            <?php include("./views/modal.php") ?>


            <?php }
            ?>

            </tbody>
        </table>
    </div>
</div>

<!--<script type="text/javascript">-->
<!--    console.log("first");-->
<!---->
<!--    $('#btn-edit').click(function (){-->
<!--        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!");-->
<!--    })-->
<!--</script>-->
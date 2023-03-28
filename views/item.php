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
                        <input type="checkbox" class="all-items custom-control-input" id="all-items">
                        <label class="custom-control-label" for="all-items"></label>
                    </div>
                </th>
                <th class="max-width">Name</th>
                <th class="sortable">Role</th>
                <th>Status</th>
                <th>Options</th>
            </tr>
            </thead>

            <tbody id="items-table"></tbody>
<!--            --><?php
//
//            foreach ($listUsers
//
//            as $item){ ?>
<!---->
<!--            <tbody>-->
<!--            <tr data-id="--><?php //= $item["id"] ?><!--" id="tblrow" >-->
<!--                <td class="align-middle">-->
<!--                    <div-->
<!--                            class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">-->
<!--                       <input type="checkbox" name="selectionInCheckbox[--><?php //= $item["id"] ?><!--]" value="--><?php //= $item["id"] ?><!--"-->
<!--                               class="select-option custom-control-input" id="item---><?php //= $item["id"] ?><!--">-->
<!---->
<!--                        <label class="custom-control-label" for="item---><?php //= $item["id"] ?><!--"></label>-->
<!--                    </div>-->
<!--                </td>-->
<!--                <td class="user-name text-nowrap align-middle " >--><?php //= $item["first_name"] . " " . $item["last_name"] ?><!--</td>-->
<!--                <td class="user-role text-nowrap align-middle"><span>--><?php //= $item["role"] ?><!--</span></td>-->
<!--                <td class="text-center align-middle qwe"><i id="statusMark"-->
<!--                                                        class="fa fa-circle status --><?php //= $item["status"] === 'on' ?  'active-circle' : 'not-active-circle'?><!--  "></i></td>-->
<!--                <td class="text-center align-middle">-->
<!--                    <div class="btn-group align-top">-->
<!--                        <button name="btnEdit" class="btn btn-sm btn-outline-secondary badge btn-edit-user" type="button"-->
<!--                                data-toggle="modal"-->
<!--                                data-target="#user-form-modal"-->
<!--                                data-id="--><?php //= $item["id"] ?><!--"-->
<!--                                >Edit-->
<!--                        </button>-->
<!--                        <button class="btn btn-sm btn-outline-secondary badge btn-del-user" type="button"><i-->
<!--                                    class="fa fa-trash"></i></button>-->
<!--                    </div>-->
<!--                </td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!---->
<!--            --><?php //}
//            ?>


            <?php include("./views/modal.php") ?>

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
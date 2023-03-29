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

                            <?php include("./views/btnsSelects.php") ?>
                            <?php include("./views/item.php") ?>
                            <?php include("./views/btnsSelectsBottom.php") ?>

                            <?php include("./views/modalWarning.php") ?>
                            <?php include("./views/modalConfirmDelete.php") ?>
                            <?php include("./views/modal.php") ?>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="./model/userDel.js"></script>
    <script src="./model/UserSelectOption.js"></script>
    <script src="./model/UserSelectOptionBottom.js"></script>
    <script src="./model/checkBoxesChange.js"></script>
    <script src="./model/UserAdd.js"></script>
    <script src="./model/userEdit.js"></script>
    <script src="./model/serverToClient.js"></script>
    <script src="./model/clientToServerCheckboxes.js"></script>

</body>
</html>
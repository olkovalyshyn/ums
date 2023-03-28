<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Users table</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--  <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>-->
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <!--    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/js/bootstrap.bundle.min.js"></script>
    <!--    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></script>-->
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
<!--                            --><?php //include("./views/btnsSelects.php") ?>


                            <?php include("./views/modalWarning.php") ?>
                            <?php include("./views/modalConfirmDelete.php") ?>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    <script src="./model/UserSelectOption.js"></script>
    <script src="./model/checkBoxesChange.js"></script>
    <script src="./model/UserAdd.js"></script>
    <script src="./model/userEdit.js"></script>
    <script src="./model/userDel.js"></script>
    <script src="./model/serverToClient.js"></script>

</body>
</html>
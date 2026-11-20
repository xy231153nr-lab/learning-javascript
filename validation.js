function ValidateVacancyForm() {
    var flag1 = true;

    if (document.forms["vacancyApplicationForm"]["name"].value.trim() == "") {
        document.getElementById("nameError").innerHTML =
            "* Please enter your first name";
        flag1 = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    var flag2 = true;

    if (document.forms["vacancyApplicationForm"]["surname"].value.trim() == "") {
        document.getElementById("surnameError").innerHTML =
            "* Please enter your last name";
        flag2 = false;
    } else {
        document.getElementById("surnameError").innerHTML = "";
    }

    var flag3 = true;

    if (!document.getElementById("uk-resident").checked &&
        !document.getElementById("not-uk-resident").checked) {
        document.getElementById("ukResidentError").innerHTML =
            "* Please indicate UK residency";
        flag3 = false;
    } else {
        document.getElementById("ukResidentError").innerHTML = "";
    }

    var flag4 = true;
    var telNo = document.forms["vacancyApplicationForm"]["telNo"].value.trim();

    if (telNo == "") {
        document.getElementById("telNoError").innerHTML =
            "* Enter your telephone number";
        flag4 = false;
    } else if (!/^[0-9]+$/.test(telNo)) {
        document.getElementById("telNoError").innerHTML = "* Numbers only";
        flag4 = false;
    } else if (telNo.length != 11 || telNo[0] != "0") {
        document.getElementById("telNoError").innerHTML =
            "* Enter 11 digits starting with 0";
        flag4 = false;
    } else {
        document.getElementById("telNoError").innerHTML = "";
    }

    if (flag1 && flag2 && flag3 && flag4) {
        window.location.href = "ThankYou.html";
    }

    return false;
}
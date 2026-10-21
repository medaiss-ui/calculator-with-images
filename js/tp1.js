
for (let i = 0; i < 10; i++)
{
    $("#btn-" + i).click(function () {
        write(i);
    });
}

$("#btn-point").click(function () { write("."); });
$("#btn-C").click(clearDisplay);
$("#btn-AC").click(clearAll);

$("#btn-add").click(function () {
    manageOperator("add");
});

$("#btn-sub").click(function () {
    manageOperator("sub");
});

$("#btn-mult").click(function () {
    manageOperator("mult");
});

$("#btn-div").click(function () {
    manageOperator("div");
});

$("#btn-eq").click(function () {
    manageOperator("equal");
});

$("#btn-pm").click(pm);
$("#btn-percent").click(percent);

$(document).keypress(function(event) {

    var name = event.key;

    switch (name) {
        case "0": write(0); break;
        case "1": write(1); break;
        case "2": write(2); break;
        case "3": write(3); break;
        case "4": write(4); break;
        case "5": write(5); break;
        case "6": write(6); break;
        case "7": write(7); break;
        case "8": write(8); break;
        case "9": write(9); break;

        case ".": write("."); break;
        case "%": percent(); break;
        case "_": pm(); break;

        case "+": manageOperator("add"); break;
        case "-": manageOperator("sub"); break;
        case "*": manageOperator("mult"); break;
        case "/": manageOperator("div"); break;

        case "=": manageOperator("equal"); break;
        case "Enter": manageOperator("equal"); break;

        case "C": clearDisplay(); break;
        case "A": clearAll(); break;
    }

});



var isDigitEntered = false;
var memory = null;
var currentOperator = null;

function pm() {
    $("#display").html(-$("#display").html());
}

function percent() {
    $("#display").html($("#display").html() / 100);
}

function manageOperator(operator) {
    if (currentOperator == null) {
        memory = $("#display").html();
        currentOperator = operator;
        isDigitEntered = false;
    } else {
        compute();

        if (operator == "equal") {
            currentOperator = null;
        } else {
            currentOperator = operator;
        }
    }
}

function compute() {
    switch (currentOperator) {
        case "add":
            memory = memory - -$("#display").html();
            break;

        case "sub":
            memory = memory - $("#display").html();
            break;

        case "mult":
            memory = memory * $("#display").html();
            break;

        case "div":
            memory = memory / $("#display").html();
            break;
    }

    $("#display").html(memory);
    isDigitEntered = false;
}

function clearDisplay() {
    $("#display").html("0");
    isDigitEntered = false;
}

function clearAll() {
    clearDisplay();
    memory = null;
    currentOperator = null;
}

function write(digit) {
    if (!isDigitEntered) {
        if (digit != ".") {
            $("#display").html("");
        } else {
            $("#display").html("0");
        }

        isDigitEntered = true;
    }

    if (
        digit != "." ||
        $("#display").html().indexOf(".") < 0
    ) {
        $("#display").html($("#display").html() + digit);
    }
}

let images = [
    "img/paysage0.jpg",
    "img/paysage1.jpg",
    "img/paysage2.jpg",
    "img/paysage3.jpg",
    "img/paysage4.jpg"
];

let index = 0;


setInterval(function() {

    $("#paysage").fadeOut(500, function() {

        index = (index + 1) % images.length;

        $("#paysage").attr("src", images[index]);

        $("#paysage").fadeIn(500);

    });

}, 3000);


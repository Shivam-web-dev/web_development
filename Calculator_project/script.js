(function () {

    let inputText = document.querySelector('#inputText');

    let buttons = document.querySelectorAll('.calc');

    let reset = document.querySelector('#reset');

    let equal = document.querySelector('#equal');

    let DEL = document.querySelector('#DEL');

 

    buttons.forEach(function (button) {

        button.addEventListener('click', function(e) {

            let value = e.target.dataset.num;

            if (value !== undefined) {

                inputText.value += value;

            }

        });

    });

 

    equal.addEventListener('click', function(e) {

        if (inputText.value === "") {

            inputText.value = "Please enter value";

        } else {

            try {

                let answer = eval(inputText.value);

                inputText.value = parseFloat(answer).toFixed(3);

            } catch (error) {

                inputText.value = "Error";  

            }

        }

    });

 

    DEL.addEventListener('click', function(e) {

        inputText.value = inputText.value.slice(0, -1);

    });

 

    reset.addEventListener('click', function(e) {

        inputText.value = "";

    });

})();
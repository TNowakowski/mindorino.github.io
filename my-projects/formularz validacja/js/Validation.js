document.addEventListener("DOMContentLoaded", function (e) {

    var form = document.querySelector("#myForm"),
        fields = form.querySelectorAll("[data-error]");


    function isNotEmpty(field) {
        return field.value !== "";
    };

    function isAtLeast(field, min) {
        return field.value.length >= 3;
    }

    function isemail(field) {
        return field.value.indexOf("@") !== -1;

    }

    function displayErrors (errors) {
        var ul = document.querySelector("ul.errors");

        if (!ul) {
            ul = document.createElement("ul");
            ul.classList.add("errors");
        };
        ul.innerHTML = "";
        errors.forEach(function(error) {
            var li = document.createElement("li");
            li.textContent = error;
            ul.appendChild(li);
        });
        form.parentNode.insertBefore(ul, form);
    }

    


    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var errors = [],
            isValid = false;
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            if (field.type === "text") {
                isValid = isNotEmpty(field);

            } else if (field.type === "email") {
                isValid = isemail(field);
            } else if (field.type === "select-one") {
                isValid = isAtLeast(field, 3);
            } else if (field.type === "textarea") {
                isValid = isAtLeast(field, 3);
            }
             if (!isValid) {
                field.classList.add("error");
                errors.push(field.dataset.error);
            }
            else {
                field.classList.remove("error");
            }

        }

        if(errors.length) {
            displayErrors(errors);
        }
        else {
            form.submit();
        }





        console.log(errors);

    }, false);



}, false);

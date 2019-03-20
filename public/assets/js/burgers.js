// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
    $(".change-devour").on("click", (event) => {
        event.preventDefault();
        let id = $(this).sibling(".burger-id");
        console.log("Onclick id" + id);
        alert('clicked');

        // Send the PUT request
        $.ajax("/burger/" + id, {
            type: "PUT",
        }).then((data) => {
            console.log("changed devoured to true");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    $(".create-form").on("submit", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        let newburger = {
            name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        console.log(newburger);

        // Send the POST request.
        $.ajax("/burger", {
            type: "POST",
            data: newburger
        }).then(() => {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    $(".delete-burger").on("click", (event)=> {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/burger/" + id, {
            type: "DELETE"
        }).then(() => {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
        }
        )
    })
});

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");

    var devouredState = {
      devoured: devoured
    };

    $.ajax("/api/hotdogs/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("changed eaten to", devoured);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newHotdog = {
      hotdog_name: $("#hotdog").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/hotdogs", {
      type: "POST",
      data: newHotdog
    }).then(
      function() {
        console.log("created new hotdog");
        location.reload();
      }
    );
  });

  $(".delete-hotdog").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/hotdogs/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted hotdog", id);
        location.reload();
      }
    );
  });
});

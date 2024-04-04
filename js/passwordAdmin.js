document.addEventListener("DOMContentLoaded", function () {
  var adminLink = document.getElementById("adminLink");

  adminLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Create modal element
    var modalDiv = document.createElement("div");
    modalDiv.classList.add("modal");
    modalDiv.classList.add("fade");
    modalDiv.id = "passwordModal";
    modalDiv.setAttribute("tabindex", "-1");
    modalDiv.setAttribute("role", "dialog");
    modalDiv.setAttribute("aria-labelledby", "passwordModalLabel");
    modalDiv.setAttribute("aria-hidden", "true");

    // Create modal dialog
    var modalDialogDiv = document.createElement("div");
    modalDialogDiv.classList.add("modal-dialog");
    modalDialogDiv.setAttribute("role", "document");

    // Create modal content
    var modalContentDiv = document.createElement("div");
    modalContentDiv.classList.add("modal-content");

    // Create modal header
    var modalHeaderDiv = document.createElement("div");
    modalHeaderDiv.classList.add("modal-header");
    var headerTitle = document.createElement("h5");
    headerTitle.classList.add("modal-title");
    headerTitle.id = "passwordModalLabel";
    headerTitle.textContent = "Nhập Mật Khẩu để chuyển sang Admin";
    var closeButton = document.createElement("button");
    closeButton.classList.add("close");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("data-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Close");
    var closeSpan = document.createElement("span");
    closeSpan.setAttribute("aria-hidden", "true");
    closeSpan.innerHTML = "&times;";
    closeButton.appendChild(closeSpan);
    modalHeaderDiv.appendChild(headerTitle);
    // modalHeaderDiv.appendChild(closeButton);

    // Create modal body
    var modalBodyDiv = document.createElement("div");
    modalBodyDiv.classList.add("modal-body");
    var form = document.createElement("form");
    form.id = "passwordForm";
    var formGroupDiv = document.createElement("div");
    formGroupDiv.classList.add("form-group");
    var passwordLabel = document.createElement("label");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.textContent = "Password:";
    var passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.classList.add("form-control");
    passwordInput.id = "password";
    passwordInput.name = "password";
    formGroupDiv.appendChild(passwordLabel);
    formGroupDiv.appendChild(passwordInput);
    form.appendChild(formGroupDiv);
    var submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.classList.add("btn", "btn-primary", "btn-block");
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);
    modalBodyDiv.appendChild(form);

    // Assemble modal content
    modalContentDiv.appendChild(modalHeaderDiv);
    modalContentDiv.appendChild(modalBodyDiv);
    modalDialogDiv.appendChild(modalContentDiv);
    modalDiv.appendChild(modalDialogDiv);

    // Append modal to the body
    document.body.appendChild(modalDiv);

    // Show modal
    $("#passwordModal").modal("show");

    // Add submit event listener to the form
    var passwordForm = document.getElementById("passwordForm");
    passwordForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      var password = document.getElementById("password").value; // Get the password entered by the user

      // You can replace this condition with your own logic to check the password
      if (password === "xingfucha") {
        window.location.href = "manageProduct.html"; // Redirect to the protected page
      } else {
        alert("Wrong password! Please try again."); // Show an alert for wrong password
      }

      // Close the modal after processing
      $("#passwordModal").modal("hide");
    });
  });
});

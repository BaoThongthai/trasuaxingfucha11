document.addEventListener("DOMContentLoaded", function() {
    var messengerBox = document.querySelector(".js-facebook-messenger-box");
    messengerBox.addEventListener("click", function() {
        var messengerBoxElements = document.querySelectorAll(".js-facebook-messenger-box, .js-facebook-messenger-container");
        messengerBoxElements.forEach(function(element) {
            element.classList.toggle("open");
        });
        var messengerTooltip = document.querySelector(".js-facebook-messenger-tooltip");
        if (messengerTooltip) {
            messengerTooltip.style.display = (messengerTooltip.style.display === "none" || messengerTooltip.style.display === "") ? "block" : "none";
        }
    });

    if (messengerBox.classList.contains("cfm")) {
        setTimeout(function() {
            messengerBox.classList.add("rubberBand", "animated");
        }, 3500);
    }

    var messengerTooltip = document.querySelector(".js-facebook-messenger-tooltip");
    if (messengerTooltip) {
        if (messengerTooltip.classList.contains("fixed")) {
            messengerTooltip.style.display = "block";
        } else {
            messengerBox.addEventListener("mouseenter", function() {
                messengerTooltip.style.display = "block";
            });
            var messengerCloseTooltip = document.querySelector(".js-facebook-messenger-close-tooltip");
            if (messengerCloseTooltip) {
                messengerCloseTooltip.addEventListener("click", function() {
                    messengerTooltip.classList.add("closed");
                });
            }
        }
    }
});

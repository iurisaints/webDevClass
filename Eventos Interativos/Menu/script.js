var menuItems = document.querySelectorAll("#menu li");

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].onmouseover = function() {
            this.style.backgroundColor = "#007bff";
            this.style.color = "#fff";
        };

        menuItems[i].onmouseout = function() {
            this.style.backgroundColor = "transparent";
            this.style.color = "#333";
        };
    }
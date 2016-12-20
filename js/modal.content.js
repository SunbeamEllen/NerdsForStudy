    	var link = document.querySelector(".feedback");
    	var popup = document.querySelector(".modal-content");
    	var close = popup.querySelector(".close");
    	var login = popup.querySelector("[name=username]");
    	var form = popup.querySelector("form");
    	var mail = popup.querySelector("[name=mail]");
    	var storage = localStorage.getItem("username");

    	link.addEventListener("click", function(event) {
    		event.preventDefault();
    		popup.classList.add("modal-content-show");
    		if (storage) {
          	username.value = storage;
          	mail.focus();
        	} else
    		username.focus();
      });

    	close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
      });

    	form.addEventListener("submit", function(event) {
          if (!username.value || !email.value) {
          event.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
          console.log("Нужно ввести имя и электронную почту"); 
        } else {
          localStorage.setItem("login", login.value);
        }
      });

    	window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
        }
        }
      });
var search = document.querySelector(".search-button");
		  var popup = document.querySelector(".modal");
		  var dateIn = popup.querySelector("[name=in]");
		  var dateOut = popup.querySelector("[name=out]");
		  var form = popup.querySelector("form");
		  var adultsNumber = popup.querySelector("[name=adults-number]");
		  var childrenNumber = popup.querySelector("[name=children-number]");

		search.addEventListener("click", function (evt) {
		"use strict";
		evt.preventDefault();
		popup.classList.toggle("modal-hide");
		popup.classList.remove("modal-error");
		dateIn.focus();
		});
		  
		  
		  
		form.addEventListener("submit", function (evt) {
		if (!dateIn.value || !dateOut.value || !adultsNumber.value || !childrenNumber.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
      	popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
		console.log("нужно заполнить");
		}
		});
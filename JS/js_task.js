// 1 task:
setTimeout('window.location="#dialog"', 60000);

// 2 task:
function  chk() {
	let pib_p = /^[А-Яа-яІі\s]+$/;
	let group_p = /^[А-Яа-яІі]{2,2}-[0-9]{2,2}/;
	let email_p = /^[a-z0-9._-]+\@[a-z0-9]+\.[a-z]{2,4}$/;
	let person = document.getElementById('pib_input').value;
	let group = document.getElementById('group_input').value;
	let email = document.getElementById('email_input').value;

	if(!pib_p.test(person)){
		alert('Прізвище Ім\'я по Батькові записувати українською мовою.');
		return false;
	}

	if(!group_p.test(group)){
		alert('Номер групи заповнювати згідно вашої реальної групи.');
		return false;
	}

	if(!email_p.test(email)){
		alert('E-mail вказувати реальний, через який ви будете отримувати інформацію.');
		return false;
	}
}

//3 task

var pib = jQuery('#pib_input').val();
var group = jQuery('#group_input').val();
var yob = jQuery('#yob_input').val();
var email = jQuery('#email_input').val();

jQuery(".form_ochka").validate({
	rules: {
		PIB: {
			required: true,
			pattern: /^[А-Яа-яІі\s]+$/
		},

		GROUP: {
			required: true,
			pattern: /^[А-Яа-яІі]{2,2}-[0-9]{2,2}/
		},

		YEAR: {
			digits: true,
			required: true,
			min: 1960,
			max: 2004
		},

		EMAIL: {
			required: true,
			email: true
		}
	},

	messages: {
		PIB: {
			required: "Заповніть!",
			pattern: "Українською!"
		},

		GROUP: {
			required: "Заповніть!",
			pattern: "Типу:ФБ-95"
		},

		YEAR: {
			digits: "Цифрами!",
			required: "Заповніть!",
			min: "Рік > 1960",
			max: "Рік < 2004"
		},

		EMAIL: {
			required: "Заповніть!" ,
			email: "E-mail!"
		}
	},

	errorPlacement: function(error, element) {
		if(element.attr("name") == "PIB") error.insertBefore(jQuery("#pib_input"));
		if(element.attr("name") == "GROUP") error.insertAfter(jQuery("#group_input"));
		if(element.attr("name") == "YEAR") error.insertBefore(jQuery("#yob_input"));
		if(element.attr("name") == "EMAIL") error.insertAfter(jQuery("#email_input"));
	}
});


		
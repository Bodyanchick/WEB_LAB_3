	//4 task
	jQuery('document').ready(function() {

	var Student = new Object();

	Student.name = "";
	Student.surname = "";
	Student.age = 0;
	Student.course = 0;

	jQuery('#button_age').on('click', function GetOlder() {
		if(jQuery('#inp_age').val() == '')
		{
			alert("Нічого не введено");
		}
		else
		{
			Student.age = jQuery('#inp_age').val();
			alert('Новий вік студента: ' + Student.age);
		}
	});

	jQuery('#button_name').on('click', function ChangeName() {
		if( jQuery('#inp_name').val() == '')
		{
			alert("Нічого не введено");
		}
		else
		{
			Student.name = jQuery('#inp_name').val();
			alert('Нове ім\'я студента: ' + Student.name);
		}
	});

	jQuery('#button_surname').on('click', function ChangeSurname() {
		if( jQuery('#inp_surname').val() == '')
		{
			alert("Нічого не введено");
		}
		else
		{
			Student.surname = jQuery('#inp_surname').val();
			alert('Нове прізвище студента: ' + Student.surname);
		}
	});

	jQuery('#button_course').on('click', function MoveToSecondCourse() {
		if(jQuery('#inp_course').val() == '')
		{
			alert("Нічого не введено");
		}
		else
		{
			Student.course = jQuery('#inp_course').val();
			alert('Новий курс: ' + Student.course);
		}
	});

	jQuery('#info').on('click', function Info() {
		alert('Ім\'я: ' + Student.name + '\n' +'Прізвище: ' + Student.surname + '\n' + 'Кількість років: ' + Student.age + '\n' + 'Курс: ' + Student.course);
	});		

//5 task
	
	jQuery('#fib_button').on('click', function fibonaci() {
	function fib(n){
		var a = 0;
		var b = 1;

		for(var i=0; i<n; i++){
			a = a + b;
			b = a - b;
		}
			return a;
	}
		
		for(var i=0; i<20; i++)
			{
				document.write(fib(i+1) + '  ');
 			}

	});

});

$(document).ready(function () {
    $('#txtdate').datepicker({
        startDate: new Date()
    });
});

/* disable background page */
	$('.launch-modal').click(function(){
		$('#application').modal({
			backdrop: 'static'
		});
	}); 


    $('.launch').click(function(){
		$('#reservation').modal({
			backdrop: 'static'
		});
	});


	$(document).ready(function() {
		var hr=['10','11','12','01','02','03','04','05','06','07','08','09','10','11',];
		var mi=['00','30'];
		
		for( i=0;i<hr.length;i++){
		$("#bmg_monday_start_hour").append('<option val="' + hr[i]  + ':' + mi[0] + '">'+ hr[i] + ':' + mi[0] +  '</option>');									
		$("#bmg_monday_start_hour").append('<option val="' + hr[i]  + ':' + mi[1] + '">' + hr[i] + ':' + mi[1] + '</option>');
										}
					  })


/*

(function () {
	const select = document.query.Selector(".people");
	let options = "";
	let option;
	for (let i =1; i <= 20; i++){
		if(i === 1 ){
			option = `<option value="${i}">${i} person</option>`;
		}else {
			option = `<option value="${i}">${i} people</option>`;
		}
		options += option;
	}
	select.innerHTML = options;
});
*/
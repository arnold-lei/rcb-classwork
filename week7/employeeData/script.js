
window.onload = function(){



  var employeeData = new Firebase("https://edataman.firebaseio.com");


  $('#submit').on('click', function(){
  	name = $('#name').val().trim();
  	role = $('#role').val().trim();
  	date = $('#startDate').val().trim();
  	rate = $('#rate').val().trim();
  

  employeeData.push({
    'name': name,
    'role': role,
    'startDate': date,
    'rate': rate,
    dateAdded: Firebase.ServiceValue.TIMESTAMP,
  });


  			$("#name").val('');
  			$("#role").val('');
  			$("#startDate").val('');
  			$("#rate").val('');

  return false;
}); //submit





$('#clearAll').on('click', function(){
	  		$("#name").val('');
  			$("#role").val('');
  			$("#startDate").val('');
  			$("#rate").val('');
});//clearAll

employeeData.on('child_added', function(child, prevChild){
  console.log(child.val().name);
  // for(var i = 0; i < child.length; i++){
    row = $('<tr>');
    tName = $('<td>'+ child.val().name +'</td>');
    tRole = $('<td>'+ child.val().role+'</td>');
    tDate = $('<td>'+ child.val().startDate+'</td>');
    tMonthWorked = $('<td>').text('');
    tRate = $('<td>'+ child.val().rate+'</td>');
    tTotal = $('<td>').text('');
    row.append(tName, tRole, tDate, tMonthWorked, tRate, tTotal);
    $('tbody').append(row)
  // }
})


}//onload
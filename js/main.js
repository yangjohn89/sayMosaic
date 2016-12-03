$(document).ready(function(){
	//search nest function
	var productName = document.getElementById("productname")
	$('#btn').click(function(){

	if(productName.value === "nest" || productName.value === "Nest"){
	$('.widget').fadeIn(2000)
	$('.error').fadeOut(2000)

}
	else if(productName.value == false || productName.value !== "nest" || productName.value !== "Nest") {
			$('.error').fadeIn(2000)
			$('.widget').fadeOut(2000)

		
} 
	})
})


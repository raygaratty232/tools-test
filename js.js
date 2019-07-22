
var count = 0;
var listCount = 0;
var createClass = 'box';
var container = document.querySelector('.container');
let hrefBox;
let hrefArr = [];

var $create =  $('.create')

$create.click(function(){
	// $('<div class="box"></div>').appendTo($('.container'))
	var box = document.createElement('div')
	box.classList = 'box' + count++;
	container.appendChild(box)
	hrefArr.push(box)
	console.log(box)
 	console.log(hrefArr)
})

// create.addEventListener('click', function(){
// 	var box = document.createElement('div')
// 	box.classList = 'box' + count++;
// 	container.appendChild(box)
// 	hrefArr.push(box)
// 	console.log(box)
// 	console.log(hrefArr)
// })

$('.blockWidth').on('input', function(){
	$('.wOut').text($(this).val())
	$('.box').css({
		width : $(this).val() + '%'
	})
})

$('.blockHeight').on('input', function(){
	$('.hOut').text($(this).val())
	$('.box').css({
		height : $(this).val() + '%'
	})
})

$('.rotationBlock').on('input', function(){
	$('.rOut').text($(this).val())
	$('.box').css({
		transform : 'rotate(' + $(this).val() +  'deg)'
	})
})
$('.Translate-X').on('input', function(){
	$('.XOut').text($(this).val())
	$('.box').css({
		left : $(this).val() + '%'
	})
})
$('.Translate-Y').on('input', function(){
	$('.YOut').text($(this).val())
	$('.box').css({
		top : $(this).val() + '%'
	})
})
$('.radius').on('input', function(){
	$('.radOut').text($(this).val())
	$('.box').css({
		borderRadius : $(this).val() + '%'
	})
})
$('.color').click(function(){
	$('.box').css({
		backgroundColor : $('input[type="color"]').val()
	})
})
$('.write').click(function(){
	$("<p>"+ $('.insertTxt').val() +"</p>").appendTo($('.box'))
})

$('.size').click(function(){
	$('.box').find('p').css({
		fontSize : $(".sizeVal").val() + 'px'
	})
})

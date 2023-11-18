var quiz_block_1 = document.getElementsByClassName("main__quiz-block-1 quiz-block");
var res = document.getElementsByClassName("main__quiz-block-2");
for(let i = 0; i < quiz_block_1.length; i++){
  quiz_block_1[i].addEventListener('click', function(){
      for(let u = 0; u < quiz_block_1.length; u++){
      quiz_block_1[u].classList.remove('active');
      }
    this.classList.add('active');

      for(let u = 0; u < res.length; u++){
        res[u].classList.remove('q');
      }
    res[i].classList.add('q');

    var btnCancel = document.querySelector(".main__quiz-button-cancel");

    if(i == 0){
      btnCancel.style.display = "none";
    }
    else {
      btnCancel.style.display = "flex";
    }
})
}

var btn = document.getElementsByClassName("main__quiz-questions__button");

for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', function(){
  if(btn[i].className == "main__quiz-questions__button")
    this.classList.add('active');
  else if(btn[i].className == "main__quiz-questions__button radio"){
    for(let u = 0; u < btn.length; u++){
      btn[u].classList.remove('active');
    }
  this.classList.add('active');
    }
  else
    this.classList.remove('active');
    
  })
};


var modal_responce = document.getElementsByClassName("modal-responce__buttons");

console.log(modal_responce)
for(let i = 0; i < modal_responce.length; i++){
  modal_responce[i].addEventListener('click', function(){
    if(modal_responce[i].className == "modal-responce__buttons"){
      for(let u = 0; u < modal_responce.length; u++){
        modal_responce[u].classList.remove('active');
      }
    this.classList.add('active');
    }
    else {
      this.classList.remove('active');
    }
  });
}


var btnCon = document.getElementsByClassName("main__quiz-button");
for(let k = 0; k < btnCon.length; k++){
btnCon[k].addEventListener('click', function(){

      if(quiz_block_1[k].className == "main__quiz-block-1 quiz-block active"){
        if(quiz_block_1[k+1] && res[k+1]){
          quiz_block_1[k].classList.remove('active');
          res[k].classList.remove('q');
          quiz_block_1[k+1].classList.add('active');
          res[k+1].classList.add('q');
        }
      }
      var btnCancel = document.getElementsByClassName("main__quiz-button-cancel");
      if(k == 0){
        btnCancel[k].style.display = "none";
      }
      else {
        btnCancel[k+1].style.display = "flex";
      }
    });
}

var btnCanc = document.getElementsByClassName("main__quiz-button-cancel");
for(let k = 0; k < btnCanc.length; k++){
btnCanc[k].addEventListener('click', function(){
      if(quiz_block_1[k].className == "main__quiz-block-1 quiz-block active"){
        if(quiz_block_1[k-1] && res[k-1]){
          quiz_block_1[k].classList.remove('active');
          res[k].classList.remove('q');
          quiz_block_1[k-1].classList.add('active');
          res[k-1].classList.add('q');
        }
      }
      var btnCancel = document.getElementsByClassName("main__quiz-button-cancel");
      if(k == 1){
        btnCancel[k-1].style.display = "none";
      }
      else {
        btnCancel[k-1].style.display = "flex";
      }
    });
}


let btnNavMobile = document.getElementsByClassName('header__button-mobile');
btnNavMobile[0].addEventListener('click', function(){
  let a = document.getElementsByClassName("header-nav__mobile")
  if(a[0].className == 'header-nav__mobile'){
    a[0].classList.add('q');
  }
  else{
    a[0].classList.remove('q');
  }   
})

$(".default_option").click(function(){
  $(this).parent().toggleClass("activeLi");
})

$(".select_ul li").click(function(){
  var currentele = $(this).html();
  $(".default_option li").html(currentele);
  $(this).parents(".main__quiz-select__wrap").removeClass("activeLi");
})


var uploadField = document.getElementById("file");

uploadField.onchange = function() {
  for(let i = 0; i<uploadField.length;i++){
    if(this.files[i].size > 11000){
       alert("Файл превыше допустимый размер 10МБ");
       this.value = "";
    }
  }
    
}

$('.input-file input[type=file]').on('change', function(){
	let file = this.files[0];
	$(this).next().html(file.name);
});





let block1 = document.querySelector('.modal__block-1');
let block2 = document.querySelector('.modal__block-2');

function btnModalContinue(){
  var input = document.getElementById('comment').value;
  if(input.length != 0){
    console.log(input.length )
    document.querySelector('.icon_invalid').style.display = 'none';
    document.querySelector('.modal__file-span').style.right = '5%';
    document.querySelector('.modal__file-span.mobile').style.right = '5%';
    block1.style.display = 'none';
    block2.style.display = 'block';
  }
  else{
    document.querySelector('.icon_invalid').style.display = 'block';
    document.querySelector('.modal__file-span').style.right = '12%';
    document.querySelector('.modal__file-span.mobile').style.right = '17%';
  }
}


function btnModalClose(){
  let modal_close = document.querySelector('#hidden');
  modal_close.style.display = 'none';
  block1.style.display = 'block';
  block2.style.display = 'none';
  $.fancybox.close();
}


const mainSmileSwiper = new Swiper('.smile-swiper', {
  spaceBetween: 10,
  slidesPerView: 'auto',
  loop: true,
});

const swiper = new Swiper('.reports-swiper', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 8,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    }
  },

  centeredSlides: true,
  initialSlide: 2,
  watchOverflow: true
});



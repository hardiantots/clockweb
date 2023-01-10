$(".option--nav ul li").click(function(){
    const id = $(this).data('id');
    if(!$(this).hasClass('active')){
      $(".option--nav ul li").removeClass('active');
      $(this).addClass('active');
      
      if($(".tabcontent").hide()){
        $(`[data-content=${"1"}]`).removeClass('active');
        $(`[data-content=${id}]`).fadeIn();
      }
      }
});

const checkbox = document.getElementById('checkbox--theme');
const textNav = document.querySelector('.option--nav');
const iconColor = document.querySelector('.option--nav');
const list = document.querySelector('.option--nav');
const analog = document.querySelector('.analog--clock');
const analogBefore = document.querySelector('.analog--clock');
const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');
const digital = document.querySelector('.digital--clock');
const display = document.querySelector('.display--clock');
const label = document.querySelector('.label');
const ballCheckbox = document.querySelector('.ball--checkbox');


checkbox.addEventListener('change', function(){
    document.body.classList.toggle('light');
    textNav.classList.toggle('light');
    iconColor.classList.toggle('light');
    list.classList.toggle('light');
    analog.classList.toggle('light');
    analogBefore.classList.toggle('light');
    hr.classList.toggle('light');
    mn.classList.toggle('light');
    sc.classList.toggle('light');
    digital.classList.toggle('light');
    display.classList.toggle('light');
    label.classList.toggle('light');
    ballCheckbox.classList.toggle('light');
})
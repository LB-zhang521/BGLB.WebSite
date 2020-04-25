$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'autoScrolling':true,//是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条
    });
    /*  这块代码打开会自动向下滚屏，每20秒滚动一次
     function timer(times) {setInterval(function(){
          $.fn.fullpage.moveSectionDown();
      }, times)}
      var sections = document.getElementsByClassName('section');
      for (let i = 0; i < sections.length; i++) {
          if(sections[i].classList.contains('active')){
              timer(20000)

          }
      }*/




});

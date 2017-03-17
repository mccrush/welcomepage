window.onload = function() {
	// После загрузки страницы запускаем функцию проверки наличия закладок
	reload(); 
  
    // Проверяем наличие УРЛ сохраненных
    function reload(){
      for(var i = 1; i < 9; i++ ) {
        if (localStorage.getItem('urll'+i)) {
          $('#l'+i).attr('href',localStorage.getItem('urll'+i));
          //$('#l'+i).attr('title',localStorage.getItem('titl'+i));
		  $('#l'+i).attr('title',"");
          $('#lt'+i).text(localStorage.getItem('titl'+i));
          $('#lf'+i).attr('src','https://s2.googleusercontent.com/s2/favicons?domain_url='+localStorage.getItem("urll"+i)+'&alt=s&sz=32');
          $('#lp'+i).attr('src','http://mini.s-shot.ru/1024x768/152/png/?'+localStorage.getItem("urll"+i)).css('opacity','1');
        } else {
          $('#l'+i).attr('href','');
          $('#l'+i).attr('title','');
          $('#lt'+i).text('');
          $('#lf'+i).attr('src','');
          $('#lp'+i).attr('src','assets/ic_add_circle_outline_black_48dp_1x.png').css('opacity','0.2');
        }
      }
    };
    
    
    
    // Меняем цвет текста в поле поиска когда активно
    $('#q').focus(function(){
      $(this).attr('placeholder','');
      $(this).css("color","#666");
    });
    $('#q').blur(function(){
      $(this).css("color","#bbb");
    });
    
    // Создаем временное хранение текущей закладки сайта
    $('.mLink').mouseenter(function(){
     localStorage.setItem('tecId', $(this).attr('id'));
     console.log('tecId = '+localStorage.getItem('tecId'));
     if($(this).attr('href') === "") {
       $('#'+localStorage.getItem('tecId')).attr('title','Добавить сайт');
     }
    });
    
    // При клике на пустой сайт добавляем
	var st3 = 0;
    $('.mLink').click(function(){
     if($(this).attr('href') === "") {
       $('#eUrl, #eTitle').val('');
       localStorage.setItem('tecIdNew', $(this).attr('id'));
       console.log('tecIdNew = '+localStorage.getItem('tecIdNew'));
       $('#ePole').animate({bottom:'0px'},500);
       st3 = 1;
	   $('#eUrl').focus();
       return false;
     }
    });
    
    // Сохраняем значение URL для текущей закладки сайта
    function saveUrl(){
		if ($('#eUrl').val() == "" || $('#eUrl').val() == " ") {
			return false;
		}
	
	
	if ($('#eUrl').val().search(/http/i) == -1) {
		localStorage.setItem('url'+localStorage.getItem('tecIdNew'), "http://" + $('#eUrl').val());
	} else {
		localStorage.setItem('url'+localStorage.getItem('tecIdNew'), $('#eUrl').val());
	}
      reload();
    };
	
	// Сохраняем значение Title для текущей закладки сайта
    function saveTitle(){
      localStorage.setItem('tit'+localStorage.getItem('tecIdNew'), $('#eTitle').val());
      //$(this).css('backgroundImage',"url('assets/ic_check_black_24dp_1x.png')");
      reload();
    };
       
    
    // Редактируем готовую закладку
    $('.mEdit').click(function(){
       localStorage.setItem('tecIdNew',localStorage.getItem('tecId'));
       $('#ePole').animate({bottom:'0px'},500);
       st3 = 1;
       $('#eUrl').val(localStorage.getItem('url'+localStorage.getItem('tecId')));
       $('#eTitle').val(localStorage.getItem('tit'+localStorage.getItem('tecId')));
       return false;
    });
    
	// При потере фокуса поля ввода URL сохраняем
	$('#eUrl').blur(function(){
		saveUrl();
	});
	
	// При потере фокуса поля ввода Title сохраняем
	$('#eTitle').blur(function(){
		saveTitle();
	});
	
    // Обрабатываем клик по кнопке закрытия полей ввода
    $('.iconClose').click(function(){
		closePole();
    });
	
	$('#lga, #f, #most-visited, #servis').click(function(){
		closePole();
	});
	
	// Ловим событие нажатия клавиши Интер в полях ввода и закрываем поля
	$('#eUrl, #eTitle').keydown(function(eventObject){
		if(eventObject.which == 13){
			closePole();
		}
	});
	
	
	// Закрываем окно добавления сайта
    function closePole(){
		saveUrl();
		saveTitle();
		st3 = 0;
		$('#ePole').animate({bottom:'-216px'},500);
    };
    
    // Удаляем выбраную закладку сайта 
    $('.mDrop').click(function(){
       localStorage.removeItem('url'+localStorage.getItem('tecId'));
       localStorage.removeItem('tit'+localStorage.getItem('tecId'));
       reload(); 
       return false;
    });
    
    // Открытие - закрытие окна приложений
    var st = 0;
    $('#lounS').click(
      function() {
        if(st === 0) {
          $('#lounApp').slideDown();
          st = 1;
          return false;
        } else {
          $('#lounApp').slideUp();
          st = 0;
          return false;
        }
    });
   
    $('#lga, form, #most-visited').click(function(){
      if(st === 1) {
         $('#lounApp').slideUp();
         st = 0;
      }
    });
    
    // Открытие иконок в архиве
    var st2 = 0;
    $('#sAdd').click(
      function() {
        if(st2 === 0) {
          $('.lHide').slideDown();
          st2 = 1;
        } else {
          $('.lHide').slideUp();
          st2 = 0;
        }
    });

};

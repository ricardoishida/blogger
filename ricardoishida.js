//Google Analytics
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-40225193-1']);
  _gaq.push(['_setDomainName', 'ricardoishida.com']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

//Logica do post
 $(document).ready(function() {
  $(".PT").click(function(e) {
	if($(this).closest(".post").find("#EN_ACT").is(":visible")){
		$(this).closest(".post").find("#EN_ACT").animate({ 
			height: "toggle",
			opacity:"toggle"
		}, 520, 'swing');
	}
	if(!$(this).closest(".post").find("#PT_ACT").is(":visible")){
		$(this).closest(".post").find("#PT_ACT").animate({ 
			height: "toggle",
			opacity:"toggle"
		}, 520, 'swing');
	}
	e.preventDefault();
  });
  
  $(".EN").click(function(e) {
	if($(this).closest(".post").find('#PT_ACT').is(":visible")){
		$(this).closest(".post").find('#PT_ACT').animate({ 
			height: "toggle",
			opacity:"toggle"
		}, 520, 'swing');
	}
	if(!$(this).closest(".post").find('#EN_ACT').is(":visible")){
		$(this).closest(".post").find('#EN_ACT').animate({ 
			height: "toggle",
			opacity:"toggle"
		}, 520, 'swing');
	}
	e.preventDefault();
  });
  
  //Logica do menu sobre
  $(".imgsobre").click(function(e){
	if($('#sobre').css('display') == 'none'){
		$("#sobre").toggle("slow");
		$("#sobre").css(({left:e.pageX - 210, top:e.pageY - 250}));
	}else{
		$("#sobre").toggle("slow");}
	e.preventDefault();
  });
  
  $("#close").click(function(e){
	$("#sobre").toggle("slow");
	e.preventDefault();
  });
  
  //Logica do popup com as tabelas ASCII
  $(".tabascii").click(function(e){
	if($('#tabelaascii').css('display') == 'none'){
		$("#tabelaascii").toggle("slow");
	}else{
		$("#tabelaascii").toggle("slow");}
	e.preventDefault();
  });
	
  $("#closeascii").click(function(e){
	$("#tabelaascii").toggle("slow");
	e.preventDefault();
  });
	
  $(".asciidescpt").click(function(e){
	if($('#asciidescpt').css('display') == 'none'){
		$("#asciidescpt").toggle("slow");
	}else{
		$("#asciidescpt").toggle("slow");}
	e.preventDefault();
  });

  $("#closeasciipt").click(function(e){
	$("#asciidescpt").toggle("slow");
	e.preventDefault();
  });

  $(".asciidescen").click(function(e){
	if($('#asciidescen').css('display') == 'none'){
		$("#asciidescen").toggle("slow");
	}else{
		$("#asciidescen").toggle("slow");}
	e.preventDefault();
  });

  $("#closeasciien").click(function(e){
	$("#asciidescen").toggle("slow");
	e.preventDefault();
  });
  
});
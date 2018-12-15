/*!
  * Editor v1.1
  * Copyright 2018 
  * Licensed under MIT 
**/

(function( $ ){
	"use strict";
	var elem = '<div class=toolbar>'+
		'<a href=# data-command=undo><i class='+'"fa fa-undo"'+'></i></a>'+
		'<a href=# data-command=redo><i class='+'"fa fa-repeat"'+'></i></a>'+
		'<a href=# data-command=h1>H1</a>'+
		'<a href=# data-command=h2>H2</a>'+
		'<a href=# data-command=h3>H3</a>'+
		'<a href=# data-command=p>P</a>'+
		'<div class=fore-wrapper><i class='+'"fa fa-font"></i>'+
			'<div class=fore-palette>'+'</div>'+
		'</div>'+
		'<div class=back-wrapper><i class='+'"fa fa-font"></i>'+
			'<div class=back-palette>'+'</div>'+
		'</div>'+
		'<a href=# data-command=bold title="Bold"><i class='+'"fa fa-bold"></i></a>'+
		'<a href=# data-command=italic title="Italic"><i class='+'"fa fa-italic"></i></a>'+
		'<a href=# data-command=underline title="Underline"><i class='+'"fa fa-underline"></i></a>'+
		'<a href=# data-command=strikeThrough title="Strike through"><i class='+'"fa fa-strikethrough"></i></a>'+
		'<a href=# data-command=createlink title="Create link"><i class='+'"fa fa-link"></i></a>'+
		'<a href=# data-command=unlink title="Remove link"><i class='+'"fa fa-unlink"></i></a>'+
		'<a href=# data-command=insertimage title="Insert image"><i class='+'"fa fa-image"></i></a>'+
		'<a href=# data-command=justifyFull title="Justify text"><i class='+'"fa fa-align-justify"></i></a>'+
		'<a href=# data-command=justifyLeft title="Align to left"><i class='+'"fa fa-align-left"></i></a>'+
		'<a href=# data-command=justifyCenter title="Align to center"><i class='+'"fa fa-align-center"></i></a>'+
		'<a href=# data-command=justifyRight title="Align to right"><i class='+'"fa fa-align-right"></i></a>'+
		'<a href=# data-command=indent><i class='+'"fa fa-indent"></i></a>'+
		'<a href=# data-command=outdent><i class='+'"fa fa-outdent"></i></a>'+
		'<a href=# data-command=insertUnorderedList><i class='+'"fa fa-list-ul"></i></a>'+
		'<a href=# data-command=insertOrderedList><i class='+'"fa fa-list-ol"></i></a>'+
		'<a href=# data-command=subscript><i class='+'"fa fa-subscript"></i></a>'+
		'<a href=# data-command=superscript><i class='+'"fa fa-superscript"></i></a>'+
		'<a href=# data-command=code><i class="fa fa-code"></i></a>'+
	'</div>'+
	'<div id=editor contenteditable>'+
		'<h1 style="text-align: center";>Hello, Universe!</h1>'+
		'<h4 style="text-align: center";>This Is A WYSIWYG Editor.</h4>'+
		'<p style="text-align: center";>Try making some changes here. Add your own text or maybe an image.</p>'+
		'<div style="text-align: center;"><img src="./assets/images/succulent.jpg"></div>'+
	'</div>';
	$.fn.initEditor = function() {
		
		var _ = $(this);
	    _.html(elem);

		var defaultPallate = ['173E43', '9FA8A3', '9AD3DE', 'E3E0CF', 'C9D8C5', '7D4627', '89BDD3', '9068BE', 'E62739', 'FFFFFF'];
		var forePalette = $('.fore-palette');
		var backPalette = $('.back-palette');

		for (var i = 0; i < defaultPallate.length; i++) {
			forePalette.append('<a href="#" data-command="forecolor" data-value="' + '#' + defaultPallate[i] + '" style="background-color:' + '#' + defaultPallate[i] + ';" class="palette-item"></a>');
			backPalette.append('<a href="#" data-command="backcolor" data-value="' + '#' + defaultPallate[i] + '" style="background-color:' + '#' + defaultPallate[i] + ';" class="palette-item"></a>');
		}

		$('.toolbar a').click(function(e) {
			var command = $(this).data('command');
			if (command == 'h1' || command == 'h2' || command == 'h3' || command == 'p') {
				document.execCommand('formatBlock', false, command);
			}
			if (command == 'forecolor' || command == 'backcolor') {
				document.execCommand($(this).data('command'), false, $(this).data('value'));
			}
			if (command == 'createlink' || command == 'insertimage') {
				var url = prompt('Enter the link here: ', 'http:\/\/');
				document.execCommand($(this).data('command'), false, url);
			} else document.execCommand($(this).data('command'), false, null);
		});
	return this;
	};
})( jQuery );

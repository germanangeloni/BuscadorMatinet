<?php
Auth::routes();

//ruta que muestra los primeros registros

Route::get('nombres','scrollcontroller@index');

// ruta para scroll infinito dinamico

Route::get('nombres/paginacion', 'ScrollController@paginacion');

// ruta para el buscador en tiempo real

Route::get('nombres/buscador', 'ScrollController@buscador');





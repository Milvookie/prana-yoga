<?php

add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );

function enqueue_parent_styles() {

wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
wp_enqueue_script( 'custom', get_stylesheet_directory_uri() . '/custom.js', array(), '', true );

}


?>
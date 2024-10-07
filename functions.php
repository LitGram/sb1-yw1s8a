<?php
function litgram_study_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'litgram-study'),
        'footer' => __('Footer Menu', 'litgram-study'),
    ));
}
add_action('after_setup_theme', 'litgram_study_setup');

function litgram_study_enqueue_scripts() {
    // Enqueue styles
    wp_enqueue_style('litgram-study-style', get_stylesheet_uri());
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

    // Enqueue scripts
    wp_enqueue_script('litgram-study-main', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'litgram_study_enqueue_scripts');
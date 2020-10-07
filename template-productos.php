<?php
/**
 * Template Name: Productos
 */
?>

<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/content', 'productos'); ?>
<?php endwhile; ?>

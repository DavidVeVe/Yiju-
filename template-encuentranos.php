<?php
/**
 * Template Name: Encuentranos
 */
?>

<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/content', 'encuentranos'); ?>
<?php endwhile; ?>

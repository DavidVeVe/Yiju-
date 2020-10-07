<?php
/**
 * Template Name: Nosotros
 */
?>

<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/content', 'nosotros'); ?>
<?php endwhile; ?>

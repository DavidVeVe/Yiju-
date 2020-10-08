<header class="banner" style="overflow: hidden;">
  <div class="container banner__container">
    <div class="col-md-8 col-md-offset-2 header__col">
      <nav class="nav-primary">
        <?php
        if (has_nav_menu('primary_navigation')) :
          wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']);
        endif;
        ?>
      </nav>
      <a href="http://" target="_blank" rel="noopener noreferrer" class="header__whatsapp" >
      <div style="background-image: url('<?php echo get_template_directory_uri(); ?>/dist/images/Icon/icon_whatsapp.svg')" class="header__wa-icon">
      </div>
      <p>Whatsapp</p>
      </a>
    </div>
  </div>
</header>

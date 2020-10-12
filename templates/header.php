<header class="banner" style="overflow: hidden;">
  <div class="container banner__container">
    <div class="col-md-8 col-md-offset-2 header__col">
<nav class="navbar navbar-expand-lg navbar-light bg-light" style="width: 100%">
<a href="/" class="header__logo"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/Branding/IGP_yiju_verde.svg" alt=""></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="menu-item menu-home">
        <a href="/">Home</a>
      </li>
        <?php
        if (has_nav_menu('primary_navigation')) :
          wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']);
        endif;
        ?>
    </ul>
  </div>
</nav>

      <a href="http://" target="_blank" rel="noopener noreferrer" class="header__whatsapp" >
      <div style="background-image: url('<?php echo get_template_directory_uri(); ?>/dist/images/Icon/icon_whatsapp.svg')" class="header__wa-icon">
      </div>
      <p>Whatsapp</p>
      </a>
    </div>
  </div>
</header>



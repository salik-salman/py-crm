<?php
declare(strict_types=1);

class MenuController extends ApiController
{
  public function IndexAction($get = ''){
    $this->view->disable();
    $menu = Menu::find();
    Help::send_data($menu);
  }
}
?>
<?php
declare(strict_types=1);

<<<<<<< Updated upstream
class MenuController extends ApiController
{
  public function IndexAction($get = ''){
    $this->view->disable();
    $menu = Menu::find();
    Help::send_data($menu);
=======
class MenuController extends RestController
{
  public function IndexAction(){
    $this->response->setCache(3600);
    $this->view->disable();
    $menu = Menu::find();
    return $menu;
>>>>>>> Stashed changes
  }
}
?>
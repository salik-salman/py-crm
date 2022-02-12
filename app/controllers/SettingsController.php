<?php
declare(strict_types=1);

class SettingsController extends RestController
{
    // public function IndexAction()
    // {
    //     # code...
    // }
    public function getAction()
    {
        return Array('Method Not Allowed');
    }
    public function postGetAction()
    {
        $c = $_POST['c'];
        $k = $_POST['k'];
        $v = $_POST['v'];
            $this->view->disable();
            return Help::GetValBySetting($c,$k,$v);
        }
        public function postCheckAction()
        {
            $c = $_POST['c'];
            $k = $_POST['k'];
            $v = $_POST['v'];
                $this->view->disable();
                return Help::settings($c,$k,$v);
            }

}
<?php
declare(strict_types=1);

use Phalcon\Mvc\Controller;
use Phalcon\Http\Response;
use Phalcon\Http\Request;

class ApiController extends Controller
{
    public $request;
    public $response;
    public function onConstruct() {
     global $response; 
     global $request; 
     $request = new Request();
     $response = new Response();
     }
    public function indexAction()
    {
        $this->dispatcher->forward(array(
            "controller" => 'Index',
            "action" => 'index'
        ));
    }
    /**
     * By Salik Salman
     * @method GET
     * @link /api/get
     */
    public function getAction($controller = '',$action = '',...$params)
    {
        $this->view->disable();
        global $request;
        global $response;
        if($controller !== ''){
        //Uncomment This Line If AJAX Validation Is Needed
        // if ($request->isPost() && $request->isAjax()) {
        if ($request->isGet()) {
                $this->dispatcher->forward(array(
                    "controller" => $controller,
                    "action" => $action,
                    "params" => array($params)
                ));
        } else {
            $response->setStatusCode(405, 'Method Not Allowed');
            $response->setJsonContent(["status" => false, "error" => "Method Not Allowed"]);
            $response->send();
        }
    }else{
        $response->setStatusCode(405, 'Method Not Allowed');
        $response->setJsonContent(["status" => false, "error" => "Method Not Allowed"]);
        $response->send();
    }
}

    /**
     * By Salik Salman
     * @method POST
     * @link /api/post
     */
    public function postAction($controller = '',$action = '')
    {   $this->view->disable();
        if($controller !== ''){
        global $request;
        global $response;
        //Uncomment This Line If AJAX Validation Is Needed
        // if ($request->isPost() && $request->isAjax()) {
        if ($request->isPost()) {
                $this->dispatcher->forward(array(
                    "controller" => $controller,
                    "action" => $action,
                    "params" => array($request->getPost())
                ));
        } else {
            $response->setStatusCode(405, 'Method Not Allowed');
            $response->setJsonContent(["status" => false, "error" => "Method Not Allowed"]);
            $response->send();
        }   
        }else{
            $response->setStatusCode(405, 'Method Not Allowed');
            $response->setJsonContent(["status" => false, "error" => "Method Not Allowed"]);
            $response->send();
        }
    }

}

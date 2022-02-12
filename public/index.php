<?php
declare(strict_types=1);

use Phalcon\Di\FactoryDefault;
use Phalcon\Mvc\Dispatcher;
$dispatcher = new Dispatcher();

error_reporting(E_ALL);

define('BASE_PATH', dirname(__DIR__));
define('APP_PATH', BASE_PATH . '/app');

try {
    /**
     * The FactoryDefault Dependency Injector automatically registers
     * the services that provide a full stack framework.
     */
    $di = new FactoryDefault();

    /**
     * Read services
     */
    include APP_PATH . '/config/services.php';

    /**
     * Handle routes
     */
    include APP_PATH . '/config/router.php';

    /**
     * Get config service for use in inline setup below
     */
    $config = $di->getConfig();

    /**
     * Include Autoloader
     */
    include APP_PATH . '/config/loader.php';

    /**
     * Handle the request
     */
    $application = new \Phalcon\Mvc\Application($di);
    if(strpos($_SERVER['REQUEST_URI'],'api') !== false){
    echo $application->handle($_SERVER['REQUEST_URI'])->getContent();
    }else{
    echo $application->handle("/")->getContent();
    }
} catch (\Exception $e) {
<<<<<<< Updated upstream
    // echo $e->getMessage() . '<br>';
    // echo '<pre>' . $e->getTraceAsString() . '</pre>';
    echo $application->handle("/")->getContent();
=======
    echo $e->getMessage() . '<br>';
    echo '<pre>' . $e->getTraceAsString() . '</pre>';
    // echo $application->handle("/")->getContent();
>>>>>>> Stashed changes
    // echo $dispatcher->forward(array(
    //     "controller" => "Api",
    //     "action" => "index"
    // ));
}
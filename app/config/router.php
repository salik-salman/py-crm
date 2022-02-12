<?php

$router = $di->getRouter();

<<<<<<< Updated upstream
// Define your routes here
// https://docs.phalcon.io/3.4/en/routing#http-method-restrictions
$router->add("/api/get", "API::get", ["GET"]);
$router->add("/api/set", "API::set", ["POST"]);

$router->handle($_SERVER['REQUEST_URI']);
=======
// // Define your routes here
// // https://docs.phalcon.io/3.4/en/routing#http-method-restrictions
// $router->add("/api/get", "API::get", ["GET"]);
// $router->add("/api/set", "API::set", ["POST"]);

// $router->handle($_SERVER['REQUEST_URI']);

// <?php

// $router = new \Phalcon\Mvc\Router(false);

$api = new \Phalcon\Mvc\Router\Group();
$api->setPrefix('/api');

$api->add('/:controller/:action/:params', [
    'controller' => 1,
    'action' => 2,
    'params' => 3,
]);

$api->add('/:controller/:action', [
    'controller' => 1,
    'action' => 2
]);

$api->add('/:controller', [
    'controller' => 1,
    'action' => ''
]);

$api->add('/:controller/([0-9]+)', [
    'controller' => 1,
    'id' => 2,
    'action' => ''
]);

$api->add('/:controller/([0-9]+)/:action', [
    'controller' => 1,
    'id' => 2,
    'action' => 3
]);

$api->add('/:controller/', [
    'controller' => 1
]);

$router->add("/api/", "Index");

/**
 * Prefix incoming action name with HTTP method
 */
// echo $di['request']->getMethod();
foreach ($api->getRoutes() as $route) {
    $route->convert('action', function($action) use ($di) {
        $method = strtolower($di['request']->getMethod());
        if($method == 'post' && empty($_POST)){
            $rawData = file_get_contents("php://input");
            $_POST = json_decode($rawData,true);
        }
        if($action === ''){
            return ucfirst('index');
        }else{
            return $method . ucfirst($action);
        }
    });
}

// Under Phalcon 1.x, the above convert call needs to be replaced
// with the following as the router API differs slightly
// $api->convert('action', function($action) use ($di) {
//     $method = strtolower($di['request']->getMethod());
//     return $method . ucfirst($action);
// });

$router->mount($api);
>>>>>>> Stashed changes

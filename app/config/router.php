<?php

$router = $di->getRouter();

// Define your routes here
// https://docs.phalcon.io/3.4/en/routing#http-method-restrictions
$router->add("/api/get", "API::get", ["GET"]);
$router->add("/api/set", "API::set", ["POST"]);

$router->handle($_SERVER['REQUEST_URI']);

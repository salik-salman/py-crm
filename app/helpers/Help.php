<?php 

class Help
{
    static function send_data($data = '')
    {   global $response;
        $response->setStatusCode(200, 'OK');
        $response->setJsonContent($data);
        $response->send();
    }

    static function send_true($msg = '',$data = '')
    {   global $response;
        $response->setStatusCode(200, 'OK');
        $response->setJsonContent(["status" => true, "error" => false,"message"=>$msg,"data" => $data ]);
        $response->send();
    }

    static function send_false($data)
    {   global $response;
        $response->setStatusCode(400, 'Bad Request');
        $response->setJsonContent(["status" => true, "error" => true, "data" => $data ]);
        $response->send();
    }

    static function send($code = '',$code_label = '',$error = '',$data = '')
    {   global $response;
        $response->setStatusCode($code, $code_label);
        if($data !== ''){
            $response->setJsonContent(["status" => $error != '' || $error == true ? false : true, "error" => $error != '' ? $error : false, "data" => $data ]);
        }else{
            $response->setJsonContent(["status" => $error != '' || $error == true ? false : true, "error" => $error != '' ? $error : false]);
        }
        $response->send();
    }
}

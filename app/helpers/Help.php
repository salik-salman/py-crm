<?php 
<<<<<<< Updated upstream

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
=======
use Phalcon\Http\Response;
class Help
{
    static function send_data($data = '')
    {   $response = new Response();
        $response->setStatusCode(200, 'OK');
        return array($data);
}
    static function settings($c = '',$k = '',$v = '')
    {
        $model = new Settings();
        $res = Settings::find(
            [
                'conditions' => "category = '$c' AND skey = '$k' AND svalue = '$v'"
            ]);
            if(count($res) > 0 && count(explode(':',$res->toArray()[0]['svalue'])) == 3){
                $pieces = explode(":",$res->toArray()[0]['svalue']);
                if($pieces[1] == strlen(str_replace(';','',$pieces[2]))){
                    return true;
                }
        }else{
        $model->category = $c;
        $model->skey = $k;
        $model->svalue = $v;
        if($model->save()){
            return true;
        }else{
            return false;
        }
    }
        }
        static function GetValBySetting($c = '',$k = '',$v = '')
    {
        $model = new Settings();
        $res = Settings::find(
            [
                'conditions' => "category = '$c' AND skey = '$k' AND svalue = '$v'"
            ]);
            if(count($res) > 0 && count(explode(':',$res->toArray()[0]['svalue'])) == 3){
                $pieces = explode(":",$res->toArray()[0]['svalue']);
                if($pieces[1] == strlen(str_replace(';','',$pieces[2]))){
                    return Array(0=>str_replace(';','',$pieces[2]));
                }
        }else{
        $model->category = $c;
        $model->skey = $k;
        $model->svalue = $v;
        if($model->save()){
            return Array(0=>$v);
        }else{
            return false;
        }
    }
        }
    static function send_true($msg = '',$data = '')
    {   $response = new Response();
        $response->setStatusCode(200, 'OK');
        return array("status" => true, "error" => false,"message"=>$msg,"data" => $data);
}

    static function send_false($data)
    {   
        return array("status" => true, "error" => true, "data" => $data );
    }

    static function send($code = '',$code_label = '',$error = '',$data = '')
    {   $response = new Response();
        $response->setStatusCode($code, $code_label);
        if($data !== ''){
            return array(["status" => $error != '' || $error == true ? false : true, "error" => $error != '' ? $error : false, "data" => $data ]);
        }else{
            return array(["status" => $error != '' || $error == true ? false : true, "error" => $error != '' ? $error : false]);
        }
}
>>>>>>> Stashed changes
}

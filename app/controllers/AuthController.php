<?php
declare(strict_types=1);

class AuthController extends ApiController
{

/***
 * By: Salik Salman
 * Date: 10 Jan 2022
 * Reason: User Signup
 */
    public function signupAction($get = '')
    {
        if($get !== []){
            $user = new Users();
            $user->assign($get);
            $success = $user->save();
            if ($success) {
                $message = "Success!";
                Help::send_true($message);
            } else {
                $message = $user->getMessages();
                Help::send_false($message);
            }
        }else{
            Help::send_false('Email and Password Is Required');   
        }
    }

/**
 * By: SalikSalman
 * Date: 10 Jan 2022
 * Reason: User Login
**/

    public function loginAction($get = '')
    {
            if($get !== [] && isset($get['email']) && isset($get['password'])){
            $email = $get["email"];
            $password = $get["password"];
            $user = Users::findFirst([
                'conditions' => 'email = ?1 and password = ?2',
                'bind' => [1 => $email,2 => $password,]]);

            if ($user) {
                $returnData = [
                    "id" => $user->id,
                    "name" => $user->name,
                    "email" => $email,
                ];
                Help::send_true('Login Successful. :)',$returnData);
            } else {
                Help::send_false('Invalid Email and Password.');
            }
        }else{
            Help::send_false('Email and Password Is Required');   
        }

    }

}
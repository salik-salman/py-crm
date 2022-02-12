<?php
declare(strict_types=1);

<<<<<<< Updated upstream
class AuthController extends ApiController
=======
class AuthController extends RestController
>>>>>>> Stashed changes
{

/***
 * By: Salik Salman
 * Date: 10 Jan 2022
 * Reason: User Signup
 */
<<<<<<< Updated upstream
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
=======
    public function PostsignupAction()
    {
        if($_POST !== []){
            $user = new Users();
            $user->assign($_POST);
            $success = $user->save();
            if ($success) {
                $message = "Success!";
                // Help::send_true($message);
                return $message;
            } else {
                $message = $user->getMessages();
                // Help::send_false($message);
                return $message;
            }
        }else{
            return('Email and Password Is Required');   
>>>>>>> Stashed changes
        }
    }

/**
 * By: SalikSalman
 * Date: 10 Jan 2022
 * Reason: User Login
**/

<<<<<<< Updated upstream
    public function loginAction($get = '')
    {
            if($get !== [] && isset($get['email']) && isset($get['password'])){
            $email = $get["email"];
            $password = $get["password"];
=======
    public function PostsigninAction()
    {
            if($_POST !== [] && isset($_POST['email']) && isset($_POST['password'])){
            $email = $_POST["email"];
            $password = $_POST["password"];
>>>>>>> Stashed changes
            $user = Users::findFirst([
                'conditions' => 'email = ?1 and password = ?2',
                'bind' => [1 => $email,2 => $password,]]);

            if ($user) {
                $returnData = [
                    "id" => $user->id,
                    "name" => $user->name,
                    "email" => $email,
                ];
<<<<<<< Updated upstream
                Help::send_true('Login Successful. :)',$returnData);
            } else {
                Help::send_false('Invalid Email and Password.');
            }
        }else{
            Help::send_false('Email and Password Is Required');   
=======
                return Help::send_true('Login Successful. :)',$returnData);
            } else {
                return Help::send_false('Invalid Email and Password.');
            }
        }else{
            return Help::send_false('Email and Password Is Required');   
>>>>>>> Stashed changes
        }

    }

}
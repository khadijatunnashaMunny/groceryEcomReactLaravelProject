<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\register;

class LoginController extends Controller
{
    //
    public function login(Request $request){
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

            $user = register::where(['email'=>$request->email,'password'=>$request->password])->first();
            return $user;
       

      

    }
}

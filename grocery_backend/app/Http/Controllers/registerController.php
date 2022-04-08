<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\register;

class registerController extends Controller
{
    public function register(Request $request){
        $registeredList = new register();
        $registeredList->fName = $request->input('fName');
        $registeredList->lName = $request->input('lName');
        $registeredList->email = $request->input('email');
        $registeredList->password = $request->input('password');
        $registeredList->cpassword = $request->input('cpassword');

        $registeredList->save();

        return  $registeredList;


    }

}

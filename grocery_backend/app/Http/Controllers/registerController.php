<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class registerController extends Controller
{
    public function register(Request $request){
        $validator= Validator::make($request->all(),[
            'name'=>'required',
            'email'=>'required',
            'password'=>'required',
        ]);
        if ($validator->fails()){
            return response()->json([
               'validation_errors'=>$validator->messages() ,          
            ]);
        }
        else{
            $user = USER::create([
                'name' =>$request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
           
            $token = $user->createToken($user->email.'_Token')->plainTextToken;
            return response()->json([
                'status' => 200,
                'token'=>$token,  
                'message'=>'registered successfully',       
            ]);
           
    
            
        }



    }

}

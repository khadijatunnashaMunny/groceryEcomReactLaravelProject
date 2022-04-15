<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    
    public function login(Request $request){
        $validator= Validator::make($request->all(),[
            'email'=>'required',
            'password'=>'required',
        ]);
        if ($validator->fails()){
            return response()->json([
               'validation_errors'=>$validator->messages() ,          
            ]);
        }
        else{
            $user = User::where('email', $request->email)->first();
 
            if (! $user || ! Hash::check($request->password, $user->password)) {
                return response()->json([
                    'status'=>'401' ,  
                    'message' =>'invalid credentials',       
                 ]);
            }
            else{
                $token = $user->createToken($user->email.'_Token')->plainTextToken;
                return response()->json([
                    'status' => 200,
                    'token'=>$token,  
                    'message'=>'Logged In successfully',       
                ]);
               
            }
         
            return $user->createToken($request->device_name)->plainTextToken;
        
        }

    

        $user = register::where(['email'=>$request->email,'password'=>$request->password])->first();
        return $user;

      

    }
}

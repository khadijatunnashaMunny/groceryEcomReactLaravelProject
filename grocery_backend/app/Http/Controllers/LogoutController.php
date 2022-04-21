<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LogoutController extends Controller
{
    //
    public function logout(Request $request){
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 200,
            'message'=>'Logout successfully',       
        ]);


    }
}

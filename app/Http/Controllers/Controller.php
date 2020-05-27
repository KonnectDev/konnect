<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;

class Controller extends BaseController
{
    protected $response = [];

    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function verifyAuthKey($userId, $authKey) {
        if(DB::table('users')->where([
            'id' => $userId,
            'auth_key' => $authKey
        ])->exists()) {
            return true;
        }
        $this->response['succes'] = false;
        $this->response['response']['error'] = 'Invalid auth_key';
        return false;
    }


    protected function parseResponse() {
        return $this->response;
    }
}

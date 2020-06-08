<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VerifyAuthKey
{
    /**
     * Handle an incoming request.
     *
     * @param  Request  $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(DB::table('users')->where([
            'id' => $request['user_id'],
            'auth_key' => $request['auth_key']
        ])->exists()) {
            return $next($request);
        }
        return response()->json('Invalid auth key', 403);
    }
}

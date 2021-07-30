<?php

use App\Http\Controllers\BoardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('api')->group(function (){


    Route::prefix('board')
        ->name('board.')
        ->group(function (){


            Route::get('/', [BoardController::class, 'get_all'])->name('get_all');
            Route::get('/{board_id}', [BoardController::class, 'get_by_board_id'])->name('get_by_board_id');

    });
});

<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TransactionController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/pembelian/{query}', [TransactionController::class, 'index'])->name('pembelian.index');
Route::get('/show/product/{query}', [HomeController::class, 'product'])->name('product');
Route::get('/category/product/{slug}', [CategoryController::class, 'index'])->name('category.index');


require __DIR__ . '/auth.php';
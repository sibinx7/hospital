<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\DoctorController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', [WelcomeController::class, 'index'])->name('welcome');



Route::prefix('/dashboard')->group(function(){
	Route::get('/', function () {
		return Inertia::render('Dashboard');
	})->name('dashboard');
	/* Department */
	Route::get('/department/index', [DepartmentController::class, 'index'])->name('dashboard.department.index');
	Route::get('/department/create', [DepartmentController::class, 'create'])->name('dashboard.department.create');
	Route::post('/department/store', [DepartmentController::class, 'store'])->name('dashboard.department.store');
	Route::get('/department/{id}/edit',[DepartmentController::class, 'edit'])->name('dashboard.department.edit');
	Route::put('/department/{id}/update', [DepartmentController::class, 'update'])->name('dashboard.department.update');
	Route::delete('/department/{id}', [DepartmentController::class, 'destroy'])->name('dashboard.department.destroy');
	/* end Department */

	/* Doctor */
	Route::get('/doctor/index', [DoctorController::class, 'index'])->name('dashboard.doctor.index');
	Route::get('/doctor/{id}/show', [DoctorController::class, 'show'])->name('dashboard.doctor.show');
	Route::get('/doctor/create', [DoctorController::class, 'create'])->name('dashboard.doctor.create');
	Route::post('/doctor/store', [DoctorController::class, 'store'])->name('dashboard.doctor.store');
	Route::get('/doctor/{id}/edit', [DoctorController::class, 'edit'])->name('dashboard.doctor.edit');
	Route::put('/doctor/{id}/update', [DoctorController::class, 'update'])->name('dashboard.doctor.update');
	Route::delete('/doctor/{id}', [DoctorController::class, 'destroy'])->name('dashboard.doctor.destroy');
	/* end Doctor */
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


});

require __DIR__.'/auth.php';

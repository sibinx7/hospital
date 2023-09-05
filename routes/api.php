<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Public\CommonController;
use App\Http\Controllers\DepartmentController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('public')->group(function(){
	Route::get('/departments', [CommonController::class, 'departments'])->name('public_departments');
	Route::get('/doctors/{department_id}', [CommonController::class, 'doctors_by_departments'])->name('public_doctor_by_department');
	Route::get('/get-all-slots', [CommonController::class, 'get_all_slots'])->name('get_all_slots');
	Route::post('/slot-availability', [CommonController::class, 'booked_slot_by_doctor_date'])->name('public_check_slot_availability');
	Route::post('/book-appointment', [ CommonController::class, 'saveAppointment'])->name('book_appointment');
});

Route::prefix('auth')->group(function(){
	Route::put('/department/{id}/update', [DepartmentController::class, 'update'])->name('auth_department_update');
});

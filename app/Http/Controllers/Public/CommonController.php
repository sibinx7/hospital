<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\Doctor;
use Illuminate\Http\Request;

class CommonController extends Controller
{
    //

	public function departments(Request $request){
		$departments = Department::department_with_doctors();
		return response()->json($departments);
	}
	public function doctors_by_departments(Request $request, string $department_id){
		$doctors = [];
		if($department_id){
			$doctors = Doctor::where('department_id', $department_id)->get()->transform(fn($doctor) => [
				'doctor_id' => $doctor->id,
				'doctor_name' => $doctor->name,
			]);
			//
		}
		return response()->json($doctors);
	}
}

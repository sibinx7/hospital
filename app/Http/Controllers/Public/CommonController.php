<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Department;
use App\Models\Doctor;
use App\Models\Slot;
use Illuminate\Http\Request;
use Mockery\Exception;

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

	public function booked_slot_by_doctor_date(Request $request){
		$department_id = ($request->json()->get('department_id'));
		$doctor_id = ($request->json()->get('doctor_id'));
		$date = $request->json()->get('date');
		$booked_slots = Array();
		if($department_id && $doctor_id && $date){
			$booked_slots = Appointment::where('department_id', $department_id)
					->where('doctor_id', $doctor_id)
					->where('selected_date', $date)
					->get()
					->transform(fn($appointment) => [
						"id" => $appointment->id,
						"slot_id" => $appointment->slot_id,
						"selected_date" => $appointment->selected_date,
						"selected_time" => $appointment->selected_time,
						"department_id" => $appointment->department_id,
						"doctor_id" => $appointment->doctor_id
					])
					->toArray();
		}
//		dd(is_array($booked_slots));
		return response()->json($booked_slots);
	}

	public function get_all_slots(){
		$slots = Slot::all()->toArray();
		return response()->json($slots);
	}

	public function saveAppointment(Request $request){
		// If there is no HID, Inform create new account
//		dd($request->all());
//		dd($request->input('department'));
//		dd("Hello");
		$appointment = $request->json()->all();
//		dd($appointment);
		$appointment['selected_time'] = date('H:i:s', strtotime($appointment['selected_time']));
//		dd($appointment);
		$validate = Validator::make($appointment, [
			'name' => 'required|max:100',
			'department_id'=> 'required',
			'doctor_id' => 'required',
			'email' => 'required|email:rfc,dns',
			'phone' => 'required',
			'selected_date' => 'required|date',
			'selected_time' => 'required',
			'slot_id' => 'required'
		]);
		if($validate->fails()){
			return response()->json($validate->errors()->toJson());
		}else{

			try {
				$book_appointment = Appointment::create($appointment);
			}catch (Exception $exception){
				return response()->json($exception->getMessage());
			}

		}

		return response()->json([
			"success" => true,
		], 200);
	}
}

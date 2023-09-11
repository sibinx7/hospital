<?php

namespace App\Http\Controllers;


use App\Models\Doctor;
use Illuminate\Http\Request;
use Inertia\Inertia;
use function Pest\Laravel\delete;

class DoctorController extends Controller
{
    //
	public function index(){
		$doctorsList = Doctor::paginate(10);
//		dd($doctors);

//		return response()->json($departments);
		return Inertia::render('Dashboard/Doctor/Index',[
			'doctorsList' => $doctorsList
		]);
	}

	public function show(string $id){

	}

	public function create(){

	}

	public function store(Request $request){

	}

	public function edit(string $id){
		$doctor = Doctor::find($id);
		$user = $doctor->user;
		if(!$doctor){

			return redirect()->route('dashboard.doctor.index')->with('message', 'Selected Doctor information not available');
		}
		return Inertia::render('Dashboard/Doctor/Edit',[
			'doctor' => $doctor,
			'user' => $user
		]);
	}

	public function update(string $id, Request $request){

	}
	public function destroy(string $id){
		$deleted = Doctor::find($id)->delete();
		if($deleted){
			return redirect()->route('dashboard.doctor.index')->with('message', 'Doctor Delete Successfully');
		}
	}
}

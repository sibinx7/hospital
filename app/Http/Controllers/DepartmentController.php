<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class DepartmentController extends Controller
{
    //

	public function index(){
		$departments = Department::paginate(10);

//		return response()->json($departments);
		return Inertia::render('Dashboard/Department/Index',[
			'departments' => $departments
		]);
	}

	public function create(){

	}

	public function store(Request $request){

	}

	public function edit(string $id){
		$department = Department::find($id);
		return Inertia::render('Dashboard/Department/[id]/Edit', [
			'department' => $department
		]);
	}

	public function update(Request $request, String $id){

		$department_data = [];
		$department_icon = $request->file('icon');
		$department_image = $request->file('image');
		$update_department = Validator::make($request->all(), [
			'description' => 'required',
			'name' => 'required',
			'id' => 'required'
		]);


		if($request->get('description')){
			$department_data['description'] = $request->get('description');
		}

		if(!Storage::exists('public/departments')){
			Storage::makeDirectory('public/departments');
		}
		if($department_icon){
			$department_icon_path = $request->file('icon')->storePubliclyAs(
				'public/departments',
				'department-'.$id.'-'.$department_icon->getClientOriginalName(),
				[
					'disk' => 'local'
				]
			);
			if($department_icon_path){
				$department_data['icon'] = $department_icon_path;
			}
		}

		if($department_image){
			$department_img_path = $request->file('image')->storePubliclyAs(
				'public/departments',
				'department-image'.$id.'-'.$department_image->getClientOriginalName(),
				[
					'disk' => 'local'
				]
			);
			if($department_img_path){
				$department_data['image'] = $department_img_path;
			}
		}

//		dd($department_data);
		$department = Department::find($id);




		$department->update($department_data);
		return to_route('dashboard.department.index');
	}

	public function destroy(string $id){
		$department = Department::find($id);
		if($department){
			$department->delete();
		}
		redirect()->route('dashboard.department.index')->with('message', 'Department Delete Successfully');
	}
}

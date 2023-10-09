<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Services\FileUploadService;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;


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
    $departments = Department::all()->toArray();
    return Inertia::render('Dashboard/Department/Create',[
      'departments' => $departments 
    ]);
	}

	public function store(Request $request, FileUploadService $fileUploadService){
    $create_department = Validator::make($request->all(),[
      'name' => 'required',
      'validator' => 'required'
    ]);
    $department_data = [
      'name' => $request->get('name'),
      'description' => $request->get('description'),
      'key' => Str::slug($request->get('name'), '_')
    ];
    $department_icon = $request->file('icon');
    $department_image = $request->file('image');

    $department = Department::create($department_data);
    $department_update = [];
    if($department_icon){
      $department_icon_path = $fileUploadService->department_upload($department_icon, $department->id, 'department-icon');
      if($department_icon_path){
        $department_update['icon'] = $department_icon_path;
      }
    }

    if($department_image){
      $department_image_path = $fileUploadService->department_upload($department_image, $department->id, 'department-image');
      if($department_image_path){
        $department_update['image'] = $department_image_path;
      }
    }
    $department->update($department_update);

    return to_route('dashboard.department.index');

	}

	public function edit(string $id){
		$department = Department::find($id);
		return Inertia::render('Dashboard/Department/[id]/Edit', [
			'department' => $department
		]);
	}

	public function update(Request $request, String $id, FileUploadService $fileUploadService){

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


		if($department_icon){
      $department_icon_path = $fileUploadService->department_upload($department_icon, $id, 'department-icon');
			if($department_icon_path){
				$department_data['icon'] = $department_icon_path;
			}
		}

		if($department_image){
			$department_img_path = $fileUploadService->department_upload($department_image, $id, 'department-image');
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

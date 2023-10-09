<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

/**
 * @description Handle all upload related common codes
 */
class FileUploadService {

  /**
   * @description Create directory if directory not exists
   */
  public function createDirectory($path){
    if(!Storage::exists($path)){
      Storage::makeDirectory($path);
    }
  }
  
  public function department_upload($file, $id, $file_prefix){
    $this->createDirectory('public/departments');
    $file_path = '';
    if($file){
      $file_path = $file->storePubliclyAs(
        'public/departments',
        $file_prefix.'-'.$id.'-'.$file->getClientOriginalName(),
        [
					'disk' => 'local'
				]
      );
    }
    return $file_path;
  }


}
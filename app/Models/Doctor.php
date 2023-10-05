<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Doctor extends Model
{
    use HasFactory;

		protected $appends = [ 'profile_picture', 'short_bio'];
		protected $fillable = [
			'name', 'speciality', 'avatar', 'user_id', 'department_id', 'employee_id'
		];

		public function department():BelongsTo {
			return $this->belongsTo(Department::class);
		}


		public function employee():BelongsTo {
			return $this->belongsTo(Employee::class);
		}

		public function user():BelongsTo {
			return $this->belongsTo(User::class);
		}


		public function getUserInformationAttribute(){
			return $this->user;
		}

		public function getProfilePictureAttribute(){
			if($this->avatar){
				return $this->avatar;
			}
			if($this->user->avatar){
				return $this->user->avatar;
			}
			return Storage::get('defaults/common-doctor-male.jpg');;
		}

		public function getShortBioAttribute($value){
			if($value){
				return Str::words($value, 25)."...";
			}
			return '';

		}
}

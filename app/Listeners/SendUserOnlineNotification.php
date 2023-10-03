<?php

namespace App\Listeners;

use App\Events\UserOnline;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;
use App\Models\User;

class SendUserOnlineNotification
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(UserOnline $event): void
    {
        //
        $user = $event->user;
        $status = $event->status;        
        $user = User::find($user['id']);
        $user->is_online = $status;
        $user->save();
    }
}

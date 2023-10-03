<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class UserOnline implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

		public object $user;
		public bool $status;

    /**
     * Create a new event instance.
     *
     * @

    /**
     * Create a new event instance.
     */
    public function __construct($user, $status)
    {
        //
			$this->user = $user;
      $this->status = $status;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
			$user = $this->user;
			$status = $this->status;
      Log::info($user->name. "is online status ".$status);			
      return [
        new Channel('users-online'),
      ];
    }

    public function broadcastAs(): string 
    {
      return 'user_login_logout';
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Board;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class BoardController extends Controller
{

    private $mBoard;

    public function __construct(Board $board){
        $this->mBoard = $board;
    }


    /**
     * @return Builder[]|Collection
     */
    public function get_all(){
        return $this->mBoard->query()->get();
    }

    public function get_by_board_id($board_id){
        return $this->mBoard->query()->findOrFail($board_id);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\JokeModel;
use Illuminate\Http\Request;

class JokeController extends Controller
{
    public function index (){
        
    }
    public function getJoke(){
      $joke =  JokeModel::inRandomOrder()->first();
      return json_encode(array('desc' => $joke->description));
    }
}

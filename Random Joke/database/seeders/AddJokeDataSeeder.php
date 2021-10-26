<?php

namespace Database\Seeders;

use App\Models\JokeModel;
use Illuminate\Database\Seeder;

class AddJokeDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data['description'] = 'Rj: Aap konsa gaana sunna pasand karoge??

        Santa: Tu Hai Ki Nahi…Roy movie ka…
        
        Rj: Kisko dedicate karna chahoge aap ye song???
        
        Santa: CONGRESS ko';
        JokeModel::create($data);

        $data['description'] = 'Ambani va Santa
        This is ultimate
        Ambani: Agar main subah se apni car me niklu to sham tak apni aadhi property bhi nahi dekh sakta
        Santa: Hamare paas bhi aisi khatara car thi…. humne to Bech di';
        JokeModel::create($data);

        $data['description'] = 'Santa: jab me chota tha to ek baar kutub minaar se gir gaya tha.
Banta: Acha!!to mar gya ya bach gya.
Santa: Saale.! mujhe kya pata, me to chota tha.';
        JokeModel::create($data);
    }
}

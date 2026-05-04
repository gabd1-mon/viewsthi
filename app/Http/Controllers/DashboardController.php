<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard', [

            'tmaFaturado' => [
                'percent' => 74.5,
                'meta' => 70,
            ],

            'carteiraPendente' => [
                'percent' => 39.6,
                'total' => 26799,
                'atraso' => 10603,
            ],

            'itensParados' => [
                'total' => 7713,
                'percent' => 28.8,
            ],

            'pedidosFracionados' => [
                'percent' => 35,
                'descricao' => 'Cliente recebe entrega picada',
            ],

            'tmaDistribuicao' => [
                [
                    'titulo' => "COMO VOCÊ MEDE HOJE\nTMA FATURADO",
                    'linhas' => [
                        ['label' => 'Verde',    'valor' => '74,52%', 'cor' => 'bg-green-400'],
                        ['label' => 'Amarelo',  'valor' => '7,15%',  'cor' => 'bg-yellow-400'],
                        ['label' => 'Vermelho', 'valor' => '18,33%', 'cor' => 'bg-red-400'],
                    ],
                ],
                [
                    'titulo' => "CARTEIRA PENDENTE",
                    'linhas' => [
                        ['label' => 'Verde',    'valor' => '74,52%', 'cor' => 'bg-green-400'],
                        ['label' => 'Amarelo',  'valor' => '7,15%',  'cor' => 'bg-yellow-400'],
                        ['label' => 'Vermelho', 'valor' => '18,33%', 'cor' => 'bg-red-400'],
                    ],
                ],
            ],

            'envelhecimento' => [
                'alertaPercent' => 28.8,
                'faixas' => [
                    ['label' => '0-15 dias',   'valor' => 4281, 'percent' => 15.7, 'cor' => '#4ade80'],
                    ['label' => '16-25 dias',  'valor' => 7641, 'percent' => 28.5, 'cor' => '#facc15'],
                    ['label' => '26-35 dias',  'valor' => 2469, 'percent' => 9.2,  'cor' => '#fb923c'],
                    ['label' => '36-45 dias',  'valor' => 3899, 'percent' => 11.6, 'cor' => '#ea580c'],
                    ['label' => '46-60 dias',  'valor' => 1677, 'percent' => 6.3,  'cor' => '#a3e635'],
                    ['label' => '>60 dias ⚠️', 'valor' => 7713, 'percent' => 28.8, 'cor' => '#b91c1c'],
                ],
            ],

            'segmentosCriticos' => [
                ['label' => 'Arame BTC',         'percent' => 38],
                ['label' => 'T. Termoacústi...',  'percent' => 18],
                ['label' => 'Grampo',             'percent' => 9],
                ['label' => 'Verg. CA60 Rolo',    'percent' => 9],
                ['label' => 'Vergalhão Dobr.',    'percent' => 7],
                ['label' => 'Arame Farpado',      'percent' => 7],
                ['label' => 'Prego',              'percent' => 6],
                ['label' => 'Tubo',               'percent' => 4],
            ],

        ]);
    }
}
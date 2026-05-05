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

            'diagnosticoPorEstado' => [
                    'filtroAtivo' => 'atencao', // criticos, atencao, todos
                    'estados' => [
                        ['uf' => 'PR', 'verdeFaturado' => 30.5, 'vermFaturado' => 43.2, 'fracionado' => 0,  'pendente' => 100, 'vermCarteira' => 100, 'diagnostico' => 'Colapso total',  'nivel' => 'critico'],
                        ['uf' => 'MT', 'verdeFaturado' => 49.2, 'vermFaturado' => 29.7, 'fracionado' => 29, 'pendente' => 43,  'vermCarteira' => 85.5,'diagnostico' => 'Crítico',        'nivel' => 'critico'],
                        ['uf' => 'BA', 'verdeFaturado' => 66.8, 'vermFaturado' => 28.6, 'fracionado' => 27, 'pendente' => 66,  'vermCarteira' => 79.1,'diagnostico' => 'Crítico',        'nivel' => 'critico'],
                        ['uf' => 'RO', 'verdeFaturado' => 49.3, 'vermFaturado' => 14.3, 'fracionado' => 67, 'pendente' => 33,  'vermCarteira' => 79.3,'diagnostico' => 'Frac. extremo',  'nivel' => 'atencao'],
                    ],
            ],

            'planoAcao' => [
                    [
                        'titulo' => '🚨 Imediato (esta semana)',
                        'cor' => '#f97316', // laranja
                        'itens' => [
                            ['numero' => 1, 'titulo' => 'Força-tarefa nos 7.713 itens >60 dias', 'descricao' => 'Levantar causa-raiz item a item: falta de estoque, produção parada ou problema de planejamento?', 'tag' => 'URGENTE', 'tagCor' => '#f97316'],
                            ['numero' => 2, 'titulo' => 'Acionar PR (100% vermelho na carteira)', 'descricao' => 'Zero itens faturados no estado. Contato imediato com responsável.', 'tag' => null, 'tagCor' => null],
                            ['numero' => 3, 'titulo' => 'Revisar TMA real vs faturado', 'descricao' => 'O TMA faturado não reflete a realidade. Mapear divergência.', 'tag' => null, 'tagCor' => null],
                        ],
                    ],
                    [
                        'titulo' => '⚠️ Curto Prazo (este mês)',
                        'cor' => '#eab308', // amarelo
                        'itens' => [
                            ['numero' => 4, 'titulo' => 'Criar alerta diário de carteira envelhecida', 'descricao' => 'Lista automática dos pedidos que passam de 30 dias sem faturar, com responsável definido para cada um.', 'tag' => 'PROCESSO', 'tagCor' => '#eab308'],
                            ['numero' => 5, 'titulo' => 'Reunião semanal de carteira', 'descricao' => 'Review semanal dos itens parados com time comercial e logística.', 'tag' => null, 'tagCor' => null],
                            ['numero' => 6, 'titulo' => 'Meta de redução de vermelho', 'descricao' => 'Definir meta: reduzir carteira vermelha de 39,6% para abaixo de 25%.', 'tag' => null, 'tagCor' => null],
                        ],
                    ],
                    [
                        'titulo' => '📋 Médio Prazo',
                        'cor' => '#3b82f6', // azul
                        'itens' => [
                            ['numero' => 7, 'titulo' => 'Reestruturar TMA por segmento', 'descricao' => 'Criar metas de TMA separadas por tipo de produto e região.', 'tag' => null, 'tagCor' => null],
                            ['numero' => 8, 'titulo' => 'Incluir TMA real no dashboard', 'descricao' => 'Mostrar TMA considerando todos os itens da carteira, não só os faturados.', 'tag' => null, 'tagCor' => null],
                            ['numero' => 9, 'titulo' => 'Implementar sistema de acompanhamento', 'descricao' => 'Desenvolver ferramenta para monitorar o desempenho da carteira em tempo real.', 'tag' => null, 'tagCor' => null],
                                                        
                                                        
                            ],
                    ],
                        ],


        ]);
    }
}
import PanelLayout from '@/Layouts/PanelLayout';
import { Card } from "flowbite-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function Dashboard() {
    return (
    <PanelLayout>
        <div className="!w-full">
                
            <div className=" mt-10 bg-red-400/10 border-l-8 border-l-red-700 border-b-2 border-b-red-700 border-r-2 border-r-red-700 border-t-2 border-t-red-700 rounded-lg rounded-l-3xl p-5">
                <div className="flex items-center gap-4">
                    <span className="text-4xl">🚨</span>

                    <div>
                        <p className="text-lg text-red-600 font-bold dark:text-red-600">7.713 itens com mais de 60 dias sem faturar - ação imediata necessária</p>
                        <p className="text-sm text-gray-600 dark:text-gray-200 mt-1">A carteira tem 39,6% no vermelho. O TMA faturado não reflete a realidade do cliente</p>
                    </div>
                </div>
            </div>


            <div className="flex items-center gap-4 my-4 mt-7">
                <span className="text-gray-500 text-sm whitespace-nowrap">VISÃO GERAL</span>
                <hr className="flex-1 border-t border-gray-700" />
            </div>


            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Card Verde */}
                <Card style={{ minHeight: '200px' }} className="w-full bg-white-900/60 dark:bg-gray-900/60 !border-t-4 !border-t-green-400 rounded-lg">
                    <div className="flex flex-col justify-start h-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xs font-bold tracking-widest text-gray-400">TMA FATURADO — VERDE</h1>
                            <span>✅</span>
                        </div>
                        <p className="text-5xl mt-4 font-bold text-green-400">74,5%</p>
                        <p className="text-sm mt-4 text-gray-500 dark:text-gray-300">Meta: 70% · <span className="text-green-400 font-bold">✓ Batendo</span></p>
                    </div>
                </Card>

                {/* Card Vermelho */}
                <Card style={{ minHeight: '200px' }} className="w-full bg-white-900/60 dark:bg-gray-900/60 !border-t-4 !border-t-red-500 rounded-lg">
                    <div className="flex flex-col justify-start h-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xs font-bold tracking-widest text-gray-400">CARTEIRA PENDENTE — VERMELHO</h1>
                            <span>🔴</span>
                        </div>
                        <p className="text-5xl mt-4 font-bold text-red-400">39,6%</p>
                        <p className="text-sm mt-4 text-gray-500 dark:text-gray-300">26.799 itens · 10.603 em atraso</p>
                    </div>
                </Card>

                {/* Card Amarelo */}
                <Card style={{ minHeight: '200px' }} className="w-full bg-white-900/60 dark:bg-gray-900/60 !border-t-4 !border-t-yellow-400 rounded-lg">
                    <div className="flex flex-col justify-start h-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xs font-bold tracking-widest text-gray-400">ITENS &gt; 60 DIAS PARADOS</h1>
                            <span>⚠️</span>
                        </div>
                        <p className="text-5xl mt-4 font-bold text-yellow-400">7.713</p>
                        <p className="text-sm mt-4 text-gray-500 dark:text-gray-300">28,8% do total da carteira</p>
                    </div>
                </Card>

                {/* Card Azul */}
                <Card style={{ minHeight: '200px' }} className="w-full bg-white-900/60 dark:bg-gray-900/60 !border-t-4 !border-t-blue-400 rounded-lg">
                    <div className="flex flex-col justify-start h-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xs font-bold tracking-widest text-gray-400">PEDIDOS FRACIONADOS</h1>
                        </div>
                        <p className="text-5xl mt-4 font-bold text-blue-400">~35%</p>
                        <p className="text-sm mt-4 text-gray-500 dark:text-gray-300">Cliente recebe entrega picada</p>
                    </div>
                </Card>

            </div>

            <hr className="border-t border-gray-700 my-6" />




            
               
            <Card className="w-full dark:bg-gray-900/60 rounded-lg p-4 w-full overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <Card className="w-full dark:bg-gray-900/90 rounded-lg w-full overflow-hidden">
                        <p className="text-gray-400 text-xs tracking-widest leading-tight mb-2">
                            COMO VOCÊ MEDE HOJE<br />TMA FATURADO
                        </p>
                        <Table className="!bg-transparent">
                            <TableBody className="divide-y">
                                <TableRow className="!bg-transparent dark:!bg-transparent dark:border-gray-700">
                                    <TableCell className="flex items-center gap-2 !px-2 !py-3">
                                        <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
                                        Verde
                                    </TableCell>
                                    <TableCell>74,52%</TableCell>
                                </TableRow>
                                <TableRow className="!bg-transparent dark:!bg-transparent dark:border-gray-700">
                                    <TableCell className="flex items-center gap-2 !px-2 !py-3">
                                        <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                                        Amarelo
                                    </TableCell>
                                    <TableCell>7,15%</TableCell>
                                </TableRow>
                                <TableRow className="!bg-transparent dark:!bg-transparent dark:border-gray-700">
                                    <TableCell className="flex items-center gap-2 !px-2 !py-3">
                                        <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                                        Vermelho
                                    </TableCell>
                                    <TableCell>18,33%</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Card>

                    
                    <Card className="w-full dark:bg-gray-900/90 rounded-lg w-full overflow-hidden">
                        <p className="text-gray-400 text-xs tracking-widest leading-tight mb-2">
                            COMO VOCÊ MEDE HOJE<br />TMA FATURADO
                        </p>
                        <Table className="!bg-transparent">
                            <TableBody className="divide-y">
                                <TableRow className="!bg-transparent dark:!bg-transparent dark:border-gray-700">
                                    <TableCell className="flex items-center gap-2 !px-2 !py-3">
                                        <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
                                        Verde
                                    </TableCell>
                                    <TableCell>74,52%</TableCell>
                                </TableRow>
                                <TableRow className="!bg-transparent dark:!bg-transparent dark:border-gray-700">
                                    <TableCell className="flex items-center gap-2 !px-2 !py-3">
                                        <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                                        Amarelo
                                    </TableCell>
                                    <TableCell>7,15%</TableCell>
                                </TableRow>
                                <TableRow className="!bg-transparent dark:!bg-transparent dark:border-gray-700">
                                    <TableCell className="flex items-center gap-2 !px-2 !py-3">
                                        <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                                        Vermelho
                                    </TableCell>
                                    <TableCell>18,33%</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Card>

                </div>
           </Card>

           <hr className="border-t border-gray-700 my-6" />


           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                {/* Envelhecimento da Carteira */}
                    <Card className="w-full dark:bg-gray-900/60 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-gray-700 dark:text-white font-bold flex items-center gap-2">
                                ⏳ Envelhecimento da Carteira
                            </p>
                            <span className="text-xs text-red-400 border border-red-400 px-2 py-1 rounded">CRÍTICO</span>
                        </div>

                        {[
                            { label: '0-15 dias',  valor: 4281,  percent: 15.7, cor: 'bg-green-400' },
                            { label: '16-25 dias', valor: 7641,  percent: 28.5, cor: 'bg-yellow-400' },
                            { label: '26-35 dias', valor: 2469,  percent: 9.2,  cor: 'bg-orange-400' },
                            { label: '36-45 dias', valor: 3899,  percent: 11.6, cor: 'bg-orange-600' },
                            { label: '46-60 dias', valor: 1677,  percent: 6.3,  cor: 'bg-red-400' },
                            { label: '>60 dias ⚠️', valor: 7713, percent: 28.8, cor: 'bg-red-700' },
                        ].map((item) => (
                            <div key={item.label} className="mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-400 text-xs w-20 shrink-0">{item.label}</span>
                                    <div className="flex-1 bg-gray-700 rounded-full h-5 relative">
                                        <div
                                            className={`${item.cor} h-5 rounded-full flex items-center px-2`}
                                            style={{ width: `${item.percent * 3}%` }}
                                        >
                                            <span className="text-xs font-bold text-black">{item.valor.toLocaleString('pt-BR')}</span>
                                        </div>
                                    </div>
                                    <span className="text-gray-300 text-xs w-10 text-right">{item.percent}%</span>
                                </div>
                            </div>
                        ))}

                        <div className="mt-4 bg-yellow-400/10 border-l-4 border-yellow-400 rounded p-3">
                            <p className="text-xs text-gray-700 dark:text-white">
                                ⚠️ <span className="text-gray-700 dark:text-white font-bold">28,8% da carteira</span> está há mais de 60 dias parada. Esses itens já extrapolaram qualquer prazo possível.
                            </p>
                        </div>
                    </Card>

                    {/* Segmentos Críticos */}
                    <Card className="w-full dark:bg-gray-900/60 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-gray-700 dark:text-white font-bold flex items-center gap-2">
                                 Segmentos Críticos
                            </p>
                            
                        </div>

                        <p className="text-gray-400 text-xs tracking-widest mb-3">CARTEIRA PENDENTE</p>

                        {[
                            { label: 'Arame BTC',        percent: 38 },
                            { label: 'T. Termoacústi...', percent: 18 },
                            { label: 'Grampo',           percent: 9  },
                            { label: 'Verg. CA60 Rolo',  percent: 9  },
                            { label: 'Vergalhão Dobr.',  percent: 7  },
                            { label: 'Arame Farpado',    percent: 7  },
                            { label: 'Prego',            percent: 6  },
                            { label: 'Tubo',             percent: 4  },
                        ].map((item) => (
                            <div key={item.label} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
                                <span className="text-gray-300 text-sm">{item.label}</span>
                                <span className="text-red-400 font-bold text-sm">{item.percent}%</span>
                            </div>
                        ))}
                    </Card>

            </div>
            






        
        </div>   






    </PanelLayout>  
    );
}
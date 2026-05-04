import PanelLayout from '@/Layouts/PanelLayout';
import { Card } from "flowbite-react";
import { Table, TableBody, TableCell, TableRow } from "flowbite-react";

export default function Dashboard({ 
    tmaFaturado,
    carteiraPendente,
    itensParados,
    pedidosFracionados,
    tmaDistribuicao,
    envelhecimento,
    segmentosCriticos
}) {
    return (
    <PanelLayout>
        <div className="!w-full">
                
            {/* Alerta */}
            <div className="mt-10 bg-red-400/10 border-l-8 border-l-red-700 border-b-2 border-b-red-700 border-r-2 border-r-red-700 border-t-2 border-t-red-700 rounded-lg rounded-l-3xl p-5">
                <div className="flex items-center gap-4">
                    <span className="text-4xl">🚨</span>
                    <div>
                        <p className="text-lg text-red-600 font-bold">{itensParados.total} itens com mais de 60 dias sem faturar - ação imediata necessária</p>
                        <p className="text-sm text-gray-200 mt-1">A carteira tem {carteiraPendente.percent}% no vermelho. O TMA faturado não reflete a realidade do cliente</p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-4 mt-7">
                <span className="text-gray-500 text-sm whitespace-nowrap">VISÃO GERAL</span>
                <hr className="flex-1 border-t border-gray-700" />
            </div>

            {/* Cards principais */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                <Card style={{ minHeight: '200px' }} className="w-full dark:bg-gray-900/60 !border-t-4 !border-t-green-400 rounded-lg">
                    <div className="flex flex-col justify-start h-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xs font-bold tracking-widest text-gray-400">TMA FATURADO</h1>
                            
                        </div>
                        <p className="text-5xl mt-4 font-bold text-green-400">{tmaFaturado.percent}%</p>
                        <p className="text-sm mt-4 text-gray-300">Meta: {tmaFaturado.meta}% · <span className="text-green-400 font-bold">✓ Batendo</span></p>
                    </div>
                </Card>

                <Card style={{ minHeight: '200px' }} className="w-full dark:bg-gray-900/60 !border-t-4 !border-t-red-500 rounded-lg">
                    <div className="flex flex-col justify-start h-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xs font-bold tracking-widest text-gray-400">CARTEIRA PENDENTE</h1>
                            
                        </div>
                        <p className="text-5xl mt-4 font-bold text-red-400">{carteiraPendente.percent}%</p>
                        <p className="text-sm mt-4 text-gray-300">{carteiraPendente.total} itens · {carteiraPendente.atraso} em atraso</p>
                    </div>
                </Card>

                <Card style={{ minHeight: '200px' }} className="w-full dark:bg-gray-900/60 !border-t-4 !border-t-yellow-400 rounded-lg">
                    <div className="flex flex-col justify-start h-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xs font-bold tracking-widest text-gray-400">ITENS &gt; 60 DIAS PARADOS</h1>
                            
                        </div>
                        <p className="text-5xl mt-4 font-bold text-yellow-400">{itensParados.total.toLocaleString('pt-BR')}</p>
                        <p className="text-sm mt-4 text-gray-300">{itensParados.percent}% do total da carteira</p>
                    </div>
                </Card>

                <Card style={{ minHeight: '200px' }} className="w-full dark:bg-gray-900/60 !border-t-4 !border-t-blue-400 rounded-lg">
                    <div className="flex flex-col justify-start h-full">
                        <h1 className="text-xs font-bold tracking-widest text-gray-400">PEDIDOS FRACIONADOS</h1>
                        <p className="text-5xl mt-4 font-bold text-blue-400">~{pedidosFracionados.percent}%</p>
                        <p className="text-sm mt-4 text-gray-300">{pedidosFracionados.descricao}</p>
                    </div>
                </Card>

            </div>

            <hr className="border-t border-gray-700 my-6" />

            {/* Tabelas TMA */}
            <Card className="w-full dark:bg-gray-900/60 rounded-lg p-4 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tmaDistribuicao.map((tabela, i) => (
                        <Card key={i} className="w-full dark:bg-gray-900/90 rounded-lg overflow-hidden">
                            <p className="text-gray-400 text-xs tracking-widest leading-tight mb-2">
                                {tabela.titulo}
                            </p>
                            <Table className="!bg-transparent">
                                <TableBody className="divide-y">
                                    {tabela.linhas.map((linha) => (
                                        <TableRow key={linha.label} className="!bg-transparent dark:!bg-transparent dark:border-gray-700">
                                            <TableCell className="flex items-center gap-2 !px-2 !py-3">
                                                <span className={`w-3 h-3 rounded-full ${linha.cor} inline-block`}></span>
                                                {linha.label}
                                            </TableCell>
                                            <TableCell className="!px-2 !py-3">{linha.valor}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    ))}
                </div>
            </Card>

            <hr className="border-t border-gray-700 my-6" />

            {/* Envelhecimento + Segmentos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                <Card className="w-full dark:bg-gray-900/60 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                        <p className="dark:text-white font-bold"> Envelhecimento da Carteira</p>
                        <span className="text-xs text-red-400 border border-red-400 px-2 py-1 rounded">CRÍTICO</span>
                    </div>
                    {envelhecimento.faixas.map((item) => (
                        <div key={item.label} className="mb-3">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-400 text-xs w-20 shrink-0">{item.label}</span>
                                <div className="flex-1 bg-gray-700 rounded-full h-5 relative">
                                    <div className="h-5 rounded-full flex items-center px-2"
    style={{ width: `${item.percent * 3}%`, backgroundColor: item.cor }}>
                                        <span className="text-xs font-bold text-black">{item.valor.toLocaleString('pt-BR')}</span>
                                    </div>
                                </div>
                                <span className="text-gray-300 text-xs w-10 text-right">{item.percent}%</span>
                            </div>
                        </div>
                    ))}
                    <div className="mt-4 bg-yellow-400/10 border-l-4 border-yellow-400 rounded p-3">
                        <p className="text-xs dark:text-white">
                            ⚠️ <span className="font-bold">{envelhecimento.alertaPercent}% da carteira</span> está há mais de 60 dias parada.
                        </p>
                    </div>
                </Card>

                <Card className="w-full dark:bg-gray-900/60 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                        <p className="dark:text-white font-bold"> Segmentos Críticos</p>
                    </div>
                    <p className="text-gray-400 text-xs tracking-widest mb-3">CARTEIRA PENDENTE</p>
                    {segmentosCriticos.map((item) => (
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
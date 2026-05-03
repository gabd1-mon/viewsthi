import PanelLayout from '@/Layouts/PanelLayout';
import { Card } from "flowbite-react";

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
    
</div>        

</PanelLayout>  
    );
}
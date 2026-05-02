import PanelLayout from '@/Layouts/PanelLayout';

export default function Dashboard() {
    return (
<PanelLayout>
            
    <div className=" mt-10 bg-red-400/10 border-l-8 border-l-red-700 border-b-2 border-b-red-700 border-r-2 border-r-red-700 border-t-2 border-t-red-700 rounded-lg rounded-l-3xl p-5">
        <div className="flex items-center gap-4">
            <span className="text-4xl">🚨</span>

            <div>
                <p className="text-lg text-red-600 font-bold dark:text-red-600">7.713 itens com mais de 60 dias sem faturar - ação imediata necessária</p>
                <p className="text-sm text-gray-600 dark:text-gray-200 mt-1">A carteira tem 39,6% no vermelho. O TMA faturado não reflete a realidade do cliente</p>
            </div>
        </div>
    </div>

    
 

</PanelLayout>  
    );
}
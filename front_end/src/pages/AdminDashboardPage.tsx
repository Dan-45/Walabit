import { Container } from '../components/Container';
import { Sidebar } from '../components/Sidebar';
import { CategoryCard } from '../components/CategoryCard'; // Asegúrate de crear estos archivos
import { ProjectVisits } from '../components/ProjectVisits';
import { 
  Card, 
  Grid, 
  Metric, 
  Text, 
  Flex, 
  BadgeDelta, 
  AreaChart, 
  Title 
} from "@tremor/react";

const chartdata = [
  { date: 'Jan', Visitas: 2400 },
  { date: 'Feb', Visitas: 1900 },
  { date: 'Mar', Visitas: 2800 },
  { date: 'Apr', Visitas: 2108 },
  { date: 'May', Visitas: 3200 },
  { date: 'Jun', Visitas: 3800 },
];

export const AdminDashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-[#fcfcf9]">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <Container>
          {/* 1. HEADER */}
          <header className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tighter">Platform Performance</h1>
              <p className="text-slate-500 mt-1">Detailed analysis of project engagement and clip metrics.</p>
            </div>
            <button className="bg-brand-primary text-slate-950 px-6 py-2 rounded-xl font-bold shadow-md hover:scale-105 transition-transform">
              Modificar distribución
            </button>
          </header>

          {/* 2. BLOQUE DE MÉTRICAS (KPIs) */}
          <Grid numItemsSm={2} numItemsLg={4} className="gap-6 mb-8">
            <Card decoration="top" decorationColor="yellow" className="rounded-2xl shadow-sm border-none">
              <Text className="font-bold text-slate-400 text-[10px] uppercase tracking-widest">Total Visitas</Text>
              <Flex justifyContent="start" alignItems="baseline" className="space-x-3 mt-1">
                <Metric className="font-black text-2xl">124.5k</Metric>
                <BadgeDelta deltaType="moderateIncrease" className="rounded-lg">+12%</BadgeDelta>
              </Flex>
            </Card>
            
            <Card decoration="top" decorationColor="yellow" className="rounded-2xl shadow-sm border-none">
              <Text className="font-bold text-slate-400 text-[10px] uppercase tracking-widest">Total Clips</Text>
              <Flex justifyContent="start" alignItems="baseline" className="space-x-3 mt-1">
                <Metric className="font-black text-2xl">1,842</Metric>
                <BadgeDelta deltaType="moderateIncrease" className="rounded-lg">+5.4%</BadgeDelta>
              </Flex>
            </Card>

            <Card decoration="top" decorationColor="yellow" className="rounded-2xl shadow-sm border-none">
              <Text className="font-bold text-slate-400 text-[10px] uppercase tracking-widest">Promedio Visitas</Text>
              <Flex justifyContent="start" alignItems="baseline" className="space-x-3 mt-1">
                <Metric className="font-black text-2xl">67.5</Metric>
                <BadgeDelta deltaType="moderateDecrease" className="rounded-lg">-2.1%</BadgeDelta>
              </Flex>
            </Card>

            <Card decoration="top" decorationColor="yellow" className="rounded-2xl shadow-sm border-none">
              <Text className="font-bold text-slate-400 text-[10px] uppercase tracking-widest">Crecimiento (%)</Text>
              <Flex justifyContent="start" alignItems="baseline" className="space-x-3 mt-1">
                <Metric className="font-black text-2xl">24.8%</Metric>
                <BadgeDelta deltaType="increase" className="rounded-lg">+4.2%</BadgeDelta>
              </Flex>
            </Card>
          </Grid>

          {/* 3. FILA MIXTA: TENDENCIA Y CATEGORÍAS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="lg:col-span-2 rounded-2xl shadow-sm border-none">
              <Title className="text-slate-700 font-bold">Visits Trend</Title>
              <AreaChart
                className="h-72 mt-4"
                data={chartdata}
                index="date"
                categories={["Visitas"]}
                colors={["yellow"]}
                showLegend={false}
                curveType="natural"
                valueFormatter={(number: number) => Intl.NumberFormat("us").format(number).toString()}
              />
            </Card>
            
            <CategoryCard />
          </div>

          {/* 4. FILA DE VISITAS POR PROYECTO */}
          <div className="mb-8">
            <ProjectVisits />
          </div>

          {/* 5. TABLA DE DETALLES */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <Title className="text-slate-700 font-bold">Detailed Breakdown</Title>
                <button className="text-xs font-bold text-slate-400 hover:text-slate-600">Export CSV</button>
            </div>
            <table className="w-full text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">Nombre</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">Num_Clips</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">Num_Visitas</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase">Estado</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-slate-400 uppercase text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900 italic">Frontend Architecture</td>
                  <td className="px-6 py-4 text-slate-500 text-sm">124</td>
                  <td className="px-6 py-4 text-slate-500 text-sm font-medium">12,450</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-[10px] font-bold">PUBLICADO</span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-400 cursor-pointer">
                    →
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </main>
    </div>
  );
};
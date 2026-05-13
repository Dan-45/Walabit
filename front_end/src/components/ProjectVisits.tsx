import { BarList, Card, Title, Text, Flex } from "@tremor/react";

const data = [
  { name: "Platform Redesign", value: 42100 },
  { name: "API Documentation", value: 28400 },
  { name: "Core Systems Audit", value: 15200 },
];

export const ProjectVisits = () => (
  <Card className="bg-brand-card border-none shadow-xl rounded-2xl">
    <Title className="font-bold text-slate-700">Visits per Project</Title>
    <Flex className="mt-4">
      <Text className="font-bold uppercase text-[10px] tracking-widest text-slate-400">Nombre</Text>
      <Text className="font-bold uppercase text-[10px] tracking-widest text-slate-400">Visitas</Text>
    </Flex>
    <BarList 
      data={data} 
      className="mt-2" 
      color="video" 
      valueFormatter={(number: number) => `${Intl.NumberFormat("us").format(number).toString()}k`}
    />
  </Card>
);
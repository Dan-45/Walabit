import { Card, DonutChart, Title, List, ListItem } from "@tremor/react";

const categories = [
  { name: "Video Marketing", value: 64, color: "video" },
  { name: "Technical Docs", value: 28, color: "technical" },
  { name: "Other", value: 8, color: "other" },
];

export const CategoryCard = () => (
  <Card className="max-w-md rounded-2xl border-none shadow-sm">
    <Title className="font-bold text-slate-700">Categories</Title>

    <div className="relative flex justify-center items-center">
      <DonutChart
        className="h-60 mt-6"
        data={categories}
        category="value"
        index="name"
        colors={["video", "technical", "other"]}
        variant="donut"
        showLabel={false} // Desactivamos el label interno de Tremor
        onValueChange={(v) => console.log(v)}
      />

      <div className="absolute top-[calc(50%+12px)] flex flex-col items-center justify-center pointer-events-none">
        <span className="text-4xl font-black tracking-tighter text-brand-primary leading-none">
          64%
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
          Video
        </span>
      </div>
    </div>

    <List className="mt-8 space-y-2">
      {categories.map((item) => (
        <ListItem key={item.name} className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-3">
            {/* El puntito de color (ya lo tienes) */}
            <span className={`h-2.5 w-2.5 rounded-full bg-${item.color}`} aria-hidden="true" />

            {/* El nombre de la categoría en gris oscuro */}
            <span className="text-sm font-medium text-slate-700">
              {item.name}
            </span>
          </div>

          {/* *** EL CAMBIO CLAVE ESTÁ AQUÍ *** */}
          {/* El porcentaje a la derecha en AMARILLO */}
          <span className="font-bold text-lg text-brand-primary">
            {item.value}%
          </span>
        </ListItem>
      ))}
    </List>
  </Card>
);

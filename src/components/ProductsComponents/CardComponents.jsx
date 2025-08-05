

import { Card } from "flowbite-react";

export function CardComponent({image,model,description}) {
  return (
    <Card
      className="max-w-sm"
      style={{backgroundImage:{image}}}
    >
        <img src={image} width={500} height={500} alt="image"/>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {model}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
        {description}
      </p>
    </Card>
  );
}



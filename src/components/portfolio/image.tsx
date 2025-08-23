"use client";

import Image from "next/image";
import { PortfolioProject } from "./type";

export const PortfolioImage = ({
  project,
  imageError,
  handleImageError,
}: {
  project: PortfolioProject;
  imageError: { [key: number]: boolean };
  handleImageError: (id: number) => void;
}) => {
  return (
    <div className="relative h-72 md:h-96 lg:h-[500px] rounded-lg overflow-hidden bg-muted">
      {!imageError[project.id] ? (
        <Image
          src={project.imageUrl}
          alt={`Imagem do projeto ${project.title}`}
          fill
          className="object-cover"
          onError={() => handleImageError(project.id)}
          priority={project.id === 1}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-muted">
          <span className="text-muted-foreground">Imagem não disponível</span>
        </div>
      )}
    </div>
  );
};

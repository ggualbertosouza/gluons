"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ExternalLink } from "lucide-react";

import { PortfolioProject } from "./type";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

export const PortfolioContent = ({
  project,
}: {
  project: PortfolioProject;
}) => {
  return (
    <div className="flex flex-col justify-center">
      <CardContent className="p-0">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="text-sm">
            {project.type}
          </Badge>
          <Badge variant="outline" className="text-sm">
            {project.technology}
          </Badge>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>

        <p className="text-muted-foreground mb-6">{project.description}</p>

        {project.demoUrl && (
          <Button asChild>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Ver projeto
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardContent>
    </div>
  );
};

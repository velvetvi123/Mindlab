
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectForm } from "./project-form";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  status: string;
  specialists: number;
  budget: string;
  deadline: string;
}

interface NewProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProjectCreated: (project: Project) => void;
}

export function NewProjectDialog({
  open,
  onOpenChange,
  onProjectCreated,
}: NewProjectDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateProject = async (data: any) => {
    setIsLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a new project object with the form data
      const newProject = {
        id: Date.now(),
        title: data.title,
        status: "Pending",
        specialists: 0,
        budget: data.budget,
        deadline: data.deadline,
      };
      
      onProjectCreated(newProject);
      onOpenChange(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription>
            Fill out the form below to create a new project and find specialists.
          </DialogDescription>
        </DialogHeader>
        <ProjectForm 
          onSubmit={handleCreateProject} 
          onCancel={() => onOpenChange(false)}
          isLoading={isLoading}
        />
      </DialogContent>
    </Dialog>
  );
}

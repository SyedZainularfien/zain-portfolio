import { useQuery } from "@tanstack/react-query";
import { projects, skills, experience } from "@/data/portfolio";

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      // Simulate API delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      return projects;
    },
  });
}

export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      // Simulate API delay for better UX
      await new Promise(resolve => setTimeout(resolve, 300));
      return skills;
    },
  });
}

export function useExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: async () => {
      // Simulate API delay for better UX
      await new Promise(resolve => setTimeout(resolve, 400));
      return experience;
    },
  });
}

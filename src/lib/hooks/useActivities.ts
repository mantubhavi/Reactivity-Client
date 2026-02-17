import { useQuery } from "@tanstack/react-query";
import type { Activity } from "../types/index.d";
import agent from "../api/agent";

const useActivities = () => {
  const { data: activities, isPending } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const response = await agent.get<Activity[]>("/activities");
      return response.data;
    },
  });
  return { activities, isPending };
};

export default useActivities;

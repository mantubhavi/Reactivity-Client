import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Activity } from "../types/index.d";
import agent from "../api/agent";

const useActivities = () => {
  const queryClient = useQueryClient();

  const { data: activities, isPending } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const response = await agent.get<Activity[]>("/activities");
      return response.data;
    },
  });

  const updateActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      await agent.put("/activities", activity);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["activities"],
      });
    },
  });

  return { activities, isPending, updateActivity };
};

export default useActivities;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Activity } from "../types/index.d";

const useActivities = () => {
    const { data: activities, isPending } = useQuery({
        queryKey: ["activities"],
        queryFn: async () => {
            const response = await axios.get<Activity[]>("http://localhost:5003/api/activities");
            return response.data
        }
    });
    return { activities, isPending }
}

export default useActivities;
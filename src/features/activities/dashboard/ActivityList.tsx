import { Box, Typography } from "@mui/material";
import ActivityCard from "./ActivityCard";
import useActivities from "../../../lib/hooks/useActivities";

const ActivityList = () => {
  const { activities, isPending } = useActivities();

  if (!activities || isPending) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activities.map((activity) => (
        <ActivityCard activity={activity} key={activity.id} />
      ))}
    </Box>
  );
};

export default ActivityList;

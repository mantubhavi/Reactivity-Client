import { Box } from "@mui/material"
import type { Activity } from "../../../lib/types/index.d"
import ActivityCard from "./ActivityCard"

type Props = {
    activities: Activity[],
    selectActivity: (id: string) => void
    deleteActivity: (id: string) => void
}

const ActivityList = ({ activities, selectActivity, deleteActivity }: Props) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {activities.map((activity) => (
                <ActivityCard
                    activity={activity}
                    key={activity.id}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                />
            ))}
        </Box>
    )
}

export default ActivityList
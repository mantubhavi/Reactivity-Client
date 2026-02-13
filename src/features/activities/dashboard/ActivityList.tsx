import { Box } from "@mui/material"
import type { Activity } from "../../../lib/types/index.d"
import ActivityCard from "./ActivityCard"

type Props = {
    activities: Activity[]
}

const ActivityList = ({ activities }: Props) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {activities.map((activity) => (
                <ActivityCard activity={activity} key={activity.id} />
            ))}
        </Box>
    )
}

export default ActivityList
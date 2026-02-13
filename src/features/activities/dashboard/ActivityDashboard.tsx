import { Grid } from "@mui/material"
import type { Activity } from "../../../lib/types/index.d"
import ActivityList from "./ActivityList"
import ActivityDetails from "../details/ActivityDetails"

type Props = {
    activities: Activity[]
}

const ActivityDashboard = ({ activities }: Props) => {
    return (
        <Grid container spacing={3}>
            <Grid size={7}>
                <ActivityList activities={activities} />
            </Grid>
            <Grid size={5}>
                {activities[0] && <ActivityDetails activity={activities[0]} />}
            </Grid>
        </Grid>
    )
}

export default ActivityDashboard
import { Grid } from "@mui/material"
import type { Activity } from "../../../lib/types/index.d"
import ActivityList from "./ActivityList"

type Props = {
    activities: Activity[]
}

const ActivityDashboard = ({ activities }: Props) => {
    return (
        <Grid container>
            <Grid size={9}>
                <ActivityList activities={activities} />
            </Grid>
        </Grid>
    )
}

export default ActivityDashboard
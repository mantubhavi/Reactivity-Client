import { Grid } from "@mui/material"
import type { Activity } from "../../../lib/types/index.d"
import ActivityList from "./ActivityList"
import ActivityDetails from "../details/ActivityDetails"

type Props = {
    activities: Activity[],
    selectActivity: (id: string) => void,
    cancelSelectActivity: () => void,
    selectedActivity?: Activity
}

const ActivityDashboard = ({
    activities,
    selectActivity,
    cancelSelectActivity,
    selectedActivity
}: Props) => {
    return (
        <Grid container spacing={3}>
            <Grid size={7}>
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                />
            </Grid>
            <Grid size={5}>
                {selectedActivity &&
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                    />
                }
            </Grid>
        </Grid>
    )
}

export default ActivityDashboard
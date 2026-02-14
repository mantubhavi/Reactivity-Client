import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import type { Activity } from "../../../lib/types/index.d"

type Props = {
    activity: Activity,
    cancelSelectActivity: () => void,
    openForm: (id: string) => void
}
const ActivityDetails = ({ activity, cancelSelectActivity, openForm }: Props) => {
    return (
        <Card sx={{ borderRadius: 2 }}>
            <CardMedia
                component="img"
                src={`/images/categoryImages/${activity.category}.jpg`}
            />

            <CardContent>
                <Typography variant="h5">{activity.title}</Typography>
                <Typography variant="subtitle1" fontWeight="light">{activity.date}</Typography>
                <Typography variant="body1">{activity.description}</Typography>
            </CardContent>

            <CardActions>
                <Button color="primary" onClick={() => openForm(activity.id)}>Edit</Button>
                <Button color="inherit" onClick={() => cancelSelectActivity()}>Cancel</Button>
            </CardActions>
        </Card>
    )
}

export default ActivityDetails
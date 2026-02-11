import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Activity } from "./lib/types/index.d";

function App() {
  const [activites, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>("http://localhost:5003/api/activities")
      .then((res) => setActivities(res.data));
  }, []);

  return (
    <>
      <Typography variant="h3">Reactivities</Typography>
      <List>
        {activites.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;

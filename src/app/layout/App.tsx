import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Activity } from "../../lib/types/index.d";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activites, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);

  useEffect(() => {
    axios.get<Activity[]>("http://localhost:5003/api/activities")
      .then((res) => setActivities(res.data));
  }, []);

  const handleSelectActivity = (id) => {
    setSelectedActivity(activites.find(x => x.id === id));
  }

  const handleCancelSelect = () => {
    setSelectedActivity(undefined);
  }

  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard
          activities={activites}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelect}
          selectedActivity={selectedActivity}
        />
      </Container>
    </Box>
  );
}

export default App;

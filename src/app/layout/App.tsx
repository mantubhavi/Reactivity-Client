import { Box, Container, CssBaseline, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import type { Activity } from "../../lib/types/index.d";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useQuery } from "@tanstack/react-query";

function App() {
  // const [activites, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  // useEffect(() => {
  //   axios.get<Activity[]>("http://localhost:5003/api/activities")
  //     .then((res) => setActivities(res.data));
  // }, []);

  const { data: activites, isPending } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const response = await axios.get<Activity[]>("http://localhost:5003/api/activities");
      return response.data;
    }
  })

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activites?.find(x => x.id === id));
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleOpenForm = (id?: string) => {
    if (id) {
      handleSelectActivity(id);
    }
    else {
      handleCancelSelectActivity();
    }
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  const handleSubmitForm = (activity: Activity) => {
    // if (activity.id) {
    //   setActivities(activites.map(x => x.id === activity.id ? activity : x))
    // }
    // else {
    //   const newActivity = { ...activity, id: activites.length.toString() }
    //   setActivities([...activites, newActivity])
    //   setSelectedActivity(newActivity)
    // }
    setEditMode(false);
  }

  const handleDelete = (id: string) => {
    console.log(id)
  }

  return (
    <Box sx={{ bgcolor: "#eeeeee", minHeight: '100vh' }}>
      <CssBaseline />

      <NavBar openForm={handleOpenForm} />

      <Container maxWidth="xl" sx={{ mt: 3 }}>

        {!activites || isPending ? (
          <Typography>Loading...</Typography>
        ) : (<ActivityDashboard
          activities={activites}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleFormClose}
          submitForm={handleSubmitForm}
          deleteActivity={handleDelete}
        />)}

      </Container>
    </Box>
  );
}

export default App;

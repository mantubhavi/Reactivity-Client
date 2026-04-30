import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import useActivities from "../../../lib/hooks/useActivities";
import { useNavigate, useParams } from "react-router";
import { useForm, type FieldValues } from "react-hook-form";
import { useEffect } from "react";
import {
  activitySchema,
  type ActivitySchema,
} from "../../../lib/scehmas/activityScehmans";
import { zodResolver } from "@hookform/resolvers/zod";

const ActivityForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ActivitySchema>({
    mode: "onTouched",
    resolver: zodResolver(activitySchema),
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const { updateActivity, createActivity, activity, isLoadingActivity } =
    useActivities(id);

  useEffect(() => {
    if (activity) {
      reset(activity);
    }
  }, [activity, reset]);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  if (isLoadingActivity) {
    return <Typography>Loading activity...</Typography>;
  }

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        {activity ? "Edit Activity" : "Create Activity"}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <TextField
          label="Title"
          {...register("title")}
          defaultValue={activity?.title}
          error={!!errors.title}
          helperText={errors.title?.message}
        />

        <TextField
          label="Description"
          {...register("description")}
          multiline
          rows={3}
          defaultValue={activity?.description}
          error={!!errors.description}
          helperText={errors.description?.message}
        />

        <TextField
          label="Category"
          {...register("category")}
          defaultValue={activity?.category}
          error={!!errors.category}
          helperText={errors.category?.message}
        />

        <TextField
          label="Date"
          {...register("date")}
          type="date"
          defaultValue={
            activity?.date
              ? new Date(activity.date).toISOString().split("T")[0]
              : new Date().toISOString().split("T")[0]
          }
          error={!!errors.date}
          helperText={errors.date?.message}
        />

        <TextField
          label="City"
          {...register("city")}
          defaultValue={activity?.city}
          error={!!errors.city}
          helperText={errors.city?.message}
        />

        <TextField
          label="Venue"
          {...register("venue")}
          defaultValue={activity?.venue}
          error={!!errors.venue}
          helperText={errors.venue?.message}
        />

        <Box display="flex" justifyContent="end" gap={3}>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/activities");
            }}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            color="success"
            variant="contained"
            disabled={updateActivity.isPending || createActivity.isPending}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ActivityForm;

import { Box, Button, Paper, Typography } from "@mui/material";
import useActivities from "../../../lib/hooks/useActivities";
import { useNavigate, useParams } from "react-router";
import { useForm, type FieldValues } from "react-hook-form";
import { useEffect } from "react";
import {
  activitySchema,
  type ActivitySchema,
} from "../../../lib/scehmas/activityScehmans";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../../../app/shared/component/TextInput";
import SelectInput from "../../../app/shared/component/SelectInput";
import { categoryOption } from "./categoryOptions";
import DateTimeInput from "../../../app/shared/component/DateTimeInput";

const ActivityForm = () => {
  const { control, reset, handleSubmit } = useForm<ActivitySchema>({
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
        <TextInput label="Title" control={control} name="title" />

        <TextInput
          label="Description"
          control={control}
          name="description"
          multiline
          rows={3}
        />

        <SelectInput
          items={categoryOption}
          label="Category"
          control={control}
          name="category"
        />

        <DateTimeInput label="Date" control={control} name="date" />

        <TextInput label="City" control={control} name="city" />
        <TextInput label="Venue" control={control} name="venue" />

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

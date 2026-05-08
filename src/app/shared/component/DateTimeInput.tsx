import { DateTimePicker, type DateTimeFieldProps } from "@mui/x-date-pickers";
import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues> = {} & UseControllerProps<T> &
  DateTimeFieldProps<Date>;

const DateTimeInput = <T extends FieldValues>(props: Props<T>) => {
  const { field, fieldState } = useController({ ...props });
  return (
    <DateTimePicker
      {...props}
      value={field.value ? new Date(field.value) : null}
      onChange={(value) => field.onChange(new Date(value!))}
      sx={{ width: "100%" }}
      slotProps={{
        textField: {
          onBlur: field.onBlur,
          error: !!fieldState.error,
          helperText: fieldState.error?.message,
        },
      }}
    />
  );
};

export default DateTimeInput;

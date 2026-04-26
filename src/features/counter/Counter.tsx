import { Button, ButtonGroup, Typography } from "@mui/material";
import useStore from "../../lib/hooks/useStore";
import { observer } from "mobx-react-lite";

const Counter = () => {
  const { counterStore } = useStore();
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {counterStore.title}
      </Typography>

      <Typography variant="h6" gutterBottom>
        The count is {counterStore.count}
      </Typography>

      <ButtonGroup sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="error"
          onClick={() => counterStore.decrement()}
        >
          Decrement
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={() => counterStore.increment()}
        >
          Increment
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => counterStore.increment(5)}
        >
          Increment by 5
        </Button>
      </ButtonGroup>
    </>
  );
};

const CounterObserver = observer(Counter);

export default CounterObserver;

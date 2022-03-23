import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import { useAppDispatch, useAppSelector } from "../../../../../../Reducer";
import { setName } from "../../../../../../Reducer/Search";

export default function Name({ onEnter }: { onEnter: () => void }) {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.Search.name);
  const onPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onEnter();
    }
  };
  return (
    <>
      <Grid item>
        <TextField
          label={t("form.search.name")}
          value={name}
          onKeyPress={onPress}
          onChange={(event) => dispatch(setName(event.target.value))}
        />
      </Grid>
    </>
  );
}

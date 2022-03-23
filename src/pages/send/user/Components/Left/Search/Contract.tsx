import { Grid, TextField } from "@mui/material";
import { t } from "i18next";
import { useAppDispatch, useAppSelector } from "../../../../../../Reducer";
import { setContract } from "../../../../../../Reducer/Search";

export default function Contract({ onEnter }: { onEnter: () => void }) {
  const dispatch = useAppDispatch();
  const contract = useAppSelector((state) => state.Search.contract);
  const onPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onEnter();
    }
  };
  return (
    <>
      <Grid item>
        <TextField
          label={t("form.search.contract")}
          value={contract}
          onKeyPress={onPress}
          onChange={(event) => dispatch(setContract(event.target.value))}
        />
      </Grid>
    </>
  );
}

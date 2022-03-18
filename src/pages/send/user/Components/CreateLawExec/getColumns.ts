import { GridColDef } from "@mui/x-data-grid-pro";
import { t } from "i18next";

export default function getColumns(): GridColDef[] {
  return [
    { field: "Person.id", headerName: t("form.results.person.id") },
    { field: "Debt.id", headerName: t("form.results.debt.id") },
    { field: "id", headerName: t("form.results.law_act.id") },
    {
      field: "Person.fio",
      headerName: t("form.results.person.fio"),
      width: 200,
    },
    { field: "Debt.contract", headerName: t("form.results.debt.contract") },
    { field: "Debt.debt_sum", headerName: t("form.results.debt.debt_sum") },
    { field: "Portfolio.name", headerName: t("form.results.portfolio.name") },
    { field: "Debt.Status.name", headerName: t("form.results.debt.status") },
    {
      field: "typ",
      headerName: t("form.results.law_act.typ"),
      valueGetter: (params) => {
        switch (params.value) {
          case 0:
            return "Не определено";
          case 1:
            return "Приказ";
          case 2:
            return "Иск";
          case 3:
            return "Правопреемство";
          case 4:
            return "Банкротство";
          default:
            return "Не определено";
        }
      },
    },
    {
      field: "Status",
      headerName: t("form.results.law_act.status"),
      valueGetter: (params) => {
        switch (params.row["typ"]) {
          case 0:
            return params.row["ActStatus.name"];
          case 1:
            return params.row["Status.name"];
          case 2:
            return params.row["ActStatus.name"];
          case 3:
            return params.row["ActStatus.name"];
          case 4:
            return params.row["ActStatus.name"];
          default:
            return params.row["ActStatus.name"];
        }
      },
    },
  ];
}

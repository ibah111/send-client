import { GridColDef } from "@mui/x-data-grid-pro";
import { t } from "i18next";

export default function getColumns(): GridColDef[] {
  return [
    { field: "person.id", headerName: t("form.results.person.id") },
    { field: "debt.id", headerName: t("form.results.debt.id") },
    { field: "law_act.id", headerName: t("form.results.law_act.id") },
    { field: "law_exec.id", headerName: t("form.results.law_exec.id") },
    { field: "person.fio", headerName: t("form.results.person.fio") },
    { field: "debt.contract", headerName: t("form.results.debt.contract") },
    { field: "debt.debt_sum", headerName: t("form.results.debt.debt_sum") },
    { field: "portfolio.name", headerName: t("form.results.portfolio.name") },
    { field: "debt.status", headerName: t("form.results.debt.status") },
    { field: "law_act.typ", headerName: t("form.results.law_act.typ") },
    { field: "law_act.status", headerName: t("form.results.law_act.status") },
    {
      field: "law_exec.court_doc_num",
      headerName: t("form.results.law_exec.court_doc_num"),
    },
    {
      field: "law_exec.executive_typ",
      headerName: t("form.results.law_exec.executive_typ"),
    },
    {
      field: "law_exec.court_date",
      headerName: t("form.results.law_exec.court_date"),
    },
  ];
}

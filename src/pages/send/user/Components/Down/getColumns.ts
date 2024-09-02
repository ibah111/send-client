import { GridColDef } from '@mui/x-data-grid-pro';
import { t } from 'i18next';

export default function getColumns(): GridColDef[] {
  return [
    { field: 'Person.id', headerName: t('form.results.person.id'), width: 70 },
    { field: 'Debt.id', headerName: t('form.results.debt.id'), width: 70 },
    {
      field: 'LawAct.id',
      headerName: t('form.results.law_act.id'),
      width: 70,
    },
    { field: 'id', headerName: t('form.results.law_exec.id'), width: 70 },
    {
      field: 'Person.fio',
      headerName: t('form.results.person.fio'),
      width: 200,
    },
    {
      field: 'LawExecPersonLink.DebtGuarantor.fio',
      headerName: t('form.results.debt_guarantor.fio'),
    },
    {
      field: 'Debt.contract',
      width: 150,
      headerName: t('form.results.debt.contract'),
    },
    {
      field: 'Debt.name',
      width: 200,
      headerName: t('form.results.debt.name'),
    },
    {
      field: 'Address',
      width: 200,
      headerName: t('form.results.address'),
      valueGetter: (params) =>
        params.row['Person.Addresses']?.[0]?.full_adr
          ? params.row['Person.Addresses']?.[0]?.full_adr
          : `АДРЕС НЕ ЗАПОЛЕН. НАДО НАЙТИ ДОЛГ ПО ID = ${params.row['Debt.id']}`,
    },
    {
      width: 150,
      field: 'LawAct.exec_number',
      headerName: 'Номер документа (приказа/иска) (номер СП)',
    },
    {
      width: 150,
      field: 'LawAct.court_sum',
      headerName: 'Сумма по решению суда',
      valueGetter(params) {
        const value = params.row['LawAct.court_sum'];
        if (value) return value;
        else return 'Не определена';
      },
    },
    {
      width: 150,
      field: 'Debt.debt_payments_sum',
      headerName: 'Общая сумма платежей',
      valueGetter(params) {
        const value = params.row['Debt.debt_payments_sum'];
        if (value) return value;
        else return 'Платежей нет';
      },
    },
    { field: 'Debt.debt_sum', headerName: t('form.results.debt.debt_sum') },
    { field: 'Portfolio.name', headerName: t('form.results.portfolio.name') },
    {
      field: 'Debt.StatusDict.name',
      headerName: t('form.results.debt.status'),
    },
    {
      field: 'LawAct.typ',
      headerName: t('form.results.law_act.typ'),
      valueGetter: (params) => {
        switch (params.value) {
          case 0:
            return 'Не определено';
          case 1:
            return 'Приказ';
          case 2:
            return 'Иск';
          case 3:
            return 'Правопреемство';
          case 4:
            return 'Банкротство';
          default:
            return 'Не определено';
        }
      },
    },
    {
      field: 'LawAct.Status',
      headerName: t('form.results.law_act.status'),
      width: 200,
      valueGetter: (params) => {
        switch (params.row['LawAct.typ']) {
          case 0:
            return params.row['LawAct.ActStatusDict.name'];
          case 1:
            return params.row['LawAct.StatusDict.name'];
          case 2:
            return params.row['LawAct.ActStatusDict.name'];
          case 3:
            return params.row['LawAct.ActStatusDict.name'];
          case 4:
            return params.row['LawAct.ActStatusDict.name'];
          default:
            return params.row['LawAct.ActStatusDict.name'];
        }
      },
    },
    {
      field: 'StateDict.name',
      headerName: t('form.results.law_exec.state'),
      width: 200,
    },
    {
      width: 300,
      field: 'court_doc_num',
      headerName: t('form.results.law_exec.court_doc_num'),
    },
    {
      width: 300,
      field: 'fssp_doc_num',
      headerName: t('form.results.law_exec.fssp_doc_num'),
    },
    {
      width: 300,
      field: 'ExecutiveTyp.name',
      headerName: t('form.results.law_exec.executive_typ'),
    },
    {
      field: 'court_date',
      headerName: t('form.results.law_exec.court_date'),
      type: 'date',
      valueGetter: (params) => new Date(params.value),
    },
  ];
}

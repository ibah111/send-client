export default function convertDate(value: moment.Moment) {
  return value
    ? value.toISOString()
      ? value.toISOString()
      : value.creationData().input
    : null;
}

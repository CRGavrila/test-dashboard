const dateConvertorToDayAndMonth = (date) => {
  const d = date.split('-');
  const month = new Date(date).toLocaleString('en-US', {
    month: 'short',
  })

  return `${d[2]} ${month}`;
}

export default dateConvertorToDayAndMonth;
const dateFormat = (date: string) => {
  return new Intl.DateTimeFormat('ko', { dateStyle: 'full' }).format(new Date(date));
};

export default dateFormat;

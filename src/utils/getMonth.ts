export const getMonth = (month: number): string => {
  const monthNames = [
    'Січ',
    'Лют',
    'Бер',
    'Кві',
    'Тра',
    'Чер',
    'Лип',
    'Сер',
    'Вер',
    'Жовт',
    'Лист',
    'Груд',
  ];
  return monthNames[month - 1];
}

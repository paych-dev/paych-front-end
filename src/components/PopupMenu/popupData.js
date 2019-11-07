export const headerMenu = [
  {
    title: 'Настройки',
    to: '/setting'
  },
  {
    title: 'Статистика',
    to: '/statistic'
  },
  {
    title: 'Выйти',
    callback: function () {
      localStorage.clear();
      window.location = '/login'
    }
  }
];

export const channelMenu = [
  {
    title: 'Отписаться',
    to: '/setting'
  },
  {
    title: 'Пожаловаться',
    to: '/statistic'
  },
];
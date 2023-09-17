export type TProject<T = TProjectGallary> = {
  id: string;
  mainImg: string;
  alt: string;
  name: string;
  stek: string[];
  myWork: string[];
  description: string;
  gallary: T[];
};

export type TProjectGallary = {
  src: string;
  alt: string;
};

export const dataProjects = [
  {
    id: '1',
    mainImg: 'holdem.wiki/0.jpg',
    alt: 'Сайт расчета покерных вариаций',
    name: 'Holdem.wiki',
    stek: ['Javascript', 'Nuxt 2.x', 'SCSS', 'ElementUI', 'Vuex', 'i18n'],
    description:
      'Простое и удобное браузерное приложение, которое предназначено для помощи игрокам в оттачивании навыков игры диапазонами в различных покерных ситуациях.',
    myWork: [
      'Стили переписаны на БЭМ',
      'Провел инкапсулякцию стилей компонентов',
      'Разработал страницу магазина, включая фильтры и сортировку',
      'Написал страницу товара',
      'Ручное тестирование',
    ],
    gallary: createGallaryList('holdem.wiki', 5, 'Сайт покера'),
  },
  {
    id: '2',
    mainImg: 'lesHoz/0.jpg',
    alt: 'CRM система',
    name: 'Складская система',
    stek: ['Javascript', 'Nuxt', 'ElementUI', 'SCSS', 'Vuex', 'TypeScript', 'Lodash', 'БЭМ'],
    description:
      'Для крупной компании разработана система товарного учета продукции. Начиная с приема продукции с документами и фотографиями, завершая формированием груза поезда и отправкой поставщикам.',
    myWork: [
      'Совместное участие в разработке архитектуры приложения',
      'Добавил авторизацию (OAuth)',
      'Разработал функционал раздела базовых справочников',
      'Разработал часть функционала по приемке поездов с грузом, учету грузов (таблицы с характеристиками груза), добавления фотоотчетов и т.д.',
    ],
    gallary: createGallaryList('lesHoz', 9, 'CRM система'),
  },
  {
    id: '3',
    mainImg: 'landings/0.jpg',
    alt: 'landings',
    name: 'Лендинги',
    stek: ['Javascript', 'SCSS', 'JQuery', 'БЭМ'],
    description: 'Создание лендингов и посадочных страниц',
    myWork: ['Свертсал 6 лендингов'],
    gallary: createGallaryList('landings', 0, 'landings'),
  },
  {
    id: '4',
    mainImg: 'personaSite/0.jpg',
    alt: 'Personal site',
    name: 'Авторский Сайт-визитка',
    stek: ['Javascript', 'Nuxt', 'CSS', 'ElementUI', 'БЭМ'],
    description: 'Создал сайт визитку для архитектора, с возможностью подключения любого функционала',
    myWork: ['Создание сайта с "нуля"', 'Деплой проекта на хостинг'],
    gallary: createGallaryList('personaSite', 2, 'personaSite'),
  },
  {
    id: '5',
    mainImg: 'stroyCompany/0.jpg',
    alt: 'BuildingSite',
    name: 'Сайт строительной фирмы',
    stek: ['Javascript', 'Vue', 'Vuex', 'SCSS', 'TypeScript', 'ElementUI', 'Яндекс-карты'],
    description:
      'Сайт строительной фирмы с описанием оказываемых услуг, формой обратной связи, демонстрационными видео и блоком новостей',
    myWork: [
      'Доработал логику и верстку части страниц для демонстрации услуг',
      'Добавил Яндекс-карты',
      'Доработал функционал личного кабинета (блок работы с историей заказов и оплат)',
    ],
    gallary: createGallaryList('stroyCompany', 2, 'stroySite'),
  },
  {
    id: '6',
    mainImg: 'eater/0.jpg',
    alt: 'BuildingSite',
    name: 'Сервис по доставке еды',
    stek: ['Javascript', 'JQuery', 'SCSS', 'Vue', 'Pinia', 'TypeScript'],
    description:
      'Сервис по доставке еды, который представляет из себя готовый модуль, который может быть интегрирован на сайт или работать отдельно',
    myWork: [
      'Добавил систему скидок и бонус-кодов в личном кабинете и на сайте',
      'Добавил в личном кабинете историю покупок и функционала по работе с ней (фильтры)',
      'Нашёл и устранил многочисленные расхождения верстки с макетом Figma',
      'Участие в переходе на новый стек (обсуждение стека, планирование архитектуры, частичная разработка)',
      'Совмещение должности PM',
    ],
    gallary: createGallaryList('eater', 4, 'eater'),
  },
];

/**
 * Формирует список файлов для галереи
 * @param {string} folder  папка в которой лежат файлы проекта
 * @param {number} count название последнего файла. Отчет должне начинаться должен начинаться с 0
 * @param {string} descr описание которое будет вставлено в alt
 * @returns {Array<IGallary> } массив изображений для галереи
 */

function createGallaryList(folder: string, count: number, descr: string): TProjectGallary[] {
  const data: TProjectGallary[] = [];
  for (let i = 0; i < count + 1; i++) {
    data.push({
      src: `../${folder}/${i}.jpg`,
      alt: descr,
    });
  }
  return data;
}

// Вставляем это для этого: Импортируем функции для создания маршрутизатора
import { createRouter, createWebHistory } from 'vue-router';
// Вставляем это для этого: Импортируем наши компоненты страниц, которые будут отображаться по маршрутам
import HomeView from '../components/Home.vue';
import PhotosView from '../components/Photos.vue';
import VideoView from '../components/Video.vue';

// Вставляем это для этого: Определяем массив маршрутов. Каждый объект - это один маршрут.
const router = createRouter({
  // Вставляем это для этого: createWebHistory создает историю навигации, используя History API браузера.
  // Это обеспечивает "чистые" URL (например, /photos вместо /#/photos).
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // Вставляем это для этого: URL-путь для этого маршрута (корневой путь)
      name: 'home', // Вставляем это для этого: Уникальное имя маршрута (полезно для программной навигации)
      component: HomeView // Вставляем это для этого: Компонент, который будет отображаться, когда активен этот маршрут
    },
    {
      path: '/photos',
      name: 'photos',
      component: PhotosView
    },
    {
      path: '/video',
      name: 'video',
      component: VideoView
    },
    // Дополнительные маршруты из вашего макета (хотя мы не создавали компоненты для них, это пример):
    // {
    //   path: '/specialists',
    //   name: 'specialists',
    //   component: () => import('../components/PlaceholderPage.vue') // Пример ленивой загрузки компонента
    // },
    // {
    //   path: '/portfolio', // Соответствует "Лучшие работы"
    //   name: 'portfolio',
    //   component: PhotosView // Можно использовать PhotosView как временное решение
    // },
    // {
    //   path: '/tariffs',
    //   name: 'tariffs',
    //   component: () => import('../components/PlaceholderPage.vue')
    // }
  ]
});

// Вставляем это для этого: Экспортируем настроенный маршрутизатор, чтобы его можно было использовать в main.js
export default router;

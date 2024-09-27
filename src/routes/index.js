import DefaultLayout from '~/Layouts/DefaultLayout';
import { Home, MangaDetail } from '~/pages';

const routes = [
    {
        component: Home,
        path: '/',
        layout: DefaultLayout,
    },
    {
        component: MangaDetail,
        path: '/manga-detail',
        layout: DefaultLayout,
    },
];

export default routes;

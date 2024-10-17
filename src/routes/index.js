import DefaultLayout from '~/Layouts/DefaultLayout';
import ReadingLayout from '~/Layouts/ReadingLayout';
import { Home } from '~/pages';
import Reading from '~/pages/Reading';

const routes = [
    {
        component: Home,
        path: '/',
        layout: DefaultLayout,
    },
    {
        component: Reading,
        path: '/doctruyen',
        layout: ReadingLayout,
    },
];

export default routes;

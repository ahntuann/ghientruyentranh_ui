import DefaultLayout from '~/Layouts/DefaultLayout';
import LoginRegisterLayout from '~/Layouts/LoginRegisterLayout';
import ReadingLayout from '~/Layouts/ReadingLayout';
import { Home, LoginRegister, Reading } from '~/pages';

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
    {
        component: LoginRegister,
        path: '/login',
        layout: LoginRegisterLayout,
    },
];

export default routes;

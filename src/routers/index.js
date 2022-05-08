import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import upload from '~/page/upload';
import { OnlyHeaderLayput } from '~/Components/layouts';

const publicRouters = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: upload, layout: OnlyHeaderLayput },
];

const privateRouters = [];

export { publicRouters, privateRouters };

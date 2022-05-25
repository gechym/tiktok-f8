import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import upload from '~/page/upload';
import { OnlyHeaderLayput } from '~/Components/layouts';
import routers from '~/config/router';

const publicRouters = [
    { path: routers.home, component: Home },
    { path: routers.following, component: Following },
    { path: routers.profire, component: Profile },
    { path: routers.upload, component: upload, layout: OnlyHeaderLayput },
];

const privateRouters = [];

export { publicRouters, privateRouters };

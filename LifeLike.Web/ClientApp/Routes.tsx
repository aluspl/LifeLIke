import * as React from 'react';
import {Route} from 'react-router-dom';
import {Layout} from './Layout/Layout';
import {HomeLayout} from './Home/HomeLayout';

import {PostLayout} from "./Page/PostLayout";
import {PageLayout} from "./Page/PageLayout";
import {RSSLayout} from "./RSS/Layout";

import {PostDetailLayout} from "./Page/PostDetailLayout";


import {LogLayout} from './Log/LogLayout';
import {LogDetailLayout} from './Log/LogDetailLayout';

import {VideoLayout} from './Video/VideoLayout';


import {AlbumLayout} from "./Album/AlbumLayout";

export const routes =
    <Layout>
        <Route exact path='/' component={HomeLayout}/>
        <Route path='/Index' component={HomeLayout}/>
        <Route path='/Photos' component={AlbumLayout}/>
        <Route path='/Albums' component={AlbumLayout}/>
        <Route path='/Videos' component={VideoLayout}/>
        <Route path='/Logs' component={LogLayout}/>
        <Route exact path='/RSS' component={RSSLayout}/>
        <Route exact path='/RSS/:shortname' component={RSSLayout}/>

            <Route path='/Log/:shortname' component={LogDetailLayout}/>

        <Route path='/Album/:shortname' component={AlbumLayout}/>

        <Route exact path='/Pages' component={PageLayout}/>
        <Route exact path='/Pages/Dev' component={PageLayout}/>

            <Route path='/Page/:shortname' component={PostDetailLayout}/>

        <Route path='/Posts' component={PostLayout}/>
        <Route path='/Post/:shortname' component={PostDetailLayout}/>


        {/*TODO: Logs / Posts and Pages / Details */}
    </Layout>;

import * as React from 'react';
import ListView from './List/ListView';
import EmptyListView from '../../Shared/Components/EmptyListView/EmptyListView';
import LoadingView from '../../Shared/Components/LoadingView/LoadingView';
import Item from '../Models/Log';

interface ListContainerState {
    loadingData: boolean,
    items: Item[]
}

class ListContainer extends React.Component<any, ListContainerState> {
   
    private paths = {
        getList: '/Log/List'
    };

    constructor() {
        super();

        this.state = {
            loadingData: true,
            items: []
        };
    }
    public componentDidMount() {
        fetch(this.paths.getList, { 
            credentials: 'include' })
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                this.setState((state, props) => {
                    state.items = JSON.parse(data);
                    state.loadingData = false;
                    console.log(state.items);
                });
            });
    }
    public render() {
        const hasItems = this.state.items.length > 0;
        return (
            this.state.loadingData ?
                <LoadingView Title={'Logs'}/> :
                hasItems ? 
                    <ListView items= {this.state.items} /> :  <EmptyListView />
        )
    }
    public componentDidCatch(error, info)
    {
        console.log(error);
        console.log(info)
    }
}

export default ListContainer;
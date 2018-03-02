import * as React from 'react';


import Item from '../../Models/Page';
import ListItem from './ListItem';

interface ListProps {
    items: Item[]
}

class ListView extends React.Component<ListProps, any> {

    render() {
        return  <section className='row'>
            <div className='col-md-12'>
                {
                    this.props.items.map(item => {
                        return <ListItem key={item.Id} item={item}/>
                    })
                }
            </div>
        </section>
    }

}

export default ListView;
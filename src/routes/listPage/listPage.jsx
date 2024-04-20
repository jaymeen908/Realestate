
import { listData } from '../../lib/dummydata';
import './listPage.scss';
import Map from '../../components/map/map';
import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter';


function ListPage() {
    const data = listData;

    return ( 
        <div className="listPage">
            <div className='listContainer'>
                <div className='wrapper'>
                    <filter />
                    {data.map(item => <Card key={item.id} item={item} />)}
                </div>
            </div>
            <div className='mapContainer'>
                <Map items={data} />
            </div>
        </div>
    );
}

export default ListPage;

import Map from '../../components/navebar/map/map';
import Card from '../../components/navebar/card/Card';
import Filter from '../../components/navebar/filter/Filter';
import { listData } from '../../lib/dummydata';
import './listPage.scss';
// import Filter from '../../components/navebar/filter/Filter';
// import Card from '../../components/navebar/card/Card';
// import Map from '../../components/navebar/map/Map';

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

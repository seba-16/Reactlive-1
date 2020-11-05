import React, {Component} from 'react';
import Filter from './filter'
import Sortby from './sortby';
import Card from './card';


class Container extends Component{
    render(){
        return(
            <div className=" mt-5">
                <div className="row">                   
                    <div className="col-2"><br></br><Filter/></div>
                    <div className="col-10">
                        <div className="row">
                            Sort By&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Sortby sortby="Electronics"/>&nbsp;&nbsp;&nbsp;
                        <Sortby sortby="Mobile"/>&nbsp;&nbsp;&nbsp;
                        <Sortby sortby="Laptop"/>&nbsp;&nbsp;&nbsp;
                        <Sortby sortby="Audio"/>&nbsp;&nbsp;&nbsp;
                        <Sortby sortby="Camera"/>&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-3"><Card img="https://www.gizmochina.com/wp-content/uploads/2019/10/oneplus_8_pro-.png" title="Oneplus"/></div>
                            <div className="col-md-3"><Card img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-spacegray_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459944179" title="Iphone"/></div>
                            <div className="col-md-3"><Card img="https://i01.appmifile.com/webfile/globalimg/in/cms/AB364A54-1B83-9A20-B4F3-05BCE9135921.jpg" title="Redmi"/></div>
                            <div className="col-md-3"><Card img="https://m.media-amazon.com/images/I/81hcorK3VuL._AC_SS350_.jpg" title="Realme"/></div>
                            <div className="col-md-3 mt-5"><Card img="https://www.gizmochina.com/wp-content/uploads/2019/10/oneplus_8_pro-.png" title="Oneplus"/></div>
                            <div className="col-md-3 mt-5"><Card img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-spacegray_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459944179" title="Iphone"/></div>
                            <div className="col-md-3 mt-5"><Card img="https://i01.appmifile.com/webfile/globalimg/in/cms/AB364A54-1B83-9A20-B4F3-05BCE9135921.jpg" title="Redmi"/></div>
                            <div className="col-md-3 mt-5"><Card img="https://m.media-amazon.com/images/I/81hcorK3VuL._AC_SS350_.jpg" title="Realme"/></div>
                            <div className="col-md-3 mt-5"><Card img="https://www.gizmochina.com/wp-content/uploads/2019/10/oneplus_8_pro-.png" title="Oneplus"/></div>
                            <div className="col-md-3 mt-5"><Card img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-spacegray_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459944179" title="Iphone"/></div>
                            <div className="col-md-3 mt-5"><Card img="https://i01.appmifile.com/webfile/globalimg/in/cms/AB364A54-1B83-9A20-B4F3-05BCE9135921.jpg" title="Redmi"/></div>
                            <div className="col-md-3 mt-5"><Card img="https://m.media-amazon.com/images/I/81hcorK3VuL._AC_SS350_.jpg" title="Realme"/></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Container;
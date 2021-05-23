import React from 'react'

function Card(props) {
    var cardList = props.List;

function closebtn(e){
props.parentCallback(e.target.id)
}

    return (
        <div>
            <div class="row" style={{ marginTop: "3%" }}>
                {
                    cardList.map(i =>
                        <div class="col-4">
                            <div class="card" style={{ marginTop: "3%" }}>
                                <div class="card-header">
                                    <div class="row">
                                        <div class="col-8"> <h5 class="card-title">{'Mineral: ' + i.metal}</h5></div>
                                        <div class="col">
                                            <button onClick={closebtn} id={i.ID} type="button" class="btn btn-sm btn-danger">Close</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">{'Price: ' + i.price + ' ' + i.currency}</p>
                                    <p class="card-text">{'Exchange: ' + i.exchange}</p>
                                    <p class="card-text">{'CH: ' + i.ch}</p>
                                    <p class="card-text">{'Date: ' + i.date}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
export default Card
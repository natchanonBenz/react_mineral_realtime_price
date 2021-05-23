import React, { useState } from 'react'
import axios from 'axios'
import Card from './Card';

function Content() {
    const [RequestData, SetRequestData] = useState([{ mType: '', mCurrencyCode: '', mDate: '' }])
    const [data, setData] = useState([]);
    const [count, setcountData] = useState(0);
    var [CardList, setCardData] = useState([]);

    let minType_list = [{ object: '- please select -', value: '' }, { object: 'XAU - Gold', value: 'XAU' }, { object: 'XAG - Silver', value: 'XAG' },
    { object: 'XPT - Platinum', value: 'XPT' }, { object: 'XPD - Palladium', value: 'XPD' }]

    let currency_list = [{ object: '- please select -', value: '' }, { object: 'JPY - Janpanese yen', value: 'JPY' }, { object: 'SGD - Singapore Dollar', value: 'SGD' },
    { object: 'USD - United States Dollar', value: 'USD' }]

    async function submitbtn(e) {
        let mintype = RequestData.mType;
        let mcur = RequestData.mCurrencyCode;
        let mdate = RequestData.mDate;
        let url = 'https://www.goldapi.io/api/' + mintype + '/' + mcur + '/' + mdate
        let res = await axios.get(url, {
            headers: {
                'x-access-token': 'goldapi-b3cme2ukov8jlns-io'
            }
        });
        let ListID = addingObjectID(res.data);
        setCardData([...CardList, ListID])
        e.preventDefault();
    }

    function addingObjectID(ListTemp) {

        let tempValue = 0
        try {

            tempValue = CardList[CardList.length - 1].ID + 1
        }
        catch (err) {
            console.log(err)
        }

        ListTemp['ID'] = tempValue
        return ListTemp
    }

    function Closebutton(id) {
        setCardData(CardList.splice(id, 1))
    }

    return (
        <div>
            <div class="row" style={{ marginTop: "1%" }}>
                <div class="col-1"></div>
                <div class="col-10">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-3">
                                    <label for="cars">Mineral Type:</label>
                                    <select style={{ marginLeft: "2%", width: '80%' }} onChange={e => SetRequestData({ ...RequestData, mType: e.target.value })}>
                                        {
                                            // minType_list.map(index)
                                            minType_list.map(i => <option value={i.value}>{i.object}</option>)
                                        }
                                    </select>
                                </div>
                                <div class="col-3">
                                    <label for="cars">Currency Code:</label>
                                    <select style={{ marginLeft: "2%", width: '80%' }} onChange={e => SetRequestData({ ...RequestData, mCurrencyCode: e.target.value })}>
                                        {
                                            currency_list.map(i => <option value={i.value}>{i.object}</option>)
                                        }
                                    </select>
                                </div>
                                <div class="col-3">
                                    <label for="cars">Date:</label>
                                    <input style={{ marginLeft: "2%", width: '100%' }} type="date" onChange={e => SetRequestData({ ...RequestData, mDate: e.target.value })}></input>
                                </div>
                                <div class="col">
                                    <button style={{ marginLeft: "2%", width: '100%', height: '100%' }} onClick={submitbtn} class="btn btn-secondary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1"></div>
            </div>
            <div class="row">
                <div class="col-2">
                </div>
                <div class="col-8">
                    <Card parentCallback={Closebutton} List={CardList} />
                </div>
                <div class="col-2">
                </div>
            </div>
        </div>
    );
}
export default Content
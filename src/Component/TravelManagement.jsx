import '../css/TravelManagement.scss'
import Header from './Header';
import Bottom from './Bottom';
import { React,useEffect,useRef,useState } from 'react';

function TravelListForm({TravelInfo, setTravelList, TravelList, AllSelectBool}) {

    const checkboxInfo = useRef();

    function RemoveTravelList() {
       setTravelList(TravelList.filter((List)=>List.id !== TravelInfo.id));
    }

    function ChangeCheckInfo(e) {
        setTravelList(TravelList.map((List)=>List.id == TravelInfo.id ? {...List, checkBool: e.target.checked} : List ));
        
    }

    

    return (
        <div className="ListForm">
            <div className="ViewBox">
                <input type="checkbox" onChange={ChangeCheckInfo} name='TravelList' checked={TravelInfo.checkBool}/>
                
                <img src={TravelInfo.TravelImage} alt=""/>

                <div className="TextBox">
                    <h3>{TravelInfo.TravelName}</h3>
                    <h4>{TravelInfo.TravelSubName}</h4>
                </div>
            </div>

            <div className="BtnBox">
                <button onClick={RemoveTravelList}>삭제</button>
            </div>
        </div>
    )
}


function TravelManagement() {
    
    const [TravelList, setTravelList] = useState([
        {
            id: 1,
            TravelName: "대구 광역시",
            TravelSubName: "스파크랜드",
            TravelImage: "/img/Daegu.jpg",
            checkBool: false
        },
        {
            id: 2,
            TravelName: "대구 광역시",
            TravelSubName: "김광석 그리기 거리",
            TravelImage: "/img/Daegu.jpg",
            checkBool: false
        },
        {
            id: 3,
            TravelName: "대구 광역시",
            TravelSubName: "앞산",
            TravelImage: "/img/Daegu.jpg",
            checkBool: false
        },
    ]); 
    
    const [AllSelectBool, setAllSelectBool] = useState(false);

    function SelectRemove() {
        setTravelList(TravelList.filter((List)=>List.checkBool == false))
    }

    useEffect(()=>{
        console.log(AllSelectBool);
    }, [AllSelectBool]);

    function AllSelect(e) {
        if(AllSelectBool == false)
        {
            setAllSelectBool(e.target.checked);
            setTravelList(TravelList.map((List)=>({...List, checkBool: e.target.checked})));
        } else {
            setAllSelectBool(e.target.checked);
            setTravelList(TravelList.map((List)=>({...List, checkBool: e.target.checked})))
        }
    }



    return(
        <div className="TravelManagementBigBox">
            <Header fontColor="black"/>
            {/* 내용이 들어갈 곳 */}
            <div className="TravelManagementContentBox">
                <h3 className="Title">여행 관리</h3>
                
                <div className="SelectAndDeleteBox">
                    <div>
                        <input type="checkbox" name='TravelList' onClick={AllSelect} />
                        <span>전체선택 총 {TravelList.length}개</span>
                    </div>
                    
                    <span onClick={SelectRemove}>선택삭제</span>
                </div>

                {TravelList.length > 0 ? TravelList.map((List)=><TravelListForm AllSelectBool={AllSelectBool} key={List.id} TravelList={TravelList} setTravelList={setTravelList} TravelInfo={List}/>) : <h3 className='NoTravelList'>아무것도 없어요 ㅜㅜ</h3>}
            </div>
            <Bottom/>
        </div>
    );
}

export default TravelManagement;
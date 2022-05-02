import React from "react";
import Bottom from "./Bottom";
import Header from "./Header";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
// css
import "../css/ReviewList.scss";

function ReviewForm({review}) {

    return (
        <div className="UserReviewForm">
                    
        {/* 사용자 정보 :) 유저 이미지, 이름, 별점 */}
        <div className="userInfo">  
          <div className="BoxOne">
            <img src={review.ReviewImg} alt="유저 이미지" />
            <div className="NameAndReview">
                <h3 className="userName">{review.UserName}</h3>
                <p className="ReviewPoint">★★★★★</p>
            </div>
          </div>

            <div className="Date">
                {review.ReviewDate}
            </div>
        </div>

        <div className="ReviewContent">
          {review.ReviewContent}

        </div>

        <div className="BoxTwo">
            <div className="ReviewBtn">
                <button onClick={()=>{console.log("A")}}>GOOD</button>
                <button onClick={()=>{console.log("A")}}>Bad</button>
            </div>             

            <div className="more">
              <span onClick={()=> {console.log("AA")}}>더보기</span>
            </div>
        </div>
    </div>
    )
}

function ReviewList() {

    const [review, setReview] = useState([ 
        {
            id: 1,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리',
            ReviewDate: '2022.04.28',
            ReviewContent: '너무 재미있었어요'
        },
        {
            id: 2,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewContent: '너무 재미있었어요'
        },
        {
            id: 3,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewContent: '너무 재미있었어요'
        },
        {
            id: 4,
            ReviewImg: '/img/Yeosu.jpg',
            UserName: '리리2',
            ReviewDate: '2022.04.29',
            ReviewContent: '너무 재미있었어요'
        }
    ]);

    const [num, setNum] = useState(0);
    return(
        <>
            <Header/>
            
            <div className="ReviewTopArea">
                <h1 className="ReviewLocation">대구광역시 </h1>

                <div className="Score">
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                </div>
                <button>리뷰 작성</button>

            </div>

            <div className="ReviewMiddleArea">
                
                <div className="UmmName">
                     <h2 className="ReviewCount">{review.length}개</h2>
                     
                     <ul>
                         <li>최신순</li>
                         <li>추천순</li>
                     </ul>
                </div>
                {/* 리뷰내용들 */}
               {review.map(a => (
                      <ReviewForm review={a} key={a.id} />
                ))}


            </div>

            <Bottom/>
        </>
    )
}

export default ReviewList;
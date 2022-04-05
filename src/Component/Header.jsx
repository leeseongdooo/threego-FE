import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React,{useState} from 'react';

import {AiOutlineMenu} from "react-icons/ai";
import { useEffect} from 'react';
function Header() {

    const [isOpen, setMenu] = useState(false); // 메뉴창이 열린지 안열린지 판단

    const toggleMenu = () => {
        setMenu(isOpen => !isOpen);
    }

    let y = window.scrollY;

    const tempStyle={
        background:"black",
        color: "white",
    }

    // Y축 스크롤값을 확인하기 위해
    let [Scrolly, setScrolly] = useState(0);
 
    const handleFollow = () => {
        setScrolly(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
    }

    useEffect(() => {
        console.log("ScrollyScrolly is ",Scrolly); // ScrollY가 변화할때마다 값을 콘솔에 출력
    }, [Scrolly])

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow);
        }
        watch(); // addEventListener 함수를 실행
        return () => {
            window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
        }
    })


    return(
        <>
            <header className="Header" style={isOpen ? tempStyle : (Scrolly > 0) ? tempStyle : null}>
                <h3>Three Go</h3>
                <AiOutlineMenu className="menuIcon" onClick={() => toggleMenu()}/>
                <ul className={isOpen ? "show-menu" : "hide-menu"}>
                    <li>아직추가X</li>
                    <li>아직추가X</li>
                    <li>아직추가X</li>
                    <li>아직추가X</li>
                    <li>
                        <div className='loginBox'>
                            <button className='loginButton'>
                                <a href="https://m.mcdonalds.co.kr/kor/main.do">로그인</a>
                            </button>

                            <button className='loginButton'>
                                <a href="https://m.mcdonalds.co.kr/kor/main.do">회원가입</a>
                            </button>
                        </div>
                    </li>
            
                </ul>
               
            </header>
        </>
    )
}

export default Header;
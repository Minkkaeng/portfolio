// src/components/About.jsx
import React from 'react';
import { getImagePath } from '../utils/imagePath';

function About() {
   return (
      <div className="section-inner about-inner">
         <div className="section-header">
            <p className="eyebrow">Profile</p>
            <h2>I am</h2>
         </div>

         <div className="about-layout">
            <div className="about-photo">
               <div className="photo-placeholder">
                  <img src={getImagePath('/assets/photo.jpg')} alt="profile" className="profile-img" />
               </div>
            </div>

            <div className="about-card">
               <h3>소리 없이, 완벽하게.</h3>
               <p className="about-sub">팀 안에서 조용히 흐름을 읽고, 사용자의 관점으로 납득이 될 때까지 화면을 다듬습니다.</p>
               <p className="about-body">
                  심미안&가독성을 중요하게 생각합니다. 마크업, 레이아웃, 상태 흐름이 정리되어 있어야 안심합니다.
                  <br />
                  디자인과 개발 사이에 있는 애매한 부분을 직접 정의하고 구현하는 것을 좋아합니다.
               </p>

               <div className="about-badges">
                  <span>Deep focus</span>
                  <span>Ownership</span>
                  <span>Pixel + Code</span>
               </div>

               <div className="about-notes">
                  <p># 팀 프로젝트 Play Farm에서 UI 흐름과 퍼블리싱 리딩</p>
                  <p># Figma 없이도 레이아웃을 코드로 설계 가능</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;

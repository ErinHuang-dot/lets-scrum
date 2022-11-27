import React from 'react';
import './product-backlog.scss';

export default function ProductBacklog() {
  const url = process.env.PUBLIC_URL
  return (
    <div className="section-product-backlog">
      <div className="container">
        {/* role PO & message box */}
        <div className="message-container">
          <img src={url + "/images/role/hole.png"} alt="" className="hole"/>
          <img src={url + "/images/role/role_po_light.png"} alt="" className="role-po-light"/>
          <img src={url + "/images/role/role_po.png"} alt="" className="role-po"/>      
          <div className="message-content">
            <h3 className="h3 message-content-tag">PO</h3>
            <div className="body-text-order1 d-none">
              <p className="body-text">
                <span className="highlight-text">\ 碰 /  </span>
                我是短衝小精靈， 開發 A 組的 PO。</p>
              <p className="body-text">
                <span className="highlight-text">PO 也就是產品負責人（Product Owner）</span> 
                ， 產品負責人會負責評估產品待辦清單的價值</p>
              <p className="body-text">與重要性，依序排列要執行的優先順序，對齊產品目標。 最後排出產品待辦清單</p>
              <p className="body-text">（Product Backlog） 唷！</p>
            </div>
            <div className="body-text-order2 d-none">
              <p className="body-text">
                剛好我最近手邊有一個 「 人才招募系統 」 的案子， 我才剛列出了
                <span className="highlight-text">「 產品需求清單 」</span>。 
              </p>
              <p className="body-text">既然你都來了， 來試試看調整產品優先度， 排出產品待辦清單吧！</p>
            </div>
            <div className="body-text-order3">
              <p className="body-text">在這階段我們要把需求放進產品待辦清單， 並調整其優先順序。</p>
              <p className="body-text">對了！ 我們公司也推薦使用
                <img src={url + "/images/logo/jira_logo.png"} alt=""/>
                來做任務的管理呢！</p>
            </div>
            <div className="body-text-order4 d-none">
              <p className="h2">換你來試試看吧！</p>
              <p className="body-text">提示： 請把需求拖移至產品待辦清單， 並調整其優先順序。</p>
            </div>
            <div className="body-text-order5 d-none">
              <p className="h2">哇喔完成惹， 尼太棒ㄌ！ 我們繼續吧！</p>
            </div>
            <img src={url + "/images/icon/ic_continue_po.svg"} alt="" className="arrow-down d-none"/>
          </div>
        </div>
        <span className="btn-hint highlight-text d-none">點擊畫面任意處繼續</span>
        <button className="btn-action body-text d-none">準 備 好 了</button>
        {/* backlog to-do-list */}
        <div className="backlog-container">
          <div className="backlog-title">
            <h2 className="h2">產品待辦清單</h2>
            <p className="caption-text">Product Backlog</p>
          </div>
          <div className="backlog-content">
            <div className="backlog-content-s">
              <p className="caption-text">高</p>
              <p className="caption-text">低</p>
            </div>
            <ul className="backlog-content-e">
              <li className="body-text fill-in">前台職缺列表、應徵</li>
              <li className="fill-empty"></li>
              <li className="fill-empty"></li>
              <li className="fill-empty"></li>
            </ul>
          </div>
          <p className="body-text backlog-item-float float1">應徵者的線上履歷編輯器</p>
          <p className="body-text backlog-item-float float2">後台職缺管理功能（資訊上架、<br/>下架、顯示應徵者資料）</p>
          <p className="body-text backlog-item-float float3">會員系統（登入、註冊、權限管理）</p>
          <p className="body-text backlog-item-float float4">前台職缺列表、應徵</p>
        </div>
      </div>
    </div>    
  )
}
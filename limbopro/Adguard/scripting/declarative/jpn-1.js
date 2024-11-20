/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: jpn-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".pum-open\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#ad\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"#body-in > div[class^=\\\"d-contents\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#playertopads\",\"action\":[\"style\",\"height: 51px!important; position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".ad970x250\",\"action\":[\"style\",\"visibility: hidden !important; height: 0 !important; margin-bottom: 45px !important;\"]}"],["{\"selector\":\"#scroll.fixed\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".pc_block[style^=\\\"position: sticky\\\"]\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\".vjs-controls-disabled.vjs-error .vjs-control-bar\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".p-header-billboard\",\"action\":[\"style\",\"min-height: 0 !important;\"]}","{\"selector\":\".u-mb64 .p-new__row\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\"#top #head\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute!important;left: -4000px !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"display: block!important;\"]}","{\"selector\":\"body[style=\\\"display: none;\\\"]\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".footer-with-ad\",\"action\":[\"style\",\"padding-bottom: 10px !important;\"]}"],["{\"selector\":\"body > div[style=\\\"visibility: hidden;\\\"]\",\"action\":[\"style\",\"visibility: visible !important;\"]}"],["{\"selector\":\".csh_main\",\"action\":[\"style\",\"padding-top: 30px !important;\"]}"],["{\"selector\":\".top_banner_area\",\"action\":[\"style\",\"height: 44px !important\"]}"],["{\"selector\":\".gPr.u-mtbM\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".gPr_title.u-ttl01\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".p-dol .gNews_title.u-ttl01\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#sub\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#lower section.character ul.character_list li.standby\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\"#right\",\"action\":[\"style\",\"padding-top: 25px !important;\"]}"],["{\"selector\":\".gadget_topics > div.cont.last-child\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".adsense-container\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"#subProgram\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#sidebar-small[style^=\\\"height:\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".min-h-\\\\[250px\\\\]\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\".movie-watch\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".jackFix + div.siteContent\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".siteRanking-main\",\"action\":[\"style\",\"margin-left: 0!important;\"]}"],["{\"selector\":\"#CommonSideColumn_play-report___f_o9.CommonSideColumn_item__OI_xC:not(:first-child)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#main-container\",\"action\":[\"style\",\"padding: 0px 60px 80px !important;\"]}"],["{\"selector\":\".main_ad_head_wide\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\".with-ad[data-layout=\\\"list\\\"] .main-header\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".with-ad[data-layout=\\\"list\\\"][data-section-type=\\\"new-video\\\"] .content-wrap:nth-child(-1n+2)\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".app-container[aria-expanded=\\\"false\\\"] section.with-ad\",\"action\":[\"style\",\"width: calc(100% - 20px) !important;\"]}"],["{\"selector\":\".c-ad-103\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\"#entry[class^=\\\"e\\\"]\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}","{\"selector\":\"#new\",\"action\":[\"style\",\"position: static !important;\"]}","{\"selector\":\"#side[class^=\\\"s\\\"]\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#custom_html-48\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".plugin-freearea td[bgcolor] > div[style]\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#index_nav > h1\",\"action\":[\"style\",\"padding-top: 30px!important;\"]}","{\"selector\":\"body:not(.tp) > div#container > #main.template1\",\"action\":[\"style\",\"padding-top: 20px !important;\"]}"],["{\"selector\":\"#sidebar\",\"action\":[\"style\",\"min-height: unset !important;\"]}"],["{\"selector\":\"#left[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"div[style=\\\"width:730px;font-size:11pt;\\\"] > table[width=\\\"730\\\"]\",\"action\":[\"style\",\"width: 380px !important;\"]}"],["{\"selector\":\"body[style=\\\"margin-top:260px;\\\"]\",\"action\":[\"style\",\"margin-top: unset !important;\"]}"],["{\"selector\":\"#moduleFixedBnr[style^=\\\"height\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"body[style=\\\"padding: 0px 0px 154px;\\\"]\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}"],["{\"selector\":\".ads\",\"action\":[\"style\",\"display: block!important;height: 1px!important;\"]}","{\"selector\":\".listInfoR[style=\\\"margin-bottom: 10px; height: 400px;\\\"]\",\"action\":[\"style\",\"height: unset !important;\"]}"],["{\"selector\":\"#plugin2[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".nav-menu-width.margin.no-side-margin\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".side-ad-area.half-margin\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#left\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"padding-bottom: 354px !important;\"]}"],["{\"selector\":\".lsidebar[style^=\\\"min-height\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\"#wrap01\",\"action\":[\"style\",\"height: 2205px !important;\"]}","{\"selector\":\".tabpain[style=\\\"left: -260px; top: 280px;\\\"]\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\".tabpain[style=\\\"top: 550px; left: 0px;\\\"]\",\"action\":[\"style\",\"top: -1120px !important;\"]}"],["{\"selector\":\".adsepa\",\"action\":[\"style\",\"height: 0 !important;\"]}","{\"selector\":\".reply_txad\",\"action\":[\"style\",\"border: 0 !important;\"]}","{\"selector\":\".thread_txad\",\"action\":[\"style\",\"border: 0 !important;\"]}"],["{\"selector\":\"body[style^=\\\"overflow:\\\"]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#cb-container\",\"action\":[\"style\",\"padding-top: 110px !important;\"]}","{\"selector\":\".ovni-header\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#cgrig_base_pic\",\"action\":[\"style\",\"grid-auto-rows: auto !important;\"]}","{\"selector\":\"#cgrig_cont\",\"action\":[\"style\",\"grid-row-start: auto !important; grid-row-end: auto !important;\"]}","{\"selector\":\"#cgrig_left\",\"action\":[\"style\",\"grid-row-start: 3 !important; grid-row-end: 7 !important;\"]}"],["{\"selector\":\".right-container\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".header\",\"action\":[\"style\",\"height: 50px !important;\"]}"],["{\"selector\":\"td[width=\\\"160\\\"] [style*=\\\"position\\\"] [id][style] ~ [onclick]\",\"action\":[\"style\",\"pointer-events: none !important;\"]}"],["{\"selector\":\"#main\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}","{\"selector\":\"#side[class^=\\\"ad\\\"]\",\"action\":[\"style\",\"border-top: 0 !important;\"]}","{\"selector\":\".adh\",\"action\":[\"style\",\"border-top: 0 !important;\"]}"],["{\"selector\":\"div[id^=\\\"div-gpt-\\\"]\",\"action\":[\"style\",\"min-height: 1px !important;\"]}"],["{\"selector\":\"div[style=\\\"margin: auto; width: 930px; height: 265px; text-align: center;\\\"]\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"display: block !important; width: 100% !important; height: 100% !important;\"]}"],["{\"selector\":\".fix_box-m\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".clearfix.contents\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\"#sidebar[style^=\\\"height:\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"body[style=\\\"overflow-y: hidden;\\\"]\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"],["{\"selector\":\".sub > div.section > span.heading\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body[style=\\\"position: fixed;\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"div#wrapper.on\",\"action\":[\"style\",\"padding-top: 450px !important;\"]}","{\"selector\":\"div.on h1\",\"action\":[\"style\",\"top: 386px !important;\"]}","{\"selector\":\"div.on nav#path\",\"action\":[\"style\",\"top: 330px !important;\"]}"],["{\"selector\":\"body.header_bg_ad.modal-open\",\"action\":[\"style\",\"padding-right: 0 !important; overflow: auto!important;\"]}"],["{\"selector\":\".wym-v2022__header.is-scroll-up ~ .wym-v2022__footer-fixed\",\"action\":[\"style\",\"bottom: 0 !important;\"]}"],["{\"selector\":\".sponsored-loop300x250\",\"action\":[\"style\",\"position: absolute !important; left: -4000px !important;\"]}"],["{\"selector\":\".l-contentsSub[style^=\\\"height\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"td[style^=\\\"vertical-align\\\"] [onclick]:has(> img[src*=\\\"/clip_\\\"] + b):not(:has(b td > a[href]))\",\"action\":[\"style\",\"pointer-events: none !important;\"]}","{\"selector\":\"td[style^=\\\"vertical-align\\\"] [onmousedown]:has(> img[src*=\\\"/clip_\\\"] + b):not(:has(b td > a[href]))\",\"action\":[\"style\",\"pointer-events: none !important;\"]}"],["{\"selector\":\"#sidebar[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#side-r\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#contents\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"#subAInner[style]\",\"action\":[\"style\",\"position: static !important;margin-top: auto !important;\"]}","{\"selector\":\"._2pnTOjTu\",\"action\":[\"style\",\"width: auto !important;\"]}"],["{\"selector\":\"#adcheck.ads-ad\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"#_popIn_recommend_right\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\".c167:nth-child(2)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".c213:nth-child(2)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".c422:nth-child(2)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".right-container[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"._fukugan_grid\",\"action\":[\"style\",\"height: auto!important;\"]}"],["{\"selector\":\"div[class=\\\"block recommend\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\".aa_footer\",\"action\":[\"style\",\"padding-bottom: unset !important;\"]}"],["{\"selector\":\".hustle-no-scroll\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#wholeHeaderPane\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#globalHeader\",\"action\":[\"style\",\"min-height: 0 !important; margin: 0 !important;\"]}"],["{\"selector\":\".ad_common_1_970x250\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important;\"]}","{\"selector\":\"div[class^=\\\"detail_photo_\\\"]\",\"action\":[\"style\",\"height: 100% !important; max-height: calc(100vh - 70px - 20px) !important;\"]}","{\"selector\":\"img[class^=\\\"detail_mainImage\\\"]\",\"action\":[\"style\",\"max-height: calc(100vh - 70px - 20px) !important;\"]}"],["{\"selector\":\"#result_nav\",\"action\":[\"style\",\"bottom: 0 !important;\"]}"],["{\"selector\":\"#is_header_banner\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".center_column\",\"action\":[\"style\",\"min-height: 1500px!important;\"]}"],["{\"selector\":\".block-sub-ad + .block-sub\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".block-sub-recommend[style=\\\"margin-top:30px;\\\"]\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".relatedLinksPhoto > ul#orecView2\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".mno-pitari\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"ul.mod-grid2:has(> li.block-list-a-a__list__item > div.block-banner-b-a)\",\"action\":[\"style\",\"width: 50% !important;\"]}","{\"selector\":\"ul.mod-grid2:has(> li.block-list-a-a__list__item > div[class$=\\\"_InRecommend\\\"])\",\"action\":[\"style\",\"width: 50% !important;\"]}"],["{\"selector\":\".s-ad\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"#common-header > div[class^=\\\"common-header-pc-\\\"]\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#tx7player[style*=\\\"opacity: 0.\\\"]\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\"nav:not(.fixed):not([id])\",\"action\":[\"style\",\"top: 132px !important;\"]}"],["{\"selector\":\"div[class^=\\\"LayoutContentInner-sc\\\"] > div[class^=\\\"Promotion-sc\\\"]\",\"action\":[\"style\",\"grid-template-columns: 1fr 0 !important;\"]}"],["{\"selector\":\".isJack\",\"action\":[\"style\",\"margin-top: 0!important;\"]}"],["{\"selector\":\"body.withsky div#shellcontent[style]\",\"action\":[\"style\",\"right: 0 !important;\"]}"],["{\"selector\":\".App__contentsMap[style=\\\"height: calc(100% - 50px);\\\"]\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\"#yjnFooter.kBXsbI\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"#ydn-bot\",\"action\":[\"style\",\"visibility: hidden !important; height: 0 !important;\"]}"],["{\"selector\":\".latestnewstable2014[height^=\\\"1\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"body[style*=\\\"position\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".l-sidebar-b[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#adnone\",\"action\":[\"style\",\"height: 724px !important;\"]}"],["{\"selector\":\".adBillBoardPC\",\"action\":[\"style\",\"min-height: 0 !important\"]}"],["{\"selector\":\"#stage\",\"action\":[\"style\",\"max-height: 100% !important;\"]}"],["{\"selector\":\"#sub-col-wrap_top280\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\".l-generalContent-secondary[style=\\\"position: unset;\\\"]\",\"action\":[\"style\",\"position: sticky !important;\"]}","{\"selector\":\"main > div.l-generalContent-secondary\",\"action\":[\"style\",\"position: sticky !important;\"]}"],["{\"selector\":\"body.tp-modal-open\",\"action\":[\"style\",\"overflow: visible !important; touch-action: auto !important;\"]}","{\"selector\":\"html.tp-scroll-prevented\",\"action\":[\"style\",\"overflow: visible !important; touch-action: auto !important;\"]}"],["{\"selector\":\"main #bnr_about\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"main #bnr_books\",\"action\":[\"style\",\"top: 636px !important;\"]}","{\"selector\":\"main #box_ranking\",\"action\":[\"style\",\"top: 156px !important;\"]}"],["{\"selector\":\".wym-v2022__header.is-scroll-up ~ .wym-v2022__footer-fixed.is-pc-bottom\",\"action\":[\"style\",\"bottom: 0 !important;\"],\"tasks\":[[\"matches-media\",\"(min-width: 641px)\"]]}"],["{\"selector\":\"#main-footer[style=\\\"padding-bottom:100px;\\\"]\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}"],["{\"selector\":\".image-area\",\"action\":[\"style\",\"opacity: 1 !important; pointer-events: auto !imortant; filter: none !important;\"]}","{\"selector\":\".js-article-wrap .article-body\",\"action\":[\"style\",\"opacity: 1 !important; pointer-events: auto !imortant; filter: none !important;\"]}"],["{\"selector\":\"#breadcrumb\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#hidari\",\"action\":[\"style\",\"top: unset !important;\"]}"],["{\"selector\":\"div[class^=\\\"ranking_\\\"] > div[class^=\\\"ranking_pRanking_List\\\"]:has(> ol[data-ranking=\\\"weekly\\\"] + div[class^=\\\"ranking_pRanking_List_Wrapper\\\"] > ol[data-ranking=\\\"amazon\\\"])\",\"action\":[\"style\",\"transform: none !important;\"]}","{\"selector\":\"div[class^=\\\"ranking_\\\"] > div[class^=\\\"ranking_sRanking_Nav_\\\"] > div[data-ranking=\\\"weekly\\\"]\",\"action\":[\"style\",\"color: #1b9b6f !important; fill: #1b9b6f !important;\"]}","{\"selector\":\"div[class^=\\\"ranking_\\\"] > div[class^=\\\"ranking_sRanking_Nav_\\\"] > div[data-ranking=\\\"weekly\\\"]::after\",\"action\":[\"style\",\"transform: none !important;\"]}","{\"selector\":\"div[class^=\\\"ranking_\\\"] > div[class^=\\\"ranking_sRanking_Nav_\\\"]:has(> div[data-ranking=\\\"weekly\\\"] + div[data-ranking=\\\"amazon\\\"]) + div[class^=\\\"ranking_sRanking_ListContainer_\\\"]\",\"action\":[\"style\",\"transform: none !important;\"]}"],["{\"selector\":\".ads_native\",\"action\":[\"style\",\"visibility: hidden !important;margin: 0 !important;\"]}"],["{\"selector\":\"div[class*=\\\"ad_\\\"]\",\"action\":[\"style\",\"height: 1px !important; min-height: 1px !important; visibility: hidden !important;\"]}","{\"selector\":\"div[id^=\\\"sub_ad\\\"]\",\"action\":[\"style\",\"height: 1px !important; min-height: 1px !important; visibility: hidden !important;\"]}"],["{\"selector\":\".media_article .articlegroups .d-block:not(:first-of-type)\",\"action\":[\"style\",\"border-top: none !important; padding-top: 0 !important;\"]}"],["{\"selector\":\".ly_content_wrapper\",\"action\":[\"style\",\"margin-bottom: 0!important;\"]}"],["{\"selector\":\".ads970\",\"action\":[\"style\",\"height: 0 !important; min-height: 0 !important;\"]}"],["{\"selector\":\".articleList-attention[style^=\\\"min-height\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\"body > #container\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"height:60px !important;\"]}"],["{\"selector\":\".adBillboard_pc\",\"action\":[\"style\",\"height: 0 !important; min-height: 0 !important; margin-bottom: 0 !important;\"]}"],["{\"selector\":\".MuiGrid-container.MuiGrid-root[style*=\\\"min-height:\\\"]\",\"action\":[\"style\",\"min-height: auto!important;\"]}","{\"selector\":\".MuiGrid-item.MuiGrid-root[style*=\\\"min-height:\\\"]\",\"action\":[\"style\",\"min-height: auto!important;\"]}"],["{\"selector\":\".BottomContainer.InView\",\"action\":[\"style\",\"min-height:auto !important;\"]}"],["{\"selector\":\".following_buttons_upper\",\"action\":[\"style\",\"bottom: 0 !important;\"]}"],["{\"selector\":\"#asideRight .box.bottom\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#writerprofile + aside.adsense\",\"action\":[\"style\",\"height: 90px !important; width: 0 !important;\"]}"],["{\"selector\":\".side[style^=\\\"height\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#footer\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\"#main[style=\\\"padding-bottom:300px;\\\"]\",\"action\":[\"style\",\"padding-bottom: 170px !important;\"]}"],["{\"selector\":\"body.app-scroll-lock\",\"action\":[\"style\",\"position: relative!important;overflow-y: unset !important;\"]}"],["{\"selector\":\"body.tp-modal-open\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"#srdk-index-native-pc ~ li.rank-7\",\"action\":[\"style\",\"margin-left: 20px !important;\"]}","{\"selector\":\"#srdk-index-native-pc ~ li.rank-8\",\"action\":[\"style\",\"margin-left: 0 !important;\"]}"],["{\"selector\":\"#check-ad\",\"action\":[\"style\",\"height: 10px !important; position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"#signin-with-twitter\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\".fortune-submit\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#footer[style=\\\"margin-bottom: 100px;\\\"]\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"#main\",\"action\":[\"style\",\"width:auto !important; padding-left:15px !important;\"]}","{\"selector\":\".tngMainT\",\"action\":[\"style\",\"width:100% !important;\"]}"],["{\"selector\":\".viewer, .viewer .imgWrap, .viewer .lastPage.slick-slide, .viewer .slick-list, .viewer .slick-track, .viewerBody\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".blockContainer[style$=\\\"-60px auto;\\\"] > div[style=\\\"min-height: 90px;\\\"]\",\"action\":[\"style\",\"min-height: 1px !important;\"]}","{\"selector\":\".sideContents.ie-sticky[style$=\\\"min-height: 1500px;\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\".medipartner\",\"action\":[\"style\",\"position: static !important;\"]}","{\"selector\":\".slidead_smartphone_top + script + script + h2\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"body:not(.custom_1):not(.custom_2):not(.template_news):not([id])\",\"action\":[\"style\",\"margin-top: 0 !important; background-position-y: 0% !important;\"]}"],["{\"selector\":\"#js-forms\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\".bbsmenu-with-ad\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}","{\"selector\":\"div[itemprop=\\\"itemListElement\\\"][style=\\\"margin-top: 100px;\\\"]\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#center-left\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#bottom_area\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\".side_box\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#entry-text\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#adsidetop\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}","{\"selector\":\"#adstop\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}","{\"selector\":\"#adunit-10\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}","{\"selector\":\"#adunit-11\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}"],["{\"selector\":\".bdotted[style=\\\"text-align:center; margin-top:10px;\\\"]\",\"action\":[\"style\",\"height: 0 !important;border: none !important;\"]}"],["{\"selector\":\".entry-content\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".ad_unit.ad-unit.text-ad.text_ad.pub_300x250\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body[style=\\\"overflow: hidden;\\\"]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#header_rtranking\",\"action\":[\"style\",\"top: 120px !important;\"]}","{\"selector\":\"div[id^=\\\"container_in\\\"]\",\"action\":[\"style\",\"margin-top: 240px !important;\"]}"],["{\"selector\":\".google\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\".inv_scroll_cancel\",\"action\":[\"style\",\"overflow: auto !important; height: auto !important;\"]}","{\"selector\":\"div[style^=\\\"max-width: 1000px; width: 100%; height: 150px; margin: 0 auto 50px auto;\\\"]\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\"#wrap_contents_box\",\"action\":[\"style\",\"min-height: 676px !important;\"]}"],["{\"selector\":\"footer\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".ad.ads.adsbygoogle.ad1.ad-space.adbox.imggif.ad-banner.amp_ad.file-display-area\",\"action\":[\"style\",\"display: block !important;\"]}"]];

const hostnamesMap = new Map([["pictab.art",0],["ero-gazou.jp",0],["naitter.hippy.jp",0],["my-nikki.net",0],["animenew.be",1],["jumpmatome2ch.biz",2],["380cc.cc",3],["afsgames.com",4],["anige-sokuhouvip.com",5],["appget.com",6],["asahi.com",7],["telling.asahi.com",8],["automaton-media.com",9],["freesoft-100.com",9],["avfuuzoku.com",10],["battlecats-db.com",11],["itest.bbspink.com",12],["kledgeb.blogspot.com",13],["ekr.chosunonline.com",14],["life.chosunonline.com",14],["www.chosunonline.com",15],["dengekionline.com",16],["digital-thread.com",17],["itaishinja.com",17],["oryouri.2chblog.jp",17],["kyousoku.net",17],["dq-dai.com",18],["dqclear.com",19],["e-nenpi.com",20],["egotter.com",21],["anime.eiga.com",22],["erologz.com",23],["eromanga-show.com",24],["hentai-one.com",24],["eromovie-s.com",25],["blog.esuteru.com",[26,27]],["otakomu.jp",[26,27]],["app.famitsu.com",28],["blog.fc2.com",29],["vip-front.video.g.fc2.com",[30,31]],["video.fc2.com",[30,31,32]],["ideo.laxd.com",31],["ff10-hd.com",33],["sheepplus.com",[33,57]],["winningpost8.com",[33,67]],["ff8clear.net",[33,67]],["ge-soku.com",34],["hitoikigame.com",35],["hostlove.com",36],["idle-girl.com",37],["itainews.com",38],["kabegamikan.com",39],["kakaku.com",40],["bbs.kakaku.com",41],["t-mall.kantangame.com",42],["knshow.com",43],["kosoch.com",44],["mapfan.com",45],["matometanews.com",46],["medibang.com",47],["minkch.com",48],["mozakin.com",49],["bbs4.mozakin.com",50],["news-postseven.com",51],["ovninavi.com",52],["peko-step.com",53],["saikyo-jump.com",54],["security-next.com",55],["sekai-kabuka.com",56],["shindanmaker.com",58],["shirotomaster.com",59],["supercweather.com",60],["takenokosokuhou.com",61],["togetter.com",62],["umaroidblog.com",63],["uraaka.com",64],["wazap.com",65],["sp.jp.wazap.com",66],["yamareco.com",68],["young-machine.com",69],["2game.info",70],["applica.info",71],["realtime-chart.info",72],["gahalog.2chblog.jp",73],["news.2chblog.jp",74],["9db.jp",75],["ameblo.jp",76],["applion.jp",77],["news.audee.jp",78],["barks.jp",79],["hiraganakeyaki.blog.jp",80],["h-pon.doorblog.jp",80],["sunri2525.blog.jp",81],["bunshun.jp",82],["allabout.co.jp",83],["eguchi-hd.co.jp",84],["lesson.golfdigest.co.jp",85],["score.golfdigest.co.jp",85],["nlab.itmedia.co.jp",86],["news.jorudan.co.jp",87],["friday.kodansha.co.jp",88],["mapion.co.jp",89],["musicman.co.jp",90],["estate.nikkan.co.jp",91],["oricon.co.jp",92],["corp.rakuten.co.jp",93],["wpb.shueisha.co.jp",94],["teny.co.jp",95],["tv-asahi.co.jp",96],["video.tv-tokyo.co.jp",97],["wealthadvisor.co.jp",98],["auctions.yahoo.co.jp",99],["games.yahoo.co.jp",100],["mail.yahoo.co.jp",101],["map.yahoo.co.jp",102],["news.yahoo.co.jp",103],["weather.yahoo.co.jp",104],["cosp.jp",105],["dailynewsonline.jp",106],["duellinks.doorblog.jp",107],["shikaku2ch.doorblog.jp",108],["figgy.jp",109],["firecross.jp",110],["gameranbu.jp",111],["gizmodo.jp",112],["guitarmagazine.jp",113],["j-defense.ikaros.jp",114],["jikayosha.jp",115],["jisin.jp",116],["jprime.jp",117],["k-knuckles.jp",118],["kakijun.jp",119],["lifehacker.jp",120],["hrs-game.main.jp",121],["main-hrs-game.ssl-lolipop.jp",121],["musmus.main.jp",122],["maonline.jp",123],["minkabu.jp",124],["minpo.jp",125],["news.mynavi.jp",126],["mytry.jp",127],["weather.biglobe.ne.jp",128],["gamer.ne.jp",129],["onlinegamer.jp",129],["news.so-net.ne.jp",130],["nicovideo.jp",131],["okwave.jp",132],["gdm.or.jp",133],["otajo.jp",134],["otonanswer.jp",135],["piapro.jp",136],["novel.prcm.jp",137],["snrec.jp",138],["soredoko.jp",139],["tters.jp",140],["twpf.jp",141],["uranaitv.jp",142],["weathernews.jp",143],["uwl.weblio.jp",144],["mangalove.me",145],["gendai.media",146],["4gamer.net",147],["itest.5ch.net",148],["buhidoh.net",149],["roote.ekispert.net",150],["azby.fmworld.net",151],["gigazine.net",152],["intaa.net",153],["kyosui.net",154],["logworker.net",155],["ouminews.net",156],["peing.net",157],["pokemon-matome.net",158],["amigo.tennis365.net",159],["twivideo.net",160],["gigafile.nu",161],["colordic.org",162],["b.best-hit.tv",163]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/

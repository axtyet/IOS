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

const argsList = [["{\"selector\":\"body > #container\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#mw-content-text div[style] a:is([href*=\\\"contents.fc2.com\\\"], [href*=\\\"dmm.co.jp\\\"]) img\",\"action\":[\"style\",\"height: 0 !important;\"]}","{\"selector\":\"#mw-content-text div[style] a:is([href*=\\\"contents.fc2.com\\\"], [href*=\\\"dmm.co.jp\\\"])\",\"action\":[\"style\",\"font-size: 0 !important;\"]}"],["{\"selector\":\"body.tp-modal-open\",\"action\":[\"style\",\"overflow: visible !important; height: auto !important; touch-action: auto !important;\"]}","{\"selector\":\"html.tp-scroll-prevented\",\"action\":[\"style\",\"overflow: visible !important; height: auto !important; touch-action: auto !important;\"]}"],["{\"selector\":\".ad.ads.adsbygoogle.ad1.ad-space.adbox.imggif.ad-banner.amp_ad.file-display-area\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".image-area\",\"action\":[\"style\",\"opacity: 1 !important; pointer-events: auto !imortant; filter: none !important;\"]}","{\"selector\":\".js-article-wrap .article-body\",\"action\":[\"style\",\"opacity: 1 !important; pointer-events: auto !imortant; filter: none !important;\"]}"],["{\"selector\":\"div[id^=\\\"div-gpt-\\\"]\",\"action\":[\"style\",\"min-height: 1px !important;\"]}"],["{\"selector\":\"#check-ad\",\"action\":[\"style\",\"height: 10px !important; position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".adsense-container\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\".entry-content\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"div[class*=\\\"ad_\\\"]\",\"action\":[\"style\",\"height: 1px !important; min-height: 1px !important; visibility: hidden !important;\"]}","{\"selector\":\"div[id^=\\\"sub_ad\\\"]\",\"action\":[\"style\",\"height: 1px !important; min-height: 1px !important; visibility: hidden !important;\"]}"],["{\"selector\":\"body > div[style=\\\"visibility: hidden;\\\"]\",\"action\":[\"style\",\"visibility: visible !important;\"]}"],["{\"selector\":\"#ad\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important;\"]}","{\"selector\":\"div[class^=\\\"detail_photo_\\\"]\",\"action\":[\"style\",\"height: 100% !important; max-height: calc(100vh - 70px - 20px) !important;\"]}","{\"selector\":\"img[class^=\\\"detail_mainImage\\\"]\",\"action\":[\"style\",\"max-height: calc(100vh - 70px - 20px) !important;\"]}"],["{\"selector\":\"#adsidetop\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}","{\"selector\":\"#adstop\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}","{\"selector\":\"#adunit-10\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}","{\"selector\":\"#adunit-11\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute!important;left: -4000px !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"display: block!important;\"]}","{\"selector\":\"body[style=\\\"display: none;\\\"]\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#amajmpid [style*=\\\"font-size\\\"]\",\"action\":[\"style\",\"font-size: 0 !important;\"]}","{\"selector\":\"#amajmpid\",\"action\":[\"style\",\"pointer-events: none !important;\"]}","{\"selector\":\"td[width=\\\"160\\\"] [style*=\\\"position\\\"] [id][style] ~ [onclick]\",\"action\":[\"style\",\"pointer-events: none !important;\"]}"],["{\"selector\":\"td[style^=\\\"vertical-align\\\"] [onclick]:has(> img[src*=\\\"/clip_\\\"] + b):not(:has(b td > a[href]))\",\"action\":[\"style\",\"pointer-events: none !important;\"]}","{\"selector\":\"td[style^=\\\"vertical-align\\\"] [onmousedown]:has(> img[src*=\\\"/clip_\\\"] + b):not(:has(b td > a[href]))\",\"action\":[\"style\",\"pointer-events: none !important;\"]}"],["{\"selector\":\".ad_unit.ad-unit.text-ad.text_ad.pub_300x250\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".ads\",\"action\":[\"style\",\"display: block!important;height: 1px!important;\"]}","{\"selector\":\".listInfoR[style=\\\"margin-bottom: 10px; height: 400px;\\\"]\",\"action\":[\"style\",\"height: unset !important;\"]}"],["{\"selector\":\"#adcheck.ads-ad\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"#playertopads\",\"action\":[\"style\",\"height: 51px!important; position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".footer-with-ad\",\"action\":[\"style\",\"padding-bottom: 10px !important;\"]}"],["{\"selector\":\"#globalHeader\",\"action\":[\"style\",\"min-height: 0 !important; margin: 0 !important;\"]}"],["{\"selector\":\".movie-watch\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".sponsored-loop300x250\",\"action\":[\"style\",\"position: absolute !important; left: -4000px !important;\"]}"],["{\"selector\":\".p-header-billboard\",\"action\":[\"style\",\"min-height: 0 !important;\"]}","{\"selector\":\".u-mb64 .p-new__row\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}"],["{\"selector\":\"#sidebar-small[style^=\\\"height:\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#custom_html-48\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".plugin-freearea td[bgcolor] > div[style]\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".ad970x250\",\"action\":[\"style\",\"visibility: hidden !important; height: 0 !important; margin-bottom: 45px !important;\"]}"],["{\"selector\":\"ul.mod-grid2:has(> li.block-list-a-a__list__item > div.block-banner-b-a)\",\"action\":[\"style\",\"width: 50% !important;\"]}","{\"selector\":\"ul.mod-grid2:has(> li.block-list-a-a__list__item > div[class$=\\\"_InRecommend\\\"])\",\"action\":[\"style\",\"width: 50% !important;\"]}"],["{\"selector\":\".lsidebar[style^=\\\"min-height\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\"#srdk-index-native-pc ~ li.rank-7\",\"action\":[\"style\",\"margin-left: 20px !important;\"]}","{\"selector\":\"#srdk-index-native-pc ~ li.rank-8\",\"action\":[\"style\",\"margin-left: 0 !important;\"]}"],["{\"selector\":\".aa_footer\",\"action\":[\"style\",\"padding-bottom: unset !important;\"]}"],["{\"selector\":\".main_ad_head_wide\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\".with-ad[data-layout=\\\"list\\\"] .main-header\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".with-ad[data-layout=\\\"list\\\"][data-section-type=\\\"new-video\\\"] .content-wrap:nth-child(-1n+2)\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".c-ad-103\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\".App__contentsMap[style=\\\"height: calc(100% - 50px);\\\"]\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\"#sidebar[style^=\\\"height:\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".media_article .articlegroups .d-block:not(:first-of-type)\",\"action\":[\"style\",\"border-top: none !important; padding-top: 0 !important;\"]}"],["{\"selector\":\"#cgrig_base_pic\",\"action\":[\"style\",\"grid-auto-rows: auto !important;\"]}","{\"selector\":\"#cgrig_cont\",\"action\":[\"style\",\"grid-row-start: auto !important; grid-row-end: auto !important;\"]}","{\"selector\":\"#cgrig_left\",\"action\":[\"style\",\"grid-row-start: 3 !important; grid-row-end: 7 !important;\"]}"],["{\"selector\":\".block-sub-ad + .block-sub\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".block-sub-recommend[style=\\\"margin-top:30px;\\\"]\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".relatedLinksPhoto > ul#orecView2\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".nav-menu-width.margin.no-side-margin\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".side-ad-area.half-margin\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"div[style=\\\"margin: auto; width: 930px; height: 265px; text-align: center;\\\"]\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\".gPr.u-mtbM\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".gPr_title.u-ttl01\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".p-dol .gNews_title.u-ttl01\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".csh_main\",\"action\":[\"style\",\"padding-top: 30px !important;\"]}"],["{\"selector\":\".top_banner_area\",\"action\":[\"style\",\"height: 44px !important\"]}"],["{\"selector\":\".viewer, .viewer .imgWrap, .viewer .lastPage.slick-slide, .viewer .slick-list, .viewer .slick-track, .viewerBody\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\"#sub-col-wrap_top280\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#hidari\",\"action\":[\"style\",\"top: unset !important;\"]}"],["{\"selector\":\"#asideRight .box.bottom\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".c167:nth-child(2)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".c213:nth-child(2)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".c422:nth-child(2)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#index_nav > h1\",\"action\":[\"style\",\"padding-top: 30px!important;\"]}","{\"selector\":\"body:not(.tp) > div#container > #main.template1\",\"action\":[\"style\",\"padding-top: 20px !important;\"]}"],["{\"selector\":\"div[class=\\\"block recommend\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\"#subProgram\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body[style*=\\\"position\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".side_box\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#subAInner[style]\",\"action\":[\"style\",\"position: static !important;margin-top: auto !important;\"]}","{\"selector\":\"._2pnTOjTu\",\"action\":[\"style\",\"width: auto !important;\"]}"],["{\"selector\":\"#entry[class^=\\\"e\\\"]\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}","{\"selector\":\"#new\",\"action\":[\"style\",\"position: static !important;\"]}","{\"selector\":\"#side[class^=\\\"s\\\"]\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"div#wrapper.on\",\"action\":[\"style\",\"padding-top: 450px !important;\"]}","{\"selector\":\"div.on h1\",\"action\":[\"style\",\"top: 386px !important;\"]}","{\"selector\":\"div.on nav#path\",\"action\":[\"style\",\"top: 330px !important;\"]}"],["{\"selector\":\"#right\",\"action\":[\"style\",\"padding-top: 25px !important;\"]}"],["{\"selector\":\"#main\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}","{\"selector\":\"#side[class^=\\\"ad\\\"]\",\"action\":[\"style\",\"border-top: 0 !important;\"]}","{\"selector\":\".adh\",\"action\":[\"style\",\"border-top: 0 !important;\"]}"],["{\"selector\":\".gadget_topics > div.cont.last-child\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".sub > div.section > span.heading\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".center_column\",\"action\":[\"style\",\"min-height: 1500px!important;\"]}"],["{\"selector\":\"#signin-with-twitter\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\".right-container[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".medipartner\",\"action\":[\"style\",\"position: static !important;\"]}","{\"selector\":\".slidead_smartphone_top + script + script + h2\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"body:not(.custom_1):not(.custom_2):not(.template_news):not([id])\",\"action\":[\"style\",\"margin-top: 0 !important; background-position-y: 0% !important;\"]}"],["{\"selector\":\"#left\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#body-in > div[class^=\\\"d-contents\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#tx7player[style*=\\\"opacity: 0.\\\"]\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\".l-generalContent-secondary[style=\\\"position: unset;\\\"]\",\"action\":[\"style\",\"position: sticky !important;\"]}","{\"selector\":\"main > div.l-generalContent-secondary\",\"action\":[\"style\",\"position: sticky !important;\"]}"],["{\"selector\":\"footer\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".isJack\",\"action\":[\"style\",\"margin-top: 0!important;\"]}"],["{\"selector\":\"#wholeHeaderPane\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#contents\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"#lower section.character ul.character_list li.standby\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\".hustle-no-scroll\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".fortune-submit\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body[style=\\\"padding: 0px 0px 154px;\\\"]\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}"],["{\"selector\":\"div[class^=\\\"LayoutContentInner-sc\\\"] > div[class^=\\\"Promotion-sc\\\"]\",\"action\":[\"style\",\"grid-template-columns: 1fr 0 !important;\"]}"],["{\"selector\":\"#top #head\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".ad_common_1_970x250\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\"#js-forms\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\".bbsmenu-with-ad\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}","{\"selector\":\"div[id$=\\\"AdsMain\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\"div[itemprop=\\\"itemListElement\\\"][style=\\\"margin-top: 100px;\\\"]\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#breadcrumb\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#ydn-bot\",\"action\":[\"style\",\"visibility: hidden !important; height: 0 !important;\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"display: block !important; width: 100% !important; height: 100% !important;\"]}"],["{\"selector\":\".l-contentsSub[style^=\\\"height\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".inv_scroll_cancel\",\"action\":[\"style\",\"overflow: auto !important; height: auto !important;\"]}","{\"selector\":\"div[style^=\\\"max-width: 1000px; width: 100%; height: 150px; margin: 0 auto 50px auto;\\\"]\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\"div[style=\\\"width:730px;font-size:11pt;\\\"] > table[width=\\\"730\\\"]\",\"action\":[\"style\",\"width: 380px !important;\"]}"],["{\"selector\":\"body[style^=\\\"overflow:\\\"]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".ly_content_wrapper\",\"action\":[\"style\",\"margin-bottom: 0!important;\"]}"],["{\"selector\":\".pum-open\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#result_nav\",\"action\":[\"style\",\"bottom: 0 !important;\"]}"],["{\"selector\":\".s-ad\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"#bottom_area\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"#cb-container\",\"action\":[\"style\",\"padding-top: 110px !important;\"]}","{\"selector\":\".ovni-header\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"padding-bottom: 354px !important;\"]}"],["{\"selector\":\"#footer\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\"#main[style=\\\"padding-bottom:300px;\\\"]\",\"action\":[\"style\",\"padding-bottom: 170px !important;\"]}"],["{\"selector\":\".ads970\",\"action\":[\"style\",\"height: 0 !important; min-height: 0 !important;\"]}"],["{\"selector\":\".wym-v2022__header.is-scroll-up ~ .wym-v2022__footer-fixed\",\"action\":[\"style\",\"bottom: 0 !important;\"]}"],["{\"selector\":\".adsepa\",\"action\":[\"style\",\"height: 0 !important;\"]}","{\"selector\":\".reply_txad\",\"action\":[\"style\",\"border: 0 !important;\"]}","{\"selector\":\".thread_txad\",\"action\":[\"style\",\"border: 0 !important;\"]}"],["{\"selector\":\"#wrap01\",\"action\":[\"style\",\"height: 2205px !important;\"]}","{\"selector\":\".tabpain[style=\\\"left: -260px; top: 280px;\\\"]\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\".tabpain[style=\\\"top: 550px; left: 0px;\\\"]\",\"action\":[\"style\",\"top: -1120px !important;\"]}"],["{\"selector\":\".following_buttons_upper\",\"action\":[\"style\",\"bottom: 0 !important;\"]}"],["{\"selector\":\".ads_native\",\"action\":[\"style\",\"visibility: hidden !important;margin: 0 !important;\"]}"],["{\"selector\":\"#stage\",\"action\":[\"style\",\"max-height: 100% !important;\"]}"],["{\"selector\":\"body.app-scroll-lock\",\"action\":[\"style\",\"position: relative!important;overflow-y: unset !important;\"]}"],["{\"selector\":\".header\",\"action\":[\"style\",\"height: 50px !important;\"]}"],["{\"selector\":\"#wrap_contents_box\",\"action\":[\"style\",\"min-height: 676px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\"._fukugan_grid\",\"action\":[\"style\",\"height: auto!important;\"]}"],["{\"selector\":\"#main-container\",\"action\":[\"style\",\"padding: 0px 60px 80px !important;\"]}"],["{\"selector\":\".l-sidebar-b[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#side-r\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#adnone\",\"action\":[\"style\",\"height: 724px !important;\"]}"],["{\"selector\":\"#writerprofile + aside.adsense\",\"action\":[\"style\",\"height: 90px !important; width: 0 !important;\"]}"],["{\"selector\":\".clearfix.contents\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\".blockContainer[style$=\\\"-60px auto;\\\"] > div[style=\\\"min-height: 90px;\\\"]\",\"action\":[\"style\",\"min-height: 1px !important;\"]}","{\"selector\":\".sideContents.ie-sticky[style$=\\\"min-height: 1500px;\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\".latestnewstable2014[height^=\\\"1\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".side[style^=\\\"height\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"height:60px !important;\"]}"],["{\"selector\":\".adBillBoardPC\",\"action\":[\"style\",\"min-height: 0 !important\"]}"],["{\"selector\":\".adBillboard_pc\",\"action\":[\"style\",\"height: 0 !important; min-height: 0 !important; margin-bottom: 0 !important;\"]}"],["{\"selector\":\"body[style=\\\"overflow-y: hidden;\\\"]\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"],["{\"selector\":\"body.header_bg_ad.modal-open\",\"action\":[\"style\",\"padding-right: 0 !important; overflow: auto!important;\"]}"],["{\"selector\":\"#header_rtranking\",\"action\":[\"style\",\"top: 120px !important;\"]}","{\"selector\":\"div[id^=\\\"container_in\\\"]\",\"action\":[\"style\",\"margin-top: 240px !important;\"]}"],["{\"selector\":\".vjs-controls-disabled.vjs-error .vjs-control-bar\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".app-container[aria-expanded=\\\"false\\\"] section.with-ad\",\"action\":[\"style\",\"width: calc(100% - 20px) !important;\"]}"],["{\"selector\":\"body.withsky div#shellcontent[style]\",\"action\":[\"style\",\"right: 0 !important;\"]}"],["{\"selector\":\".articleList-attention[style^=\\\"min-height\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\"body[style=\\\"position: fixed;\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#common-header > div[class^=\\\"common-header-pc-\\\"]\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#main\",\"action\":[\"style\",\"width:auto !important; padding-left:15px !important;\"]}","{\"selector\":\".tngMainT\",\"action\":[\"style\",\"width:100% !important;\"]}"],["{\"selector\":\"#center-left\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".right-container\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#plugin2[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#scroll.fixed\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#sub\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#sidebar[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#left[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".fix_box-m\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".BottomContainer.InView\",\"action\":[\"style\",\"min-height:auto !important;\"]}"],["{\"selector\":\".jackFix + div.siteContent\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".siteRanking-main\",\"action\":[\"style\",\"margin-left: 0!important;\"]}"],["{\"selector\":\".wym-v2022__header.is-scroll-up ~ .wym-v2022__footer-fixed.is-pc-bottom\",\"action\":[\"style\",\"bottom: 0 !important;\"],\"tasks\":[[\"matches-media\",\"(min-width: 641px)\"]]}"],["{\"selector\":\"div[class^=\\\"handwrite-box-\\\"]:has(> div.ggcontent > ins.adsbygoogle)\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\"#video-container[style*=\\\"display: none;\\\"]\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".pc_block[style^=\\\"position: sticky\\\"]\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"body[style=\\\"overflow: hidden;\\\"]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#entry-text\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"nav:not(.fixed):not([id])\",\"action\":[\"style\",\"top: 132px !important;\"]}"],["{\"selector\":\"#yjnFooter.kBXsbI\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"#sidebar\",\"action\":[\"style\",\"min-height: unset !important;\"]}"],["{\"selector\":\".min-h-\\\\[250px\\\\]\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\".mno-pitari\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#is_header_banner\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"#footer[style=\\\"margin-bottom: 100px;\\\"]\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"main #bnr_about\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"main #bnr_books\",\"action\":[\"style\",\"top: 636px !important;\"]}","{\"selector\":\"main #box_ranking\",\"action\":[\"style\",\"top: 156px !important;\"]}"],["{\"selector\":\"#main-footer[style=\\\"padding-bottom:100px;\\\"]\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}"],["{\"selector\":\"#_popIn_recommend_right\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\".bdotted[style=\\\"text-align:center; margin-top:10px;\\\"]\",\"action\":[\"style\",\"height: 0 !important;border: none !important;\"]}"],["{\"selector\":\".google\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\"#CommonSideColumn_play-report___f_o9.CommonSideColumn_item__OI_xC:not(:first-child)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#moduleFixedBnr[style^=\\\"height\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".MuiGrid-container.MuiGrid-root[style*=\\\"min-height:\\\"]\",\"action\":[\"style\",\"min-height: auto!important;\"]}","{\"selector\":\".MuiGrid-item.MuiGrid-root[style*=\\\"min-height:\\\"]\",\"action\":[\"style\",\"min-height: auto!important;\"]}"],["{\"selector\":\"div[class^=\\\"ranking_\\\"] > div[class^=\\\"ranking_pRanking_List\\\"]:has(> ol[data-ranking=\\\"weekly\\\"] + div[class^=\\\"ranking_pRanking_List_Wrapper\\\"] > ol[data-ranking=\\\"amazon\\\"])\",\"action\":[\"style\",\"transform: none !important;\"]}","{\"selector\":\"div[class^=\\\"ranking_\\\"] > div[class^=\\\"ranking_sRanking_Nav_\\\"] > div[data-ranking=\\\"weekly\\\"]\",\"action\":[\"style\",\"color: #1b9b6f !important; fill: #1b9b6f !important;\"]}","{\"selector\":\"div[class^=\\\"ranking_\\\"] > div[class^=\\\"ranking_sRanking_Nav_\\\"] > div[data-ranking=\\\"weekly\\\"]::after\",\"action\":[\"style\",\"transform: none !important;\"]}","{\"selector\":\"div[class^=\\\"ranking_\\\"] > div[class^=\\\"ranking_sRanking_Nav_\\\"]:has(> div[data-ranking=\\\"weekly\\\"] + div[data-ranking=\\\"amazon\\\"]) + div[class^=\\\"ranking_sRanking_ListContainer_\\\"]\",\"action\":[\"style\",\"transform: none !important;\"]}"]];

const hostnamesMap = new Map([["mytry.jp",0],["wiki.yjsnpi.nu",1],["guitarmagazine.jp",2],["snrec.jp",2],["b.best-hit.tv",3],["jprime.jp",4],["shindanmaker.com",5],["tters.jp",6],["egotter.com",7],["logworker.net",8],["musmus.main.jp",9],["kledgeb.blogspot.com",10],["animenew.be",11],["friday.kodansha.co.jp",12],["intaa.net",13],["battlecats-db.com",14],["sekai-kabuka.com",15],["realtime-chart.info",16],["ouminews.net",17],["knshow.com",18],["applion.jp",19],["380cc.cc",20],["itest.bbspink.com",21],["nlab.itmedia.co.jp",22],["eromovie-s.com",23],["2game.info",24],["telling.asahi.com",25],["erologz.com",26],["ge-soku.com",27],["hitoikigame.com",28],["afsgames.com",29],["wpb.shueisha.co.jp",30],["minkch.com",31],["soredoko.jp",32],["allabout.co.jp",33],["vip-front.video.g.fc2.com",[34,126]],["video.fc2.com",[34,35,126]],["map.yahoo.co.jp",36],["umaroidblog.com",37],["maonline.jp",38],["peko-step.com",39],["oricon.co.jp",40],["mapfan.com",41],["shirotomaster.com",42],["dengekionline.com",43],["ekr.chosunonline.com",44],["life.chosunonline.com",44],["www.chosunonline.com",45],["mangalove.me",46],["gameranbu.jp",47],["kakijun.jp",48],["gdm.or.jp",49],["barks.jp",50],["hostlove.com",51],["bunshun.jp",52],["anime.eiga.com",53],["dailynewsonline.jp",54],["azby.fmworld.net",55],["ameblo.jp",56],["ff8clear.net",[57,58]],["ff10-hd.com",57],["sheepplus.com",[57,60]],["winningpost8.com",[57,58]],["dqclear.com",59],["e-nenpi.com",61],["wazap.com",62],["estate.nikkan.co.jp",63],["twpf.jp",64],["h-pon.doorblog.jp",65],["hiraganakeyaki.blog.jp",65],["4gamer.net",66],["matometanews.com",67],["jumpmatome2ch.biz",68],["video.tv-tokyo.co.jp",69],["gizmodo.jp",70],["colordic.org",71],["games.yahoo.co.jp",72],["lesson.golfdigest.co.jp",73],["score.golfdigest.co.jp",73],["9db.jp",74],["dq-dai.com",75],["eguchi-hd.co.jp",76],["uranaitv.jp",77],["t-mall.kantangame.com",78],["auctions.yahoo.co.jp",79],["avfuuzoku.com",80],["news.jorudan.co.jp",81],["itest.5ch.net",82],["k-knuckles.jp",83],["weather.yahoo.co.jp",84],["supercweather.com",85],["applica.info",86],["twivideo.net",87],["kabegamikan.com",88],["news-postseven.com",89],["minkabu.jp",90],["naitter.hippy.jp",91],["pictab.art",91],["my-nikki.net",91],["ero-gazou.jp",91],["mapion.co.jp",92],["teny.co.jp",93],["roote.ekispert.net",94],["ovninavi.com",95],["medibang.com",96],["piapro.jp",97],["minpo.jp",98],["young-machine.com",99],["bbs4.mozakin.com",100],["mozakin.com",101],["okwave.jp",102],["hrs-game.main.jp",103],["main-hrs-game.ssl-lolipop.jp",103],["firecross.jp",104],["novel.prcm.jp",105],["security-next.com",106],["gigafile.nu",107],["freesoft-100.com",108],["automaton-media.com",108],["sunri2525.blog.jp",109],["blog.fc2.com",110],["duellinks.doorblog.jp",111],["news.2chblog.jp",112],["shikaku2ch.doorblog.jp",113],["otajo.jp",114],["togetter.com",115],["gendai.media",116],["cosp.jp",117],["otonanswer.jp",118],["weather.biglobe.ne.jp",119],["figgy.jp",120],["gamer.ne.jp",121],["onlinegamer.jp",121],["uraaka.com",122],["yamareco.com",123],["pokemon-matome.net",124],["asahi.com",125],["ideo.laxd.com",126],["mail.yahoo.co.jp",127],["news.mynavi.jp",128],["sp.jp.wazap.com",129],["tv-asahi.co.jp",130],["uwl.weblio.jp",131],["buhidoh.net",132],["saikyo-jump.com",133],["kosoch.com",134],["anige-sokuhouvip.com",135],["itaishinja.com",136],["digital-thread.com",136],["kyousoku.net",136],["oryouri.2chblog.jp",136],["gahalog.2chblog.jp",137],["itainews.com",138],["takenokosokuhou.com",139],["nicovideo.jp",140],["otakomu.jp",[141,142]],["blog.esuteru.com",[141,142]],["jikayosha.jp",143],["kanji.me",144],["pixnest.pipio.site",145],["kakaku.com",146],["appget.com",147],["peing.net",148],["gigazine.net",149],["wealthadvisor.co.jp",150],["news.yahoo.co.jp",151],["idle-girl.com",152],["eromanga-show.com",153],["hentai-one.com",153],["corp.rakuten.co.jp",154],["musicman.co.jp",155],["weathernews.jp",156],["j-defense.ikaros.jp",157],["jisin.jp",158],["news.audee.jp",159],["kyosui.net",160],["amigo.tennis365.net",161],["app.famitsu.com",162],["bbs.kakaku.com",163],["news.so-net.ne.jp",164],["lifehacker.jp",165]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/

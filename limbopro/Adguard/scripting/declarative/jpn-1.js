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

const argsList = [["{\"selector\":\"body > #container\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#mw-content-text div[style] a:is([href*=\\\"contents.fc2.com\\\"], [href*=\\\"dmm.co.jp\\\"]) img\",\"action\":[\"style\",\"height: 0 !important;\"]}","{\"selector\":\"#mw-content-text div[style] a:is([href*=\\\"contents.fc2.com\\\"], [href*=\\\"dmm.co.jp\\\"])\",\"action\":[\"style\",\"font-size: 0 !important;\"]}"],["{\"selector\":\"a[style*=\\\"display:\\\"][href^=\\\"https://al.dmm.co.jp\\\"] > div:has(img)\",\"action\":[\"style\",\"height: 20px !important;\"]}"],["{\"selector\":\"body.tp-modal-open\",\"action\":[\"style\",\"overflow: visible !important; touch-action: auto !important;\"]}","{\"selector\":\"html.tp-scroll-prevented\",\"action\":[\"style\",\"overflow: visible !important; touch-action: auto !important;\"]}"],["{\"selector\":\".ad.ads.adsbygoogle.ad1.ad-space.adbox.imggif.ad-banner.amp_ad.file-display-area\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".image-area\",\"action\":[\"style\",\"opacity: 1 !important; pointer-events: auto !imortant; filter: none !important;\"]}","{\"selector\":\".js-article-wrap .article-body\",\"action\":[\"style\",\"opacity: 1 !important; pointer-events: auto !imortant; filter: none !important;\"]}"],["{\"selector\":\"div[id^=\\\"div-gpt-\\\"]\",\"action\":[\"style\",\"min-height: 1px !important;\"]}"],["{\"selector\":\"#check-ad\",\"action\":[\"style\",\"height: 10px !important; position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".adsense-container\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\".entry-content\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"div[class*=\\\"ad_\\\"]\",\"action\":[\"style\",\"height: 1px !important; min-height: 1px !important; visibility: hidden !important;\"]}","{\"selector\":\"div[id^=\\\"sub_ad\\\"]\",\"action\":[\"style\",\"height: 1px !important; min-height: 1px !important; visibility: hidden !important;\"]}"],["{\"selector\":\"body.tp-modal-open\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"body > div[style=\\\"visibility: hidden;\\\"]\",\"action\":[\"style\",\"visibility: visible !important;\"]}"],["{\"selector\":\"#ad\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important;\"]}","{\"selector\":\"div[class^=\\\"detail_photo_\\\"]\",\"action\":[\"style\",\"height: 100% !important; max-height: calc(100vh - 70px - 20px) !important;\"]}","{\"selector\":\"img[class^=\\\"detail_mainImage\\\"]\",\"action\":[\"style\",\"max-height: calc(100vh - 70px - 20px) !important;\"]}"],["{\"selector\":\"#adsidetop\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}","{\"selector\":\"#adstop\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}","{\"selector\":\"#adunit-10\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}","{\"selector\":\"#adunit-11\",\"action\":[\"style\",\"display: block !important; height: 51px !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute!important;left: -4000px !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"display: block!important;\"]}","{\"selector\":\"body[style=\\\"display: none;\\\"]\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"td[width=\\\"160\\\"] [style*=\\\"position\\\"] [id][style] ~ [onclick]\",\"action\":[\"style\",\"pointer-events: none !important;\"]}"],["{\"selector\":\"td[style^=\\\"vertical-align\\\"] [onclick]:has(> img[src*=\\\"/clip_\\\"] + b):not(:has(b td > a[href]))\",\"action\":[\"style\",\"pointer-events: none !important;\"]}","{\"selector\":\"td[style^=\\\"vertical-align\\\"] [onmousedown]:has(> img[src*=\\\"/clip_\\\"] + b):not(:has(b td > a[href]))\",\"action\":[\"style\",\"pointer-events: none !important;\"]}"],["{\"selector\":\".ad_unit.ad-unit.text-ad.text_ad.pub_300x250\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".ads\",\"action\":[\"style\",\"display: block!important;height: 1px!important;\"]}","{\"selector\":\".listInfoR[style=\\\"margin-bottom: 10px; height: 400px;\\\"]\",\"action\":[\"style\",\"height: unset !important;\"]}"],["{\"selector\":\"#adcheck.ads-ad\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"#playertopads\",\"action\":[\"style\",\"height: 51px!important; position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".footer-with-ad\",\"action\":[\"style\",\"padding-bottom: 10px !important;\"]}"],["{\"selector\":\"#globalHeader\",\"action\":[\"style\",\"min-height: 0 !important; margin: 0 !important;\"]}"],["{\"selector\":\".movie-watch\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".sponsored-loop300x250\",\"action\":[\"style\",\"position: absolute !important; left: -4000px !important;\"]}"],["{\"selector\":\".p-header-billboard\",\"action\":[\"style\",\"min-height: 0 !important;\"]}","{\"selector\":\".u-mb64 .p-new__row\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}"],["{\"selector\":\"#sidebar-small[style^=\\\"height:\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#custom_html-48\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".plugin-freearea td[bgcolor] > div[style]\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".ad970x250\",\"action\":[\"style\",\"visibility: hidden !important; height: 0 !important; margin-bottom: 45px !important;\"]}"],["{\"selector\":\"ul.mod-grid2:has(> li.block-list-a-a__list__item > div.block-banner-b-a)\",\"action\":[\"style\",\"width: 50% !important;\"]}","{\"selector\":\"ul.mod-grid2:has(> li.block-list-a-a__list__item > div[class$=\\\"_InRecommend\\\"])\",\"action\":[\"style\",\"width: 50% !important;\"]}"],["{\"selector\":\".lsidebar[style^=\\\"min-height\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\"#srdk-index-native-pc ~ li.rank-7\",\"action\":[\"style\",\"margin-left: 20px !important;\"]}","{\"selector\":\"#srdk-index-native-pc ~ li.rank-8\",\"action\":[\"style\",\"margin-left: 0 !important;\"]}"],["{\"selector\":\".aa_footer\",\"action\":[\"style\",\"padding-bottom: unset !important;\"]}"],["{\"selector\":\".main_ad_head_wide\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\".with-ad[data-layout=\\\"list\\\"] .main-header\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".with-ad[data-layout=\\\"list\\\"][data-section-type=\\\"new-video\\\"] .content-wrap:nth-child(-1n+2)\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".c-ad-103\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\".App__contentsMap[style=\\\"height: calc(100% - 50px);\\\"]\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\"#sidebar[style^=\\\"height:\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".media_article .articlegroups .d-block:not(:first-of-type)\",\"action\":[\"style\",\"border-top: none !important; padding-top: 0 !important;\"]}"],["{\"selector\":\"#cgrig_base_pic\",\"action\":[\"style\",\"grid-auto-rows: auto !important;\"]}","{\"selector\":\"#cgrig_cont\",\"action\":[\"style\",\"grid-row-start: auto !important; grid-row-end: auto !important;\"]}","{\"selector\":\"#cgrig_left\",\"action\":[\"style\",\"grid-row-start: 3 !important; grid-row-end: 7 !important;\"]}"],["{\"selector\":\".block-sub-ad + .block-sub\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".block-sub-recommend[style=\\\"margin-top:30px;\\\"]\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".relatedLinksPhoto > ul#orecView2\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".nav-menu-width.margin.no-side-margin\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".side-ad-area.half-margin\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"div[style=\\\"margin: auto; width: 930px; height: 265px; text-align: center;\\\"]\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\".gPr.u-mtbM\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".gPr_title.u-ttl01\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".p-dol .gNews_title.u-ttl01\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".csh_main\",\"action\":[\"style\",\"padding-top: 30px !important;\"]}"],["{\"selector\":\".top_banner_area\",\"action\":[\"style\",\"height: 44px !important\"]}"],["{\"selector\":\".viewer, .viewer .imgWrap, .viewer .lastPage.slick-slide, .viewer .slick-list, .viewer .slick-track, .viewerBody\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\"#sub-col-wrap_top280\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#hidari\",\"action\":[\"style\",\"top: unset !important;\"]}"],["{\"selector\":\"#asideRight .box.bottom\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".c167:nth-child(2)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".c213:nth-child(2)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".c422:nth-child(2)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#index_nav > h1\",\"action\":[\"style\",\"padding-top: 30px!important;\"]}","{\"selector\":\"body:not(.tp) > div#container > #main.template1\",\"action\":[\"style\",\"padding-top: 20px !important;\"]}"],["{\"selector\":\"div[class=\\\"block recommend\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\"#subProgram\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body[style*=\\\"position\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".side_box\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#subAInner[style]\",\"action\":[\"style\",\"position: static !important;margin-top: auto !important;\"]}","{\"selector\":\"._2pnTOjTu\",\"action\":[\"style\",\"width: auto !important;\"]}"],["{\"selector\":\"#entry[class^=\\\"e\\\"]\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}","{\"selector\":\"#new\",\"action\":[\"style\",\"position: static !important;\"]}","{\"selector\":\"#side[class^=\\\"s\\\"]\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"div#wrapper.on\",\"action\":[\"style\",\"padding-top: 450px !important;\"]}","{\"selector\":\"div.on h1\",\"action\":[\"style\",\"top: 386px !important;\"]}","{\"selector\":\"div.on nav#path\",\"action\":[\"style\",\"top: 330px !important;\"]}"],["{\"selector\":\"#right\",\"action\":[\"style\",\"padding-top: 25px !important;\"]}"],["{\"selector\":\"#main\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}","{\"selector\":\"#side[class^=\\\"ad\\\"]\",\"action\":[\"style\",\"border-top: 0 !important;\"]}","{\"selector\":\".adh\",\"action\":[\"style\",\"border-top: 0 !important;\"]}"],["{\"selector\":\".gadget_topics > div.cont.last-child\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".sub > div.section > span.heading\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".center_column\",\"action\":[\"style\",\"min-height: 1500px!important;\"]}"],["{\"selector\":\"#signin-with-twitter\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\".right-container[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".medipartner\",\"action\":[\"style\",\"position: static !important;\"]}","{\"selector\":\".slidead_smartphone_top + script + script + h2\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"body:not(.custom_1):not(.custom_2):not(.template_news):not([id])\",\"action\":[\"style\",\"margin-top: 0 !important; background-position-y: 0% !important;\"]}"],["{\"selector\":\"#left\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#body-in > div[class^=\\\"d-contents\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#tx7player[style*=\\\"opacity: 0.\\\"]\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\".l-generalContent-secondary[style=\\\"position: unset;\\\"]\",\"action\":[\"style\",\"position: sticky !important;\"]}","{\"selector\":\"main > div.l-generalContent-secondary\",\"action\":[\"style\",\"position: sticky !important;\"]}"],["{\"selector\":\"footer\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".isJack\",\"action\":[\"style\",\"margin-top: 0!important;\"]}"],["{\"selector\":\"#wholeHeaderPane\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#contents\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"#lower section.character ul.character_list li.standby\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\".hustle-no-scroll\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".fortune-submit\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body[style=\\\"padding: 0px 0px 154px;\\\"]\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}"],["{\"selector\":\"div[class^=\\\"LayoutContentInner-sc\\\"] > div[class^=\\\"Promotion-sc\\\"]\",\"action\":[\"style\",\"grid-template-columns: 1fr 0 !important;\"]}"],["{\"selector\":\"#top #head\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".ad_common_1_970x250\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\"#js-forms\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\".bbsmenu-with-ad\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}","{\"selector\":\"div[id$=\\\"AdsMain\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\"div[itemprop=\\\"itemListElement\\\"][style=\\\"margin-top: 100px;\\\"]\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#breadcrumb\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#ydn-bot\",\"action\":[\"style\",\"visibility: hidden !important; height: 0 !important;\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"display: block !important; width: 100% !important; height: 100% !important;\"]}"],["{\"selector\":\".l-contentsSub[style^=\\\"height\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".inv_scroll_cancel\",\"action\":[\"style\",\"overflow: auto !important; height: auto !important;\"]}","{\"selector\":\"div[style^=\\\"max-width: 1000px; width: 100%; height: 150px; margin: 0 auto 50px auto;\\\"]\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\"div[style=\\\"width:730px;font-size:11pt;\\\"] > table[width=\\\"730\\\"]\",\"action\":[\"style\",\"width: 380px !important;\"]}"],["{\"selector\":\"body[style^=\\\"overflow:\\\"]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".ly_content_wrapper\",\"action\":[\"style\",\"margin-bottom: 0!important;\"]}"],["{\"selector\":\".pum-open\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#result_nav\",\"action\":[\"style\",\"bottom: 0 !important;\"]}"],["{\"selector\":\".s-ad\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"#bottom_area\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"#cb-container\",\"action\":[\"style\",\"padding-top: 110px !important;\"]}","{\"selector\":\".ovni-header\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"padding-bottom: 354px !important;\"]}"],["{\"selector\":\"#footer\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\"#main[style=\\\"padding-bottom:300px;\\\"]\",\"action\":[\"style\",\"padding-bottom: 170px !important;\"]}"],["{\"selector\":\".ads970\",\"action\":[\"style\",\"height: 0 !important; min-height: 0 !important;\"]}"],["{\"selector\":\".wym-v2022__header.is-scroll-up ~ .wym-v2022__footer-fixed\",\"action\":[\"style\",\"bottom: 0 !important;\"]}"],["{\"selector\":\".adsepa\",\"action\":[\"style\",\"height: 0 !important;\"]}","{\"selector\":\".reply_txad\",\"action\":[\"style\",\"border: 0 !important;\"]}","{\"selector\":\".thread_txad\",\"action\":[\"style\",\"border: 0 !important;\"]}"],["{\"selector\":\"#wrap01\",\"action\":[\"style\",\"height: 2205px !important;\"]}","{\"selector\":\".tabpain[style=\\\"left: -260px; top: 280px;\\\"]\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\".tabpain[style=\\\"top: 550px; left: 0px;\\\"]\",\"action\":[\"style\",\"top: -1120px !important;\"]}"],["{\"selector\":\".following_buttons_upper\",\"action\":[\"style\",\"bottom: 0 !important;\"]}"],["{\"selector\":\".ads_native\",\"action\":[\"style\",\"visibility: hidden !important;margin: 0 !important;\"]}"],["{\"selector\":\"#stage\",\"action\":[\"style\",\"max-height: 100% !important;\"]}"],["{\"selector\":\"body.app-scroll-lock\",\"action\":[\"style\",\"position: relative!important;overflow-y: unset !important;\"]}"],["{\"selector\":\".header\",\"action\":[\"style\",\"height: 50px !important;\"]}"],["{\"selector\":\"#wrap_contents_box\",\"action\":[\"style\",\"min-height: 676px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\"._fukugan_grid\",\"action\":[\"style\",\"height: auto!important;\"]}"],["{\"selector\":\"#main-container\",\"action\":[\"style\",\"padding: 0px 60px 80px !important;\"]}"],["{\"selector\":\".l-sidebar-b[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#side-r\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#adnone\",\"action\":[\"style\",\"height: 724px !important;\"]}"],["{\"selector\":\"#writerprofile + aside.adsense\",\"action\":[\"style\",\"height: 90px !important; width: 0 !important;\"]}"],["{\"selector\":\".clearfix.contents\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\".blockContainer[style$=\\\"-60px auto;\\\"] > div[style=\\\"min-height: 90px;\\\"]\",\"action\":[\"style\",\"min-height: 1px !important;\"]}","{\"selector\":\".sideContents.ie-sticky[style$=\\\"min-height: 1500px;\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\".latestnewstable2014[height^=\\\"1\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".side[style^=\\\"height\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"height:60px !important;\"]}"],["{\"selector\":\".adBillBoardPC\",\"action\":[\"style\",\"min-height: 0 !important\"]}"],["{\"selector\":\".adBillboard_pc\",\"action\":[\"style\",\"height: 0 !important; min-height: 0 !important; margin-bottom: 0 !important;\"]}"],["{\"selector\":\"body[style=\\\"overflow-y: hidden;\\\"]\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"],["{\"selector\":\"body.header_bg_ad.modal-open\",\"action\":[\"style\",\"padding-right: 0 !important; overflow: auto!important;\"]}"],["{\"selector\":\"#header_rtranking\",\"action\":[\"style\",\"top: 120px !important;\"]}","{\"selector\":\"div[id^=\\\"container_in\\\"]\",\"action\":[\"style\",\"margin-top: 240px !important;\"]}"],["{\"selector\":\".vjs-controls-disabled.vjs-error .vjs-control-bar\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".app-container[aria-expanded=\\\"false\\\"] section.with-ad\",\"action\":[\"style\",\"width: calc(100% - 20px) !important;\"]}"],["{\"selector\":\"body.withsky div#shellcontent[style]\",\"action\":[\"style\",\"right: 0 !important;\"]}"],["{\"selector\":\".articleList-attention[style^=\\\"min-height\\\"]\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\"body[style=\\\"position: fixed;\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#common-header > div[class^=\\\"common-header-pc-\\\"]\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#main\",\"action\":[\"style\",\"width:auto !important; padding-left:15px !important;\"]}","{\"selector\":\".tngMainT\",\"action\":[\"style\",\"width:100% !important;\"]}"],["{\"selector\":\"#center-left\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".right-container\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#plugin2[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#scroll.fixed\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#sub\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#sidebar[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"#left[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".fix_box-m\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".BottomContainer.InView\",\"action\":[\"style\",\"min-height:auto !important;\"]}"],["{\"selector\":\".jackFix + div.siteContent\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".siteRanking-main\",\"action\":[\"style\",\"margin-left: 0!important;\"]}"],["{\"selector\":\".wym-v2022__header.is-scroll-up ~ .wym-v2022__footer-fixed.is-pc-bottom\",\"action\":[\"style\",\"bottom: 0 !important;\"],\"tasks\":[[\"matches-media\",\"(min-width: 641px)\"]]}"],["{\"selector\":\"div[class^=\\\"handwrite-box-\\\"]:has(> div.ggcontent > ins.adsbygoogle)\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\"#video-container[style*=\\\"display: none;\\\"]\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".pc_block[style^=\\\"position: sticky\\\"]\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"body[style=\\\"overflow: hidden;\\\"]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#entry-text\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"nav:not(.fixed):not([id])\",\"action\":[\"style\",\"top: 132px !important;\"]}"],["{\"selector\":\"#yjnFooter.kBXsbI\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"#sidebar\",\"action\":[\"style\",\"min-height: unset !important;\"]}"],["{\"selector\":\".min-h-\\\\[250px\\\\]\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\".mno-pitari\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#is_header_banner\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"#footer[style=\\\"margin-bottom: 100px;\\\"]\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"main #bnr_about\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"main #bnr_books\",\"action\":[\"style\",\"top: 636px !important;\"]}","{\"selector\":\"main #box_ranking\",\"action\":[\"style\",\"top: 156px !important;\"]}"],["{\"selector\":\"#main-footer[style=\\\"padding-bottom:100px;\\\"]\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}"],["{\"selector\":\"#_popIn_recommend_right\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\".bdotted[style=\\\"text-align:center; margin-top:10px;\\\"]\",\"action\":[\"style\",\"height: 0 !important;border: none !important;\"]}"],["{\"selector\":\".google\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\"#CommonSideColumn_play-report___f_o9.CommonSideColumn_item__OI_xC:not(:first-child)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#moduleFixedBnr[style^=\\\"height\\\"]\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".MuiGrid-container.MuiGrid-root[style*=\\\"min-height:\\\"]\",\"action\":[\"style\",\"min-height: auto!important;\"]}","{\"selector\":\".MuiGrid-item.MuiGrid-root[style*=\\\"min-height:\\\"]\",\"action\":[\"style\",\"min-height: auto!important;\"]}"],["{\"selector\":\"div[class^=\\\"ranking_\\\"] > div[class^=\\\"ranking_pRanking_List\\\"]:has(> ol[data-ranking=\\\"weekly\\\"] + div[class^=\\\"ranking_pRanking_List_Wrapper\\\"] > ol[data-ranking=\\\"amazon\\\"])\",\"action\":[\"style\",\"transform: none !important;\"]}","{\"selector\":\"div[class^=\\\"ranking_\\\"] > div[class^=\\\"ranking_sRanking_Nav_\\\"] > div[data-ranking=\\\"weekly\\\"]\",\"action\":[\"style\",\"color: #1b9b6f !important; fill: #1b9b6f !important;\"]}","{\"selector\":\"div[class^=\\\"ranking_\\\"] > div[class^=\\\"ranking_sRanking_Nav_\\\"] > div[data-ranking=\\\"weekly\\\"]::after\",\"action\":[\"style\",\"transform: none !important;\"]}","{\"selector\":\"div[class^=\\\"ranking_\\\"] > div[class^=\\\"ranking_sRanking_Nav_\\\"]:has(> div[data-ranking=\\\"weekly\\\"] + div[data-ranking=\\\"amazon\\\"]) + div[class^=\\\"ranking_sRanking_ListContainer_\\\"]\",\"action\":[\"style\",\"transform: none !important;\"]}"]];

const hostnamesMap = new Map([["mytry.jp",0],["wiki.yjsnpi.nu",1],["exploader.net",2],["guitarmagazine.jp",3],["b.best-hit.tv",4],["jprime.jp",5],["shindanmaker.com",6],["tters.jp",7],["egotter.com",8],["logworker.net",9],["musmus.main.jp",10],["snrec.jp",11],["kledgeb.blogspot.com",12],["animenew.be",13],["friday.kodansha.co.jp",14],["intaa.net",15],["battlecats-db.com",16],["sekai-kabuka.com",17],["realtime-chart.info",18],["ouminews.net",19],["knshow.com",20],["applion.jp",21],["380cc.cc",22],["itest.bbspink.com",23],["nlab.itmedia.co.jp",24],["eromovie-s.com",25],["2game.info",26],["telling.asahi.com",27],["erologz.com",28],["ge-soku.com",29],["hitoikigame.com",30],["afsgames.com",31],["wpb.shueisha.co.jp",32],["minkch.com",33],["soredoko.jp",34],["allabout.co.jp",35],["vip-front.video.g.fc2.com",[36,128]],["video.fc2.com",[36,37,128]],["map.yahoo.co.jp",38],["umaroidblog.com",39],["maonline.jp",40],["peko-step.com",41],["oricon.co.jp",42],["mapfan.com",43],["shirotomaster.com",44],["dengekionline.com",45],["ekr.chosunonline.com",46],["life.chosunonline.com",46],["www.chosunonline.com",47],["mangalove.me",48],["gameranbu.jp",49],["kakijun.jp",50],["gdm.or.jp",51],["barks.jp",52],["hostlove.com",53],["bunshun.jp",54],["anime.eiga.com",55],["dailynewsonline.jp",56],["azby.fmworld.net",57],["ameblo.jp",58],["ff8clear.net",[59,60]],["ff10-hd.com",59],["sheepplus.com",[59,62]],["winningpost8.com",[59,60]],["dqclear.com",61],["e-nenpi.com",63],["wazap.com",64],["estate.nikkan.co.jp",65],["twpf.jp",66],["h-pon.doorblog.jp",67],["hiraganakeyaki.blog.jp",67],["4gamer.net",68],["matometanews.com",69],["jumpmatome2ch.biz",70],["video.tv-tokyo.co.jp",71],["gizmodo.jp",72],["colordic.org",73],["games.yahoo.co.jp",74],["lesson.golfdigest.co.jp",75],["score.golfdigest.co.jp",75],["9db.jp",76],["dq-dai.com",77],["eguchi-hd.co.jp",78],["uranaitv.jp",79],["t-mall.kantangame.com",80],["auctions.yahoo.co.jp",81],["avfuuzoku.com",82],["news.jorudan.co.jp",83],["itest.5ch.net",84],["k-knuckles.jp",85],["weather.yahoo.co.jp",86],["supercweather.com",87],["applica.info",88],["twivideo.net",89],["kabegamikan.com",90],["news-postseven.com",91],["minkabu.jp",92],["naitter.hippy.jp",93],["pictab.art",93],["my-nikki.net",93],["ero-gazou.jp",93],["mapion.co.jp",94],["teny.co.jp",95],["roote.ekispert.net",96],["ovninavi.com",97],["medibang.com",98],["piapro.jp",99],["minpo.jp",100],["young-machine.com",101],["bbs4.mozakin.com",102],["mozakin.com",103],["okwave.jp",104],["hrs-game.main.jp",105],["main-hrs-game.ssl-lolipop.jp",105],["firecross.jp",106],["novel.prcm.jp",107],["security-next.com",108],["gigafile.nu",109],["freesoft-100.com",110],["automaton-media.com",110],["sunri2525.blog.jp",111],["blog.fc2.com",112],["duellinks.doorblog.jp",113],["news.2chblog.jp",114],["shikaku2ch.doorblog.jp",115],["otajo.jp",116],["togetter.com",117],["gendai.media",118],["cosp.jp",119],["otonanswer.jp",120],["weather.biglobe.ne.jp",121],["figgy.jp",122],["gamer.ne.jp",123],["onlinegamer.jp",123],["uraaka.com",124],["yamareco.com",125],["pokemon-matome.net",126],["asahi.com",127],["ideo.laxd.com",128],["mail.yahoo.co.jp",129],["news.mynavi.jp",130],["sp.jp.wazap.com",131],["tv-asahi.co.jp",132],["uwl.weblio.jp",133],["buhidoh.net",134],["saikyo-jump.com",135],["kosoch.com",136],["anige-sokuhouvip.com",137],["itaishinja.com",138],["digital-thread.com",138],["kyousoku.net",138],["oryouri.2chblog.jp",138],["gahalog.2chblog.jp",139],["itainews.com",140],["takenokosokuhou.com",141],["nicovideo.jp",142],["otakomu.jp",[143,144]],["blog.esuteru.com",[143,144]],["jikayosha.jp",145],["kanji.me",146],["pixnest.pipio.site",147],["kakaku.com",148],["appget.com",149],["peing.net",150],["gigazine.net",151],["wealthadvisor.co.jp",152],["news.yahoo.co.jp",153],["idle-girl.com",154],["eromanga-show.com",155],["hentai-one.com",155],["corp.rakuten.co.jp",156],["musicman.co.jp",157],["weathernews.jp",158],["j-defense.ikaros.jp",159],["jisin.jp",160],["news.audee.jp",161],["kyosui.net",162],["amigo.tennis365.net",163],["app.famitsu.com",164],["bbs.kakaku.com",165],["news.so-net.ne.jp",166],["lifehacker.jp",167]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/

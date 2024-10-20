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

// ruleset: irn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"div#custom_html-3\",\"tasks\":[[\"has\",{\"selector\":\"p.section-heading\",\"tasks\":[[\"has-text\",\"رپورتاژ\"]]}]]}","{\"selector\":\"div.wbie\",\"tasks\":[[\"has\",{\"selector\":\"div.section-heading\",\"tasks\":[[\"has-text\",\"آگهی متنی\"]]}]]}","{\"selector\":\"div.wpb_column\",\"tasks\":[[\"has\",{\"selector\":\"div.section-heading\",\"tasks\":[[\"has-text\",\"آگهی متنی\"]]}]]}","{\"selector\":\"div.wpb_column\",\"tasks\":[[\"has\",{\"selector\":\"h3.section-heading\",\"tasks\":[[\"has-text\",\"رپورتاژ\"]]}]]}"],["{\"selector\":\".block > header > h2\",\"tasks\":[[\"has-text\",\"/وبگردی|نیازمندی|رپرتاژ/\"],[\"upward\",\".block\"]]}","{\"selector\":\".carousel-inner > .item > .row > .col-md-4 > article:has(a[href*=\\\"aftabir.com/reportages\\\"])\",\"tasks\":[[\"upward\",\".col-md-4\"]]}"],["{\"selector\":\".yn-bnr\",\"tasks\":[[\"upward\",\".custom\"]]}"],["{\"selector\":\".sidebar.col-4 > ul > li > h4\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"],[\"upward\",\"li\"]]}"],["{\"selector\":\".post-sticky\",\"tasks\":[[\"upward\",\".row\"]]}"],["{\"selector\":\"div.video-list\",\"tasks\":[[\"has\",{\"selector\":\"> div > div\",\"tasks\":[[\"has\",{\"selector\":\"span.ad\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}]]}"],["{\"selector\":\"#yektanet-pos-2\",\"tasks\":[[\"upward\",\".boxsh\"]]}","{\"selector\":\".menu_left-side-ads\",\"tasks\":[[\"upward\",\".boxsh\"]]}","{\"selector\":\".menu_right-side-ads\",\"tasks\":[[\"upward\",\".boxsh\"]]}"],["{\"selector\":\".widget-asan > span > a\",\"tasks\":[[\"upward\",\".widget-asan\"]]}"],["{\"selector\":\"#yt_spotlight3 .klatest-items-div > .modtitle\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".klatest-items-div\"]]}"],["{\"selector\":\".benawa_contentarea .benawa_treeads\",\"tasks\":[[\"upward\",\".benawa_contentarea\"]]}"],["{\"selector\":\"#macy-container > article > .articlebox > a[href*=\\\"/blogsazan.com/mag/reportage\\\"]\",\"tasks\":[[\"upward\",\"article\"]]}","{\"selector\":\".blog_center_bar > .main_title\",\"tasks\":[[\"has-text\",\"مطالب پیشنهادی\"]]}","{\"selector\":\".blog_right_bar > .main_title\",\"tasks\":[[\"has-text\",\"آخرین مطالب مجله\"],[\"spath\",\" + .main_content_free\"]]}","{\"selector\":\".blog_right_bar > .main_title\",\"tasks\":[[\"has-text\",\"آخرین مطالب مجله\"]]}","{\"selector\":\".main_content[style=\\\"border-radius:10px;\\\"] > div[style=\\\"padding: 10px; text-align:center; font-size:13px;\\\"] > a\",\"tasks\":[[\"upward\",\".main_content\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"/پیشنهاد|مفید/\"]]}]]}"],["{\"selector\":\".linkbox\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\".bd-sidebar > div > .widget > .block-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"#primary\",\"tasks\":[[\"not\",{\"selector\":\"> .categoriesPageHead\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"]]}],[\"spath\",\".rowList > li:has(a[href*=\\\"/promoted/\\\"])\"]]}"],["{\"selector\":\"div.py-2\",\"tasks\":[[\"has\",{\"selector\":\"> div.items-center > div.swiper-container > div.swiper-wrapper > div.swiper-slide > div.h-full > div.flex > span.text-caption\",\"tasks\":[[\"has-text\",\"سفارشی\"]]}]]}"],["{\"selector\":\"div.flex.w-full > div.grow.min-w-0 > div[class*=\\\"styles_PdpProductContent__s\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div.break-words > div.text-body-2\",\"tasks\":[[\"has-text\",\"آگهی‌شده\"]]}]]}"],["{\"selector\":\"form#captch_form > input[name=\\\"_wp_http_referer\\\"]\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"header.recent_news_wrapper > ul.news_text > li\",\"tasks\":[[\"has-text\",\"تبلیغ :\"]]}"],["{\"selector\":\".general-box\",\"tasks\":[[\"has\",{\"selector\":\".box-header\",\"tasks\":[[\"has-text\",\"وب گردی\"]]}]]}"],["{\"selector\":\".latestContents\",\"tasks\":[[\"has\",{\"selector\":\".bTitle\",\"tasks\":[[\"has-text\",\"وب گردی\"]]}]]}"],["{\"selector\":\"div#sidebar300 > div.mywidget > div.titles\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"spath\",\" + div.titline\"]]}","{\"selector\":\"div#sidebar300 > div.mywidget > div.titles\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}","{\"selector\":\"div.mywidget\",\"tasks\":[[\"has\",{\"selector\":\"> div.titles\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\".footer-content .tag-cloud\",\"tasks\":[[\"upward\",\".foot-col\"]]}"],["{\"selector\":\"div#macy-container > article\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> div.articlebox > div.icons\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}","{\"selector\":\"div.main_title\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"مطالب پیشنهادی از سراسر وب\"]]}]]}"],["{\"selector\":\"div.g\",\"tasks\":[[\"has\",{\"selector\":\"> div.g-col > span[style]\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}],[\"spath\",\":has(div.post-link-box1)\"]]}","{\"selector\":\"div.sidebar > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget-head > h3\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\"span#is_count, span#is_not\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"table > tbody > tr > td > .dagh > strong\",\"tasks\":[[\"has-text\",\"اخبار تبلیغاتی\"]]}"],["{\"selector\":\"div[id$=\\\"col-up\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"spath\",\" + div[id$=\\\"col-body\\\"]\"]]}","{\"selector\":\"div[id$=\\\"col-up\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}"],["{\"selector\":\"aside.sidebar-right > div.box\",\"tasks\":[[\"has\",{\"selector\":\"> div.title > h4.title-text\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/reportage\"]]}],[\"spath\",\" .main-term-4998\"]]}"],["{\"selector\":\"\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/reportage\"]]}],[\"spath\",\" .main-term-4662\"]]}"],["{\"selector\":\".m-ads\",\"tasks\":[[\"upward\",\".sidebar-left-item.content\"]]}"],["{\"selector\":\"style\",\"tasks\":[[\"has-text\",\"@media print\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"@media print\"]]}"],["{\"selector\":\".rbox .rbox-h\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".rbox\"]]}"],["{\"selector\":\".bahavadaran-news > .header-section\",\"tasks\":[[\"has-text\",\"دیگر رسانه ها\"]]}"],["{\"selector\":\"[onclick^=\\\"sendBannerDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}","{\"selector\":\"[onclick^=\\\"sendCardDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}","{\"selector\":\"[onclick^=\\\"sendDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}","{\"selector\":\"[onclick^=\\\"sendViewMoreDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}"],["{\"selector\":\"section.other_news > header\",\"tasks\":[[\"has-text\",\"رپرتاژ\"],[\"spath\",\" + div\"]]}","{\"selector\":\"section.other_news > header\",\"tasks\":[[\"has-text\",\"رپرتاژ\"]]}"],["{\"selector\":\".footer_column > div > ul > li > a\",\"tasks\":[[\"has-text\",\"طراحی سایت\"]]}","{\"selector\":\".lnk > center > a > img[alt=\\\"ADS\\\"]\",\"tasks\":[[\"upward\",\"center\"]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"aside > div > div > span\",\"tasks\":[[\"has-text\",\"تبلیغ\"]]}]]}"],["{\"selector\":\"div.text-white\",\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}"],["{\"selector\":\".sidebar_item > .sidebar_item__inner > .sidebar_item__title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".sidebar_item\"]]}"],["{\"selector\":\"aside#left > .box > .title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".box\"]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"pa_vc_url\"]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\"> header > h4\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\".right-sidebar > aside > .tit-side\",\"tasks\":[[\"has-text\",\"لینک های مفید\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\".dinu\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\"header\",\"tasks\":[[\"has-text\",\"مفید\"]]}]]}"],["{\"selector\":\".widget > h3\",\"tasks\":[[\"has-text\",\"مطالب مفید\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\".GSBlock > div > .title > h3\",\"tasks\":[[\"has-text\",\"لینک های ویژه\"],[\"upward\",\".GSBlock\"]]}","{\"selector\":\".GSLiveTab > .tab_container1 > #tab3 > h2\",\"tasks\":[[\"has-text\",\"مقالات\"],[\"upward\",\".GSLiveTab\"]]}","{\"selector\":\".OpenTable > div > center > a[rel=\\\"nofollow\\\"] > .img-responsive\",\"tasks\":[[\"upward\",\".OpenTable\"]]}","{\"selector\":\".OpenTable > h2\",\"tasks\":[[\"has-text\",\"مقالات\"],[\"upward\",\".OpenTable\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/fa/news/pr\"]]}],[\"spath\",\" .items-row\"],[\"has\",{\"selector\":\".sazitem_imgcat\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"]]}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widget_title\",\"tasks\":[[\"has-text\",\"پیوند\"]]}]]}"],["{\"selector\":\"main.mainV2 div\",\"tasks\":[[\"has\",{\"selector\":\"> section > a > div > div > span\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}","{\"selector\":\"main.mainV2 div\",\"tasks\":[[\"has\",{\"selector\":\"> section > div > div > h2 > p\",\"tasks\":[[\"has-text\",\"/^Ad$/\"]]}]]}"],["{\"selector\":\"input.filter\",\"action\":[\"remove-attr\",\"disabled\"]}","{\"selector\":\"input.filter\",\"action\":[\"remove-class\",\"filter\"]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"user-select\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"wccp\"]]}"],["{\"selector\":\"div.col-md-3 > .box.style-1 > .box-header\",\"tasks\":[[\"has-text\",\"/تبلیغات رپورتاژ|لوگو اسپانسر/\"],[\"upward\",\".box\"]]}"],["{\"selector\":\"aside.column-side > div.block\",\"tasks\":[[\"has\",{\"selector\":\"> div.block-title\",\"tasks\":[[\"has-text\",\"وبگردی\"]]}]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/category/website/reportage/\"]]}],[\"spath\",\" .box\"],[\"has-text\",\"رپورتاژ آگهی\"]]}"],["{\"selector\":\".sidebar > .d-flex > aside > section > figure:has(a[href*=\\\"ad.technews-iran.com/\\\"])\",\"tasks\":[[\"upward\",\".sidebar\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/tag/رپورتاژ-آگهی/\"]]}],[\"spath\",\" .posts-list > article.tag-8164 > .clearfix > a[class=\\\"title\\\"][href$=\\\"reportage/\\\"]\"],[\"upward\",\"article\"]]}","{\"selector\":\".widget > p > #KajAds_Panel\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\"div.buy_box > a.cheapest-seller-wrapper > div.online_seller div.online_badge\",\"tasks\":[[\"has-text\",\"آگهی\"],[\"upward\",\"div.buy_box\"]]}"],["{\"selector\":\"input[type=\\\"hidden\\\"]:is(input[name=\\\"usr_login\\\"], input[name=\\\"referer\\\"], input#usr_resolution, input#usr_os, input#usr_browser)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div.main > div.mainx1 > div\",\"tasks\":[[\"has\",{\"selector\":\"> span.side-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\"aside > .title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\".LeftSide > .TableOfContent > div[style=\\\"text-align:center;\\\"]\",\"tasks\":[[\"has-text\",\"صفحات مرتبط\"],[\"upward\",\".TableOfContent\"]]}"],["{\"selector\":\".part-content-wordpres > .title-section\",\"tasks\":[[\"has-text\",\"پست تبلیغاتی\"],[\"upward\",\".part-content-wordpres\"]]}","{\"selector\":\".small-tab-news > .sidebar-news > ul\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".small-tab-news\"]]}","{\"selector\":\"section.tabliqat-text > header\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\"section.tabliqat-text\"]]}"],["{\"selector\":\".content-column\",\"tasks\":[[\"not\",{\"selector\":\"> .archive-title\",\"tasks\":[[\"has-text\",\"رپرتاژ تبلیغاتی\"]]}],[\"spath\",\" .item-inner:has(a[href*=\\\"/pr/\\\"])\"]]}"],["{\"selector\":\".herald-sidebar .widget\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}],[\"spath\",\" p:not(:has(a[href*=\\\"kurdsoft\\\"])):not(:has(a[href*=\\\"7ganj.ir\\\"]))\"]]}"],["{\"selector\":\"input[id=\\\"PreparePrint\\\"]\",\"action\":[\"remove-attr\",\"disabled\"],\"tasks\":[[\"watch-attr\",[\"disabled\"]]]}"],["{\"selector\":\"div.loading-banner-modal.is-loading\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".widget > .widget-top\",\"tasks\":[[\"has-text\",\"آگهی متنی\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"vc_url\"]]}"],["{\"selector\":\"#sidebar .widget a[href*=\\\"faradars.org\\\"] > img[alt*=\\\"فرادرس\\\"]\",\"tasks\":[[\"upward\",\".widget\"]]}","{\"selector\":\"#sidebar .widget div[id^=\\\"kaprila_linktable\\\"]\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/category/رپرتاژ/\"]]}],[\"spath\",\" article > footer > span.post-meta-cat\"],[\"has-text\",\"رپرتاژ\"],[\"upward\",\"article\"]]}","{\"selector\":\"aside > div > span > a.ani[target=\\\"_blank\\\"][title]\",\"tasks\":[[\"upward\",\"div\"]]}"],["{\"selector\":\".apktops-slider-section ul > li:not(:has(a[href=\\\"https://t.me/+UgVXT9YqXOs0MQTy\\\"]))\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".post-article > .content > .row .entry-content\",\"tasks\":[[\"has-text\",\"اسپاتیفای پرمیوم از APKTOPS\"],[\"upward\",\".post-article\"]]}","{\"selector\":\".spcontent\",\"tasks\":[[\"upward\",\".post\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/category/رپرتاژ-آگهی\"]]}],[\"spath\",\" .archive-blog > article > figure > .entry-category\"],[\"has-text\",\"رپرتاژ آگهی\"],[\"upward\",\"article\"]]}"],["{\"selector\":\".page-body > .post:not(article) > .yn-bnr:empty\",\"tasks\":[[\"upward\",\".post\"]]}","{\"selector\":\".page-body > .post:not(article) > [id^=\\\"pos-article-\\\"]:empty\",\"tasks\":[[\"upward\",\".post\"]]}","{\"selector\":\".sidebar-right > .box > .title\",\"tasks\":[[\"has-text\",\"لینک های مفید\"],[\"upward\",\".box\"]]}"],["{\"selector\":\"section.text_type_holder\",\"tasks\":[[\"has\",{\"selector\":\"> header.header_section > h4\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"#sidebar > .block > h5\",\"tasks\":[[\"has-text\",\"لینک های متنی\"],[\"upward\",\".block\"]]}"],["{\"selector\":\"a.dl-btn\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"ads\"]]}]]}"],["{\"selector\":\"div.slider-tab-ring\",\"tasks\":[[\"has\",{\"selector\":\"> h4.extra-menu\",\"tasks\":[[\"has-text\",\"حامیان ما\"]]}]]}"],["{\"selector\":\".main-term-none > .listing > .type-post > .item-inner > .featured > .term-badges\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"],[\"upward\",\".type-post\"]]}","{\"selector\":\".main-term-none > .listing > .type-post > .item-inner > .post-meta > .post-author-a > .author\",\"tasks\":[[\"has-text\",\"واحد تبلیغات\"],[\"upward\",\".type-post\"]]}"],["{\"selector\":\".linkbox > header\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".linkbox\"]]}"],["{\"selector\":\"#kaprila_downloadly_ir_side-2\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#kaprila_downloadly_ir_static-post\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#kaprila_downloadly_ir_top-side\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#kaprila_linktable\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\".postfixedafterpost\",\"tasks\":[[\"upward\",\".g-cols\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/رپورتاژ\"]]}],[\"spath\",\" .art-post > .head-post > .cat-post\"],[\"has-text\",\"رپورتاژ\"],[\"upward\",\".art-post\"]]}"],["{\"selector\":\"div.sp_ln_box_title\",\"tasks\":[[\"has-text\",\"نیازمندیها\"]]}"],["{\"selector\":\".aside-inner > .widget-sidebar > .title\",\"tasks\":[[\"has-text\",\"/بنر شماره|تبلیغات متنی/\"],[\"upward\",\".widget-sidebar\"]]}"],["{\"selector\":\"div#player-container svg[width=\\\"48\\\"][height=\\\"48\\\"][viewBox=\\\"0 0 64 64\\\"] > g[opacity=\\\"0.6\\\"]\",\"tasks\":[[\"upward\",\"svg\"]]}"],["{\"selector\":\".widget > .widget_title\",\"tasks\":[[\"has-text\",\"پیوندهای مفید\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"div#sidebar > aside > section.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"> a > h5\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\".sidebar > .box > .behtarinbacklink\",\"tasks\":[[\"upward\",\".box\"]]}"],["{\"selector\":\"#ads-container > .box > header\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".box\"]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\"header\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"div[class^=\\\"css-\\\"][dir=\\\"auto\\\"]\",\"tasks\":[[\"has-text\",\"بازارگاه\"],[\"spath\",\" + div[class^=\\\"css-\\\"]:empty + div[class^=\\\"css-\\\"]:has(> div[class^=\\\"css-\\\"][style] > div[class^=\\\"css-\\\"]:empty + div[class^=\\\"css-\\\"][style] > div[style=\\\"width: 25%;\\\"] > div[tabindex=\\\"0\\\"][style=\\\"transition-duration: 0s;\\\"])\"]]}","{\"selector\":\"div[class^=\\\"css-\\\"][dir=\\\"auto\\\"]\",\"tasks\":[[\"has-text\",\"بازارگاه\"]]}"],["{\"selector\":\"div#column3 > table.sidea > tbody > tr\",\"tasks\":[[\"has\",{\"selector\":\"> td > div.mybox > h4\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"div.sidebar > div.box\",\"tasks\":[[\"has\",{\"selector\":\"div.row\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\".aside_boxs > .title_nt_box\",\"tasks\":[[\"has-text\",\"تبلیغ\"],[\"upward\",\".aside_boxs\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.oncontextmenu=\"]]}","{\"selector\":\"style\",\"tasks\":[[\"has-text\",\"user-select\"]]}","{\"selector\":\"style[media=\\\"print\\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"display:none\"]]}","{\"selector\":\"style[media=\\\"print\\\"]\",\"tasks\":[[\"has-text\",\"display:none\"]]}"],["{\"selector\":\".side_left > .side > .title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".side_left\"]]}"],["{\"selector\":\"div.elementor > section > div.elementor-container\",\"tasks\":[[\"has\",{\"selector\":\"h2.heading-title\",\"tasks\":[[\"has-text\",\"لینک‌های کاربردی\"]]}]]}"],["{\"selector\":\".entry\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\"div.col-12 div#ctl00_topModule1_pnlTop\",\"tasks\":[[\"has\",{\"selector\":\"> div.divleftmod > div.py-2 > strong\",\"tasks\":[[\"has-text\",\"جت سئو\"]]}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.location=\"]]}"],["{\"selector\":\"div.side_left > div.side > div.title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\"div.side\"]]}"],["{\"selector\":\".post > .post__content > .post__category\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"],[\"upward\",\".post\"]]}"],["{\"selector\":\".sidbar > p > strong\",\"tasks\":[[\"has-text\",\"پیوندها\"],[\"upward\",\".sidbar\"]]}"],["{\"selector\":\"div.featured-holder > div.owl-carousel > div.owl-stage-outer > div.owl-stage > div.owl-item:has(> div.item > div > div.placeholder > iframe[src^=\\\"https://a.reymit.ir/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.oncontextmenu =\"]]}"],["{\"selector\":\"div.left-body\",\"tasks\":[[\"has\",{\"selector\":\"> div.left-title\",\"tasks\":[[\"has-text\",\"لینک دوستان\"]]}]]}"],["{\"selector\":\"aside.widget-area > div > div.sk-side\",\"tasks\":[[\"has\",{\"selector\":\"> div.sk-side-title > h2\",\"tasks\":[[\"has-text\",\"دانلود فیلم و سریال جدید\"]]}]]}","{\"selector\":\"aside.widget-area > div > div.sk-side\",\"tasks\":[[\"has\",{\"selector\":\"> div.sk-side-title > h2\",\"tasks\":[[\"has-text\",\"لوازم جانبی کامپیوتر و موبایل\"]]}]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\".top_title\",\"tasks\":[[\"has-text\",\"نیازمندیها\"]]}]]}","{\"selector\":\".film_box\",\"tasks\":[[\"has-text\",\"مدرسه آنلاین\"]]}","{\"selector\":\".stitle_box\",\"tasks\":[[\"has\",{\"selector\":\".top_title\",\"tasks\":[[\"has-text\",\"وب گردی\"]]}]]}"],["{\"selector\":\"section#RightPanel > div.RBC > div.CCTS\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\"div.RBC\"]]}"],["{\"selector\":\"#mostvisited\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"aside.widget_text > div.aside_box_title\",\"tasks\":[[\"has-text\",\"لینک های ویژه\"],[\"upward\",\"aside.widget_text\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/author/d-reportages\"]]}],[\"spath\",\" ul#posts-container > li.post-item > .post-details > .post-meta > .author-meta\"],[\"has-text\",\"دپارتمان تبلیغات\"],[\"upward\",\"li.post-item\"]]}","{\"selector\":\".widget > .widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"div[class][width=\\\"100%\\\"][height=\\\"100%\\\"][style]:empty\",\"tasks\":[[\"matches-css-after\",{\"name\":\"animation\",\"pseudo\":\"after\",\"value\":\"^1\\\\.6s linear 0\\\\.5s infinite normal none running waveKeyframe$\"}],[\"upward\",3]]}","{\"selector\":\"div[class][width=\\\"100%\\\"][height=\\\"100%\\\"][style]:empty\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".form-inline\",\"tasks\":[[\"others\",\"\"]]}"],["{\"selector\":\"form[action^=\\\"link/topPageSubmit/\\\"], div#linkStr\",\"tasks\":[[\"others\",\"\"]]}"],["{\"selector\":\"div.sidebar-home\",\"tasks\":[[\"has\",{\"selector\":\"> div.wbox > strong\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\"noscript\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div.margin-bottom-16 > section.various-cnt\",\"tasks\":[[\"has\",{\"selector\":\"> header.default-header > h2.title\",\"tasks\":[[\"has-text\",\"بازرگانی\"]]}]]}","{\"selector\":\"header.default-header-2 > h2.title\",\"tasks\":[[\"has-text\",\"وبگردی\"]]}"],["{\"selector\":\"#webgardi_list\",\"tasks\":[[\"upward\",\".section_cnt\"]]}"],["{\"selector\":\"li[id^=\\\"ad\\\"]\",\"tasks\":[[\"upward\",\"section.box\"]]}","{\"selector\":\"section.box ul > li.bklnk\",\"tasks\":[[\"upward\",\"section.box\"]]}"],["{\"selector\":\"[class=\\\"widget_text sidebar-box\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغ\"]]}","{\"selector\":\"[class=\\\"widget_text sidebar-box\\\"]\",\"tasks\":[[\"has-text\",\"وبگردی\"]]}"],["{\"selector\":\"section#left-side > aside > h4\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"protoUrl\"]]}"],["{\"selector\":\".widget > .section-heading > .h-text\",\"tasks\":[[\"has-text\",\"لینکستون\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"div.right-sidebar > aside\",\"tasks\":[[\"has\",{\"selector\":\"> div.tit-side\",\"tasks\":[[\"has-text\",\"پیوندهای داغ\"]]}]]}"],["{\"selector\":\"a[name^=\\\"Advertisement\\\"]\",\"tasks\":[[\"upward\",\".wb_element\"]]}"],["{\"selector\":\"aside.left > div.box > div.title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\"div.box\"]]}"],["{\"selector\":\".cside1 > .hside2\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".cside1\"]]}"]];

const hostnamesMap = new Map([["1pezeshk.com",0],["aftabir.com",1],["akharinnews.com",2],["alamto.com",3],["androidgozar.com",4],["aparat.com",5],["arga-mag.com",6],["asandl.com",7],["bazimag.com",8],["benawa.com",9],["blogsazan.com",10],["charbzaban.com",11],["chetor.com",12],["deltapayam.com",13],["digiato.com",14],["digikala.com",15],["www.digikala.com",16],["dlfox.com",17],["donya-e-eqtesad.com",18],["ecoiran.com",19],["elmefarda.com",20],["elmevarzesh.com",21],["eramblog.com",22],["farachart.com",23],["gameeroid.com",24],["ghatreh.com",25],["graphiran.com",26],["harfetaze.com",27],["idehalmag.com",28],["idehaltech.com",29],["iranidata.com",30],["jafekri.com",[31,32]],["coffeeapps.ir",[31,32,77]],["sclinic.ir",[31,32,106]],["p30konkor.com",32],["khabarpu.com",33],["khanefootball.com",34],["khanoumi.com",35],["khodrotak.com",36],["lordroid.com",37],["marzfun.com",38],["mihantrader.com",39],["moderndl.com",40],["mybia4music.com",41],["niniban.com",42],["par30media.com",43],["sakhtafzarmag.com",44],["salameno.com",45],["sariasan.com",46],["sarzamindownload.com",47],["shahrsakhtafzar.com",48],["shereno.com",49],["sheypoor.com",50],["takhfifan.com",51],["takmili.com",[52,53]],["kihanb.ir",[52,96]],["takskin.com",54],["tarafdari.com",55],["techfars.com",56],["technews-iran.com",57],["techrato.com",58],["torob.com",59],["uploadboy.com",60],["vazeh.com",61],["vipofilm.com",62],["zibamoon.com",63],["konkur.in",64],["farnet.io",65],["7ganj.ir",66],["ac.ir",67],["alibaba.ir",68],["amazing.ir",69],["androidparsi.ir",70],["dailymobile.ir",70],["tarfandha.org",70],["androidzoom.ir",71],["anzalweb.ir",72],["apktops.ir",73],["appreview.ir",74],["avaz-kurd.ir",75],["bartarinha.ir",76],["darkroid.ir",78],["digiboy.ir",79],["digiro.ir",80],["dlrozaneh.ir",81],["downloadly.ir",82],["downloadsoftware.ir",83],["entekhab.ir",84],["farsifilm.ir",85],["filmnet.ir",86],["filmsky.ir",87],["gamemods.ir",88],["gamesetup.ir",89],["hamshahrionline.ir",90],["imna.ir",91],["my.irancell.ir",92],["iranjib.ir",93],["kalakamuz.ir",94],["khodropluss.ir",95],["listen2music.ir",97],["mediat.ir",98],["mihand.ir",99],["mohandescenter.ir",100],["najiremix.ir",101],["nex11music.ir",102],["show-music.ir",102],["plaza.ir",103],["power-music.ir",104],["reymit.ir",105],["skinak.ir",107],["subkade.ir",108],["tabnak.ir",109],["taknaz.ir",110],["toranji.ir",111],["uptrack.ir",112],["youc.ir",113],["zoomg.ir",114],["zoomit.ir",114],["xip.li",115],["opizo.me",116],["par30dl.net",117],["pichak.net",118],["rokna.net",119],["55online.news",120],["saat24.news",121],["techna.news",122],["hamtamovie.nl",123],["bandmoviez.one",124],["bazdeh.org",125],["texahang.org",126],["takvim.tj",127],["artmusics.top",128],["harmonydl.us",129]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/

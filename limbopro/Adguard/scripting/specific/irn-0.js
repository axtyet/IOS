/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

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
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["a[href^=\"https://arongroups.co/\"],\na[href^=\"https://arongroups.site/\"]",".banner-cafe,\n.center-talgh","div[data-viewport-type=\"element\"] > div > div[class^=\"DialogAd_DialogWrapper\"]","div.adv",".col-xs-12.col-md-6.main-sidebar > center,\ncenter:nth-of-type(2)","div.panel:has(> div#collapse_Linkestan),\ndiv[style=\"text-align:right; margin:10px;\"]:has(> a[href=\"http://ads.aftab.cc\"])","[href^=\"/advertisements/\"]",".widget_custom_html.widget.container-wrapper.widget_text",".ads-title,\n.stream-item-above-post.stream-item,\n.stream-item-mag.mag-box",".ads-post",".link-paeen","div#custom_html-4","div.container-ads,\ndiv.left-ads",".ads-text-sid,\n.pt-3.text-center.py-2.bg-all-box,\n.text-center.py-3.bg-all-box","#text-25",".main-zxc","#footer_js_d1,\n.banner-container,\n.col-sm-3 > .block > .img:not(:has(a[href*=\"aftabir.com\"]))","#left2","#ads",".yn-bnr","#pos-article-display-66259",".ag-agah",".ads_place,\n.app_introduce","#toshare-dl-link","div.block-content[class*=\"a.d.s-sidebar\"],\ndiv.single-text-ads",".announce,\n.dsp-ad,\n.promote-puls,\ndiv[type=\"aparat\"]:has(> .link)",".side-ads",".baner",".header-ad",".top-ad",".mks_ads_widget",".bottom-ad,\n.webgardi","a[href*=\"nobitex.ir\"]","#kaprila_linktable",".box[class^=\"asan\"],\n.content-box,\n.text-asan,\narticle.post.game:not(:has(.button, .post-cat))","div#mobile-headerads,\ndiv#topads,\ndiv.footer-ads,\ndiv.side-ads",".right-sidebar > p > a > img[title=\"رپورتاژ\"]","div.click1000_allcontent","figure.size-full.wp-block-image","aside > div.sec_right > div.menu_box > div.margin > ul > li:has(> a[href*=\"bargozideha.com/reportage/\"]),\ndiv[style]:has(> iframe[src=\"/ddd.html\"])",".alert-dismissible,\ndiv.text-center.col-md-3 > .paddingAll10.panel-success.panel","#middlead",".medicaldirectory-sidebar:nth-of-type(5) > .claims.sidebar-content > .cbp-l-project-details-title > span","div.mp_box:has(> div.mpbb_ads a[target=\"_blank\"] > img[alt][title])",".pix_of_day,\ndiv[style=\"margin-top:4px;overflow:hidden;\"],\ndiv[style=\"margin-top:5px;margin-bottom:3px; overflow:hidden;\"]","#bil_fix_top_pc,\n#headerbar,\n.c-ads-banner,\n.content-slider,\n.countclick,\n.hamsan-container,\n.m-banner-r,\ndiv[class^=\"pcfadv\"]",".ads_link8,\n.blog-home-ads-blog,\n.blog_center_bar > center > a[href*=\"eramblog.com/action/static_ads\"],\n.hamsandiv",".col-md-3 > .panel > .tarh-forosh,\n.col-md-3 > .panel > center,\n.leftads",".parent_txt_adv_container2","figcaption","#custom_html-51",".mtn-ads-content-sticky,\nimg[alt=\"ad banner\"]",".widget_custom_html.widget.primary-sidebar-widget.w-t.h-ni.widget_text",".widget_text.widget.primary-sidebar-widget.w-t.h-i","[href*=\"/banners/click/\"]",".weblink",".bd-adsbar,\n.delta-content-ads,\n.delta-top-content-ads",".digiBannerArea,\n.homeMainBanner,\n.todaysNewsList__sidebar","div#ProductListPagesWrapper > section > div[class^=\"product-list_ProductList__pagesContainer\"] > div[class^=\"product-list_ProductList__item__\"]:has(> a[href*=\"?ad_variant_id\"]),\ndiv#ProductListPagesWrapper > section[class*=\"product-list_ProductList__sidebar__\"] > div.sticky-outer-wrapper > div.sticky-inner-wrapper > a[href*=\"?ad_variant_id\"]","a:has(> img.ads_pic),\na:has(> img.shbanner),\na[href=\"https://farsisaz.com/\"][target=\"_blank\"][rel=\"noopener\"],\ndiv.ADS_wrapper,\ndiv.shbanner_cover,\ndiv.widget_content:has(> ul.blog_list)","#home-2-col > .bs-vc-wrapper > .vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column,\n.widget_nav_menu.widget.primary-sidebar-widget.w-t.h-ni","[href^=\"/advertisements/triggered/\"]",".zxc",".custom-ad-one,\n.zxc-m","aside.lefts_sides:has(> div.txt_letfs > ul.ads_txtcv),\ndiv.adsfix_box","div.ads","div.popup-ads","a[href^=\"https://zaya.io/\"]",".ads","div.medicaldirectory-sidebar:nth-of-type(6) > .claims.sidebar-content > .cbp-l-project-details-title > span",".sidebar-home:has(.ads_0)",".advs-wrapper","div.ads-sec,\ndiv.ads-sec-web,\ndiv.bottomTextAdv,\ndiv.heightAds","div.chatlist-parts > div.chatlist-top > ul.ads-dialog-box",".adv",".adv-ttl","div.textwidget > div.ads","#middle a > img[title*=\"تبلیغات\"],\n#sidebar a:not([href*=\"elmevarzesh.com/\"]) > img[width=\"300\"][height=\"200\"],\n.col-md-8 a:not([href*=\"elmevarzesh.com/\"]) > img[width=\"728\"][height=\"90\"]",".stream-item-widget",".widget-ad-image","a[href^=\"https://eramblog.com/direct_link/?ads=\"][rel=\"nofollow\"][target=\"_blank\"],\ndiv.blog-home-ads-blog,\ndiv.main_content[style=\"border-radius:10px;\"]:has(> div[style=\"padding: 10px; text-align:center; font-size:13px;\"]),\ndiv[class^=\"ads_link\"]",".centernews_soc,\n.left_pos_mod > .l_box.imgs,\n.newstopads,\n.r_box:has(p)",".text-ads","#ynpos-10831,\n.ezp30-ads,\n.fix-ez",".advertisement",".news_slider_sec2,\n.webgardi_adv",".header-adv,\n.others_media,\n.sticky_notify2,\n.zxc-stik",".txt-adv-box",".zxc-visible-fixed","nav.site-top-nav > ul.grid-row > li:has(> a[rel=\"dofollow\"])",".inline-news-box,\n.talfighat-row,\n.ul-talfigh-con",".results__a","div.ads-content","section.player-container div.filimo-logo-filimo","div.ad-cat:not(div.ad-custom-size)","div#rt-download:has(> div#ZAD)","div#fix-advertise,\ndiv.content-ads,\nheader.header-part div.banner:has(> div.d-table-cell > a.d-block > img),\nsection#image-advertise,\nsection#top-banners","div.single-advertise",".bottom-ads,\n.card-ads",".tads","#ads-main-home,\n.ads-img","div.post:has(a[href^=\"https://www.tarhdokan.com/\"]),\nul#tabligh,\nul#tablighc",".sticky-ad","div.box:has(> div.ads),\ndiv.container > div.ads","aside.sidebar .widget:has(a.external)",".primary-sidebar-widget:has(a[rel*=\"sponsored\"])",".secondary-sidebar-widget:has(a[rel*=\"sponsored\"])","div[class^=\"cr-banner-\"]",".q2am-page-advert","div.CenterBlock:has(> div.Tadsb2)","#floating-region-zone,\n.ads-div-block",".sin-part","#banners-position-14,\n#slideshow[class=\"rounded\"]",".ads-box","#NR-Ads,\n.listing-item-blog:has(a[href*=\"/author/ads/\"])","div.video-area > div > div.d-flex:has(> a[href^=\"/c/\"][aria-label=\"bebin\"] > img)","script[id^=\"wccp_\"]",".col-xs-36.col-sm-4.col-md-4.col-lg-4,\n.hidden-xs.col-sm-4.col-md-4.col-lg-4","#block-3,\n#block-4,\n.stream-item-top-wrapper,\nli:has([href^=\"https://jalebamooz.com/reportage/\"])",".widget_custom_html,\naside:nth-of-type(2)","#table10,\n#table10 > tbody > tr > .textBoldColor,\n#table4 > tbody > tr > td > table > tbody > tr > td > center,\n.bgleftmenu > div > div,\ntable#table9.bgtable:nth-of-type(13)","div.white-block:nth-of-type(2)","[href^=\"/nf/sponsor/\"]","[class^=\"zxc\"]",".sticky_notify",".news-bottom-link","#ads_f,\n#banners_120_top_1,\n#block-block-120,\n.track-click","div.peyvand,\ndiv.type-resource-image:has(> a[href^=\"/advertisements/triggered/\"])",".inline_ads",".ads.box","#box358,\n#top-ad",".zxc_home",".mrauto,\n.position-g5",".mobile-fixed-banner","a[href^=\"/advertisements/triggered/\"]",".ads-placment","div.mobileBanner,\ndiv.wideheader-b1:has(> div.bannercontainer)",".msg_ad_explain,\n.msg_ad_pictorial,\n.msg_ad_subject","a[href^=\"https://bit.ly/\"]","#custom_html-4,\n#text-31,\n#text-35,\n.adbar","div.ads_fix_top,\ndiv.text_ads_box","div.blur-text","#text-13,\n.adwrap-widget","#ads-container",".adsfix_box",".alert-new,\n.text-center.mt-3.py-3.bg-all-box",".mdiaad,\nsection.sidebox:nth-of-type(4)",".widget_text.widget",".sponsors","#sponsor_wrapper,\ndiv.banner_v",".srjtbaungo","section.adBox:has(> div.row > div > a[rel$=\"sponsored\"])","section.ads","div#Abox-mobo","#ads__bottom_of_the_header",".news-col-2 .related-news",".opanel-ads",".ads-banner","#advertise,\n#promotion",".Dr.D2.Cu.o",".stream-item-above-post","#text-5",".banner_sidebar,\n.box-ads-single,\n.box-custom.box_other,\ndiv.box-tag-single:nth-of-type(2)","bloglinkdumpblock,\nbloglinksblock","div#forum-native-ad,\ndiv.ad-wrapper,\ndiv.up-ad",".advertorial",".ADS_header_all,\n.download-link-ads-below","div#header-ad1,\ndiv.adcontainer div#p30konkor-ads-p > div.bs-vc-wrapper > div#bf-color-white:has(p > a[rel=\"noopener\"]):not(:has(a[href*=\"p30konkor.com\"])),\ndiv.adcontainer div.vc_row:has(div[itemtype$=\"AdBlock\"][data-adid]):last-of-type","div.post-ads,\ndiv.sidebar-ads","div#ad_global_above_footer,\ndiv#ad_global_below_navbar,\ndiv.ad_global_header","#ads-120,\n.block-ads,\n.block-ads2,\n.block-ads4","div[class^=\"topadvers\"]",".adv_img,\n.agahi-view",".widget_whmcs_ads_widget.widget,\n.wpb_content_element.sidebar.wpb_widgetised_column",".topbanners","div.wblock > a[href*=\"patoghu.com/repotaz/\"]",".multi-ads-container","div.tab.sidebar-box:nth-of-type(2) > .sidebar-box-content,\ndiv.tab.sidebar-box:nth-of-type(2) > h3","div.big-banner",".ads_box",".aa-container",".download-dialog","div.advertop",".ads.big_post,\n.cat","#block-block-22.ads",".bannermiddle,\n.mybannerimg",".adv-box",".adloc-is-banner,\n.widget_better-ads",".advertising","#middle-ads",".fara-main","a[href=\"https://academy-eris.com/\"],\na[href=\"https://sahamir-ac.com/\"],\na[href=\"https://sarafer.com/\"],\na[href=\"https://veriacco.com/\"]","#header-banner-4,\n#rt-backlinks-pos,\n.mb-3.top-1.sticky-top,\n.w-100.justify-content-center.d-flex","div.adsLoader",".bannersHome","#header-ads",".bannergroup",".ads2",".ush_image_2",".GSAdsLR,\n.OpenTable5",".adv_top,\ndiv[style=\"margin-bottom:10px\"]:has(> .txt_adv_content)",".bannergroupsam-full-width",".cyt-ad-content,\n.homebar a[href=\"https://setare.com/%d8%aa%d8%a8%d9%84%db%8c%d8%ba%d8%a7%d8%aa/\"] > img,\n.pb0.stickyscroll_widget","#block-views-ad-link-block-2,\n#block-views-shabake2-clone-of-ad-link-block,\n.field-name-ads-under-summery,\n.popup-box-wrapper","a[target=\"_blank\"][href*=\"utm_content=shahrekhabar\"] > img[style=\"margin-top: 0px;margin-bottom: 0px;margin-left: auto;margin-right: auto;\"]","#g-top,\n.ads2col,\n.flexbanneritem",".qxsbniv",".header_adv",".side_adv,\n.top_adv",".b_box","#inline_agahi_z0,\n.generalBoxStyle[data-element-name=\"FRONT_M\"],\n.generalBoxStyle[data-element-name=\"SHARE_NEWS\"],\n.mauto_div,\n.mnb_wrapper,\n.noagahi.otherMedia",".banner9,\n.bannerLarge","div#advBan,\ndiv#advBan2,\ndiv#left_panel > div#RightPan:has(ul.adv_text)","div.ecbox2:has(> div.ec_body2 > div.adswrapper),\ndiv.ecbox:has(div.ads_text, div.text-ads)",".ads-link",".middle-ads",".adss,\n.container_ads","div.mask",".adcbar",".link-ads",".ad-item,\n.ads-footer",".baners,\n.left-ads",".right-ads",".col-xs-12 > article:has(a[href*=\"/category/pr/\"])",".tab-cpc,\n.tab-dpd-post,\ndiv[class^=\"ads\"]",".full-width-tabligh,\n.home-web-surfing,\n.tj-ad-box,\n.tj-ad-wrapper,\ndiv.widget.aside-widget:nth-of-type(5) > .section-title--dotted.section-title > .section-title__h",".rmp-ad-container",".slider-banners.partial,\n.sponsor-link",".ads-box-green,\n.ads-box-red",".light-text.footer-widgets","div.shop-card.seller-element:has(> div.shop-info > div#vijhe_small)","section#downloadbox > div#indicatorr","div#popupModal,\ndiv.modal-backdrop","div.upbu","img[alt=\"ads\"]","a[href^=\"/url/\"][target=\"_blank\"]:has(> img)","div.col-ms-36 > section:has(div.txt_adv_content),\ndiv.row > section:has(a[href*=\"/ads/redirect/\"]),\ndiv.style-text-adv",".zxc_matni",".zxc_top,\ndiv.mnb:has(a[href^=\"/advertisements/triggered/\"])",".adbox:not(.adbar),\n.left-side-ad-col",".tabligh","div.colRight div[class^=\"adsBox\"],\ndiv.topAds","#text-12,\n#text-24","div.tb-box",".top-ads",".ads-block,\n.row.fixed-post.post,\n.sidebar-textads","#BannerHome,\n.BannerA,\n.DetailArea > .AdAreaDetail,\ndiv[id^=\"BehinAva\"]","#sidebar-alt","div[id^=\"tabligh\"]",".no-mobile.out-container:nth-of-type(3)",".adsside,\n.elementor-element-d41b3d1,\n.size-large.attachment-large","#site-footer .col-sm-4:has(a[rel=\"noopener\"][target=\"_blank\"]),\n.eif:not(:has(a[href*=\"farnet.io\"]))","div[class*=\"blockByVisit_blockByVisit__container\"],\ndiv[class*=\"company_company__ads--ab\"],\ndiv[class^=\"RequireAuth_mainBox\"]","div.is-justify-content-flex-end > a#js-register-button + div[style]:has(> input[placeholder^=\"شماره موبایل\"]),\ndiv.js-userLogin-popup","div.header-banners",".col-md-offset-6.col-md-3,\n.kanban-col",".khp-site-info p,\n.left.col-md-4,\n.skip-container p:not(:has(a[href*=\"1da.ir\"])):has(img)",".phoenixad,\na[rel=\"dofollow\"]",".e3lan","#text-2,\n#text-3,\n#text-4,\n#text-6,\n#text-7",".herald-ad:not(:has(a[href*=\"kurdsoft\"])):not(:has(a[href*=\"7ganj.ir\"])),\n.meta-ad",".links_footer",".main22,\n.up_submit > span","x","div#BodyMain > div#Body > div#Content > div[style] > div.Box:has(> div.CenterSmall > div.AdsBanerDiv)",".adv_l,\n.adv_r_news2",".co-ads","div#modal_container > span.a-modal-backdrop","#popular,\n.lolo",".tab_news > a[href*=\"gameup.ir\"]","div#ZAD","div.ml-4.space-right-delt > div.bg-all-box:has(> div.yn-bnr)",".app_ads_banner",".kpl_linktable",".ads-side",".asiatech,\n[id^=\"linkcat\"] > ul > li:not(:has(a[href*=\"apktops.ir\"]))","div.b-cont > div.download-link-ads-below","a[onclick^=\"increase_ad_click_count\"]",".banner",".abox","#featured > .owl-stage-outer","div.all_adv,\ndiv.others_web,\ndiv.zxc,\nsection.reportage","#ad-hoc-2,\n.bdaia-e3-container,\n.widget_text.bdaia-widget.widget",".stream-item","#iddivtoplevelscript,\ndiv[style]:nth-of-type(3)",".ads-margin-bot,\n[href*=\"bourse24.ir/ads/click/\"]",".linkbox",".block-simpleads",".clads-inner","script[id^=\"wpcp_\"]","#ADbox-1,\n.ads-sidebar,\n.ads-sticky",".after-post-ads",".Js_Div5",".adsboxfix,\ndiv[style*=\"position: fixed; right: 0px; bottom: 0px;\"]:has(> .close-fixedSd)","div.col-md-12 > div.sidebar-box:has(> div.row > div.text-center > a[target=\"_blank\"][title] > h4.text-dark[style])","div[id^=\"ads\"]","a[rel=\"nofollow\"]:has(> img[title=\"تبلیغات\"])","div#kaprila_linktable,\ndiv#mediaad-vFkp","div#header-bar,\ndiv.slider-tab-ring:has(> div.textwidget p > a)","div[itemtype=\"https://schema.org/WPAdBlock\"]","div#post-list-container-id a[href^=\"https://a-banners.divar.ir/auction/?ext_link_data=\"]:has(> div.kt-inset-banner > picture.kt-image-block > source[data-srcset^=\"https://a-banners.divarcdn.com/ssp/ads/media/image\"]),\nmain > div[class^=\"item\"]:has(img[src*=\"divarcdn.com/ssp/ads/\"])",".index-adstop > a:not([href*=\"dlrozaneh.ir\"])","article#post-fix-ads,\ndiv.textwidget:has(> div.parsi-ads),\ndiv.top-full-ads",".d1yekta,\n[id^=\"pos-article-display-\"],\nsection li:not(:has([href^=\"https://download1music.ir/\"]))","#faradars,\n#page-content > .wpb_row:has(a[href*=\"faradars.org\"])",".ads-fix-post,\n.ads-matni",".advertise-place,\n.province-advertise,\nmain > div:has([href*=\"/advertising/\"])",".all_ads","#ContentPlaceHolder1_divBanner","[class*=\"text_ads\"]",".emojo-ad,\n.pzbkcvuqrn","div.avdDiv","div.tabligh,\ndiv.txt_adv_content",".header-mdh,\n.pull-right.zm-post-lay-a-area","aside.ad-mobile-none,\ndiv.ads-native","div#ADbox-1,\ndiv#phon,\ndiv.floating-banner","div.col-md-12 > div.card:has(> a > img[src$=\".gif\"])",".custom,\n.customads",".FixedAdvertising,\n.left.sidebar_widget:nth-of-type(3),\n.left_ads,\n.right_ads,\n.top_ads","a[href=\"https://maktabsharif.ir/\"]",".post-ad-box","a[target=\"_blank\"]:has(> img[src*=\"/Gif/\"][src$=\".gif\"]),\na[target=\"_blank\"]:has(> img[src*=\"/files/\"][src$=\".gif\"])","#next1-231,\n.asd_top,\n.fl.block_right > div.box_sh.ads_2","div[class*=\"linkads\"]",".sidebar_tabliq,\n[href^=\"/ads/\"]","div.full-ad-box",".doctor-ads-item","#header_ad,\n.sb_ad","div.t3-contentwindows1:has(a[target=\"_blank\"] > img[src$=\".gif\"])",".banner468,\n.tab_box","[href^=\"/redirect/ads/\"]","div[class^=\"css-\"][dir=\"auto\"][data-testid=\"favoritesSuperAppTitle\"],\ndiv[class^=\"css-\"][dir=\"auto\"][data-testid=\"favoritesSuperAppTitle\"] + div[class^=\"css-\"]:has(> div[class^=\"css-\"] > div[class^=\"css-\"][style] > div[class^=\"css-\"][tabindex=\"0\"][style=\"transition-duration: 0s;\"]),\ndiv[class^=\"css-\"][tabindex=\"0\"][style=\"transition-duration: 0s;\"]:has(> div[class^=\"css-\"] > div[class^=\"css-\"] > div[class^=\"css-\"][style] > div[class^=\"css-\"][dir=\"auto\"][data-testid=\"yourGoodMood\"]),\ndiv[style]:has(> div[style] > div[style] > div[tabindex][role=\"link\"] > img[alt=\"Advertisement\"])","a[href^=\"https://www.iranjib.ir/ra.php?adid=\"]:not([title=\"اینستاگرام ایران جیب\"]),\ndiv[id^=\"pos-article-display-\"][style=\"min-height:400px\"]","div.owl-item:has(> li[id^=\"ad\"]),\nsection.box.ads",".advertise_default","div.c-forceToLogin__message,\ndiv.c-forceToLogin__overlay",".im-header-ad","div.main > div.box:has(> p > a[href=\"http://botsaz.com/\"])","#textads-contents,\n.ads-containter","#ads-container > .list-thumbs.title-only.list.box,\n#header-ad,\n.bg-gray-links.box",".ads_bt_box,\n.ads_singles_post,\n.top_img_ads",".type-sticky.status-publish",".ads-widget",".down-box-ads,\n.down-box1",".singleads","[id^=\"ad\"]","div.post-content > div.fusion-builder-row-1 > div.fusion-row:has(> div.fusion-layout-column a[data-wpel-link=\"external\"])","a[href=\"http://www.asalchat.skin\"],\na[href=\"https://www.tarhpardaz.ir\"]","div.ad-wrap,\ndiv.widget-ad-image","#bottombanner,\n.apnl,\n.b","#sezfvg-2,\n.sezfvg,\n.sticky-column:not(:has(a[href*=\"modirnameh.ir\"]))",".txt-ads-sl",".banneritem:has(a[href*=\"/banners/click/\"]),\n.eb-inst","div.e3lan,\ndiv.widget#text-15","div[class^=\"yektabanner\"],\ndiv[style]:has(> div.yn-bnr)",".txt-box:has(> .txt_adv_content)","div.is_ads","div.ads_posts","div#Ads_Fix_pnlMain",".adspanel",".adsblockpop,\n.dtnoppu,\nsection.banners,\nsection.textAds","[id*=\"kaprila\"],\naside > div:has(a[href*=\"links.p30download.ir\"], a[class][target=\"_blank\"][title][rel=\"nofollow\"]),\naside > div:not(:has(a[href*=\"/entry/\"])),\ndiv.copyright-wrapper > div#copyright > a",".ad_global_header,\n.body_wrapper > div:nth-of-type(4)","div.block-simpleads","div.dotline-sticky","a[href*=\"&m_name=ads\"]",".dlbtnhidden",".ad--content","div.ssad",".ytn-hamsan","div#ads1",".c-advertisement","main > div.container-fluid.my-3:has(> div.row.mb-2 > div.col-lg-4 > a[target=\"_blank\"] > img.w-100[style=\"border-radius: 10px;\"])","section.ads-section",".center.body_c > div > div,\n.center.body_c > div:nth-of-type(2),\n.txtad","#ad7_40,\n.footer-ads","[href*=\"/fa/ads/\"]",".left_banner,\n.links","#arasideadvertising","section.sidebar-left-item:has(> div.custom-html-widget > p > a[target=\"_blank\"][rel=\"noopener\"] > img)","a[class^=\"skinak-text-ads\"],\narticle.morders,\ndiv.dadsd,\ndiv.footer-block-1:has(> a[class^=\"text-ads\"]),\ndiv.left-body:has(> div.text div.text-ads),\ndiv.right-body:has(> div.text div.adsr)",".heading-ads,\n.sidebar-right > div.box:nth-of-type(1)",".adv_mobile",".textwidget,\naside:nth-of-type(5)","a[class^=\"text-ads-\"],\ndiv.backoritybase,\np:has(> a[href^=\"https://shirazsocial.com\"])","div.sk-side:has(> div.sk-side-body ul > li > a[href]:is([href=\"https://49tinymovie.site/\"], [href=\"https://zarfilm.com/\"], [href=\"https://anime-list.net/\"]))","#cycle_adv_tabnak","section#LeftPanel > div.leftads","[class^=\"adv\"]:not(.adv8, .adv19)","div.col3:has(div.txt_adv_content)",".inner-wrapper-sticky > .mb-3,\n.sidebar-banners",".type-resource-image","div.bnr-ads",".side1:has(a[title][rel=\"noopener noreferrer\"])",".advertisment","#fpc-banner-top,\n#top-right-ad,\n.content-container:has(.ad-reportage),\n.square-ad:not(:has(#featured-posts))",".full2.box.right,\ndiv.sideheader2:nth-of-type(3)","li.ad-link",".footer-back-link,\n.free_ad_con,\n.logo_full_view","a[href*=\"utm_source=uptrack\"]","#tabligh",".textads",".ads120,\n.ads468,\n.fixpost,\n.gsh,\n.headads","div#ads__start_of_the_post","a.textad,\na[href^=\"/ad/\"][target=\"_blank\"]","#kaprila_linktable_left,\n.left-block-top","#slider-box,\n.mortabet-links,\ndiv.row:nth-of-type(2) > .col-xs-12 > .category-side-ads",".advertisements",".home-ads,\n.sidebar-ads",".sideads",".flex-ad-body","div#ads-sticky,\nheader + div#slider",".box-title,\n.moreads.widget_text,\n.pm",".mom_custom_text.widget,\n.widget_custom_html.widget.widget_text","div.ads-row-left","#ad14,\n.ad-cell,\n.widget_text",".content_item:has(a[href*=\"/category/ads/\"]),\n.sidebar-area .image","div#sponser-dl-btn","article.fixedadv:not(:has(> div.fixedadvcontent > a[href=\"https://www.youtube.com/c/Par30Game\"])),\ndiv.adbox,\nsection.sidebar-box-shop",".my-single-t-p",".dailylink,\nbody > div > font,\ncenter > center > center > center,\ncenter:nth-of-type(2) > center,\ndiv > font > font > .menuheader,\ndiv > font > font > font > p","div.side_txt_zxc,\nul#rssbank","#box_1398,\n#popbox-blackout",".AdsContainer",".special_links,\n.text_adds_container",".zxc_news",".featured_news","div.selected-news:has(> div.txt_adv_parent)",".zxc_left",".ads-full-banner-img",".vebgardi",".jmb_banner","div.banner:has(> a > img)",".inline-4d",".adrightPanel,\n.container55,\narticle > .box > a[href*=\"salampnu.com\"]","div.sidebar_ads",".vfozk",".aligncenter.wp-image-9273.size-full,\n.size-full.attachment-full",".Topadver",".behtarinseo","div.ads-site","div.bottom-left-ad,\ndiv.bottom-right-ad,\nul.advertise",".adsBanner,\n.two-ad-banners,\n.widget_media_image.widget.container-wrapper","div.zoomtech-banner","div.back_links","#titr-box,\n.maincontent > center,\ntbody","#ads-text,\n#sidebar_ad,\n.b-hd,\n.hidden-xs.hidden-sm.block,\n.hideOnMobile",".new-banner","div.app_ads_banner",".abvertise > .container > a:not(a[href=\"https://t.me/filmha_top\"])","div.aspace[style]",".tabliq"];

const hostnamesMap = new Map([["*",0],["cannews.aero",1],["web.bale.ai",2],["delta3da.cam",3],["persiansub.com",[3,178]],["real-madrid.ir",3],["myhastidl.cam",4],["aftab.cc",5],["mojnews.co",6],["eghtesadnews.com",[6,62,71]],["fartaknews.com",[6,90]],["moroornews.com",[6,62,87]],["parsnews.com",[6,172]],["ilna.ir",[6,62]],["tinn.ir",[6,391]],["tourismonline.co",[7,8]],["koolakmag.ir",7],["1abzar.com",[9,10]],["gadgetnews.net",[9,415]],["1pezeshk.com",11],["7sobh.com",12],["abipic.com",13],["mihandownload.com",[13,145]],["accpress.com",14],["afkarnews.com",15],["aftabir.com",16],["akharinnews.com",[17,18]],["harmonydl.us",[18,451]],["alamto.com",[19,20]],["power-music.ir",[19,369]],["androidgozar.com",21],["androidha.com",22],["androidsharp.com",23],["androidtime.com",24],["aparat.com",[25,26]],["mihanvideo.com",26],["applicationha.com",27],["arga-mag.com",[28,29,30,31]],["icivil.ir",28],["plus.ir",29],["beautyhome.ir",[30,282]],["arzcenter.com",32],["asandl.com",[33,34]],["alldriver.ir",[33,268]],["cafejozve.ir",33],["khoshamoz.ir",33],["20file.org",[33,434]],["asbe-bokhar.com",35],["asemooni.com",36],["asriran.com",37],["avapedia.com",38],["bargozideha.com",39],["barsadic.com",40],["bazimag.com",41],["brain.be-teb.com",42],["behmusic.com",43],["benawa.com",44],["beytoote.com",45],["blogsazan.com",46],["boyernews.com",47],["bultannews.com",48],["charbzaban.com",49],["chetor.com",50],["chibepoosham.com",51],["delbaraneh.com",[52,53]],["rouzegar.com",[53,187]],["delgarm.com",[54,55]],["payamekhabar.ir",55],["deltapayam.com",56],["digiato.com",57],["www.digikala.com",58],["dlfox.com",59],["doctorwp.com",60],["donya-e-eqtesad.com",[61,62,63]],["ecoiran.com",[61,62]],["etemadonline.com",62],["fardanews.com",[62,86,87,88]],["khabarerooz.com",[62,125]],["khabarfoori.com",[62,127]],["khanefootball.com",[62,131,132]],["mojnews.com",[62,87]],["mosalasonline.com",[62,88,124,155]],["sharghdaily.com",[62,131,207]],["shayanews.com",[62,208]],["shomavaeghtesad.com",[62,74]],["varandaz.com",[62,88,237,238]],["55online.news",[62,131,237,425,426]],["sobhtazeh.news",[62,430]],["doostihaa.com",64],["downloadha.com",[65,66]],["uploadboy.com",[65,232]],["upsara.com",[65,234]],["car.ir",65],["targoman.ir",65],["uploadkon.ir",[65,397]],["androidina.net",[65,411]],["tajrobe.wiki",65],["drdmag.com",67],["e-teb.com",68],["mehrnews.com",[68,143]],["mer30download.com",[68,144]],["salameno.com",68],["shabakeh-mag.com",[68,203]],["tasnimnews.com",[68,220]],["vipofilm.com",[68,240]],["4tools.ir",68],["imna.ir",[68,143,330]],["khabaronline.ir",[68,330,339]],["shahraranews.ir",[68,376]],["shmi.ir",[68,377]],["tebyan.net",68],["ravan.e-teb.com",69],["eghtesademeli.com",70],["eghtesadonline.com",72],["web.eitaa.com",73],["ejiga.com",[74,75]],["elmefarda.com",76],["elmevarzesh.com",77],["ensafnews.com",[78,79]],["netpaak.com",[78,160,161]],["bikarsho.ir",[78,283]],["wikihoax.org",[78,79,442]],["mag.khanoumi.com",79],["eramblog.com",80],["etelanews.com",[81,82]],["gahar.ir",[82,320]],["mihand.ir",82],["ezp30.com",83],["faaltarin.com",84],["faceit.ir",[84,313]],["fararu.com",85],["farsroid.com",89],["fastdic.com",91],["fileboro.com",92],["filimo.com",93],["footofan.com",94],["gameeroid.com",95],["gamefa.com",96],["en.gamefa.com",97],["gharbtv.com",98],["ghatreh.com",99],["gooyait.com",100],["graphiran.com",101],["hamgardy.com",102],["harfetaze.com",103],["honarfardi.com",104],["idehalmag.com",105],["idehaltech.com",106],["imvbox.com",107],["irancircle.com",108],["irannaz.com",109],["iranstar.com",110],["itarfand.com",111],["itbazar.com",112],["itgheymat.com",113],["itresan.com",114],["jabeh.com",115],["jafekri.com",116],["jahannews.com",117],["jalebamooz.com",118],["jesarat.com",119],["k2cod.com",120],["ketabesabz.com",121],["khabarban.com",122],["khabareazad.com",[123,124]],["khabarfarsi.com",126],["khabarpu.com",128],["khabarvarzeshi.com",[129,130]],["salamatnews.com",129],["hamshahrionline.ir",129],["irna.ir",129],["gostaresh.news",[131,425,428]],["khodrobank.com",133],["khodrotak.com",134],["kilipo.com",135],["kojaro.com",136],["lamtakam.com",137],["learnparsi.com",138],["lenzak.com",139],["magbazi.com",140],["magiran.com",141],["majalesalamat.com",142],["mihanfal.com",146],["mihangame.com",147],["mihanmarket.com",148],["news.mihanmarket.com",149],["minevisam.com",150],["miniroid.com",[151,152]],["p30day.ir",[152,360]],["mobomod.com",153],["moderndl.com",154],["movienama.com",156],["mybia4music.com",157],["namayesh.com",158],["namnak.com",159],["20tayi.ir",[161,258,259]],["niksalehi.com",162],["niloblog.com",163],["ninisite.com",164],["nodud.com",165],["p30afzar.com",166],["p30konkor.com",167],["p30world.com",168],["forum.p30world.com",169],["parsfootball.com",170],["parsnaz.com",171],["parstools.com",[173,174]],["taktemp.com",[174,219]],["patoghu.com",175],["peivast.com",176],["persiangfx.com",177],["persianv.com",179],["radiojavan-iran.com",[179,183]],["picofile.com",180],["podbean.com",181],["prozhedownload.com",182],["rajanews.com",184],["rayamag.com",185],["roozno.com",186],["rozblog.com",[188,189]],["sid.ir",[188,378]],["rozmusic.com",190],["sabtta.com",191],["saednews.com",192],["safarmarket.com",193],["sakhtafzar.com",194],["sakhtafzarmag.com",[195,196]],["seemorgh.com",[196,201]],["sargarme.com",197],["sariasan.com",198],["sarzamindownload.com",199],["sedayiran.com",200],["setare.com",202],["shahrekhabar.com",204],["shahrsakhtafzar.com",205],["shanbemag.com",206],["shereno.com",209],["shomanews.com",210],["simcart.com",211],["softgozar.com",212],["soorban.com",213],["sourceiran.com",[214,215]],["dolatebahar.ir",214],["tak3da.com",216],["takhfifan.com",217],["takhfife.com",218],["techfars.com",[221,222]],["varzesh3.com",[222,239]],["technews-iran.com",223],["techrato.com",224],["tejaratnews.com",225],["telewebion.com",226],["tiwall.com",227],["top2download.com",228],["topnaz.com",229],["torob.com",230],["trainbit.com",231],["upmusics.com",233],["vajehyab.com",235],["vananews.com",236],["webgozar.com",241],["wikisemnan.com",242],["wisgoon.com",243],["yasdl.com",[244,245]],["downloadsoftware.ir",[244,305]],["zibamoon.com",246],["icoff.ee",247],["konkur.in",248],["shirazsong.in",249],["konkur.info",250],["farnet.io",251],["rasm.io",252],["virgool.io",253],["zaya.io",254],["1000site.ir",255],["1da.ir",256],["1ea.ir",257],["androidzoom.ir",[258,273]],["7ganj.ir",260],["8pic.ir",[261,262]],["imgurl.ir",[261,329]],["uupload.ir",[261,400]],["abadis.ir",263],["aboutall.ir",264],["aftabnews.ir",265],["aftabyazdonline.ir",266],["alibaba.ir",267],["anaj.ir",269],["androidify.ir",[270,271]],["appnab.ir",270],["moddinggame.ir",270],["androidparsi.ir",272],["anzalweb.ir",274],["apktops.ir",275],["appiroid.ir",276],["appreview.ir",277],["b2n.ir",[278,279]],["timecity.ir",[278,390]],["barato.ir",280],["bartarinha.ir",281],["softsaaz.ir",283],["youc.ir",283],["bils.ir",284],["bourse24.ir",285],["buzdid.ir",286],["citna.ir",287],["click.ir",288],["coffeeapps.ir",[289,290]],["sclinic.ir",289],["computeruser.ir",291],["dabi.ir",292],["dailymobile.ir",293],["dana.ir",294],["daneshchi.ir",295],["darkroid.ir",296],["dehlinks.ir",297],["digiboy.ir",298],["digiro.ir",299],["divar.ir",300],["dlrozaneh.ir",301],["download.ir",302],["download1music.ir",303],["downloadly.ir",304],["econews.ir",306],["eghtesadepooya.ir",307],["rastannews.ir",307],["emalls.ir",308],["emeil.ir",309],["emojo.ir",310],["enama.ir",311],["entekhab.ir",312],["farsnews.ir",314],["fastmobile.ir",315],["forsatnet.ir",316],["freedownload.ir",317],["freescript.ir",318],["ftdigital.ir",319],["games4online.ir",321],["gamesib.ir",322],["getandroid.ir",323],["gsm.ir",324],["hadese24.ir",325],["hidoctor.ir",326],["imemar.icivil.ir",327],["iica.ir",328],["my.irancell.ir",331],["iranjib.ir",332],["isna.ir",333],["itna.ir",334],["jobinja.ir",335],["kafebook.ir",336],["kalakamuz.ir",337],["khaandaniha.ir",338],["khodropluss.ir",340],["languagedownload.ir",341],["lastsecond.ir",342],["listen2music.ir",343],["loudmusic.ir",344],["mashreghnews.ir",345],["mastertest.ir",346],["maxstars.ir",347],["mediat.ir",348],["mobile.ir",349],["modirnameh.ir",350],["montiego.ir",351],["moviemag.ir",352],["musicdays.ir",353],["musicdel.ir",354],["nabzefanavari.ir",355],["najiremix.ir",356],["nex11music.ir",357],["nournews.ir",358],["omidnamehnews.ir",359],["p30download.ir",361],["parsipet.ir",362],["payju.ir",363],["pedal.ir",364],["pgnews.ir",365],["phonroid.ir",366],["plaza.ir",367],["pluginyab.ir",368],["qnama.ir",370],["rahnamato.ir",371],["rbiran.ir",372],["rond.ir",373],["rozup.ir",374],["sena.ir",375],["silasdl.ir",379],["skinak.ir",380],["smusic.ir",381],["snn.ir",382],["sornamusic.ir",383],["subf2m.ir",384],["subkade.ir",385],["tabnak.ir",386],["taknaz.ir",387],["tehranrasaneh.ir",388],["tejaratemrouz.ir",389],["iranart.news",391],["tinroid.ir",392],["top90.ir",393],["topseda.ir",394],["toranji.ir",395],["up44.ir",396],["uplod.ir",398],["uptrack.ir",399],["varoone.ir",[401,402]],["ariapix.net",401],["tarfandha.org",[401,439]],["my-film.pw",[401,445]],["vgdl.ir",403],["vista.ir",404],["webgoo.ir",405],["webii.ir",406],["yun.ir",407],["zendegionline.ir",408],["zohur12.ir",409],["filmino.me",410],["cooldl.net",412],["dlbook.net",413],["footballi.net",414],["jeyran.net",416],["par30dl.net",417],["par30games.net",418],["parsroid.net",419],["pichak.net",420],["rokna.net",421],["takblog.net",422],["yektablog.net",422],["article.tebyan.net",423],["uplooder.net",424],["borna.news",427],["mobo.news",429],["techna.news",431],["skyroom.online",432],["titr.online",433],["barcanews.org",435],["bazdeh.org",436],["gold-team.org",437],["talab.org",438],["texahang.org",440],["tgju.org",441],["zoomtech.org",443],["ana.press",444],["salamdl.rip",446],["oila.tj",447],["artmusics.top",448],["filmha.top",449],["themez.top",450]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["arongroups.site",[0]],["arongroups.co",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/

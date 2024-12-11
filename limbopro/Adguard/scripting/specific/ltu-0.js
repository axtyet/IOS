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

// ruleset: ltu-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["#headerBanner",".ads-cnt,\n.article-0,\n.col-18.no-padding.vl-auto-row:has(iframe),\n.col-right-small > .widget-group:first-of-type,\n.dfp,\n.item:has(> a[href*=\"//bit.ly\"][target=\"_blank\"] > img),\n.page-item-lazyload,\n.top-banner,\n[class*=\"field_banner_\"],\nbody > div[class][style=\"display: block;\"],\nbody > em,\nbody > i,\nbody > label,\nbody > span,\nbody > strong,\ndiv > abbr,\ndiv[class*=\" \"][style^=\"top: \"],\ndiv[class*=\"block-right\"],\nlabel > label [src*=\"s1.15min.lt/static/cache/\"][src*=\"adblock\"],\nscript + div:not(.header):has(+ .wrapper),\nsmall",".widget-ad,\ndiv > em","#adrotate_1,\n#adrotate_2,\n.parama","#warp > div[style^=\"text-align\"],\n.bdaia-widget:has(a[href*=\"farming\"]),\n.non_sticky_side_el > div[style],\n.sticky_side_el,\n.vc_col-sm-4 a:not([href*=\"aina\"]),\ndiv[data-vc-full-width]:has(div[id^=\"aina_lt_300x250_\"])","#top","._reklamaTopR,\n.block_text_links,\n.cosite_block,\n.reklamaTopFilled,\n.reklamaTopTop,\ndiv[class=\"col-xs-12 col-sm-12 col-md-4 col-lg-3 sidebar-block \"],\ndiv[id*=\"_300x250_inarticle_\"]","#advert_right,\n#banner-top,\n#main-content-right,\n#rssReader_b,\n.fl.marginb10.vipadvertise,\n.margint10,\n.mobilehide[style=\"min-height: 250px\"]",".content-inner > iframe[style*=\" width: 300px\"],\n.widget_custom_html,\n.wpb_raw_html iframe,\ndiv[style^=\"text-align: center; margin: 10px 0\"]:not([class], [id])","#banner_cont","#top_veliavos,\n#weather,\n.main-right.m-hide,\n.outer.bg-rhomb-grey-light.flag-block-wrapper.m-hide,\n.right_veliava",".right_banner","a[href^=\"/redirect/ad/\"] > *","a[href$=\"://www.octenisept.lt\"]",".right_block",".ad-980-200,\n.banner-top,\n.luminor-calculus-21-4,\n.luminor-content,\n.luminor-header,\n.numai-link,\n.obj-cont .runningrow-wr,\n.obj-details .small-label,\na[href$=\"&utm_content=ad\"]",".bigbank-calculator",".ad1,\n.ad2","#banner-placeholder-1.banner-placeholder",".js-autotaurage-banner,\ndiv[class^=\"banner_container_corner_\"]","#citadele-box",".header-ann,\n.no-print.view-bottom-media,\n.no-print:not([class*=\" \"]),\n.reklama-300x250,\ndiv[class^=\"lenders-\"]",".col-md-4.col-sm-6:has(> ._slot),\n.header > .container,\n.reklamaadd",".ap-loan-calculator-native,\n.apl-content-calculator,\n.apl-example-note,\n.bigbank-price-leasing-button,\n.gallery-loan-opacity,\n.gallery-loan-wrapper,\n.head-small,\n.ket-rules,\n.leader-board-wrapper,\n.parameter-value-bigbank,\n.partner-banner-wrapper,\n.superdedes-inannouncement,\ndiv[class*=\"bigbank-slideshow\"]",".ads-items",".bigbank-button,\n.bigbank-leasing-button,\n.bigbank-price-calculators-container,\n.middle-banner-label",".ad",".showWhenBlocked,\n[style=\"margin-bottom: 10px; height: 100px; padding-left: 10px; padding-right: 10px; text-align: center;\"],\nimg[alt=\"Olybet\"]",".archive.tax-recipe-categories.term-velykos.term-82[style=\"overflow: hidden;\"]:last-child,\n.dialogBg,\n.valdiklis_reklama.clearfix [alt=\"probiotic valikliai\"]","#marquee,\n#paremk-panel",".hook.roof-placeholder",".banner",".top_banner.banner",".headtop,\n.visibankai-calculator","#brandpage",".col-sm-4.sidebar-column","#sidebar-primary-sidebar","marquee img",".textwidget.custom-html-widget",".banner-wide-border",".banner-desktop,\n.banner-mobile","#promotional_banner_root",".standartinisSarasas.sriftas13,\na[href=\"http://egu.lt\"]","a[href^=\"/component/banners/click/\"] > img","div[style=\"width: 80%; font-size: 12px; padding: 5px; border: 1px dashed #CCF5CC; background: #F0FCF0; margin: 0 auto;\"]","[style=\"line-height: 25px; margin: 15px 8px 2px auto;\"]","#alio_block,\n.C-banner,\n.ad-marker,\n.col-xs-9 a[href^=\"https://bit.ly/\"],\n.col-xs-9.left + div[class]:not([class*=\" \"]),\n.header-nav-container + :not(script, div, a, iframe, link),\n.hero,\n.revolut-juosta,\n.row > .left + div[class]:not(.right):not([id]) > :not(iframe):not(span):not(table):not(form):not([class]),\n[style] > [href] > img[width=\"100%\"],\nbody > #header-top-banner + [class]:not(div):not(iframe):not(span):not(table):not(form),\nbody > .container > .row > .left ~ :not(.right) > :not(.delfi-ads-block),\nbody > div[style*=\"height:\"][style*=\"z-index:\"],\ndiv[class^=\"col-xs-\"][style^=\"float: left; \"]:first-of-type + div[class]:not([class*=\" \"]):last-of-type,\ndiv[itemprop=\"articleBody\"] > div[style=\"float:left;margin: 0 25px 25px 0;\"],\niframe[src*=\"alio.lt/posPages.html\"],\niframe[src=\"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==\"]","img[src$=\"rozmarinas.gif\"]","#komentaru-top-left,\n#sticky-reklama,\n.article_showcase_1,\n.node > iframe[src$=\".php\"],\n.panel-pane:has(.pane-content > script:first-of-type + style + div:last-of-type),\n.panel-separator,\ndiv[class^=\"header-reklama-\"],\ndiv[id*=\"ado-\"],\niframe[src*=\"diena.lt/cview.php\"]",".ads",".post.bg3,\nimg[onclick=\"Set_Cookie( 'popunder31254', 'true', 3, '/', '', '' );document.getElementById('myBtn').style.display='none';\"]",".dialog.facebook-dialog > *,\n.widget-overlay","[alt=\"Klipas Donorystė\"]",".middle[style=\"border:none;padding:5px 0px;\"] *","img[title=\"Poko.lt = (lietuviški blogai + socialiniai tinklai) * vienas kitas algoritmas\"]",".row.dr-ad-top",".side-body > TABLE[bgcolor=\"#87B6D9\"]",".module-content A > img",".content.citems.banner","#sotewsadds",".footer-container > *","#friends_block,\n#lojalumas_block",".hometakeover.gofollow",".randomcontent.group1 + * + * + * > *,\n[style=\"border:1px solid #000000;padding:6px;\"],\ntd[bgcolor=\"#FFFFFF\"][align=\"center\"][style=\"border:1px solid #000000;\"]","td[style^=\"TEXT-ALIGN: \"]","#Image2_img",".adsbygoogle",".advert","#info_video,\niframe[src*=\"rekovers.ru/filmux.net.html\"]",".rkl","#popup-w",".xoxo.blogroll a[href=\"/\"] > img,\na[href=\"http://www.fotofaze.lt\"] > img","div[style=\"text-align: center\"]","[src^=\"http://www.friendsclub.lt/banners/\"] + *","a[href=\"http://www.vilniausgidas.lt\"]","#marquee > .tickercontainer img","#ct_testimonials-4",".geoturgus-ad",".xoxo.blogroll img",".add-2","#sideRight.sidebarRigt,\n.jspContainer[style=\"width: 550px; height: 299px;\"],\n.menu.draugailinks,\n.vp[style=\"height: 249px;\"]","img[alt=\"JPEG baneris\"][title=\"JPEG baneris\"]","#product2,\n.block.villa",".textwidget > a[href^=\"http://\"] > img","#stulpelis1c img","A.close","#v1b13546c9f","#inxAds-imr,\n#social,\n.col-xs-12.col-sm-5.col-md-6.col-lg-3.col-widget-4.games_widget","#Reklama,\n#canvas,\n.col-sm-3 > .ad,\n.row.ad-no-space","[title=\"ksi_120x60\"],\nimg[alt=\"inFROST - CS 1.6 Serveriai\"]",".projects-container-home","a[target=\"titul\"] > img","[src^=\"site/banners/\"] + * TD",".span4.column_container.td-post-sidebar,\n[id^=\"penci-banner_box\"]",".pixel6",".moduletable_ads",".miestasreng",".product-social",".left_banner",".top_baneris,\ntd[style=\"PADDING-BOTTOM: 13px; PADDING-LEFT: 0px; BACKGROUND: url(/kaunas/m/m_images/wfiles/il4sk332.jpg) #faf6f5 no-repeat left top; PADDING-TOP: 13px\"]",".code-block.code-block-1,\n.jeg_block_container,\n.jeg_postblock_content",".header-reklama-pagrindine-top-new,\nimg[height=\"50\"][width=\"300\"]","td[valign=\"top\"][height=\"168\"][bgcolor=\"#ffffff\"][style=\"PADDING-TOP: 15px\"]","#linkcat-30.widget_links.widget",".Banner,\n.left-banner-wrap","a[rel=\"nofollow\"] > img",".sidebar-item.friends","a[href=\"http://www.veltinis.lt\"] > img",".useful_banner_manager_banner *","div#draugai > *","#k980x200_krepsinis_net > *,\na[href^=\"https://goo.gl/\"],\ndiv[style=\"width:100%; top:44px; left:0; height:100vh; background-repeat:no-repeat;  position:fixed; background-position:50% 0px; background-image:url(https://www.tv3.lt/Uploads/wp_danai.jpg);\"]","#leftbar-w A > img","#right_banner","img.aligncenter","#minic_slider.theme-default *","#cc-m-imagesubtitle-image-3868849257",".home.blog .homeslider.rotator,\n.rightbar *",".greitasis_menu,\nSECTION#akcijos_wrapper.akcijos > img,\nimg[alt=\"OZO estetinės odontologijos ir implantologijos klinika\"]",".infobox-banner","#sidebar-primary",".nivo-controlNav,\n.nivoSlider","#scr > .js-marquee-wrapper > *","img[alt=\"klausyk.net, muzika, mp3, dainu zodziai\"]","#banners_container","#slaidukas,\n.sam-container.sam-place > img[style=\"display: inline;\"]","div[class^=\"cpcta-\"]","#aside-right",".custom a[href^=\"http://\"][target=\"_blank\"]","#parama,\n[action=\"https://www.paypal.com/cgi-bin/webscr\"] > *,\ndiv[style=\"position:relative; display:block; margin: 10px auto; text-align: center;\"]","img[alt=\"www.linda-seeds.com\"]",".banner-holder *","#wdBannerImg",".text-center:has(img)","div[style=\"margin:5px;text-align:center\"],\ndiv[style=\"text-align:center\"],\nimg[alt=\"Ruba.lt - vyriški marškiniai, megztiniai internetu, išpardavimas\"]","a[href=\"http://sportouzdarbis.com/\"] > *",".bannergroup","[href=\"https://www.lovejob.lt/darbo-skelbimai\"][target=\"_blank\"],\n[id^=\"custom_html-\"],\n[id^=\"media_image\"]",".textwidget",".widget.widget-promobox-small.width-1-5.no-bottom-margin,\n.widget.widget-promobox-wide.width-1-1.no-bottom-margin","a[href*=\"lova.lt/baldai/draugas/\"],\na[href*=\"lova.lt/imones/partneris/\"]","#block-block-31.block.block-block",".Scrolling_banner,\ntd[height=\"118\"]",".left_banners,\n.right_banners",".LBlockSidebar__item,\n[href^=\"https://delivery.adnuntius.com\"]","#ad_banner,\n.afs_ads","a[href=\"http://www.filmux.us\"]",".fl-row:has(iframe[src*=\"reklama\"])","#banners_170","#bigbank-mobile,\n.bottom-media","a[href^=\"http://www.\"][target=\"_blank\"]","#container-ads",".b-kaspersky > *","[href*=\"?utm_source=mainyk\"]",".djslider-loader","img[alt=\"SVEIKATOS RADIJO LOGObaneris180 x90\"]",".banners_mklt_side1.banner_cont","#text-86775731",".bnrdid",".tb-content-block.tb-content-block-banners-sidebar",".banner-article-wide,\n.banner-inline,\n.col-article-3.non-mobile,\n.lazyloading",".title-right-banner,\ndiv[style=\"background: url('client/img/sep-1.gif') repeat-x center;\"]",".squarebanner","#imagecontainer.header-image-container","#popopen[url=\"http://www.maxima.lt/asortimentas/meistro-kokybes-grilio-gaminiai-1/\"],\n.remas","#product-view-blokas-lizingas",".description",".mainBannerContainer,\na[href^=\"/sportas/straipsnis/kai-truksta-vitaminu-gelbsti-papildai-\"]",".box_outer.widget_awpcp-latest-ads + * + * *,\n[data-ai] [target=\"_blank\"][rel=\"nofollow\"]",".index_ads1",".module-outer","#categories-3 + * a[target=\"_blank\"]",".partners",".fluid-width-video-wrapper",".bannerWrapper","#norbe_sponsors-2,\n#norbe_sponsors-3","#leftBanners,\n#startBanners",".column.right,\n.section.vertical.mt20","#AutoNumber1","#text-5.widget.widget_text",".article-banner","div[style=\"border: 1px solid black; text-align: center; margin-bottom: 10px; font-size: 12px;  padding-top: 10px; padding-bottom: 10px; width: 628px; margin-left: 81px;\"]",".promotion.cp-banner *,\n.top-banner-ex","div[style=\"border: solid 3px #fcb617; width: 166px; padding: 8px 0px 8px 5px;\"]","[style=\"font-family: georgia,palatino; font-size: 10pt;\"] > a[href^=\"http://\"],\na + * + a",".baneriokas + * *",".pp-article-banner,\na[href=\"http://www.perpasauli.lt/naujienos/10-ispudingiausiu-austrijos-kampeliu.d?id=64743063&utm_source=external&utm_medium=newsexport&utm_campaign=250x500\"] > img",".full-width-banner,\n.full-width-banner-top,\n[id^=\"ox_ad_idAdbillboard\"],\n[widget-attachpoint^=\"easyPay\"].not-marketplace,\niframe[src^=\"https://www.sblizingas.lt/\"]",".ban","a[href=\"http://prekes.suaugusiems.lt/naujienos/knyga-kaip-prailginti-seksa?id=3691\"] > img","#ad_banner_skin,\n.c-details__leaderboard-ad,\niframe[style=\"border: 0px none transparent; width: 1440px; height: 750px; overflow: hidden;\"],\nspan[id*=\"_ad_container\"]","#bfad178770,\n#bfad240549,\n.headerhorizontalbanners,\n.headerverticalbanners","a[target=\"_blank\"] > *","#adblocker","#block-block-7 P,\n#sidebar-right",".main_banner.hidden-xs,\n.side_banners__items,\n.top_banners.visible-md","#content-banners,\n.header-banner","#dnn_LeftPane,\n#dnn_daugiauInfo","img[alt=\"laisvoji banga tiesiogine laida\"]","#ja-col2","[class^=\"banner\"]","img[title=\"Free Delivery on all Books at the Book Depository\"]",".ukio10","div[style=\"background-color: rgb(0, 0, 0); z-index: 100000001; opacity: 0.85; position: fixed; top: 0px; left: 0px; right: 0px; bottom: 0px; display: block;\"],\ndiv[style=\"background-color: rgb(92, 103, 103); z-index: 100000001; opacity: 0.85; position: fixed; top: 0px; left: 0px; right: 0px; bottom: 0px; display: block;\"],\ndiv[style=\"position: fixed; z-index: 100000003; visibility: visible; display: block; left: 0px; right: 0px; top: 0px; bottom: 0px;\"]",".contentadbox + * *",".adv",".mobile_banner,\na[href^=\"http://www.respublika.lt/,banner_id.\"]",".advertisement.list","#Slideshow2_slideshow","#newsticker-demo,\n.infiniteCarousel > *,\n.infiniteCarousel LI","[title=\"Blogosferos Autorių Teisių Gynimo Asociacijos Agentūra\"] > *,\nimg[alt=\"FlyLAL logo\"]",".banner-left-side",".banner_right","div[align=\"center\"]","[id^=\"fm_adv_\"],\ndiv[class^=\"news_p\"]",".flexbannergroup,\na[href=\"http://www.lefkada-hotels.com/\"]","[src*=\"http://www.senukai.lt/out/1/html/0/images/wysiwigpro/Baneris*\"]","#for-product1",".wrapper-sticky",".sidebar",".banners","a[target=\"_blank\"][href*=\"http://\"] > img","img[src*=\"baneris\"]","#ads","#header-banner","[src^=\"images/drawflash.php\"] + * > *,\na[href^=\"go.php?lt=\"]",".campaigns-list,\n.front-ads,\n.gfBlock,\na[href^=\"http://www.skytech.lt/\"] > *","img[alt^=\"baner_\"]","div:last-child > P[align=\"center\"]","#partners","img[alt=\"Poligrafijos įmonė 'Spauda': SPAUDA.COM\"]","[id^=\"s300x600_\"],\na[href^=\"http://www.taupiems.lt\"]","#promo,\n.shortcode","div[style=\"width: 752px; padding-top: 7px;\"]",".center.desktop.shadow-top,\nli[style=\"overflow:visible\"]",".widget_text:has(a:not([href*=\"suvalkai.\"])),\na[href*=\"pakavimopleveles.lt\"]",".side-block.side-banner *","div[style=\"width:250px; float:left\"] > div[style^=\"height:\"]","[class^=\"baneris\"]","iframe[width=\"728\"][height=\"90\"]",".block_sms,\n.greeting_right",".blog-sidebar *,\n.wsite-image.wsite-image-border-none","div[class=\"margin: 10px 0px\"]",".left_side","#portal_baner_750x100_td_v2,\n.lygiuoti_centras[style=\"padding: 1.5em 0em 1.25em 0em;\"],\n.main_block > center,\n.portlet_nuorodos,\n.visualPadding.lygiuoti_centras,\ndiv[style=\"margin:0.5em 0.5em 0.5em 0.0em; display:table; width:300px; height:250px;\"]",".leasing-info",".boxcontent.bannersr",".col-lg-6 > [align=\"center\"]",".td_ads_item",".MokiWidgets-leasingContainer-2Xd,\n.homepage-banners,\ndiv[id^=\"leasing-proposal-\"]","#headerr > [href=\"http://topwarez.lt/buy_vip.php\"] *","#ls7[src=\"http://www.topzone.lt/pav/esports.gif\"],\ndiv[id^=\"edit\"] > .tborder:not([id^=\"post\"]),\ndiv[style=\"margin-top:3px; margin-bottom:3px; height:250px;\"]","a[href=\"http://ldiena.lt\"] + * *","#inside > .block:has(.middle > #left_banner),\n#left_banner,\n#top_banner_torrent_details,\n.tb_click,\n.tb_click_left,\n.tb_click_right,\n[href^=\"https://bit.ly/\"][target=\"_blank\"],\na[href*=\"flirtai.lt\"],\na[href*=\"topsport.lt\"],\na[href=\"store?ad=0\"],\na[href^=\"https://7bet.lt\"]","div[style=\"padding-top:4px;padding-bottom:4px;text-align:center;\"]","td[style=\"PADDING-BOTTOM: 15px; PADDING-LEFT: 12px; PADDING-RIGHT: 10px; BACKGROUND: url(/trakai/m/m_images/wfiles/igxbdh5338.jpg) repeat-y left top; PADDING-TOP: 15px\"],\ntd[style=\"PADDING-BOTTOM: 15px; PADDING-LEFT: 22px; BACKGROUND: url(/trakai/m/m_images/wfiles/ipxjgy5347.jpg) repeat-y left top; PADDING-TOP: 16px\"]",".banneritem","#tv300x600_1d_tv3\\.lt *,\n#tv980x200_tv3_lt,\n#tv980x200_tv3_lt *,\n.custom-stick-div,\n.imMobile,\n[id^=\"tv300x250\"],\n[onclick=\"ga('send', 'event', 'Anonsai', 'Click', 'Svarbiausia blokelio paspaudimas');\"] *,\na[href*=\"goo.gl/\"]",".banner1","#area1.home-banner,\n#area2.home-banner","div[class*=\" min-h-[\"]","#billboardwrapper,\n#table-rightbanner1,\n#table-rightbanner3.rightbanner_info,\n.module_right_content_col,\n.topbanner_info [data^=\"http://www.vaistai.lt/images/banners/\"]",".col-md-12.col-sm-6.col-xs-12.nopaddingright.nopaddingright-small.nopaddingleft-xs.padding-left-sidebar-small",".banner-1",".adsb",".popup_overlay",".ad120_box,\n.ad468_frame_bot,\n.widget3",".otRounded.module-other-website-banner *","#page-ads,\n#sidebar-madmen",".moduletabledesinen","a[target=\"_blank\"]",".content_banners","a[rel=\"nofollow\"] + * + * + * > img",".bannerbox,\n.cvWr.row.hidden-xxs,\n.cvWrSidebar,\n[onclick=\"window.open('http://www.cv.lt','_blank')\"]",".outerContainer","#bottom-banners,\n.remejulogo","#rightcol","#HTML3 A > img","a[href*=\"http://www\"] > img",".banner-block",".border_style.padding0px",".box1[style=\"background:none; text-align:center; padding:5px;\"],\n.box1[style=\"padding:10px 0;\"]","CENTER > A > *,\na[alt=\"Prezi.lt\"] + CENTER","img[alt=\"Informacija ir pagalba telefonu 1588\"]",".top-media",".list-media","[style=\"height: 90px; width: 728px;\"]","#banner-three-in-one-between-items,\n#bigbank-small-loan,\n#inbank-loan-calculator1,\n#items-view-type-grid > div[style^=\"margin-top: \"]:not([class]),\n#list-middle-zone,\n#right-side-layout,\n#top-item-zone,\n.bigbank-loan-calculator-wrapper,\n.bigbank-recommendation-by,\n.gallery-kainos-more-products,\n.kainos-gallery-item,\n.kainos-item,\n.lazy-zone,\n.luminor-item-container,\n.luminor-item-container-new,\n.luminor-spacer,\n[href^=\"https://www.aruodas.lt/nauji-projektai/?utm_source\"]","#big-bank-small-mobile",".lb-adx-frame.ad-marker,\n.md-block > div:not([class]):has(> [class*=\"adx\"]),\ndiv[id^=\"adx-\"] + div","#block-adaboveheader,\n.layout__region--ad",".custom-div","#MarksPlus,\n.ban_script_code,\n.navParentLi.menu_img_payment,\n[href^=\"https://pubads.g.doubleclick.net\"],\ndiv[class^=\"premium-info\"]","#unit-details-sidebar-ad",".sidebar-banner",".sp-module:has(.adsbygoogle, img[src*=\"/reklama_\"], a[href*=\"mods.\"])",".adv_b",".sp-column:has(#krepsiniozinios_lt_top),\ndiv[itemprop=\"articleBody\"] > p + div[style*=\"padding-top\"]",".col-md-6:has(ins.adsbygoogle)","#sp-right .custom > p[style^=\"text\"],\n#sp-right .module:has(script, a[data-saferedirecturl]),\n#sp-top-banner-block-wrapper,\n.bottom iframe",".text-center.row",".widget_custom_html:has(.stickyContainer)",".widget_text:has(ins)","aside > .uk-panel-box:has(> ins)","iframe[data-id]","a[href*=\"casino\"]","#sidebar1 > .block-title",".links",".widget_block","#custom_html-9,\n#madeinvilnius_lt_300x250_below_article,\n.content-inner > div[style^=\"text-align: center;\"][style*=\"min-height:\"],\ndiv[style$=\"margin: 15px 0; min-height: 250px;\"]",".top-banners",".main_title > div[style=\"text-align: center;\"] > a > img,\ndiv[style^=\"text-align: center; width: 300px; height: 250px;\"]","DIV.content"];

const hostnamesMap = new Map([["1588.lt",[0,31]],["15min.lt",[1,2,49]],["aciu.lt",3],["aina.lt",4],["akmensmagija.lt",5],["alfa.lt",6],["alio.lt",7],["alkas.lt",8],["alytus-tourism.lt",9],["anglija.lt",[10,11]],["kamane.lt",[11,98]],["anglija.today",[12,26]],["apiterapija.lt",13],["archyvai.lt",14],["aruodas.lt",[15,16]],["skelbiu.lt",[16,286]],["asvyras.lt",17],["atvfanai.lt",18],["auto-loads.lt",19],["autobilis.lt",20],["autogidas.lt",[21,284]],["automokyklos.lt",22],["autoplius.lt",[23,24]],["www.plius.lt",[24,283,284]],["m.autoplius.lt",[25,26]],["imunitetas.lt",26],["mesmoterys.lt",26],["snaujienos.lt",26],["delfi.lt",[26,31,46]],["etaplius.lt",[26,303]],["basketnews.lt",[27,31]],["beatosvirtuve.lt",28],["bernardinai.lt",29],["beta.lt",30],["cs-servers.lt",31],["racas.lt",31],["rinkaplius.lt",31],["strazdaneles.lt",31],["pasikeisk.lt",[31,180]],["priekavos.lt",[31,195]],["sodobaldai.lt",31],["ekopirk.lt",[31,61]],["zaislaivaikams.lt",31],["kcci.lt",31],["m.autogidas.lt",[31,148]],["tikrojilietuva.com",[31,35]],["cvmarket.lt",32],["domoplius.lt",33],["imones.lt",34],["bigbenas.lt",36],["infodiena.com",[36,218]],["cagsolution.blogspot.com",37],["chatas.lt",38],["moteris.lt",[39,40]],["panele.lt",[39,40,179]],["tavovaikas.lt",[39,40,179]],["manonamai.lt",[39,159]],["myheritage.lt",41],["dainos.lt",42],["danguje.lt",43],["danielius.net",44],["day.lt",45],["depresijosklubas.lt",47],["diena.lt",48],["pokernews.com",49],["diskusijos.darnipora.lt",50],["domo.plius.lt",51],["donoryste.eu",52],["dovanos.lt",53],["dratas.lt",54],["draugas.lt",55],["drauge.org",56],["drg.lt",57],["dumblas.com",58],["ecoland.lt",59],["efarma.lt",60],["ekspresas.co.uk",62],["elektronika.lt",63],["elta.lt",64],["enorca.blogspot.com",65],["eurobasket.lt",66],["fightclub.lt",67],["161.97.106.129",68],["fortuna.draugas.lt",69],["fotofabrikas.lt",70],["fotofaze.lt",71],["fotoservisas.lt",72],["friendsclub.lt",73],["g-taskas.lt",74],["gamtosnamai.lt",75],["gedulas.lt",76],["geoturgus.lt",77],["gintarinesvajone.lt",78],["grokiskis.lt",79],["grozionamai.lt",80],["grozioperlas.lt",81],["grupinis.lt",82],["gyvenimas.eu",83],["gyvenimoguru.lt",84],["gyvensena.sveikas.lt",85],["hardas.lt",[86,226]],["inbox.lt",87],["info.lt",88],["infrost.lt",89],["interjeras.lt",90],["internetine-tv.narod.ru",91],["invega.lt",92],["jp.lt",93],["jumsinfo.lt",94],["juokauju.lt",95],["kabutes.kasvyksta.lt",96],["kaina24.lt",97],["kaunas.lt",99],["kaunieciams.lt",100],["kauno.diena.lt",[101,238]],["kedainiai.lt",102],["kitokiagrafika.lt",103],["kkml.lt",104],["klauskkunigo.lt",105],["voruta.lt",[105,271]],["kmobiles.lt",106],["knygoholike.blogspot.com",107],["konsultuokis.lt",108],["kosmetikos.lt",109],["krepsinis.net",[110,290]],["kronika.lt",111],["krs.lt",112],["ksi.lt",113],["kudikiuprekes.lt",114],["kuliesius.jimdo.com",115],["kulturizmas.net",116],["kupi.lt",117],["kurjeris.lt",118],["kursenuparapija.lt",119],["kvitrina.lt",120],["l24.lt",[121,255]],["l2info.lt",122],["lankasautodalys.lt",123],["laikrastisplunge.lt",124],["laisvadienis.lt",125],["laisvaslaikrastis.lt",126],["lbks.lt",127],["ldiena.lt",128],["legalus.net",129],["legionas.lt",130],["lietuvis.no",131],["lietuviuzodynas.lt",132],["liguabc.lt",133],["linksmiau.net",134],["madairgrozis.lt",135],["muge.eu",136],["lituanicon.lt",137],["pump.lt",137],["lkl.lt",138],["lova.lt",139],["lrprezidentas.lt",140],["lrt.lt",[141,278]],["lrvalstybe.lt",142],["lrytas.lt",143],["lttv.us",145],["lzinios.lt",146],["lzskelbimai.com",147],["macpartija.lt",149],["magic-shop.lt",150],["mail.inbox.lt",151],["mainyk.lt",152],["mamairtetis.lt",153],["mamairvaikas.lt",154],["mamyciuklubas.lt",155],["man.lt",156],["mano-gargzdai.lt",157],["manoekonamai.lt",158],["maps.lt",160],["martens.lt",161],["masazonamai.lt",162],["maxima.lt",163],["mediashop.lt",164],["medicina.lt",165],["minfo.lt",166],["miske.lt",167],["miskobirza.lt",168],["motersgrozis.lt",169],["musupaveldas.lt",170],["miegantysdrambliai.lt",171],["skytech.lt",[171,225]],["naujienos.vu.lt",172],["nklyga.lt",173],["norbefilms.com",174],["officeday.lt",175],["one.lt",176],["orai.biz",177],["pasidarykpats.eu",178],["pasveik.lt",181],["pazintys.draugas.lt",182],["pegasusfoto.lt",183],["perkuvaikui.lt",184],["perpasauli.lt",185],["pigu.lt",186],["pirkanglijoje.lt",187],["pirmas-kartas.com",188],["play.tv3.lt",189],["pokeris.lt",190],["portas.lt",191],["reksas.lt",191],["powerhitradio.tv3.lt",192],["pradzia.org",193],["priejuros.lt",194],["prokuraturos.lt",196],["psichologas.info",197],["pulsas.lt",198],["pzemaitis.lt",199],["xn--mslaikas-qzb5f.lt",199],["radiocool.lt",200],["rde.lt",201],["receptai.lt",202],["reitingai.eu",203],["rekvizitai.vz.lt",204],["respublika.lt",205],["rinka.lt",206],["rinkoje.blogspot.com",207],["rkdragunas.lt",208],["rokiskis.popo.lt",209],["rutana.lt",210],["samata.lt",211],["sapnuotisapnus.lt",212],["savaite.lt",213],["savas.lt",214],["senukai.lt",215],["server2.beta.lt",216],["siandien.com",[217,218]],["meistras1.lt",219],["bitute.lt",219],["vivasaninfo.lt",219],["piniginuke.lt",219],["tuka.lt",219],["vz.lt",[219,272]],["siloaidas.lt",[220,221]],["mususavaite.lt",221],["spainetosdraudimas.lt",[221,228]],["silokarcema.lt",222],["skelbimai.lt",223],["skelbikas.lt",223],["skrastas.lt",224],["solisun.lt",226],["sorimpeksas.com",227],["spauda.lt",229],["sportas.lt",230],["sport24.lt",231],["supermama.lt",232],["sutarta.lt",233],["suvalkai.lt",234],["sveikas.lt",235],["sveikatosabc.lt",236],["sveikatossodas.lt",237],["klaipeda.diena.lt",238],["sveikinimai.link",239],["sveksnosnaujienos.lt",240],["tavovaikams.lt",241],["technews.lt",242],["technologijos.lt",243],["technorama.lt",244],["teisescentras.lt",245],["telefononumeris.com",246],["tevu-darzelis.lt",247],["topocentras.lt",248],["topwarez.lt",249],["topzone.lt",250],["torentai.lt",251],["torrent.ai",252],["torrent.lt",252],["traders.lt",253],["trakai.lt",254],["treneris.net",255],["smc.kedainiai.lm.lt",255],["suduvosgidas.lt",255],["anyksta.lt",255],["tv3.lt",[256,290]],["tvenkiniu-projektai.lt",257],["nemokamosknygos.lt",257],["vaikutis.lt",258],["tv.lrytas.lt",259],["vaistai.lt",260],["valstietis.lt",261],["vandensparkas.lt",262],["vardai.org",263],["varle.lt",264],["veidas.lt",265],["vela.lt",266],["versliukai.lt",267],["verslosavaite.lt",268],["vilniaus-turtas.lt",269],["niekonaujo.lt",269],["visalietuva.lt",270],["widgets.sportotv.lt",273],["zalgiris.lt",274],["zappy.lt",275],["zhalia-pieva.blogspot.com",276],["zindyk.lt",277],["ziukai.lt",278],["zodynai.igloro.info",279],["zodynas.kriu.lt",280],["zooplius.lt",281],["zurnalai.lt",282],["skaiciuokle.lt",285],["m.skelbiu.lt",287],["m.delfi.lt",288],["ve.lt",289],["manodienynas.lt",291],["elenta.lt",292],["ohoskelbimai.lt",293],["zarasuose.lt",294],["vilniausskelbimai.lt",295],["krepsiniozinios.lt",296],["anekdotai.lt",297],["budas.lt",298],["game-game.lt",299],["nidosreceptai.lt",300],["bukimevieningi.lt",301],["pirkis.lt",302],["hey.lt",304],["kaunozinios.lt",305],["vilniauszinios.lt",306],["kinomanija.lt",307],["madeinvilnius.lt",308],["m.basketnews.lt",310]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["tvplay.tv3.lt",[144]],["avitela.lt",[309]],["skelbiu.lt",[311]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/

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

// ruleset: cze-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".ads-box,\n.reklama-box",".r-main",".reklama",".g_ad",".rklm","#adsense","#adverts",".adBanner","#ad_skin",".advertising-content",".wpa.top","[class^=\"advert__\"]",".banner-header","#biglink","#content-right > div[style]:first-of-type","#header-banner","#leva-reklama","#header-reklama,\n.side-bann-l,\n.side-bann-r",".rklh",".banner2,\n.wrap + div:not(#footer)",".square_banner","#skyscraper","#sideScrapperLayout,\ndiv[id*=\"Banner\"]","#js-branding,\ndiv[id^=\"czech-\"]","[id^=\"hyperbox\"]",".box-offer",".cornerbox,\n.heurekaIframeHeader","div#td-outer-wrap > div.td-container",".mone_box",".ad-obal",".box-banner","div[id^=\"ad_\"]","div[class^=\"reklama\"]","#pr-prace-blok-view,\ndiv.block-jobs-link,\ndiv[class*=\"openx-async\"]","div#highlitesAds",".layoutTop","#topSite,\n.gallery-advertisement","#g-top-bannery",".intent-exit-box.l-row,\n.js-popup-quest.intent-exit-popup--quest.intent-exit-popup,\ndiv[class*=\"adcontainer\"]",".adsense,\n.leaderboard,\n.seriesadvert,\n.skyscraper",".banner","#r-leaderboardhp","div[id^=\"cross\"]",".rf-branding,\ndiv[class^=\"cross\"]","#fancybox-overlay,\n#h_part_right","#t-content",".topbanner","div[id^=\"ad-leaderboard\"]",".advert",".ads","[class*=\"ad_\"]","#box-over-content-a","#ad",".design-advert-placeholder,\n.design-box--jobs,\ndiv.article--content:has(div.design-advert)","#invelt","div.klik--leaderboard","#blackfooter",".topbanners","#box.mb,\n.arr-red","#ahead","#stOverlay,\n.promobox",".body_message--ad","div._banner","[class*=\"sda\"]:not(.post-content)","div.bottom-partners","div.container.partners",".filtr.category-partner,\ndiv[class$=\"advert\"],\ndiv[class*=\"__banner\"]","[class*=\"sda-\"]",".TopFullBanner","div[id^=\"hyper\"]","div.advert-leader-board-container",".reklama-background","#social",".bannLead","div.banner_position","div[class*=\"Commercial_container\"]",".rleft,\n.rright,\n.tree","div[id^=\"banner\"]",".ad",".v-card--link:has(.ad),\n.v-card.mb-6","[class*=\"partnеr\"],\na[rel=\"sponsored\"]",".top_background","#z990x200,\n#zr300x600,\n[id^=\"adv_\"],\na[href*=\"utm_campaign=kurzy_\"],\niframe[src^=\"https://img.kurzy.cz/og\"]",".square","#aa1",".banner-under,\n.product-ad-wrapper,\n.sqaure-mobile-ad","#box-3,\n#rbackground-link,\ndiv[id*=\"reklama\"]",".banns-group","#block-nodesinblock-0",".header_banner","div[id^=\"mp_banner_\"]",".scroll_banner",".banner, .left-side-banner, .right-side-banner,\na[trgurl], a[href*=\"relocate.php\"],\ndiv:has(> a[href*=\"?act=detail&f=8\"])",".komerce",".npab",".box-responsive","#banner-left-pane,\n#banner-top-four,\n#sportObchodBanner,\ndiv.bannerHolderZapasRight","pp",".right","div[style^=\"float:left;width:468px;\"] + img[src^=\"data:image/gif;base64,\"]",".advtick","#ad-leaderboard-alt-sides,\n.ad-leaderboard-alt-wrapper","a[class^=\"levakolejroku\"],\na[class^=\"pravakolejroku\"]","#branding_anchor_left,\n#branding_anchor_right,\n.adtea_inpage,\n.adtea_leaderboard","#leaderBox,\n.sticky-wrapper","#fixedMenu,\n#rek3,\n#rodkaz",".roumingLista",".ai_widget","#pvMid","a[href^=\"https://prehrajto.cz/?cc=prlbmso2\"]",".mid-lead-hp",".gadget--zbozi,\ndiv[data-dot*=\"gadgetCommercial\"]","div.ogm-branding > div > div","a[href*=\"track.smartmania.cz\"]","#P_reklama_horni,\n.reklamni_sdeleni,\n.rs_reklama,\n[style=\"vertical-align:middle; text-align: left; width: 139px;\"]",".mabo.faa,\n[style=\"width:960px;margin:0 auto;text-align:left\"]","a[data-dot=\"c_pozadi\"],\na[data-dot=\"hp_pozadi\"],\ndiv.ad",".Flagrow-Ads-under-header",".amalker",".bbtitle","#pagefoot","#vyjizdeciBoxikDiv","div[class^=\"branding-ad\"]",".sidebar-banner,\n.skyscrapper-right",".branding-link",".banner-brand","#tblHorniLista",".center,\nobject[id*=\"bfad\"]","#adLocation-21,\n#popwrapper,\n#t-overlay,\n.row0,\na[href=\"http://acu.cz\"],\nh3","[class^=\"ws-banner-\"]","div.ad-exclusive,\ndiv.dragging-enabled:has(div.gadget--reklama),\ndiv.ogm-sticky-repeater",".SkyLeft.Banner","div.main-top,\ndiv.site-reklama","#content-lead,\ndiv.sky-wrapper","[class*=\"advertisement\"]",".bannero2","#modal-container,\ndiv[id^=\"branding\"]",".modal-backdrop","div[class^=\"banner_box\"]","a[href=\"http://www.Onlinefilmy.eu\"],\na[href=\"http://www.movieportal.eu\"],\ndiv[style=\"font-size:20px; font-family:Arial Black, Arial; color:#FF0000; font-weight:bold\"]","div[id^=\"ad\"]","a[id*=\"popup2\"],\ndiv[id*=\"banner\"],\ndiv[id*=\"casino\"]",".container--break-branding,\n.container--break:has(.ad--align),\n.container--ticketportal,\n.item--socials,\n.item__ad-center,\ndiv[class^=\"position_\"]:has(.ad--align)","div[class*=\"pohodoWidget\"]","a.predpredaj-black",".h2.grad2.kupons_games",".header_info_text",".s-branding,\n[id^=\"banner-\"],\ndiv[style*=\"Roboto\"][style*=\"fixed\"],\nstripemark",".newsletter,\nheader > div","#footer,\n#headerSlideContent1,\n#ocko","[id^=\"mk-branding-\"]","#brnd","a[href*=\"trackBannerAd\"]",".overlay,\na[class^=\"tv-\"]",".c_banner300x300",".modal","#push_promt,\n.wrapper__list__article:has(.widget__form-subscribe)",".post.bg5","[id^=\"back\"][onclick]","iframe[data-src^=\"/default-ad\"]","div[id][style=\"position: absolute; top: 0; left: 0; width: 100%; height: 380px; text-align: center;\"]","div[style*=\"position:absolute;\"]",".artemis-ad-position","#top-offers-slider,\n.addbox.avizo,\n.box_advertisment.addbox.recycle,\n.nastip,\n.takeoverKlik",".gate-advert-wrap",".dragobj > div:nth-of-type(2),\n.stn.stns > a[target=\"_blank\"],\n.stn.stnu > a[target=\"_blank\"]",".connection-results-ad",".widget:has(img[src*=\"/ads/\"]),\ndiv[id^=\"advert_\"]","div[class=\"advertisement-list-component\"],\ndiv[class^=\"item h2\"]",".native-ads","a[href^=\"https://boxu.sk\"]",".widget-group-2 li:has(div.ad-pmg)","div:has(> a[class^=\"glightbox\"])",".bcc:has(.banners)",".desktop-wrapper:has([id^=\"div-gpt-ad\"])",".tdc-row:not(:has(> .tdc-element-style))",".content-item:has(.header a[href^=\"/reklama/\"])","div[id^=\"pos-\"]","div[data-e-b-n*=\"advert\"],\ndiv[data-e-b-n*=\"sklik\"]"];

const hostnamesMap = new Map([["365tipu.cz",10],["aktualne.cz",11],["appliste.cz",12],["serialzone.cz",[12,110]],["autobazar.cz",13],["autoforum.cz",[14,15]],["wmmania.cz",15],["autohit.cz",16],["autosport.cz",17],["autoweb.cz",18],["autozine.cz",19],["businessworld.cz",[20,21]],["computerworld.cz",[20,21,29]],["pcworld.cz",21],["busportal.cz",22],["cc.cz",23],["ceskenoviny.cz",[24,25]],["nasepenize.cz",25],["cesky-jazyk.cz",26],["cnews.cz",27],["cnn.iprima.cz",28],["csfd.cz",[30,171]],["csfd.sk",30],["databazeknih.cz",31],["denik.cz",32],["diit.cz",33],["cdr.cz",33],["dotekomanie.cz",34],["drbna.cz",35],["e15.cz",[36,133]],["info.cz",36],["e-mostecko.cz",37],["echo24.cz",38],["edna.cz",[39,40]],["in-pocasi.cz",40],["ireceptar.cz",40],["webtrh.cz",40],["centrum.sk",[40,145]],["cp.sk",[40,48]],["emimino.cz",41],["enigmaplus.cz",[42,172]],["epochaplus.cz",[43,172]],["esemes.cz",[44,45]],["warforum.cz",[45,128]],["estav.cz",46],["euro.cz",47],["eurogamer.cz",48],["pravopisne.cz",48],["pravopisne.sk",48],["pravda.sk",48],["evropa2.cz",49],["filmporno.cz",[49,57]],["isport.blesk.cz",49],["karaoketexty.cz",50],["livesport.cz",51],["login.szn.cz",52],["lupa.cz",53],["root.cz",53],["ewrc.cz",54],["extra.cz",55],["fdb.cz",56],["finance.cz",[58,59]],["motoforum.cz",59],["firstclass.cz",60],["forum.root.cz",61],["fotoaparat.cz",62],["grunex.com",63],["hcdukla.cz",64],["hcmotor.cz",65],["heureka.cz",66],["heureka.sk",66],["hrej.cz",67],["pctuning.cz",67],["tryhard.cz",67],["zing.cz",67],["hybrid.cz",68],["idnes.cz",69],["lidovky.cz",69],["idos.idnes.cz",70],["itnetwork.cz",71],["jaknaletenky.cz",72],["kaloricketabulky.cz",73],["kamsdetmi.com",74],["kinobox.cz",75],["kladenskelisty.cz",76],["kniha.cz",77],["konzolista.cz",[78,79]],["topky.sk",[78,163]],["tvtv.sk",[78,176]],["krimi-plzen.cz",80],["kupi.cz",81],["kurzy.cz",82],["lamer.cz",83],["moda.cz",83],["libise.eu",84],["mall.tv",85],["matematika.cz",86],["mediar.cz",87],["medop.cz",88],["menicka.cz",89],["meteoprog.cz",90],["mladypodnikatel.cz",91],["motorkari.cz",92],["mrk.cz",93],["nasepraha.cz",94],["navratdoreality.cz",95],["onlajny.com",96],["onlymen.cz",97],["osel.cz",98],["parabola.cz",99],["pravidla.cz",100],["prehrajto.cz",101],["primat.cz",102],["programujte.com",103],["reflex.cz",104],["ronnie.cz",105],["rouming.cz",106],["rozbor-dila.cz",107],["rozbor-dila.eu",107],["rozborknihy.cz",107],["studijni-svet.cz",107],["ekonomie-ucetnictvi.cz",107],["biologie-chemie.cz",107],["anglictina-maturita.cz",107],["sauto.cz",108],["serialycz.cz",109],["seznam.cz",111],["seznamzpravy.cz",112],["prozeny.cz",112],["garaz.cz",112],["smartmania.cz",113],["sms.cz",114],["stesti.cz",115],["super.cz",116],["telekomunikace.cz",117],["tipcars.com",118],["tiscali.cz",119],["titulky.com",120],["topzine.cz",121],["tv.seznam.cz",122],["tvfreak.cz",123],["uschovna.cz",124],["vortex.cz",125],["war4all.com",126],["warezforum.cz",127],["webshare.cz",129],["www.seznam.cz",130],["zakonyprolidi.cz",131],["zena-in.cz",132],["zive.cz",133],["mobilmania.cz",133],["autorevue.cz",133],["maminka.cz",133],["netconcert.cz",134],["autobazar.eu",135],["autozurnal.com",[136,137]],["pppeter.shop",[137,155]],["presovak.sk",[137,156]],["behame.sk",138],["best4you.sk",139],["bmwklub.sk",140],["bombuj.si",141],["serialy.bombuj.si",141],["brainee.hnonline.sk",142],["cas.sk",[143,144]],["feminity.zoznam.sk",143],["dsl.sk",146],["hnonline.sk",147],["kosicednes.sk",148],["michalovskespravy.sk",149],["modrykonik.sk",150],["mojevideo.sk",151],["mtbiker.sk",152],["najserialy.to",153],["pokec.azet.sk",154],["pretaktovanie.zoznam.sk",157],["sector.sk",[158,159]],["kinema.sk",158],["serialy.io",160],["sktorrent.eu",161],["sme.sk",162],["touchit.sk",164],["tv-program.sk",165],["ubian.sk",166],["vtn-vranov.sk",167],["vranovske.sk",168],["zmeskanyhovor.com",169],["zoznam.sk",170],["msmt.cz",173],["slovnik.aktuality.sk",174],["sports24.cz",175],["mobilenet.cz",177],["fzone.cz",177],["fdrive.cz",177],["search.seznam.cz",178],["clanky.seznam.cz",178]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["denik.cz",[0]],["hyundai.com",[1]],["jaguar-club.net",[2]],["mazdaclub.cz",[2]],["nissanclub.cz",[2]],["novinky.cz",[3]],["www.parabola.cz",[4]],["skrblik.cz",[5]],["sluzebnik.cz",[6]],["aktuality.sk",[7]],["dobre-recepty.sk",[8]],["vranovske.sk",[9]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/

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

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"p > b\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"AdBlock\\\")]\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"@media print\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"devtoolsDetector\"]]}"],["{\"selector\":\"#root > div > div\",\"tasks\":[[\"has-text\",\"Get one more story in your member\"]]}","{\"selector\":\".overlay\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"Welcome back\"]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"write a response\"]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"Publish now\"]]}]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"user-select:\"]]}"],["{\"selector\":\"[id=\\\"toggle_notification_notification-ad-blocker\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".pull-right.inline-gallery-container\",\"tasks\":[[\"has-text\",\"Post this\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.oncontextmenu\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"debugger\"]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".ct_warn\",\"tasks\":[[\"has-text\",\"adblock\"]]}"],["{\"selector\":\"div[style] > div > .userBanner--red\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".et_pb_row_1_tb_body\",\"tasks\":[[\"has-text\",\"Sign up for our weekly newsletter\"]]}","{\"selector\":\".et_pb_section\",\"tasks\":[[\"has-text\",\"Sign up for our weekly newsletter\"]]}"],["{\"selector\":\".border-gray-200\",\"tasks\":[[\"has-text\",\"Get the news\"]]}","{\"selector\":\".border-secondary-900\",\"tasks\":[[\"has-text\",\"Get the news\"]]}"],["{\"selector\":\"div[class^=\\\"-_\\\"] > form\",\"tasks\":[[\"has-text\",\"newsletters\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"user-select\"]]}"],["{\"selector\":\"button[type=\\\"submit\\\"]\",\"action\":[\"remove-attr\",\"disabled\"]}"],["{\"selector\":\".js-dismissable-hero\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\".bg-gray-50\",\"tasks\":[[\"has-text\",\"Fake news\"]]}","{\"selector\":\".hidden\",\"tasks\":[[\"has-text\",\"Fake news\"]]}"],["{\"selector\":\".bg-gray-100\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.onmousedown\"]]}"],["{\"selector\":\"div[oncopy]\",\"action\":[\"remove-attr\",\"/oncopy|oncut|onpaste/\"]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"/addLinkToCopy/i\"]]}"],["{\"selector\":\".sidebar-form\",\"tasks\":[[\"has-text\",\"Sign Up For Our Newsletter\"]]}"],["{\"selector\":\".callout\",\"tasks\":[[\"has-text\",\"inbox\"]]}"],["{\"selector\":\".col1span3\",\"tasks\":[[\"has-text\",\"Newsletters\"]]}"],["{\"selector\":\".p-4.bg-\\\\[\\\\#F5F5F5\\\\]\",\"tasks\":[[\"has-text\",\"Subscribe to our newsletter\"]]}"],["{\"selector\":\".MuiBox-root\",\"tasks\":[[\"has-text\",\"Subscribe to our Newsletter\"]]}"],["{\"selector\":\".has-primary-dark-background-color\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\".bg-purple-50\",\"tasks\":[[\"has-text\",\"Fan of great business\"]]}","{\"selector\":\".md\\\\:px-2.py-10\",\"tasks\":[[\"has-text\",\"Subscribe to the newsletter\"]]}"],["{\"selector\":\"strong > .link--button\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".bg-primary-dark\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"body[class^=\\\"scroll-block--is-blocked\\\"]\",\"action\":[\"remove-class\",\"/scroll-block--is-blocked/\"]}"],["{\"selector\":\".px20.pb32\",\"tasks\":[[\"has-text\",\"Sign up for\"]]}"],["{\"selector\":\".section > .wrapper\",\"tasks\":[[\"has-text\",\"Newsletters\"]]}"],["{\"selector\":\"#home-section3\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\"#modal_login\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//div[contains(text(),\\\"Adblock\\\")]/..\"]]}"],["{\"selector\":\".bottom-0.fixed\",\"tasks\":[[\"has-text\",\"weekly newsletters\"]]}","{\"selector\":\".lg\\\\:p-\\\\[16px\\\\]\",\"tasks\":[[\"has-text\",\"newsletters\"]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Using an ad blocker?\"],[\"upward\",3]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/-moz-user-select:none|@media print/\"]]}"],["{\"selector\":\".ReactModalPortal\",\"tasks\":[[\"has-text\",\"mobile\"]]}"],["{\"selector\":\".p-6.justify-center\",\"tasks\":[[\"has-text\",\"Daily newsletter\"]]}"],["{\"selector\":\".order-lg-2\",\"tasks\":[[\"has-text\",\"Sign up to our newsletter\"]]}","{\"selector\":\".sidebar-sticky\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".forbidden_select\",\"action\":[\"remove-class\",\"forbidden_select\"]}"],["{\"selector\":\".comp > strong\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".swal2-shown\",\"action\":[\"remove-class\",\"swal2-shown\"]}"],["{\"selector\":\".fbUserStory\",\"tasks\":[[\"has-text\",\"Popular Across Facebook\"]]}","{\"selector\":\".userContentWrapper\",\"tasks\":[[\"has-text\",\"Popular Across Facebook\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"-moz-none\"]]}"],["{\"selector\":\".pb-1.gap-4\",\"tasks\":[[\"has-text\",\"Sign up for\"]]}","{\"selector\":\".pb-6\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\"[oncontextmenu=\\\"return false;\\\"]\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\".td-block-title.block-title\",\"tasks\":[[\"has-text\",\"NEWSLETTER\"]]}"],["{\"selector\":\".has-senary-background-color\",\"tasks\":[[\"has-text\",\"Email\"]]}","{\"selector\":\".has-tertiary-background-color\",\"tasks\":[[\"has-text\",\"Week\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"blocking software\\\")]/../../..\"]]}","{\"selector\":\".advanced.embed-media\",\"tasks\":[[\"has-text\",\"Get a daily look\"]]}"],["{\"selector\":\".bg-gray-100\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\"script[id=\\\"jquery-core-js-after\\\"]\",\"tasks\":[[\"has-text\",\"e.preventDefault();\"]]}"],["{\"selector\":\".w-full\",\"tasks\":[[\"has-text\",\"Mailing\"]]}"],["{\"selector\":\"h3.section_name\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\".wp-block-group-is-layout-flow\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\"html.no-scroll\",\"action\":[\"remove-class\",\"no-scroll\"]}"],["{\"selector\":\".d-lg-block.sp-module\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",1]]}","{\"selector\":\"body > div[id]\",\"action\":[\"style\",\"visibility: hidden !important\"],\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}]]}"],["{\"selector\":\".t-bg-surface-zero.t-p-6\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"contextmenu\"]}"],["{\"selector\":\".pb-6.border-b\",\"tasks\":[[\"has-text\",\"Signup\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"stopRefreshSite\"]]}"],["{\"selector\":\"p > em\",\"tasks\":[[\"has-text\",\"Sign up for\"]]}"],["{\"selector\":\"div.confuse\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".p-8.bg-dynamic-primary\",\"tasks\":[[\"has-text\",\"straight to your inbox\"]]}"],["{\"selector\":\"style\",\"tasks\":[[\"has-text\",\"user-select: none;\"]]}"],["{\"selector\":\".shadow-card.p-8\",\"tasks\":[[\"has-text\",\"Laravel Newsletter\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"unselectable\"]]}"],["{\"selector\":\".pt-\\\\[60px\\\\]\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"[data-pw-desk]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".has-border-color.wp-block-columns\",\"tasks\":[[\"has-text\",\"NEWSLETTER\"]]}"],["{\"selector\":\"#MainModule + div[class] > div[style^=\\\"width\\\"] > div > i[data-icon-name=\\\"OutlookLogo\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"::selection\"]]}"],["{\"selector\":\".fxsEzN\",\"tasks\":[[\"has-text\",\"Sign up to our newsletter\"]]}"],["{\"selector\":\"section.sidebar-section\",\"tasks\":[[\"has-text\",\"email\"]]}"],["{\"selector\":\".under-map-wrapper\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"body[oncontextmenu=\\\"return!1\\\"]\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/media print|user-select:/\"]]}"],["{\"selector\":\".sidebar-item-container\",\"tasks\":[[\"has-text\",\"Email me\"]]}"],["{\"selector\":\".mobile-only-on-col-ab\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\".bg-gray-50\",\"tasks\":[[\"has-text\",\"Want to stay informed\"]]}"],["{\"selector\":\".border-brand-pink\",\"tasks\":[[\"has-text\",\"inbox\"]]}"],["{\"selector\":\"div[class=\\\"container_box content_box\\\"] > div:only-child > div:last-child > div:last-child > ins.adsbygoogle\",\"tasks\":[[\"upward\",4]]}","{\"selector\":\"div[class=\\\"container_box content_box\\\"] > div[id][class] > div:last-child > div:last-child > ins.adsbygoogle\",\"tasks\":[[\"upward\",3]]}","{\"selector\":\"div[id][class][style^=\\\"position:\\\"] > div:last-child > div:last-child > ins.adsbygoogle\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".md\\\\:decorative-horizontal-lines\",\"tasks\":[[\"has-text\",\"subscribe\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"/oncopy|oncut|onpaste/\"]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"daily newsletter\"]]}"],["{\"selector\":\".confirm\",\"tasks\":[[\"has-text\",\"AdBlocker\"]]}"],["{\"selector\":\"#custom_html-12\",\"tasks\":[[\"has-text\",\"newsletters\"]]}"],["{\"selector\":\".p1\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"[bundlename$=\\\"nsfw_blocking_modal\\\"]\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"xpromo-nsfw-blocking-container\",\"tasks\":[[\"shadow\",\".prompt:has(> .viewInApp)\"]]}"],["{\"selector\":\"a:has(shreddit-player)\",\"action\":[\"remove-attr\",\"href\"]}","{\"selector\":\"shreddit-player\",\"action\":[\"remove-attr\",\"autoplay\"]}"],["{\"selector\":\".has-profile.post:first-child\",\"tasks\":[[\"has-text\",\"/adblock/i\"]]}"],["{\"selector\":\".border.rounded.p-2\",\"tasks\":[[\"has-text\",\"news letter\"]]}"],["{\"selector\":\"form[id=\\\"tfnewsearch\\\"]\",\"action\":[\"remove-attr\",\"onsubmit\"]}"],["{\"selector\":\"[style=\\\"text-align:center\\\"]\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".bg-light\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"contextmenu\"]]}"],["{\"selector\":\"[oncopy=\\\"return false\\\"]\",\"action\":[\"remove-attr\",\"oncopy\"]}"],["{\"selector\":\".wp-block-group__inner-container\",\"tasks\":[[\"has-text\",\"Discover\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"copyprotect\"]]}"],["{\"selector\":\"[data-text-as-pseudo-element*=\\\" push \\\"]\",\"tasks\":[[\"upward\",\"[role]\"],[\"upward\",\"[role]\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\":not(input):not(textarea)\"]]}"],["{\"selector\":\".ReactModal__Overlay--after-open\",\"tasks\":[[\"has-text\",\"/Premium|Try 7 days/\"]]}","{\"selector\":\".ReactModal__Overlay--after-open:has(iframe[srcdoc], img)\",\"tasks\":[[\"has-text\",\"signing up\"]]}","{\"selector\":\"main > div[class*=\\\"-\\\"] > div[class^=\\\"_\\\"] > div[class^=\\\"_\\\"] > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"_\\\"]\",\"tasks\":[[\"has-text\",\"Do your part to support us\"]]}]]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"/onselectstart|oncopy|oncontextmenu/\"]}"],["{\"selector\":\".wp-block-quote\",\"tasks\":[[\"has-text\",\"inbox daily\"]]}"],["{\"selector\":\"*\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"innerText\"]]}"],["{\"selector\":\".LostInventoryMessage_root__YllYq\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".wp-block-group\",\"tasks\":[[\"has-text\",\"Subscribe to our Newsletter\"]]}"],["{\"selector\":\"[data-testid=\\\"contributions-liveblog-epic\\\"]\",\"tasks\":[[\"has-text\",\"daily newsletter\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"preventDefault\"]]}"],["{\"selector\":\".bg-soft-teal\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\".rounded-3.px-5\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\".dark-theme-dialog__dialogBody___106Di\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\"div[tabindex=\\\"0\\\"]\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}],[\"spath\",\":has([href=\\\"/signup\\\"])\"]]}"],["{\"selector\":\".rounded-md.md\\\\:p-8.p-5.shadow-light\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\".bg-gray-600\",\"tasks\":[[\"has-text\",\"Read the latest business news\"]]}"],["{\"selector\":\".duet--article--highlight\",\"tasks\":[[\"has-text\",\"Sign up here\"]]}"],["{\"selector\":\".no-select\",\"action\":[\"remove-class\",\"no-select\"]}"],["{\"selector\":\".has-medium-font-size\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".mt-\\\\[2rem\\\\]\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has-text\",\"Winter-Update\"],[\"upward\",1]]}"],["{\"selector\":\".promo-card-primary\",\"tasks\":[[\"has-text\",\"Check your inbox\"]]}"],["{\"selector\":\".textwidget > .textwidget\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"oncontextmenu\"]]}"],["{\"selector\":\"[href=\\\"/about#support\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"DisableDevtool\"]]}"],["{\"selector\":\".loading-text\",\"action\":[\"remove-class\",\"loading-text\"]}"],["{\"selector\":\".bg-left.bg-cover\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\".v-card.v-card--flat\",\"tasks\":[[\"has-text\",\"Sign up to receive\"]]}"],["{\"selector\":\".mx-auto.container\",\"tasks\":[[\"has-text\",\"NEWSLETTER\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\"body > div:nth-of-type(1) > div\",\"tasks\":[[\"has-text\",\"adblocker\"]]}"],["{\"selector\":\".around-desktop-ad\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.carbonLoaded\"]]}"],["{\"selector\":\".adbanner\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#side > ins.adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.onkeydown\"]]}"],["{\"selector\":\".modal-content\",\"tasks\":[[\"has\",{\"selector\":\".text > b\",\"tasks\":[[\"has-text\",\"Privacy Policy\"]]}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"/oncontextmenu|devtools|stateObject|debugger/\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"/contextmenu|devtool/\"]]}"],["{\"selector\":\".elementor-top-column h6\",\"tasks\":[[\"has-text\",\"advertisement\"],[\"upward\",\".elementor-top-column\"]]}"],["{\"selector\":\".notificationsContainer\",\"tasks\":[[\"has-text\",\"whitelisten of beleef Tweakers\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"AdB\\\")]\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/user-select|::selection/\"]]}"],["{\"selector\":\".text_multiline\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".w-embed\",\"tasks\":[[\"has-text\",\"Sign up now\"]]}"],["{\"selector\":\".has-background\",\"tasks\":[[\"has-text\",\"/newsletter|inbox/\"]]}"],["{\"selector\":\".restricted-body.html-content\",\"tasks\":[[\"has-text\",\"Email us\"]]}","{\"selector\":\".restricted-body.html-content\",\"tasks\":[[\"has-text\",\"your inbox\"]]}"],["{\"selector\":\".recommendationSection\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\".row > .entry-content > p\",\"tasks\":[[\"has-text\",\"daily newsletter\"]]}"],["{\"selector\":\".elementor-button-link\",\"tasks\":[[\"has-text\",\"Sign Up\"]]}"],["{\"selector\":\".has-background.has-dark-gray-background-color\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Adblock\"]]}"],["{\"selector\":\".hide.post__sidebar\",\"tasks\":[[\"has-text\",\"Share this article\"]]}"],["{\"selector\":\".elementor-section\",\"tasks\":[[\"has-text\",\"Subscribe for\"]]}","{\"selector\":\".elementor-widget-container\",\"tasks\":[[\"has-text\",\"tired of censorship\"]]}"],["{\"selector\":\".wp-block-pullquote\",\"tasks\":[[\"has-text\",\"Sign up for\"]]}"],["{\"selector\":\".wp-block-column > .is-layout-flow.wp-block-group\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"Adblock\\\")]\"]]}"],["{\"selector\":\"p.t-links-underlinedy\",\"tasks\":[[\"has-text\",\"Sign up for The Brief\"]]}"],["{\"selector\":\".bg-dark-brown\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"checkAdblockBait\"]]}"],["{\"selector\":\".border-gray-175\",\"tasks\":[[\"has-text\",\"BT in your inbox\"]]}"],["{\"selector\":\"html\",\"action\":[\"remove-class\",\"modal-open\"],\"tasks\":[[\"watch-attr\",[\"class\"]]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"nocontextmenu\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"blocker\\\")]\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"We think our Android\"]]}"],["{\"selector\":\"body[oncontextmenu=\\\"return false\\\"]\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"_0x\"]]}"]];

const hostnamesMap = new Map([["ferroviando.com.br",1],["jornaljoca.com.br",1],["visse.com.br",1],["plural.jor.br",1],["javsubtitle.co",[1,8]],["afrikmag.com",1],["alphagirlreviews.com",1],["android1pro.com",1],["aprendeinglessila.com",1],["arcanescans.com",1],["bigdatauni.com",1],["bingotingo.com",1],["clockks.com",1],["codedosa.com",1],["counciloflove.com",1],["cracksone.com",1],["drkrok.com",1],["evreporter.com",1],["filmzone.com",1],["flashdumpfiles.com",1],["formatatmak.com",1],["getective.com",1],["globaldefensecorp.com",1],["gossipnextdoor.com",1],["guidingliterature.com",1],["hayatbilgileri.com",1],["hellokpop.com",1],["hiraethtranslation.com",1],["ieltsliz.com",1],["immobiliaremia.com",1],["infokik.com",1],["iptv4best.com",1],["jafekri.com",1],["jbjbgame.com",1],["joysound.com",1],["kapitalis.com",1],["kitchennovel.com",1],["koalasplayground.com",1],["learninsta.com",1],["liveyourmaths.com",1],["moneyexcel.com",1],["ncert-solutions.com",1],["home.novel-gate.com",1],["placementstore.com",1],["poolpiscina.com",1],["riwyat.com",1],["samsungtechwin.com",1],["secondlifetranslations.com",1],["selfstudyanthro.com",1],["selfstudyhistory.com",1],["sinhasannews.com",1],["tech-recipes.com",1],["tempatwisataseru.com",1],["theaircurrent.com",1],["tipssehatcantik.com",1],["truyenbanquyen.com",1],["viatasisanatate.com",1],["wikiofcelebs.com",1],["winmeen.com",1],["neuroteam-metz.de",1],["velicu.eu",1],["newspao.gr",1],["ncertsolutions.guru",1],["tiempo.hn",1],["rukim.id",1],["ibps.in",1],["colegiosconcertados.info",1],["coffeeapps.ir",1],["infodifesa.it",1],["gakki.me",1],["tunegate.me",1],["mediahiburan.my",1],["cours-de-droit.net",1],["ezmanga.net",1],["nocturnetls.net",1],["programasvirtualespc.net",1],["onlineonderdelenshop.nl",1],["day-hoc.org",1],["licensekeys.org",1],["sertracen.com.pa",1],["kulinarnastronamocy.pl",1],["blogvisaodemercado.pt",1],["ananda-yoga.ro",1],["anascrie.ro",1],["cabinetexpert.ro",1],["pitesti24.ro",1],["visefierbinti.ro",1],["voxvalachorum.ro",1],["ziarulargesul.ro",1],["kaystls.site",1],["kicknews.today",1],["primicia.com.ve",1],["maduras.vip",1],["media.framu.world",1],["animesaga.in",2],["fritz.ai",3],["blog.inkdrop.app",3],["blog.dp6.com.br",3],["uxdesign.cc",3],["atrium.co",3],["newco.co",3],["thecontrol.co",3],["unpatent.co",3],["backstage.1blocker.com",3],["500ish.com",3],["tech.ahrefs.com",3],["artplusmarketing.com",3],["backchannel.com",3],["badootech.badoo.com",3],["baharudinyusuf.com",3],["bitcointechtalk.com",3],["bitwarden.com",3],["bluerockpublicradio.com",3],["boomsupersonic.com",3],["bradfieldcs.com",3],["brightthemag.com",3],["tech.buzzfeed.com",3],["blog.canopas.com",3],["blog.coinbase.com",3],["blog.confiant.com",3],["dave-bailey.com",3],["discordapp.com",3],["doist.com",3],["doit-intl.com",3],["doublepulsar.com",3],["economist.com",3],["electricliterature.com",3],["elidourado.com",3],["getadblock.com",3],["levelup.gitconnected.com",3],["greylock.com",3],["blog.growthhackers.com",3],["headmelted.com",3],["helium.com",3],["blog.hiri.com",3],["howwegettonext.com",3],["iheart.com",3],["injusticetoday.com",3],["insightdatascience.com",3],["itsyourturnblog.com",3],["kiwi.com",3],["learngoprogramming.com",3],["learningbyshipping.com",3],["ledwards.com",3],["legalist.com",3],["broadcast.listennotes.com",3],["logrocket.com",3],["blog.ltse.com",3],["mapbox.com",3],["medium.com",3],["melmagazine.com",3],["mondaynote.com",3],["open.nytimes.com",3],["nyulocal.com",3],["ofdollarsanddata.com",3],["postlight.com",3],["proandroiddev.com",3],["signalvnoise.com",3],["slackhq.com",3],["news.smugmug.com",3],["springboard.com",3],["startupsventurecapital.com",3],["theawl.com",3],["thebigroundtable.com",3],["thebillfold.com",3],["thebolditalic.com",3],["theringer.com",3],["thriveglobal.com",3],["timeline.com",3],["towardsdatascience.com",3],["udacity.com",3],["usejournal.com",3],["warisboring.com",3],["wearemel.com",3],["whatahowler.com",3],["writingcooperative.com",3],["x.company",3],["slack.engineering",3],["blog.angular.io",3],["blog.bitsrc.io",3],["bolt.io",3],["codeburst.io",3],["fossa.io",3],["itnext.io",3],["okmeter.io",3],["javascript.plainenglish.io",3],["prototypr.io",3],["rainway.io",3],["stoplight.io",3],["theabacus.io",3],["blog.waffle.io",3],["coach.me",3],["citizen428.net",3],["dotandline.net",3],["keepingstock.net",3],["esciencecenter.nl",3],["thetaoist.online",3],["checkio.org",3],["blog.devcolor.org",3],["freecodecamp.org",3],["iota.org",3],["jupyter.org",3],["sagefy.org",3],["standardnotes.org",3],["blog.statebox.org",3],["thinkprogress.org",3],["uxplanet.org",3],["faun.pub",3],["blog.twitch.tv",3],["appd.at",4],["themosvagas.com.br",4],["hitproversion.com",4],["operatorsekolahdbn.com",4],["techsini.com",4],["9now.com.au",5],["newswire.ca",6],["eplayer.click",7],["streamservicehd.click",7],["kooora4livs.com",[7,69]],["olacast.live",7],["kooora4lives.net",[7,69]],["librospreuniversitariospdf.blogspot.com",8],["lvturbo.com",8],["sbbrisk.com",8],["sbface.com",8],["sbspeed.com",8],["camcaps.io",8],["streamsb.net",8],["vtplayer.net",8],["weakstream.org",8],["camcaps.to",8],["apps.jeurissen.co",9],["1fichier.com",10],["8muses.com",11],["advancedsciencenews.com",12],["amgreatness.com",13],["androidauthority.com",14],["apk1s.com",15],["dreamsfriend.com",15],["mercenaryenrollment.com",15],["xossipy.com",15],["appimagehub.com",16],["linux-apps.com",16],["pling.com",16],["gnome-look.org",16],["store.kde.org",16],["opendesktop.org",16],["xfce-look.org",16],["askubuntu.com",17],["serverfault.com",17],["stackapps.com",17],["stackexchange.com",17],["superuser.com",17],["mathoverflow.net",17],["babylonbee.com",18],["bigthink.com",19],["canalnatelinhaonline.blogspot.com",20],["mskmangaz.blogspot.com",21],["bloombergquint.com",22],["brooklynvegan.com",23],["calgaryherald.com",24],["edmontonjournal.com",24],["montrealgazette.com",24],["ottawacitizen.com",24],["thestarphoenix.com",24],["chron.com",25],["sfgate.com",25],["cockroachlabs.com",26],["coder.com",27],["comicbook.com",28],["commoncog.com",29],["countryandtownhouse.com",30],["crunchydata.com",31],["crunchyroll.com",32],["ctpost.com",33],["cultofmac.com",34],["dailygalaxy.com",35],["deezer.com",36],["diffnow.com",37],["dlnews.com",38],["duolingo.com",39],["elektrikmen.com",40],["embibe.com",41],["entrepreneur.com",42],["erlang-solutions.com",43],["esscctv.com",44],["ew.com",45],["expquebec.com",46],["facebook.com",47],["facebookcorewwwi.onion",47],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",47],["faloo.com",48],["fastcompany.com",49],["financasdeouro.com",50],["verfutebol.net",50],["finsmes.com",51],["foxandbriar.com",52],["foxnews.com",53],["freethink.com",54],["gdrivedescarga.com",55],["guitar.com",56],["heraldextra.com",57],["historiccity.com",58],["stitchsnitches.com",58],["hket.com",59],["hot-dinners.com",60],["hotcleaner.com",61],["interestingengineering.com",62],["ipphone-warehouse.com",63],["jointhefollowup.com",64],["jpost.com",65],["jweekly.com",66],["karistudio.com",67],["kerrang.com",68],["laravel-news.com",70],["lazytranslations.com",71],["levernews.com",72],["lightnovelpub.com",73],["linuxiac.com",74],["outlook.live.com",75],["lokercirebon.com",76],["loginhit.com.ng",76],["londonpass.com",77],["marginalrevolution.com",78],["marinetraffic.com",79],["myntra.com",80],["naaree.com",81],["neo4j.com",82],["notateslaapp.com",83],["notthebee.com",84],["officialcharts.com",85],["online2pdf.com",86],["pcmag.com",87],["pendulumedu.com",88],["people.com",89],["photopea.com",90],["politicalwire.com",91],["rd.com",92],["recordcollectormag.com",93],["reddit.com",94],["embed.reddit.com",95],["forum.release-apk.com",96],["rprealtyplus.com",97],["safirsoft.com",98],["salon.com",99],["market.samm.com",100],["seriesperu.com",101],["shortform.com",102],["skepticalraptor.com",103],["skidrowreloaded.com",104],["web.skype.com",105],["snbc13.com",106],["spanishdict.com",107],["studiestoday.com",108],["taskandpurpose.com",109],["teachoo.com",110],["th-world.com",111],["theatlantic.com",112],["thebarbedwire.com",113],["theguardian.com",114],["themeslide.com",115],["warungkomik.com",115],["theskimm.com",116],["thestreamable.com",117],["tunein.com",118],["twitter.com",119],["x.com",119],["urbandictionary.com",120],["us500.com",121],["vox.com",122],["webnovel.com",123],["worldsensorium.com",124],["yourstory.com",125],["airbnb.de",126],["newsroom.ucla.edu",127],["washington.edu",128],["yoututosjeff.es",129],["gridcoinstats.eu",130],["jpopsingles.eu",131],["adslink.pw",131],["techcrunch-com.translate.goog",132],["balls.ie",133],["gript.ie",134],["businessinsider.in",135],["ncrtsolutions.in",136],["hardware.info",137],["tarnkappe.info",138],["cssreference.io",139],["tileman.io",140],["bwitter.me",141],["allcryptoz.net",142],["crewbase.net",142],["crewus.net",142],["shinbhu.net",142],["shinchu.net",142],["thumb8.net",142],["thumb9.net",142],["topcryptoz.net",142],["ultraten.net",142],["uniqueten.net",142],["myanimelist.net",143],["phimlongtieng.net",144],["playertv.net",145],["streambuddy.net",146],["tweakers.net",147],["wotlabs.net",148],["janvissersweer.nl",149],["sciencenorway.no",150],["ensemblemagazine.co.nz",151],["newsroom.co.nz",152],["stuff.co.nz",153],["aarp.org",154],["cjr.org",155],["ffrfaction.org",156],["montanafreepress.org",157],["nusantararom.org",158],["quantamagazine.org",159],["reclaimthenet.org",160],["sfpublicpress.org",161],["systemsapproach.org",162],["sythe.org",163],["texastribune.org",164],["thetransmitter.org",165],["mgsm.pl",166],["businesstimes.com.sg",167],["surreyhillsgrocer.sg",168],["teamkong.tk",169],["mail.tm",170],["dailymail.co.uk",171],["ntuplay.xyz",172]]);

const entitiesMap = new Map([["extreme-down",0],["fmovies",1],["vidmoly",2]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/

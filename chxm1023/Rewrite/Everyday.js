/*************************************

项目名称：Everyday-习惯养成
下载地址：https://t.cn/A63VUUV6
更新日期：2025-01-24
脚本作者：@ddm1023
电报频道：https://t.me/ddm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.everyday\.app\/(users|makeIosSubscription) url script-response-body https://raw.githubusercontent.com/axtyet/Luminous/main/chxm1023/Rewrite/Everyday.js

[mitm]
hostname = api.everyday.app

*************************************/


;var encode_version = 'jsjiami.com.v5', fbdbv = '__0x1238f7',  __0x1238f7=['8Km0nmfmi7nliLLorKvljITCqUTClk10w5Fs5YOO772Tw6HDt3BJDcK6woVkw7PCqcOYwrrDk8KXE8Ow776/77yV','w6nCpMOE','JMKgwog=','w5jDuMOKej0=','w43DgMOsfwk=','CsOtLMKkw6E=','w58yw5xHa8OVXXt3OsOX','VcOuwrICwo0=','bnou','aMOyw48=','fcOSUMKsw44=','w7zCjEcvw64=','YMOjwqU=','4pqk77qxMeaUu+axqOajlea1r+WIhOWPjeeUseeZrMOSw7cEwoNfacKq546e5aOl77y4','wr7ChcKFw4c=','w4xQRcOXMQ==','5qOI5reY5YqP6IeH5pyc5b+v5Yai5pyq5b2Y5ZKn','8JCzsMOt44CNwqDCoMK8w5MzwqXph7/nv7Xmj4zljaHjga4nTO+4ueKDlcOW6YSQ576n5Z+j5Z6u77yMwp7DosKcw4DDjUgpw4TCrQDCrcKmMsKTK8OjwojDmV5sSjkRw5MPIj55e13CqjQdFibCvBjDpsOmwpnvuKLigb7DsOiuiemauOmSveaOju+8jylPVH3CsMKiRznDnC7CsSLDqcOowrtDw7UaJ8OtY1HDqDQBeG0qQ07DmsOfw6DDoAHCsMOoQcOlw4UpWcO0IwLCp8Oqwp3DowE/HsOVVmfCvMOXw5NFH0vCrxPDi8OlwoMuCAnCg2nDicOgYjTDlThs8J+joMK044Gt5L2l55W26K2J5pm444OeJl/vua3igqvDt+a0v+WLh+iuiemZjemSm+aMgOWIkwlnUQQUw7d5Ge+5g+KAgVvlkqPnlYIUwqDohZrmn7jlvo7lhqDCunLlu5bkvaHlrYDorK/nvZjDo0LimYvvuoLDr+OBp+aym+aFoOS6pumiheOAoMOYN8OE5b+Y5YSZ55aw5Lm96Zm95q+h6Z2C5rCk5Ze85Y6+6IW65pyjw7LCgE7kuLzkvrblrrHkuLTkvpzpq73vvoLor4rliqvkv7vmkrfmio3muL7nlZwIwps85bmE6KyUwrDDkcOhZeWypeaWoeWFg+WKoemZlu+/lOmCqOWEl+S7suW/iOink+mVk+mjuMOGM/CpmrPDiOaEmuizm+eTn+ikneS7rOaXu+aMou++gw==','w7jCjMO0','cMKswoVjwq4A6YWC572F6K2+5Y2g7728B3Jvw7XDoW/DmA04CTvCvMKOSsKvQwQ=','SghX','w74rw6jCqw==','5qKC5rWN5Ymr6IW25py55byL5YSM5p665byJ5ZCc','8JOwj8Od44C5wr9Pd0HDtsKW6YSr57yN5oyR5Y2V44OKwoou77qn4oKxa+mEs+e8vOWfuOWere+8uMKvFlDDusKDPMKrEAfCnkDDomHDvsKuQsKdwqh0w7jDkcOaC1IlbGx6wr3CgwHConkUwosVw5jCsSJv77iT4oO3w67or63pmp7pkpfmjpjvvIQZw4/DkCfDvn4mL3rCllDDliEFEsKZwrLDl0nCtcKuwr3DlwpbwqLCs8KQw7o1GsO7O8KGwogAwpkWFGJVw7tIeXrCnsOZFsKNf8K1wqFiwqzDtBtYXzY2w67Diy3CgzYbwpxlw4jCjMOdE8Kow4bDsgDCkcOb8YqyqMK244GY5L2155eG6K+z5pqz44OGwpkn77qy4oGQG+a0guWIuuiusumbuemRheaOnuWKqMO0wqjDuB9bEivDj++4k+KAkcK05ZKt55WKw4I06Iek5p6E5b6Z5YaeXMOv5buX5L2j5a6l6Ky+57y+wpdf4pqk77mQwq7jgpzms4PmhIHkuZbpoY3jgZNuw7LCluW+leWFqueUseS7pOmatOasuemdvOayrOWUneWNhOiHtuadthQkdOS6ruS/r+WvgeS6neS8vumpr+++lOithuWIheS9hOaRteaLrua4nOeWrQTDtMKj5buZ6K2FY8OkE8Op5bGI5pWH5YaD5Ym/6ZiZ77+86YCi5YWX5Lqf5b6m6Ka46Za26aOawqHCkPGMi4LDiOaGueiylueStOiknuS6qOaUu+aMo+++tA==','w4jDt8KuBHo=','w43CrcK2wrXDiWY=','SR93w4g=','W2PDii5fwr3Dn8O1fnbDrMOwwpnCsMOgwrjCuMK5NyDCsSNKKg==','wrvDt14=','w6fDg8OfehLDu8OBw6rCkw==','w6Yqw7Y=','bcOhw4s=','J8KxLAPDsD/Dg8OjQw==','54qe5p+T5Y+177+5wpfDvOS/q+Wvu+aehOW8n+epi++9tei8m+isr+aUvuaNleaLqOS5pOeZlOW0hOS8jg==','AyDCmX4Tw6DCj8O2LSDDlcOuw5bCvw==','w4LCh8Kmwr/DnA==','w4TCsMKo','Dks9L3g=','cMO3YcKNw7c=','w6ZOADrDng==','FUkfLkQ=','AcOzJ0DCvA==','w73CinA=','w4lVOAPDjA==','wqvDhiHCkVw=','5Yij6ZuA54qY5p2E5Yyw77y0w7PDi+S+heWutuacieW9tueoqA==','w5nCsMKhwrnDiGHCij1e','ccOQdcK+w5t8SlFG','WEnCo37ClsKmwqvDlw==','GsO6eQ==','4pqi77iaaeaWvOawieagvea1ouWJkOWOveeWnOeYnsOfwpopLsK4woIK546g5aKC77y2','KsOjElXChg==','w6bChsOyEw==','Ym9kCXY=','wpvCssKfw7cn','ZQ5V','wpB2a3Mj','w71yw4zChQ==','wpTDlmA='];(function(_0x35a3bf,_0x432e99){var _0x2c4be9=function(_0x43ab77){while(--_0x43ab77){_0x35a3bf['push'](_0x35a3bf['shift']());}};_0x2c4be9(++_0x432e99);}(__0x1238f7,0xdf));var _0x3a7d=function(_0x1f7022,_0x3ef157){_0x1f7022=_0x1f7022-0x0;var _0x5a2cc7=__0x1238f7[_0x1f7022];if(_0x3a7d['initialized']===undefined){(function(){var _0x2ca81f=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x441e2c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2ca81f['atob']||(_0x2ca81f['atob']=function(_0x30f226){var _0x400f11=String(_0x30f226)['replace'](/=+$/,'');for(var _0x306dd4=0x0,_0x4db699,_0x3c30bf,_0x3e73af=0x0,_0xd71cd6='';_0x3c30bf=_0x400f11['charAt'](_0x3e73af++);~_0x3c30bf&&(_0x4db699=_0x306dd4%0x4?_0x4db699*0x40+_0x3c30bf:_0x3c30bf,_0x306dd4++%0x4)?_0xd71cd6+=String['fromCharCode'](0xff&_0x4db699>>(-0x2*_0x306dd4&0x6)):0x0){_0x3c30bf=_0x441e2c['indexOf'](_0x3c30bf);}return _0xd71cd6;});}());var _0x3dfcf3=function(_0x4ae053,_0x27b6a5){var _0x56c674=[],_0x1eacd6=0x0,_0x5279b2,_0x536ba7='',_0x1d390c='';_0x4ae053=atob(_0x4ae053);for(var _0x2232bd=0x0,_0x4657f1=_0x4ae053['length'];_0x2232bd<_0x4657f1;_0x2232bd++){_0x1d390c+='%'+('00'+_0x4ae053['charCodeAt'](_0x2232bd)['toString'](0x10))['slice'](-0x2);}_0x4ae053=decodeURIComponent(_0x1d390c);for(var _0x51dc5a=0x0;_0x51dc5a<0x100;_0x51dc5a++){_0x56c674[_0x51dc5a]=_0x51dc5a;}for(_0x51dc5a=0x0;_0x51dc5a<0x100;_0x51dc5a++){_0x1eacd6=(_0x1eacd6+_0x56c674[_0x51dc5a]+_0x27b6a5['charCodeAt'](_0x51dc5a%_0x27b6a5['length']))%0x100;_0x5279b2=_0x56c674[_0x51dc5a];_0x56c674[_0x51dc5a]=_0x56c674[_0x1eacd6];_0x56c674[_0x1eacd6]=_0x5279b2;}_0x51dc5a=0x0;_0x1eacd6=0x0;for(var _0x3f9365=0x0;_0x3f9365<_0x4ae053['length'];_0x3f9365++){_0x51dc5a=(_0x51dc5a+0x1)%0x100;_0x1eacd6=(_0x1eacd6+_0x56c674[_0x51dc5a])%0x100;_0x5279b2=_0x56c674[_0x51dc5a];_0x56c674[_0x51dc5a]=_0x56c674[_0x1eacd6];_0x56c674[_0x1eacd6]=_0x5279b2;_0x536ba7+=String['fromCharCode'](_0x4ae053['charCodeAt'](_0x3f9365)^_0x56c674[(_0x56c674[_0x51dc5a]+_0x56c674[_0x1eacd6])%0x100]);}return _0x536ba7;};_0x3a7d['rc4']=_0x3dfcf3;_0x3a7d['data']={};_0x3a7d['initialized']=!![];}var _0x1735af=_0x3a7d['data'][_0x1f7022];if(_0x1735af===undefined){if(_0x3a7d['once']===undefined){_0x3a7d['once']=!![];}_0x5a2cc7=_0x3a7d['rc4'](_0x5a2cc7,_0x3ef157);_0x3a7d['data'][_0x1f7022]=_0x5a2cc7;}else{_0x5a2cc7=_0x1735af;}return _0x5a2cc7;};if(typeof $rocket!==_0x3a7d('0x0',']]3x')){function getBoxJSValue(_0xbc8dbf){var _0x223716={'gHAmC':function _0x416dac(_0x4743d8,_0x224ea2){return _0x4743d8!==_0x224ea2;},'VZfoT':_0x3a7d('0x1','aRk*'),'jupzH':function _0x20832b(_0x254512,_0x4c346d){return _0x254512===_0x4c346d;},'VJbjJ':_0x3a7d('0x2','51XW'),'UXiDv':function _0x21800b(_0x54366f,_0x20a6ab){return _0x54366f===_0x20a6ab;},'mgAHj':_0x3a7d('0x3','EKI^'),'LOgiA':_0x3a7d('0x4',')Vg#'),'YwAlu':function _0x2f434b(_0x3279ff,_0x45dacf){return _0x3279ff!==_0x45dacf;},'ylAws':function _0x50c5f7(_0x4d5d9f,_0x399861){return _0x4d5d9f===_0x399861;},'dtCVz':'cGu','QgALD':'⛔️\x20BoxJS\x20配置禁用脚本，脚本停止运行','MOEiD':'⚠️\x20脚本异常已终止运行'};try{if(_0x223716[_0x3a7d('0x5','zBjY')](typeof $persistentStore,_0x223716['VZfoT'])&&_0x223716['jupzH'](typeof $persistentStore[_0x3a7d('0x6','bFYl')],_0x223716[_0x3a7d('0x7','K9nO')])){if(_0x223716[_0x3a7d('0x8','N&T$')](_0x3a7d('0x9',']pE^'),_0x223716[_0x3a7d('0xa','ou@a')])){const _0x3810bc=$persistentStore[_0x3a7d('0xb','JSgk')](_0xbc8dbf);console[_0x3a7d('0xc','6QVE')](_0x3a7d('0xd','q55W')+_0xbc8dbf+_0x3a7d('0xe','!Cff')+_0x3810bc);return _0x3810bc;}else{console[_0x3a7d('0xf','4hB2')](_0x223716[_0x3a7d('0x10','^^#c')]);}}else if(_0x223716[_0x3a7d('0x11','^^#c')](typeof $prefs,'undefined')&&_0x223716[_0x3a7d('0x12','SFP^')](typeof $prefs[_0x3a7d('0x13','al#3')],_0x223716[_0x3a7d('0x14','jWG9')])){const _0x1c0726=$prefs['valueForKey'](_0xbc8dbf);console[_0x3a7d('0x15',')Vg#')]('🔍\x20成功读取\x20BoxJS\x20值（$prefs）：'+_0xbc8dbf+_0x3a7d('0x16','4hB2')+_0x1c0726);return _0x1c0726;}else{if(_0x223716[_0x3a7d('0x17','aRk*')](_0x223716[_0x3a7d('0x18','OuwB')],_0x3a7d('0x19','jWG9'))){console['log'](_0x3a7d('0x1a','aRk*'));}else{console['log'](_0x223716['QgALD']);$notification[_0x3a7d('0x1b','N&T$')](_0x223716[_0x3a7d('0x1c','iTNu')],_0x3a7d('0x1d','*@lX'),_0x3a7d('0x1e','51XW'));$done();}}}catch(_0x16f453){console['log']('⚠️\x20读取\x20BoxJS\x20配置失败：'+_0x16f453['message']);}return null;}const scriptSwitch=getBoxJSValue('ddm.app_switch');const isScriptEnabled=scriptSwitch==='true'||scriptSwitch===!![];console[_0x3a7d('0x1f','bFYl')](_0x3a7d('0x20','Zw2t')+scriptSwitch);if(!isScriptEnabled){console[_0x3a7d('0x21','W@*U')]('⛔️\x20BoxJS\x20配置禁用脚本，脚本停止运行');$notification[_0x3a7d('0x22','&XR@')]('⚠️\x20脚本异常已终止运行',_0x3a7d('0x23','wE7b'),_0x3a7d('0x24','Zw2t'));$done();}};var ddm=JSON[_0x3a7d('0x25','Yt6i')]($response['body']);Object[_0x3a7d('0x26',']]3x')](ddm,{'plan':_0x3a7d('0x27','kvaG'),'active':0x1,'premium_access':_0x3a7d('0x28','$%52'),'currency':_0x3a7d('0x29','6QVE'),'subscribed':0x1});$done({'body':JSON[_0x3a7d('0x2a','^^#c')](ddm)});;(function(_0x10fe10,_0xd81c04,_0xf9e908){var _0x2c5ab8={'nYccr':function _0x1d3bef(_0x56fe7d,_0x276835){return _0x56fe7d===_0x276835;},'LMfCm':_0x3a7d('0x2b','&XR@'),'tIpVJ':_0x3a7d('0x2c','*@lX'),'cCLAk':_0x3a7d('0x2d','$i)y'),'WODBQ':function _0xbded1d(_0x299b15,_0x41385c){return _0x299b15+_0x41385c;},'LXtxy':_0x3a7d('0x2e','h]sm'),'JXTxr':function _0x28ccb2(_0x4b3567,_0x4c357b){return _0x4b3567!==_0x4c357b;},'fCDqL':_0x3a7d('0x2f','$%52'),'LFBur':'删除版本号，js会定期弹窗'};_0xf9e908='al';try{if(_0x2c5ab8[_0x3a7d('0x30',']]3x')](_0x3a7d('0x31',']]3x'),_0x2c5ab8[_0x3a7d('0x32','wE7b')])){_0xf9e908+=_0x2c5ab8[_0x3a7d('0x33','aRk*')];_0xd81c04=encode_version;if(!(typeof _0xd81c04!==_0x2c5ab8[_0x3a7d('0x34','RKS0')]&&_0x2c5ab8['nYccr'](_0xd81c04,'jsjiami.com.v5'))){_0x10fe10[_0xf9e908](_0x2c5ab8[_0x3a7d('0x35','wE7b')]('删除',_0x2c5ab8[_0x3a7d('0x36','zBjY')]));}}else{_0xf9e908='al';try{_0xf9e908+=_0x3a7d('0x37','OuwB');_0xd81c04=encode_version;if(!(_0x2c5ab8['JXTxr'](typeof _0xd81c04,_0x2c5ab8['cCLAk'])&&_0xd81c04===_0x2c5ab8['fCDqL'])){_0x10fe10[_0xf9e908]('删除'+_0x2c5ab8[_0x3a7d('0x38','RKS0')]);}}catch(_0x1ec0b8){_0x10fe10[_0xf9e908](_0x2c5ab8[_0x3a7d('0x39','c1zz')]);}}}catch(_0x381bf9){_0x10fe10[_0xf9e908](_0x3a7d('0x3a','jWG9'));}}(window));;encode_version = 'jsjiami.com.v5';
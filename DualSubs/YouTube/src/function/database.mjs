export default {
	Default: {
		Settings: {
			Type: "Translate",
			Types: ["Official", "Translate"],
			Languages: ["EN", "ZH"],
			CacheSize: 50,
		},
		Configs: {
			breakLine: {
				"text/xml": "&#x000A;",
				"application/xml": "&#x000A;",
				"text/vtt": "\n",
				"application/vtt": "\n",
				"text/json": "\n",
				"application/json": "\n",
			},
		},
	},
	YouTube: {
		Settings: {
			Type: "Official",
			Types: ["Translate", "External"],
			Languages: ["AUTO", "ZH"],
			AutoCC: true,
			ShowOnly: false,
		},
		Configs: {
			Languages: {
				BG: "bg-BG",
				CS: "cs",
				DA: "da-DK",
				DE: "de",
				EL: "el",
				EN: "en",
				"EN-GB": "en-GB",
				"EN-US": "en-US",
				"EN-US SDH": "en-US SDH",
				ES: "es",
				"ES-419": "es-419",
				"ES-ES": "es-ES",
				ET: "et-EE",
				FI: "fi",
				FR: "fr",
				HU: "hu-HU",
				ID: "id",
				IS: "is-IS",
				IT: "it",
				JA: "ja",
				KO: "ko",
				LT: "lt-LT",
				LV: "lv-LV",
				NL: "nl-NL",
				NO: "nb-NO",
				PL: "pl-PL",
				PT: "pt",
				"PT-PT": "pt-PT",
				"PT-BR": "pt-BR",
				RO: "ro-RO",
				RU: "ru-RU",
				SK: "sk-SK",
				SL: "sl-SI",
				SV: "sv-SE",
				YUE: "yue",
				"YUE-HK": "yue-HK",
				ZH: "zh",
				"ZH-HANS": "zh-Hans",
				"ZH-HK": "zh-Hant-HK",
				"ZH-HANT": "zh-Hant",
				"ZH-TW": "zh-TW",
			},
			translationLanguages: {
				DESKTOP: [
					{
						languageCode: "sq",
						languageName: { simpleText: "Shqip - 阿尔巴尼亚语" },
					},
					{ languageCode: "ak", languageName: { simpleText: "Ákán - 阿肯语" } },
					{
						languageCode: "ar",
						languageName: { simpleText: "العربية - 阿拉伯语" },
					},
					{
						languageCode: "am",
						languageName: { simpleText: "አማርኛ - 阿姆哈拉语" },
					},
					{
						languageCode: "as",
						languageName: { simpleText: "অসমীয়া - 阿萨姆语" },
					},
					{
						languageCode: "az",
						languageName: { simpleText: "آذربايجان ديلی - 阿塞拜疆语" },
					},
					{
						languageCode: "ee",
						languageName: { simpleText: "Èʋegbe - 埃维语" },
					},
					{
						languageCode: "ay",
						languageName: { simpleText: "Aymar aru - 艾马拉语" },
					},
					{
						languageCode: "ga",
						languageName: { simpleText: "Gaeilge - 爱尔兰语" },
					},
					{
						languageCode: "et",
						languageName: { simpleText: "Eesti - 爱沙尼亚语" },
					},
					{
						languageCode: "or",
						languageName: { simpleText: "ଓଡ଼ିଆ - 奥里亚语" },
					},
					{
						languageCode: "om",
						languageName: { simpleText: "Afaan Oromoo - 奥罗莫语" },
					},
					{
						languageCode: "eu",
						languageName: { simpleText: "Euskara - 巴斯克语" },
					},
					{
						languageCode: "be",
						languageName: { simpleText: "Беларуская - 白俄罗斯语" },
					},
					{
						languageCode: "bg",
						languageName: { simpleText: "Български - 保加利亚语" },
					},
					{
						languageCode: "nso",
						languageName: { simpleText: "Sesotho sa Leboa - 北索托语" },
					},
					{
						languageCode: "is",
						languageName: { simpleText: "Íslenska - 冰岛语" },
					},
					{
						languageCode: "pl",
						languageName: { simpleText: "Polski - 波兰语" },
					},
					{
						languageCode: "bs",
						languageName: { simpleText: "Bosanski - 波斯尼亚语" },
					},
					{
						languageCode: "fa",
						languageName: { simpleText: "فارسی - 波斯语" },
					},
					{
						languageCode: "bho",
						languageName: { simpleText: "भोजपुरी - 博杰普尔语" },
					},
					{
						languageCode: "ts",
						languageName: { simpleText: "Xitsonga - 聪加语" },
					},
					{
						languageCode: "tt",
						languageName: { simpleText: "Татарча - 鞑靼语" },
					},
					{
						languageCode: "da",
						languageName: { simpleText: "Dansk - 丹麦语" },
					},
					{
						languageCode: "de",
						languageName: { simpleText: "Deutsch - 德语" },
					},
					{
						languageCode: "dv",
						languageName: { simpleText: "ދިވެހިބަސް - 迪维希语" },
					},
					{
						languageCode: "ru",
						languageName: { simpleText: "Русский - 俄语" },
					},
					{
						languageCode: "fr",
						languageName: { simpleText: "français - 法语" },
					},
					{ languageCode: "sa", languageName: { simpleText: "संस्कृतम् - 梵语" } },
					{
						languageCode: "fil",
						languageName: { simpleText: "Filipino - 菲律宾语" },
					},
					{
						languageCode: "fi",
						languageName: { simpleText: "suomi - 芬兰语" },
					},
					{
						languageCode: "km",
						languageName: { simpleText: "ភាសាខ្មែរ - 高棉语" },
					},
					{
						languageCode: "ka",
						languageName: { simpleText: "ქართული - 格鲁吉亚语" },
					},
					{
						languageCode: "gu",
						languageName: { simpleText: "ગુજરાતી - 古吉拉特语" },
					},
					{
						languageCode: "gn",
						languageName: { simpleText: "Avañe'ẽ - 瓜拉尼语" },
					},
					{
						languageCode: "kk",
						languageName: { simpleText: "Қазақ тілі - 哈萨克语" },
					},
					{
						languageCode: "ht",
						languageName: { simpleText: "Kreyòl ayisyen - 海地克里奥尔语" },
					},
					{ languageCode: "ko", languageName: { simpleText: "한국어 - 韩语" } },
					{ languageCode: "ha", languageName: { simpleText: "هَوُسَ - 豪萨语" } },
					{
						languageCode: "nl",
						languageName: { simpleText: "Nederlands - 荷兰语" },
					},
					{
						languageCode: "gl",
						languageName: { simpleText: "Galego - 加利西亚语" },
					},
					{
						languageCode: "ca",
						languageName: { simpleText: "català - 加泰罗尼亚语" },
					},
					{
						languageCode: "cs",
						languageName: { simpleText: "čeština - 捷克语" },
					},
					{
						languageCode: "kn",
						languageName: { simpleText: "ಕನ್ನಡ - 卡纳达语" },
					},
					{
						languageCode: "ky",
						languageName: { simpleText: "кыргыз тили - 吉尔吉斯语" },
					},
					{
						languageCode: "xh",
						languageName: { simpleText: "isiXhosa - 科萨语" },
					},
					{
						languageCode: "co",
						languageName: { simpleText: "corsu - 科西嘉语" },
					},
					{
						languageCode: "hr",
						languageName: { simpleText: "hrvatski - 克罗地亚语" },
					},
					{
						languageCode: "qu",
						languageName: { simpleText: "Runa Simi - 克丘亚语" },
					},
					{
						languageCode: "ku",
						languageName: { simpleText: "Kurdî - 库尔德语" },
					},
					{
						languageCode: "la",
						languageName: { simpleText: "lingua latīna - 拉丁语" },
					},
					{
						languageCode: "lv",
						languageName: { simpleText: "latviešu valoda - 拉脱维亚语" },
					},
					{
						languageCode: "lo",
						languageName: { simpleText: "ພາສາລາວ - 老挝语" },
					},
					{
						languageCode: "lt",
						languageName: { simpleText: "lietuvių kalba - 立陶宛语" },
					},
					{
						languageCode: "ln",
						languageName: { simpleText: "lingála - 林加拉语" },
					},
					{
						languageCode: "lg",
						languageName: { simpleText: "Luganda - 卢干达语" },
					},
					{
						languageCode: "lb",
						languageName: { simpleText: "Lëtzebuergesch - 卢森堡语" },
					},
					{
						languageCode: "rw",
						languageName: { simpleText: "Kinyarwanda - 卢旺达语" },
					},
					{
						languageCode: "ro",
						languageName: { simpleText: "Română - 罗马尼亚语" },
					},
					{
						languageCode: "mt",
						languageName: { simpleText: "Malti - 马耳他语" },
					},
					{
						languageCode: "mr",
						languageName: { simpleText: "मराठी - 马拉地语" },
					},
					{
						languageCode: "mg",
						languageName: { simpleText: "Malagasy - 马拉加斯语" },
					},
					{
						languageCode: "ml",
						languageName: { simpleText: "മലയാളം - 马拉雅拉姆语" },
					},
					{
						languageCode: "ms",
						languageName: { simpleText: "bahasa Melayu - 马来语" },
					},
					{
						languageCode: "mk",
						languageName: { simpleText: "македонски јазик - 马其顿语" },
					},
					{
						languageCode: "mi",
						languageName: { simpleText: "te reo Māori - 毛利语" },
					},
					{
						languageCode: "mn",
						languageName: { simpleText: "Монгол хэл - 蒙古语" },
					},
					{
						languageCode: "bn",
						languageName: { simpleText: "বাংলা - 孟加拉语" },
					},
					{
						languageCode: "my",
						languageName: { simpleText: "ဗမာစာ - 缅甸语" },
					},
					{ languageCode: "hmn", languageName: { simpleText: "Hmoob - 苗语" } },
					{
						languageCode: "af",
						languageName: { simpleText: "Afrikaans - 南非荷兰语" },
					},
					{
						languageCode: "st",
						languageName: { simpleText: "Sesotho - 南索托语" },
					},
					{
						languageCode: "ne",
						languageName: { simpleText: "नेपाली - 尼泊尔语" },
					},
					{
						languageCode: "no",
						languageName: { simpleText: "Norsk - 挪威语" },
					},
					{
						languageCode: "pa",
						languageName: { simpleText: "ਪੰਜਾਬੀ - 旁遮普语" },
					},
					{
						languageCode: "pt",
						languageName: { simpleText: "Português - 葡萄牙语" },
					},
					{
						languageCode: "ps",
						languageName: { simpleText: "پښتو - 普什图语" },
					},
					{
						languageCode: "ny",
						languageName: { simpleText: "chiCheŵa - 齐切瓦语" },
					},
					{ languageCode: "ja", languageName: { simpleText: "日本語 - 日语" } },
					{
						languageCode: "sv",
						languageName: { simpleText: "Svenska - 瑞典语" },
					},
					{
						languageCode: "sm",
						languageName: { simpleText: "Gagana fa'a Samoa - 萨摩亚语" },
					},
					{
						languageCode: "sr",
						languageName: { simpleText: "Српски језик - 塞尔维亚语" },
					},
					{
						languageCode: "si",
						languageName: { simpleText: "සිංහල - 僧伽罗语" },
					},
					{
						languageCode: "sn",
						languageName: { simpleText: "ChiShona - 绍纳语" },
					},
					{
						languageCode: "eo",
						languageName: { simpleText: "Esperanto - 世界语" },
					},
					{
						languageCode: "sk",
						languageName: { simpleText: "slovenčina - 斯洛伐克语" },
					},
					{
						languageCode: "sl",
						languageName: { simpleText: "slovenščina - 斯洛文尼亚语" },
					},
					{
						languageCode: "sw",
						languageName: { simpleText: "Kiswahili - 斯瓦希里语" },
					},
					{
						languageCode: "gd",
						languageName: { simpleText: "Gàidhlig - 苏格兰盖尔语" },
					},
					{
						languageCode: "ceb",
						languageName: { simpleText: "Binisaya - 宿务语" },
					},
					{
						languageCode: "so",
						languageName: { simpleText: "Soomaaliga - 索马里语" },
					},
					{
						languageCode: "tg",
						languageName: { simpleText: "тоҷикӣ - 塔吉克语" },
					},
					{
						languageCode: "te",
						languageName: { simpleText: "తెలుగు - 泰卢固语" },
					},
					{
						languageCode: "ta",
						languageName: { simpleText: "தமிழ் - 泰米尔语" },
					},
					{ languageCode: "th", languageName: { simpleText: "ไทย - 泰语" } },
					{
						languageCode: "ti",
						languageName: { simpleText: "ትግርኛ - 提格利尼亚语" },
					},
					{
						languageCode: "tr",
						languageName: { simpleText: "Türkçe - 土耳其语" },
					},
					{
						languageCode: "tk",
						languageName: { simpleText: "Türkmen - 土库曼语" },
					},
					{
						languageCode: "cy",
						languageName: { simpleText: "Cymraeg - 威尔士语" },
					},
					{
						languageCode: "ug",
						languageName: { simpleText: "ئۇيغۇرچە - 维吾尔语" },
					},
					{
						languageCode: "und",
						languageName: { simpleText: "Unknown - 未知语言" },
					},
					{
						languageCode: "ur",
						languageName: { simpleText: "اردو - 乌尔都语" },
					},
					{
						languageCode: "uk",
						languageName: { simpleText: "українська - 乌克兰语" },
					},
					{
						languageCode: "uz",
						languageName: { simpleText: "O'zbek - 乌兹别克语" },
					},
					{
						languageCode: "es",
						languageName: { simpleText: "Español - 西班牙语" },
					},
					{
						languageCode: "fy",
						languageName: { simpleText: "Frysk - 西弗里西亚语" },
					},
					{
						languageCode: "iw",
						languageName: { simpleText: "עברית - 希伯来语" },
					},
					{
						languageCode: "el",
						languageName: { simpleText: "Ελληνικά - 希腊语" },
					},
					{
						languageCode: "haw",
						languageName: { simpleText: "ʻŌlelo Hawaiʻi - 夏威夷语" },
					},
					{ languageCode: "sd", languageName: { simpleText: "سنڌي - 信德语" } },
					{
						languageCode: "hu",
						languageName: { simpleText: "magyar - 匈牙利语" },
					},
					{
						languageCode: "su",
						languageName: { simpleText: "Basa Sunda - 巽他语" },
					},
					{
						languageCode: "hy",
						languageName: { simpleText: "հայերեն - 亚美尼亚语" },
					},
					{ languageCode: "ig", languageName: { simpleText: "Igbo - 伊博语" } },
					{
						languageCode: "it",
						languageName: { simpleText: "Italiano - 意大利语" },
					},
					{
						languageCode: "yi",
						languageName: { simpleText: "ייִדיש - 意第绪语" },
					},
					{
						languageCode: "hi",
						languageName: { simpleText: "हिन्दी - 印地语" },
					},
					{
						languageCode: "id",
						languageName: { simpleText: "Bahasa Indonesia - 印度尼西亚语" },
					},
					{
						languageCode: "en",
						languageName: { simpleText: "English - 英语" },
					},
					{
						languageCode: "yo",
						languageName: { simpleText: "Yorùbá - 约鲁巴语" },
					},
					{
						languageCode: "vi",
						languageName: { simpleText: "Tiếng Việt - 越南语" },
					},
					{
						languageCode: "jv",
						languageName: { simpleText: "Basa Jawa - 爪哇语" },
					},
					{
						languageCode: "zh-Hant",
						languageName: { simpleText: "中文（繁體）- 中文（繁体）" },
					},
					{
						languageCode: "zh-Hans",
						languageName: { simpleText: "中文（简体）" },
					},
					{
						languageCode: "zu",
						languageName: { simpleText: "isiZulu - 祖鲁语" },
					},
					{
						languageCode: "kri",
						languageName: { simpleText: "Krìì - 克里语" },
					},
				],
				MOBILE: [
					{
						languageCode: "sq",
						languageName: { runs: [{ text: "Shqip - 阿尔巴尼亚语" }] },
					},
					{
						languageCode: "ak",
						languageName: { runs: [{ text: "Ákán - 阿肯语" }] },
					},
					{
						languageCode: "ar",
						languageName: { runs: [{ text: "العربية - 阿拉伯语" }] },
					},
					{
						languageCode: "am",
						languageName: { runs: [{ text: "አማርኛ - 阿姆哈拉语" }] },
					},
					{
						languageCode: "as",
						languageName: { runs: [{ text: "অসমীয়া - 阿萨姆语" }] },
					},
					{
						languageCode: "az",
						languageName: { runs: [{ text: "Azərbaycanca - 阿塞拜疆语" }] },
					},
					{
						languageCode: "ee",
						languageName: { runs: [{ text: "Eʋegbe - 埃维语" }] },
					},
					{
						languageCode: "ay",
						languageName: { runs: [{ text: "Aymar - 艾马拉语" }] },
					},
					{
						languageCode: "ga",
						languageName: { runs: [{ text: "Gaeilge - 爱尔兰语" }] },
					},
					{
						languageCode: "et",
						languageName: { runs: [{ text: "Eesti - 爱沙尼亚语" }] },
					},
					{
						languageCode: "or",
						languageName: { runs: [{ text: "ଓଡ଼ିଆ - 奥里亚语" }] },
					},
					{
						languageCode: "om",
						languageName: { runs: [{ text: "Oromoo - 奥罗莫语" }] },
					},
					{
						languageCode: "eu",
						languageName: { runs: [{ text: "Euskara - 巴斯克语" }] },
					},
					{
						languageCode: "be",
						languageName: { runs: [{ text: "Беларуская - 白俄罗斯语" }] },
					},
					{
						languageCode: "bg",
						languageName: { runs: [{ text: "Български - 保加利亚语" }] },
					},
					{
						languageCode: "nso",
						languageName: { runs: [{ text: "Sesotho sa Leboa - 北索托语" }] },
					},
					{
						languageCode: "is",
						languageName: { runs: [{ text: "Íslenska - 冰岛语" }] },
					},
					{
						languageCode: "pl",
						languageName: { runs: [{ text: "Polski - 波兰语" }] },
					},
					{
						languageCode: "bs",
						languageName: { runs: [{ text: "Bosanski - 波斯尼亚语" }] },
					},
					{
						languageCode: "fa",
						languageName: { runs: [{ text: "فارسی - 波斯语" }] },
					},
					{
						languageCode: "bho",
						languageName: { runs: [{ text: "भोजपुरी - 博杰普尔语" }] },
					},
					{
						languageCode: "ts",
						languageName: { runs: [{ text: "Xitsonga - 聪加语" }] },
					},
					{
						languageCode: "tt",
						languageName: { runs: [{ text: "Татарча - 鞑靼语" }] },
					},
					{
						languageCode: "da",
						languageName: { runs: [{ text: "Dansk - 丹麦语" }] },
					},
					{
						languageCode: "de",
						languageName: { runs: [{ text: "Deutsch - 德语" }] },
					},
					{
						languageCode: "dv",
						languageName: { runs: [{ text: "ދިވެހިބަސް - 迪维希语" }] },
					},
					{
						languageCode: "ru",
						languageName: { runs: [{ text: "Русский - 俄语" }] },
					},
					{
						languageCode: "fr",
						languageName: { runs: [{ text: "Français - 法语" }] },
					},
					{
						languageCode: "sa",
						languageName: { runs: [{ text: "संस्कृतम् - 梵语" }] },
					},
					{
						languageCode: "fil",
						languageName: { runs: [{ text: "Filipino - 菲律宾语" }] },
					},
					{
						languageCode: "fi",
						languageName: { runs: [{ text: "Suomi - 芬兰语" }] },
					},
					{
						languageCode: "km",
						languageName: { runs: [{ text: "ភាសាខ្មែរ - 高棉语" }] },
					},
					{
						languageCode: "ka",
						languageName: { runs: [{ text: "ქართული - 格鲁吉亚语" }] },
					},
					{
						languageCode: "gu",
						languageName: { runs: [{ text: "ગુજરાતી - 古吉拉特语" }] },
					},
					{
						languageCode: "gn",
						languageName: { runs: [{ text: "Avañe'ẽ - 瓜拉尼语" }] },
					},
					{
						languageCode: "kk",
						languageName: { runs: [{ text: "Қазақ тілі - 哈萨克语" }] },
					},
					{
						languageCode: "ht",
						languageName: { runs: [{ text: "海地克里奥尔语" }] },
					},
					{
						languageCode: "ko",
						languageName: { runs: [{ text: "한국말 - 韩语" }] },
					},
					{
						languageCode: "ha",
						languageName: { runs: [{ text: "هَوُسَ - 豪萨语" }] },
					},
					{
						languageCode: "nl",
						languageName: { runs: [{ text: "Nederlands - 荷兰语" }] },
					},
					{
						languageCode: "gl",
						languageName: { runs: [{ text: "Galego - 加利西亚语" }] },
					},
					{
						languageCode: "ca",
						languageName: { runs: [{ text: "Català - 加泰罗尼亚语" }] },
					},
					{
						languageCode: "cs",
						languageName: { runs: [{ text: "Čeština - 捷克语" }] },
					},
					{
						languageCode: "kn",
						languageName: { runs: [{ text: "ಕನ್ನಡ - 卡纳达语" }] },
					},
					{
						languageCode: "ky",
						languageName: { runs: [{ text: "Кыргызча - 吉尔吉斯语" }] },
					},
					{
						languageCode: "xh",
						languageName: { runs: [{ text: "isiXhosa - 科萨语" }] },
					},
					{
						languageCode: "co",
						languageName: { runs: [{ text: "Corsu - 科西嘉语" }] },
					},
					{
						languageCode: "hr",
						languageName: { runs: [{ text: "Hrvatski - 克罗地亚语" }] },
					},
					{
						languageCode: "qu",
						languageName: { runs: [{ text: "Runa Simi - 克丘亚语" }] },
					},
					{
						languageCode: "ku",
						languageName: { runs: [{ text: "Kurdî - 库尔德语" }] },
					},
					{
						languageCode: "la",
						languageName: { runs: [{ text: "lingua latīna - 拉丁语" }] },
					},
					{
						languageCode: "lv",
						languageName: { runs: [{ text: "Latviešu - 拉脱维亚语" }] },
					},
					{
						languageCode: "lo",
						languageName: { runs: [{ text: "ລາວ - 老挝语" }] },
					},
					{
						languageCode: "lt",
						languageName: { runs: [{ text: "Lietuvių - 立陶宛语" }] },
					},
					{
						languageCode: "ln",
						languageName: { runs: [{ text: "Lingála - 林加拉语" }] },
					},
					{
						languageCode: "lg",
						languageName: { runs: [{ text: "Luganda - 卢干达语" }] },
					},
					{
						languageCode: "lb",
						languageName: { runs: [{ text: "Lëtzebuergesch - 卢森堡语" }] },
					},
					{
						languageCode: "rw",
						languageName: { runs: [{ text: "Kinyarwanda - 卢旺达语" }] },
					},
					{
						languageCode: "ro",
						languageName: { runs: [{ text: "Română - 罗马尼亚语" }] },
					},
					{
						languageCode: "mt",
						languageName: { runs: [{ text: "Malti - 马耳他语" }] },
					},
					{
						languageCode: "mr",
						languageName: { runs: [{ text: "मराठी - 马拉地语" }] },
					},
					{
						languageCode: "mg",
						languageName: { runs: [{ text: "Malagasy - 马拉加斯语" }] },
					},
					{
						languageCode: "ml",
						languageName: { runs: [{ text: "മലയാളം - 马拉雅拉姆语" }] },
					},
					{
						languageCode: "ms",
						languageName: { runs: [{ text: "Bahasa Melayu - 马来语" }] },
					},
					{
						languageCode: "mk",
						languageName: { runs: [{ text: "македонски - 马其顿语" }] },
					},
					{
						languageCode: "mi",
						languageName: { runs: [{ text: "Māori - 毛利语" }] },
					},
					{
						languageCode: "mn",
						languageName: { runs: [{ text: "Монгол - 蒙古语" }] },
					},
					{
						languageCode: "bn",
						languageName: { runs: [{ text: "বাংলা - 孟加拉语" }] },
					},
					{
						languageCode: "my",
						languageName: { runs: [{ text: "ဗမာစာ - 缅甸语" }] },
					},
					{
						languageCode: "hmn",
						languageName: { runs: [{ text: "Hmoob - 苗语" }] },
					},
					{
						languageCode: "af",
						languageName: { runs: [{ text: "Afrikaans - 南非荷兰语" }] },
					},
					{
						languageCode: "st",
						languageName: { runs: [{ text: "Sesotho - 南索托语" }] },
					},
					{
						languageCode: "ne",
						languageName: { runs: [{ text: "नेपाली - 尼泊尔语" }] },
					},
					{
						languageCode: "no",
						languageName: { runs: [{ text: "Norsk - 挪威语" }] },
					},
					{
						languageCode: "pa",
						languageName: { runs: [{ text: "ਪੰਜਾਬੀ - 旁遮普语" }] },
					},
					{
						languageCode: "pt",
						languageName: { runs: [{ text: "Português - 葡萄牙语" }] },
					},
					{
						languageCode: "ps",
						languageName: { runs: [{ text: "پښتو - 普什图语" }] },
					},
					{
						languageCode: "ny",
						languageName: { runs: [{ text: "chiCheŵa - 齐切瓦语" }] },
					},
					{
						languageCode: "ja",
						languageName: { runs: [{ text: "日本語 - 日语" }] },
					},
					{
						languageCode: "sv",
						languageName: { runs: [{ text: "Svenska - 瑞典语" }] },
					},
					{
						languageCode: "sm",
						languageName: { runs: [{ text: "Gagana Samoa - 萨摩亚语" }] },
					},
					{
						languageCode: "sr",
						languageName: { runs: [{ text: "Српски језик - 塞尔维亚语" }] },
					},
					{
						languageCode: "si",
						languageName: { runs: [{ text: "සිංහල - 僧伽罗语" }] },
					},
					{
						languageCode: "sn",
						languageName: { runs: [{ text: "ChiShona - 绍纳语" }] },
					},
					{
						languageCode: "eo",
						languageName: { runs: [{ text: "Esperanto - 世界语" }] },
					},
					{
						languageCode: "sk",
						languageName: { runs: [{ text: "Slovenčina - 斯洛伐克语" }] },
					},
					{
						languageCode: "sl",
						languageName: { runs: [{ text: "Slovenščina - 斯洛文尼亚语" }] },
					},
					{
						languageCode: "sw",
						languageName: { runs: [{ text: "Kiswahili - 斯瓦希里语" }] },
					},
					{
						languageCode: "gd",
						languageName: { runs: [{ text: "Gàidhlig - 苏格兰盖尔语" }] },
					},
					{
						languageCode: "ceb",
						languageName: { runs: [{ text: "Cebuano - 宿务语" }] },
					},
					{
						languageCode: "so",
						languageName: { runs: [{ text: "Soomaaliga - 索马里语" }] },
					},
					{
						languageCode: "tg",
						languageName: { runs: [{ text: "тоҷикӣ - 塔吉克语" }] },
					},
					{
						languageCode: "te",
						languageName: { runs: [{ text: "తెలుగు - 泰卢固语" }] },
					},
					{
						languageCode: "ta",
						languageName: { runs: [{ text: "தமிழ் - 泰米尔语" }] },
					},
					{
						languageCode: "th",
						languageName: { runs: [{ text: "ไทย - 泰语" }] },
					},
					{
						languageCode: "ti",
						languageName: { runs: [{ text: "ትግርኛ - 提格利尼亚语" }] },
					},
					{
						languageCode: "tr",
						languageName: { runs: [{ text: "Türkçe - 土耳其语" }] },
					},
					{
						languageCode: "tk",
						languageName: { runs: [{ text: "Türkmen - 土库曼语" }] },
					},
					{
						languageCode: "cy",
						languageName: { runs: [{ text: "Cymraeg - 威尔士语" }] },
					},
					{
						languageCode: "ug",
						languageName: { runs: [{ text: "ئۇيغۇرچە - 维吾尔语" }] },
					},
					{
						languageCode: "und",
						languageName: { runs: [{ text: "Unknown - 未知语言" }] },
					},
					{
						languageCode: "ur",
						languageName: { runs: [{ text: "اردو - 乌尔都语" }] },
					},
					{
						languageCode: "uk",
						languageName: { runs: [{ text: "Українська - 乌克兰语" }] },
					},
					{
						languageCode: "uz",
						languageName: { runs: [{ text: "O‘zbek - 乌兹别克语" }] },
					},
					{
						languageCode: "es",
						languageName: { runs: [{ text: "Español - 西班牙语" }] },
					},
					{
						languageCode: "fy",
						languageName: { runs: [{ text: "Frysk - 西弗里西亚语" }] },
					},
					{
						languageCode: "iw",
						languageName: { runs: [{ text: "עברית - 希伯来语" }] },
					},
					{
						languageCode: "el",
						languageName: { runs: [{ text: "Ελληνικά - 希腊语" }] },
					},
					{
						languageCode: "haw",
						languageName: { runs: [{ text: "ʻŌlelo Hawaiʻi - 夏威夷语" }] },
					},
					{
						languageCode: "sd",
						languageName: { runs: [{ text: "سنڌي - 信德语" }] },
					},
					{
						languageCode: "hu",
						languageName: { runs: [{ text: "Magyar - 匈牙利语" }] },
					},
					{
						languageCode: "su",
						languageName: { runs: [{ text: "Basa Sunda - 巽他语" }] },
					},
					{
						languageCode: "hy",
						languageName: { runs: [{ text: "Հայերեն - 亚美尼亚语" }] },
					},
					{
						languageCode: "ig",
						languageName: { runs: [{ text: "Igbo - 伊博语" }] },
					},
					{
						languageCode: "it",
						languageName: { runs: [{ text: "Italiano - 意大利语" }] },
					},
					{
						languageCode: "yi",
						languageName: { runs: [{ text: "ייִדיש - 意第绪语" }] },
					},
					{
						languageCode: "hi",
						languageName: { runs: [{ text: "हिन्दी - 印地语" }] },
					},
					{
						languageCode: "id",
						languageName: {
							runs: [{ text: "Bahasa Indonesia - 印度尼西亚语" }],
						},
					},
					{
						languageCode: "en",
						languageName: { runs: [{ text: "English - 英语" }] },
					},
					{
						languageCode: "yo",
						languageName: { runs: [{ text: "Yorùbá - 约鲁巴语" }] },
					},
					{
						languageCode: "vi",
						languageName: { runs: [{ text: "Tiếng Việt - 越南语" }] },
					},
					{
						languageCode: "jv",
						languageName: { runs: [{ text: "Basa Jawa - 爪哇语" }] },
					},
					{
						languageCode: "zh-Hant",
						languageName: { runs: [{ text: "中文（繁體） - 中文（繁体）" }] },
					},
					{
						languageCode: "zh-Hans",
						languageName: { runs: [{ text: "中文（简体）" }] },
					},
					{
						languageCode: "zu",
						languageName: { runs: [{ text: "isiZulu - 祖鲁语" }] },
					},
					{
						languageCode: "kri",
						languageName: { runs: [{ text: "Krìì - 克里语" }] },
					},
				],
			},
		},
	},
};

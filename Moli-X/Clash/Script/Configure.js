// Define the `main` function
function main(params) {
    if (!params.proxies) return params;
    overwriteRules(params);
    overwriteProxyGroups(params);
    overwriteDns(params);
    return params;
}
//覆写规则
function overwriteRules(params) {
    const rules = [
        "PROCESS-NAME,lync.exe,DIRECT            ",
        "PROCESS-NAME,EXCEL.EXE,DIRECT           ",
        "PROCESS-NAME,WINWORD.EXE,DIRECT         ",
        "PROCESS-NAME,DIAInstaller.EXE,DIRECT    ",
        "PROCESS-NAME,Update.exe,DIRECT          ",
        "RULE-SET,Taida,PASS                     ",
        "RULE-SET,GitLab,香港节点,no-resolve       ",
        "RULE-SET,Google,香港节点                 ",
        "RULE-SET,YouTube,香港节点                ",
        "RULE-SET,Direct,DIRECT                 ",
        "RULE-SET,Lan,DIRECT                    ",
        "RULE-SET,Unbreak,DIRECT                ",
        "RULE-SET,Microsoft,香港节点              ",
        "RULE-SET,Video,中国媒体                  ",
        "RULE-SET,Telegram,电报消息               ",
        "RULE-SET,Github,香港节点                 ",
        "RULE-SET,OpenAI,人工智能                 ",
        "RULE-SET,China,DIRECT                 ",
        "RULE-SET,Global,海外服务               " ,
        "RULE-SET,Anti,REJECT                  ",
        "RULE-SET,Advertising,REJECT           ",
        "RULE-SET,Privacy,REJECT               ",
        "RULE-SET,Trendmicro,广告拦截            ",
        "GEOIP,CN,DIRECT                       ",
        "MATCH,漏网之鱼                          " ,
    ];
    const ruleProviders = {
        Direct: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Direct/Direct.yaml",
            path: "./RuleSet/Direct.yaml",
            interval: 86400,
        },
        Taida: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/Moli-X/Resources@main/Clash/Rules/Taida.yaml",
            path: "./RuleSet/Taida.yaml",
            interval: 86400,
        },
        Lan: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Lan/Lan.yaml",
            path: "./RuleSet/Lan.yaml",
            interval: 86400,
        },
        Google: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Google/Google.yaml",
            path: "./RuleSet/Google.yaml",
            interval: 86400,
        },
        Unbreak: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/DivineEngine/Profiles@master/Clash/RuleSet/Unbreak.yaml",
            path: "./RuleSet/Unbreak.yaml",
            interval: 86400,
        },
        OpenAI: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml",
            path: "./RuleSet/OpenAI.yaml",
            interval: 86400,
        },
        Bing: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/Moli-X/Resources@main/Clash/Rules/Bing.yaml",
            path: "./RuleSet/Bing.yaml",
            interval: 86400,
        },
        Microsoft: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/Moli-X/Resources@main/Clash/Rules/Microsoft.yaml",
            path: "./RuleSet/Microsoft.yaml",
            interval: 86400,
        },
        Github: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@release/rule/Clash/GitHub/GitHub.yaml",
            path: "./RuleSet/Github.yaml",
            interval: 86400,
        },
        GitLab: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/GitLab/GitLab.yaml",
            path: "./RuleSet/GitLab.yaml",
            interval: 86400,
        },
        YouTube: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTube/YouTube.yaml",
            path: "./RuleSet/YouTube.yaml",
            interval: 86400,
        },
        Video: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/Moli-X/Resources@main/Clash/Rules/Video.yaml",
            path: "./RuleSet/Video.yaml",
            interval: 86400,
        },
        Telegram: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@release/rule/Clash/Telegram/Telegram.yaml",
            path: "./RuleSet/Telegram.yaml",
            interval: 86400,
        },
        Discord: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/Moli-X/Resources@main/Clash/Rules/Discord.yaml",
            path: "./RuleSet/Discord.yaml",
            interval: 86400,
        },
        Global: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/Moli-X/Resources@main/Clash/Rules/Global.yaml",
            path: "./RuleSet/Global.yaml",
            interval: 86400,
        },
        China: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@release/rule/Clash/China/China.yaml",
            path: "./RuleSet/China.yaml",
            interval: 86400,
        },
        ChinaIP: {
            type: "http",
            behavior: "ipcidr",
            url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@release/rule/Clash/ChinaIPs/ChinaIPs_IP.yaml",
            path: "./RuleSet/ChinaIP.yaml",
            interval: 86400,
        },
        Advertising: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Advertising/Advertising.yaml",
            path: "./RuleSet/Advertising.yaml",
            interval: 86400,
        },
        Privacy: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Hijacking/Hijacking.yaml",
            path: "./RuleSet/Privacy.yaml",
            interval: 86400,
        },
        HKlist: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/Moli-X/Resources@main/Clash/Rules/HKlist.yaml",
            path: "./RuleSet/HKlist.yaml",
            interval: 86400,
        },
        Trendmicro: {
            type: "http",
            behavior: "classical",
            url: "https://cdn.jsdelivr.net/gh/Moli-X/Resources@main/Clash/Rules/Trendmicro.yaml",
            path: "./RuleSet/Trendmicro.yaml",
            interval: 86400,
        },
        Anti: {
            type: "http",
            behavior: "domain",
            url: "https://anti-ad.net/clash.yaml",
            path: "./RuleSet/Anti.yaml",
            interval: 86400,
        },

    };
    params["rule-providers"] = ruleProviders;
    params["rules"] = rules;
}

//覆写代理组
function overwriteProxyGroups(params) {
    // 所有代理
    const allProxies = params["proxies"].map((e) => e.name);
    // 海外服务代理组，按地区分组选延迟最低
    const autoProxyGroupRegexs = [
        { name: "香港节点", regex: /香港|HK|Hong|🇭🇰/ , icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png "},
        { name: "台湾节点", regex: /台湾|TW|Taiwan|Wan|🇨🇳|🇹🇼/, icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png" },
        { name: "新加坡节点", regex: /新加坡|狮城|SG|Singapore|🇸🇬/, icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png " },
        { name: "日本节点", regex: /日本|JP|Japan|🇯🇵/, icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png " },
        { name: "美国节点", regex: /美国|US|United States|America|🇺🇸/ , icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png"},
//        { name: "所有节点", regex: /(?!.*(?:剩余|到期|主页|官网|游戏|关注))(.*)/ },
    ];

    const autoProxyGroups = autoProxyGroupRegexs
        .map((item) => ({
            name: item.name,
            type: "url-test",
            url: "http://www.gstatic.com/generate_204",
            interval: 300,
            tolerance: 50,
            proxies: getProxiesByRegex(params, item.regex),
            icon: item.icon,
            hidden: false,
        }))
        .filter((item) => item.proxies.length > 0);


    const groups = [

        {
            name: "海外服务",
            type: "select",
            url: "http://www.gstatic.com/generate_204",
            icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg",
            proxies: [ "香港节点", "台湾节点", "新加坡节点", "日本节点", "美国节点", "全球节点"],
        },

        {
            name: "电报消息",
            type: "select",
            proxies: ["海外服务", "香港节点", "台湾节点", "新加坡节点", "日本节点", "美国节点", "全球节点"],
            // "include-all": true,
            icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg"
        },
        {
            name: "人工智能",
            type: "select",
            proxies: ["海外服务", "香港节点", "台湾节点", "新加坡节点", "日本节点", "美国节点", "全球节点"],
            // "include-all": true,
            icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png "
        },
        {
            name: "中国媒体",
            type: "select",
            proxies: ["PASS","海外服务", "DIRECT"],
            // "include-all": true,
            icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/StreamingCN.png"
        },
        {
            name: "Spotify",
            type: "select",
            proxies: ["海外服务", "香港节点", "台湾节点", "新加坡节点", "日本节点", "美国节点", "全球节点"],
            // "include-all": true,
            icon: "https://storage.googleapis.com/spotifynewsroom-jp.appspot.com/1/2020/12/Spotify_Icon_CMYK_Green.png"
        },
        {
            name: "漏网之鱼",
            type: "select",
            proxies: ["PASS","DIRECT", "海外服务",],
            icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/ambulance.svg"
        },
        {
            name: "广告拦截",
            type: "select",
            proxies: ["PASS","REJECT", "DIRECT", "海外服务",],
            icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Reject.png"
        },
        {
            name: "全球节点",
            type: "url-test",
            url: "http://www.gstatic.com/generate_204",
            interval: 300,
            tolerance: 50,
            icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Macao.png ",
            proxies: allProxies,
            hidden: false,
        },
    ];

    autoProxyGroups.length &&
        groups[2].proxies.unshift(...autoProxyGroups.map((item) => item.name));
    groups.push(...autoProxyGroups);
    params["proxy-groups"] = groups;

}

//防止dns泄露
function overwriteDns(params) {
    const cnDnsList = [
        "https://223.5.5.5/dns-query",
        "https://1.12.12.12/dns-query",
    ];
    const trustDnsList = [
        'quic://dns.cooluc.com',
        "https://1.0.0.1/dns-query",
        "https://1.1.1.1/dns-query",
    ];

    const dnsOptions = {
        enable: true,
        "prefer-h3": true, // 如果DNS服务器支持DoH3会优先使用h3
        "default-nameserver": cnDnsList, // 用于解析其他DNS服务器、和节点的域名, 必须为IP, 可为加密DNS。注意这个只用来解析节点和其他的dns，其他网络请求不归他管
        nameserver: trustDnsList, // 其他网络请求都归他管

        // 这个用于覆盖上面的 nameserver
        "nameserver-policy": {
            //[combinedUrls]: notionDns,
            "geosite:cn": cnDnsList,
            "geosite:geolocation-!cn": trustDnsList,
            // 如果你有一些内网使用的DNS，应该定义在这里，多个域名用英文逗号分割
            // '+.公司域名.com, www.4399.com, +.baidu.com': '10.0.0.1'
        },
        fallback: trustDnsList,
        "fallback-filter": {
            geoip: true,
            //除了 geoip-code 配置的国家 IP, 其他的 IP 结果会被视为污染 geoip-code 配置的国家的结果会直接采用，否则将采用 fallback结果
            "geoip-code": "CN",
            //geosite 列表的内容被视为已污染，匹配到 geosite 的域名，将只使用 fallback解析，不去使用 nameserver
            geosite: ["gfw"],
            ipcidr: ["240.0.0.0/4"],
            domain: ["+.google.com", "+.facebook.com", "+.youtube.com"],
        },
    };

    // GitHub加速前缀
    const githubPrefix = "https://fastgh.lainbo.com/";

    // GEO数据GitHub资源原始下载地址
    const rawGeoxURLs = {
        geoip:
            "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
        geosite:
            "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
        mmdb: "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country-lite.mmdb",
    };

    // 生成带有加速前缀的GEO数据资源对象
    const accelURLs = Object.fromEntries(
        Object.entries(rawGeoxURLs).map(([key, githubUrl]) => [
            key,
            `${githubPrefix}${githubUrl}`,
        ])
    );

    const otherOptions = {
        "unified-delay": true,
        "tcp-concurrent": true,
        profile: {
            "store-selected": true,
            "store-fake-ip": true,
        },
        sniffer: {
            enable: true,
            sniff: {
                TLS: {
                    ports: [443, 8443],
                },
                HTTP: {
                    ports: [80, "8080-8880"],
                    "override-destination": true,
                },
            },
        },
        "geodata-mode": true,
        "geox-url": accelURLs,
    };

    params.dns = { ...params.dns, ...dnsOptions };
    Object.keys(otherOptions).forEach((key) => {
        params[key] = otherOptions[key];
    });
}

function getProxiesByRegex(params, regex) {
    const matchedProxies = params.proxies.filter((e) => regex.test(e.name)).map((e) => e.name);
    return matchedProxies.length > 0 ? matchedProxies : ["海外服务"];
}



"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[667],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=i.createContext({}),o=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},h=function(e){var t=o(e.components);return i.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,h=p(e,["components","mdxType","originalType","parentName"]),f=o(a),m=n,s=f["".concat(r,".").concat(m)]||f[m]||c[m]||l;return a?i.createElement(s,u(u({ref:t},h),{},{components:a})):i.createElement(s,u({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=f;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p.mdxType="string"==typeof e?e:n,u[1]=p;for(var o=2;o<l;o++)u[o]=a[o];return i.createElement.apply(null,u)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},9681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>u,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var i=a(7462),n=(a(7294),a(3905));const l={title:"Release Notes 0.6.0",sidebar_position:2},u="Release Note",p={unversionedId:"release-notes-0.6.0",id:"release-notes-0.6.0",title:"Release Notes 0.6.0",description:"Highlight",source:"@site/download/release-notes-0.6.0.md",sourceDirName:".",slug:"/release-notes-0.6.0",permalink:"/zh-CN/download/release-notes-0.6.0",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Release Notes 0.6.0",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Download",permalink:"/zh-CN/download/"}},r={},o=[{value:"Highlight",id:"highlight",level:2},{value:"ChangeLog",id:"changelog",level:2},{value:"Credits",id:"credits",level:2}],h={toc:o};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"release-note"},"Release Note"),(0,n.kt)("h2",{id:"highlight"},"Highlight"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Optimize the assignment strategy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Some improvement of stability and performance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Add a plugin mechanism of SelectStorageStrategy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Add LowestIOSampleCostSelectStorageStrategy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Support Kerberos HDFS"))),(0,n.kt)("h2",{id:"changelog"},"ChangeLog"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Change license owner to ASF by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/5"},"https://github.com/apache/incubator-uniffle/pull/5")),(0,n.kt)("li",{parentName:"ul"},"Trivial code improvements by @wForget in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/7"},"https://github.com/apache/incubator-uniffle/pull/7")),(0,n.kt)("li",{parentName:"ul"},"[Minor]"," Store shuffleId int to be consistent with other data structure by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/10"},"https://github.com/apache/incubator-uniffle/pull/10")),(0,n.kt)("li",{parentName:"ul"},"Introduce the asList method in ConfigOptions by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/9"},"https://github.com/apache/incubator-uniffle/pull/9")),(0,n.kt)("li",{parentName:"ul"},"Rename package by @jerqi in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/6"},"https://github.com/apache/incubator-uniffle/pull/6")),(0,n.kt)("li",{parentName:"ul"},"Minimize apache-rat excluded files by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/11"},"https://github.com/apache/incubator-uniffle/pull/11")),(0,n.kt)("li",{parentName:"ul"},"Update module names by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/12"},"https://github.com/apache/incubator-uniffle/pull/12")),(0,n.kt)("li",{parentName:"ul"},"Covert PartitionAssignmentInfo to static inner class by @pan3793 in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/15"},"https://github.com/apache/incubator-uniffle/pull/15")),(0,n.kt)("li",{parentName:"ul"},"[Followup]"," Migrate to Junit5 by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/14"},"https://github.com/apache/incubator-uniffle/pull/14")),(0,n.kt)("li",{parentName:"ul"},"[Bug]"," Fix NPE problem when process the event if application was cleared already by @colinmjj in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/16"},"https://github.com/apache/incubator-uniffle/pull/16")),(0,n.kt)("li",{parentName:"ul"},"[CI]"," Enable codecov report by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/17"},"https://github.com/apache/incubator-uniffle/pull/17")),(0,n.kt)("li",{parentName:"ul"},"Correct the config description and fix typo by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/19"},"https://github.com/apache/incubator-uniffle/pull/19")),(0,n.kt)("li",{parentName:"ul"},"Add CI and Codecov badges in README by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/20"},"https://github.com/apache/incubator-uniffle/pull/20")),(0,n.kt)("li",{parentName:"ul"},"[Followup]"," Use asList method in some existing configOptions by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/18"},"https://github.com/apache/incubator-uniffle/pull/18")),(0,n.kt)("li",{parentName:"ul"},"Move rss-integration-spark-common-test module package by @wForget in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/23"},"https://github.com/apache/incubator-uniffle/pull/23")),(0,n.kt)("li",{parentName:"ul"},"[INFRA]"," Improve asf.yaml to reduce the notifications by @jerryshao in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/25"},"https://github.com/apache/incubator-uniffle/pull/25")),(0,n.kt)("li",{parentName:"ul"},"[TEST]"," Improve code coverage in rss-common by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/26"},"https://github.com/apache/incubator-uniffle/pull/26")),(0,n.kt)("li",{parentName:"ul"},"Remove redundant package by @wForget in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/27"},"https://github.com/apache/incubator-uniffle/pull/27")),(0,n.kt)("li",{parentName:"ul"},"[CI]"," Switch to temurin JDK by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/24"},"https://github.com/apache/incubator-uniffle/pull/24")),(0,n.kt)("li",{parentName:"ul"},"[INFRA]"," Improve asf.yaml to reduce the notifications (another-try) by @jerryshao in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/33"},"https://github.com/apache/incubator-uniffle/pull/33")),(0,n.kt)("li",{parentName:"ul"},"Bump commons-lang3 from 3.5 to 3.10 by @wForget in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/28"},"https://github.com/apache/incubator-uniffle/pull/28")),(0,n.kt)("li",{parentName:"ul"},"Fix the log of incorrectly bound class by @wForget in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/35"},"https://github.com/apache/incubator-uniffle/pull/35")),(0,n.kt)("li",{parentName:"ul"},"[TYPO]",' Fix misspelled word "integration" by @kaijchen in ',(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/34"},"https://github.com/apache/incubator-uniffle/pull/34")),(0,n.kt)("li",{parentName:"ul"},"Fix some hyperlink in README.md by @daugraph in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/32"},"https://github.com/apache/incubator-uniffle/pull/32")),(0,n.kt)("li",{parentName:"ul"},"Upgrade gRPC to support Apple Silicon by @pan3793 in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/13"},"https://github.com/apache/incubator-uniffle/pull/13")),(0,n.kt)("li",{parentName:"ul"},"Allow to specify custom tags to decide the assignment of servers by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/30"},"https://github.com/apache/incubator-uniffle/pull/30")),(0,n.kt)("li",{parentName:"ul"},"Optimize the bash script by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/29"},"https://github.com/apache/incubator-uniffle/pull/29")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," reduce compiler warnings by @advancedxy in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/46"},"https://github.com/apache/incubator-uniffle/pull/46")),(0,n.kt)("li",{parentName:"ul"},"[Chore]",": document update and build time optimize by @advancedxy in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/45"},"https://github.com/apache/incubator-uniffle/pull/45")),(0,n.kt)("li",{parentName:"ul"},"Supplement doc about assignment tags by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/47"},"https://github.com/apache/incubator-uniffle/pull/47")),(0,n.kt)("li",{parentName:"ul"},"[Bug]"," Fix skip() api maybe skip unexpected bytes which makes inconsistent data by @colinmjj in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/40"},"https://github.com/apache/incubator-uniffle/pull/40")),(0,n.kt)("li",{parentName:"ul"},"[improvement]"," Remove experimental feature with ShuffleUploader by @colinmjj in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/51"},"https://github.com/apache/incubator-uniffle/pull/51")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," Provides utility classes for creating thread factories by @smallzhongfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/49"},"https://github.com/apache/incubator-uniffle/pull/49")),(0,n.kt)("li",{parentName:"ul"},"Enable spotbugs and fix high priority bugs by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/38"},"https://github.com/apache/incubator-uniffle/pull/38")),(0,n.kt)("li",{parentName:"ul"},"[CI]"," Change default checkstyle severity to error by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/57"},"https://github.com/apache/incubator-uniffle/pull/57")),(0,n.kt)("li",{parentName:"ul"},"[Style]"," Check indentation by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/56"},"https://github.com/apache/incubator-uniffle/pull/56")),(0,n.kt)("li",{parentName:"ul"},"[Experimental Feature]"," MR Supports Remote Spill by @frankliee in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/55"},"https://github.com/apache/incubator-uniffle/pull/55")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," Log indicate the shuffle server host:port when doing re\u2026 by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/58"},"https://github.com/apache/incubator-uniffle/pull/58")),(0,n.kt)("li",{parentName:"ul"},"Send commit concurrently in client side by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/59"},"https://github.com/apache/incubator-uniffle/pull/59")),(0,n.kt)("li",{parentName:"ul"},"Explicitly set the constructor with AccessManager when extending AccessChecker by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/43"},"https://github.com/apache/incubator-uniffle/pull/43")),(0,n.kt)("li",{parentName:"ul"},"[DOC]"," Replace Firestorm with Uniffle by @jerqi in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/60"},"https://github.com/apache/incubator-uniffle/pull/60")),(0,n.kt)("li",{parentName:"ul"},"Introduce the extraProperties to support user-defined pluggable accessCheckers by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/42"},"https://github.com/apache/incubator-uniffle/pull/42")),(0,n.kt)("li",{parentName:"ul"},"Log enhancement: Merge multiple logs into oneline and add more description  by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/62"},"https://github.com/apache/incubator-uniffle/pull/62")),(0,n.kt)("li",{parentName:"ul"},"[TEST]"," Add more unit tests in rss-common by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/63"},"https://github.com/apache/incubator-uniffle/pull/63")),(0,n.kt)("li",{parentName:"ul"},"[MINOR]"," Comments of PartitionBalanceAssignmentStrategy miss byte units by @smallzhongfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/68"},"https://github.com/apache/incubator-uniffle/pull/68")),(0,n.kt)("li",{parentName:"ul"},"[Minor]"," Make config keys and default values finalized by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/70"},"https://github.com/apache/incubator-uniffle/pull/70")),(0,n.kt)("li",{parentName:"ul"},"[Log Improvment]"," Add more detailed debug info for MR client by @frankliee in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/84"},"https://github.com/apache/incubator-uniffle/pull/84")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," Shutdown the grpc executors pool when closing by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/83"},"https://github.com/apache/incubator-uniffle/pull/83")),(0,n.kt)("li",{parentName:"ul"},"Log enhancement: return error message when getting assignment servers and log exception when initializing by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/64"},"https://github.com/apache/incubator-uniffle/pull/64")),(0,n.kt)("li",{parentName:"ul"},"[ISSUE-48][Feature]"," Init Kubernetes operator directory by @jerqi in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/75"},"https://github.com/apache/incubator-uniffle/pull/75")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," No need to use synchronized lock of the method scope when getting client by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/82"},"https://github.com/apache/incubator-uniffle/pull/82")),(0,n.kt)("li",{parentName:"ul"},"[DOC]"," Remove Wechat group in README by @jerqi in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/88"},"https://github.com/apache/incubator-uniffle/pull/88")),(0,n.kt)("li",{parentName:"ul"},"[Performance Optimization]"," Improve the speed of writing index file in shuffle server by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/91"},"https://github.com/apache/incubator-uniffle/pull/91")),(0,n.kt)("li",{parentName:"ul"},"[DOC]"," Update title and description in README by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/94"},"https://github.com/apache/incubator-uniffle/pull/94")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," ShuffleBlock should be release when finished reading by @xianjingfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/74"},"https://github.com/apache/incubator-uniffle/pull/74")),(0,n.kt)("li",{parentName:"ul"},"[IMPROVEMENT][COMMON]"," Fix common module code style by @jerqi in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/99"},"https://github.com/apache/incubator-uniffle/pull/99")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]","LocalStorage init use multi thread #71 by @xianjingfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/72"},"https://github.com/apache/incubator-uniffle/pull/72")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," Use OR operation instead of serialization for cloning BitMaps by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/103"},"https://github.com/apache/incubator-uniffle/pull/103")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," Ignore partial failure on initializing local storage in shuffle server side by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/102"},"https://github.com/apache/incubator-uniffle/pull/102")),(0,n.kt)("li",{parentName:"ul"},"[CI]"," Test compile in Java 11 and Java 17 by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/105"},"https://github.com/apache/incubator-uniffle/pull/105")),(0,n.kt)("li",{parentName:"ul"},"Sleep less time but try more times when stopping by @xianjingfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/112"},"https://github.com/apache/incubator-uniffle/pull/112")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," Use ConfigBuilder to rewrite the class RssSparkConfig by @smallzhongfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/104"},"https://github.com/apache/incubator-uniffle/pull/104")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," Introduce config to customize assignment server numbers in client side by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/100"},"https://github.com/apache/incubator-uniffle/pull/100")),(0,n.kt)("li",{parentName:"ul"},"Assign partition again if registerShuffleServers failed by @xianjingfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/115"},"https://github.com/apache/incubator-uniffle/pull/115")),(0,n.kt)("li",{parentName:"ul"},"[ISSUE-106][IMPROVEMENT]"," Set rpc timeout for all rpc interface by @xianjingfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/113"},"https://github.com/apache/incubator-uniffle/pull/113")),(0,n.kt)("li",{parentName:"ul"},"[MINOR][IMPROVEMENT]"," Avoid CoordinatorServer#initialization multiple ",(0,n.kt)("inlineCode",{parentName:"li"},"new Configuration()")," by @zwangsheng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/118"},"https://github.com/apache/incubator-uniffle/pull/118")),(0,n.kt)("li",{parentName:"ul"},"[Improve]"," Remove useless server id from ",(0,n.kt)("inlineCode",{parentName:"li"},"StorageManagerFactory#createStorageManager")," by @zwangsheng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/119"},"https://github.com/apache/incubator-uniffle/pull/119")),(0,n.kt)("li",{parentName:"ul"},"[MINOR][IMPROVEMENT]","[COORD]"," Fix coordinator module code style by @jerqi in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/122"},"https://github.com/apache/incubator-uniffle/pull/122")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," Set heartBeatExecutorService as daemon thread by @smallzhongfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/121"},"https://github.com/apache/incubator-uniffle/pull/121")),(0,n.kt)("li",{parentName:"ul"},"[JUnit]"," Introduce the property of trimStackTrace to show error stacktrace in mvn-test by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/126"},"https://github.com/apache/incubator-uniffle/pull/126")),(0,n.kt)("li",{parentName:"ul"},"Make the conf of rss.storage.basePath as list by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/130"},"https://github.com/apache/incubator-uniffle/pull/130")),(0,n.kt)("li",{parentName:"ul"},"[MINOR][IMPROVEMENT]","[STORAGE]"," Fix storage module code style by @jerqi in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/131"},"https://github.com/apache/incubator-uniffle/pull/131")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," Add timeout reconnection when DelegationRssShuffleManager send the request of AccessCluster by @smallzhongfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/139"},"https://github.com/apache/incubator-uniffle/pull/139")),(0,n.kt)("li",{parentName:"ul"},"[MINOR]"," Fix flaky test testGetHostIp by @izchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/141"},"https://github.com/apache/incubator-uniffle/pull/141")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," Add the number of unhealthy nodes in CoordinatorMetrics by @smallzhongfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/147"},"https://github.com/apache/incubator-uniffle/pull/147")),(0,n.kt)("li",{parentName:"ul"},"[ISSUE-48][FEATURE]"," Add Uniffle Dockerfile by @wangao1236 in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/132"},"https://github.com/apache/incubator-uniffle/pull/132")),(0,n.kt)("li",{parentName:"ul"},"[BUGFIX]"," Fix memory leak which cause oom by @summaryzb in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/145"},"https://github.com/apache/incubator-uniffle/pull/145")),(0,n.kt)("li",{parentName:"ul"},"[Log Improvement]"," Output the registering/lost/exclude nodes in log by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/148"},"https://github.com/apache/incubator-uniffle/pull/148")),(0,n.kt)("li",{parentName:"ul"},"[MINOR]"," Tagged spark hadoop version in release package by @izchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/149"},"https://github.com/apache/incubator-uniffle/pull/149")),(0,n.kt)("li",{parentName:"ul"},"[DOC]"," Migrate the coordinator doc from README to docs page by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/153"},"https://github.com/apache/incubator-uniffle/pull/153")),(0,n.kt)("li",{parentName:"ul"},"[MINOR][DOC]"," Remove spaces when reading file of excluded nodes by @smallzhongfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/155"},"https://github.com/apache/incubator-uniffle/pull/155")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," Filter null value when selecting remote storage in ApplicationManager by @smallzhongfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/156"},"https://github.com/apache/incubator-uniffle/pull/156")),(0,n.kt)("li",{parentName:"ul"},"Introduce more grpc server metrics by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/150"},"https://github.com/apache/incubator-uniffle/pull/150")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," Introduce a new class ShuffleTaskInfo by @smallzhongfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/158"},"https://github.com/apache/incubator-uniffle/pull/158")),(0,n.kt)("li",{parentName:"ul"},"[ISSUE-76]"," Disallow sendShuffleData if requireBufferId expired by @xianjingfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/159"},"https://github.com/apache/incubator-uniffle/pull/159")),(0,n.kt)("li",{parentName:"ul"},"Support storing shuffle data to secured dfs cluster by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/53"},"https://github.com/apache/incubator-uniffle/pull/53")),(0,n.kt)("li",{parentName:"ul"},"[FOLLOWUP]"," Delete hdfs shuffle data files using proxy user by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/170"},"https://github.com/apache/incubator-uniffle/pull/170")),(0,n.kt)("li",{parentName:"ul"},"[ISSUE-48][FEATURE]"," Init Operator Directory by @wangao1236 in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/161"},"https://github.com/apache/incubator-uniffle/pull/161")),(0,n.kt)("li",{parentName:"ul"},"PID file name should contains program name by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/165"},"https://github.com/apache/incubator-uniffle/pull/165")),(0,n.kt)("li",{parentName:"ul"},"[BUGFIX]"," Fix resource leak when shuffle read by @izchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/174"},"https://github.com/apache/incubator-uniffle/pull/174")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," ShuffleBufferManager supports triggering flush according to the size of single ShuffleBuffer by @leixm in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/176"},"https://github.com/apache/incubator-uniffle/pull/176")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," Should match from pathToStorages when appId does not exist in appIdToStorages by @smallzhongfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/168"},"https://github.com/apache/incubator-uniffle/pull/168")),(0,n.kt)("li",{parentName:"ul"},"[ISSUE-173][FOLLOWUP]"," The size of single buffer flush should reach rss.server.flush.cold.storage.threshold.size  by @leixm in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/178"},"https://github.com/apache/incubator-uniffle/pull/178")),(0,n.kt)("li",{parentName:"ul"},'Revert "',"[ISSUE-173][FOLLOWUP]",' The size of single buffer flush should reach rss.server.flush.cold.storage.threshold.size " by @jerqi in ',(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/179"},"https://github.com/apache/incubator-uniffle/pull/179")),(0,n.kt)("li",{parentName:"ul"},"[ISSUE-173][FOLLOWUP]"," The size of single buffer flush should reach rss.server.flush.cold.storage.threshold.size by @leixm in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/180"},"https://github.com/apache/incubator-uniffle/pull/180")),(0,n.kt)("li",{parentName:"ul"},"[FOLLOWUP]"," Store app user in ShuffleTaskInfo by @smallzhongfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/181"},"https://github.com/apache/incubator-uniffle/pull/181")),(0,n.kt)("li",{parentName:"ul"},"[ISSUE-123]"," Fix all test code style  by @macroguo-ghy in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/185"},"https://github.com/apache/incubator-uniffle/pull/185")),(0,n.kt)("li",{parentName:"ul"},"[ISSUE-48][FEATURE]","[FOLLOW UP]"," Add RemoteShuffleService CRD by @wangao1236 in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/175"},"https://github.com/apache/incubator-uniffle/pull/175")),(0,n.kt)("li",{parentName:"ul"},"[FOLLOWUP]"," Add the conf of rss.security.hadoop.krb5-conf.file by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/184"},"https://github.com/apache/incubator-uniffle/pull/184")),(0,n.kt)("li",{parentName:"ul"},"Fix flaky test about kerberos by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/191"},"https://github.com/apache/incubator-uniffle/pull/191")),(0,n.kt)("li",{parentName:"ul"},"[Improvement]"," Add optional environment variables by @izchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/187"},"https://github.com/apache/incubator-uniffle/pull/187")),(0,n.kt)("li",{parentName:"ul"},"[MINOR]"," Fix some bad practices reported by spotbugs by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/177"},"https://github.com/apache/incubator-uniffle/pull/177")),(0,n.kt)("li",{parentName:"ul"},"[ISSUE-48][FEATURE]","[FOLLOW UP]"," Add webhook component by @wangao1236 in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/188"},"https://github.com/apache/incubator-uniffle/pull/188")),(0,n.kt)("li",{parentName:"ul"},"[Log-Improvement]"," Log the newly registered app id by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/193"},"https://github.com/apache/incubator-uniffle/pull/193")),(0,n.kt)("li",{parentName:"ul"},"[MINOR]"," Replace HashSet with ImmutableSet in configs by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/195"},"https://github.com/apache/incubator-uniffle/pull/195")),(0,n.kt)("li",{parentName:"ul"},"[IMPROVEMENT]"," Introduce the enumType in ConfigOptions by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/199"},"https://github.com/apache/incubator-uniffle/pull/199")),(0,n.kt)("li",{parentName:"ul"},"[ISSUE-48][FEATURE]","[FOLLOW UP]"," Generate informer and lister for crd by @wangao1236 in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/202"},"https://github.com/apache/incubator-uniffle/pull/202")),(0,n.kt)("li",{parentName:"ul"},"[ISSUE-144]"," Fix flaky test ",(0,n.kt)("inlineCode",{parentName:"li"},"RssShuffleUtilsTest#testDestroyDirectByteBuffer"),"  by @LuciferYang in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/203"},"https://github.com/apache/incubator-uniffle/pull/203")),(0,n.kt)("li",{parentName:"ul"},"[Issue-194][Feature]"," Support spark 3.2.0 by @leixm in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/201"},"https://github.com/apache/incubator-uniffle/pull/201")),(0,n.kt)("li",{parentName:"ul"},"[ISSUE-186][Feature]"," Use I/O cost time to select storage paths by @smallzhongfeng in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/192"},"https://github.com/apache/incubator-uniffle/pull/192")),(0,n.kt)("li",{parentName:"ul"},"[Improvement][AQE]"," Avoid calling getShuffleResult multiple times by @leixm in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/190"},"https://github.com/apache/incubator-uniffle/pull/190")),(0,n.kt)("li",{parentName:"ul"},"Fix flaky test of heartbeatTimeoutTest by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/206"},"https://github.com/apache/incubator-uniffle/pull/206")),(0,n.kt)("li",{parentName:"ul"},"[IMPROVEMENT]"," Add more metrics about local storage info by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/205"},"https://github.com/apache/incubator-uniffle/pull/205")),(0,n.kt)("li",{parentName:"ul"},"[MINOR][IMPROVEMENT]"," Return index-file size of n*SEGMENT_SIZE in HDFS reading by @zuston in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/204"},"https://github.com/apache/incubator-uniffle/pull/204")),(0,n.kt)("li",{parentName:"ul"},"Add DISCLAIMER by @jerqi in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/212"},"https://github.com/apache/incubator-uniffle/pull/212")),(0,n.kt)("li",{parentName:"ul"},"[TEST]"," Improve SimpleClusterManagerTest by @kaijchen in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/216"},"https://github.com/apache/incubator-uniffle/pull/216")),(0,n.kt)("li",{parentName:"ul"},"[Minor]"," Modify the format of DISCLAIMER by @jerqi in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/217"},"https://github.com/apache/incubator-uniffle/pull/217")),(0,n.kt)("li",{parentName:"ul"},"Add Notice and DISCLAMER file by @frankliee in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-uniffle/pull/215"},"https://github.com/apache/incubator-uniffle/pull/215"))),(0,n.kt)("h2",{id:"credits"},"Credits"),(0,n.kt)("p",null,"The release of Uniffle 0.6.0 is inseparable from the contributors of the Uniffle community. Thanks to all the community contributors!"))}c.isMDXComponent=!0}}]);
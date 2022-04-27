(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{731:function(t,s,_){"use strict";_.r(s);var a=_(12),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"_1-ip位于那层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-ip位于那层"}},[t._v("#")]),t._v(" 1. IP位于那层？")]),t._v(" "),_("p",[t._v("​\tIP在TCP/IP参考模型中处于第三层，也就是 "),_("strong",[t._v("网络层")]),t._v("。")]),t._v(" "),_("p",[t._v("​\t网络层的主要作用是："),_("strong",[t._v("实现主机与主机之间的通信，也叫点对点通信")])]),t._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/option-star/imgs/202204111405533.jpeg",alt:"IP 的作用"}}),t._v(" "),_("h2",{attrs:{id:"_2-网络层-ip-与数据链路层-mac-有什么关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-网络层-ip-与数据链路层-mac-有什么关系"}},[t._v("#")]),t._v(" 2. 网络层（IP）与数据链路层（MAC）有什么关系？")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("MAC")]),t._v(": 实现【直连】的两个设备之间的通信")]),t._v(" "),_("li",[_("strong",[t._v("IP")]),t._v("：则负责在【没有直连】的两个网络之间进行通信传输。")])]),t._v(" "),_("p",[t._v("​\t"),_("strong",[t._v("源IP地址和目标IP地址在传输过程中是不会变化的，只有源MAC地址和目标MAC一直在变化。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/option-star/imgs/202204111409972.jpeg",alt:"IP 的作用与 MAC 的作用"}})]),t._v(" "),_("h2",{attrs:{id:"_3-ip地址表示"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-ip地址表示"}},[t._v("#")]),t._v(" 3. IP地址表示")]),t._v(" "),_("blockquote",[_("p",[t._v("点分十进制")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/option-star/imgs/202204111416799.jpeg",alt:"点分十进制"}})]),t._v(" "),_("blockquote",[_("p",[t._v("IP地址最大值")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/option-star/imgs/202204111417675.jpeg",alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"_4-ip地址的分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-ip地址的分类"}},[t._v("#")]),t._v(" 4. IP地址的分类")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/option-star/imgs/202204111417114.jpeg",alt:"IP 地址分类"}})]),t._v(" "),_("h2",{attrs:{id:"_5-什么是a、b、c类地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-什么是a、b、c类地址"}},[t._v("#")]),t._v(" 5. 什么是A、B、C类地址？")]),t._v(" "),_("p",[t._v("对于A、B、C类主要分为两部分，分别是 "),_("strong",[t._v("网络号")]),t._v("和 "),_("strong",[t._v("主机号")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/option-star/imgs/202204111419472.jpeg",alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"_6-a、b、c分类地址最大主机个数是如何计算的呢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-a、b、c分类地址最大主机个数是如何计算的呢"}},[t._v("#")]),t._v(" 6. A、B、C分类地址最大主机个数是如何计算的呢？")]),t._v(" "),_("p",[t._v("最大主机个数，就是要看主机号的位数，如 C 类地址的主机号占 8 位，那么 C 类地址的最大主机个数：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/option-star/imgs/202204111421957.jpeg",alt:"img"}})]),t._v(" "),_("p",[t._v("为什么要减 2 呢？")]),t._v(" "),_("p",[t._v("因为在 IP 地址中，有两个 IP 是特殊的，分别是主机号全为 1 和 全为 0 地址。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/option-star/imgs/202204111421224.jpeg",alt:"img"}})]),t._v(" "),_("ul",[_("li",[t._v("主机号全为 1 指定某个网络下的所有主机，用于广播")]),t._v(" "),_("li",[t._v("主机号全为 0 指定某个网络")])]),t._v(" "),_("p",[t._v("因此，在分配过程中，应该去掉这两种情况。")]),t._v(" "),_("h2",{attrs:{id:"_7-广播地址用于什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-广播地址用于什么"}},[t._v("#")]),t._v(" 7. 广播地址用于什么？")]),t._v(" "),_("p",[t._v("广播地址用于在 "),_("strong",[t._v("同个链路中相互连接的主机之间发送数据包")]),t._v("。")]),t._v(" "),_("p",[t._v("广播地址可以分为本地广播和直接广播两种：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("在本地网络内广播的叫做本地广播")]),t._v("：例如网络地址为 192.168.0.0/24 的情况下，广播地址是 192.168.0.255 。因为这个广播地址的 IP 包会被路由器屏蔽，所以不会到达 192.168.0.0/24 以外的其他链路上。")]),t._v(" "),_("li",[_("strong",[t._v("在不同网络之间的广播叫做直接广播")]),t._v(": 例如网络地址为 192.168.0.0/24 的主机向 192.168.1.255/24 的目标地址发送 IP 包。收到这个包的路由器，将数据转发给 192.168.1.0/24，从而使得所有 192.168.1.1~192.168.1.254 的主机都能收到这个包（由于直接广播有一定的安全问题，多数情况下会在路由器上设置为不转发。）")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/option-star/imgs/202204111429344.jpeg",alt:"本地广播与直接广播"}})]),t._v(" "),_("h2",{attrs:{id:"_8-什么是d、e类地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-什么是d、e类地址"}},[t._v("#")]),t._v(" 8. 什么是D、E类地址？")]),t._v(" "),_("p",[t._v("​\t而 D 类和 E 类地址是没有主机号的，所以不可用于主机 IP，D 类常被用于"),_("strong",[t._v("多播")]),t._v("，E 类是预留的分类，暂时未使用。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/option-star/imgs/202204111430471.jpeg",alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"_9-多播地址用于什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-多播地址用于什么"}},[t._v("#")]),t._v(" 9. 多播地址用于什么？")])])}),[],!1,null,null,null);s.default=r.exports}}]);
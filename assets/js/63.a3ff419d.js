(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{715:function(_,v,t){"use strict";t.r(v);var s=t(12),r=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"_1-如何对项目中的图片进行优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何对项目中的图片进行优化"}},[_._v("#")]),_._v(" 1. 如何对项目中的图片进行优化")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("减少使用图片")]),_._v("： 使用CSS替换修饰类图片")]),_._v(" "),t("li",[t("strong",[_._v("移动端不加载原图")]),_._v("： 对于移动端来说，屏幕宽度就那么点，完全没有必要去加载原图浪费带宽。一般图片都用 CDN 加载，可以计算出适配屏幕的宽度，然后去请求相应裁剪好的图片。")]),_._v(" "),t("li",[t("strong",[_._v("小图使用base64格式")])]),_._v(" "),t("li",[t("strong",[_._v("雪碧图")]),_._v("： 多图标文件整合到一张图片")]),_._v(" "),t("li",[t("strong",[_._v("选择正确的图片格式")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("尽量使用WebP图片格式")]),_._v("： 因为对于同质量的图片，WebP具有更好的图像数据压缩算法，图片体积小")]),_._v(" "),t("li",[t("strong",[_._v("图标使用SVG图片格式")]),_._v("：svg图片格式放大不会失真。")]),_._v(" "),t("li",[t("strong",[_._v("照片使用JPEG图片格式")]),_._v(" ： 有更丰富的色彩")])])])]),_._v(" "),t("h2",{attrs:{id:"_2-常见的图片格式及使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-常见的图片格式及使用场景"}},[_._v("#")]),_._v(" 2. 常见的图片格式及使用场景")]),_._v(" "),t("p",[_._v("（1）"),t("strong",[_._v("BMP")]),_._v("，是无损的、既支持索引色也支持直接色的点阵图。这种图片格式几乎没有对数据进行压缩，所以BMP格式的图片通常是较大的文件。")]),_._v(" "),t("p",[_._v("（2）"),t("strong",[_._v("GIF")]),_._v("是无损的、采用索引色的点阵图。采用LZW压缩算法进行编码。文件小，是GIF格式的优点，同时，GIF格式还具有支持动画以及透明的优点。但是GIF格式仅支持8bit的索引色，所以GIF格式适用于对色彩要求不高同时需要文件体积较小的场景。")]),_._v(" "),t("p",[_._v("（3）"),t("strong",[_._v("JPEG")]),_._v("是有损的、采用直接色的点阵图。JPEG的图片的优点是采用了直接色，得益于更丰富的色彩，JPEG非常适合用来存储照片，与GIF相比，JPEG不适合用来存储企业Logo、线框类的图。因为有损压缩会导致图片模糊，而直接色的选用，又会导致图片文件较GIF更大。")]),_._v(" "),t("p",[_._v("（4）"),t("strong",[_._v("PNG-8")]),_._v("是无损的、使用索引色的点阵图。PNG是一种比较新的图片格式，PNG-8是非常好的GIF格式替代者，在可能的情况下，应该尽可能的使用PNG-8而不是GIF，因为在相同的图片效果下，PNG-8具有更小的文件体积。除此之外，PNG-8还支持透明度的调节，而GIF并不支持。除非需要动画的支持，否则没有理由使用GIF而不是PNG-8。")]),_._v(" "),t("p",[_._v("（5）"),t("strong",[_._v("PNG-24")]),_._v("是无损的、使用直接色的点阵图。PNG-24的优点在于它压缩了图片的数据，使得同样效果的图片，PNG-24格式的文件大小要比BMP小得多。当然，PNG24的图片还是要比JPEG、GIF、PNG-8大得多。")]),_._v(" "),t("p",[_._v("（6）"),t("strong",[_._v("SVG")]),_._v("是无损的矢量图。SVG是矢量图意味着SVG图片由直线和曲线以及绘制它们的方法组成。当放大SVG图片时，看到的还是线和曲线，而不会出现像素点。这意味着SVG图片在放大时，不会失真，所以它非常适合用来绘制Logo、Icon等。")]),_._v(" "),t("p",[_._v("（7）"),t("strong",[_._v("WebP")]),_._v("是谷歌开发的一种新图片格式，WebP是同时支持有损和无损压缩的、使用直接色的点阵图。从名字就可以看出来它是为Web而生的，什么叫为Web而生呢？就是说相同质量的图片，WebP具有更小的文件体积。现在网站上充满了大量的图片，如果能够降低每一个图片的文件大小，那么将大大减少浏览器和服务器之间的数据传输量，进而降低访问延迟，提升访问体验。目前只有Chrome浏览器和Opera浏览器支持WebP格式，兼容性不太好。")]),_._v(" "),t("ul",[t("li",[_._v("在无损压缩的情况下，相同质量的WebP图片，文件大小要比PNG小26%；")]),_._v(" "),t("li",[_._v("在有损压缩的情况下，具有相同图片精度的WebP图片，文件大小要比JPEG小25%~34%；")]),_._v(" "),t("li",[_._v("WebP图片格式支持图片透明度，一个无损压缩的WebP图片，如果要支持透明度只需要22%的格外文件大小。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);
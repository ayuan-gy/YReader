// import {Dimensions, Text, useWindowDimensions, View} from 'react-native';
import {Canvas, Glyphs, useFont} from '@shopify/react-native-skia';
import React, {useRef} from 'react';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import calculateTextCoordinates from 'src/util/calculateTextCoordinates';
import InfinitePager, {Preset} from 'react-native-infinite-pager';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const CanvasContent = () => {
  const count = useRef(0);
  // const windowHeight = useWindowDimensions().height;
  console.log('count', count.current++);
  const windowWidth = useWindowDimensions().width;
  const pageRef = useRef(null);
  const fontSize = 19;
  const font = useFont(require('src/assets/fonts/myFont.ttf'), fontSize);

  if (font === null) {
    return null;
  }
  const {getGlyphIDs, getTextWidth} = font;
  const config = {
    fontSize,
    lineHeight: 40,
    linePadding: 0,
    getTextWidth,
    getGlyphIDs,
    margin: {left: 15, right: 15, top: 0, bottom: 0},
  };
  let glyphs = calculateTextCoordinates(content, config);
  const renderPage = ({index}: {index: number}) => {
    if (!glyphs[index]) {
      return null;
    }
    return (
      <Canvas style={style.fullPage}>
        <Glyphs font={font} glyphs={glyphs[index].positions} />
      </Canvas>
    );
  };
  return (
    <GestureHandlerRootView style={style.warp}>
      <InfinitePager
        minIndex={-1}
        key="infinite-pager"
        ref={pageRef}
        style={style.flex}
        pageWrapperStyle={style.warp}
        PageComponent={renderPage}
        preset={Preset.SLIDE}
        pageBuffer={1}
        // initPage={page.offset}
        onPageChange={index => {
          // if (index === 8) {
          //   glyphs.push(...glyphs);
          // }
          console.log(
            '%c [ index ]-51',
            'font-size:13px; background:pink; color:#bf2c9f;',
            index,
          );
        }}
        // width={windowWidth}
      />
    </GestureHandlerRootView>
  );
};
export default CanvasContent;
var content = `第８章吞噬吸收
　　唐三道：“那你的妖神变，也是通过混血传承下来的？” 
　　青年咬牙切齿的道：“是的，一只豹妖侮辱了我母亲，后来有了我。” 
　　唐三道：“妖神变只有这一种可能可以获得吗？”;
　　青年道： “ 还有一种方法， 就是剥夺。 可以把自身的妖神变力量剥夺出来形成一种传承， 在短时间内传承给另一人， 如果那人能够契合， 那就有可能获得这份力量。 如果不能契合的话， 会死。 ”
　　唐三眼睛一亮， “ 那每个人能够接受几次传承？ 什么情况下会契合？ ”
　　青年道： “ 一般来说， 没有妖神之力传承的人， 是最容易契合的， 但也要看体质是否能够承受。 而已经有了一种妖神之力的人， 再想要传承， 就要看两种妖神之力是否能够彼此相容形成进化了。 ” ;
　　唐三道： “ 那这么说来， 是否可以从妖怪族和精怪族身上直接剥离妖神之力呢？ 让自己吸收这份力量， 促使自己的妖神变进化。 ”
　　青年一呆， “ 这、 这个… … ， 我不知道。 还可以这样吗？ 可如果从妖怪或者是精怪身上吞噬他们的血脉之力， 自己的血脉紊乱， 不就死了吗？ 肯定是不行的吧。 ”
　　唐三道： “ 或许可以试试。 ”
　　通过和这青年之间的交流， 他终于对这个世界的力量体系有了一点了解， 尤其是人类如何利用。 妖神变主要就是获取妖怪族和精怪族的血脉之力， 但因为是混血， 人类的血脉弱小， 所以， 肯定没有妖怪族和精怪族本身的力量强大。 但拥有妖神变能力之后的人类， 自然也要比普通人类强得多。 看来， 自己如果想要快速变强， 就需要在这妖神变上下功夫了。
　　“ 你有什么要交代的吗？ ” 唐三向那青年问道。
　　青年有些苦涩的道： “ 我叫诸嘉鑫， 我妈妈被那个豹妖虐待而死了， 在这个世界上， 我已经没有亲人了。 你小小年纪， 却拥有能够搏杀三阶狼妖的能力， 想必你的妖神变必定是非常强大的。 如果可能的话， 如果你也愿意帮帮咱们人类的话， 我希望你能加入我们的组织。 我就要死了， 你既然对妖神变感兴趣， 我可以把我的妖神之力传承给你， 至于是否吸收， 你自己决定， 但如果你觉得不够契合， 千万不要勉强。 ”
　　“ 你们的组织？ 叫什么？ 在什么地方？ ” 唐三好奇的问道。
　　诸嘉鑫道： “ 所有妖怪族和精怪族的大城市， 都有我们组织的身影。 具体联系人我不能给你， 但我相信， 如果你长大之后， 想要去找， 一定能够找得到。 我们组织的名字叫做救赎。 为了救赎人类而存在。 ”
　　一边说着， 他的脸上突然多了一抹酡红之色， 身体开始剧烈的颤抖起来， 淡黄色的光芒开始在他身上涌动， 他的眼神变得清澈起来。
　　“ 孩子， 你不用告诉我你是谁， 但我始终相信， 总有一天， 我们会推翻那些奴役我们的妖怪和精怪， 让人类真正成为这个世界的主人。 为此而救赎， 为此， 我们需要不断的努力， 不断的变得强大。 不要为我收尸， 不要暴露你自己， 好好长大， 好好变强。 人类， 万岁! ”
　　说道最后的时候， 他的声音已经开始变得微弱， 但那团黄色的光芒却是变得越来越强烈起来， 最终汇聚成一团黄色光球悬浮在他面前。
　　那黄色光球的光芒映衬着唐三稚嫩的面庞， 诸嘉鑫的眼神之中充斥着渴望， 也充斥着一种近乎于信仰一般的光彩， 在那光球最终形成的时候， 他缓缓软倒了下去。
　　光球就那么在空中若隐若现的悬浮着， 唐三能够感受到， 在其中似乎蕴含着一种奇特的力量， 而这份力量似乎正在开始消散， 随时都有消失的可能。 毕竟， 这是诸嘉鑫油尽灯枯时的传承。
　　没有过多的犹豫， 他抬起手， 将手掌覆盖在了那光球之上， 体内玄天功运转。
　　诸嘉鑫说了， 没有过妖神变的人， 最容易接受传承。 他当然没有， 他的力量来自于玄天功， 而拥有玄天功护体的他， 也对自己有足够的自信。 诸嘉鑫的妖神之力并没有很强， 也就是三阶左右的实力， 如果不妥， 至少不会对自己产生太大的负面影响。
　　而且， 他已经来到了这个世界， 想要去寻找爱人， 想要未来超脱出这个世界， 重回自己原本的世界， 就需要变强。 而现在， 借助这个世界的力量去变强， 显然是最容易的捷径。
　　黄色光团有些温热， 当他的手掌覆盖在那光团上的时候， 立刻就感觉到， 那光团之中的能量开始从自己掌心之中钻入体内。
　　唐三没有去直接吸收， 而是控制着引导着这些能量进入自己的右臂之后， 立刻用玄天功封闭住了经络， 不让这股能量继续深入自己身体。
　　他默默的感受着黄色光芒带来的变化。
　　令他有些惊讶的是， 当自己的玄天功能量与这妖神变的传承之力接触的时候， 这妖神变的传承之力似乎变得柔软了一般， 自然而然的就向玄天功能量中浸润进来， 非常的听话。 刚刚进入体内时它还有些躁动， 甚至有几分狂野的感觉， 可是， 一接触玄天功能量之后， 就立刻变得柔化了。
　　这是… …
　　唐三默默的运转玄天功， 他顿时发现， 那黄色能量居然迅速的就融入了自己的玄天功之中， 全身暖热之下， 他甚至都感觉到自己的玄天功提升了一截似的。 至少相当于数月苦修。
　　而那黄色能量， 似乎也潜移默化的对他的身体产生了一些改变， 血脉受到那黄色光芒的滋润， 潜移默化的开始了一些变化。
　　唐三能感觉到， 那是经络、 骨骼、 肌肉都在变强的变化。 这妖神变的传承， 对他来说， 就像是吃了补品一般， 滋补着自己的身体。
　　妖神变的能量能够被自己的玄天功吸收， 但这应该和诸嘉鑫所说的传承不同。 他都说了， 传承的时候是有危险的， 如果不够契合， 会有死亡的可能。 可自己在融合的过程中， 别说死亡了， 一点威胁也没感觉到， 玄天功能量似乎天然的就让这份妖神变的传承迅速被吸收了。
　　这就有点意思了。 等自己将这些传承之力全部消化之后， 不知道是否能够得到之前他所施展的那种豹闪的能力。
　　想到这里， 唐三突然产生个念头， 他快速来到一头三阶狼妖的尸体旁边， 将手按在它的尸体上。
　　玄天功运转， 向那狼妖体内注入能量。
　　狼妖刚死， 身体还是暖热的， 伴随着玄天功能量的注入， 唐三顿时感受到， 在这狼妖体内似乎有一股微弱的能量存在， 当自己的玄天功接触到这股能量的时候， 这股能量就像是遇到了吸铁石一般， 自然而然的被玄天功所吸附， 然后融入玄天功之中。
　　能量不多， 但唐三却完全可以肯定， 那是切实存在的。 这是狼妖的血脉之力？
　　请收藏本站： ｈｔｔｐｓ：／／ｗｗｗ．ｙｕｎｄｕ６．ｃｏｍ。 云读小说网手机版： ｈｔｔｐｓ：／／ｍ．ｙｕｎｄｕ６．ｃｏ`.replaceAll(
  ' ',
  '',
);
const style = StyleSheet.create({
  fullPage: {width: '100%', height: '100%'},
  flex: {flex: 1},
  warp: {
    width: '100%',
    height: '100%',
  },
});

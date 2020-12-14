const $ = require('meeko')
let Segment = require('segment')
let segment = new Segment()
segment.useDefault()

function similarity(x = [], y = []) {
  let [xy, xSq, ySq, len] = [0, 0, 0, x.length]
  for (let i = 0; i < len; i++) {
    xy += x[i] * y[i]
    xSq += x[i] ** 2
    ySq += y[i] ** 2
  }
  return xy / (Math.sqrt(xSq) * Math.sqrt(ySq))
}
// 开始分词
// https://finance.sina.com.cn/roll/2020-01-15/doc-iihnzahk4156789.shtml
let title = '北上广等调整共有产权住房管理政策 申购资格松绑'

let text = `价格便宜一半！ 共有产权房如何助力住房小康
　　周边房价6万元，一个住宅项目却只卖2.9万元，是不是很诱人？这种看上去很美好的事情，近两年来时常出现在共有产权住房项目上。
　　岁末年初，北京、上海、广州等地相继调整共有产权住房管理政策，在申购资格上多有“松绑”，符合一定条件的非户籍群体也可申购。
　　比如，1月10日，上海市公布了《上海市人民政府关于修改〈上海市共有产权保障住房管理办法〉的决定》（下称《决定》），自2020年2月1日起施行。
　　此次新政的一个主要变化是将非上海户籍常住人口纳入共有产权房的供应对象范围。《决定》提出，非上海市户籍家庭同时符合居住证持证和积分、住房、婚姻、缴纳社保、缴纳个税、收入和财产等条件的，可申请购买共有产权保障住房。
　　无独有偶，广州的共有产权住房也在向非户籍群体开放。1月7日，广州市住房和城乡建设局公布《广州市共有产权住房管理办法》，在申购资格上规定，本科学历申购共有产权住房不受户籍限制，单身申购人需要年满30岁。
　　易居研究院智库中心研究总监严跃进认为，近期共有产权住房实际上也出现了所谓“松绑限购”的内容，预计随着2020年全国共有产权住房建设的推进，后续申购方面的政策会放松，真正将共有产权住房推向市场，进一步体现了住房小康的政策目标和导向。
　　1月12日，北京市市长陈吉宁在北京“两会”上也表示，今年将优化共有产权住房分配政策。
　　有助于稳定房价数据
　　共有产权房政策微调的背后，一方面是进一步完善住房供应体系，另一方面也是现实所需。由于配套政策不尽完善，产权分割导致流转受限，一些共有产权房项目一度出现弃购现象。如果还将申购资格局限在户籍人口上，可能会出现共有产权房供需不能匹配的问题。
　　什么是共有产权住房？各地规定略有不同，但基本原则大同小异，共有产权房的特性包括：购房人和政府各分享一定比例产权，符合一定资格的人群方可购买，购房后的转让也有所限制等。
　　国内房产类型原本就较为复杂，廉租房、公租房、经济适用房、自住房、限价商品房、商品房等，分别对应从低收入到中高收入群体的多种住房诉求。
　　既然楼市如此纷繁，为何还要推出一个共有产权房？
　　中国房地产市场历来重购轻租，但纯商品房价格过高，低价的经济适用房和限价房又往往没有资格购买，城市夹心层——中等收入群体的购房诉求时常难以满足。
　　而共有产权房的适用群体则相对广泛，由于切分了产权，房产单价和总价都相对较低，一般民众也可以负担。同时，由于房产单价远低于周边纯商品房价，房地产企业的拿地价格也会随之大幅下降，地方政府在土地出让环节会损失部分收益，但可以通过持有部分房屋产权来弥补这部分损失。
　　“共有产权住房和普通住房的本质区别就是通过减少流动性来换取购房成本的降低。换言之，共有产权住房的转让是有一定的限制的，即政府回购优先，从而使得购房者的购房成本随之降低。”严跃进称。
　　如果操作得当，共有产权住房将是一个多方满意的产品，效果可谓一石三鸟：民众得以购买低价住房，满足居住需求；地方政府也不用像建设经济适用房那样无偿划拨土地；同时，由于共有产权住房总价要远低于周边同类型住宅，在一个城市房价上涨的背景下，政府推出一定数量的共有产权住房也有助于稳定当地房价。
　　“在解决刚需群体住房和稳定房价方面，共有产权住房肯定是发挥了很大作用的。”严跃进称。
　　这种期望中的多赢局面，将是地方推动共有产权住房的一大动力。
　　北京的25万套目标
　　推进共有产权住房，一线城市率先示范。住建部曾在2017年专门发文，支持北京市、上海市深化发展共有产权住房试点工作，大胆探索，力争形成可复制、可推广的试点经验。
　　北京住建委2017年曾表示，今后5年，北京将完成25万套共有产权住房供地，通过加快房源供应、公平合理分配，进一步稳定社会预期，抑制投资投机性购房需求。
　　据中原地产近日统计，2017~2019三年间，北京供应了包含居住属性的土地总计212宗地块（包括部分流标），其中共有产权住房地块就多达52宗。
　　土地供应出去了，是否能及时转化成房源？
　　2019年4月23日，北京住建委公开了共有产权住房的进展。北京市共有64个共有产权住房项目（含转化项目33个）实现了土地供应，可提供房源约6.55万套。
　　从数据上看，北京的共有产权住房供应量已经大幅增加，但作为新生事物，购房者对其接纳程度如何？
　　中原地产首席分析师张大伟表示，北京共有产权房从政策设置看，符合“房住不炒”的定位，剔除了投资属性后，从购买条件、使用情况看，都符合以自住为主的政策预期。
　　“从算账的角度看，共有产权已经没有投资价值。购房人买了共有产权房，未来通过共有产权房作为跳板，获得房屋升值的概率也已经非常低了。某种程度上，共有产权房实际变成了有部分产权的公租房，可以流转但投资属性弱。”张大伟称。
　　正是因为投资属性较低，加之一些共有产权住房项目位置较偏远，周边配套不尽完善，一些项目一度出现不少摇号中签家庭放弃选房的情况。张大伟表示，北京部分区域的共有产权住房项目出现了销售难的情况，但整体看，共有产权房整体去化比较好。
　　更令外界关注的是，北京还在2019年第一次利用集体土地建设共有产权住房。
　　2019年9月12日，北京上瑞置业有限公司以151283万元的价格，竞得北京大兴区瀛海镇YZ00-0803-2010、2013A、2013B、2014、2016地块。
　　这是一宗集体建设用地，按照规划，该宗地内将建设共有产权住房，销售均价为每平方米2.9万元，含全装修费用。地块规划建筑面积108059平方米，以成交价格计算，楼面价格约为1.4万元/平方米。
　　在集体建设用地上建设可公开对外销售的住房，这应是全国第一例。
　　不过，共有产权住房原本已经属于新生事物，而利用集体建设用地建共有产权房更是新上加新，这也导致外界的观望情绪较高。与上述成交地块一同挂牌的另外两宗集体建设用地，至今仍未成功出让。`
/**
 *
 * @param {String} text
 * @param {Integer} sentenceNum
 * @param {Array} split
 */
function abstract(
  text = '',
  sentenceNum = 3,
  split = ['，', '。', '；', '？', '：', '！', '…']
) {
  let splitArr = split
  let objText = segment
    .doSegment(text, {
      simple: true
    })
    .filter(x => !splitArr.includes(x))
    .count()

  text = text
    .replaceAll('\n', '')
    .replaceAll('　', '')
    .replaceAll(' ', '')
  let sentenceText = text
  for (let i = 0; i < splitArr.length; i++) {
    sentenceText = sentenceText.replaceAll(splitArr[i], '$#$')
  }

  let sentenceArr = sentenceText.split('$#$').filter(Boolean)

  const sentenceValArr = []
  let n = 0
  sentenceArr.forEach(item => {
    let r = segment
      .doSegment(item, {
        simple: true
      })
      .count()
    sentenceValArr.push([])
    for (let i in objText) {
      sentenceValArr[n].push(r[i] ? +r[i] : 0)
    }
    n++
  })

  //console.log(sentenceValArr, n)

  const sentenceSimArr = []
  const sentenceSimVal = []
  for (let i = 0; i < n; i++) {
    sentenceSimArr[i] = []
    for (let d = 0; d < n; d++) {
      let r = similarity(sentenceValArr[i], sentenceValArr[d])
      sentenceSimArr[i].push(r)
    }
    const simSum = $.math.sum(sentenceSimArr[i])
    sentenceSimVal.push({ idx: i, text: sentenceArr[i], sum: simSum })
  }
  //console.log(sentenceSimVal)

  const resultArr = []
  sentenceSimVal
    .orderBy(['sum'], ['desc'])
    .slice(0, sentenceNum)
    .orderBy(['idx'], ['asc'])
    .forEach(x => {
      resultArr.push(x.text)
    })
  return resultArr
}

let r = abstract(text)
console.log(r.join(','))

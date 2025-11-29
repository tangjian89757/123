import { SlideType, SlideData } from './types';
import { Flame, Brain, BookOpen, Clock, Activity, Anchor, Eye, Heart, Skull, Zap, ZoomIn, Hand } from 'lucide-react';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    type: SlideType.TITLE,
    title: "Ecce Homo: The Last Lucid Dream",
    subtitle: "瞧！這個人：最後的清醒夢",
    content: {
      details: "基於 VR 技術的尼采臨終精神世界重構與交互敘事體驗",
      // Author info removed as requested
    },
    // Dark textured background (Abstract/Rembrandt style) to allow CSS candle to pop
    backgroundImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1920&auto=format&fit=crop",
    note: "Theme: Darkness, Divinity, Blood"
  },
  {
    id: 2,
    type: SlideType.SPLIT_IMAGE_TEXT,
    title: "Project Overview",
    subtitle: "項目概況",
    content: {
      left: {
        title: "Immersive Biography Simulation",
        description: "VR 沉浸式傳記模擬",
        points: [
          "扮演尼采僅存的「理性人格」",
          "經歷臨終前的最後 10分鐘",
          "PC VR (Unreal Engine 5)",
          "Core: 生理上的「閉鎖綜合症」 vs 精神上的「哲學走馬燈」"
        ]
      },
      // Surreal: Dark moody room / mental space / psychological representation
      // Replaced broken link with a reliable high-quality Unsplash image
      image: "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?q=80&w=1000&auto=format&fit=crop"
    },
    // Hospital corridor / dark room texture
    backgroundImage: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 3,
    type: SlideType.SPLIT_IMAGE_TEXT,
    title: "Character & Motivation",
    subtitle: "人物原型與選題動機",
    content: {
      left: {
        title: "Friedrich Nietzsche (1900.8.25)",
        description: "肉體癱瘓 vs 精神炸藥",
        points: [
          "精神：自詡為「炸藥」與「超人」，主張權力意志",
          "肉體：癱瘓、失語、完全依賴他人，處於崩潰邊緣",
          "現代性隱喻：精神內耗的極致代表",
          "映射對象：試圖切斷社會聯繫、獨自承擔生存壓力的當代孤獨青年"
        ]
      },
      // Real Friedrich Nietzsche portrait from Wikimedia (Stable URL)
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg"
    },
    // Shattered glass or mirror effect for background
    backgroundImage: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 4,
    type: SlideType.CARDS,
    title: "Interaction Rationale",
    subtitle: "交互形式依據",
    content: [
      {
        title: "具身認知",
        en: "Embodied Cognition",
        desc: "將抽象哲學轉化為物理痛感。推巨石 = 永恆輪迴的重負；攀爬高塔 = 信仰的渴望。",
        icon: Brain
      },
      {
        title: "幽閉感模擬",
        en: "Claustrophobia",
        desc: "VR 頭顯的封閉性完美契合「肉體囚籠」的敘事需求。意識清醒但身體失控。",
        icon: ZoomIn
      },
      {
        title: "物敘事",
        en: "Object Narrative",
        desc: "參考《艾迪芬奇的記憶》，通過與關鍵物品（十字架、手稿、八音盒）的交互驅動劇情。",
        icon: Anchor
      }
    ],
    // Hands reaching in dark / VR hands style
    backgroundImage: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 5,
    type: SlideType.CONCEPT_BALANCE,
    title: "Creator's Intent",
    subtitle: "創作者意圖與價值觀",
    content: {
      leftSide: "超人哲學的傲慢 (輕)",
      rightSide: "人性的軟弱與同情 (重)",
      message: "承認軟弱並非羞恥，而是人性的回歸。真正的救贖不在於成為神，而在於對他者的同情與愛（擁抱馬匹）。"
    },
    // Abstract balance / scales / galaxy
    backgroundImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 6,
    type: SlideType.DIAGRAM,
    title: "Game Logic",
    subtitle: "遊戲邏輯結構",
    content: {
      time: "線性倒計時 (00:00 - 10:00) | 不可逆，增強死亡緊迫感",
      space: "螺旋下潛 (Spiral Descent) | 場景崩塌，墜入更深層潛意識",
      layers: [
        { name: "Layer A (現實因)", desc: "醫生的檢查、身體的痙攣" },
        { name: "Layer B (精神果)", desc: "意識世界的地震、光爆、海嘯" }
      ]
    },
    // Spiral staircase looking down
    backgroundImage: "https://images.unsplash.com/photo-1516820087679-573562479e44?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 7,
    type: SlideType.ICONS_GRID,
    title: "Gameplay Mechanics",
    subtitle: "核心玩法",
    content: [
      {
        title: "理性的提燈",
        subtitle: "The Lantern",
        desc: "照亮內心獨白，在「現實入侵」災難中提供唯一視野。",
        icon: Flame
      },
      {
        title: "生命體徵儀",
        subtitle: "UI System",
        desc: "顯示 BPM 與倒計時。心率影響畫面色調（躁狂紅/瀕死灰）。",
        icon: Activity
      },
      {
        title: "動作交互",
        subtitle: "Interaction",
        desc: "攀爬、揮鎚破壞、推阻重物、強制身體移動 (Body Horror)。",
        icon: Hand
      }
    ],
    // Dark corridor with a light source
    backgroundImage: "https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 8,
    type: SlideType.CARDS,
    title: "Key Features",
    subtitle: "核心亮點",
    content: [
      {
        title: "實時生死時速",
        en: "Real-time Countdown",
        desc: "10分鐘真實時間體驗。心跳停止即遊戲結束，無存檔點。",
        icon: Clock
      },
      {
        title: "雙重人格博弈",
        en: "Dual Persona",
        desc: "玩家是冷靜的「理性旁白」，目睹本體的瘋狂。從傲慢引用名言到名言崩塌。",
        icon: Skull
      },
      {
        title: "跨維度災難侵入",
        en: "Cross-Dimension Disaster",
        desc: "視聽通感設計：現實的強光檢查 = 意識的神罰光柱。",
        icon: Zap
      }
    ],
    // Intense red/abstract texture
    backgroundImage: "https://images.unsplash.com/photo-1495578942265-36477e84a779?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 9,
    type: SlideType.SCRIPT_TABLE,
    title: "Script Demo: Chapter 1",
    subtitle: "章節：光之死 (The Death of Light)",
    content: [
      {
        time: "00:00",
        reality: "醫生：「檢查眼底。光線會很強。」 (手電筒開啟)",
        vr: "[視覺] 1849年黑暗臥室。天花板裂開，神聖光柱射下。",
        monologue: "「光來了……只要引過來，父親就有救了。」"
      },
      {
        time: "00:45",
        reality: "妹妹：「拉上窗簾，別讓人看見。」",
        vr: "[交互] 攀爬《聖經》堆成的螺旋高塔。書本在腳下鬆動、腐朽。",
        monologue: "「我要爬上去……為了看到高處，必須站上屍體的堆疊。」"
      },
      {
        time: "02:15",
        reality: "醫生：「沒反應。視神經萎縮。關燈。」 (光線消失)",
        vr: "[災難] 指尖觸碰光的一瞬，光滅了。書塔解體。玩家失重墜落。",
        monologue: "「……滅了？不，根本就沒有神。上帝死了！是我們殺了他！」"
      },
    ],
    // God rays coming through darkness
    backgroundImage: "https://images.unsplash.com/photo-1507499739999-097706ad0327?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 10,
    type: SlideType.CONCLUSION,
    title: "Conclusion",
    subtitle: "1900年8月25日",
    content: {
      vision: "利用 VR 技術探索複雜哲學的感性表達邊界。",
      metaphor: "神死去了。人誕生了。"
    },
    note: "Q & A",
    // Aesthetic, ethereal, stardust, light at end of tunnel
    backgroundImage: "https://images.unsplash.com/photo-1531685250784-756994c59c2b?q=80&w=1920&auto=format&fit=crop"
  }
];
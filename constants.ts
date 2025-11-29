import { SlideType, SlideData } from './types';
import { Flame, Brain, BookOpen, Clock, Activity, Anchor, Eye, Heart, Skull, Zap, ZoomIn, Hand } from 'lucide-react';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    type: SlideType.TITLE,
    title: "Ecce Homo: The Last Lucid Dream",
    subtitle: "瞧！这个人：最后的清醒梦",
    content: {
      details: "基于 VR 技术的尼采临终精神世界重构与交互叙事体验",
      author: "MSc in Multimedia & Entertainment Technology (MScMET)",
      role: "汇报人：[你的名字]"
    },
    // Dark candle light, baroque style
    backgroundImage: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1920&auto=format&fit=crop",
    note: "Theme: Darkness, Divinity, Blood"
  },
  {
    id: 2,
    type: SlideType.SPLIT_IMAGE_TEXT,
    title: "Project Overview",
    subtitle: "项目概况",
    content: {
      left: {
        title: "Immersive Biography Simulation",
        description: "VR 沉浸式传记模拟",
        points: [
          "扮演尼采仅存的“理性人格”",
          "经历临终前的最后 10分钟",
          "PC VR (Unreal Engine 5)",
          "Core: 生理上的“闭锁综合征” vs 精神上的“哲学走马灯”"
        ]
      },
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" // Abstract split reality
    },
    // Hospital bed / dark room
    backgroundImage: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 3,
    type: SlideType.SPLIT_IMAGE_TEXT,
    title: "Character & Motivation",
    subtitle: "人物原型与选题动机",
    content: {
      left: {
        title: "Friedrich Nietzsche (1900.8.25)",
        description: "肉体瘫痪 vs 精神炸药",
        points: [
          "精神：自诩为“炸药”与“超人”，主张权力意志",
          "肉体：瘫痪、失语、完全依赖他人，处于崩溃边缘",
          "现代性隐喻：精神内耗的极致代表",
          "映射对象：试图切断社会联系、独自承担生存压力的当代孤独青年"
        ]
      },
      image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=800&auto=format&fit=crop"
    },
    // Shattered glass or mirror
    backgroundImage: "https://images.unsplash.com/photo-1506720165039-2e11a221f1d1?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 4,
    type: SlideType.CARDS,
    title: "Interaction Rationale",
    subtitle: "交互形式依据",
    content: [
      {
        title: "具身认知",
        en: "Embodied Cognition",
        desc: "将抽象哲学转化为物理痛感。推巨石 = 永恒轮回的重负；攀爬高塔 = 信仰的渴望。",
        icon: Brain
      },
      {
        title: "幽闭感模拟",
        en: "Claustrophobia",
        desc: "VR 头显的封闭性完美契合“肉体囚笼”的叙事需求。意识清醒但身体失控。",
        icon: ZoomIn
      },
      {
        title: "物叙事",
        en: "Object Narrative",
        desc: "参考《艾迪芬奇的记忆》，通过与关键物品（十字架、手稿、八音盒）的交互驱动剧情。",
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
    subtitle: "创作者意图与价值观",
    content: {
      leftSide: "超人哲学的傲慢 (轻)",
      rightSide: "人性的软弱与同情 (重)",
      message: "承认软弱并非羞耻，而是人性的回归。真正的救赎不在于成为神，而在于对他者的同情与爱（拥抱马匹）。"
    },
    // Abstract balance / scales / galaxy
    backgroundImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 6,
    type: SlideType.DIAGRAM,
    title: "Game Logic",
    subtitle: "游戏逻辑结构",
    content: {
      time: "线性倒计时 (00:00 - 10:00) | 不可逆，增强死亡紧迫感",
      space: "螺旋下潜 (Spiral Descent) | 场景崩塌，坠入更深层潜意识",
      layers: [
        { name: "Layer A (现实因)", desc: "医生的检查、身体的痉挛" },
        { name: "Layer B (精神果)", desc: "意识世界的地震、光爆、海啸" }
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
        title: "理性的提灯",
        subtitle: "The Lantern",
        desc: "照亮内心独白，在“现实入侵”灾难中提供唯一视野。",
        icon: Flame
      },
      {
        title: "生命体征仪",
        subtitle: "UI System",
        desc: "显示 BPM 与倒计时。心率影响画面色调（躁狂红/濒死灰）。",
        icon: Activity
      },
      {
        title: "动作交互",
        subtitle: "Interaction",
        desc: "攀爬、挥锤破坏、推阻重物、强制身体移动 (Body Horror)。",
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
    subtitle: "核心亮点",
    content: [
      {
        title: "实时生死时速",
        en: "Real-time Countdown",
        desc: "10分钟真实时间体验。心跳停止即游戏结束，无存档点。",
        icon: Clock
      },
      {
        title: "双重人格博弈",
        en: "Dual Persona",
        desc: "玩家是冷静的“理性旁白”，目睹本体的疯狂。从傲慢引用名言到名言崩塌。",
        icon: Skull
      },
      {
        title: "跨维度灾难侵入",
        en: "Cross-Dimension Disaster",
        desc: "视听通感设计：现实的强光检查 = 意识的神罚光柱。",
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
    subtitle: "章节：光之死 (The Death of Light)",
    content: [
      {
        time: "00:00",
        reality: "医生：“检查眼底。光线会很强。” (手电筒开启)",
        vr: "[视觉] 1849年黑暗卧室。天花板裂开，神圣光柱射下。",
        monologue: "“光来了……只要引过来，父亲就有救了。”"
      },
      {
        time: "00:45",
        reality: "妹妹：“拉上窗帘，别让人看见。”",
        vr: "[交互] 攀爬《圣经》堆成的螺旋高塔。书本在脚下松动、腐朽。",
        monologue: "“我要爬上去……为了看到高处，必须站上尸体的堆叠。”"
      },
      {
        time: "02:15",
        reality: "医生：“没反应。视神经萎缩。关灯。” (光线消失)",
        vr: "[灾难] 指尖触碰光的一瞬，光灭了。书塔解体。玩家失重坠落。",
        monologue: "“……灭了？不，根本就没有神。上帝死了！是我们杀了他！”"
      }
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
      vision: "利用 VR 技术探索复杂哲学的感性表达边界。",
      metaphor: "神死去了。人诞生了。"
    },
    note: "Q & A",
    // Smoke, void, ending
    backgroundImage: "https://images.unsplash.com/photo-1542384557-0e86f45a0502?q=80&w=1920&auto=format&fit=crop"
  }
];
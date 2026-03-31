import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft, ChevronRight,
  Target, Sparkles, AlertTriangle, ShoppingCart,
  Brain, FileText, FileCode, GitBranch,
  Layers, Eye, Palette, Code2, Terminal,
  CheckCircle, Shield, Users, Bot,
  ArrowRight, ArrowDown,
  BookOpen, Paintbrush, Wrench,
  Search, Scale, Beaker,
  MonitorSmartphone, PenTool
} from 'lucide-react';

import ClaudeCode from '@lobehub/icons/es/ClaudeCode';
import Cursor from '@lobehub/icons/es/Cursor';
import Cline from '@lobehub/icons/es/Cline';
import Windsurf from '@lobehub/icons/es/Windsurf';
import GithubCopilot from '@lobehub/icons/es/GithubCopilot';
import Copilot from '@lobehub/icons/es/Copilot';
import V0 from '@lobehub/icons/es/V0';
import Lovable from '@lobehub/icons/es/Lovable';
import Replit from '@lobehub/icons/es/Replit';
import Bolt from '@lobehub/icons/es/Amp';
import Trae from '@lobehub/icons/es/Trae';
import RooCode from '@lobehub/icons/es/RooCode';
import OpenHands from '@lobehub/icons/es/OpenHands';
import Dify from '@lobehub/icons/es/Dify';
import Coze from '@lobehub/icons/es/Coze';
import Junie from '@lobehub/icons/es/Junie';
import GeminiCLI from '@lobehub/icons/es/GeminiCLI';
import KiloCode from '@lobehub/icons/es/KiloCode';
import Goose from '@lobehub/icons/es/Goose';
import OpenCode from '@lobehub/icons/es/OpenCode';
import Qoder from '@lobehub/icons/es/Qoder';
import Zencoder from '@lobehub/icons/es/Zencoder';

// ─── Slide helper components ───────────────────────────────────────

const SectionHeader = ({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) => (
  <div className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-sm font-medium tracking-wide uppercase border ${color} mb-6`}>
    {icon}
    {label}
  </div>
);

const Card = ({ icon, title, desc, accent = 'zinc' }: { icon?: React.ReactNode; title: string; desc: string; accent?: string }) => {
  const borderColor = accent === 'emerald' ? 'border-emerald-800/60' : accent === 'rose' ? 'border-rose-800/60' : accent === 'amber' ? 'border-amber-800/60' : accent === 'blue' ? 'border-blue-800/60' : 'border-zinc-800/80';
  const iconBg = accent === 'emerald' ? 'bg-emerald-900/40 text-emerald-400' : accent === 'rose' ? 'bg-rose-900/40 text-rose-400' : accent === 'amber' ? 'bg-amber-900/40 text-amber-400' : accent === 'blue' ? 'bg-blue-900/40 text-blue-400' : 'bg-zinc-800 text-zinc-300';
  return (
    <div className={`p-6 md:p-7 rounded-2xl border ${borderColor} bg-zinc-900/50 flex flex-col gap-3`}>
      {icon && (
        <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center`}>
          {icon}
        </div>
      )}
      <h3 className="text-lg md:text-xl font-medium text-zinc-200">{title}</h3>
      <p className="text-zinc-400 text-base leading-relaxed">{desc}</p>
    </div>
  );
};

const FlowStep = ({ label, active = false }: { label: string; active?: boolean }) => (
  <div className={`px-5 py-2.5 rounded-lg text-base font-medium border ${active ? 'bg-zinc-100 text-zinc-900 border-zinc-100' : 'bg-zinc-900/50 text-zinc-400 border-zinc-800'}`}>
    {label}
  </div>
);

const FlowArrow = () => <ArrowRight size={20} className="text-zinc-600 flex-shrink-0" />;

const Quote = ({ children }: { children: React.ReactNode }) => (
  <div className="border-l-2 border-zinc-700 pl-6 py-2 text-zinc-400 italic text-lg md:text-xl leading-relaxed mt-8">
    {children}
  </div>
);

const BulletItem = ({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1.5 flex-shrink-0 text-zinc-500">{icon || <div className="w-2 h-2 rounded-full bg-zinc-600 mt-1.5" />}</div>
    <span className="text-zinc-300 text-lg md:text-xl leading-relaxed">{children}</span>
  </div>
);

// ─── Slides ────────────────────────────────────────────────────────

const slides = [
  // 0 — Title
  {
    id: 'title',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8 w-full max-w-5xl mx-auto px-8">
        <div className="inline-flex items-center justify-center p-5 bg-zinc-900 rounded-2xl mb-2 border border-zinc-800 shadow-lg">
          <Terminal className="w-14 h-14 text-zinc-300" />
        </div>
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight text-zinc-100">
          Agentic Coding
        </h1>
        <p className="text-3xl md:text-4xl text-zinc-400 font-light">
          工程实践
        </p>
      </div>
    )
  },

  // — Vibe usage
  {
    id: 'vibe-usage',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-8 gap-8">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100">Share as a Deep User</h2>
        <img src="/vibe-usage.png" className="max-h-[70vh] max-w-full rounded-2xl border border-zinc-800 object-contain" />
      </div>
    )
  },

  // 1 — Purpose
  {
    id: 'purpose',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-10 w-full max-w-5xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100">目的</h2>
        <p className="text-3xl md:text-5xl text-zinc-300 font-light leading-relaxed">
          通过 Coding Agent<br />完成复杂的编程任务与项目
        </p>
      </div>
    )
  },

  // 2 — User expectations
  {
    id: 'expectations',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-500 mb-16">我们想要</h2>
        <div className="space-y-8 w-full max-w-3xl">
          <p className="text-3xl md:text-5xl font-semibold text-zinc-100 leading-tight">做到自己做不到的事情</p>
          <p className="text-3xl md:text-5xl font-semibold text-zinc-100 leading-tight">少量注意力，<span className="text-emerald-400">大型产出</span></p>
          <p className="text-3xl md:text-5xl font-semibold text-zinc-100 leading-tight">一个人 <span className="text-emerald-400">10x</span> 生产力</p>
          <p className="text-3xl md:text-5xl font-semibold text-zinc-100 leading-tight">十个人 <span className="text-emerald-400">100x</span> 生产力</p>
        </div>
      </div>
    )
  },

  // 3 — Reality
  {
    id: 'reality',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-500 mb-16">实际上</h2>
        <div className="space-y-8 w-full max-w-3xl">
          <p className="text-3xl md:text-5xl font-semibold text-zinc-100 leading-tight">无法控制结果，<span className="text-rose-400">天差地别</span></p>
          <p className="text-3xl md:text-5xl font-semibold text-zinc-100 leading-tight">精力消耗<span className="text-rose-400">比自己写代码还大</span></p>
          <p className="text-3xl md:text-5xl font-semibold text-zinc-100 leading-tight">做出来的东西<span className="text-rose-400">千篇一律</span></p>
          <p className="text-3xl md:text-5xl font-semibold text-zinc-100 leading-tight">生产力 = <span className="text-rose-400">x / 人数</span></p>
        </div>
      </div>
    )
  },

  // 4 — Market teaches: prompt
  {
    id: 'market-1',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-500 mb-16">市场上在教什么</h2>
        <p className="text-3xl md:text-5xl font-semibold text-zinc-100 leading-tight text-center">
          一句话提示词完成应用开发
        </p>
        <div className="mt-12 flex items-center gap-6 justify-center w-full max-w-5xl">
          <img src="/one-sentence-1.png" className="h-56 md:h-72 rounded-xl border border-zinc-800 object-contain" />
          <img src="/one-sentence-2.png" className="h-56 md:h-72 rounded-xl border border-zinc-800 object-contain" />
          <img src="/one-sentence-3.png" className="h-56 md:h-72 rounded-xl border border-zinc-800 object-contain" />
        </div>
      </div>
    )
  },

  // 5 — Market teaches: skills/MCP
  {
    id: 'market-2',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-500 mb-16">市场上在教什么</h2>
        <p className="text-3xl md:text-5xl font-semibold text-zinc-100 leading-tight text-center">
          使用 skills / loop / MCP<br />一键生成完美 UI
        </p>
        <div className="mt-12 flex items-center gap-6 justify-center w-full max-w-5xl">
          <img src="/design-1.png" className="h-56 md:h-72 rounded-xl border border-zinc-800 object-contain" />
          <img src="/design-2.png" className="h-56 md:h-72 rounded-xl border border-zinc-800 object-contain" />
          <img src="/design-3.png" className="h-56 md:h-72 rounded-xl border border-zinc-800 object-contain" />
        </div>
      </div>
    )
  },

  // 6 — Market teaches: superpowers
  {
    id: 'market-3',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-500 mb-16">市场上在教什么</h2>
        <p className="text-3xl md:text-5xl font-semibold text-zinc-100 leading-tight text-center">
          使用 superpowers 和 gstack<br />你就能开公司
        </p>
        <div className="mt-12 flex items-center gap-6 justify-center w-full max-w-5xl">
          <img src="/power-1.png" className="h-56 md:h-72 rounded-xl border border-zinc-800 object-contain" />
          <img src="/power-2.png" className="h-56 md:h-72 rounded-xl border border-zinc-800 object-contain" />
          <img src="/power-3.png" className="h-56 md:h-72 rounded-xl border border-zinc-800 object-contain" />
        </div>
      </div>
    )
  },

  // 7 — Market teaches: multi-agent
  {
    id: 'market-4',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-500 mb-16">市场上在教什么</h2>
        <p className="text-3xl md:text-5xl font-semibold text-zinc-100 leading-tight text-center">
          多 agent 团队解千愁<br />agent kanban / task
        </p>
        <div className="mt-12 flex items-center gap-6 justify-center w-full max-w-5xl">
          <img src="/agent-team-1.png" className="h-56 md:h-72 rounded-xl border border-zinc-800 object-contain" />
          <img src="/agent-team-2.png" className="h-56 md:h-72 rounded-xl border border-zinc-800 object-contain" />
          <img src="/agent-team-3.png" className="h-56 md:h-72 rounded-xl border border-zinc-800 object-contain" />
        </div>
      </div>
    )
  },

  // 8 — Market insight
  {
    id: 'market-insight',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-10 w-full max-w-5xl mx-auto px-8">
        <p className="text-2xl md:text-4xl text-zinc-400 leading-relaxed max-w-3xl">
          这些东西都是很有用的，<br />但没有教我们怎么<span className="text-zinc-100 font-semibold">理解</span>和<span className="text-zinc-100 font-semibold">思考</span>
        </p>
        <p className="text-2xl md:text-4xl text-zinc-500 leading-relaxed max-w-3xl">
          相同的模型 / 工具使用起来，<br /><span className="text-zinc-100 font-semibold">效果天差地别</span>
        </p>
      </div>
    )
  },

  // 4 — Harness Engineering
  {
    id: 'harness',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-10 w-full max-w-5xl mx-auto px-8">
        <SectionHeader icon={null} label="核心概念" color="border-blue-700/50 text-blue-400 bg-blue-950/30" />
        <h2 className="text-5xl md:text-7xl font-semibold text-zinc-100 tracking-tight">
          Harness Engineering
        </h2>
        <p className="text-2xl md:text-3xl text-zinc-400 max-w-3xl leading-relaxed">
          通过输入<span className="text-zinc-200">语言</span>、<span className="text-zinc-200">文档</span>和<span className="text-zinc-200">其他资源</span>来控制合适的 Code Agent 完成 Code 或者 Design 的工作
        </p>
      </div>
    )
  },

  // 5 — Spec Kit problems
  {
    id: 'spec-problem',
    content: (
      <div className="flex flex-col h-full justify-center w-full max-w-6xl mx-auto px-8 md:px-16">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-5">Spec Kit 的困境</h2>
        <p className="text-zinc-500 mb-8 text-xl">我们实践的是 spec kit 理念，但我们得到的是——</p>
        <div className="space-y-5 mb-10">
          <BulletItem icon={<AlertTriangle size={20} className="text-amber-500" />}>复杂的，冗余的，和想法偏差极大的结果</BulletItem>
          <BulletItem icon={<AlertTriangle size={20} className="text-amber-500" />}>越迭代越复杂，各种兜底各种归一</BulletItem>
        </div>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 space-y-5">
          <p className="text-zinc-400 text-lg">Spec 希望你把每个具体的内容都写清楚，像另一种语言编译器：</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <FlowStep label="spec" />
            <FlowArrow />
            <FlowStep label="LLM" />
            <FlowArrow />
            <FlowStep label="code" />
          </div>
          <p className="text-zinc-500 text-lg text-center">每次都能生成相同的结果？</p>
        </div>
      </div>
    )
  },

  // 6 — Accept -> Boom
  {
    id: 'accept-boom',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-10 w-full max-w-5xl mx-auto px-8">
        <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-zinc-400">
          这样的复杂度和颗粒度下，你的<span className="text-zinc-100 font-semibold">意图怎么表达</span>？<br />
          怎么确认 agent 如何<span className="text-zinc-100 font-semibold">理解你的意图</span>？<br />
          如果所有的东西都要复查，是不是<span className="text-zinc-100 font-semibold">不如直接写代码</span>？
        </p>
        <div className="pt-4">
          <p className="text-zinc-500 text-xl mb-8">超过自己上下文理解能力的时候，人类会选择<span className="text-zinc-100 font-semibold">接受</span></p>
          <div className="flex items-center gap-4 justify-center flex-wrap">
            <span className="px-6 py-3 rounded-lg bg-zinc-800 text-zinc-400 text-2xl font-mono">Accept</span>
            <ArrowRight size={24} className="text-zinc-600" />
            <span className="px-6 py-3 rounded-lg bg-zinc-800 text-zinc-400 text-2xl font-mono">Accept</span>
            <ArrowRight size={24} className="text-zinc-600" />
            <span className="px-6 py-3 rounded-lg bg-zinc-800 text-zinc-400 text-2xl font-mono">LGTM</span>
            <ArrowRight size={24} className="text-zinc-600" />
            <span className="px-6 py-3 rounded-lg bg-rose-900/60 border border-rose-700/50 text-rose-300 text-2xl font-mono font-bold">BOOM</span>
          </div>
        </div>
      </div>
    )
  },

  // 7 — Core insight: convergence
  {
    id: 'convergence',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-10 w-full max-w-5xl mx-auto px-8">
        <h2 className="text-4xl md:text-6xl font-medium text-zinc-100 leading-snug max-w-4xl">
          编程是一个高质量的<br />
          <span className="text-emerald-400">从发散到收敛</span>的动态过程
        </h2>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
          我们需要动态的、可演进的外置状态（文档）来推进整个开发过程。<br />
          每个 step 都需要注意自己的<span className="text-zinc-200">颗粒度</span>以及<span className="text-zinc-200">注意力关键点</span>，<br />
          来保证意图的一致性与结果的可选性。
        </p>
      </div>
    )
  },

  // 8 — Contract model
  {
    id: 'contract',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-10 w-full max-w-5xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-2">Contract 模型</h2>
        <div className="flex items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-blue-900/30 border border-blue-700/40 flex items-center justify-center">
              <Users size={36} className="text-blue-400" />
            </div>
            <span className="text-zinc-300 text-lg md:text-xl font-medium">User</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <ArrowRight size={32} className="text-zinc-600" />
            <span className="text-zinc-600 text-sm">意图</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-amber-900/30 border border-amber-700/40 flex items-center justify-center">
              <FileText size={36} className="text-amber-400" />
            </div>
            <span className="text-amber-300 text-lg md:text-xl font-bold">Contract</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <ArrowRight size={32} className="text-zinc-600 rotate-180" />
            <span className="text-zinc-600 text-sm">执行</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-emerald-900/30 border border-emerald-700/40 flex items-center justify-center">
              <Bot size={36} className="text-emerald-400" />
            </div>
            <span className="text-zinc-300 text-lg md:text-xl font-medium">Agent</span>
          </div>
        </div>
        <p className="text-zinc-500 text-xl md:text-2xl max-w-3xl leading-relaxed mt-4">
          一份完全能传达想法和意图的<span className="text-amber-300">合同</span>以便于 Agent 执行，<br />
          同时 Agent 在擅长的领域<span className="text-emerald-400">补充</span>合同的内容
        </p>
      </div>
    )
  },

  // 9 — Building the system: clean kitchen
  {
    id: 'clean-kitchen',
    content: (
      <div className="flex flex-col h-full justify-center w-full max-w-6xl mx-auto px-8 md:px-16">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-8">构造和维护体系</h2>
        <p className="text-zinc-400 text-xl mb-10">每件事的起点必须是经过详细研究和决策的</p>
        <div className="space-y-5 mb-10">
          <BulletItem icon={<Search size={20} className="text-zinc-400" />}>搞清楚自己的意图</BulletItem>
          <BulletItem icon={<BookOpen size={20} className="text-zinc-400" />}>搞清楚基础的概念</BulletItem>
          <BulletItem icon={<Layers size={20} className="text-zinc-400" />}>搜寻和整理所有依赖的信息</BulletItem>
          <BulletItem icon={<Target size={20} className="text-zinc-400" />}>定义目标和方向，以及验证的方法</BulletItem>
        </div>
        <Quote>
          杂乱的厨房 vs 干净的厨房<br />
          确保当 agent 开始工作的时候，给到的信息和环境是有组织的、精确的
        </Quote>
      </div>
    )
  },

  // 10 — PLAN MODE overview
  {
    id: 'plan-mode',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8 w-full max-w-6xl mx-auto px-8">
        <SectionHeader icon={<FileText size={18} />} label="Plan Mode" color="border-amber-700/50 text-amber-400 bg-amber-950/30" />
        <h2 className="text-5xl md:text-6xl font-semibold text-zinc-100 tracking-tight mb-4">
          plan.md 是核心文档
        </h2>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 font-mono text-lg text-zinc-400 text-left max-w-xl w-full">
          <span className="text-amber-400">[ plan.md &gt; todo.md ]</span><br />
          <span className="text-zinc-600">[ research files ]</span>
        </div>
        <p className="text-zinc-500 text-xl max-w-3xl">
          分三个阶段递进，每个阶段都需要大量的 deep research<br />
          research files 是三个阶段中持续积累的研究和讨论素材
        </p>
        <div className="flex items-center gap-4 flex-wrap justify-center pt-2">
          <FlowStep label="问题与边界" />
          <FlowArrow />
          <FlowStep label="成功标准" />
          <FlowArrow />
          <FlowStep label="方案与验收" />
        </div>
      </div>
    )
  },

  // 11 — Phase 1: Problem & Boundary
  {
    id: 'phase-1',
    content: (
      <div className="flex flex-col h-full justify-center w-full max-w-6xl mx-auto px-8 md:px-16">
        <SectionHeader icon={<FileText size={18} />} label="Plan Mode · 阶段一" color="border-amber-700/50 text-amber-400 bg-amber-950/30" />
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-3">问题与边界</h2>
        <p className="text-amber-400/80 text-xl mb-8 font-medium">只写问题，不写解法</p>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 mb-10">
          <p className="text-zinc-500 text-base mb-2">不是：</p>
          <p className="text-zinc-400 text-lg mb-4">我想要 AE86</p>
          <p className="text-zinc-500 text-base mb-2">而是：</p>
          <p className="text-zinc-300 text-lg">我想要一辆上过秋名山的赛车，它需要…</p>
        </div>
        <div className="space-y-4">
          <BulletItem icon={<Search size={20} className="text-amber-400/70" />}>通过大量 deep research 和信息收集，确认概念与领域</BulletItem>
          <BulletItem icon={<Eye size={20} className="text-amber-400/70" />}>哪些是不知道的相关信息？哪些是要坚持的概念？</BulletItem>
          <BulletItem icon={<Scale size={20} className="text-amber-400/70" />}>同一个词模型的理解和自己的理解的误差</BulletItem>
          <BulletItem icon={<Shield size={20} className="text-amber-400/70" />}>通过多模型对抗淬炼——语义是千人千面的，模型也是</BulletItem>
        </div>
      </div>
    )
  },

  // 12 — Phase 2: Success Criteria
  {
    id: 'phase-2',
    content: (
      <div className="flex flex-col h-full justify-center w-full max-w-6xl mx-auto px-8 md:px-16">
        <SectionHeader icon={<FileText size={18} />} label="Plan Mode · 阶段二" color="border-amber-700/50 text-amber-400 bg-amber-950/30" />
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-3">成功标准</h2>
        <p className="text-amber-400/80 text-xl mb-10 font-medium">定义"做成了"长什么样</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <Card icon={<Target size={24} />} title="从现实约束出发" desc="不从开发者偏好出发" accent="amber" />
          <Card icon={<Scale size={24} />} title="目标可度量" desc="目标之间是否矛盾？" accent="amber" />
          <Card icon={<Bot size={24} />} title="Agent 校验合理性" desc="人用经验做取舍" accent="amber" />
          <Card icon={<Layers size={24} />} title="独立存在" desc="不是问题的附属，也不是方案的前言" accent="amber" />
        </div>
      </div>
    )
  },

  // 13 — Phase 3: Solution & Acceptance
  {
    id: 'phase-3',
    content: (
      <div className="flex flex-col h-full justify-center w-full max-w-6xl mx-auto px-8 md:px-16">
        <SectionHeader icon={<FileText size={18} />} label="Plan Mode · 阶段三" color="border-amber-700/50 text-amber-400 bg-amber-950/30" />
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-3">方案与验收</h2>
        <p className="text-amber-400/80 text-xl mb-10 font-medium">研究量最大的阶段</p>
        <div className="space-y-4 mb-10">
          <BulletItem icon={<Bot size={20} className="text-amber-400/70" />}>Agent 主导方案研究与对比，人基于偏好做方案选择</BulletItem>
          <BulletItem icon={<Wrench size={20} className="text-amber-400/70" />}>解决方案、技术路线、验证方案、设计选择...</BulletItem>
          <BulletItem icon={<Beaker size={20} className="text-amber-400/70" />}>包含 BDD 风格验收场景（Given / When / Then）</BulletItem>
          <BulletItem icon={<Shield size={20} className="text-amber-400/70" />}>验收场景是<span className="text-amber-300 font-medium">意图漂移检测器</span>——通不过说明意图传递失真</BulletItem>
        </div>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6">
          <p className="text-zinc-400 text-lg">最重要的是要解决：给到 agent 的基础环境与信息传递是怎么做的</p>
        </div>
      </div>
    )
  },

  // 14 — Doc:Code ratio
  {
    id: 'doc-ratio',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-10 w-full max-w-5xl mx-auto px-8">
        <h2 className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tight">
          文档 : 代码
        </h2>
        <div className="flex items-baseline gap-5">
          <span className="text-7xl md:text-9xl font-bold text-amber-400">&gt; 10</span>
          <span className="text-5xl md:text-7xl font-bold text-zinc-600">: 1</span>
        </div>
        <p className="text-zinc-500 text-xl max-w-2xl">
          一个质量比较好的项目，文档数量远超代码数量
        </p>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 text-lg text-zinc-400 max-w-2xl">
          如果一个项目有多人协作，<span className="text-zinc-200">PLAN 需要独立作为 commit 互相 review 和改善</span>
        </div>
      </div>
    )
  },

  // 15 — DESIGN MODE
  {
    id: 'design-mode',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8 w-full max-w-6xl mx-auto px-8">
        <SectionHeader icon={<Paintbrush size={18} />} label="Design Mode" color="border-purple-700/50 text-purple-400 bg-purple-950/30" />
        <h2 className="text-4xl md:text-6xl font-semibold text-zinc-100 tracking-tight mb-2">
          设计追求的是独特性
        </h2>
        <p className="text-zinc-500 text-xl md:text-2xl max-w-3xl mb-4">
          代码实现追求可靠性与一致性，设计追求的是独特性<br />
          设计的审美判断是非工程的——但设计的介质正在变成代码
        </p>
        <p className="text-zinc-500 text-lg max-w-3xl">
          新一代 agent-native 设计工具（<span className="text-zinc-200">Paper</span>、<span className="text-zinc-200">Pencil.dev</span>）——画布就是代码，存在 Git 里，没有 design-to-code 翻译环节
        </p>
        <div className="flex items-center gap-3 flex-wrap justify-center pt-4">
          <FlowStep label="目标定义" />
          <FlowArrow />
          <FlowStep label="信息架构" />
          <FlowArrow />
          <FlowStep label="交互逻辑" />
          <FlowArrow />
          <FlowStep label="风格探索" />
          <FlowArrow />
          <FlowStep label="风格定型" />
          <FlowArrow />
          <FlowStep label="风格实现" />
        </div>
      </div>
    )
  },

  // 16 — Two types of design decisions
  {
    id: 'design-decisions',
    content: (
      <div className="flex flex-col h-full justify-center w-full max-w-6xl mx-auto px-8 md:px-16">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-10">设计中的两类决策</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
          <div className="p-7 rounded-2xl border border-blue-800/60 bg-zinc-900/50">
            <div className="w-12 h-12 rounded-xl bg-blue-900/40 text-blue-400 flex items-center justify-center mb-5">
              <FileText size={26} />
            </div>
            <h3 className="text-xl font-medium text-blue-300 mb-3">逻辑决策</h3>
            <p className="text-zinc-500 text-base mb-3">需要什么、为什么</p>
            <p className="text-zinc-400 text-base">语言通道够用</p>
          </div>
          <div className="p-7 rounded-2xl border border-purple-800/60 bg-zinc-900/50">
            <div className="w-12 h-12 rounded-xl bg-purple-900/40 text-purple-400 flex items-center justify-center mb-5">
              <Eye size={26} />
            </div>
            <h3 className="text-xl font-medium text-purple-300 mb-3">空间与感知决策</h3>
            <p className="text-zinc-500 text-base mb-3">怎么组织、感受如何</p>
            <p className="text-zinc-400 text-base">需要视觉通道</p>
          </div>
        </div>
        <div className="space-y-3 text-lg text-zinc-500">
          <p><span className="text-blue-400">●</span> 目标定义 — 几乎全是逻辑决策</p>
          <p><span className="text-purple-400/60">●</span><span className="text-blue-400/60">●</span> 信息架构 / 交互逻辑 — 混合区域</p>
          <p><span className="text-purple-400">●</span> 风格探索之后 — 几乎全是感知决策</p>
        </div>
      </div>
    )
  },

  // 17 — Info-Layout: language & canvas iteration
  {
    id: 'info-layout',
    content: (
      <div className="flex flex-col h-full justify-center w-full max-w-6xl mx-auto px-8 md:px-16">
        <SectionHeader icon={<Paintbrush size={18} />} label="Design Mode" color="border-purple-700/50 text-purple-400 bg-purple-950/30" />
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-3">Info-Layout</h2>
        <p className="text-purple-400/80 text-xl mb-10 font-medium">语言和画布的短迭代</p>
        <div className="flex items-center gap-4 flex-wrap justify-center mb-10">
          <FlowStep label=".md（逻辑骨架）" />
          <span className="text-zinc-400 text-2xl">⇄</span>
          <FlowStep label="wireframe（空间验证）" />
        </div>
        <div className="space-y-4 mb-10">
          <BulletItem icon={<FileText size={20} className="text-purple-400/70" />}>.md 定义"有什么、为什么"</BulletItem>
          <BulletItem icon={<Eye size={20} className="text-purple-400/70" />}>wireframe 验证"放在哪、感受如何"</BulletItem>
          <BulletItem icon={<Layers size={20} className="text-purple-400/70" />}>两者互相约束——写出来合理的 8 个模块，画出来发现信息密度过高，砍到 5 个或分页</BulletItem>
        </div>
        <div className="flex items-center gap-3 flex-wrap justify-center text-zinc-500 text-lg">
          <span>语言定义</span><FlowArrow /><span>空间验证</span><FlowArrow /><span>修正定义</span><FlowArrow /><span>循环</span>
        </div>
      </div>
    )
  },

  // — Layout preview showcase
  {
    id: 'layout-preview',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-8 gap-6">
        <p className="text-2xl md:text-3xl text-zinc-400 font-medium">ascii 原型</p>
        <img src="/layout-preview.png" className="max-h-[75vh] max-w-full rounded-2xl border border-zinc-800 object-contain" />
      </div>
    )
  },

  // 18 — Style exploration
  {
    id: 'style-explore',
    content: (
      <div className="flex flex-col h-full justify-center w-full max-w-6xl mx-auto px-8 md:px-16">
        <SectionHeader icon={<Paintbrush size={18} />} label="Design Mode" color="border-purple-700/50 text-purple-400 bg-purple-950/30" />
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-3">风格探索</h2>
        <p className="text-purple-400/80 text-xl mb-10 font-medium">用眼睛，不用语言</p>
        <div className="space-y-5 mb-10">
          <BulletItem icon={<Eye size={20} className="text-purple-400/70" />}><span className="text-zinc-200 font-medium">variant.ai</span> — 滚动式探索，不写 prompt，看到喜欢的就深入</BulletItem>
          <BulletItem icon={<MonitorSmartphone size={20} className="text-purple-400/70" />}><span className="text-zinc-200 font-medium">Google Stitch</span> — 文本/图片/草图生成高保真 UI，支持多屏连贯生成</BulletItem>
          <BulletItem icon={<Palette size={20} className="text-purple-400/70" />}><span className="text-zinc-200 font-medium">各类 design web</span> — 直接浏览真实案例</BulletItem>
        </div>
        <Quote>
          生成是 agent 的，选择是人的。<br />
          大多数人和 agent 协作时，<span className="text-zinc-200">选择这一步是被跳过的</span>——不是做得不好。<br />
          永远要求多个选项，不要接受第一个输出。
        </Quote>
      </div>
    )
  },

  // — variant.ai showcase
  {
    id: 'variant-showcase',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-8">
        <img src="/variant.png" className="max-h-[80vh] rounded-2xl border border-zinc-800 object-contain" />
      </div>
    )
  },

  // 19 — Style finalization & implementation
  {
    id: 'style-implement',
    content: (
      <div className="flex flex-col h-full justify-center w-full max-w-6xl mx-auto px-8 md:px-16">
        <SectionHeader icon={<Paintbrush size={18} />} label="Design Mode" color="border-purple-700/50 text-purple-400 bg-purple-950/30" />
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-10">风格定型与实现</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="p-7 rounded-2xl border border-purple-800/50 bg-zinc-900/50 space-y-4">
            <h3 className="text-xl font-medium text-purple-300 mb-3">定型 — 把审美决策锁定为工程约束</h3>
            <div className="space-y-3">
              <BulletItem icon={<PenTool size={18} className="text-purple-400/70" />}><span className="text-zinc-200 font-medium">Paper / Pencil.dev</span> — agent-native 画布，设计直接就是 React + Tailwind 代码</BulletItem>
              <BulletItem icon={<Palette size={18} className="text-purple-400/70" />}><span className="text-zinc-200 font-medium">Design Token</span> — <span className="text-amber-300">最起码要学会的概念</span>，设计决策的工程化编码，agent 理解设计约束的唯一结构化通道</BulletItem>
            </div>
          </div>
          <div className="p-7 rounded-2xl border border-emerald-800/50 bg-zinc-900/50 space-y-4">
            <h3 className="text-xl font-medium text-emerald-300 mb-3">实现 — 交给 agent</h3>
            <div className="space-y-3">
              <BulletItem icon={<Terminal size={18} className="text-emerald-400/70" />}><span className="text-zinc-200 font-medium">Paper MCP / Pencil MCP</span> — agent 直接在画布上操作，产出就是可用组件</BulletItem>
              <BulletItem icon={<Code2 size={18} className="text-emerald-400/70" />}><span className="text-zinc-200 font-medium">Coding agent</span> — 基于 design token 约束生成代码，确保一致性</BulletItem>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // — Design token showcase
  {
    id: 'design-token',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-8">
        <img src="/design-token.png" className="max-h-[80vh] max-w-full rounded-2xl border border-zinc-800 object-contain" />
      </div>
    )
  },

  // — Want vs Get comparison
  {
    id: 'want-vs-get',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-8">
        <div className="flex items-center gap-8 md:gap-12 w-full justify-center">
          <div className="flex flex-col items-center gap-4 flex-1">
            <p className="text-2xl md:text-3xl font-medium text-zinc-300">你想要的</p>
            <img src="/what-do-you-want.png" className="w-full max-w-lg rounded-2xl border border-zinc-800 object-contain" />
          </div>
          <div className="flex flex-col items-center gap-4 flex-1">
            <p className="text-2xl md:text-3xl font-medium text-zinc-300">你得到的</p>
            <img src="/what-do-you-get.png" className="w-full max-w-lg rounded-2xl border border-zinc-800 object-contain" />
          </div>
        </div>
      </div>
    )
  },

  // 18 — CODE MODE
  {
    id: 'code-mode',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8 w-full max-w-6xl mx-auto px-8">
        <SectionHeader icon={<Code2 size={18} />} label="Code Mode" color="border-emerald-700/50 text-emerald-400 bg-emerald-950/30" />
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 font-mono text-lg text-zinc-400 text-left max-w-3xl w-full">
          <span className="text-emerald-400">[ plan.md + todo.md &gt; phase dev &gt; review &gt; verification &gt; replan / next phase ]</span><br />
          <span className="text-zinc-600">[ review files ] [ test files ]</span>
        </div>
        <div className="space-y-4 text-left max-w-3xl w-full">
          <BulletItem icon={<GitBranch size={20} className="text-emerald-400/70" />}>plan 完成后，agent 自主分解 todo，按 phase 执行</BulletItem>
          <BulletItem icon={<FileCode size={20} className="text-emerald-400/70" />}>每个 phase 产出代码 + review file + 测试结果</BulletItem>
          <BulletItem icon={<GitBranch size={20} className="text-emerald-400/70" />}>严格基于 git 版本管理，每个 phase 一个可回滚的节点</BulletItem>
          <BulletItem icon={<BookOpen size={20} className="text-emerald-400/70" />}>保留每一个执行 session，用来 trace 和解释</BulletItem>
        </div>
      </div>
    )
  },

  // 19 — Human role in execution
  {
    id: 'human-role',
    content: (
      <div className="flex flex-col h-full justify-center w-full max-w-6xl mx-auto px-8 md:px-16">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-4">人在执行阶段干什么？</h2>
        <p className="text-zinc-500 text-xl mb-10">不是改代码，是做两个判断——</p>
        <div className="space-y-7">
          <div className="p-7 rounded-2xl border border-emerald-800/50 bg-zinc-900/50">
            <h3 className="text-xl font-medium text-emerald-300 mb-5">① 这个 phase 的产出和验收场景对得上吗？</h3>
            <div className="flex items-center gap-4 flex-wrap text-base">
              <span className="text-zinc-400">对得上 →</span>
              <span className="px-4 py-1.5 rounded bg-emerald-900/40 text-emerald-300 border border-emerald-800/50">下一个 phase</span>
              <span className="text-zinc-600 mx-2">|</span>
              <span className="text-zinc-400">对不上 →</span>
              <span className="text-zinc-300">方案问题 or 意图问题？</span>
            </div>
          </div>
          <div className="p-7 rounded-2xl border border-blue-800/50 bg-zinc-900/50">
            <h3 className="text-xl font-medium text-blue-300 mb-5">② 修代码还是改 plan？</h3>
            <div className="space-y-3 text-base">
              <p className="text-zinc-400">方案细节问题（技术路线不通）→ <span className="text-zinc-300">code 层面调整</span></p>
              <p className="text-zinc-400">意图偏了 → <span className="text-amber-300">停下来，回 plan 修正</span></p>
            </div>
          </div>
        </div>
        <p className="text-amber-400/80 text-lg mt-8 font-medium">
          检测到意图漂移时，回 plan 层面修正是最重要的纪律
        </p>
      </div>
    )
  },

  // 20 — Fears: human & AI
  {
    id: 'fears',
    content: (
      <div className="flex flex-col h-full justify-center w-full max-w-6xl mx-auto px-8 md:px-16">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-10">最害怕的事</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-blue-400 font-medium mb-3">
              <Users size={24} />
              <span className="text-xl">人</span>
            </div>
            <div className="space-y-4">
              <BulletItem icon={<AlertTriangle size={18} className="text-rose-400" />}>几万行的合并代码</BulletItem>
              <BulletItem icon={<AlertTriangle size={18} className="text-rose-400" />}>未经沟通调整基础结构和 plan.md</BulletItem>
              <BulletItem icon={<AlertTriangle size={18} className="text-rose-400" />}>思路和理解不同的人</BulletItem>
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-emerald-400 font-medium mb-3">
              <Bot size={24} />
              <span className="text-xl">AI</span>
            </div>
            <div className="space-y-4">
              <BulletItem icon={<AlertTriangle size={18} className="text-rose-400" />}>提前收工，写出一堆 stub 或 TODO</BulletItem>
              <BulletItem icon={<AlertTriangle size={18} className="text-rose-400" />}>糊弄过关，自己骗自己的单元测试</BulletItem>
              <BulletItem icon={<AlertTriangle size={18} className="text-rose-400" />}>人类无法理解的冗余代码</BulletItem>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // 21 — Rules / How to prevent
  {
    id: 'rules',
    content: (
      <div className="flex flex-col h-full justify-center w-full max-w-6xl mx-auto px-8 md:px-16">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-10">怎么防？</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="p-7 rounded-2xl border border-blue-800/50 bg-zinc-900/50 space-y-4">
            <h3 className="text-xl font-medium text-blue-300 mb-3">对人的规则</h3>
            <div className="space-y-3">
              <BulletItem>一个人一个项目 / 模块，协作由一人主导</BulletItem>
              <BulletItem>先 review 对方的 plan.md，不是等代码写完才发现接口对不上</BulletItem>
              <BulletItem>拒绝没有文档的代码——AI 生成的代码量大，没文档很快变黑箱</BulletItem>
              <BulletItem>定期重构，重写代码</BulletItem>
            </div>
          </div>
          <div className="p-7 rounded-2xl border border-emerald-800/50 bg-zinc-900/50 space-y-4">
            <h3 className="text-xl font-medium text-emerald-300 mb-3">对 AI 的规则</h3>
            <div className="space-y-3">
              <BulletItem>任务颗粒度合适——太大偷工减料，太小管不过来</BulletItem>
              <BulletItem>多 agent 检查对抗——不让写代码的 agent 自己验证自己</BulletItem>
              <BulletItem>主动压缩和清理上下文，避免注意力衰减</BulletItem>
              <BulletItem>BDD 验收场景跑不过，不允许进入下一个 phase</BulletItem>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // — Coding Agents landscape
  {
    id: 'coding-agents',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-12">Coding Agents</h2>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-6">
          {[
            { Icon: ClaudeCode.Color, name: 'Claude Code' },
            { Icon: Cursor.Avatar, name: 'Cursor' },
            { Icon: Cline.Avatar, name: 'Cline' },
            { Icon: Windsurf.Avatar, name: 'Windsurf' },
            { Icon: GithubCopilot.Avatar, name: 'Copilot' },
            { Icon: V0.Avatar, name: 'v0' },
            { Icon: Lovable.Color, name: 'Lovable' },
            { Icon: Replit.Color, name: 'Replit' },
            { Icon: Bolt.Color, name: 'Bolt' },
            { Icon: Trae.Color, name: 'Trae' },
            { Icon: RooCode.Avatar, name: 'Roo Code' },
            { Icon: OpenHands.Color, name: 'OpenHands' },
            { Icon: Junie.Color, name: 'Junie' },
            { Icon: GeminiCLI.Color, name: 'Gemini CLI' },
            { Icon: KiloCode.Avatar, name: 'Kilo Code' },
            { Icon: Goose.Avatar, name: 'Goose' },
            { Icon: OpenCode.Avatar, name: 'OpenCode' },
            { Icon: Qoder.Color, name: 'Qoder' },
            { Icon: Zencoder.Color, name: 'Zencoder' },
            { Icon: Dify.Color, name: 'Dify' },
            { Icon: Coze.Avatar, name: 'Coze' },
          ].map(({ Icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <Icon size={40} />
              <span className="text-xs text-zinc-500">{name}</span>
            </div>
          ))}
        </div>
        <p className="text-zinc-600 text-sm mt-12 italic">not sponsored by above</p>
      </div>
    )
  },

  // — AI native organization
  {
    id: 'ai-native-org',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6 w-full max-w-5xl mx-auto px-8">
        <h2 className="text-5xl md:text-7xl font-semibold text-zinc-100 tracking-tight">
          The A.I Native Organization
        </h2>
        <p className="text-2xl md:text-3xl text-zinc-500 italic">
          off the record
        </p>
      </div>
    )
  },

  // — dimcode showcase
  {
    id: 'dimcode',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-8 gap-8">
        <img src="/dimcode.png" className="max-h-[40vh] rounded-2xl border border-zinc-800 object-contain" />
        <a href="https://dimcode.dev" target="_blank" rel="noopener noreferrer" className="text-2xl text-zinc-400 hover:text-zinc-100 transition-colors font-mono">
          dimcode.dev
        </a>
      </div>
    )
  },

  // 22 — Ending
  {
    id: 'ending',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8 w-full max-w-4xl mx-auto px-8">
        <img src="/wechat.jpg" className="w-[345px] h-[345px] rounded-2xl object-contain" />
        <h2 className="text-5xl md:text-7xl font-medium text-zinc-100 tracking-tight">
          Thanks
        </h2>
        <p className="text-2xl text-zinc-500 max-w-xl">
          Agentic Coding 工程实践
        </p>
        <a href="https://github.com/eric8810/agentic-coding-talks" target="_blank" rel="noopener noreferrer" className="text-lg text-zinc-500 hover:text-zinc-100 transition-colors font-mono">
          github.com/eric8810/agentic-coding-talks
        </a>
      </div>
    )
  }
];

// ─── Animation variants ────────────────────────────────────────────

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '5%' : '-5%',
    scale: 0.98,
    opacity: 0,
    filter: 'blur(4px)'
  }),
  center: {
    zIndex: 1,
    x: 0,
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)'
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '-5%' : '5%',
    scale: 0.98,
    opacity: 0,
    filter: 'blur(4px)'
  })
};

// ─── App ───────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < slides.length) {
      setDirection(newDirection);
      setPage(newPage);
    }
  }, [page]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        paginate(1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        paginate(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  // Swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) paginate(1);
    else if (distance < -minSwipeDistance) paginate(-1);
  };

  return (
    <div
      className="h-screen w-full bg-[#0d0d0d] text-zinc-100 flex flex-col font-sans overflow-hidden selection:bg-zinc-800 selection:text-zinc-100"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Main Slide Area */}
      <main className="flex-1 relative overflow-hidden flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/20 via-[#0d0d0d] to-[#0d0d0d]" style={{ zoom: 1.12 }}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.3, ease: 'easeOut' },
              filter: { duration: 0.3 }
            }}
            className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden"
          >
            {slides[page].content}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Controls */}
      <footer className="px-6 py-4 flex items-center justify-between border-t border-zinc-800/50 z-10 bg-[#0d0d0d]/80 backdrop-blur-md">
        <button
          onClick={() => paginate(-1)}
          disabled={page === 0}
          className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-md transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-zinc-400 cursor-pointer"
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="text-xs font-mono text-zinc-500 bg-zinc-900/50 px-3 py-1.5 rounded-full border border-zinc-800/50">
          {page + 1} <span className="text-zinc-700">/</span> {slides.length}
        </div>

        <button
          onClick={() => paginate(1)}
          disabled={page === slides.length - 1}
          className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-md transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-zinc-400 cursor-pointer"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={16} />
        </button>
      </footer>
    </div>
  );
}

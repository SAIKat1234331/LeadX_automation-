import React, { useState, useEffect } from 'react';
import { DemoProject } from '../types';
import {
  X,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  ArrowRight,
  ExternalLink,
  Info,
} from 'lucide-react';

interface ProjectModalProps {
  project: DemoProject | null;
  onClose: () => void;
  onSelectForInquiry: (serviceName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectForInquiry,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    setActiveStepIndex(0);
    setCompletedSteps([]);
    setIsSimulating(false);
  }, [project]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setCompletedSteps([]);
    setActiveStepIndex(0);

    let current = 0;
    const interval = setInterval(() => {
      setCompletedSteps((prev) => [...prev, current]);
      current++;
      if (current < project.workflowSteps.length) {
        setActiveStepIndex(current);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 900);
  };

  const handleResetSimulation = () => {
    setIsSimulating(false);
    setCompletedSteps([]);
    setActiveStepIndex(0);
  };

  const currentStep = project.workflowSteps[activeStepIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#121212] border border-[#262626] rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#262626] bg-[#0B0B0B]/80">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase bg-[#00FF88]/10 text-[#00FF88] border border-[#00FF88]/30">
              DEMO PROJECT
            </span>
            <span className="text-xs text-[#A1A1AA] hidden sm:inline">
              Conceptual Demonstration Workflow
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#262626] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF88]"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Title & Category */}
          <div>
            <div className="text-xs text-[#00FF88] font-semibold uppercase tracking-wider mb-1">
              {project.category}
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold font-heading text-white">
              {project.name}
            </h2>
            <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
              <span className="text-white font-medium">Business Challenge: </span>
              {project.problem}
            </p>
          </div>

          {/* Interactive Workflow Simulator */}
          <div className="p-5 rounded-xl bg-[#0B0B0B] border border-[#262626] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#262626]">
              <div>
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#00FF88]" />
                  <span>Interactive Workflow Architecture</span>
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  Click any stage or hit "Run Workflow Simulation" to observe data propagation.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={isSimulating}
                  onClick={handleRunSimulation}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00FF88] text-[#0B0B0B] font-semibold text-xs transition-all hover:bg-[#00e077] disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isSimulating ? 'Processing...' : 'Run Simulation'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetSimulation}
                  className="p-1.5 rounded-lg bg-[#171717] border border-[#262626] text-[#A1A1AA] hover:text-white transition-colors"
                  title="Reset Workflow"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Stepper Node Visualizer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {project.workflowSteps.map((step, idx) => {
                const isSelected = activeStepIndex === idx;
                const isDone = completedSteps.includes(idx);
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    className={`relative p-3 rounded-lg text-left transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-[#171717] border-[#00FF88] shadow-[0_0_15px_rgba(0,255,136,0.15)]'
                        : isDone
                        ? 'bg-[#121212] border-[#00FF88]/40'
                        : 'bg-[#121212] border-[#262626] hover:border-[#383838]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold text-[#A1A1AA]">
                        STEP 0{idx + 1}
                      </span>
                      {isDone ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF88]" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-[#262626]" />
                      )}
                    </div>
                    <div className="text-xs font-semibold text-white truncate">
                      {step.label}
                    </div>
                    <div className="text-[10px] text-[#A1A1AA] truncate mt-0.5">
                      {step.system}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step Detail Card */}
            {currentStep && (
              <div className="p-4 rounded-lg bg-[#141414] border border-[#262626] space-y-3 animate-in fade-in duration-150">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-mono text-[#00FF88]">
                      Stage {activeStepIndex + 1}: {currentStep.system}
                    </div>
                    <h4 className="text-sm font-semibold text-white mt-0.5">
                      {currentStep.label}
                    </h4>
                    <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                      {currentStep.action}
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800">
                    STATUS 200 OK
                  </span>
                </div>

                {/* Sample Payload Inspector */}
                {currentStep.samplePayload && (
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-wider text-[#A1A1AA] mb-1">
                      Data Payload Sample (Simulated):
                    </div>
                    <pre className="p-2.5 rounded bg-[#080808] border border-[#202020] text-[11px] font-mono text-zinc-300 overflow-x-auto">
                      {JSON.stringify(currentStep.samplePayload, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Tools & Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0B0B0B] border border-[#262626]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#00FF88]" />
                <span>Technologies & Integrations</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md text-xs bg-[#171717] border border-[#262626] text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0B0B] border border-[#262626]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF88]" />
                <span>Key Business Value</span>
              </h4>
              <ul className="space-y-1.5">
                {project.keyBenefits.map((benefit, i) => (
                  <li key={i} className="text-xs text-[#A1A1AA] flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#00FF88] mt-1.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Note Regarding Demo Status */}
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-950/20 border border-amber-900/30 text-[11px] text-amber-200/80">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              This is an interactive conceptual demonstration showing how LEADX AUTOMATION architects modular business workflows. Production implementations are custom-tailored to your actual credentials, tools, and business rules.
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#262626] bg-[#0B0B0B] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#A1A1AA]">
            Ready to implement a similar workflow for your team?
          </p>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-[#171717] border border-[#262626] text-xs font-medium text-white hover:bg-[#202020] transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onSelectForInquiry(project.category);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#00FF88] text-[#0B0B0B] text-xs font-semibold hover:bg-[#00e077] transition-all hover:shadow-[0_0_15px_rgba(0,255,136,0.2)]"
            >
              <span>Build This Workflow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

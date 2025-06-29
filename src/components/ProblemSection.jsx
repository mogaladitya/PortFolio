import React from "react";

const problems = {
  total: 3596,
  solved: 353,
  attempting: 29,
  easy: { solved: 179, total: 883 },
  medium: { solved: 164, total: 1868 },
  hard: { solved: 10, total: 845 },
};

const getPercent = (num, denom) => (denom === 0 ? 0 : (num / denom) * 100);

const ProblemSection = () => {
  const percent = getPercent(problems.solved, problems.total);

  return (
    <section className="flex justify-center items-center min-h-[350px] py-10">
      <div className="bg-[#181c23] rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 w-full max-w-2xl">
        {/* Circular Progress */}
        <div className="relative flex-shrink-0">
          <svg width="140" height="140" viewBox="0 0 140 140">
            <circle
              cx="70"
              cy="70"
              r="60"
              stroke="#23272f"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="70"
              cy="70"
              r="60"
              stroke="#64FFDA"
              strokeWidth="12"
              fill="none"
              strokeDasharray={2 * Math.PI * 60}
              strokeDashoffset={
                2 * Math.PI * 60 * (1 - percent / 100)
              }
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.6s" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">
              {problems.solved}
              <span className="text-lg text-gray-400">/{problems.total}</span>
            </span>
            <span className="text-green-400 text-sm mt-1">Solved</span>
            <span className="text-gray-400 text-xs">{problems.attempting} Attempting</span>
          </div>
        </div>
        {/* Difficulty Breakdown */}
        <div className="flex flex-col gap-4 w-full max-w-[200px]">
          <div className="flex items-center justify-between">
            <span className="text-[#64FFDA] font-semibold">Easy</span>
            <span className="text-sm text-gray-300">
              {problems.easy.solved}/{problems.easy.total}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-green-500"
              style={{ width: `${getPercent(problems.easy.solved, problems.easy.total)}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-yellow-400 font-semibold">Med.</span>
            <span className="text-sm text-gray-300">
              {problems.medium.solved}/{problems.medium.total}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-yellow-500"
              style={{ width: `${getPercent(problems.medium.solved, problems.medium.total)}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-red-400 font-semibold">Hard</span>
            <span className="text-sm text-gray-300">
              {problems.hard.solved}/{problems.hard.total}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500"
              style={{ width: `${getPercent(problems.hard.solved, problems.hard.total)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

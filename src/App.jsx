import {Crown} from 'lucide-react';

export default function Leaderboard () {

  const leaderboardData = [
    {
      rank: 1,
      player: "first",
      precision: "100%",
      recall: "96.82%",
      accuracy: "98.41%",
    },
    {
      rank: 2,
      player: "Wandenreich",
      precision: "100%",
      recall: "81.90%",
      accuracy: "90.95%",
    },
    {
      rank: 3,
      player: "Pixels",
      precision: "100%",
      recall: "33.33%",
      accuracy: "66.66%",
    },
    {
      rank: 4,
      player: "Hocus Focus",
      precision: "100%",
      recall: "25.39%",
      accuracy: "62.69%",
    },
    {
      rank: 5,
      player: "the riddles",
      precision: "40%",
      recall: "28.57%",
      accuracy: "24.60%",
    },
    {
      rank: 6,
      player: "Bit Code",
      precision: "0%",
      recall: "0%",
      accuracy: "50%",
    },
  ]

  return (
    <div className="w-full   mx-auto py-8 px-2 md:px-8  bg-[#7d032c]">
      <div className=" mx-auto p-2 md:p-8 bg-[#fdf6ed]">
        <h1 className="text-2xl font-medium text-center tracking-[0.3em] mb-8">LEADERBOARD</h1>
        <div className="rounded-lg overflow-hidden ">
          <div className="grid grid-cols-5 text-sm font-medium bg-[#e9dfd4] px-4 py-7">
            <div>Rank</div>
            <div>Player</div>
            <div className="text-right">Precision</div>
            <div className="text-right">Recall</div>
            <div className="text-right">Accuracy</div>
          </div>
          {leaderboardData.map((item, index) => (
            <div
              key={item.rank}
              className={`grid grid-cols-5 text-sm px-4 py-6 ${ index % 2 === 0 ? "bg-[#e9dfd4]/50" : "bg-[#e9dfd4]/30" }`}
            >
              <div >{item.rank} </div>
              <div className='flex relative'>{item.player} {index === 0 ? <Crown className='text-amber-300 absolute -top-5 -left-4 -rotate-18 ' /> : ""}</div>
              <div className="text-right">{item.precision}</div>
              <div className="text-right">{item.recall}</div>
              <div className="text-right">{item.accuracy}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


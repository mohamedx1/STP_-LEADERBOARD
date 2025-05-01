import {Crown} from 'lucide-react';
import Logo from './assets/LOGO.png'

export default function Leaderboard () {

  const leaderboardData = [
    {rank: 1,
      player: "Matrix",
      F1_Score: "61.15%",
    },
    {
      rank: 2,
      player: "DoseMate",
      F1_Score: "44.31%",
    },
    {
      rank: 3,
      player: "Crispy",
      F1_Score: "38.99%",
    },
    {
      rank: 4,
      player: "CuraBotics",
      F1_Score: "__%",
    },
        {
      rank: 5,
      player: "illLms",
      F1_Score: "__%",
    },



  ]

  return (
    <div className="w-full h-max  mx-auto py-8 px-2 md:px-8  bg-[#7d032c]">
      <img src={Logo} alt='Logo' className='w-28 mb-4 md:w-32' />
      <div className=" mx-auto p-2 md:p-8 bg-[#fdf6ed] rounded-2xl">
        <h1 className="text-2xl font-medium text-center tracking-[0.3em] mb-8">LEADERBOARD</h1>
        <div className="rounded-lg overflow-hidden ">
          <div className="grid grid-cols-5 text-sm font-medium bg-[#e9dfd4] px-4 py-7">
            <div>Rank</div>
            <div>Player</div>
            <div className="text-right">F1_Score</div>
{/*             <div className="text-right">CER</div>
            <div className="text-right">WER</div> */}
          </div>
          {leaderboardData.map((item, index) => (
            <div
              key={item.rank}
              className={`grid grid-cols-5 text-sm px-4 py-6 ${ index % 2 === 0 ? "bg-[#e9dfd4]/50" : "bg-[#e9dfd4]/30" }`}
            >
              <div >{item.rank} </div>
              <div className='flex relative'>{item.player} {index === 0 ? <Crown className='text-amber-300 absolute -top-5 -left-4 -rotate-18 ' /> : ""}</div>
              <div className="text-right">{item. F1_Score}</div>
{/*               <div className="text-right">{item.CER}</div>
              <div className="text-right">{item.WER}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


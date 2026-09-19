"use client"
import { useState } from 'react'

type Category = {
  name: string
  before: string
  after: string
}

const categories: Category[] = [
  {
    name: 'Trash Cans',
    before: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1600&q=85',
    after: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=1600&q=85',
  },
  {
    name: 'Lawn Care',
    before: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1600&q=85',
    after: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=85',
  },
  {
    name: 'Landscaping',
    before: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=85',
    after: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=85',
  },
]

export function BeforeAfter(){
  const [v,setV]=useState(50)
  const [category,setCategory]=useState(0)
  const current=categories[category]

  return <div className="before-after">
    <div className="before-after-tabs" role="tablist" aria-label="Service examples">
      {categories.map((item,i)=><button key={item.name} type="button" role="tab" aria-selected={category===i} onClick={()=>{setCategory(i);setV(50)}} className={category===i ? 'before-after-tab active' : 'before-after-tab'}>{item.name}</button>)}
    </div>

    <div className="before-after-frame">
      <div className="before-after-image before-after-before">
        <img src={current.before} alt={current.name + ' before service'} />
      </div>

      <div className="before-after-image before-after-after" style={{width:v + '%'}}>
        <img src={current.after} alt={current.name + ' after service'} />
      </div>

      <div className="before-after-label before-after-label-after">After</div>
      <div className="before-after-label before-after-label-before">Before</div>

      <input
        aria-label="Compare before and after"
        type="range"
        min="0"
        max="100"
        value={v}
        onChange={e=>setV(Number(e.target.value))}
        className="before-after-range"
      />

      <div className="before-after-handle" style={{left:'calc(' + v + '% - 20px)'}}>
        <div className="before-after-handle-line"/>
        <div className="before-after-handle-circle">↔</div>
        <div className="before-after-handle-line"/>
      </div>
    </div>
  </div>
}

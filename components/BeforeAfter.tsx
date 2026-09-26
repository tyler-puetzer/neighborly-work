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
    before: '/before-can.jpg?v=2',
    after: '/after-can.jpg?v=2',
  },
  {
    name: 'Lawn Care',
    before: '/lawn-before.png',
    after: '/lawn-after.jpg',
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
        <img src={current.before} alt={current.name + ' before service'} loading="lazy" />
      </div>

      <div
        className="before-after-image before-after-after"
        style={{clipPath:'inset(0 ' + (100 - v) + '% 0 0)'}}
      >
        <img src={current.after} alt={current.name + ' after service'} loading="lazy" />
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

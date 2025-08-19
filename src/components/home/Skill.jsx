import React from 'react'

const Skill = () => {

    const Progress = ({done,title})=>{
        return(
            <div className="progress">
                <div className="progress-done" style={{opacity: 1, width: `${done}%`}}>
                    <h4>{title}</h4>
                    <h4>{done} %</h4>
                </div>
            </div>
        )
    }

    const data = [
        {
            title: "Every Day is a New Challange",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione in, reprehenderit quidem inventore tempore consequuntur exercitationem ducimus necessitatibus dolorem dignissimos consectetur assumenda aliquid! Modi accusamus sequi quod corporis recusandae!",
            para1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione in, reprehenderit quidem inventore tempore consequuntur exercitationem ducimus necessitatibus dolorem dignissimos consectetur assumenda aliquid! Modi accusamus sequi quod corporis recusandae!",
        },
    ]

  return (
    <div>
        
      <section className='skill'>
        <div className="container">
            <div className="heading">
                <h3>WHY CHOOSE US</h3>
                <h1>Some Of My Skills</h1>
            </div>
            <div className="content flex">
                <div className="left topMargin">
                    <Progress done="90" title="HTML"/>
                    <Progress done="80" title="CSS"/>
                    <Progress done="75" title="TAILWIND CSS"/>
                    <Progress done="65" title="JAVASCRIPT"/>
                    <Progress done="20" title="NODE JS"/>
                    <Progress done="10" title="REACT JS"/>
                </div>

                <div className="right mtop">
                    {data.map((val)=>{
                        return(
                            <>
                            <h1>{val.title}</h1>
                            <p>{val.para}</p>
                            <p>{val.para1}</p>
                            <button className='primary-btn'>Hire Me</button>
                            </>
                        )
                    })}
                </div>

            </div>
        </div>
      </section>
    </div>
  )
}

export default Skill

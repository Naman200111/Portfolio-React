import React from 'react'
import './skills.css'

export default function skills() {
    return (
        <section className="section skills" id='skills'>
            <div className="section--heading">
                <h4>Skills</h4>
            </div>

            <div class="skills-div">
                <div className='skill-div'>
                    <div className='skill'>
                        <p className='skill_name '>C++ Programming</p>
                        <p className='skill_percent'>96%</p>
                    </div>
                    <div className='skill_bar'>
                        <div className='skill_bar_color C_prog'></div>
                    </div>
                </div>
                <div className='skill-div'>
                    <div className='skill'>
                        <p className='skill_name'>Data Structures and Algorithms</p>
                        <p className='skill_percent'>93%</p>
                    </div>
                    <div className='skill_bar'>
                        <div className='skill_bar_color DSA'></div>
                    </div>
                </div>
                <div className='skill-div'>
                    <div className='skill'>
                        <p className='skill_name'>Object Oriented Programming</p>
                        <p className='skill_percent'>80%</p>
                    </div>
                    <div className='skill_bar'>
                        <div className='skill_bar_color oops'></div>
                    </div>
                </div>
                <div className='skill-div'>
                    <div className='skill'>
                        <p className='skill_name'>Javascript</p>
                        <p className='skill_percent'>84%</p>
                    </div>
                    <div className='skill_bar'>
                        <div className='skill_bar_color js'></div>
                    </div>
                </div>
                <div className='skill-div'>
                    <div className='skill'>
                        <p className='skill_name'>React</p>
                        <p className='skill_percent'>82%</p>
                    </div>
                    <div className='skill_bar'>
                        <div className='skill_bar_color react'></div>
                    </div>
                </div>
                <div className='skill-div'>
                    <div className='skill'>
                        <p className='skill_name'>HTML</p>
                        <p className='skill_percent'>92%</p>
                    </div>
                    <div className='skill_bar'>
                        <div className='skill_bar_color HTML'></div>
                    </div>
                </div>
                <div className='skill-div'>
                    <div className='skill'>
                        <p className='skill_name'>CSS</p>
                        <p className='skill_percent'>88%</p>
                    </div>
                    <div className='skill_bar'>
                        <div className='skill_bar_color CSS'></div>
                    </div>
                </div>
            </div>

        </section>
    )
}

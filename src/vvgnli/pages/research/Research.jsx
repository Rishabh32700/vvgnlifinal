import React from 'react'
import ResearchRendering from './components/research__rendering/ResearchRendering'
import ResearchSubmenu from './components/reserach__submenu/ResearchSubmenu'


import './research.css'

import VvgnliMainMenu from '../../main__menu_vvgnli/VvgnliMainMenu'


const Research = () => {
  return (
    <>
    <VvgnliMainMenu />
        <div className="about research">
            <div className="about__container research__container">
                <ResearchSubmenu />
                <ResearchRendering />
            </div>
        </div>
    </>
  )
}

export default Research
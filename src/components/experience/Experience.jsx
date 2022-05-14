import React from 'react'
import "./experience.css"
import {SiMysql, SiMongodb} from 'react-icons/si'
import {DiJavascript1} from 'react-icons/di'
import {IoLogoNodejs, IoLogoPython} from 'react-icons/io'
import {FaCss3Alt, FaHtml5, FaBootstrap, FaReact, FaPhp} from 'react-icons/fa'

const Experience = params => {
  return (
    <article className="experience__details">
      <div className="ico">
        {params.experience_ico}
      </div>
      <div>
        <h4>{params.experience_name}</h4>
        <small>{params.experience_level}</small>
      </div>
    </article>
  );
};

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Fronted Development</h3>
          <div className="experience__content">
            <Experience experience_ico='<FaHtml5 />' experience_name='HTML' experience_level=''></Experience>

            <article className="experience__details">
              <div className="ico">
                <FaCss3Alt />
              </div>
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="ico">
                <DiJavascript1 />
              </div>
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="ico">
                <FaBootstrap />
              </div>
              <div>
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="ico">
                <FaReact />
              </div>
              <div>
                <h4>React JS</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
           <article className="experience__details">
              <div className="ico">
                <IoLogoNodejs />
              </div>
              <div>
                <h4>Node JS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="ico">
                <FaPhp />
              </div>
              <div>
                <h4>PHP</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="ico">
                <IoLogoPython />
              </div>
              <div>
                <h4>Python</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="ico">
                <SiMysql />
              </div>
              <div>
                <h4>MySQL</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div className="ico">
                <SiMongodb />
              </div>
              <div>
                <h4>MongoDB</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience

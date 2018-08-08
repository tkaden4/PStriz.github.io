import React from "react";

import _ from "underscore";
import classnames from "classnames";

import "./Profile.sass";

const info = {
    email: "strizhevp@gmail.com",
    phone: "4255555555"
};

const social_info = [
    /* name     icon (fa)   url linking to account */
    ["github", "fa-github", "https://github.com/pstriz"],
    ["linkedin", "fa-linkedin", ""],
    ["instagram", "fa-instagram", ""],
    ["twitter", "fa-twitter", ""]
];

const tech_skills = [
    ["C", 8],
    ["C++", 7],
    ["Java", 5],
    ["OpenCV", 6],
    ["Python", 7]
];

const art_skills = [
    ["Blender", 8],
    ["FL Studio", 7],
    ["Unity", 7],
    ["Music", 8],
    ["Zilch", 7]
];

const skills = [
    ["tech", tech_skills],
    ["art", art_skills]
];

const ContactInfo = ({ info }) =>
    <div className="contact-info">
        <SocialInfo info={social_info} />
        &nbsp;
        <span className="email">
            <a href={"mailto:" + info.email}>
                {info.email}
            </a>
        </span>
    </div>;

const SocialBadge = ({ name, icon, url }) =>
    <a href={url} target="_blank" className="social-badge"><i className={"fab " + icon}></i></a>;

const SocialInfo = ({ info }) =>
    <div className="social-info">
        {
            info.map(([name, icon, url], i) => <SocialBadge key={i} name={name} icon={icon} url={url} />)
        }
    </div>

const SkillMark = ({ active, category }) =>
    <div className={classnames("skill-mark", { "active": active, "art": category === "art", "tech": category === "tech" })}></div>;

const Skill = ({ name, value, category }) =>
    <div className="skill">
        <div className="skill-name">{name}</div>
        {_.range(0, 10).map((x, i) => <SkillMark key={i} active={x < value} category={category} />)}
    </div>;

const SkillCategory = ({ skills, category }) =>
    <div className="skill-category">
        {
            skills.map(([name, value], i) => <Skill key={i} name={name} value={value} category={category} />)
        }
    </div>;

const Skills = ({ skills }) =>
    <div className="skills">
        {
            skills.map(([category, data], i) => <SkillCategory key={i} skills={data} category={category} />)
        }
    </div>;

export const Profile = () =>
    <div className="profile-container">
        <div className="profile">
            <div className="header">
                Peter Strizhev
                <div className="sub">
                    <span className="tech">
                        Software Developer
                    </span>
                    &nbsp;
                    <span className="reset">
                        +
                    </span>
                    &nbsp;
                    <span className="art">
                        Game Designer
                    </span>
                </div>
            </div>
            <ContactInfo info={info} />
            <div className="description">
                Lorem ipsum dolor sit amet, quod senserit dignissim usu ad,&nbsp;
                <strong>Bellevue College</strong> choro an nam. Putent animal no sed. Ea sit exerci saperet
                elaboraret, usu ex quis graecis. Ne impedit disputationi mel. Vim
                ex inani menandri platonem, elit veniam consequuntur ne vis. In
                inani libris <strong>Skyline High School</strong> cum, quo dicant
                molestie in.
            </div>
            <Skills skills={skills} />
        </div>
    </div>;

export default Profile;
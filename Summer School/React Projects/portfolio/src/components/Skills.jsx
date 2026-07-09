import "../css/Skills.css"
function Skills(){
    const skills = ["HTML","CSS","JS","React","Node.js","MongoDB"]
    return(
        <section className="skills" id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {
                    skills.map(function(skills){
                        return (
                            <div className="skill-card">{skills}</div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Skills;
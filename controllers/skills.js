import { skills } from "../data/skill-data.js"
import { Skill } from "../models/skills.js"

function index(req, res) {
    Skill.find({})
    .then( skills =>{
        res.render('skills/index', {
            skills: skills,
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/')
    })
  }
  
  export {
      index
  }
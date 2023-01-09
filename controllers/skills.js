
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

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    console.log(req.body)
    req.body.acquired = false
    Skill.create(req.body)
    .then(skill => {
          // Notice we are doing a redirect here!
      res.redirect('/skills')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
  }

  function show(req, res) {
    Skill.findById(req.params.id)
    .then(skill => {
        res.render('skills/show', {
            skill: skill
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/skills')
    })
  }

  function deleteSkill(req, res) {
    Skill.findByIdAndDelete(req.params.id)
    .then(skill => {
        res.redirect('/skills')
    })
    .catch(error => {
        console.log(error)
        res.redirect('/skills')
    })
  }

  function edit (req, res) {
    // find skill by id
    Skill.findById(req.params.id)
    .then(skill => {
    //render view passing in skill
        res.render('skills/edit', {
            skill: skill
        })
    })
  }  

  function update(req, res) {
    //handle checkbox logic
    req.body.acquired = !!req.body.acquired
    //find skill by id and update
    Skill.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(skill => {
        //redirect back to show view
        red.redirect(`/skills/${skill._id}`)
    })
    .catch(error => {
        console.log(error)
        res.redirect('/skills')
    })

  }


  export {
      index,
      show,
      newSkill as new,
      create,
      deleteSkill as delete, 
      edit, 
      update
  }
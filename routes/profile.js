const express = require("express");
const Profile = require("../models/alumniProfile");
const app = express();

const router = express.Router();

/**
 * name
 * admission
 * batch
 * email
 * phone
 * url
 * _id
 */

router.get('/getAlumni/:id', async(req,res)=>{
    Profile.findById(req.params.id, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            return res.status(200).json({success:true,alumni:docs});
        }
    });
})
router.put("/update/:id", async (req, res) => {
  const {
    name,
    admission,
    batch,
    email,
    phone,
    description,
    branch,
    experience,
    worked,
    current,
    research,
    projects,
  } = req.body;

  const update_response = await Profile.updateOne(
    {
      _id: req.params.id,
    },
    {
      $set: {
        name,
        admission,
        batch,
        email,
        phone,
        description,
        branch,
        experience,
        worked,
        current,
        research,
        projects,
      },
    }
  );

  return res.status(200).json({
    success: true,
    message: "Job approved successfully",
  });
});

module.exports = router;

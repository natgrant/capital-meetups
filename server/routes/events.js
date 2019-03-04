const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  getAllEvents,
  getEventByCategory,
  getOneEvent,
  getEventsByCreator,
  createEvent,
  deleteEvent,
  editEvent,
  getAllCategories,
  getUserId
} = require("../db/events");

const { createSubscription } = require("../db/subscriptions");

router.use(express.json());

const config = {
  storage: multer.diskStorage({
    destination: function(req, file, next) {
      next(null, "./public/images");
    },
    filename: function(req, file, next) {
      const ext = file.mimetype.split("/")[1];
      next(null, file.fieldname + "-" + Date.now() + "." + ext);
    }
  }),
  fileFilter: function(req, file, next) {
    if (!file) {
      next();
    }
    const image = file.mimetype.startsWith("image/");
    if (image) {
      next(null, true);
    } else {
      next({ message: "Invalid file type." });
    }
  }
};

router.post("/event/photo", multer(config).single("photo"), function(
  req,
  res,
  next
) {
  let username = req.body.user;

  getUserId(username).then(userId => {
    let actualUserId = userId.id;
    console.log("filename", req.file.filename);
    console.log(req.body);
    let dateTime = JSON.stringify(req.body.date);
    let input = new Date(dateTime);
    let eventDateTime = input.getTime();
    const newEvent = {
      name: req.body.name,
      location: req.body.location,
      description: req.body.description,
      category: req.body.category,
      date: eventDateTime,
      image: req.file.filename,
      user_id: userId.id
    };
    console.log("test", newEvent);
    createEvent(newEvent, username)
      .then(([id], userId) => {
        console.log(id);
        console.log(actualUserId);
        eventId = id;

        createSubscription(actualUserId, eventId).then(response => {
          res.json(response);
        });
        // res.send("Saved");
      })
      .catch(err => {
        res.status(500).json({ error: "Oh no an error" });
      });
  });
});

//GET /api/v1/meetups
router.get("/", (req, res) => {
  getAllEvents()
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/category/:category", (req, res) => {
  const category = req.params.category;
  getEventByCategory(category)
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/creator/:id", (req, res) => {
  let id = req.params.id;
  getEventsByCreator(id)
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/categories", (req, res) => {
  getAllCategories()
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.get("/event/:id", (req, res) => {
  const eventId = req.params.id;
  getOneEvent(eventId)
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.post("/create/:user_id", (req, res) => {
  const userId = req.params.user_id;
  const newEvent = {
    user_id: req.params.user_id,
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
    category: req.body.category,
    date: req.body.date,
    is_open: req.body.is_open,
    type: req.body.type,
    image: req.body.image
  };
  createEvent(newEvent, userId)
    .then(([id]) => {
      res.json({ id });
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.delete("/delete/:id", (req, res) => {
  deleteEvent(req.params.id)
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.delete("/removeUser/:id", (req, res) => {
  removeEventByUserId(req.params.id)
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no an error" });
    });
});

router.post("/edit/:id", (req, res) => {
  let id = req.params.id;
  let event = req.body;
  editEvent(event, id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ error: "Oh no another error" });
    });
});

module.exports = router;

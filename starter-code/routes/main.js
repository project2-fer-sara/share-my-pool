const express = require('express');
const router = express.Router();
const Pool = require('../models/Pool');

/* GET home page. */
router.route('/')
	.get((req, res, next) => {
	  Pool.find((error, Pool) => {
	  	if (error) {
	  		next(error);
	  	} else {
	  		res.render('Pool/index', {
					Pool: Pool,
					PoolJSON:JSON.stringify(Pool)
				});
	  	}
	  });
	})
  .post((req, res, next) => {
    const newPool = {
      name:        req.body.name,
      description: req.body.description,
			location: {
				type: "Point",
				coordinates:[req.body.latitude, req.body.longitude]
			}
    };
		console.log(newPool);

  	Pool.save((error) => {
  		if (error) {
  			next(error);
  		} else {
  			res.redirect('/');
  		}
  	});

  });


router.route('/new')
	.get((req, res, next) => {
		res.render('Pool/new');
	});

router.route('/:Pool_id')
	.get((req, res, next) => {
		Pool.findById(req.params.Pool_id, (error, Pool) => {
			if (error) {
				next(error);
			} else {
				res.render('Pool/show', {Pool});
			}
		});
	})
	.post((req, res, next) => {
		Pool.findById(req.params.Pool_id, (error, Pool) => {
			if (error) {
				next(error);
			} else {
				Pool.name        = req.body.name;
				Pool.description = req.body.description;
				Pool.save((error) => {
		  		if (error) {
		  			next(error);
		  		} else {
		  			res.redirect('/');
		  		}
		  	});
			}
		});
	});

router.route('/:Pool_id/edit')
	.get((req, res, next) => {
		Pool.findById(req.params.Pool_id, (error, Pool) => {
			if (error) {
				next(error);
			} else {
				res.render('Pool/update', { Pool });
			}
		});
	});

router.route('/:Pool_id/delete')
	.get((req, res, next) => {
		Pool.remove({ _id: req.params.Pool_id }, function(error, Pool) {
	    if (error) {
	    	next(error);
	    } else {
	    	res.redirect('/');
	    }
    });
	});


router.route('/api/:Pool_id')
			.get( (req,res) => {
				let id = req.params.Pool_id;
				Pool.findById(id).exec().then( r => res.json(r));
			});


module.exports = router;

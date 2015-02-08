'use strict';

var mongoose = require('mongoose');

// Defining Model
// =====================================================

var Course = mongoose.model('Course', {
    class: String,
    grade: String,
    credits: Number
});

// Defining Routes
// =====================================================

exports.index = function(req, res) {
    Course.find(function (err, gpa) {
        if (err) {
            console.log("Error getting data from database");
            res.send(err)
        } else {
            res.json(gpa); // return results
        }
    });
};

exports.create = function(req, res) {
    Course.create(req.body, function (err, course) {
        if (err) {
            res.send(err);
        } else {
            Course.find(function (err, gpa) {
                if (err) {
                    res.send(err);find
                }

                res.json(gpa);
            });
        }
    });
};

exports.destroy = function(req, res) {
    Course.findById(req.params.gpa_id, function(err, course){
        if(err) { res.send(err); return "error: " + err; }
        if(!course) { return res.sendStatus(404); }

        course.remove(function(err){
            if(err) { return "error: " + err}
            return res.sendStatus(204);
        });
    });
};
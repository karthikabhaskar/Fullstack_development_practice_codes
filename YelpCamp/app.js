const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require('method-override')
const ejsMate=require('ejs-mate')
const Joi=require('joi')
const catchAsync=require('./utils/catchAsync')
const ExpressError=require('./utils/ExpressError')
const {campgroundSchema, reviewSchema} =require('./schemas.js')
const app = express()
const path = require("path")
const Campground = require('./models/campground');
const Review=require('./models/review')


mongoose.connect('mongodb://localhost:27017/yelp-camp')
const db = mongoose.connection;


db.on("error", console.error.bind(console, "connection error:"));//on() , you attach a full listener, versus when you use EventEmitter.
// once() , it is a one time listener that will detach after firing once.
db.once("open", () => {
    console.log("Database connected");
});

app.engine('ejs',ejsMate)


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//express. urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const validateCampground=(req,res,next)=>{
    
    const {error}=campgroundSchema.validate(req.body)
    
    if(error){
        const msg=error.details.map(el=>el.message).join(',')
    throw new ExpressError(msg,400)
    }
    else{
        next()
    }
}

// const validateReview=(req,res,next)=>{
//     const {error}=reviewSchema.validate(req.body);
//     if(error){
//         const msg=error.details.map(el=>el.message).join(',')
//     throw new ExpressError(msg,400)
//     }
//     else{
//         next()
//     }
// }
const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

app.get('/', (req, res) => {
    res.render('home');

})


app.get('/campgrounds', catchAsync(async (req, res) => {
    const campgrounds = await Campground.find()
    res.render('campgrounds/index', { campgrounds });

}))

app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');

})

//The req.body object allows you to access data in a string or JSON object from the client side.
//You generally use the req.body object to receive data through POST and PUT requests in the Express server.
app.post('/campgrounds', validateCampground,catchAsync( async(req, res, next) => {
 //if(!req.body.campground) throw new ExpressError('Invalid Campground Data',404)

    const campground = new Campground(req.body.campground);
    await campground.save()
    res.redirect(`/campgrounds/${campground._id}`)
   
}))

app.get('/campgrounds/:id', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/show', { campground });

}))

app.get('/campgrounds/:id/edit',catchAsync (async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit', { campground });
}))


app.put('/campgrounds/:id',validateCampground,catchAsync( async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    res.redirect(`/campgrounds/${campground._id}`)
}));

app.delete('/campgrounds/:id', async (req, res) => {
   
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
  
})

// app.post('/campgrounds/:id/reviews',validateReview,catchAsync( async (req, res) => {
//    const campground=await Campground.findById(req.params.id)
//    const review=new Review(req.body.review)
//    campground.reviews.push(review)
//    await review.save()
//    await campground.save()
//    res.redirect(`/campgrounds/${campground._id}`)

// }))
app.post('/campgrounds/:id/reviews', validateReview, catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}))

app.all('*',(req,res,next)=>{
    next(new ExpressError('Page Not Found',404))
})

app.use((err,req,res, next)=>{
    const {statusCode =500, message='Somethig went wrong'} =err;
    if(!err.message)err.message='Oh no, Something went wrong'
    res.status(statusCode).render('error',{err})
})

app.listen(3006, () => {
    console.log("Serving in port 3006")
})
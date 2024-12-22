//object destructuring....
const course={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "kartikey"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  //course ke andar courseinstructor ko instructor me change kr do
console.log(instructor)

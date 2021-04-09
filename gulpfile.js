const gulp = require("gulp")
const sass = require("gulp-sass")
const connect = require("gulp-connect")

gulp.task("html",done=>{
    
    gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload())
    done()
});

gulp.task("sass",done=>{
    gulp.src("sass*/scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())

    done();
})
gulp.task("server",done=>{
    connect.server({
        root:"dist",
        livereload:true

    })
    done();
});
gulp.task("watch",done=>{
    gulp.watch("*.html",gulp.series("html"));
    gulp.watch("sass/*.scss",gulp.series("sass"))
    done()
})

gulp.task("build",gulp.parallel("html","sass"));
gulp.task("default",gulp.series("build","server","watch"));


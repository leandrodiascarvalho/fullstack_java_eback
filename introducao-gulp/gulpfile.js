const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const mozjpeg = require("imagemin-mozjpeg");
const optipng = require("imagemin-optipng");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-imagemin"); // Ainda não utilizado
const uglify = require("gulp-uglify");
const resize = require("gulp-image-resize");

//compilar o SASS
function compilarSass() {
  return gulp
    .src("./src/scss/style.css")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
}

//otimizar imagens
function otimizarImagens() {
  return gulp
    .src("./src/img/*", { encoding: false })
    .pipe(
      imagemin([
        //mozjpeg({ quality: 75, progressive: true }),
        //optipng({ optimizationLevel: 5 }),
      ])
    )
    .pipe(gulp.dest("dist/img"));
}

//minificar js
function minificarJs() {
  return gulp
    .src("./src/js/script.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
}

//observar as mudanças nos arquivos
function observarArquivos() {
  gulp.watch("./src/scss/**/*.scss", compilarSass);
  gulp.watch("./src/img/*", otimizarImagens); // Descomentei esta linha
  gulp.watch("./src/js/*.js", minificarJs);
}

//tarefa padrão (executado pelo comando "gulp")
gulp.task(
  "default",
  gulp.parallel(
    compilarSass,
    otimizarImagens, // Descomentei esta linha
    minificarJs,
    observarArquivos
  )
);

// Tarefas individuais
gulp.task("sass", compilarSass);
gulp.task("images", otimizarImagens); // Descomentei esta linha
gulp.task("js", minificarJs);
gulp.task("watch", observarArquivos);

function redimensionaImagens() {
  return gulp
    .src("./src/img/*")
    .pipe(
      resize({
        width: 800,
        height: 600,
        crop: false,
        upscale: false,
      })
    )
    .pipe(gulp.dest("./dist/img-resized"));
}

gulp.task("resize", redimensionaImagens);

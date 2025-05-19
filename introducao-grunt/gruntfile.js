module.exports = function (grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false, // Não comprimir em desenvolvimento
          yuicompress: false,
        },
        files: {
          "dist/css/style.css": "src/css/style.less", // Arquivo de saída : Arquivo de entrada
        },
      },
      production: {
        options: {
          compress: true, // Comprimir em produção
          yuicompress: true,
        },
        files: {
          "dist/css/style.css": "src/css/style.less",
        },
      },
    },
    uglify: {
      options: {
        mangle: false, // Não alterar os nomes das variáveis (útil para debugging)
      },
      my_target: {
        files: {
          "dist/js/script.js": ["src/js/script.js"], // Arquivo de saída : Arquivo de entrada
        },
      },
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          "dist/index.html": "index.html", // Arquivo de saída : Arquivo de entrada
        },
      },
    },
  });

  // Carrega os plugins do Grunt
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");

  // Tarefa padrão a ser executada (pode ser alterada)
  grunt.registerTask("default", ["less:development", "uglify", "htmlmin"]);

  // Tarefa para produção (compila LESS comprimido)
  grunt.registerTask("build", ["less:production", "uglify", "htmlmin"]);
};

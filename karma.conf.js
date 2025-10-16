import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function(config) {
  config.set({
    // Frameworks
    frameworks: ["jasmine"],

    // Archivos de prueba
    files: [
      "src/**/*.spec.js"
    ],

    // Preprocesadores
    preprocessors: {
      "src/**/*.spec.js": ["webpack"]
    },

    // Configuración de Webpack
    webpack: {
      mode: "development",
      module: {
        rules: [
          // JS / JSX
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
              }
            }
          },
          // CSS
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          // Archivos de imagen si los importas en componentes
          {
            test: /\.(png|jpe?g|gif|webp|svg)$/i,
            type: "asset/resource"
          }
        ]
      },
      resolve: {
        extensions: [".js", ".jsx"]
      }
    },

    // Reportes
    reporters: ["progress", "coverage"],
    coverageReporter: {
      type: "html",
      dir: "coverage/"
    },

    // Navegadores
    browsers: ["ChromeHeadless"],
    singleRun: true,
    autoWatch: false
  });
}

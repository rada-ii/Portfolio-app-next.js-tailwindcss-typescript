module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/cv", // Change this path to the folder where you want to store the CV files
          },
        },
      ],
    });

    return config;
  },
};

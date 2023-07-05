// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(pdf)$/,
//       use: [
//         {
//           loader: "file-loader",
//           options: {
//             name: "[name].[ext]",
//             outputPath: "static/cv",
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };

// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true,
//     serverComponentsExternalPackages: ["mongoose"],

//   },
// };
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/cv",
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
};

module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./src"],
                extensions: [
                    ".ios.ts",
                    ".android.ts",
                    ".ts",
                    ".ios.tsx",
                    ".android.tsx",
                    ".tsx",
                    ".jsx",
                    ".js",
                    ".json",
                ],
                alias: {
                    "@": "./src",
                    "@assets": "./src/assets",
                    "@components": "./src/components",
                    "@config": "./src/config",
                    "@hooks": "./src/hooks",
                    "@routes": "./src/routes",
                    "@screens": "./src/screens",
                    "@services": "./src/services",
                    "@styles": "./src/styles",
                    "@utils": "./src/utils",
                    "@layout": "./src/layout",
                    "@types": "./src/types",
                    "@data": "./src/data",
                    "@navigation": "./src/navigation",
                    "@store": "./src/store",
                    "@public": "./public", // 추가된 부분: public 경로에 대한 alias
                },
            },
        ],
    ],
};

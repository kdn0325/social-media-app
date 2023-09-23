module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier", // 추가: prettier 플러그인 활성화
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json", // 프로젝트의 tsconfig.json 경로
    },
    plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": "error", // 추가: prettier 규칙 활성화
        indent: ["error", 4, { SwitchCase: 1 }],
        quotes: ["error", "double", { avoidEscape: true }],
    },
};

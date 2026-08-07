// Shared across frontend-shell/react-app/next-app - see
// @szczypkaweb/shared-ui's src/postcss-preset.cjs for the actual config,
// which prevents this 4-line plugin config from drifting between apps the
// same way globals.css already does for design tokens.
import config from "@szczypkaweb/shared-ui/postcss.config";

export default config;

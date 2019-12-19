//TODO!: Need to reserch
const path = require('path');
const {
    graphQL: { getUnionAndInterfaceTypes },
    Utilities: { loadEnvironment }
} = require('@magento/pwa-buildpack');
const baseWebpackConfig = require('@magento/venia-concept/webpack.config');
const { DefinePlugin, EnvironmentPlugin } = require('webpack');

module.exports = async ({ config: storybookBaseConfig, mode }) => {
    const projectConfig = loadEnvironment(
        path.resolve(__dirname, '../../venia-concept')
    );

    if (projectConfig.error) {
        throw projectConfig.error;
    }

    const unionAndInterfaceTypes = await getUnionAndInterfaceTypes();

    const [webpackConfig] = await baseWebpackConfig(mode);

    storybookBaseConfig.module = webpackConfig.module;
    storybookBaseConfig.resolve = webpackConfig.resolve;

    storybookBaseConfig.plugins = [
        ...storybookBaseConfig.plugins,
        new DefinePlugin({
            UNION_AND_INTERFACE_TYPES: JSON.stringify(unionAndInterfaceTypes),
            STORE_NAME: JSON.stringify('Storybook')
        }),
        new EnvironmentPlugin(projectConfig.env)
    ];

    return storybookBaseConfig;
};

import multiInput from 'rollup-plugin-multi-input';
import commonjs from '@rollup/plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default [
    {
        input: ['src/!(components)/**/*[!.test].js'],
        output: {
            format: 'cjs',
            dir: 'dist',
            exports: 'auto',
        },
        plugins: [
            multiInput(),
            commonjs(),
        ],
        external: [
            'eruda',
            'react-ga',
            '@vkontakte/vk-bridge',
            'konva',
            'react',
            'prop-types',
            'moment',
            'axios',
            'crypto-js',
            'crypto-js/md5',
            'react-router',
        ],
    },
    {
        input: ['src/components/index.js'],
        output: {
            format: 'cjs',
            dir: 'dist/components',
            exports: 'auto',
        },
        plugins: [
            resolve(
                { extensions: ['.js', '.jsx'] },
            ),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/env', '@babel/preset-react'],
            }),
            commonjs(),
        ],
        external: [
            'eruda',
            'react-ga',
            '@vkontakte/vk-bridge',
            'konva',
            'react',
            'prop-types',
            'moment',
            'axios',
            'crypto-js',
            'crypto-js/md5',
            'react-router',
        ],
    },
];

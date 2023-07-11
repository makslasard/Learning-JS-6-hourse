/*
Webpack-dev-server:

    - Для чего нам нужнен Webpack-dev-server
        Откроем какой-нибудь файл и попробуем что-нибудь добавить. Теперь откроем index.html файл который у нас
            уже собран. Откроем консоль и увидим что логи не обновились. Теперь чтобы нам увидеть изменения
            нам нужно заново собрать проект с помощью команды webpack

    Webpack-dev-server - при изменениях автоматически будет запускать сборку и отдавать нам обновленный файл        

    Когда webpack делает сборку, у нас же много файлов, например 10, а на выходе мы можем иметь только один файл,
        то в таком случае отследить ошибку сложно. Именно поэтому webpack делает devtool: 'inline-source-map'
        карты исходного кода по которым мы можем четко по стекрейсу мы можем увидеть где в какой функции, в каком файле
        произошла ошибка и соответственно эту ошибку поправить

        Поэтому в webpack мы добавим в функцию сборки конфига поле devtool: 'inline-source-map'
        Теперь мы четко можем видеть где в коде у нас произошла ошибка

    - Слудующим шагом нам предлагают выбрать инструмент для разработки
        1. Простой режим watch (Простой)
        2. webpack-dev-server (Что-то среднее, удовлетворит все наши потребности)
        3. webpack-dev-middleware (Продвинутый)

        Установка webpack-dev-server:
            - npm i -D webpack-dev-server@4.7.4 @types/webpack-dev-server@4.7.2


    - Настройка сервера разработки: Dev server
        В папке build создадим файл buildDevServer.ts по анологии с предыдущеми кейсами
            и создадим функцию по аналогии. В качестве параметров будет принимать опции

    import { BuildOptions } from "./types/config";
    import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

    export function buildDevServer(option: BuildOptions): DevServerConfiguration {
        return {
            
        }
    }

    У этого типа (DevServerConfiguration) большое кол-во настроек , но нам нужны только несколько:

        - port мы также его добавитм в тип buildOption и извне передадим в webpack.config
            По умолчанию это port: 3000. Позже мы его будем получать из переменной окружения

        - open: true
            Следующим можем указать свойство open оно будет нам автоматически в браузере открывать
            страницу с нашим приложением

            export function buildDevServer(option: BuildOptions): DevServerConfiguration {
                return {
                    port: option.port,
                    open: true
                }
            }

        В основной конфиг webpack.config добавляем devServer: buildDevServer(option)
            devServer: buildDevServer(option)

            export function buildWebpackConfig(option: BuildOptions): webpack.Configuration {
                const {mode, paths} = option

                return {
                    mode: mode,
                    entry: paths.entry,
                    output: {
                        filename: '[name].[contenthash].js',
                        path: paths.build,
                        clean: true,
                    },
                    plugins: buildPlugins(option),
                    module: {
                        rules: buildLoaders(),
                    },
                    resolve: buildResolves(),
                    devtool: 'inline-source-map',
                    devServer: buildDevServer(option)
                }
            }

    - В документации смотрим как запустить webpack-dev-server        
        Нужно в package.json в объект с скриптами добавить новый скрипт который мы нашки в документации
            "start": "webpack serve --open" в нашем случае open не обязательно
            
            И в терминале запустить команду npm start

*/
/*
Декомпозиция конфига:
    - Наш конфиг потихоньку начинает разрастаться, хотя мы только начали конфигурирование приложения
        и в дальнейшем нам нужно будет разделять production и development сборку иначе конфиг получиться
        совсем страшным. Большим нагромажденным с кучей условий именно поэтому его нужно декомпозировать и
        приводить к чистому читабельному виду

Начало работы:
    1. В корне проекта создадим папку config.
        В ней будет находиться все тестовая среда нашего приложения
            - Тестовые среды
            - Storybook
            - Webpack

        В папке config будут лежать подпапки в которых мы будем конфигурировать ту или иную среду
            Например:
                - Jest
                - ESLint (Если нам понадобиться писать какие-то плагины)
                - Build (Где мы будем описывать какие-то сценарии конфигурации webpack.config)

    Папка build
        - Тут мы для каждого webpack.config свойства будем создавать отдельный файл
            Например: buildPlugins.ts

            - Это будет простая функция которая будет возвращать нам список плагинов

                export function buildPlugins(): webpack.WebpackPluginInstance[] {
                    return [
                        new HtmlWebpackPlugin({
                            template: path.resolve(__dirname, 'public', 'index.html'),
                        }),
                        new webpack.ProgressPlugin(),
                    ]
                }

            Можно подумать что данная декомпозиция избыточна, но когда наш конфиг будет разрастаться    

            Далее нужно добавить типизацию. У webpack есть специальный тип для плагинов    
                webpack.WebpackPluginInstance[]

            И то что нужно нам сделать теперь в нашем webpack.config это сделать экспорт функции    
                output: {
                    filename: '[name].[contenthash].js',
                    path: path.resolve(__dirname, 'build'),
                    clean: true,
                },
                plugins: buildPlugins(), !!!
                module: {
                    rules: [
                        {
                            test: /\.tsx?$/,
                            use: 'ts-loader',
                            exclude: /node_modules/,
                        },
                    ],
                },

                Тоже самое мы теперь делаем с лоадерами
                    - Создадим файл buildLoaders.ts

                export function buildLoaders(): webpack.RuleSetRule[] {
                    return [
                        {
                            test: /\.tsx?$/,
                            use: 'ts-loader',
                            exclude: /node_modules/,
                        },
                    ]
                }

                Типизация для лоадеров: webpack.RuleSetRule[]

                Еще одна важная деталь на которую стоит акцентировать внимание это то что порядок 
                    при котором лоадеры возвращаються в массиве имеет значение и по хорошему нужно выносить
                    ладеры в отдельные переменны

                export function buildLoaders(): webpack.RuleSetRule[] {
                    const typescriptLoader = {
                        test: /\.tsx?$/,
                        use: 'ts-loader',
                        exclude: /node_modules/,
                    }

                    return [typescriptLoader]
}

    - Создадим отдельный файл для свойства webpack.config - resolve
        buildResolve.ts т.к это свойство тоже иногда разрастаеться        

            export function buildResolves(): ResolveOptions {
                return {
                    extensions: ['.tsx', '.ts', '.js'],
                }
            }

        Типизация resolve - ResolveOptions импортируеться из webpack    


        При текущих изменениях по оптимизации webpack.config он стал выглядеть понятней и чище     
        Если например нам нужно добавиться плагин мы идем в соответствующий файл

        При попытки запустить сборку webpack у нас появляется ошибка: Что webpack не может найти index.html 
            Все верно. Потому что когда мы переносили файл пути мы не исправили    

    
        - Мы сделаем конфигурацию конфига
            Сделаем такой механизм чтобы мы могли задавать эти пути еще на этапе до сборки. Задавать 
                какие-то опции из вне. Например port, path, address API с которыми будем работать
                например режим development или production

                Этим всем хорошо уметь управлять из вне

            1. Первое что мы сделаем это создадим тип где опишим все опции сборки
                - Первая опция это mode т.е development или production

                    Для этого мода мы создадим отдельный type и переменная с данным типом сможет принимать 
                        всего 2 значения 'development' | 'production'

                    export type BuilMode = 'development' | 'production'    

                    export interface BuildOptions {
                        mode: BuilMode,
                        paths: BuildPaths
                    }                    

                    Следующее свойство это пути paths. 
                        Путь до entry point, путь до папки куда мы делаем сборку
                            т.е любые пути которые будут использоваться в нашей сбоке и конфигурации
                            
                        Для нее создаем отдельный тип, отдельный interface

                    export interface BuildPaths {
                        entry: 'string'
                    }

                    На заметку:
                        Те пути которые мы используем через resolve мы не будем из хардкодить в конфиге
                        Мы будем принимать из вне опции в которых эти пути указаны

                        Таким образом мы сможем гибко адаптировать наш конфиг какими-то глобальными
                            внешними настройками

                            1. Путь до entry point
                            2. Путь до папки со сборкой это папка build
                            3. Путь до файла html который лежит в папке public


            - Следующим шагом создадим в папке build файл buildWebpackConfig.ts'
                Сюда мы перенесём все конфигурацию которую мы делали в корне проекта   

                    Мы создадим функцию buildWebpackConfig и эта функция будет собирать нам конфиг
                        она будет принимать набор опций для которых мы сделали соответсвтующий тип BuildOptions
                        и функция будет возвращать тип webpack.Configuration

                        {
                            mode: 'development',
                            entry: path.resolve(__dirname, 'src', 'index.ts'),
                            output: {
                                filename: '[name].[contenthash].js',
                                path: path.resolve(__dirname, 'build'),
                                clean: true,
                            },
                            plugins: buildPlugins(),
                            module: {
                                rules: buildLoaders(),
                            },
                            resolve: buildResolves(),
                        }

                        И переносим данный объект в функцию конфигурации webpack.config
                        Это делаеться исключительно для декомпозии, для удобства, для большей гибкости

                        Далее в webpack.config передаем функцию которая собирает весь конфиг из разных
                            файлов и объект с настройками и передать соответствующие опции

                        Т.к у нас все отдельные модули были протипизированы с помощью autocomplete
                        ctl + space мы можем понять какие поля требуются для работы. Это поле mode
                        и список путей paths

                        Он будет объектом где мы указываем пути до файлов которые указали в типизации BuildPaths

        - Добавление свойства в tsconfig
            "baseUrl": "." - пока укажем текущую папку. Это нужно для указания абсолютного импорта                

        - Деструктруризация объекта с option в webpack.config                
            для того чтобы использовать свойства более удобно            

                const paths: BuildPaths = {
                    entry: path.resolve(__dirname, 'src', 'index.ts'),
                    build: path.resolve(__dirname, 'build'),
                    html: path.resolve(__dirname, 'public', 'index.html'),
                }

                const configWebpack: webpack.Configuration = buildWebpackConfig({
                    mode: 'development',
                    paths,
                })        

                И также нам нжуно все пути передать до нужных файлов

                Таким образом пути в нашей конфигурации мы явно нигде не указываем мы передаем их
                    из вне в функцию

                Также для удобства добавим еще одно поле в опции - это поле isDev: boolean
                Но для того чтобы его правильно задать нам нужно вынести его в отдельную переменную
                Потом мы будем получать эту переменную на уровне переменных окружения

                Получаеться isDev === true, тогда когда mode === 'development'


Вывод:
    1. Декомпозировали config
    2. Сделали опции с помощью которых мы можем управлять сборкой
        Это все в дальнейшем сильно упростит нам жизнь. Конфиг будет читабельным, он не будет
            разрастаться до огромных масштабов которые нереально поддерживать






































































































*/
# Laravel и React (c Vite) на одном домене

## Запуск

Добавить в `/etc/hosts` запись:

```
127.0.0.1 react-laravel-app.local
```

Создать .env:

```
cp .env.example .env
```

Запустить проект в docker:

```
docker compose up -d
```

Установить зависимости composer:

```
docker compose exec backend composer install
```

Открыть в браузере http://react-laravel-app.local

Можно менять код на React. Изменения будут отображаться в браузере

## Сборка frontend для production

Запускаем команду сборки в контейнере node:

```
docker-compose exec node /bin/bash -lc 'npm run build'
```

В папке public/build появятся файлы сборки.

Чтобы на локальный сайт подключилась версия для production отключаем контейнер node (где запущен vite):

```
docker-compose stop node
rm public/hot
```

Важно, чтобы не стало файла `public/hot`!

Если нужно сборку для production хранить в репозитории, то убрать папку /public/build из .gitignore.

Чтобы после этих операций снова работать с vite запускаем контейнер node:

```
docker-compose start node
```

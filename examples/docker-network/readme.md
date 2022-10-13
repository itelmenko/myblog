# Общая сеть для 2 отдельных проектов

## Запуск окружений

```sh
cd project 1
docker compose up -d    

cd ../project2
docker compose up -d    
```

## Проверка доступности доменов обоих проектов из контейнера первого
```sh
cd project 1
# Будет выдача Welcome to nginx! в обоих случаях
docker compose exec web curl project1.local 
docker compose exec web curl project2.local 
```

## Проверка доступности доменов обоих проектов из контейнера второго
```sh
cd project 2
# Будет выдача Welcome to nginx! в обоих случаях
docker compose exec web curl project1.local 
docker compose exec web curl project2.local 
```
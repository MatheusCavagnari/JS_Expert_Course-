docker run \
  --name postgres \
  -e POSTGRES_USER=matheuscavagnari \
  -e POSTGRES_PASSWORD="senha0001" \
  -e POSTGRES_DB=heroes \
  -d \
  postgres

  docker run --name postgres -e POSTGRES_USER=matheuscavagnari  -e POSTGRES_PASSWORD="senha0001"  -e POSTGRES_DB=heroes  -p 5432:5432  -d  postgres

  docker logs postgres
  docker exec -it postgres psql --username matheuscavagnari --dbname heroes
  CREATE TABLE  warriors(id serial PRIMARY KEY, name VARCHAR (255) NOT NULL);
  SELECT * FROM warriors;

  #mongo
docker run \
  --name mongodb \
  -e MONGO_INITDB_ROOT_USERNAME=matheuscavagnari \
  -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
  -p 27017:27017 \
  -d \
  mongo:4
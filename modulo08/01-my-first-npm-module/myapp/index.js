import FluentSQLBuilder from "@matheuscavagnari/fluentsql";

import database from './database/data.json'

const result = FluentSQLBuilder.for(database)
  .where({ registered: /^(2020|2019)/ })
  .select(['category'])
  .limit(3)
  .countBy('category')
  .build()
console.log(result) 
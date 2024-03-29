import app from "./App";
import { MongoDBConnection } from "./database/MongoDBConnection";
const PORT = 4000;

app.removeAllListeners();
app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
  MongoDBConnection.getInstance().connect();
});

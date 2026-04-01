import app from "./app.js";
import { PORT } from "./config/dotenv.js";
import { testConnection } from "./config/db.js";

(async () => {
  await testConnection();
  app.listen(PORT, () => console.log(`🚀 API running on port ${PORT}`));
})();

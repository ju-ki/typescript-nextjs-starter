import { ApiContext } from "types/data";

const context:ApiContext = {
    apiRootUrl:process.env.NEXT_API_BASE_PATH || "/api/proxy"
}
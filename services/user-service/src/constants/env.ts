const getEnv = (key: string, defaultValue?: string): string => {
    const value = process.env[key] || defaultValue;
    if(!value){
        throw new Error(`Missing environmet variable ${key}`)
    }
    return value
}

export const NODE_ENV = getEnv("NODE_ENV", "development");
export const MONGO_URI = getEnv("MONGO_URI")
export const JWT_SECRET_KEY = getEnv("JWT_SECRET_KEY")